                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}




if(typeof vp=="undefined"){
var vp={};
}





vp.servermanager=function(){};





vp.servermanager.ServerList=function $vpfn_Sji2I5LUok6a2OO5V7AHkg20$30(aUrlList)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.server=null;





var _aServers=[];





this.checkServerLive=function $vpfn_4VIcSZ7HuyeLoQe7dhCqoQ40$27(cbSuccess,cbFailure)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sHost=me.server.hostname;
if(vp.servermanager.isPlantServer(sHost))
{
var startTime=new Date();
var imagePing=new vp.crossdomain.ImagePing
(

function $vpfn_USBvkwJezORcEYO3DRuOrw49$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.crossdomain.safeLogError(Math.random(),
this.hostname+"-"+Math.round(((new Date()).getTime()-this.startTime.getTime())/1000)+"-seconds",
"vp.servermanager.ServerList: image server ping successful",vp.logger.Severity.Information);

vp.servermanager.setServerLive(this.hostname,true);

if(this.cb){this.cb();}

}.getClosure({hostname:sHost,cb:cbSuccess,startTime:startTime}),


function $vpfn_USBvkwJezORcEYO3DRuOrw62$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.crossdomain.safeLogError(Math.random(),
this.hostname+"-"+Math.round(((new Date()).getTime()-this.startTime.getTime())/1000)+"-seconds",
"vp.servermanager.ServerList: failed to ping image server",vp.logger.Severity.Information);

vp.servermanager.setServerLive(this.hostname,false);


me.moveNextServer();

if(this.cb){this.cb();}

}.getClosure({hostname:sHost,cb:cbFailure,startTime:startTime})
);

imagePing.ping("http://"+sHost+"/ping.aspx?r="+Math.random());
}
else
{


cbSuccess();
}
};




this.moveNextServer=function $vpfn_A9q4IeRoF6$g9ST3rGJmpQ91$26()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_aServers.remove(0);
me.server=null;


findNextServer();
};

var findNextServer=function $vpfn_rfnIitRCkEJwxENO2P906g101$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

while(!me.server&&_aServers.length>0)
{
if(vp.servermanager.isServerLive(_aServers[0].hostname))
{
me.server=_aServers[0];
}
else
{
_aServers.remove(0);
}
}
};


if(!aUrlList)
{
throw"vp.servermanager.ServerList: no servers passed!";
}
for(var i=0;i<aUrlList.length;i++)
{
var oUrl=new vp.web.URL(aUrlList[i]);
_aServers.push(oUrl);
}
findNextServer();
};

vp.servermanager.isPlantServer=function $vpfn_PybW5ye9YGWT9rFvExHB7Q130$33(sHost)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sHostLC=sHost.toLowerCase();
return sHostLC.indexOf("vphosted")>=0;
};




vp.servermanager.ServerLiveCache=new Array();
vp.servermanager.ServerLiveCacheTime=300000;

vp.servermanager.isServerLive=function $vpfn_BImBoCoT9jPWiKcxMIx_8w142$32(sHost)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sHostLC=sHost.toLowerCase();
var oNow=new Date();
var oExpire=new Date(oNow.getTime()-vp.servermanager.ServerLiveCacheTime);


var entry=vp.servermanager.ServerLiveCache[sHostLC];
if(entry&&entry.isKnownBad&&entry.lastUpdate&&entry.lastUpdate>oExpire)
{
return false;
}


return true;
};

vp.servermanager.setServerLive=function $vpfn_E8mHbDyt0zrSD0$mU1qrYA159$33(sHost,bIsLive)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sHostLC=sHost.toLowerCase();
var entry=vp.servermanager.ServerLiveCache[sHostLC];


if(!entry)
{
entry={};
vp.servermanager.ServerLiveCache[sHostLC]=entry;
}


entry.isKnownBad=!bIsLive;
entry.lastUpdate=new Date();
};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;



}







if(typeof vp=="undefined")
{
var vp={};
}





if(!vp.upload)
{
vp.upload=function(){};
}









vp.upload.Queue=function $vpfn_JCHy13dW3ePZmphRthVsyQ35$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

var MAX_SIMULTANEOUS_UPLOADS=1;





var _aUploadQueue=new Array();





var _iUploadCounter=0;





var _aUploadsStarted=new Array();





var _aUploadsFinished=new Array();





var _aUploadsCompleted=new Array();





var _aAllUploads=new Array();





var _bIsUploading=false;





var _bIsProcessing=false;





this.onstatuschange=new vp.events.CustomEvent(me,"onstatuschange");





this.onprogress=new vp.events.CustomEvent(me,"onprogress");





var _oProgress=
{
uploadsTotal:0,
uploadsSent:0,
uploadsDone:0,
timeStart:0,
bytesTotal:0,
bytesSending:0,
bytesSent:0
};





this.pushUpload=function $vpfn_X4u54r2ERZuaG1kim0ySEw120$22(oNewUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

oNewUpload.ontransferfinish.addHandler(onUploadFinish);
oNewUpload.oncomplete.addHandler(onUploadComplete);
oNewUpload.ontransferprogress.addHandler(onUploadProgress);


_aUploadQueue.push(oNewUpload);

_aAllUploads.push(oNewUpload);
_iUploadCounter++;


oNewUpload.id=_iUploadCounter;
oNewUpload.initialize();



oNewUpload.presumedSize=estimateUploadSize(oNewUpload);


_oProgress.uploadsTotal++;
_oProgress.bytesTotal+=oNewUpload.presumedSize;
if(_oProgress.timeStart===0)
{
_oProgress.timeStart=(new Date()).getTime();
}


checkQueue();
};




var estimateUploadSize=function $vpfn_aO89CVpejWWyIT5hvtpSqQ156$29(oUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(oUpload.size!=-1)
{
return oUpload.size;
}







var iUploads=0;
var iBytes=0;
for(var i=0;i<_aAllUploads.length;i++)
{
var iSize=_aAllUploads[i].size;
if(iSize>0)
{
iUploads++;
iBytes+=iSize;
}
}
if(iUploads>0)
{
return iBytes/iUploads;
}


return vp.upload.DEFAULT_SIZE_ESTIMATE;
};




var checkStatus=function $vpfn_E5aRXBEeers_WFvsUrWIMA193$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


var bUploading=(_aUploadsStarted.length-_aUploadsFinished.length)>0;
var bProcessing=(_aUploadsFinished.length-_aUploadsCompleted.length)>0;


if(bUploading!=_bIsUploading||bProcessing!=_bIsProcessing)
{

_bIsUploading=bUploading;
_bIsProcessing=bProcessing;


var e={};
e.uploading=bUploading;
e.processing=bProcessing;
me.onstatuschange.fire(e);


if(vp.upload.showDebugInfo)
{
vp.debug.trace("queue status change: uploading="+bUploading+", processing="+bProcessing);
}
}


fireProgressEvent();
};




var checkQueue=function $vpfn_X3Xq6wmK5cFOxvWme2DVvA227$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var iUploadsTransferring=_aUploadsStarted.length-_aUploadsFinished.length;
if(iUploadsTransferring<MAX_SIMULTANEOUS_UPLOADS&&_aUploadQueue.length>0)
{

var startUpload=_aUploadQueue.shift();


_aUploadsStarted.push(startUpload);


checkStatus();


startUpload.start();
}
};





var onUploadFinish=function $vpfn_eOMHZrhi8Andsa2NEegiWQ250$25(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oUpload=e.target;


ensureFinishedQueue(oUpload);


checkStatus();
};





var onUploadComplete=function $vpfn_mir9jVxjJZSpmIrN4Lassw265$27(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oUpload=e.target;

if(e.result&&e.result.cancel)
{

var bStarted=_aUploadsStarted.contains(oUpload);
var bFinished=_aUploadsFinished.contains(oUpload);

if(!bStarted)
{



_aUploadQueue.removeValue(oUpload);


_oProgress.uploadsTotal--;
_oProgress.bytesTotal-=oUpload.presumedSize;
}
else
{



if(!bFinished)
{
_oProgress.bytesTotal-=oUpload.presumedSize;
_oProgress.bytesTotal+=_oProgress.bytesSending;
oUpload.presumedSize=_oProgress.bytesSending;
}


ensureFinishedQueue(oUpload);
ensureCompletedQueue(oUpload);
}
}
else
{

ensureFinishedQueue(oUpload);
ensureCompletedQueue(oUpload);
}


checkStatus();
};






var ensureFinishedQueue=function $vpfn_6ZTyvp9ahmrqlCojYZbwNA319$30(oUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!_aUploadsFinished.contains(oUpload))
{
_aUploadsFinished.push(oUpload);


_oProgress.uploadsSent++;
_oProgress.bytesSending=0;
_oProgress.bytesSent+=oUpload.presumedSize;


checkQueue();
}
};





var ensureCompletedQueue=function $vpfn_Dm8tUrSdOiBqoKo7q3zIjg340$31(oUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!_aUploadsCompleted.contains(oUpload))
{
_aUploadsCompleted.push(oUpload);


_oProgress.uploadsDone++;


if(_oProgress.uploadsDone>=_oProgress.uploadsTotal)
{

_oProgress.uploadsTotal=0;
_oProgress.uploadsSent=0;
_oProgress.uploadsDone=0;
_oProgress.timeStart=0;
_oProgress.bytesTotal=0;
_oProgress.bytesSending=0;
_oProgress.bytesSent=0;
}
}
};





this.cancelAllUploads=function $vpfn_PNQymv2ZUT61IzDH4nTtXA369$28(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


for(var i=_aAllUploads.length;i>0;i--)
{
var oUpload=_aAllUploads[i-1];


if(_aUploadsCompleted.contains(oUpload))
{
continue;
}


oUpload.cancel();
}
};

var fireProgressEvent=function $vpfn_jM0O6CHLUM0dUQJGf0pyOw388$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var e={};


e.uploadsTotal=_oProgress.uploadsTotal;
e.uploadsSent=_oProgress.uploadsSent;
e.uploadsDone=_oProgress.uploadsDone;


e.timeElapsed=(new Date()).getTime()-_oProgress.timeStart;
e.bytesTotal=_oProgress.bytesTotal;
e.bytesSent=_oProgress.bytesSent+_oProgress.bytesSending;


e.sampleUpload=_aAllUploads[0];


me.onprogress.fire(e);
};

var onUploadProgress=function $vpfn_RYtrfuU_qLzDeECYrjwziw409$27(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oUpload=e.target;


_oProgress.bytesSending=e.bytesSent;


fireProgressEvent();
};





var oDialog;
try
{
oDialog=vp.dialog.getCurrent();
}
catch(ex)
{
}

if(oDialog)
{

vp.events.add(window,'unload',me.cancelAllUploads);
}

};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;



}








if(typeof vp=="undefined")
{
var vp={};
}





if(!vp.upload)
{
vp.upload=function(){};
}







vp.upload.pageQueue=new vp.upload.Queue();







vp.upload.managerMap={};







vp.upload.configurationMap={};






vp.upload.progressTemplateIds={};









vp.upload.showDebugInfo=false;
if(document.location.href.indexOf('debugupl=1')>=0)
{
vp.upload.showDebugInfo=true;
}






vp.upload.useFlash=false;






vp.upload.disableFlash=false;
if(document.location.href.indexOf('noflash=1')>=0)
{
vp.upload.disableFlash=true;
}






vp.upload.disableHtml5=false;
if(document.location.href.indexOf('nohtml5=1')>=0)
{
vp.upload.disableHtml5=true;
}






vp.upload.loggedMultiRenderEvent=false;






vp.upload.largeUpload=false;





vp.upload.multiSelectTooltip=null;






vp.upload.ProgressType=
{
Page:1,
Area:2,
Bar:3,
Box:4,
Aggregate:5
};





vp.upload.RepetitionType=
{
Multiple:1,
MultipleCancel:2
};





vp.upload.EmptyInputAction=
{
None:1,
DisableUploadButton:2,
DisplayWarningMessage:3
};


vp.upload.DEFAULT_SIZE_ESTIMATE=1153433;

vp.upload.AggregateProgressBar;








vp.upload.createFileInput=function $vpfn_wYYBQqP6ZMojEZUqUcbmRA169$28(iSize,bBrowseOnly)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var iOpenIdCount=1;
var sOpenIdBase='fileUploadInput';
var sOpenId=sOpenIdBase;
while(vp.ui.get(sOpenId))
{
iOpenIdCount++;
sOpenId=sOpenIdBase+iOpenIdCount.toString();
}

var oFileInput=vp.ui.createNamedElement('input',sOpenId);
oFileInput.type='file';
oFileInput.id=sOpenId;
oFileInput.size=bBrowseOnly?1:iSize;
vp.ui.addClass(oFileInput,sOpenId);


var oInputContainer=document.createElement('span');
oInputContainer.id=sOpenId+"Container";
vp.ui.addClass(oInputContainer,"upload-input");
vp.ui.addClass(oInputContainer,sOpenIdBase+"Container"+iOpenIdCount);

if(bBrowseOnly)
{
if(vp.browser.isIE)
{
vp.ui.addClass(oInputContainer,"upload-input-ie");
}
else if(vp.browser.isGecko)
{
vp.ui.addClass(oInputContainer,vp.browser.OS.isMac?"upload-input-gecko-mac":"upload-input-gecko");
}
else if(vp.browser.isGoogleChrome)
{
vp.ui.addClass(oInputContainer,vp.browser.OS.isMac?"upload-input-chrome-mac":"upload-input-chrome");
}
else if(vp.browser.isSafari)
{
vp.ui.addClass(oInputContainer,vp.browser.OS.isMac?"upload-input-safari-mac":"upload-input-safari");
}
else if(vp.browser.isOpera)
{
vp.ui.addClass(oInputContainer,vp.browser.OS.isMac?"upload-input-opera-mac":"upload-input-opera");
}
else if(vp.browser.isWebKit)
{
vp.ui.addClass(oInputContainer,vp.browser.OS.isMac?"upload-input-chrome-mac":"upload-input-chrome");
}
}

oInputContainer.appendChild(oFileInput);
return oInputContainer;
};










vp.upload.openMyImages=function $vpfn_zJbsgMWG0EB15oyl_qsVSA234$25(fnUploadCallback,fnLogoCallback,fnCaricatureCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oMyImagesUrl=new vp.web.URL("http://"+document.location.hostname+"/vp/ns/myimages.aspx?enable_buttons=false");



var aSearchTypes=new Array();
if(fnUploadCallback)
{
aSearchTypes.push("upload");
oMyImagesUrl.setItem("upload_cbid",vp.win.createCallbackHandler(fnUploadCallback));
}
if(fnLogoCallback)
{
aSearchTypes.push("logo");
oMyImagesUrl.setItem("logo_cbid",vp.win.createCallbackHandler(fnLogoCallback));
}
if(fnCaricatureCallback)
{
aSearchTypes.push("caricature");
oMyImagesUrl.setItem("caric_cbid",vp.win.createCallbackHandler(fnCaricatureCallback));
}
oMyImagesUrl.setItem("search_type",aSearchTypes.join(','));


vp.dialog.IFrameDialog.open(
'myimages',
vp.upload.dialogTitleMyImages,
oMyImagesUrl.toString(),
vp.dialog.chrome.Primary,
595,
400);
};








vp.upload.openLibraryImages=function $vpfn_6Ps9A31qTu9ikDeP_UmPjQ276$30(fnLibraryCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oImageGalleryUrl=new vp.web.URL("/vp/ns/image_library_search.aspx");



var iLibraryCallbackId=vp.win.createCallbackHandler(fnLibraryCallback);
oImageGalleryUrl.setItem("image_cbid",iLibraryCallbackId);

vp.dialog.IFrameDialog.open(
'libraryimages',
vp.upload.dialogTitleImageLibrary,
oImageGalleryUrl.toString(),
vp.dialog.chrome.Primary,
540,
200);
};











vp.upload.openCrop=function $vpfn_vDKLgPhU8MmWbi5kMavKxw305$21(fnCropCallback,iImageId,bIsUpload,oCropInfo,fAspectRatio)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(window.cropDialog)
{
window.cropDialog.changeParameters({
ImageId:iImageId,
ImageType:bIsUpload?1:2,
CropTop:oCropInfo?oCropInfo.top:0,
CropRight:oCropInfo?oCropInfo.right:0,
CropBottom:oCropInfo?oCropInfo.bottom:0,
CropLeft:oCropInfo?oCropInfo.left:0,
AspectRatio:fAspectRatio,
DisableUnlocking:fAspectRatio>0,
HideRotation:true
});
window.cropDialog.open(fnCropCallback);
return;
}

var bContainer=(fAspectRatio)?true:false;


var fnWrappedCallback;
if(bContainer)
{
fnWrappedCallback=function $vpfn_EMNV9yGpiEROA9YVTiydjw331$28(sContainerId,iImageType,iImageId,oCropInfo,oSizeDelta)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.cb(oCropInfo);
}
.getClosure({cb:fnCropCallback});
}
else
{
fnWrappedCallback=function $vpfn_EMNV9yGpiEROA9YVTiydjw339$28(iImageType,iImageId,oCropInfo,fNewAspectRatio)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.cb(oCropInfo);
}
.getClosure({cb:fnCropCallback});
}



var iCropCallbackId=vp.win.createCallbackHandler(fnWrappedCallback);


var oCropUrl=new vp.web.URL("/vp/ns/croptool.aspx");
oCropUrl.setItem(bContainer?"change_handler_id":"add_handler_id",iCropCallbackId);

oCropUrl.setItem("imgId",iImageId);
oCropUrl.setItem("type",bIsUpload?"upload":"image");
if(oCropInfo)
{
oCropUrl.setItem("croptop",oCropInfo.top);
oCropUrl.setItem("cropleft",oCropInfo.left);
oCropUrl.setItem("cropright",oCropInfo.right);
oCropUrl.setItem("cropbottom",oCropInfo.bottom);
}
if(bContainer)
{
oCropUrl.setItem("container_id","anyvalue");
oCropUrl.setItem("container_aspect_ratio",fAspectRatio);
oCropUrl.setItem("hide_maintain_proportions","true");
}



vp.dialog.IFrameDialog.open(
'cropimage',
vp.upload.dialogTitleCropImage,
oCropUrl.toString(),
vp.dialog.chrome.Primary,
bContainer?650:400,
450);
};




vp.upload.hideMultiSelectTip=function $vpfn_nMjUj8iNsS3OzivjtSRf0Q384$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.upload.multiSelectTooltip)
{
vp.upload.multiSelectTooltip.hide();
}
};





vp.upload.showMultiSelectTip=function $vpfn_Gd5Z4pu_ymfXZOE6D8$6Hw396$31(oTipTargetElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(vp.upload.multiSelectTooltip)
{
return;
}


var oTipContentElement=vp.ui.get('divMultiSelectTip');
if(oTipContentElement!==null)
{

if(navigator.platform.toLowerCase().indexOf('mac')!==-1)
{
$(oTipContentElement).find(".mac-image").show();
$(oTipContentElement).find(".upload-multiple-tooltip-key-name").html("Command");
}

else
{
$(oTipContentElement).find(".pc-image").show();
$(oTipContentElement).find(".upload-multiple-tooltip-key-name").html("Ctrl");
}


if(!vp.upload.multiSelectTooltip)
{
var oTooltip=new vp.widget.RichTooltip(oTipTargetElement,oTipContentElement);
oTooltip.skin=vp.widget.RichTooltip.skins.Message;
oTooltip.fadetime=0;
oTooltip.setBehavior(window.TOOLTIP_BEHAVIOR_HIDE_CUSTOM);





vp.upload.multiSelectTooltip=oTooltip;
}

if(oTipTargetElement)
{
vp.upload.multiSelectTooltip.element=oTipTargetElement;
}


var fnShow=function $vpfn_JzHdh9qh8v98pYfN5951xg442$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.upload.multiSelectTooltip.show({});
};

setTimeout(fnShow,0);
}
};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;



}









if(typeof vp=="undefined")
{
var vp={};
}





if(!vp.upload)
{
vp.upload=function(){};
}







vp.upload.Upload=function $vpfn_6nA9ceUA318rEgzl3SKKLQ35$19(oManager,sFilePath)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.manager=oManager;





this.id=-1;





this.filePath=sFilePath;






this.fileClientName=null;





this.fid=vp.upload.serverGuid+"."+Math.random();





this.transferring=false;





this.cancelled=false;





this.oninit=new vp.events.CustomEvent(me,"oninit");





this.ontransferstart=new vp.events.CustomEvent(me,"ontransferstart");





this.ontransferprogress=new vp.events.CustomEvent(me,"ontransferprogress");





this.ontransferfinish=new vp.events.CustomEvent(me,"ontransferfinish");






this.oncomplete=new vp.events.CustomEvent(me,"oncomplete");






this.size=-1;


var _oTestTimer;




this.initialize=function $vpfn_5Xt93lgreKk1cUUx0OGLPg126$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.oninit.fire();
};




this.start=function $vpfn_UOdbjzIbNPx1zOf8vCKobg134$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var finishFn=function $vpfn_izauqX$lBi4Z60QijRcK6Q137$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.upl.ontransferfinish.fire();
this.upl.oncomplete.fire();
}
.getClosure({upl:me});
_oTestTimer=setTimeout(finishFn,10000);

me.ontransferstart.fire();
};




this.cancel=function $vpfn_Bp6zrOyNUO8QkHLfRiagWw151$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

clearTimeout(_oTestTimer);

me.cancelled=true;
me.fireCancelEvent();
};





this.fireCancelEvent=function $vpfn_m6AncTNglB7rER_gZXhAsQ164$27()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var e={};
e.result={};
e.result.cancel=true;
me.oncomplete.fire(e);
};






this.fireErrorEvent=function $vpfn_vdhIt57TDbJiouv3DdAnhA177$26(oResult)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!oResult)
{
oResult=vp.upload.resultErrorGeneral;
}

me.fireCompleteEvent(oResult);
};

this.fireCompleteEvent=function $vpfn_$0VLmYabQ1OnOs3k1ZrxpA188$29(oResult)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.updateResultWithErrorOverride(oResult);


var e={};
e.result=oResult;
me.oncomplete.fire(e);
};

this.parseProcessingResponse=function $vpfn_MAJKssKAQsyjuLiuEh40uA198$35(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oResponse;
try
{
if(typeof sResponse==="string")
{
oResponse=vp.http.parseJSON(sResponse);
}
else
{
oResponse=sResponse;
}
}catch(ex){}


if(oResponse)
{
if(oResponse.success&&oResponse.success.images)
{



var aImages=oResponse.success.images;
for(var i=0;i<aImages.length;i++)
{
aImages[i]=vp.image.parseJSON(aImages[i]);
}


if(vp&&vp.image&&vp.image.search)
{
vp.image.search.clearCache(vp.image.search.Type.Upload);
}
}


me.fireCompleteEvent(oResponse);
}
else
{
if(vp.upload.showDebugInfo)
{
alert("no processing response: "+me.fid);
}

vp.logger.logError(Math.random(),me.fid,"vp.upload.Upload: no processing response",vp.logger.Severity.Error);


me.fireErrorEvent();
}
};

this.updateResultWithErrorOverride=function $vpfn_jKh4His$MV_2KWWolGA_$g252$41(oResult)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(oResult.error&&oResult.error.code&&
me.manager.configuration.errorCodeOverrides)
{

var errorMessageId=me.manager.configuration.errorCodeOverrides[oResult.error.code.toString()];
if(errorMessageId)
{
oResult.error.errorData=me.manager.configuration.errorDataOverrides[errorMessageId.toString()];
}
}
};





this.getFileName=function $vpfn_HR4eAsTw3licGkW1AWSVug272$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fileName=me.filePath.trim();
var lastSlashIndex=Math.max(fileName.lastIndexOf('/'),fileName.lastIndexOf('\\'));
if(lastSlashIndex>=0)
{
fileName=fileName.substring(lastSlashIndex+1);
}


return fileName;
};

this.logFailoverEvent=function $vpfn_er1GEZD_aFwYOkNbOkrGZQ285$28(sImplementation)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.logger.logError(Math.random(),sImplementation,"vp.upload.upload: client-side image failover invoked",vp.logger.Severity.Warning);
};

};






vp.upload.IFrameUploads=new Array();











vp.upload.IFrameUpload=function $vpfn_IM5jqVjSicFYzqjx8cU4gg309$25(oManager,sFilePath,oForm,sPostQueryString)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Upload;
this.inheritFrom(oManager,sFilePath);





var _oServers=new vp.servermanager.ServerList(vp.upload.postUrls);





var _oIFrameWrapper=new vp.crossdomain.IFrameWrapper();





var _oForm=oForm;





var _sPostQueryString=sPostQueryString;





var _oProgressTracker=null;





var _oSmoothProgressTracker=null;




this.initialize=function $vpfn_5Xt93lgreKk1cUUx0OGLPg359$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_oForm.encoding="multipart/form-data";


vp.upload.IFrameUploads[me.id]=me;


me.oninit.fire();
};

this.getTrackUrlFromPostUrl=function $vpfn_YeBcR6Q8k6N2YNuiaxzGNg371$34(oPostUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var sPostHost=oPostUrl.hostname.toLowerCase();
var iPostIdx=-1;
for(var i=0;i<vp.upload.postUrls.length;i++)
{
if(vp.upload.postUrls[i].toLowerCase().indexOf(sPostHost)>=0)
{
iPostIdx=i;
break;
}
}


return vp.upload.trackUrls[iPostIdx];
};




this.start=function $vpfn_UOdbjzIbNPx1zOf8vCKobg392$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.startUpload();
};

this.startUpload=function $vpfn_ae_YjIn3J3YG26PrlnhJag398$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.cancelled)
{
return;
}


if(!_oServers.server)
{

onFinalTransferError();
return;
}


var oPostUrl=new vp.web.URL(_oServers.server);
oPostUrl.setItem("api",true);
oPostUrl.setItem("type","iframe");
oPostUrl.setItem("fv",vp.upload.FlashVersion.string);
oPostUrl.setItem("fid",me.fid);
oPostUrl.setItem("id",me.id);

var api=vp.upload.HTML5Enabled.FileAPI;
var dnd=vp.upload.HTML5Enabled.DragAndDrop;
var xhr2=vp.upload.HTML5Enabled.XHR2;
oPostUrl.setItem("fileAPI",api);
oPostUrl.setItem("dnd",dnd);
oPostUrl.setItem("xhr2",xhr2);

if(vp.upload.largeUpload)
{
oPostUrl.setItem("lu",1);
}

if(me.fileClientName)
{
oPostUrl.setItem("file_client_name",me.fileClientName);
}

try
{

me.transferring=true;
_oIFrameWrapper.sendFormAsync(new vp.web.URL(oPostUrl.toString()+_sPostQueryString),_oForm,onTransferSuccess,onTransferError);


_oSmoothProgressTracker=new vp.upload.tracking.SmoothUploadTracker(onProgressStart,onProgressSmooth,onProgressFinish);


_oProgressTracker=new vp.upload.tracking.UploadTracker(
me.getTrackUrlFromPostUrl(_oServers.server),
me.fid,
function $vpfn_izauqX$lBi4Z60QijRcK6Q452$16(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}_oSmoothProgressTracker.setStarting.apply(this,arguments);},
function $vpfn_izauqX$lBi4Z60QijRcK6Q453$16(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}_oSmoothProgressTracker.setProgress.apply(this,arguments);},
function $vpfn_izauqX$lBi4Z60QijRcK6Q454$16(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}_oSmoothProgressTracker.setComplete.apply(this,arguments);}
);
}
catch(ex)
{




me.transferring=false;

stopPost();

vp.logger.logError(Math.random(),me.filePath,"vp.upload.IFrameUpload: submit failed",vp.logger.Severity.Information);

me.fireErrorEvent(vp.upload.resultErrorBadPath);
}



};




this.cancel=function $vpfn_Bp6zrOyNUO8QkHLfRiagWw479$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.transferring)
{
me.manager.logCancel(me);
me.transferring=false;
}
me.cancelled=true;


stopPost();

me.fireCancelEvent();
};




var onTransferSuccess=function $vpfn_mEopkkv5Ko94ZM4zEVxdfw498$28(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.transferring=false;


stopPost();


me.parseProcessingResponse(sResponse);
};




var stopPost=function $vpfn_ZD4lqudDF7Llttqvyy8S7A513$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(_oProgressTracker)
{
_oProgressTracker.cancel();
}
if(_oSmoothProgressTracker)
{
_oSmoothProgressTracker.cancel();
}


_oIFrameWrapper.cancel();
};





var onTransferError=function $vpfn_4Q5LPnSZkCQ64EFSeiqfPA533$26(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.upload.showDebugInfo)
{
alert("iframe error: "+me.id);
}

if(!vp.upload.loggedSendError)
{
vp.upload.loggedSendError=true;
vp.logger.logError(Math.random(),me.fid,"vp.upload.IFrameUpload: iFrame error",vp.logger.Severity.Error);
}


stopPost();


_oServers.checkServerLive
(

onFinalTransferError,


function $vpfn_izauqX$lBi4Z60QijRcK6Q556$12()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oServers.server){me.logFailoverEvent("vp.upload.IFrameUpload");}
me.startUpload();
}
);
};




var onFinalTransferError=function $vpfn_H4jK4P__NPwVXAYZvk$8Gg567$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.transferring=false;


me.fireErrorEvent();
};





var onProgressStart=function $vpfn_Iqyx2EQhnq8PfXvRMvC2Xg579$26(iTotalFileSize)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.size=iTotalFileSize;


me.ontransferstart.fire
({
totalFileSize:iTotalFileSize
});
};






var onProgressSmooth=function $vpfn_jF6gJo1SQVqxw16N3YDctQ596$27(iSentBytes,iElapsedMs)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.ontransferprogress.fire
({
bytesSent:iSentBytes,
msElapsed:iElapsedMs
});
};





var onProgressFinish=function $vpfn_Yb1Kz9E3g8dFal4KdmAa2A610$27(bError)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(_oProgressTracker)
{
_oProgressTracker.cancel();
}


me.ontransferfinish.fire();
};
};










vp.upload.HTML5Upload=function $vpfn_zWCHhA8SJKSgiUruuZzRZg632$24(oManager,oFile,oFormData,sPostQueryString)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;




this.inheritFrom=vp.upload.Upload;
this.inheritFrom(oManager,oFile.name);





this.size=oFile.size;





this.file=oFile;





var _oServers=new vp.servermanager.ServerList(vp.upload.postUrls);





var _sPostQueryString=sPostQueryString;





var _oFormData=oFormData;





var _oXhr=null;





var _oSmoothProgressTracker=null;


var _iStartBytes=0;
var _iStartTime=0;




this.initialize=function $vpfn_5Xt93lgreKk1cUUx0OGLPg691$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.oninit.fire();
};





var onUploadComplete=function $vpfn_RPNgp1LuGVDWQWjVmbkBBg701$27(evt)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_oSmoothProgressTracker.cancel();


me.transferring=false;

if(evt.target.status==200)
{

me.parseProcessingResponse(evt.target.response);
}
else
{

me.fireErrorEvent();
}
};




var onUploadFailed=function $vpfn_0yxbCgCvUlt5YncohunWgw724$25(evt)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!vp.upload.loggedHtml5UploadError)
{
vp.upload.loggedHtml5UploadError=true;
vp.logger.logError(Math.random(),me.fid,"vp.upload.Html5Upload: upload error",vp.logger.Severity.Error);
}


stopPost();


_oServers.checkServerLive
(

onFinalTransferError,


function $vpfn_izauqX$lBi4Z60QijRcK6Q743$12()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oServers.server){me.logFailoverEvent("vp.upload.Html5Upload");}
me.startUpload();
}
);
};




var onFinalTransferError=function $vpfn_H4jK4P__NPwVXAYZvk$8Gg754$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.transferring=false;


me.fireErrorEvent();
};




var stopPost=function $vpfn_ZD4lqudDF7Llttqvyy8S7A766$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(_oSmoothProgressTracker)
{
_oSmoothProgressTracker.cancel();
}


if(_oXhr)
{
_oXhr.abort();
}
};




this.cancel=function $vpfn_Bp6zrOyNUO8QkHLfRiagWw784$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.transferring)
{
me.manager.logCancel(me);
me.transferring=false;
}
me.cancelled=true;


stopPost();

me.fireCancelEvent();
};





this.start=function $vpfn_UOdbjzIbNPx1zOf8vCKobg804$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.size===0)
{
me.fireErrorEvent(vp.upload.resultErrorNoFile);
return;
}
if(me.size>vp.upload.maxFileSize)
{
me.fireErrorEvent(vp.upload.resultErrorTooLarge);
return;
}


me.startUpload();
};

this.startUpload=function $vpfn_ae_YjIn3J3YG26PrlnhJag822$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.cancelled)
{
return;
}


if(!_oServers.server)
{

onFinalTransferError();
return;
}


var oPostUrl=new vp.web.URL(_oServers.server);
oPostUrl.setItem("api",true);
oPostUrl.setItem("type","html5");
oPostUrl.setItem("fid",me.fid);
oPostUrl.setItem("id",me.id);


oPostUrl.setItem("fv",vp.upload.FlashVersion.string);
var api=vp.upload.HTML5Enabled.FileAPI;
var dnd=vp.upload.HTML5Enabled.DragAndDrop;
var xhr2=vp.upload.HTML5Enabled.XHR2;
oPostUrl.setItem("fileAPI",api);
oPostUrl.setItem("dnd",dnd);
oPostUrl.setItem("xhr2",xhr2);

if(vp.upload.largeUpload)
{
oPostUrl.setItem("lu",1);
}

if(me.fileClientName)
{
oPostUrl.setItem("file_client_name",me.fileClientName);
}


var sCookieSessionId=vp.cookies.getSubValue("SITE","S");
var iCookieSessionId=vp.core.getNumber(parseInt(sCookieSessionId),0);
if(iCookieSessionId>0)
{
oPostUrl.setItem("cdsession",iCookieSessionId);
}


_oFormData.append("cdcookies",document.cookie);


_oSmoothProgressTracker=new vp.upload.tracking.SmoothUploadTracker(onProgressStart,onProgressSmooth,onProgressFinish);


_oXhr=new XMLHttpRequest();
_oXhr.addEventListener("load",onUploadComplete,false);
_oXhr.addEventListener("error",onUploadFailed,false);
_oXhr.upload.addEventListener("load",onProgressFinish,false);
_oXhr.upload.addEventListener("progress",onProgressChunky,false);


var sPostUrl=oPostUrl.toString()+_sPostQueryString;
_oXhr.open('POST',sPostUrl,true);
_oXhr.withCredentials=true;
_oXhr.responseType='text';


me.transferring=true;
_oXhr.send(_oFormData);


_iStartTime=(new Date()).getTime();
};





var onProgressStart=function $vpfn_Iqyx2EQhnq8PfXvRMvC2Xg903$26(iTotalFileSize)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.ontransferstart.fire
({
totalFileSize:me.size
});
};





var onProgressChunky=function $vpfn_TM9dR7Gbxg_NkN6t2ipkuw916$27(evt)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!evt.lengthComputable)
{
return;
}


var iBytesTotal=evt.totalSize||evt.total;
var iBytesLoaded=evt.position||evt.loaded;








if(!_iStartBytes)
{

_iStartBytes=iBytesLoaded;


_oSmoothProgressTracker.setStarting(iBytesTotal);
}


var iBytesAdjusted=iBytesLoaded-_iStartBytes;
_oSmoothProgressTracker.setProgress(iBytesAdjusted);


if(vp.upload.showDebugInfo)
{
var iElapsedMs=(new Date()).getTime()-_iStartTime;
vp.debug.trace('upload progress: '+iBytesTotal+' - '+iBytesLoaded+' - '+(iBytesLoaded-_iStartBytes)+' - ms: '+iElapsedMs);
}
};






var onProgressSmooth=function $vpfn_jF6gJo1SQVqxw16N3YDctQ961$27(iSentBytes,iElapsedMs)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.ontransferprogress.fire
({
bytesSent:iSentBytes,
msElapsed:iElapsedMs
});
};





var onProgressFinish=function $vpfn_Yb1Kz9E3g8dFal4KdmAa2A975$27(bError)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_oSmoothProgressTracker.cancel();


me.ontransferfinish.fire();
};
};







vp.upload.FlashUploads=new Array();












vp.upload.FlashUpload=function $vpfn_5nK9qrrJACeMWmmciwx8fw1004$24(oManager,sFilePath,iFileSize,oMovie,iMovieUploadId,sPostQueryString)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Upload;
this.inheritFrom(oManager,sFilePath);





this.size=iFileSize;





var _oServers=new vp.servermanager.ServerList(vp.upload.postUrls);





var _oIFrameWrapper=new vp.crossdomain.IFrameWrapper();





this.processing=false;




this.initialize=function $vpfn_5Xt93lgreKk1cUUx0OGLPg1042$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.upload.FlashUploads[me.id]=me;


try
{

oMovie.registerUpload(iMovieUploadId,me.id);


me.oninit.fire();
}
catch(ex)
{

if(!vp.upload.loggedRegisterError)
{
vp.upload.loggedRegisterError=true;
vp.logger.logError(Math.random(),vp.upload.FlashVersion.string,"vp.upload.FlashUpload: movie.register failed",vp.logger.Severity.Error);
}


me.fireErrorEvent();
}
};




this.start=function $vpfn_UOdbjzIbNPx1zOf8vCKobg1073$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.size===0)
{
me.fireErrorEvent(vp.upload.resultErrorNoFile);
return;
}
if(me.size>vp.upload.maxFileSize)
{
me.fireErrorEvent(vp.upload.resultErrorTooLarge);
return;
}


me.startUpload();
};

this.startUpload=function $vpfn_ae_YjIn3J3YG26PrlnhJag1091$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.cancelled)
{
return;
}


if(!_oServers.server)
{

onFinalTransferError();
return;
}


var oPostUrl=new vp.web.URL(_oServers.server);
oPostUrl.setItem("api",true);
oPostUrl.setItem("type","flash");
oPostUrl.setItem("fv",vp.upload.FlashVersion.string);
oPostUrl.setItem("fid",me.fid);
oPostUrl.setItem("id",me.id);
oPostUrl.setItem("onlyupload",true);

var api=vp.upload.HTML5Enabled.FileAPI;
var dnd=vp.upload.HTML5Enabled.DragAndDrop;
var xhr2=vp.upload.HTML5Enabled.XHR2;
oPostUrl.setItem("fileAPI",api);
oPostUrl.setItem("dnd",dnd);
oPostUrl.setItem("xhr2",xhr2);

if(vp.upload.largeUpload)
{
oPostUrl.setItem("lu",1);
}

if(me.fileClientName)
{
oPostUrl.setItem("file_client_name",me.fileClientName);
}


var sCookieSessionId=vp.cookies.getSubValue("SITE","S");
var iCookieSessionId=vp.core.getNumber(parseInt(sCookieSessionId),0);
if(iCookieSessionId>0)
{
oPostUrl.setItem("cdsession",iCookieSessionId);
}


try
{
me.transferring=true;
if(!oMovie.startUpload(iMovieUploadId,oPostUrl.toString()+sPostQueryString))
{
throw"Flash upload start failed";
}
}
catch(ex)
{

me.transferring=false;


if(!vp.upload.loggedStartError)
{
vp.upload.loggedStartError=true;
vp.logger.logError(Math.random(),vp.upload.FlashVersion.string,"vp.upload.FlashUpload: movie.start failed",vp.logger.Severity.Error);
}


me.fireErrorEvent();
}

};




this.cancel=function $vpfn_Bp6zrOyNUO8QkHLfRiagWw1171$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.cancelled)
{
return;
}



me.cancelled=true;


if(me.transferring||me.processing)
{
me.manager.logCancel(me);
}


if(me.transferring)
{

try
{
oMovie.cancelUpload(iMovieUploadId);
}
catch(ex)
{
vp.logger.logError(Math.random(),vp.upload.FlashVersion.string,"vp.upload.FlashUpload: movie.cancel failed",vp.logger.Severity.Information);
}
}
else if(me.processing)
{
_oIFrameWrapper.cancel();
}

me.fireCancelEvent();
};




this.onTransferSuccess=function $vpfn_cI_Fb6OvJIJuFPNtgobrsA1213$29()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.cancelled)
{
return;
}
me.transferring=false;
me.processing=true;


me.ontransferfinish.fire();


var oProcessUrl=new vp.web.URL(_oServers.server);
oProcessUrl.setItem("api",true);
oProcessUrl.setItem("type","flash");
oProcessUrl.setItem("fv",vp.upload.FlashVersion.string);
oProcessUrl.setItem("fid",me.fid);
oProcessUrl.setItem("id",me.id);
oProcessUrl.setItem("onlyprocess",true);


_oIFrameWrapper.postAsync(new vp.web.URL(oProcessUrl.toString()+sPostQueryString),onProcessSuccess,onProcessError);
};

var onProcessSuccess=function $vpfn_DFVq$uja7ZTVcB7VVIOUCg1238$27(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.cancelled)
{
return;
}
me.processing=false;


me.parseProcessingResponse(sResponse);
};

var onProcessError=function $vpfn_3$wr4YG7QCnYXX3q6tuTRg1250$25(oError)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.cancelled)
{
return;
}
me.processing=false;

if(vp.upload.showDebugInfo)
{
alert("processing request error: "+oError.toString());
}

vp.logger.logError(Math.random(),oError.toString(),"vp.upload.FlashUpload: processing request error",vp.logger.Severity.Error);


me.fireErrorEvent();
};






this.onTransferError=function $vpfn_DiGJGuoTGa8d6zKafJ6zvw1274$27(sErrorDescription,bCanRetryHost)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.cancelled)
{
return;

}

if(vp.upload.showDebugInfo)
{
alert("transfer error: "+sErrorDescription);
}


if(!vp.upload.loggedTransferError)
{
vp.upload.loggedTransferError=true;
vp.logger.logError(Math.random(),me.fid,"vp.upload.FlashUpload: file transfer error: "+sErrorDescription,vp.logger.Severity.Error);
}





_oServers.checkServerLive
(

onFinalTransferError,


function $vpfn_izauqX$lBi4Z60QijRcK6Q1304$12()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oServers.server){me.logFailoverEvent("vp.upload.FlashUpload");}
me.startUpload();
}
);
};




var onFinalTransferError=function $vpfn_H4jK4P__NPwVXAYZvk$8Gg1315$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.transferring=false;


me.ontransferfinish.fire();


me.fireErrorEvent();
};

var transferStarted=false;







this.onTransferProgress=function $vpfn_GxoIiajT_O9INlZZ67Zt2g1334$30(iSentBytes,iTotalBytes,iElapsedMs)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!transferStarted)
{
transferStarted=true;




me.ontransferstart.fire
({
totalFileSize:me.size
});
}


me.ontransferprogress.fire
({
bytesSent:iSentBytes,
msElapsed:iElapsedMs
});
};
};








vp.upload.PartnerFileDownload=function $vpfn_o5cR2MtCITt63YmjE25OLA1366$32(oManager,sPartnerFileId,bIsReseller,iImageIndex)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Upload;
this.inheritFrom(oManager,"");





this.size=0;




this.cancel=function $vpfn_Bp6zrOyNUO8QkHLfRiagWw1386$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.cancelled=true;
me.fireCancelEvent();
};




this.start=function $vpfn_UOdbjzIbNPx1zOf8vCKobg1395$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.cancelled)
{
return;
}


var oUrl=new vp.web.URL(vp.upload.partnerFetchUrl);
oUrl.setItem("pid",sPartnerFileId);
oUrl.setItem("pidx",(iImageIndex||0).toString());
oUrl.setItem("reseller",bIsReseller?"1":"0");


vp.http.getAsync(oUrl.toString(),onProcessSuccess,onProcessError);


me.ontransferfinish.fire();




};

var onProcessSuccess=function $vpfn_DFVq$uja7ZTVcB7VVIOUCg1420$27(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.cancelled)
{
return;
}


me.parseProcessingResponse(sResponse);
};

var onProcessError=function $vpfn_3$wr4YG7QCnYXX3q6tuTRg1431$25(oError)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.cancelled)
{
return;
}


me.fireErrorEvent();
};

};








vp.upload.FromExternalUrlUpload=function $vpfn_JTnbCxz2iJ4uHhkrgkeEyg1451$34(oManager,oSourceData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Upload;
this.inheritFrom(oManager,oSourceData.fileName);

this.oSourceData=oSourceData;





this.size=0;





var _oServers=new vp.servermanager.ServerList(vp.upload.pullUrls);





var _oIFrameWrapper=new vp.crossdomain.IFrameWrapper();




this.initialize=function $vpfn_5Xt93lgreKk1cUUx0OGLPg1485$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.oninit.fire();
};




this.start=function $vpfn_UOdbjzIbNPx1zOf8vCKobg1494$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.cancelled)
{
return;
}



me.manager.requestStart(me);
};




this.internalStart=function $vpfn_C4o81jNl0voQh$dARmw_mA1510$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.startDownload();
};

this.startDownload=function $vpfn_LbcHU_$yrXDQTmhrsDIC4Q1515$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}



if(!_oServers.server)
{

onFinalTransferError();
return;
}


var oPostUrl=new vp.web.URL(_oServers.server);
oPostUrl.setItem("api",true);
oPostUrl.setItem("type","thirdparty");
oPostUrl.setItem("fid",me.fid);
oPostUrl.setItem("id",me.id);
oPostUrl.setItem("source",2);

if(vp.upload.largeUpload)
{
oPostUrl.setItem("lu",1);
}


oPostUrl.setItem("url",oSourceData.url);
oPostUrl.setItem("url_hash",oSourceData.hash);
oPostUrl.setItem("external_image_source",oSourceData.source);
oPostUrl.setItem("external_image_identifier",oSourceData.identifier);
oPostUrl.setItem("uploadfilename",oSourceData.uploadfilename);

try
{

me.transferring=true;


_oIFrameWrapper.postAsync(new vp.web.URL(oPostUrl.toString()+me.manager.configuration.postQS),onTransferSuccess,onTransferError);
}
catch(ex)
{

_oIFrameWrapper.cancel();

vp.logger.logError(Math.random(),me.filePath,"vp.upload.FromExternalUrlUpload: set URL failed",vp.logger.Severity.Information);

me.fireErrorEvent(vp.upload.resultErrorBadPath);
}


me.ontransferfinish.fire();
};

var onTransferError=function $vpfn_4Q5LPnSZkCQ64EFSeiqfPA1569$26(oErr)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.logger.logError(Math.random(),me.fid,"vp.upload.FromExternalUrlUpload: (request error) "+oErr.toString(),vp.logger.Severity.Information);


_oServers.checkServerLive
(

onFinalTransferError,


function $vpfn_izauqX$lBi4Z60QijRcK6Q1581$12()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oServers.server){me.logFailoverEvent("vp.upload.FromExternalUrlUpload");}
me.startDownload();
}
);
};




this.cancel=function $vpfn_Bp6zrOyNUO8QkHLfRiagWw1592$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.transferring)
{
me.manager.logCancel(me);
me.transferring=false;
}
me.cancelled=true;


_oIFrameWrapper.cancel();

me.fireCancelEvent();
};




var onTransferSuccess=function $vpfn_mEopkkv5Ko94ZM4zEVxdfw1611$28(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.transferring=false;


me.parseProcessingResponse(sResponse);
};




var onFinalTransferError=function $vpfn_H4jK4P__NPwVXAYZvk$8Gg1623$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.transferring=false;


me.fireErrorEvent();
};
};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;



}










vp.define("vp.upload");






vp.upload.Progress=function $vpfn_skrQrGLUywbmJcm2LScABA23$21(iMaxUploads)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





var _aUploads=[];





var _iMaxUploads=iMaxUploads;





this.attachUpload=function $vpfn_svLPIrERL_29SdiOziexpg43$24(oUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_iMaxUploads>0&&_iMaxUploads<=_aUploads.length)
{

var oOldestUpload=_aUploads.shift();
oOldestUpload.oninit.removeHandler(me.onUploadInit);
oOldestUpload.ontransferstart.removeHandler(me.onUploadStart);
oOldestUpload.ontransferprogress.removeHandler(me.onUploadProgress);
oOldestUpload.ontransferfinish.removeHandler(me.onUploadFinish);
oOldestUpload.oncomplete.removeHandler(me.onUploadComplete);
}

_aUploads.push(oUpload);

oUpload.oninit.addHandler(me.onUploadInit);
oUpload.ontransferstart.addHandler(me.onUploadStart);
oUpload.ontransferprogress.addHandler(me.onUploadProgress);
oUpload.ontransferfinish.addHandler(me.onUploadFinish);
oUpload.oncomplete.addHandler(me.onUploadComplete);
};




this.reset=function()
{

};





this.onUploadInit=function(e)
{

};





this.onUploadStart=function(e)
{

};





this.onUploadProgress=function(e)
{

};





this.onUploadFinish=function(e)
{

};





this.onUploadComplete=function(e)
{

};
};






vp.upload.ProgressDebugger=function $vpfn_jAMUKh8YKbX_TQtoJCDJgg124$29()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Progress;
this.inheritFrom(0);





this.onUploadInit=function $vpfn_Vro6Vp1DYx44B3aL_f_Zew139$24(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.debug.trace(e.target.id+", "+e.target.fid+": init");
};





this.onUploadStart=function $vpfn_fyq7hCH5e8aVuokkSnlrkQ148$25(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.debug.trace(e.target.id+", "+e.target.fid+": start ... size: "+e.totalFileSize);
};





this.onUploadProgress=function $vpfn_8kLDsU3I8jxRZkokW7LqSA157$28(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.debug.trace(e.target.id+", "+e.target.fid+": progress ... bytesSent: "+e.bytesSent+" msElapsed: "+e.msElapsed);
};





this.onUploadFinish=function $vpfn_UIymPpJXSpl9QpM50o_6cw166$26(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.debug.trace(e.target.id+", "+e.target.fid+": finish");
};





this.onUploadComplete=function $vpfn_CX_Q1oIBbtcwcJS2x$STYg175$28(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(e.result&&e.result.cancel)
{
vp.debug.trace(e.target.id+", "+e.target.fid+": cancel");
}
else if(e.result&&e.result.error)
{
vp.debug.trace(e.target.id+", "+e.target.fid+": error");
}
else if(e.result&&e.result.success)
{
vp.debug.trace(e.target.id+", "+e.target.fid+": complete");
}
};
};









vp.upload.ProgressFinalizer=function $vpfn_ILArx1KMoYxszfBnowhVwQ200$30(fnSuccessCB,fnFailureCB,sSuccessUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Progress;
this.inheritFrom(0);





var _fnSuccessCB=fnSuccessCB;





var _fnFailureCB=typeof fnFailureCB!="undefined"?fnFailureCB:fnSuccessCB;





var _sSuccessUrl=sSuccessUrl;





this.onUploadComplete=function $vpfn_CX_Q1oIBbtcwcJS2x$STYg233$28(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var uploadResult=e.result;
if(!uploadResult)
{

return;
}

if(uploadResult.cancel)
{


}
else if(uploadResult.error)
{
if(_fnFailureCB)
{
_fnFailureCB(uploadResult);
}
else
{

vp.upload.showErrorDialog(uploadResult);
}
}
else if(uploadResult.success)
{
if(_fnSuccessCB)
{
_fnSuccessCB(uploadResult);
}
else if(_sSuccessUrl&&_sSuccessUrl.length>0)
{
if(_sSuccessUrl.indexOf('?')<0)
{
_sSuccessUrl+='?';
}



var uploadedImages=uploadResult.success.images;
var bHavePhoto=uploadedImages&&uploadedImages.length>0&&uploadedImages[0].isPhoto;
var bNoPhotos=false;
if(window.Editor&&window.Editor.photosUploadSupportedFeatures)
{
bNoPhotos=!window.Editor.photosUploadSupportedFeatures.allowPhotoUploads;
}

if(bNoPhotos&&bHavePhoto)
{
var dialog=vp.dialog.get("photosNotAllowedErrorDialog");
if(dialog)
{
dialog.open();
}
}
else
{
var queryString;
if(uploadResult.success.queryString!==undefined)
{
queryString=uploadResult.success.queryString;
}
else
{
queryString="&uploadedImageID={0}&uid={0}".format(uploadResult.success.images[0].id);
}
document.location.assign(_sSuccessUrl+queryString);
}
}
}
};
};







vp.upload.ProgressInitializer=function $vpfn__NNQtql3cMNj0zC4fdUN7Q314$32(fnInitCB)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Progress;
this.inheritFrom(0);





var _fnInitCB=fnInitCB;





this.onUploadInit=function $vpfn_Vro6Vp1DYx44B3aL_f_Zew335$24(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_fnInitCB(e.target);
};
};

vp.upload.Html5PreviewQueue=function $vpfn_24JV3gh2KPP_vXQw36IHUg341$30()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.touched=false;

var initialized=false;
var pendingImages;
var image;
var fileReader;
var imageInUse=false;
var lastPreviewThumbnail;
var errorLogged=false;

var onError=function $vpfn_nXD0j4akSQK125MhaEd2nA353$18(errorFunction,message)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!errorLogged)
{
vp.logger.logError(Math.random(),errorFunction,message,vp.logger.Severity.Warning);
errorLogged=true;
}

loadNextRequest();
};

var init=function $vpfn_eTy8YK8TANxqhV8nnqtVPg364$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(initialized)
{

return;
}
initialized=true;
pendingImages=new Array();

image=new Image();
image.onabort=onError.bind(image,"Image.onabort","vp.upload.Html5PreviewQueue: image load aborted");
image.onerror=onError.bind(image,"Image.onerror","vp.upload.Html5PreviewQueue: image load errored");

fileReader=new window.FileReader();
fileReader.onabort=onError.bind(fileReader,"FileReader.onabort","vp.upload.Html5PreviewQueue: read file aborted");
fileReader.onerror=onError.bind(fileReader,"FileReader.onerror","vp.upload.Html5PreviewQueue: read file errored");
};

this.requestPreview=function $vpfn_xOKEOu1B2e41myAjrbkQWA383$26(path,$container)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
init();

if(!imageInUse)
{
loadPreview(path,$container);
}else
{
pendingImages.push({path:path,container:$container});
}
};

var loadNextRequest=function $vpfn_5Zfg9p0oMcvZ3$a1DNYNdg396$26()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
imageInUse=false;
if(pendingImages.length>0)
{
var nextImage=pendingImages.pop();
loadPreview(nextImage.path,nextImage.container);
}
};

var insertImageThumbnail=function $vpfn_wR5_KbXo3fLyGCgJqiOONw406$31($location)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if($location.find('.HTML5').length===0)
{
var newImage=new Image();
newImage.src=lastPreviewThumbnail;




$location.append(newImage).wrapInner('<div class="HTML5"/>');
}
loadNextRequest();
};

var onImageLoad=function $vpfn_ayQmVnmwbSc4vY7lXTwBNg422$22($location,event)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var maxWidth=80;
var maxHeight=50;


var width=this.width;
var height=this.height;


if(width>maxWidth)
{
height=height*(maxWidth/width);
width=maxWidth;
}


if(height>maxHeight)
{
width=width*(maxHeight/height);
height=maxHeight;
}


var canvas=document.createElement("canvas");
var context=canvas.getContext("2d");

canvas.width=width;
canvas.height=height;
context.drawImage(this,0,0,width,height);



lastPreviewThumbnail=canvas.toDataURL();




insertImageThumbnail($location);
};

var onFileReaderLoad=function $vpfn_D5fsJHSWkP18GRDh4sFRTA463$27($location,event)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

image.onload=onImageLoad.bind(image,$location);
if(image.src===event.target.result)
{

insertImageThumbnail($location);
}else
{
image.src=event.target.result;
}
};

var loadPreview=function $vpfn_EAONnX7KNROmF53eVcnfCg477$22(path,$container)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var $location=$container.find(".upload-progress");
if($location.length<1)
{



loadNextRequest();
return;
}

imageInUse=true;
fileReader.onload=onFileReaderLoad.bind(fileReader,$location);
fileReader.readAsDataURL(path);
};
};

vp.upload.previewQueue=new vp.upload.Html5PreviewQueue();








vp.upload.ProgressUI=function $vpfn_Y3WCwzueTE79AthAkfj0VA505$23(eType,vTargetContainer)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Progress;
this.inheritFrom(1);




var $container;
var $progressTop;
var $progressElement;
var $waitingArea;
var $transferArea;
var $processingArea;
var $fileName;
var $timeRemainingMin;
var $timeRemainingSec;
var $percentDone;
var $fileCountCompleted;
var $fileCountTotal;




var oWaitingBar;
var oTransferBar;
var oProcessingBar;




var iFileSize;




var oPageDialog;




var bInitialized=false;




var initialize=function $vpfn_R_5quTsteICQwgth8Y30EA557$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(bInitialized)
{
return;
}
bInitialized=true;


$container=$(vp.core.getElement(vTargetContainer,"vp.upload.ProgressUI"));

var sTemplateId=vp.upload.progressTemplateIds[eType];
var $template=$("#"+sTemplateId);
$progressElement=$template.clone();
$progressElement.removeAttr("id");
$progressElement.show();



$progressTop=$('<div></div>');
$progressTop.addClass('upload-progress-top');
$progressTop.append($progressElement);


vp.dialog.addOnResizeHandlerToCurrent(updateProgressSize);


$waitingArea=$progressElement.find(".waiting-area");
$transferArea=$progressElement.find(".transfer-area");
$processingArea=$progressElement.find(".processing-area");


$fileName=$progressElement.find(".upload-filename");
$timeRemainingMin=$progressElement.find(".transfer-timeremaining-min");
$timeRemainingSec=$progressElement.find(".transfer-timeremaining-sec");


$percentDone=$progressElement.find(".transfer-percent");
$fileCountCompleted=$progressElement.find(".status-file-count-completed");
$fileCountTotal=$progressElement.find(".status-file-count-total");


oWaitingBar=new vp.upload.widget.WaitingBar({
area:$waitingArea.find(".outer-bar"),
dotSelector:".dot",
timeCycle:3000,
timeRefresh:1000
});

oTransferBar=new vp.upload.widget.TransferBar({
area:$transferArea.find(".outer-bar"),
progressSelector:".inner-bar",
percentTextSelector:".percent-text"
});

oProcessingBar=new vp.upload.widget.ProcessBar({
area:$processingArea.find(".outer-bar"),
dotSelector:".dot",
timeCycle:2000,
timeRefresh:100
});
};

var showOrHideArea=function $vpfn_4LNYzMezhrPd_u1KtUjp4A621$25($targetArea,$area,oProgressBar)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var bShow=($area&&$area==$targetArea);
if($area)
{
bShow?$area.show():$area.hide();
}
if(oProgressBar)
{
bShow?oProgressBar.start():oProgressBar.reset();
}
};

var showArea=function $vpfn_nq3OFPQsYMsPcuUOvBf3gQ634$19($targetArea)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
showOrHideArea($targetArea,$waitingArea,oWaitingBar);
showOrHideArea($targetArea,$transferArea,oTransferBar);
showOrHideArea($targetArea,$processingArea,oProcessingBar);
};




var updateProgressSize=function $vpfn_Gz27Y038YB1_2xRVfsFHzA644$29()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!$container||!$progressTop||$container.closest("html").length===0||$progressTop.closest("html").length===0)
{
return;
}










var progressTopPosition=$progressTop.offset();
var containerPosition=$container.offset();
var containerBorderTop=parseInt($container.css('border-top-width'));
var containerBorderLeft=parseInt($container.css('border-left-width'));
var offsetTop=containerPosition.top-progressTopPosition.top+(containerBorderTop?containerBorderTop:0);
var offsetLeft=containerPosition.left-progressTopPosition.left+(containerBorderLeft?containerBorderLeft:0);







$progressElement.width($container.innerWidth());
$progressElement.height($container.innerHeight());
$progressElement.css("top",offsetTop);
$progressElement.css("left",offsetLeft);


oProcessingBar.updateWidth();
};

this.reset=function $vpfn_wHBmz$m1dx_DQH3oLogTtg682$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oPageDialog)
{
oPageDialog.close();
}


showArea(null);


$progressTop.remove();


bInitialized=false;
};





this.onUploadInit=function $vpfn_Vro6Vp1DYx44B3aL_f_Zew703$24(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

initialize();


var uploadFileName=e.target.getFileName();
for(var n=0;n<$fileName.length;n++)
{
$fileName[n].innerHTML=uploadFileName;
}


$container.show();


var maxZIndex=0;
$container.children().each(function $vpfn_2OVk8z3nTTjzQ6ANzIVlDA720$35()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var z=vp.core.getNumber(parseInt($(this).css("z-index")),0);
maxZIndex=Math.max(maxZIndex,z);
});


$progressTop.css("z-index",maxZIndex+1);


$container.append($progressTop);


showArea($waitingArea);


if(eType==vp.upload.ProgressType.Page)
{

if(!oPageDialog)
{
oPageDialog=new vp.dialog.NodeDialog(
$container.attr("id")+"_dialog",
{width:325,height:250},
$container[0]);

oPageDialog.chrome=vp.dialog.chrome.Primary;
oPageDialog.options.isDraggable=false;
oPageDialog.options.title=vp.upload.dialogTitleProgress;



var oIFrame=vp.ui.getIFrameForDocument(window.document);
var bIsFrameDialog=oIFrame&&oIFrame.isModalDialog;
if(bIsFrameDialog)
{
oPageDialog.rootWindow=window;
}
}


var cancelHandler=function $vpfn_2OVk8z3nTTjzQ6ANzIVlDA761$32(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(e.isCancelButton)
{
this.upl.cancel();
}
}
.getClosure({upl:e.target});
oPageDialog.onclose.removeAll();
oPageDialog.onclose.addHandler(cancelHandler);


oPageDialog.open();
}



updateProgressSize();



if(vp.upload.HTML5Enabled.CanvasPreviews&&e.target.constructor==vp.upload.HTML5Upload)
{

if(eType==vp.upload.ProgressType.Box)
{
if(!vp.upload.previewQueue.touched)
{
vp.upload.previewQueue.touched=true;
var loggingUrl=new vp.web.URL(vp.upload.logUrl);
loggingUrl.setItem("logtype","previewmsr");
e.target.manager.log(loggingUrl);
}

if(vp.upload.clientsidePreview)
{

readHTML5file(e.target.file);
}
}
}
};





this.onUploadStart=function $vpfn_fyq7hCH5e8aVuokkSnlrkQ808$25(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
iFileSize=Math.max(1,vp.core.getNumber(e.totalFileSize,1));
showArea($transferArea);
};





this.onUploadProgress=function $vpfn_8kLDsU3I8jxRZkokW7LqSA818$28(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var iBytesSent=Math.max(0,vp.core.getNumber(e.bytesSent,0));
var iMsElapsed=Math.max(0,vp.core.getNumber(e.msElapsed,0));


var fRatioSent=iBytesSent/iFileSize;
var iPercentSent=Math.round(fRatioSent*100);


var iBytesLeft=iFileSize-iBytesSent;
var fUploadRate=iBytesSent/iMsElapsed;
var fMsRemaining=iBytesLeft/fUploadRate;
var iSecs=Math.round(fMsRemaining/1000);
var iSecsShow=iSecs%60;
var iMinsShow=(iSecs-iSecsShow)/60;


if(oTransferBar)
{
oTransferBar.setProgress(fRatioSent);
}

$timeRemainingMin.html(iMinsShow);
$timeRemainingSec.html(iSecsShow);
$percentDone.html(iPercentSent);
};

this.setProgress=function $vpfn_9HKt1DBiOxNdp8Te8P9Ulg847$23(fProgressRatio,iTimeRemaining,iCompleted,iTotal)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var msRemaining=Math.max(0,vp.core.getNumber(iTimeRemaining,0));
var secs=Math.round(msRemaining/1000);
var secsShow=secs%60;
var minsShow=(secs-secsShow)/60;

showArea($transferArea);

if($processingArea)
{
$processingArea.hide();
}


if(oTransferBar)
{
oTransferBar.setProgress(fProgressRatio);
}


$timeRemainingMin.html(minsShow);
$timeRemainingSec.html(secsShow);

$percentDone.html(fProgressRatio);
$fileCountCompleted.html(iCompleted);
$fileCountTotal.html(iTotal);
};





this.onUploadFinish=function $vpfn_UIymPpJXSpl9QpM50o_6cw880$26(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
showArea($processingArea);
};





this.onUploadComplete=function $vpfn_CX_Q1oIBbtcwcJS2x$STYg889$28(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.reset();
};






var readHTML5file=function $vpfn_3kQyRtsRa4UMFMkbhSscVQ899$24(file)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(file.type.match('image.*')&&file.size<vp.upload.maxFileSize)
{
vp.upload.previewQueue.requestPreview(file,$container);
}
};
};







vp.upload.ProgressArea=function $vpfn_K5xvkSqfp6yPA8dRwf$6Ow914$25(vTargetContainer)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.inheritFrom=vp.upload.ProgressUI;
this.inheritFrom(vp.upload.ProgressType.Area,vTargetContainer);
};







vp.upload.ProgressBar=function $vpfn_uJNixH_Z09WsHce1d9jCTA926$24(vTargetContainer)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.inheritFrom=vp.upload.ProgressUI;
this.inheritFrom(vp.upload.ProgressType.Bar,vTargetContainer);
};







vp.upload.ProgressBox=function $vpfn_uqwMJgnEM0zoWsgHNBVVUQ938$24(vTargetContainer)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.inheritFrom=vp.upload.ProgressUI;
this.inheritFrom(vp.upload.ProgressType.Box,vTargetContainer);
};







vp.upload.ProgressRepository=function $vpfn_qmzasPtHfXbckqJn1uWFlA950$31(oRepository)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Progress;
this.inheritFrom(0);











this.onUploadInit=function $vpfn_Vro6Vp1DYx44B3aL_f_Zew971$24(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oUpload=e.target;



oUpload.ontransferstart.removeHandler(me.onUploadStart);
oUpload.ontransferprogress.removeHandler(me.onUploadProgress);
oUpload.ontransferfinish.removeHandler(me.onUploadFinish);
oUpload.oncomplete.removeHandler(me.onUploadComplete);



var oEntry=oRepository.addUpload(oUpload);


var oProgress=new vp.upload.ProgressUI(oEntry.uploadProgressType,oEntry.uploadProgressElement);
oProgress.attachUpload(oUpload);



};





this.onUploadComplete=function(e)
{

};
};






vp.upload.widget={};

vp.upload.widget.TransferBar=function $vpfn_iGln5ibPEA3o4njYRd9HyQ1012$31(options)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

var defaults={
area:null,
progressSelector:".inner-bar",
percentTextSelector:".percent-text"
};

options=$.extend(defaults,options);
var progress=options.area.find(options.progressSelector);
var percentText=options.area.find(options.percentTextSelector);

this.reset=function $vpfn_wHBmz$m1dx_DQH3oLogTtg1026$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
progress.width("0%");
percentText.html("0 %");
};

this.start=function()
{

};

this.setProgress=function $vpfn_9HKt1DBiOxNdp8Te8P9Ulg1037$23(fProgressRatio)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var progressPct=Math.round(100*fProgressRatio);
progress.width(progressPct+"%");
percentText.html(progressPct+" %");
};

me.reset();
};

vp.upload.widget.WaitingBar=function $vpfn_CIgzQFid41erOfRGkQf9Yw1047$30(options)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

var defaults={
area:null,
dotSelector:".dot",
timeCycle:3000,
timeRefresh:1000,
opacity:0.33
};

options=$.extend(defaults,options);

var active_dot=0;
var dots=options.area.find(options.dotSelector);
var timer=null;

var init=function $vpfn_eTy8YK8TANxqhV8nnqtVPg1065$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.reset();
};

this.reset=function $vpfn_wHBmz$m1dx_DQH3oLogTtg1070$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.stop();

dots.each(function $vpfn_2OVk8z3nTTjzQ6ANzIVlDA1074$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(this).css("opacity",options.opacity);
});
};

this.start=function $vpfn_RXkZFifWQffRfgXRVqveeA1080$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.reset();
timer=setInterval(blinkDots,options.timeRefresh);
};

this.stop=function $vpfn_8r$OjLLFsruT$zo2EMDLjQ1086$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(timer)
{
clearInterval(timer);
}
};

var blinkDots=function $vpfn_4zWTUu3Lrv7WVeBq7YzZlg1094$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
dots.eq(active_dot).css("opacity",options.opacity);
active_dot=(active_dot+1)%dots.length;
dots.eq(active_dot).css("opacity",1.0);
};

init();
};

vp.upload.widget.ProcessBar=function $vpfn_QGFvc0SVc65Ik4KjR0GVwA1104$30(options)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

var defaults={
area:null,
dotSelector:".dot",
timeCycle:2000,
timeRefresh:100,
innerSelector:".inner-bar"
};

options=$.extend(defaults,options);

var dots=options.area.find(options.dotSelector);
var innerBar=options.area.find(options.innerSelector);
var timer=null;

var dotW=null;
var dotsW=null;
var contW=null;

var init=function $vpfn_eTy8YK8TANxqhV8nnqtVPg1126$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.reset();
};

this.reset=function $vpfn_wHBmz$m1dx_DQH3oLogTtg1131$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.stop();

dots.each(function $vpfn_2OVk8z3nTTjzQ6ANzIVlDA1135$18(i)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(this).css("opacity",(i+1)*(1/(dots.length)));
});

if(vp.upload.HTML5Enabled.CSS3Animations)
{
return;
}


innerBar.css("left",options.area.width()+1);
};

this.start=function $vpfn_RXkZFifWQffRfgXRVqveeA1149$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.upload.HTML5Enabled.CSS3Animations)
{
return;
}

dotW=dots.width();
dotsW=innerBar.width();

me.updateWidth();
me.reset();
timer=setInterval(moveDots,options.timeRefresh);
};

this.stop=function $vpfn_8r$OjLLFsruT$zo2EMDLjQ1164$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(timer)
{
clearInterval(timer);
}
};

this.updateWidth=function $vpfn_ykOdcN_MP4uXVzVvSzyXYQ1172$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
contW=options.area.width();
};

var moveDots=function $vpfn_plU_1BjZ60AWLbUxvlnztg1177$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var step=contW/(options.timeCycle/options.timeRefresh);
var innerBarX=innerBar.position().left;
innerBarX+=Math.round(step);
if(innerBarX>contW)
{
innerBarX=-dotsW;
}
innerBar.css("left",innerBarX);
};

init();
};







vp.upload.ProgressMonitor=function $vpfn_KmTIqw4LL_F_LUuW7AT7Fw1198$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Progress;
this.inheritFrom(0);

this.fnInitCallback;

this.fnStartCallback;

this.fnProgressCallback;

this.fnCancelCallback;

this.fnErrorCallback;

this.fnCompleteCallback;

this.fnUploadFinishCallback;





this.onUploadInit=function $vpfn_Vro6Vp1DYx44B3aL_f_Zew1227$24(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.fnInitCallback)
{
me.fnInitCallback(e.target);
}
};





this.onUploadStart=function $vpfn_fyq7hCH5e8aVuokkSnlrkQ1239$25(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.fnStartCallback)
{
me.fnStartCallback(e.target);
}
};





this.onUploadProgress=function $vpfn_8kLDsU3I8jxRZkokW7LqSA1251$28(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.fnProgressCallback)
{
me.fnProgressCallback(e.target);
}
};





this.onUploadFinish=function $vpfn_UIymPpJXSpl9QpM50o_6cw1263$26(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.fnUploadFinishCallback)
{
me.fnUploadFinishCallback(e.target);
}
};





this.onUploadComplete=function $vpfn_CX_Q1oIBbtcwcJS2x$STYg1275$28(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(e.result&&e.result.cancel)
{
if(me.fnCancelCallback)
{
me.fnCancelCallback(e.target);
}
}
else if(e.result&&e.result.error)
{
if(me.fnErrorCallback)
{
me.fnErrorCallback(e.target);
}
}
else if(e.result&&e.result.success)
{
if(me.fnCompleteCallback)
{
me.fnCompleteCallback(e.target);
}
}
};
};


vp.upload.AggregateProgress=function $vpfn_m$SzcmdRXjXPDa4NDRcmHQ1302$30(vTargetContainer)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

me.inheritFrom=vp.upload.ProgressUI;
me.inheritFrom(vp.upload.ProgressType.Aggregate,vTargetContainer);

var bInitialized=false;





var onProgress=function $vpfn_UnQWkp7ZRKMeM9mITYuBIQ1315$21(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var data={};
data.target=e.sampleUpload;


if(!bInitialized)
{
me.onUploadInit(data);
me.onUploadStart(data);
}

bInitialized=true;


var iTotal=e.uploadsTotal;
var iSent=e.uploadsSent;
var iDone=e.uploadsDone;


if(iTotal===0||iTotal===iDone)
{

bInitialized=false;

me.reset();
}
else if(iTotal===iSent)
{


me.onUploadFinish(data);
}
else
{

if(e.bytesTotal===0||e.bytesSent===0||e.timeElapsed===0)
{
return;
}


var fTransferRate=e.bytesSent/e.timeElapsed;
var fTimeRemaining=(e.bytesTotal-e.bytesSent)/fTransferRate;
var fProgressRatio=e.bytesSent/e.bytesTotal;
fProgressRatio=Math.max(0,fProgressRatio);
fProgressRatio=Math.min(1,fProgressRatio);


me.setProgress(fProgressRatio,fTimeRemaining,iDone,iTotal);
}
};

vp.upload.pageQueue.onprogress.addHandler(onProgress);
};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;



}








if(typeof vp=="undefined")
{
var vp={};
}





if(!vp.upload)
{
vp.upload=function(){};
}







vp.upload.getError=function $vpfn_MDcXGPp91ejK7UhlHQxJ4w34$21(oUploadResult)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oUploadResult||!oUploadResult.error)
{
throw new Error("vp.upload.getError requires an upload result object");
}


var iErrorCode=oUploadResult.error.code;


if(oUploadResult.error.errorData)
{

return oUploadResult.error.errorData;
}


var errorMessageId=vp.upload.errorCodes[iErrorCode.toString()];
if(errorMessageId)
{
return vp.upload.errorData[errorMessageId.toString()];
}
else
{
return vp.upload.errorData["1080967"];
}
};






vp.upload.getErrorShort=function $vpfn_A9Q2O36yLCirGbTNA4m0xw68$26(oUploadResult)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oErrorData=vp.upload.getError(oUploadResult);
var fnLearnMore=function $vpfn_vFgWNNSK2_mInD6xUTW23w71$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.upload.showErrorDialog(this.res);
}.getClosure({res:oUploadResult});


var oLearnMore=document.createElement('A');
oLearnMore.innerHTML=vp.upload.errorLearnMore;
oLearnMore.href='javascript://';
vp.events.add(oLearnMore,"click",fnLearnMore);


var oErrorMessage=document.createElement('SPAN');
oErrorMessage.innerHTML=oErrorData.headerText+' ';
oErrorMessage.appendChild(oLearnMore);

return oErrorMessage;
};





vp.upload.showErrorDialog=function $vpfn_xh4E6V6AEnoWLqw1CVJYsg94$28(oUploadResult)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!vp.upload.oPageError)
{

vp.upload.oPageError=new vp.upload.ErrorUI();


var oDialog=vp.dialog.get('pageUploadErrorDialog');



var oIFrame=vp.ui.getIFrameForDocument(window.document);
var bIsFrameDialog=oIFrame&&oIFrame.isModalDialog;
if(bIsFrameDialog)
{
oDialog.rootWindow=window;
}


var oDialogContent=oDialog.getContentNode();
oDialogContent.insertBefore(vp.upload.oPageError.element,oDialogContent.firstChild);



document.body.insertBefore(oDialogContent,document.body.firstChild);
}


vp.upload.oPageError.setError(oUploadResult);


var oErrorDialog=vp.dialog.get('pageUploadErrorDialog');
oErrorDialog.options.isDraggable=false;
oErrorDialog.rect.width=400;
oErrorDialog.open();
oErrorDialog.resizeToFitContent(true);
};





vp.upload.ErrorUI=function $vpfn_Tp23HKJLr_cqFM0ucYokUg138$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;




this.element;





this.hideSuggestions;




var oHeader;
var oSubheader;
var oSuggestions;
var oHeaderText;
var oSubheaderText;
var oSuggestionsText;




var bInitialized=false;




var initialize=function $vpfn_X0xdesD38JEzOuDvuuFlzQ171$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(bInitialized)
{
return;
}
bInitialized=true;


var sTemplateId=vp.upload.errorTemplateId;
var oTemplate=vp.ui.get(sTemplateId);
me.element=oTemplate.cloneNode(true);
me.element.id="";


oHeader=vp.ui.getChildrenBySelector(me.element,".header").shift();
oSubheader=vp.ui.getChildrenBySelector(me.element,".subheader").shift();
oSuggestions=vp.ui.getChildrenBySelector(me.element,".suggestions").shift();

oHeaderText=vp.ui.getChildrenBySelector(me.element,".header-text").shift();
oSubheaderText=vp.ui.getChildrenBySelector(me.element,".subheader-text").shift();
oSuggestionsText=vp.ui.getChildrenBySelector(me.element,".suggestions-text").shift();

vp.ui.expand(me.element);
};





this.setError=function $vpfn_kstUgrXrTH3yFJe7aKD3aQ202$20(oUploadResult)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oErrorData=vp.upload.getError(oUploadResult);


oHeaderText.innerHTML=oErrorData.headerText;


if(oErrorData.subheaderText)
{
oSubheaderText.innerHTML=oErrorData.subheaderText;
vp.ui.expand(oSubheader);
}
else
{
vp.ui.collapse(oSubheader);
}


if(oErrorData.resolutionTexts&&oErrorData.resolutionTexts.length>0&&!me.hideSuggestions)
{
var suggestionsHtml='<ul>';
for(var i=0;i<oErrorData.resolutionTexts.length;i++)
{
suggestionsHtml+='<li>'+oErrorData.resolutionTexts[i]+'</li>';
}
suggestionsHtml+='</ul>';


if(window.location.pathname==="/video-contest.aspx")
{
suggestionsHtml=vp.text.replace(suggestionsHtml,'12','30',false);
}

oSuggestionsText.innerHTML=suggestionsHtml;
vp.ui.expand(oSuggestions);
}
else
{
vp.ui.collapse(oSuggestions);
}


vp.ui.expand(me.element);
};


initialize();
};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;



}










if(typeof vp=="undefined")
{
var vp={};
}





if(!vp.upload)
{
vp.upload=function(){};
}






vp.upload.HTML5Enabled=
{
Enabled:false,
FileAPI:false,
XHR2:false,
FormData:false,
DragAndDrop:false,
Canvas:false,
UploadsSupported:false,
DragAndDropUploads:false,
CanvasPreviews:false,
CSS3Animations:false
};




vp.upload.detectHTML5=function $vpfn_oizbhSL5LcLYHidz8Kg0$g52$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(vp.upload.HTML5Enabled.detected)
{
return;
}


if(!vp.upload.disableHtml5)
{
vp.upload.HTML5Enabled.Enabled=true;
}


if(window.File&&window.FileList&&window.FileReader)
{
vp.upload.HTML5Enabled.FileAPI=true;
}


try
{
if(new XMLHttpRequest().upload)
{
vp.upload.HTML5Enabled.XHR2=true;
}
}
catch(e){}


try
{
if(window.FormData)
{
vp.upload.HTML5Enabled.FormData=true;
}
}
catch(e){}


var div=document.createElement('div');
if('draggable'in div)
{
vp.upload.HTML5Enabled.DragAndDrop=true;
}


try
{
var canvas=document.createElement("canvas");
if(canvas.getContext&&canvas.getContext('2d'))
{
vp.upload.HTML5Enabled.Canvas=true;
}
}
catch(e){}


if(vp.upload.HTML5Enabled.Enabled&&vp.upload.HTML5Enabled.FileAPI&&vp.upload.HTML5Enabled.XHR2&&vp.upload.HTML5Enabled.FormData)
{
vp.upload.HTML5Enabled.UploadsSupported=true;
}

if(vp.upload.HTML5Enabled.UploadsSupported&&vp.upload.HTML5Enabled.DragAndDrop)
{
vp.upload.HTML5Enabled.DragAndDropUploads=true;
}

if(vp.upload.HTML5Enabled.UploadsSupported&&vp.upload.HTML5Enabled.Canvas)
{
vp.upload.HTML5Enabled.CanvasPreviews=true;
}


vp.upload.HTML5Enabled.detected=true;
};





vp.upload.ManagerFactory=function $vpfn_dm6Ys$ubVcd7QmuZKCSKFg134$27()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}







this.create=function $vpfn_XLeIqgYDmba8OodW$fCRaw143$18(sConfigurationKey,eRepetitionType,formEmptyAction)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.upload.detectHTML5();


var supportHTML5=vp.upload.HTML5Enabled.UploadsSupported;


var oConfiguration=vp.upload.configurationMap[sConfigurationKey];
if(!oConfiguration.canUseImageServices)
{
supportHTML5=false;
}




if(supportHTML5)
{
return new vp.upload.HTML5Manager(sConfigurationKey,eRepetitionType,formEmptyAction);
}
else
{

return new vp.upload.MovieManager(sConfigurationKey,eRepetitionType,formEmptyAction);
}
};
};






vp.upload.managerFactory=new vp.upload.ManagerFactory();







vp.upload.Manager=function $vpfn_LEueodRaM9jubCsg3DDsxA186$20(sConfigurationKey,eRepetitionType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;






this.configurationKey=sConfigurationKey;






this.repetitionType=(eRepetitionType)?eRepetitionType:vp.upload.RepetitionType.MultipleCancel;






this.uploads=new Array();






this.progressList=new Array();





var numClicks=0;




this.configuration=vp.upload.configurationMap[me.configurationKey];




this.cancelLastUpload=function $vpfn_IwUlPU5McU6ZNq3R1zDKUQ232$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.uploads.length>0)
{
var oLastUpload=me.uploads[me.uploads.length-1];
oLastUpload.cancel();
}






};




this.checkUploadAllowedExternal=null;





this.registerProgress=function $vpfn_JSoItFSH9RtEwJ9V4ImEKA256$28(oProgress)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.progressList.push(oProgress);
};




this.pushUpload=function $vpfn_86m5M1PwshZ1P0z_8obCfQ265$22(oUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.uploads.push(oUpload);


for(var i=0;i<me.progressList.length;i++)
{
me.progressList[i].attachUpload(oUpload);
}


vp.upload.pageQueue.pushUpload(oUpload);
};





this.log=function $vpfn_70UnCZd3RE_$JmugZx$GQg284$15(oUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.upload.showDebugInfo)
{
vp.debug.trace('log: '+oUrl.toString());
}


if(vp.upload.disableLogging)
{
return;
}


oUrl.setItem("ts",new Date().valueOf());

var fnLog=function $vpfn_0No3gnZrdPgNbS20TvHvzA300$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.http.getAsync(this.url);

}.getClosure({url:oUrl.toString()});


setTimeout(fnLog,0);
};





this.logClick=function $vpfn_86x6wYaBU9numAAE8B6uZQ315$20(sClickType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
numClicks++;


if(numClicks===1)
{
var oLogUrl=new vp.web.URL(vp.upload.logUrl);
oLogUrl.setItem("logtype","click");
oLogUrl.setItem("vsup_multi",me.repetitionType==vp.upload.RepetitionType.Multiple);
oLogUrl.setItem("vsup_fv",vp.upload.FlashVersion.string);
oLogUrl.setItem("vsup_guid",vp.upload.serverGuid);
oLogUrl.setItem("vsup_ctype",sClickType);
oLogUrl.setItem("vsup_path",vp.upload.configurationMap[me.configurationKey].pathId);


try
{
var oCurrentUrl=new vp.web.URL(document.location.href);
var sPfid=oCurrentUrl.getItem("pfid");
if(!sPfid)
{
sPfid=oCurrentUrl.getItem("pf_id");
}
if(sPfid)
{
oLogUrl.setItem("vsup_pfid",sPfid);
}
}
catch(ex){}


me.log(oLogUrl);
}
};







this.logStart=function $vpfn_xb9i0NuGtM4q4juCtNNc1w357$20(sType,iCount)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oLogUrl=new vp.web.URL(vp.upload.logUrl);
oLogUrl.setItem("logtype","start");
oLogUrl.setItem("vsup_multi",me.repetitionType==vp.upload.RepetitionType.Multiple);
oLogUrl.setItem("vsup_fv",vp.upload.FlashVersion.string);
oLogUrl.setItem("vsup_guid",vp.upload.serverGuid);
oLogUrl.setItem("vsup_type",sType);
oLogUrl.setItem("vsup_count",iCount);
oLogUrl.setItem("vsup_clicks",numClicks);


me.log(oLogUrl);


if(iCount>1)
{
vp.upload.hideMultiSelectTip(true);
}
};





this.logCancel=function $vpfn_ZVQDwQgOo84F7NWTRasEUw382$21(oUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oLogUrl=new vp.web.URL(vp.upload.logUrl);
oLogUrl.setItem("logtype","cancel");
oLogUrl.setItem("fid",oUpload.fid);
oLogUrl.setItem("id",oUpload.id);


me.log(oLogUrl);
};




this.logRenderMulti=function $vpfn_OGzAWwqug4ddVD5b6veYIg396$26()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oLogUrl=new vp.web.URL(vp.upload.logUrl);
oLogUrl.setItem("logtype","render-multi");


me.log(oLogUrl);
};


if(vp.upload.showDebugInfo)
{
me.progressList.push(new vp.upload.ProgressDebugger());
}

if(!this.configuration)
{
throw"Could not find upload configuration: "+me.configurationKey;
}
};








vp.upload.HTML5Manager=function $vpfn_8CKqoPnIcxx29vcPsfy42g424$25(sConfigurationKey,eRepetitionType,eEmptyInputAction)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;




this.inheritFrom=vp.upload.Manager;
this.inheritFrom(sConfigurationKey,eRepetitionType);





var _oFileInput=null;
this.oFileInputContainer=null;

var _oFileInputFoil=null;





var _oDropTarget=null;





var _oFoilFileMask=null;
var _oFoilFileBase=null;





var handleFileDrop=function $vpfn_ADyk4PRjjEBzr0lmEJvj9A460$25(evt)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
handleFileSelect_drop(evt,false);
};





this.registerDropTarget=function $vpfn_8DpF4ufJ1Fdpmp7yiUAUlw469$30(vFileInput,bSingleUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(!vp.upload.onDropDefaultDisabled)
{
var preventOnDropDefault=function $vpfn_IVg3uGmlNDyNluLewkCwaw475$39(evt)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
evt.stopPropagation();
evt.preventDefault();
};
vp.events.add(document.body,"drop",preventOnDropDefault);

vp.upload.onDropDefaultDisabled=true;
}

var dropTarget=vp.core.getElement(vFileInput,"vp.upload.HTML5Manager.registerFileInput");

this.unregisterDropTarget();

if(bSingleUpload)
{
handleFileDrop=function $vpfn_ADyk4PRjjEBzr0lmEJvj9A491$29(evt)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
handleFileSelect_drop(evt,true);
};
}

vp.events.add(dropTarget,"dragover",handleDragOver);
vp.events.add(dropTarget,"drop",handleFileDrop);

_oDropTarget=dropTarget;
};






this.unregisterDropTarget=function $vpfn_YgoJqX69UNzkTQtQet$8fA508$32()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(_oDropTarget)
{
vp.events.remove(_oDropTarget,"dragover",handleDragOver);
vp.events.remove(_oDropTarget,"drop",handleFileDrop);
}
};







var handleFileSelect_drop=function $vpfn_AlMlTYDFf31hZivJ4PqpAg524$32(evt,bSingleUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
evt.stopPropagation();
evt.preventDefault();
var files=evt.dataTransfer.files;

me.queueUpload(files,bSingleUpload);
};



var handleDragOver=function $vpfn_oHXt5YT53b5fBOOR_2VXTQ535$25(evt)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
evt.stopPropagation();
evt.preventDefault();
evt.dataTransfer.dropEffect='copy';
};







this.registerFileInput=function $vpfn_fAPwvg7hNfU3YRT4TJsvdQ548$29(vFileInputContainer,bFoil)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oFileInputElementContainer=vp.core.getElement(vFileInputContainer,"vp.upload.HTML5Manager.registerFileInput");
var oFileInputElement=oFileInputElementContainer.firstChild;



if(me.repetitionType==vp.upload.RepetitionType.Multiple)
{
oFileInputElement.multiple='multiple';
vp.upload.showMultiSelectTip(oFileInputElementContainer);
}


if(vp.upload.showDebugInfo)
{
oFileInputElementContainer.style.backgroundColor="#66FF66";
oFileInputElementContainer.style.padding="1px";
}


var oOldFileInputElement=bFoil?_oFileInputFoil:_oFileInput;
if(oOldFileInputElement)
{
vp.events.remove(oOldFileInputElement,"change",onInputChange);
vp.events.remove(oOldFileInputElement,"click",onInputClick);
}


vp.events.add(oFileInputElement,"change",onInputChange);
vp.events.add(oFileInputElement,"click",onInputClick);


if(bFoil)
{
_oFileInputFoil=oFileInputElement;
}
else
{
_oFileInput=oFileInputElement;
me.oFileInputContainer=oFileInputElementContainer;
}
};

this.registerButton=function(vEnabledButton,vDisabledButton)
{


};





var onInputClick=function $vpfn_1U6owKRlbqtC6Nk9AbDQtw603$23(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.logClick("html5");
};




var onInputChange=function $vpfn_ErBW7RQP6_wn9XDF3Y67KA611$24(evt)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var bReady=canQueueUpload();
if(bReady)
{

var oFileList=_oFileInput.files;


me.logStart("html5browse",oFileList.length);


me.queueUpload(oFileList);


_oFileInput.value="";
if(_oFileInputFoil)
{
_oFileInputFoil.value="";
}
}
};





var canQueueUpload=function $vpfn_f9avR0RunOi1D1c_BWsIXw638$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var inputDataExists=true;


if(_oFileInput&&(!_oFileInput.files||_oFileInput.files.length===0))
{
inputDataExists=false;
}


if(_oFileInputFoil&&(!_oFileInputFoil.files||_oFileInputFoil.files.length===0))
{
inputDataExists=false;
}

return inputDataExists;
};






this.queueUpload=function $vpfn_hFVpsZDQJ2p1eLaSiZlBNQ662$23(oFileList,bSingleUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

for(var i=0,len=oFileList.length;i<len;i++)
{

var oFormData=new window.FormData();


var oFile=oFileList[i];
oFormData.append("fileUploadInput",oFile);


if(_oFileInputFoil&&_oFileInputFoil.files.length>=1&&i===0)
{
var oFileFoil=_oFileInputFoil.files[0];
oFormData.append("foilMaskUploadInput",oFileFoil);
}


var postQueryString=me.configuration.postQS;
var oNewUpload=new vp.upload.HTML5Upload(me,oFile,oFormData,postQueryString);


me.pushUpload(oNewUpload);

if(bSingleUpload)
{
return;
}
}
};
};









vp.upload.FormManager=function $vpfn_5n_bX092P1kS62WAn3gSTw704$24(sConfigurationKey,eRepetitionType,eEmptyInputAction)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Manager;
this.inheritFrom(sConfigurationKey,eRepetitionType);





var _eEmptyInputAction=(eEmptyInputAction)?eEmptyInputAction:vp.upload.EmptyInputAction.DisableUploadButton;





var _oFileInput=null;
this.oFileInputContainer=null;





var _oFileInputFoil=null;
this.oFileInputFoilContainer=null;





var _oEnabledButton=null;





var _oDisabledButton=null;







this.registerFileInput=function $vpfn_fAPwvg7hNfU3YRT4TJsvdQ753$29(vFileInputContainer,bFoil)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oFileInputElementContainer=vp.core.getElement(vFileInputContainer,"vp.upload.FormManager.registerFileInput");
var oFileInputElement=oFileInputElementContainer.firstChild;


var oOldFileInputElement=bFoil?_oFileInputFoil:_oFileInput;
if(oOldFileInputElement)
{
vp.events.remove(oOldFileInputElement,"change",onInputChange);
vp.events.remove(oOldFileInputElement,"keyup",onInputKeyUp);
vp.events.remove(oOldFileInputElement,"keydown",onInputKeyUp);
vp.events.remove(oOldFileInputElement,"click",onInputClick);
}


vp.events.add(oFileInputElement,"change",onInputChange);
vp.events.add(oFileInputElement,"keyup",onInputKeyUp);
vp.events.add(oFileInputElement,"keydown",onInputKeyUp);
vp.events.add(oFileInputElement,"click",onInputClick);

if(bFoil)
{
_oFileInputFoil=oFileInputElement;
me.oFileInputFoilContainer=oFileInputElementContainer;
}
else
{
_oFileInput=oFileInputElement;
me.oFileInputContainer=oFileInputElementContainer;
}

updateButtonState(false);
};






this.registerButton=function $vpfn_8OXrsvmrRfZbx739CnRqxQ794$26(vEnabledButton,vDisabledButton)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oButtonEnabledElement=vp.core.getElement(vEnabledButton,"vp.upload.FormManager.registerButton");
var oButtonDisabledElement;
if(vDisabledButton)
{
oButtonDisabledElement=vp.core.getElement(vDisabledButton,"vp.upload.FormManager.registerButton");
}

if(_oEnabledButton||_oDisabledButton)
{
throw"vp.upload.FormManager.registerButton: cannot register multiple buttons";
}


oButtonEnabledElement.onclick=null;
if(oButtonDisabledElement)
{
oButtonDisabledElement.onclick=null;
}


vp.events.add(oButtonEnabledElement,"click",onButtonClick);

_oEnabledButton=oButtonEnabledElement;
_oDisabledButton=oButtonDisabledElement;

updateButtonState(false);
};





var onInputClick=function $vpfn_1U6owKRlbqtC6Nk9AbDQtw829$23(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.logClick("iframe");
};





var onInputChange=function $vpfn_ErBW7RQP6_wn9XDF3Y67KA838$24(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var canStart=canQueueUpload();

if(_oEnabledButton)
{

updateButtonState(canStart);
}
else
{

tryQueueUpload(canStart);
}

return false;
};





var onInputKeyUp=function $vpfn_QOsIKQtGTLqw9k_YEJ7elA860$23(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);

var canStart=canQueueUpload();

if(_oEnabledButton)
{

updateButtonState(canStart);
}
else
{

if(e.keyCode==13)
{
tryQueueUpload(canStart);
}
}


if(e.keyCode==13)
{

vp.events.cancelEvent(e);
}

return true;
};





var onButtonClick=function $vpfn_9h0AAV1560frkZyp4eH32Q894$24(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var canStart=canQueueUpload();
tryQueueUpload(canStart);


vp.events.cancelEvent(e);
};





var updateButtonState=function $vpfn_4z_oEIpT0YTP01_lfJnSpA908$28(bCanStart)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_oEnabledButton||!_oDisabledButton)
{

return;
}

if(bCanStart||_eEmptyInputAction!=vp.upload.EmptyInputAction.DisableUploadButton)
{
vp.ui.expandAndCollapse(_oEnabledButton,_oDisabledButton);
}
else
{
vp.ui.expandAndCollapse(_oDisabledButton,_oEnabledButton);
}
};

var uploadsNotAllowedMessage='';





var canQueueUpload=function $vpfn_f9avR0RunOi1D1c_BWsIXw932$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.checkUploadAllowedExternal)
{

uploadsNotAllowedMessage=me.checkUploadAllowedExternal(1);
if(uploadsNotAllowedMessage)
{
return false;
}
}

var inputDataExists=true;


if(_oFileInput&&(!_oFileInput.value||_oFileInput.value.trim()===''))
{
inputDataExists=false;
}


if(_oFileInputFoil&&(!_oFileInputFoil.value||_oFileInputFoil.value.trim()===''))
{
inputDataExists=false;
}

return inputDataExists;
};





var tryQueueUpload=function $vpfn_9h7CJyv8XOlA65C0HA_B2w966$25(bCanStart)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(bCanStart)
{
queueUpload();
}
else if(_eEmptyInputAction==vp.upload.EmptyInputAction.DisplayWarningMessage)
{
alert(vp.upload.fieldBlankWarning);
}
else if(uploadsNotAllowedMessage)
{
alert(uploadsNotAllowedMessage);
}
};




var queueUpload=function $vpfn_lYo_iWPXvhwNju9p1hSurg985$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}



if(me.repetitionType==vp.upload.RepetitionType.MultipleCancel)
{
me.cancelLastUpload();
}


var fileName=_oFileInput.value;


var oUploadContainer=vp.ui.get("divPageUploadContainer");
if(!oUploadContainer)
{
oUploadContainer=document.createElement("div");
oUploadContainer.id="divPageUploadContainer";
vp.ui.collapse(oUploadContainer);
document.body.appendChild(oUploadContainer);
}



var oUploadFormContainer=document.createElement("div");
oUploadFormContainer.id=_oFileInput.id+"_div"+(me.uploads.length+1);
oUploadContainer.appendChild(oUploadFormContainer);

var oUploadForm=document.createElement("form");
oUploadForm.id=_oFileInput.id+"_form"+(me.uploads.length+1);
oUploadFormContainer.appendChild(oUploadForm);


var oFileInputOld,oFileInputNew;
oFileInputOld=_oFileInput;
oFileInputNew=copyFileInput(oFileInputOld,"_post"+(me.uploads.length+1));
oFileInputOld.parentNode.insertBefore(oFileInputNew,oFileInputOld);
oUploadForm.appendChild(oFileInputOld);
me.registerFileInput(oFileInputNew.parentNode);

if(_oFileInputFoil)
{
oFileInputOld=_oFileInputFoil;
oFileInputNew=copyFileInput(oFileInputOld,"_post"+(me.uploads.length+1));
oFileInputOld.parentNode.insertBefore(oFileInputNew,oFileInputOld);
oUploadForm.appendChild(oFileInputOld);
me.registerFileInput(oFileInputNew.parentNode,true);
}


me.logStart("iframe",1);


var postQueryString=me.configuration.postQS;


var oNewUpload=new vp.upload.IFrameUpload(me,fileName,oUploadForm,postQueryString);





me.pushUpload(oNewUpload);
};








var copyFileInput=function $vpfn_acKaguKH0DZUZm5_8JMyvg1058$24(oFileInputOld,sIdSuffix)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var tempId=oFileInputOld.id;
oFileInputOld.id=tempId+sIdSuffix;


var oFileInputNew=vp.ui.createNamedElement("input",oFileInputOld.name);
oFileInputNew.id=tempId;
oFileInputNew.alt=oFileInputOld.alt;
oFileInputNew.size=oFileInputOld.size;
oFileInputNew.type=oFileInputOld.type;
oFileInputNew.className=oFileInputOld.className;

return oFileInputNew;
};
};







vp.upload.FlashVersion=
{
major:0,
minor:0,
release:0,
string:"0.0.0",
detected:false,
enabled:false
};







vp.upload.FlashManagers=new Array();





vp.upload.detectFlash=function $vpfn_7YBGrwykmg2CR$F7YhPoIg1104$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(vp.upload.FlashVersion.detected)
{
return;
}


if(!vp.upload.useFlash)
{
return;
}


vp.upload.FlashVersion=window.swfobject.getFlashPlayerVersion();
vp.upload.FlashVersion.string=vp.upload.FlashVersion.major+'.'+
vp.upload.FlashVersion.minor+'.'+vp.upload.FlashVersion.release;

if(vp.upload.showDebugInfo)
{
vp.debug.trace('flash version detected: '+vp.upload.FlashVersion.string);
}


if(vp.upload.disableFlash)
{
vp.upload.FlashVersion.enabled=false;
if(vp.upload.showDebugInfo)
{
vp.debug.trace('disabling flash, requested by query string');
}
}
else if(vp.upload.FlashVersion.major<=8)
{
vp.upload.FlashVersion.enabled=false;
if(vp.upload.showDebugInfo)
{
vp.debug.trace('disabling flash, player version < 9: '+vp.upload.FlashVersion.string);
}
}
else if(vp.upload.FlashVersion.major===9&&vp.upload.FlashVersion.release<115&&vp.browser.isIE)
{
vp.upload.FlashVersion.enabled=false;
if(vp.upload.showDebugInfo)
{
vp.debug.trace('disabling flash, IE + player version < 9.0.115: '+vp.upload.FlashVersion.string);
}
}
else
{
vp.upload.FlashVersion.enabled=true;
}


vp.upload.FlashVersion.detected=true;
};





vp.upload.loadFlash=function $vpfn_XJEDwP46op2HAvdT5CBG7w1166$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.upload.detectFlash();

if(vp.upload.FlashVersion.enabled)
{






var divVeil=vp.ui.get('divUploadPageVeil');
if(divVeil)
{
document.body.appendChild(divVeil);
}


for(var i=0;i<vp.upload.FlashManagers.length;i++)
{
vp.upload.FlashManagers[i].hookupFlash();
}
}
};









vp.upload.MovieManager=function $vpfn_TIZXA39axxikMQh5fqkV3w1201$25(sConfigurationKey,eRepetitionType,eEmptyInputAction)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.FormManager;
this.inheritFrom(sConfigurationKey,eRepetitionType,eEmptyInputAction);





var _iId=-1;





var _bHookedUp=false;





var _bRegistered=false;





var _oMovie=false;





var _oMovieContainer=false;




var init=function $vpfn_gYuTWTy8o31Z2X5F1m4oTQ1245$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_iId=vp.upload.FlashManagers.length;


vp.upload.FlashManagers.push(me);


if(vp.upload.FlashVersion.enabled)
{
me.hookupFlash();
}
};





this.hookupFlash=function $vpfn_3XK15GL7zzsgqsc5n5H4jA1264$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




if(_bHookedUp)
{



return;
}
_bHookedUp=true;



me.registerFileInput=registerFileInputBoth;


registerFileInputMovie();
};

var registerFileInputForm=me.registerFileInput;
var registerFileInputMovie=function $vpfn_4urRpOTSc7F$YjZmGLr1Cg1288$33(bCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




if(_bRegistered)
{
vp.logger.logError(Math.random(),vp.upload.FlashVersion.string,"vp.upload.MovieManager: input already registered",vp.logger.Severity.Warning);
return;
}


if(me.oFileInputContainer)
{

var oInputRect=vp.ui.getRect(me.oFileInputContainer);
var iMovieWidth=(oInputRect.width+10);
var iMovieHeight=(oInputRect.height+10);




if((oInputRect.width===0||oInputRect.height===0)&&!bCallback)
{
var fnLater=function $vpfn_0No3gnZrdPgNbS20TvHvzA1313$30(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}this.cb(true);}.getClosure({cb:registerFileInputMovie});
setTimeout(fnLater,0);
return;
}


_bRegistered=true;







var oFlashUploadMovie=document.createElement('div');
oFlashUploadMovie.id=me.oFileInputContainer.firstChild.id+'Movie';
_oMovieContainer=document.createElement('div');
_oMovieContainer.id=me.oFileInputContainer.firstChild.id+'MovieContainer';
_oMovieContainer.appendChild(oFlashUploadMovie);



vp.ui.addClass(_oMovieContainer,"upload-movie");






vp.ui.setStyleValue(_oMovieContainer,"width",iMovieWidth);
vp.ui.setStyleValue(_oMovieContainer,"height",iMovieHeight);

vp.ui.setStyleValue(_oMovieContainer,"top",oInputRect.height-1);
vp.ui.setStyleValue(_oMovieContainer,"left",oInputRect.width-1);
me.oFileInputContainer.appendChild(_oMovieContainer);


var flashvars={
managerid:_iId,
multiple:me.repetitionType==vp.upload.RepetitionType.Multiple,
debug:vp.upload.showDebugInfo
};
var params={
allowscriptaccess:"sameDomain",
swliveconnect:"true",
wmode:"transparent"
};
var attributes={};
window.swfobject.embedSWF(vp.upload.flashMovieUrl,oFlashUploadMovie.id,iMovieWidth.toString(),iMovieHeight.toString(),'9.0',false,flashvars,params,attributes,registerFileInputMovieCB);
}
};
var registerFileInputBoth=function $vpfn_v2AwaFXEbrkAUBri4CMeiw1364$32(vFileInputContainer,bFoil)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
registerFileInputForm(vFileInputContainer,bFoil);
registerFileInputMovie();
};




var registerFileInputMovieCB=function $vpfn_mHmkOAKk__807yu5Og3kVQ1373$35(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_oMovie=e.ref;

if(vp.upload.showDebugInfo)
{
vp.debug.trace('flash overlay added! success:'+e.success+' id:'+e.id+' ref:'+e.ref);
}
};





this.onMovieLoad=function $vpfn_O0WGIISQ0n1Iu7SF_jWN6w1387$23(bCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(!_oMovie&&!bCallback)
{
var fnLater=function $vpfn_0No3gnZrdPgNbS20TvHvzA1393$26(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}this.cb(true);}.getClosure({cb:me.onMovieLoad});
setTimeout(fnLater,0);
return;
}

if(_oMovie&&_oMovie.registerUpload)
{

vp.ui.setStyleValue(_oMovieContainer,"top",-5);
vp.ui.setStyleValue(_oMovieContainer,"left",-5);

if(vp.upload.showDebugInfo)
{
vp.debug.trace('flash overlay loaded!');
}


onMovieReady();
}
else
{

vp.logger.logError(Math.random(),vp.upload.FlashVersion.string,"vp.upload.MovieManager: externalinterface not ready",vp.logger.Severity.Warning);

if(vp.upload.showDebugInfo)
{
vp.debug.trace('flash overlay not loaded! externalinterface not ready');
}
}
};





var onMovieReady=function $vpfn__ht$jkDZz2zVRFGIMyjNbA1428$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.repetitionType==vp.upload.RepetitionType.Multiple)
{

vp.upload.showMultiSelectTip(me.oFileInputContainer);
}
};







this.addUpload=function $vpfn_U2Vfy9gG_rO$63FZSm07kQ1444$21(iMovieUploadId,sFileName,iFileSize)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.repetitionType==vp.upload.RepetitionType.MultipleCancel)
{
me.cancelLastUpload();
}


var postQueryString=me.configuration.postQS;


var oNewUpload=new vp.upload.FlashUpload(me,sFileName,iFileSize,
_oMovie,iMovieUploadId,postQueryString);


me.pushUpload(oNewUpload);
};


if(!vp.upload.disableFlash&&
(vp.upload.useFlash===1||
(vp.upload.useFlash===2&&me.repetitionType==vp.upload.RepetitionType.Multiple)))
{
init();
}
};








vp.upload.FromExternalUrlManager=function $vpfn_qek$ZbbCf$EdcPrK9zaIgQ1479$35(sConfigurationKey)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.inheritFrom=vp.upload.Manager;
this.inheritFrom(sConfigurationKey,vp.upload.RepetitionType.Multiple);






var _aUrlQueue=new Array();
var _aUrlInProgress=new Array();




var MAX_CONCURRENT_DOWNLOADS=3;





this.addUrlToQueue=function $vpfn_w5hW$rC2Ltl5Yhxv7UHzQw1507$25(sourceData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.logStart("thirdparty",1);


var oNewUpload=new vp.upload.FromExternalUrlUpload(me,sourceData);

me.pushUpload(oNewUpload);

};

this.requestStart=function $vpfn_tVscn5cg8JVJSNXK8gfcFA1519$24(oNewUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


oNewUpload.oncomplete.addHandler(
function $vpfn_0No3gnZrdPgNbS20TvHvzA1524$12(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_aUrlInProgress.contains(this))
{
_aUrlInProgress.removeValue(this);
}
checkQueue();
}.getClosure(oNewUpload));


_aUrlQueue.push(oNewUpload);
checkQueue();

};




var checkQueue=function $vpfn_ajMSJUvRvDtN2cPgIXcVFA1542$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
while(_aUrlQueue.length>0&&_aUrlInProgress.length<MAX_CONCURRENT_DOWNLOADS)
{

var oNextUpload=_aUrlQueue.shift();
_aUrlInProgress.push(oNextUpload);
oNextUpload.internalStart();
}
};

};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;




}








if(typeof vp=="undefined")
{
var vp={};
}

if(typeof vp.upload=="undefined")
{
vp.upload={};
}

if(typeof vp.upload.tracking=="undefined")
{
vp.upload.tracking={};
}







vp.upload.tracking.UploadTracker=function $vpfn_aI9DY1mtlERib6KDsoLvLg36$35(
trackUrl,
fid,
uploadStartedCallBack,
progressUpdateCallBack,
uploadCompleteCallBack)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;




this.trackUrl=trackUrl;





this.trackProxyUrl="/vp/ns/upload/UploadProgressTrackerProxy.aspx";




this.fid=fid;

this.uploadStartedCallBack=uploadStartedCallBack||function(totalFileSize,fileName){};
this.progressUpdateCallBack=progressUpdateCallBack||function(receivedFileSize,timeElapsed){};
this.uploadCompleteCallBack=uploadCompleteCallBack||function(bError){};







this.fileSizeTolerance=500;





this.uploadStarted=false;





this.uploadServer;





this.startTime=(new Date()).getTime();






this.uploadStartedTriesRemaining=4;





this.defaultUploadStartTimeout=3000;
this.uploadStartTimeout=this.defaultUploadStartTimeout;




this.uploadFileName="";




this.totalFileSize=0;






this.lastFileSizeOnServer=-1;




this.numberOfInvalidServerResponses=0;







this.refreshUploadInformation=false;





this.refreshRateScale=0.01;




this.refreshRateMax=10;




this.refreshRateMin=3;




this.transferComplete=false;




this.cancelTracking=false;




this.cancel=function $vpfn_1q7o$M3Tda0ovmfHjSlC6g164$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.cancelTracking=true;
};




this.updateProgressFromServer=function $vpfn_RIlX9V6F5n_ZySyboyQWtA173$36()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(me.cancelTracking)
{
return;
}



var rnd=Math.round(Math.random()*10000);
var queryString='?random='+rnd+'&fid='+me.fid;


if(!me.uploadStarted)
{
queryString+='&getdata_triesleft='+me.uploadStartedTriesRemaining;
}else
{
queryString+='&refreshstatus='+me.refreshUploadInformation+'&server='+me.uploadServer;
}




vp.upload.tracking.getAsync(me.trackUrl+queryString,me.processServerResponse);

};




this.processServerResponse=function $vpfn_NlAhbxW5PDw_1Sj0L4sIsw206$33(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(me.cancelTracking)
{
return;
}



var fileSizeOnServer=-1;
try
{


var response=vp.http.parseJSON(sResponse);




if(false)
{

me.onUploadCompleteCallBack(true);
return;
}


fileSizeOnServer=parseInt(response.bytesReceived);

if(isNaN(fileSizeOnServer))
{
throw"Error Parsing File Size On Server";
}





if(!me.uploadStarted&&fileSizeOnServer!=-1)
{

if(!response.hasFileInfo)
{
throw"File Transfer Response is not fully qualified as expected";
}


if(!response.server)
{
throw"Error Parsing Upload Server";
}
me.uploadServer=response.server;


me.totalFileSize=parseInt(response.totalExpectedBytes);

if(isNaN(me.totalFileSize))
{
throw"Error Parsing Total File Size";
}

me.totalFileSize=me.totalFileSize-me.fileSizeTolerance;


if(!response.clientFileName)
{
throw"Error Parsing Upload File Name";
}
me.uploadFileName=response.clientFileName;

}
}catch(ex)
{

me.numberOfInvalidServerResponses++;
if(me.numberOfInvalidServerResponses>=2)
{

me.onUploadCompleteCallBack(true);

return;
}
}




if((!me.uploadStarted)&&((fileSizeOnServer==-4)||(fileSizeOnServer>0)))
{

me.onUploadStartedCallBack();
}


if(fileSizeOnServer<0)
{


if((fileSizeOnServer==-1)&&(!me.uploadStarted)&&(me.uploadStartedTriesRemaining>0))
{

me.uploadStartedTriesRemaining=me.uploadStartedTriesRemaining-1;

me.refreshUploadInformation=true;
}
else if(fileSizeOnServer==-4)
{

me.onUploadCompleteCallBack(false);

return;
}
else
{

me.onUploadCompleteCallBack(true);

return;
}
}
else
{

if(me.uploadServer==="")
{

me.onUploadCompleteCallBack(true);

return;
}


if(fileSizeOnServer>=me.totalFileSize)
{

me.onUploadCompleteCallBack(false);
return;
}


me.progressUpdateCallBack(fileSizeOnServer,me.getElapsedTime());

}





if(fileSizeOnServer==me.lastFileSizeOnServer)
{

me.refreshUploadInformation=true;
}else
{

me.refreshUploadInformation=false;
}
me.lastFileSizeOnServer=fileSizeOnServer;


var refreshRate=0;

if(me.uploadStarted)
{
refreshRate=me.calculateRefreshRate(fileSizeOnServer,me.totalFileSize,me.getElapsedTime());
}
else
{

me.uploadStartTimeout=me.uploadStartTimeout+me.defaultUploadStartTimeout;


refreshRate=me.uploadStartTimeout;
}


if(!me.cancelTracking)
{
window.setTimeout(me.updateProgressFromServer,refreshRate);
}

};






this.onUploadStartedCallBack=function $vpfn_hJAbpKN0ntzxfq1LxDJTxg396$35()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.uploadStarted=true;


me.uploadStartedCallBack(me.totalFileSize,me.uploadFileName);
};






this.onUploadCompleteCallBack=function $vpfn_uu4liQxyuG0Um1T7esXfEw410$36(bError)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!me.uploadStarted)
{
me.onUploadStartedCallBack();
}


me.transferComplete=true;
me.uploadCompleteCallBack(bError);
};





this.calculateRefreshRate=function $vpfn_HEcOx3_wKiN$qO6K4kvsrQ427$32(fileSizeOnServer,totalFileSize,timeElapsed)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




var diskRate=fileSizeOnServer/timeElapsed;



var timeRefreshStep;


timeRefreshStep=1000*(me.refreshRateMin+1/((diskRate*me.refreshRateScale)+1/(me.refreshRateMax-me.refreshRateMin)));

return timeRefreshStep;
};




this.getElapsedTime=function $vpfn_igRmlrGIKznLo59U2f49KA448$26()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return((new Date()).getTime()-me.startTime);
};



setTimeout(me.updateProgressFromServer,me.uploadStartTimeout);
};




vp.upload.tracking.SmoothUploadTracker=function $vpfn_0C2vdCZT8oFbJtFE$M_YuQ461$41(fnStartingCallback,fnProgressCallback,fnCompleteCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;
var UPDATE_INTERVAL_MS=100;
var MAX_STEP_PERCENT=0.10;

var _fnStartingCallback=fnStartingCallback||function(iTotalBytes){};
var _fnProgressCallback=fnProgressCallback||function(iSentBytes,iElapsedMs){};
var _fnCompleteCallback=fnCompleteCallback||function(){};




var _iProgressThreadId=0;




var _iStartMs=(new Date()).getTime();




var _iTotalBytes=0;




var _iMaxStepBytes=0;




var _iSmoothSentBytes=0;




var _iSmoothStepBytes=0;





this.setStarting=function $vpfn_OzneZaN$j$9kfyvPfI5TQA505$23(iTotalFileSize)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_iTotalBytes=iTotalFileSize;
_iMaxStepBytes=iTotalFileSize*MAX_STEP_PERCENT;


_fnStartingCallback(iTotalFileSize);
};




this.setProgress=function $vpfn_frc0LOENtwaoCPdhV8l2zw518$23(iSentBytes)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}





var iElapsedMs=(new Date()).getTime()-_iStartMs;
var fActualTransferRate=iSentBytes/iElapsedMs;
var fActualTimeRemaining=Math.max(1,_iTotalBytes-iSentBytes)/fActualTransferRate;






var fSmoothTransferRate=(_iTotalBytes-_iSmoothSentBytes)/fActualTimeRemaining;
var fSmoothBytesIncrement=fSmoothTransferRate*UPDATE_INTERVAL_MS;


_iSmoothStepBytes=Math.min(fSmoothBytesIncrement,_iMaxStepBytes);


startProgress();
};




this.setComplete=function $vpfn_IbOgwoE6Z6nWX$uycjYTkA547$23(bError)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(bError)
{
finishProgress();
return;
}


var iBytesRemaining=_iTotalBytes-_iSmoothSentBytes;
var iStepsRemaining=iBytesRemaining/_iSmoothStepBytes;
var iTimeRemaining=iStepsRemaining*UPDATE_INTERVAL_MS;



if(_iSmoothStepBytes<=0||iTimeRemaining>1000)
{
_iSmoothStepBytes=_iMaxStepBytes;
}


startProgress();
};




this.cancel=function $vpfn_1q7o$M3Tda0ovmfHjSlC6g575$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(_iProgressThreadId>0)
{
clearInterval(_iProgressThreadId);
}
};




var startProgress=function $vpfn_1rWFEMk0hU__$dK_HUwS3w587$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(_iProgressThreadId===0)
{
_iProgressThreadId=setInterval(updateSmoothProgress,UPDATE_INTERVAL_MS);
}
};




var finishProgress=function $vpfn_HlHaPm6I9OcHUQqf2pUzRg599$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(_iProgressThreadId>0)
{
clearInterval(_iProgressThreadId);
}


_fnCompleteCallback();
};




var updateSmoothProgress=function $vpfn_YiZOaUbUG$emyX2NxSqDUg614$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_iSmoothSentBytes=Math.min(_iTotalBytes,_iSmoothSentBytes+_iSmoothStepBytes);


var iElapsedMs=(new Date()).getTime()-_iStartMs;


_fnProgressCallback(_iSmoothSentBytes,iElapsedMs);


if(_iSmoothSentBytes>=_iTotalBytes)
{

finishProgress();
}
};
};




vp.upload.tracking.getAsync=function $vpfn_IDqSw0k$vhx7R3_Pn5BGYw637$30(sUrl,fnCallBack,fnErrorCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var request=new vp.crossdomain.ProxyIFrameRequest();
request.getAsync(sUrl,fnCallBack,fnErrorCallback);
};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}

if(typeof vp=="undefined")
{
var vp={};
}

if(!vp.dialogs)
{
vp.dialogs=function(){};
}

if(!vp.dialogs.proxybase)
{
vp.dialogs.proxybase=function(){};
}


vp.dialogs.proxybase.proxies=[];






vp.dialogs.proxybase.getProxy=function $vpfn_Grb_vR8SpJhs78hvBsYElw26$32(sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.dialogs.proxybase.proxies[sName];
};






vp.dialogs.proxybase.ModalDialogProxy=function $vpfn_cSEF0d90Re7sc6sL7n2EjQ36$40(title,width,height)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;




this.modalDialogName;

this.modalDialogHeight=height;

this.modalDialogWidth=width;

this.modalDialogTitle=title;









this.launchDialog=function $vpfn_fHulk7JTD_5uEfMboj6RJQ59$24(iDialogIndex)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.launch();

var oDialog=vp.dialog.get(me.modalDialogName);

if(!oDialog)
{
oDialog=vp.dialog.NodeDialog.create(me.modalDialogName,
me.modalDialogTitle,
vp.ui.get(me.dialogReplacableContentNode),
vp.dialog.chrome.Tabbed,
me.modalDialogWidth,
me.modalDialogHeight,
{

preventMouseEventBubbling:false
});
}


oDialog.onclose.removeAll();
oDialog.onclose.addHandler(me.finish);


vp.ui.get(me.dialogReplacableContentNode).style.display="block";


oDialog.open();



if(!me.sActiveDialogName||typeof(iDialogIndex)!=="undefined")
{
var iIndex=iDialogIndex||0;
me.sActiveDialogName=me.getDialogNameByIndex(iIndex);
}


me.displayDialog(me.sActiveDialogName);
};





this.close=function $vpfn_Sk1YAruCnj$nmcHv$GbnOg105$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.dialog.closeCurrent();
};
};

vp.dialogs.proxybase.Proxy=function $vpfn__ISH0GkbX0EQEyrBh7EmwQ111$29(sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var me=this;


this.sActiveDialogName;


var navHistory=[];


var bInitialized=false;


this.sLogUrl;




this.buttons=[];




this.dialogReplacableContentNode;




this.myName=sName;




this.constructorList=[];




this.dialogConstructors=[];




this.dialogNames=[];




this.dialogPointers=[];




this.dialogParameters={};




this.data;




this.callback;




this.parameters={};




this.cancelled=true;


this.oncancel=new vp.events.CustomEvent(me,"oncancel");





var log=function $vpfn_tIuZ3FVPzFuaqYdyIz0V9Q195$14(oUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

oUrl.setItem("ts",new Date().valueOf());

var fnLog=function $vpfn_5hD_ra_FLlS9GA$8atqGuw200$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.http.getAsync(this.url);

}.getClosure({url:oUrl.toString()});


setTimeout(fnLog,0);
};




this.goBack=function $vpfn_IWCeyAXggQPyC7JNX7AnMw214$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var navDest;
if(me.navHistory.length<1)
{
throw"Could not go back, no previous history elements found";
}

navDest=navHistory.pop();
me.goTo(navDest);
};





this.goNext=function $vpfn_LxOD5iAA0nmqsQgUcgbz4Q230$18(sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!sName)
{
sName=getActiveDialog().nextTarget;
}
if(!me.dialogNames.contains(sName))
{
throw"Could not find dialog!";
}

navHistory.push(sName);
me.goTo(sName);
};




this.putInModalDialog=function $vpfn_hId8iG12XuhhRErHbPMu9Q248$28(title,width,height)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.dialogs.proxybase.ModalDialogProxy.call(me,title,width,height);
};




this.launch=function $vpfn_tWmUY8yBoZpzDj_3yN7G$w256$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!me.bInitialized)
{
initialize();
me.bInitialized=true;
}


if(me.sLogUrl)
{
var oLogUrl=new vp.web.URL(me.sLogUrl);
oLogUrl.setItem("logtype","open");
oLogUrl.setItem("dialog_name",me.modalDialogName);
oLogUrl.setItem("dialog_tab_name",me.sActiveDialogName);
log(oLogUrl);
}


me.cancelled=true;
};




this.close=function $vpfn_Sk1YAruCnj$nmcHv$GbnOg282$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.finish();
};





this.displayDialog=function $vpfn_G3OIDsCWH9gd9rJf02FkIA291$25(sDialogToDisplay)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.dialogPointers[sDialogToDisplay].onbeforeload.fire();

vp.ui.get(sDialogToDisplay+'-'+sName).style.display="block";

me.dialogPointers[sDialogToDisplay].onload.fire();
};





this.hideDialog=function $vpfn_gV1KzmMqhD4_7Seds4vAEA304$22(sDialogToHide)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.dialogPointers[sDialogToHide].onbeforeunload.fire();

vp.ui.get(sDialogToHide+'-'+sName).style.display="none";

me.dialogPointers[sDialogToHide].onunload.fire();
};





this.goTo=function $vpfn_UKC0uZjBkfo1cjORPW1x6A317$16(sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.sActiveDialogName===sName)
{
return;
}


if(me.sActiveDialogName)
{
me.hideDialog(me.sActiveDialogName);
}


me.sActiveDialogName=sName;


me.displayDialog(me.sActiveDialogName);


if(me.sLogUrl)
{
var oLogUrl=new vp.web.URL(me.sLogUrl);
oLogUrl.setItem("logtype","opentab");
oLogUrl.setItem("dialog_name",me.modalDialogName);
oLogUrl.setItem("dialog_tab_name",me.sActiveDialogName);
log(oLogUrl);
}
};




this.createDialogs=function $vpfn_ein90ugTNDdwXWF9ex26XQ351$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var func;
for(var i=0;i<me.constructorList.length;i++)
{
func=eval("func = ("+me.constructorList[i]+");");
me.dialogConstructors.push(func);
}
};





this.registerDialogPointer=function $vpfn_GASJgYvwWW7uCee1JLyQHQ365$33(oDialogPointer)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.dialogPointers[oDialogPointer.name]=oDialogPointer;
};




this.getDialog=function $vpfn_0sqGpzxnBpcCsG3B_PhS$w373$21(sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me.dialogNames.contains(sName))
{
throw"Could not find dialog!";
}
var oDialog=me.dialogPointers[sName];
if(!oDialog)
{
throw"Could not find dialog pointer";
}
return oDialog;
};




this.getDialogNameByIndex=function $vpfn_pgAEPBPxfXTSvYz02ZPuFg390$32(iIndex)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.dialogNames.length<1)
{
throw"Nothing to display!";
}
if(iIndex<0||iIndex>=me.dialogNames.length)
{
throw"Index out of bounds";
}

return me.dialogNames[iIndex];
};




var getActiveDialog=function $vpfn_9c_iaXQlWewGcWEQ04YH0g407$26()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me.sActiveDialogName)
{
throw"Unable to get active dialog pointer";
}

var activeDialogPointer=me.dialogPointers[me.sActiveDialogName];

if(!activeDialogPointer)
{
throw"Unable to get active dialog pointer";
}

return activeDialogPointer;
};




this.getActiveDialogName=function $vpfn_NpXS2dJz6ybmUS684KyS5w427$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me.sActiveDialogName;
};





this.registerButton=function $vpfn_DrBQXyqIS7SCpcM6WVkxqg436$26(sButton)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.buttons.contains[sButton])
{
throw"Cannot add duplicate button ("+sButton+") to the button collection";
}

me.buttons.push(sButton);
};




var initialize=function $vpfn_Qds0_vECY4WZKddionzdmg449$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=0;i<me.dialogConstructors.length;i++)
{
var dialog=me.dialogConstructors[i](me);
dialog.parameters=me.dialogParameters[dialog.name];
}



vp.core.applyProperties(me.parameters,me);
};




this.finish=function $vpfn_aLq8uOrNUHSs$CvB$6dMTg465$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.hideDialog(me.sActiveDialogName);

if(me.cancelled)
{
me.oncancel.fire();
}


if(!me.cancelled&&me.callback)
{

me.cancelled=true;


me.callback(me.data);
}

if(me.sLogUrl)
{
var oLogUrl=new vp.web.URL(me.sLogUrl);
oLogUrl.setItem("dialog_name",me.modalDialogName);
if(me.bCancelled)
{
oLogUrl.setItem("logtype","cancel");
}else
{
oLogUrl.setItem("logtype","close");
}
oLogUrl.setItem("dialog_active_tab_name",me.sActiveDialogName);
log(oLogUrl);
}
};


vp.dialogs.proxybase.proxies[me.myName]=this;
};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}
if(!vp.dialogs)
{
vp.dialogs=function(){};
}

if(!vp.dialogs.dialogbase)
{
vp.dialogs.dialogbase=function(){};
}






vp.dialogs.dialogbase.BaseDialog=function $vpfn_zzf89edpcDPXb2y5AjIOHA17$35(sName,oProxy)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var me=this;




this.name=sName;




this.active=false;




this.onload=new vp.events.CustomEvent(me,"onload");




this.onbeforeload=new vp.events.CustomEvent(me,"onbeforeload");




this.onunload=new vp.events.CustomEvent(me,"onunload");




this.onbeforeunload=new vp.events.CustomEvent(me,"onbeforeunload");




this.proxy=oProxy;




this.parameters={};


me.onload.addHandler(function $vpfn__u9PJyyj5RZXp0S0M5YoFQ63$25(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}me.active=true;});
me.onunload.addHandler(function $vpfn__u9PJyyj5RZXp0S0M5YoFQ64$27(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}me.active=false;});


me.proxy.registerDialogPointer(this);
};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}


vp.define("vp.dialogs.dialogbase");

vp.dialogs.MyComputerUploadsDialog=function $vpfn_zj4SAEKPKYqYhgCQNkCjYw6$37(name,proxy)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.dialogs.dialogbase.BaseDialog.call(this,name,proxy);


var me=this;

var _oTooltip;


this.initialized=false;

var hookupProgressUIs=function $vpfn_g75bpjnS15rDGt_5rjfOuw19$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oFileInput=vp.upload.createFileInput(30,true);
vp.ui.get('divUploadWidget-'+proxy.myName).appendChild(oFileInput);


var repetitionType=me.proxy.bIsMultiUpload?
vp.upload.RepetitionType.Multiple:vp.upload.RepetitionType.Single;


var oManager=vp.upload.managerFactory.create('uploadConfiguration-'+proxy.myName,
repetitionType,
vp.upload.EmptyInputAction.None);


oManager.registerFileInput(oFileInput);


if(me.proxy.data.progress)
{
oManager.registerProgress(me.proxy.data.progress);
}
if(!me.proxy.bIsMultiUpload)
{
oManager.registerProgress(new vp.upload.ProgressArea('singleUploadProgressDiv-'+proxy.myName));
oManager.registerProgress(new vp.upload.ProgressFinalizer(me.proxy.uploadCompleteCallback));
}


if(me.proxy.addImageWarning)
{
oManager.checkUploadAllowedExternal=me.proxy.addImageWarning;
}


if(!(vp.upload.FlashVersion.enabled&&me.proxy.bIsMultiUpload))
{
vp.ui.collapse('uploadWidgetHeaderDetailed-'+proxy.myName);
vp.ui.collapse('uploadWidgetSubheaderDetailed-'+proxy.myName);
vp.ui.show('uploadWidgetHeader-'+proxy.myName);
vp.ui.show('uploadWidgetSubheader-'+proxy.myName);
}
};

var loaded=function $vpfn_pEELL8eBkEwqMlmYeOF7xg64$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.proxy.bIsMultiUpload)
{
if(vp.ui.get('divRepositoryCallout-'+proxy.myName))
{
vp.ui.collapse('divRepositoryCallout-'+proxy.myName);
}
}
else
{
if(!me.proxy.data)
{

me.proxy.data={};
}
}

if(!me.initialized)
{
hookupProgressUIs();
me.initialized=true;
}


var oTriggerElement=vp.ui.get("imgImageLibraryHelpIcon");
var oContentElement=vp.ui.get("divImageLibraryTooltip");
if(oTriggerElement&&oContentElement)
{


_oTooltip=new vp.widget.RichTooltip(oTriggerElement,oContentElement);


_oTooltip.skin=vp.widget.RichTooltip.skins.Message;



_oTooltip.setBehavior(window.TOOLTIP_BEHAVIOR_SHOW_CUSTOM);
_oTooltip.renderingStrategy=vp.widget.RichTooltip.renderingStrategies.Right;


$("#imgImageLibraryHelpIcon").unbind('click');
$("#imgImageLibraryHelpIcon").bind('click',toggleImageLibraryTooltipDisplay);
}
};

var toggleImageLibraryTooltipDisplay=function $vpfn_INZIhu3pSFmTt6FgfqaoOQ111$43()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_oTooltip)
{
return;
}

if(_oTooltip.visible)
{
_oTooltip.hide();
}
else
{
_oTooltip.show();
}
};

var unloaded=function $vpfn_CpiGCxe_EcNLm5xWjgtYsQ128$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me.proxy.parameters.alwaysAllowContinue)
{

vp.upload.pageQueue.cancelAllUploads();
}

vp.upload.hideMultiSelectTip();
};




this.openLibrarySearch=function $vpfn_FPh3PxOgc1yU0_K9M_sgiQ142$29()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.proxy.getDialog('previousdialog').forceLibrarySearch=true;
me.proxy.goNext('previousdialog');
};




this.openMapDialog=function $vpfn_vkCtnioJNgjfWlyYo0rb3A151$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.proxy.data="addmap";


me.proxy.cancelled=false;


me.proxy.close();
};

me.onload.addHandler(loaded);


if(me.proxy.bIsMultiUpload)
{
me.onbeforeunload.addHandler(unloaded);
}

};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}



vp.define("vp.dialogs");




vp.dialogs.SingleImageUploader=function $vpfn_6yVSJynlCBYIQbo4aYdLnA10$33(proxyName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.dialogs.proxybase.Proxy.call(this,proxyName);

var me=this;













this.$oTabContainer=$("#"+proxyName+"_TabContainer");


var oError;


var fnParentLaunch=this.launch;
this.launch=function $vpfn_RinUG0L$o2HnxRyfelaXbg36$18(iDialogIndex)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

$('#tab-table-'+proxyName).show();

if(!me.bIsMultiUpload)
{
$('#singleUploadProgressDiv-'+proxyName).hide();
}


$("#tab-table-"+proxyName).show();


fnParentLaunch(iDialogIndex);
};


var fnParentDisplayDialog=this.displayDialog;
this.displayDialog=function $vpfn__cSNeV6_E1SN_pnez69G4w55$25(sTarget)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var iTabIndex=me.dialogNames.indexOf(sTarget);







if(me.$oTabContainer&&iTabIndex>=0)
{
me.$oTabContainer.tabs({selected:iTabIndex});
}


fnParentDisplayDialog(sTarget);
};




this.launchDialog=function $vpfn_RIcTDibSqAo0Zs7ZpDbqzw78$24(iIndex)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.launch();


vp.ui.show("tab-table-"+me.myName);

if(!this.bIsMultiUpload)
{
vp.ui.collapse("singleUploadProgressDiv-"+me.myName);
}


vp.ui.get("tab-table-"+me.myName).style.display="block";


vp.ui.get(me.dialogReplacableContentNode).style.display="block";


if(!me.sActiveDialogName)
{
me.sActiveDialogName=me.getDialogNameByIndex(iIndex||0);
}


me.displayDialog(me.sActiveDialogName);
};





this.uploadCompleteCallback=function $vpfn_eW9PK39a$qheRaV50pXDoA110$34(oEvent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$('#singleUploadProgressDiv-'+proxyName).hide();
$('#tab-table-'+proxyName).show();

if(oEvent.cancel)
{
return;
}
else if(oEvent.error)
{

if(!oError)
{
oError=new vp.upload.ErrorUI();

var errorContent=vp.ui.get('uploadErrorContainer-'+proxyName);
errorContent.appendChild(oError.element);
}

oError.setError(oEvent);
$('#uploadErrorContainer-'+proxyName).show();
vp.ui.setStyleValue('uploadWidgetContainer-'+proxyName,'height',0);
}
else
{
$('#uploadErrorContainer-'+proxyName).hide();
vp.ui.setStyleValue('uploadWidgetContainer-'+proxyName,'height',250);

var oImage;


if(oEvent.success.images)
{
oImage=oEvent.success.images[0];
}

else
{
var sType=vp.image.Type.CustomerSiteUpload;
if(window.altSiteID)
{
sType=vp.image.Type.CustomerSiteUpload;
}
if(window.altEmailMarketingAccountID)
{
sType=vp.image.Type.EmailMarketingUpload;
}
oImage=new vp.image.Image(sType,oEvent.uploadId);
}

me.onSelectImage(oImage);
}
};





this.uploadStatusHandler=function $vpfn_tPxWvX6UmAjf2DXISfzHQw169$31(oEvent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oEvent.processing||oEvent.uploading)
{
$('#tab-table-'+proxyName).hide();
$('#singleUploadProgressDiv-'+proxyName).show();
}
};




this.chooseImages=function $vpfn_qZqkyNihLKf0DLs8Skrdrg181$24(vImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!vImages)
{
return;
}


me.onSelectImage(vImages);
};





this.onSelectImage=function $vpfn_3Ws69a$k$R3W9UId_qkKWw196$25(oImage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.imageDataMode)
{
me.data=oImage;
}
else
{

me.data=oImage.id;
}


me.cancelled=false;


me.close();
};



vp.upload.pageQueue.onstatuschange.addHandler(function $vpfn_ZIpLG3VtYCJNFvSWA_Iaqg217$50(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}me.uploadStatusHandler(e);});
};





vp.dialogs.MultiImageUploader=function $vpfn_CyZuOnunxhhyjTyPVxZPBw224$32(proxyName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.dialogs.SingleImageUploader.call(this,proxyName);
var me=this;





this.bIsMultiUpload=true;

var oFinishedButton=vp.ui.get('FinishedButton-'+proxyName);
var oFinishedButtonDisabled=vp.ui.get('FinishedButtonDisabled-'+proxyName);
var oCancelButton=vp.ui.get(proxyName+'CancelButton');





this.onrepositorychange=new vp.events.CustomEvent(this,"onrepositorychange");






this.oImagesInRepository={};


var fnParentLaunch=this.launch;
this.launch=function $vpfn_RinUG0L$o2HnxRyfelaXbg255$18(iDialogIndex)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.parameters.alwaysAllowContinue)
{
$(oCancelButton).hide();
}
else
{
$(oCancelButton).show();
}

me.hookUpRepository();
fnParentLaunch(iDialogIndex);
};




this.uploadStatusHandler=function $vpfn_tPxWvX6UmAjf2DXISfzHQw273$31(oEvent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.parameters.alwaysAllowContinue)
{
return;
}

if(oEvent.processing||oEvent.uploading)
{

if(oFinishedButton)
{
$(oFinishedButton).hide();
}

if(oFinishedButtonDisabled)
{
$(oFinishedButtonDisabled).show();
}
}
else
{

if(oFinishedButtonDisabled)
{
$(oFinishedButtonDisabled).hide();
}

if(oFinishedButton)
{
$(oFinishedButton).show();
}
}
};




this.hookUpRepository=function $vpfn_RMgjv14fXJKeyN_ctJuLyw311$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me.data)
{
me.data=new vp.upload.RepositoryModel();
}

if(!me.repositoryView)
{
me.repositoryView=new vp.upload.RepositoryView(
{
repository:me.data,
configurationKey:'uploadConfiguration-'+proxyName
});

var $container=$("#divRepository-"+proxyName);
$container.addClass("upload-repository");

me.repositoryView.setElement($container).render();
me.data.on("add remove",updateImageCount);
updateImageCount();

me.data.on("uploadsuccess",me.setImage);
me.data.on("remove",me.removeImage);
}
};




var updateImageCount=_.debounce(function $vpfn_ZIpLG3VtYCJNFvSWA_Iaqg341$38()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$("#divRepositoryCount-"+proxyName).html(" ("+me.data.size()+")");
},0);




this.finishClose=function $vpfn_LSzpS9hx8oGa$F8z842lgQ349$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.cancelled=false;
me.close();
};




this.chooseImages=function $vpfn_qZqkyNihLKf0DLs8Skrdrg359$24(vImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!vImages)
{
return;
}


me.addImages(vImages);
};




this.addImages=function $vpfn_aVoypXtLYgWwYKNaAdd4Lg373$21(aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oRepository=me.data;
for(var i=0,l=aImages.length;i<l;i++)
{

var warningMessage=me.addImageWarning(1);
if(warningMessage)
{
me.onrepositorychange.fire();
alert(warningMessage);
return;
}


var oSelectedImage=aImages[i];
oSelectedImage.disabled=true;


if(!me.oImagesInRepository[oSelectedImage.id])
{
me.setImage(oSelectedImage);
oRepository.addImage(oSelectedImage);
}
}

me.onrepositorychange.fire();
};





this.setImage=function $vpfn_BpxqisOgw9WAwqSXY1AOeQ406$20(oEntry)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oImage=oEntry.image||oEntry;
me.oImagesInRepository[oImage.id]=oImage;
};




this.removeImage=function $vpfn_tJ1SRizKhyYQLc7yT1F2BA415$23(oEntry)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oEntry.image)
{
return;
}

var oRepositoryImage=me.oImagesInRepository[oEntry.image.id];
if(!oRepositoryImage)
{

return;
}


oRepositoryImage.disabled=false;

delete me.oImagesInRepository[oEntry.image.id];


me.onrepositorychange.fire({remove:true,upload:oEntry.upload});
};





this.addImageWarning=function $vpfn_x3v4jl9bj6dcZaaaLaRgaw442$27(iImageCount)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var currentLength=me.data.getEntries().length;
if(me.parameters.maxImageCount>0&&currentLength+iImageCount>me.parameters.maxImageCount)
{
return me.parameters.maxImageCountWarning;
}
return null;
};


if(oFinishedButtonDisabled)
{
vp.ui.collapse(oFinishedButtonDisabled);
}
};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}if(!vp.dialogs)
{
vp.dialogs=function(){};
}

if(!vp.dialogs.dialogbase)
{
vp.dialogs.dialogbase=function(){};
}





vp.dialogs.SelectableImageDialog=function $vpfn_8VxTuD1DrR3RBRYgd$lv_w15$35(name,proxy)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.dialogs.dialogbase.BaseDialog.call(this,name,proxy);


var me=this;


this.webService;


this.initialized=false;


var myName=me.proxy.myName+"-"+name;


var iSearchSemaphore=0;


this.oSelectableImageCollection;


this.selectors=
[
'#loginFrame-'+myName,
'#loadingContainer-'+myName,
'#noImagesMessage-'+myName,
'#informationContainer-'+myName,
'#paginatorContainer-'+myName,
'#imagesContainer-'+myName
];


this.states=
{
signIn:
[
'#loginFrame-'+myName
],
loading:
[
'#loadingContainer-'+myName
],
noImages:
[
'#noImagesMessage-'+myName
],
imageResults:
[
'#informationContainer-'+myName,
'#paginatorContainer-'+myName,
'#imagesContainer-'+myName
]
};


var sCurrentState='';







this.changeState=function $vpfn_WuImlQRzEAJAmjXpCgYVBQ81$23(state)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var bIsStateChange=false;

if(state!=sCurrentState)
{
sCurrentState=state;
bIsStateChange=true;
}

var visibleStates=me.states[state];
if(!visibleStates)
{
throw new Error("Tried to change to a nonexistent state.");
}


for(var i=0,l=me.selectors.length;i<l;i++)
{
var selector=me.selectors[i];
if(visibleStates.contains(selector))
{
$(selector).show();
}
else
{
$(selector).hide();
}
}

if(vp.web.getQueryString("dbguploader"))
{
vp.dialog.get(me.proxy.modalDialogName).setTitle("Debugging [Current state: "+state+"]");
}

return bIsStateChange;
};




this.getState=function $vpfn_zB6PkvuKowsMDhKB7hSQew122$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return sCurrentState;
};




this.imageSelectHandler=function $vpfn_bJ2mHEEaxBkA7fCuGVnw1g130$30(aItems)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var aImages=[];
for(var i=0;i<aItems.length;i++)
{
var oItem=aItems[i];
if(!oItem.disabled)
{
aImages.push(oItem);
}
}

if(me.proxy.bIsMultiUpload)
{

me.proxy.addImages(aImages);
}
else if(aImages.length>0)
{

me.proxy.onSelectImage(aImages[0]);
}
};




this.getPreviewUrl=function $vpfn_bbojtlqjyfhX9Gg3kLR7Cg158$25(oImage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oImagePreview=new vp.image.ImagePreview(oImage);
oImagePreview.previewSize.width=me.parameters.maxImageWidth;
oImagePreview.previewSize.height=me.parameters.maxImageHeight;
return oImagePreview.getPreviewUrl();
};




this.buildImageContainer=function $vpfn_Lwiq_GAURlk4pc0vs5vpFQ169$31(oItem)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var elements=vp.dialogs.SelectableImageDialog.buildPreviewContainer({
containerWidth:me.parameters.maxImageWidth+16,
containerHeight:me.parameters.maxImageHeight+8,

containerClass:me.proxy.bIsMultiUpload?"item-container item-container-multi":"item-container",
hover:me.proxy.bIsMultiUpload
});

elements.jContainer.click(function $vpfn_Aw4aoNXAK0$ozVoFg1w9hg180$34()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.imageSelectHandler([oItem]);
return false;
});


if(oItem&&oItem.type&&oItem.id)
{
elements.jPreview.addClass("image-"+oItem.type+"-"+oItem.id);
}


var fnCallback=function $vpfn_sE_BCTshTQi5j7XDg7hg3A193$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

elements.jPreview.load(function $vpfn_Aw4aoNXAK0$ozVoFg1w9hg196$35()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(this).show();
vp.ui.scaleImageToFit(this,me.parameters.maxImageWidth,me.parameters.maxImageHeight);
}).attr("src",me.getPreviewUrl(oItem));
};



setTimeout(fnCallback,0);

return elements.jContainer;
};




this.initializeImageCollection=function $vpfn_nKMCV9puvEI1SXyv4$0VvQ213$37()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.oSelectableImageCollection=new vp.widget.SelectableItems(
$("#imagesContainer-"+myName)[0],
me.buildImageContainer,
{
itemsPerPage:me.parameters.imagesPerPage,
paginators:["paginator-"+myName],
notDraggables:".item-container",
previewSelector:".preview-image",
draggableSelector:".item-container",
clickToSelect:me.proxy.bIsMultiUpload,
dragToSelect:me.proxy.bIsMultiUpload,
makeItemsDraggable:me.proxy.bIsMultiUpload,
scope:"uploader"
});
};




this.selectAllImagesOnPage=function $vpfn_EMBzeR_oRSYHvp7tT2WscA234$33()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aImages=me.oSelectableImageCollection.getItemsOnPage();
me.imageSelectHandler(aImages);
};




this.dataLoadedHandler=function $vpfn_qCn01AdD2T4leXQrUTOurw243$29()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!me.active)
{
return;
}


if(me.webService.images.length>0)
{
me.changeState("imageResults");
me.oSelectableImageCollection.updateItems(me.webService.images,false,{imageDropHandler:me.imageSelectHandler});
}

else
{
me.changeState("noImages");
}
};






this.login=function $vpfn_SRYQsidQWXfhBcGcs4b0oA269$17(fnCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me.proxy.bIsSignedIn)
{


if(me.changeState('signIn'))
{
var fnLoginCallbackWrapper=function $vpfn_BtjirWDV5WfHDGwDiJea5A277$45()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.proxy.bIsSignedIn=true;
fnCallback();
};

var sUrl="/vp/ns/mini_sign_in.aspx?noguest=1&callback_id=";
sUrl+=vp.win.createCallbackHandler(fnLoginCallbackWrapper);

document.getElementById("loginFrame-"+myName).src=sUrl;
}

return;
}

fnCallback();
};




this.initialSearch=function $vpfn_DmIUNx59BjRKt5QXuPdt0A298$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.login(function $vpfn_Aw4aoNXAK0$ozVoFg1w9hg301$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(me.initialized)
{
return;
}

me.initializeImageCollection();

me.webService=new vp.image.Search(me.dataLoadedHandler,false,me.proxy.pfid);
me.webService.hostName=me.proxy.hostName;

me.doSearch();

me.initialized=true;
});
};




this.doSearch=function $vpfn_TZJgIhK2m36fQPoeWR8U0Q324$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.changeState('loading');
throw new Error("Must override doSearch");
};




this.refreshCollection=function $vpfn_tXLKyUlems0I8H0RzMaCLQ333$29()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.oSelectableImageCollection.refreshItems();
};


me.onunload.addHandler(function $vpfn_Aw4aoNXAK0$ozVoFg1w9hg339$27()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.proxy.onrepositorychange)
{
me.proxy.onrepositorychange.removeHandler(me.refreshCollection);
}
});


me.onload.addHandler(function $vpfn_Aw4aoNXAK0$ozVoFg1w9hg349$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.initialSearch();

if(me.proxy.onrepositorychange)
{
me.proxy.onrepositorychange.addHandler(me.refreshCollection);
}
});

};






vp.dialogs.SelectableImageDialog.buildPreviewContainer=function $vpfn_7A9vdbVNkFvjXQYS$TS3ZA366$57(oOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

oOptions=
jQuery.extend({
checkMarks:true,
containerWidth:80,
containerWidth:80,
hover:false,
previewClass:'preview-image',
containerClass:'item-container',
disabledClass:'disabled',
selectedClass:'selected',
hoveredClass:'hovered'
},(oOptions||{}));


var jPreview=$("<img />")
.hide()
.addClass(oOptions.previewClass);


var jContainer=$("<div />")
.addClass(oOptions.containerClass)
.css({
"width":(oOptions.containerWidth)+"px",
"height":(oOptions.containerHeight)+"px"
})
.append(jPreview);


if(oOptions.hover)
{

jContainer.mouseenter(function $vpfn_Aw4aoNXAK0$ozVoFg1w9hg400$30()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!$(this).hasClass(oOptions.selectedClass)&&!$(this).hasClass(oOptions.disabledClass))
{
$(this).addClass(oOptions.hoveredClass);
}
});

jContainer.mouseleave(function $vpfn_Aw4aoNXAK0$ozVoFg1w9hg408$30()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if($(this).hasClass(oOptions.hoveredClass))
{
$(this).removeClass(oOptions.hoveredClass);
}
});


jContainer.click(function $vpfn_Aw4aoNXAK0$ozVoFg1w9hg417$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(this).removeClass(oOptions.hoveredClass);
});
}


vp.dialogs.SelectableImageDialog.createCheckMarkOverlay(jContainer[0]);

return{jPreview:jPreview,jContainer:jContainer};

};




vp.dialogs.SelectableImageDialog.createCheckMarkOverlay=function $vpfn_x5aCqOrApOmP4aTcmvqEiQ433$58(oContainer)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oCheckmarkOverlay=document.createElement("IMG");
oCheckmarkOverlay.src=vp.ui.imageUrl("/vp/images/B11/common/icon/check-used-photo.png");
vp.ui.addClass(oCheckmarkOverlay,"checkmark-overlay");
vp.ui.addClass(oCheckmarkOverlay,"pngfix");
oContainer.appendChild(oCheckmarkOverlay);
};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}if(!vp.dialogs)
{
vp.dialogs=function(){};
}

if(!vp.dialogs.dialogbase)
{
vp.dialogs.dialogbase=function(){};
}

vp.dialogs.PreviouslyUploadedImagesDialog=function $vpfn_8qreW0wkKfCqjqIHudH91g11$44(name,proxy)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.dialogs.dialogbase.BaseDialog.call(this,name,proxy);


var me=this;


var myName=me.proxy.myName+"-"+name;


var _oMyImages=vp.images.MyImagesMap[myName];


var _oLibraryImages=vp.images.LibraryImagesMap[myName];


this.forceLibrarySearch=false;







var isImageUsed=function $vpfn_wqi$x4WCnTKpQNABGFIeIw37$22(oImage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.proxy.bIsMultiUpload)
{
return!!me.proxy.data.contains(oImage);
}
else
{
return false;
}
};





var onLoad=function $vpfn_4aqYwKgDlfHDiPDOidMY7A53$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.forceLibrarySearch)
{

$('#myImages-'+myName).hide();
$('#libraryImages-'+myName).show();
}
else
{

_oMyImages.showSearchTypes=0;
_oMyImages.showSearchTypes|=(vp.image.search.Type.Upload*(me.proxy.parameters.showUploads?1:0));
_oMyImages.showSearchTypes|=(vp.image.search.Type.Logo*(me.proxy.parameters.showLogos?1:0));
_oMyImages.showSearchTypes|=(vp.image.search.Type.Caricature*(me.proxy.parameters.showCaricatures?1:0));
_oMyImages.showSearchTypes|=(vp.image.search.Type.Album*(me.proxy.parameters.showFolders?1:0));


_oMyImages.load();


$('#libraryImages-'+myName).hide();
$('#myImages-'+myName).show();
}
};






var onItemAddRemove=_.debounce(function $vpfn_Y7KwKqeWuM4zm5I3efFT6w84$37(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}










_oMyImages.refresh();
},0);




var onItemRefresh=function $vpfn_KYCrVk9SG4gZ8oifAMNp1Q102$24(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(e.image)
{

var oImage=e.image;
oImage.disabled=isImageUsed(oImage);
}
else if(e.album)
{

var oAlbum=e.album;
var bAllImages=true;
for(var j=0,len=oAlbum.images.length;j<len;j++)
{
if(!isImageUsed(oAlbum.images[j]))
{
bAllImages=false;
break;
}
}


oAlbum.disabled=oAlbum.images.length>0&&bAllImages;
}
};





this.selectImages=function $vpfn_4Nfpdp076Wp5k_MmBXVDag133$24(vImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.proxy.bIsMultiUpload)
{

var aImages=[];
for(var i=0,len=vImages.length;i<len;i++)
{
var oImage=vImages[i];
if(!isImageUsed(oImage))
{
aImages.push(oImage);
}
}
if(aImages.length>0)
{
me.proxy.chooseImages(aImages);
}
}
else
{

if(!isImageUsed(vImages))
{
me.proxy.chooseImages(vImages);
}
}
};


me.onunload.addHandler(function $vpfn_Y7KwKqeWuM4zm5I3efFT6w163$27()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.forceLibrarySearch=false;


if(me.proxy.bIsMultiUpload)
{

me.proxy.data.off("add remove",onItemAddRemove);


_oMyImages.onrefreshitem.removeHandler(onItemRefresh);
}
});


me.onload.addHandler(function $vpfn_Y7KwKqeWuM4zm5I3efFT6w180$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

onLoad();


if(me.proxy.bIsMultiUpload)
{

me.proxy.data.on("add remove",onItemAddRemove);


_oMyImages.onrefreshitem.addHandler(onItemRefresh);
}
});
};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}
if(!vp.dialogs){
vp.dialogs=function(){};
}


if(!vp.dialogs.dialogbase){
vp.dialogs.dialogbase=function(){};
}

if(!vp.dialogs.getThirdPartyAlbumsCallback)
{
vp.dialogs.getThirdPartyAlbumsCallback={};
}










vp.dialogs.ThirdPartyDialog=function $vpfn_nAShH7tu5ICvSEIcHSazag25$30(sName,oProxy,sImageSourceName,sAuthenticationUri)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.dialogs.SelectableImageDialog.call(this,sName,oProxy);


var me=this;


var myName=me.proxy.myName+"-"+sName;


this.sAuthUrl=sAuthenticationUri;


this.sImageSourceName=sImageSourceName;


this.oSelectableAlbumCollection;




var _oManager=null;


me.selectors.append([
'#accountInfo-'+myName,
'#albumInformationContainer-'+myName,
'#albumBackLink-'+myName,
'#albumsPaginatorContainer-'+myName,
'#albumsContainer-'+myName,
'#selectAllImagesContainer-'+myName,
'#partnerError-'+myName,
'#noAlbumsError-'+myName
]);


this.states.imageResults.push('#accountInfo-'+myName);
this.states.imageResults.push('#albumBackLink-'+myName);
this.states.imageResults.push('#selectAllImagesContainer-'+myName);

this.states.noImages.push('#accountInfo-'+myName);
this.states.noImages.push('#informationContainer-'+myName);
this.states.noImages.push('#albumBackLink-'+myName);

this.states.albumResults=[
'#accountInfo-'+myName,
'#albumInformationContainer-'+myName,
'#albumsPaginatorContainer-'+myName,
'#albumsContainer-'+myName
];

this.states.noAlbumsError=[
'#accountInfo-'+myName,
'#albumInformationContainer-'+myName,
'#noAlbumsError-'+myName
];

this.states.partnerError=[
'#partnerError-'+myName
];

var getResponse=function $vpfn_fyve6hOIbmkFoOWAjIJHzQ88$22(vData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof vData==="string")
{
return eval("("+vData+")");
}
return vData;
};




var buildAlbumContainer=function $vpfn_SLsxy0W868RlY_FwafpPZg100$30(oAlbum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var elements=vp.dialogs.SelectableImageDialog.buildPreviewContainer({
containerWidth:me.parameters.maxImageWidth+16,
containerHeight:me.parameters.maxImageHeight+20,
containerClass:"item-container album-item-container",
previewClass:"preview-album pngfix"
});


if(oAlbum.asyncload)
{
var fnLoadThumbnail=function $vpfn_ZKgc$Igsy2RV4bsYBsSHOQ113$34(sData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oResponse={};
try
{

oResponse=getResponse(sData);
}
catch(ex){}


if(oResponse.success)
{


this.jPreview.load(function $vpfn_ZKgc$Igsy2RV4bsYBsSHOQ129$39()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.ui.scaleImageToFit(this,me.parameters.maxImageWidth,me.parameters.maxImageHeight);
}).attr("src",oResponse.thumbnail);
}
}.getClosure({jPreview:elements.jPreview});


elements.jPreview
.attr("src",oAlbum.thumbnail)
.show();


invokeImageService(me.sImageSourceName,"getGalleryThumbnail",oAlbum.id,fnLoadThumbnail);
}
else
{

elements.jPreview.load(function $vpfn_ZKgc$Igsy2RV4bsYBsSHOQ147$35()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(this).show();
vp.ui.scaleImageToFit(this,me.parameters.maxImageWidth,me.parameters.maxImageHeight);
}).attr("src",oAlbum.thumbnail);
}


elements.jPreview.click(function $vpfn_ZKgc$Igsy2RV4bsYBsSHOQ155$32(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
loadAlbum(oAlbum);
return false;
});


var sName=oAlbum.title;
var oAlbumInformationContainer=document.createElement("DIV");
oAlbumInformationContainer.className="album-title-container";
oAlbumInformationContainer.innerHTML=sName.length>15?sName.substring(0,12)+"...":sName;
elements.jContainer.append(oAlbumInformationContainer);

return elements.jContainer;
};




this.logOut=function $vpfn_AmnEUjabqPk32_83kWmSqA174$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
invokeImageService(me.sImageSourceName,"logout",null,function $vpfn_ZKgc$Igsy2RV4bsYBsSHOQ176$64(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}me.changeState("signIn");});
};




this.openAuthPage=function $vpfn_i9frz5pcMMEyu8ep7STU5w182$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.upload.thirdparty.BeginAuthorization(me.sImageSourceName,me.sAuthUrl,loadAlbums);
};




var loadAlbums=function $vpfn_AzVmTGS6VsEcNdV_wkV1NQ190$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.changeState("loading");


var albumFetchUrl=new vp.web.URL("/thirdpartyalbumsservice.aspx");
albumFetchUrl.setItem("source",me.sImageSourceName);
albumFetchUrl.setItem("u",(new Date().getTime()));

try
{


if(me.proxy.sUploadPath==="SiteBuilder")
{
albumFetchUrl.setItem("cb","vp.dialogs.getThirdPartyAlbumsCallback[\""+me.sImageSourceName+"\"]");

var script=document.createElement('script');
script.type='text/javascript';
script.src=me.proxy.hostName+albumFetchUrl;

$("body").append(script);
}
else
{
vp.http.getAsync(albumFetchUrl,loadAlbumsCallback);
}
}
catch(ex)
{
vp.logger.logError(Math.random(),"thirdpartydialog","thirdpartydialog: AJAX error",vp.logger.Severity.Error);
loadAlbumsCallback(null);
}
};




var loadAlbumsCallback=function $vpfn_oILfgHgy$nWzOxUtbSRWHg229$29(result)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!me.active)
{
return;
}

try
{

if(!result)
{
throw"no results";
}


var albumDataArray=result.hasOwnProperty("authorized")?result:vp.http.parseJSON(result);


if(!albumDataArray.authorized)
{

me.changeState("signIn");
return;
}


if(albumDataArray.galleries.length===0)
{
me.changeState("noAlbumsError");
return;
}


var aAlbums=albumDataArray.galleries;
for(var i=0;i<aAlbums.length;i++)
{
aAlbums[i].isAlbum=true;
}
me.oSelectableAlbumCollection.updateItems(aAlbums,false,{imageDropHandler:dropAlbum});


me.changeState("albumResults");
}
catch(ex)
{

me.changeState("partnerError");
}
};


vp.dialogs.getThirdPartyAlbumsCallback[me.sImageSourceName]=loadAlbumsCallback;




var getAlbumContent=function $vpfn_8aqiFP6PTF7EPpPcTetJPQ287$26(oAlbum,fnCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fnParseAlbumContent=function $vpfn_ZKgc$Igsy2RV4bsYBsSHOQ289$34(sData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!me.active)
{
return;
}


var oResponse={};
try
{
oResponse=getResponse(sData);
}
catch(ex){}


if(oResponse.success)
{

this.cb(oResponse.photos,this.album);
}
else if(oResponse.failureType=="authorization")
{

me.changeState("signIn");
}
else
{


me.changeState("partnerError");
}
}.getClosure({cb:fnCallback,album:oAlbum});

invokeImageService(me.sImageSourceName,"getGalleryPhotos",oAlbum.id,fnParseAlbumContent);
};

var invokeImageService=function $vpfn_nFiKRg2RYeaoNr2r8Oa1jg327$29(sSource,sAction,sId,fnCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oUrl=new vp.web.URL(me.proxy.hostName+"/images/thirdpartyimageservice.aspx");
oUrl.setItem("source",sSource);
oUrl.setItem("action",sAction);

if(sId)
{
oUrl.setItem("id",sId);
}

if(me.proxy.sUploadPath==="SiteBuilder")
{
jQuery.getJSON(oUrl.toString()+"&callback=?",fnCallback);
}
else
{
vp.http.getAsync(oUrl,fnCallback);
}
};




var dropAlbum=function $vpfn_qcDm0DDd8GwyMc$17kCbLg351$20(oItems)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oAlbum=oItems[0];
oAlbum.disabled=true;


getAlbumContent(oAlbum,me.imageSelectHandler);
};




var loadAlbum=function $vpfn_mWLTcvItecF20DuHteYW3g363$20(oAlbum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var fnLoadAlbum=function $vpfn_6rVCM6u4Z683UgCet0W$2g366$26(aItems,oAlbum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var jLink=$("<a>",{
href:'#',
text:me.parameters.sAlbumsText,
click:function $vpfn_ZKgc$Igsy2RV4bsYBsSHOQ372$23(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}loadAlbums();return false;}
});
$("#albumBackLink-"+myName).empty().append(jLink).append(' > '+oAlbum.title);


if(aItems.length===0)
{
me.changeState("noImages");
return;
}


if(me.proxy.bIsMultiUpload)
{

for(var i=0,l=aItems.length;i<l;i++)
{
var oImage=aItems[i];
if(me.proxy.oImagesInRepository[oImage.full])
{


me.proxy.oImagesInRepository[oImage.full]=oImage;
oImage.disabled=true;
}
}
}
me.oSelectableImageCollection.updateItems(aItems,false,{imageDropHandler:me.imageSelectHandler});


me.changeState("imageResults");
};



me.changeState("loading");


getAlbumContent(oAlbum,fnLoadAlbum);
};





this.imageSelectHandler=function $vpfn_hIhzHI7eJEjBXRNpNIXluw417$30(aItems)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=0;i<aItems.length;i++)
{
var oItem=aItems[i];
if(oItem.disabled)
{
continue;
}


if(me.proxy.bIsMultiUpload)
{
var warningMessage=me.proxy.addImageWarning(1);
if(warningMessage)
{
me.oSelectableImageCollection.refreshItems();
alert(warningMessage);
return;
}
}


oItem.disabled=true;


if(me.proxy.bIsMultiUpload)

{
me.proxy.oImagesInRepository[oItem.full]=oItem;
}


_oManager.addUrlToQueue({
source:me.sImageSourceName,
fileName:"",
uploadfilename:oItem.filename,
hash:oItem.signature,
url:oItem.full,
identifier:oItem.imageid
});
}


me.oSelectableImageCollection.refreshItems();
};




this.getPreviewUrl=function $vpfn_zLHs169oqv1h6n7LqbnjRQ467$25(oImage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return oImage.thumbnail;
};




var uploadRemovedFromRepository=function $vpfn_RrGw$I4O3pcEsM7D3$GYzQ475$38(oUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sUrl=oUpload.oSourceData.url;
var sSource=oUpload.oSourceData.source;
if(sSource==me.sImageSourceName&&me.proxy.bIsMultiUpload&&me.proxy.oImagesInRepository[sUrl])
{

me.proxy.oImagesInRepository[sUrl].disabled=false;
delete me.proxy.oImagesInRepository[sUrl];


if(me.active)
{
me.oSelectableImageCollection.refreshItems();
}
}
};

var onRepositoryChanged=function $vpfn_eY7Jwnu8NAxseB6iNSOjAA493$30(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}



if(e.remove&&e.upload&&e.upload.oSourceData)
{
uploadRemovedFromRepository(e.upload);
}
};




this.refreshCollection=function(e)
{


};

var fnParentInitializeImageCollection=this.initializeImageCollection;



this.initializeImageCollection=function $vpfn_XysilhlKbgipE6ISc$1Osw517$37()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

fnParentInitializeImageCollection();


me.oSelectableAlbumCollection=new vp.widget.SelectableItems(
$("#albumsContainer-"+myName)[0],
buildAlbumContainer,
{
itemsPerPage:me.parameters.itemsPerPage,
paginators:["paginatoralbums-"+myName],
previewSelector:".preview-album",
draggableSelector:".preview-album",
makeItemsDraggable:me.proxy.bIsMultiUpload,
scope:"uploader"
});


me.oSelectableAlbumCollection.createDraggablePreviewElement=function $vpfn_IQ1NH19UkCJMw45e3rMSYA536$70(jPreview,aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return jPreview.clone();
};
};




this.initialSearch=function $vpfn_$s$INOiy8sz5PyQBOAGAdQ545$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!me.initialized)
{

_oManager=new vp.upload.FromExternalUrlManager('uploadConfiguration-'+me.proxy.myName);


if(me.proxy.bIsMultiUpload)
{
me.proxy.hookUpRepository();
}


if(me.proxy.data.progress)
{
_oManager.registerProgress(me.proxy.data.progress);
}

if(!me.proxy.bIsMultiUpload)
{

_oManager.registerProgress(new vp.upload.ProgressArea('singleUploadProgressDiv-'+me.proxy.myName));
_oManager.registerProgress(new vp.upload.ProgressFinalizer(me.proxy.uploadCompleteCallback));
}
else
{

var oProgressMonitor=new vp.upload.ProgressMonitor();
oProgressMonitor.fnCancelCallback=uploadRemovedFromRepository;
oProgressMonitor.fnErrorCallback=uploadRemovedFromRepository;
_oManager.registerProgress(oProgressMonitor);
}


if(me.proxy.onrepositorychange)
{
me.proxy.onrepositorychange.addHandler(onRepositoryChanged);
}


me.initializeImageCollection();

me.initialized=true;
}



loadAlbums();
};
};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}if(!vp.dialogs)
{
vp.dialogs=function(){};
}

if(!vp.dialogs.dialogbase)
{
vp.dialogs.dialogbase=function(){};
}




vp.dialogs.PreviousOrdersDialog=function $vpfn_QAnNBsDYK$A1HYpr6HMjpw14$34(name,proxy)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

vp.dialogs.SelectableImageDialog.call(this,name,proxy);


var me=this;

var currentProductGroupId;





this.getPreviewUrl=function $vpfn_rCByXI7IFjDR$7SlAA2$Gw28$25(oImage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oImage.previewUrl=me.proxy.parameters["hostName"]
+"/vp/ns/livepreview.aspx?width=200&doc_id="
+oImage.id;
return oImage.previewUrl;
};






this.doSearch=function $vpfn_f1fNp6slUjDO_htjax$eSw41$20(iProductGroupId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
iProductGroupId=iProductGroupId||me.parameters["defaultProductGroup"];

if(iProductGroupId!=currentProductGroupId)
{
var serviceToUse=me.webService;
serviceToUse.jsonp=true;
serviceToUse.extraParams["pg"]=iProductGroupId;

me.changeState("loading");

serviceToUse.searchByShopper(vp.image.Search.Type.Document);

currentProductGroupId=iProductGroupId;
}
};

};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}


vp.define("vp.image");







vp.image.AlbumFactory=function $vpfn_lTBCqUXsJVZMDCLBXNH9YQ12$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var _currentClientId=1;

var uniqueClientId=function $vpfn_u7mZ94POi1oROU5dvw0_wg16$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _currentClientId++;
};




this.createAlbum=function $vpfn_Y3JV9RkuZm5ZiVcwED_Xpg24$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return new vp.image.Album(uniqueClientId(),false,null);
};




this.createLockedAlbum=function $vpfn_90nBT9UdMEeooEykn47hvg32$29()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return new vp.image.Album(uniqueClientId(),true,null);
};




this.getAlbum=function $vpfn_sqbQqvAG9GaHWasngyEppA40$20(json)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return new vp.image.Album(uniqueClientId(),false,json);
};




this.getLockedAlbum=function $vpfn_Wnv9E9WlglarlP6TjVYGWA48$26(json)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return new vp.image.Album(uniqueClientId(),true,json);
};
};









vp.image.Album=function $vpfn_q9oblEkgE3tFvkdg6DKpzA62$17(uniqueClientId,locked,json)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

var _clientId=uniqueClientId;
var _versionClient=1;
var _versionServer=1;

var _images=new Array();

var _locked=locked;

var _albumId=-1;

var _created=null;

var _modified=null;

var _name=null;










var lockFunction=function $vpfn_B4WwW309NiIrWv2S0bEPNg91$23(fn)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_locked)
{
return fn;
}
else
{
return function $vpfn_lbg88qTpvgPYp1dTU9yS8A99$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
throw new Error("Album is locked, cannot execute function.");
};
}
};





this.albumId=function $vpfn_Vk26x6V2IOKuwSf9tVdLqg110$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _albumId;
};





this.clientId=function $vpfn_2lEBS6Sz2iFzArC$C77ZiQ119$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _clientId;
};





this.count=function $vpfn_Ior65FeVD6Oq2p7sV1hTqA128$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _images.length;
};




this.created=function $vpfn_T$NqH46nclzbaTMV5_L9Bg136$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _created;
};






this.dirty=function $vpfn_EvmmZ1rtMK_HZje1SsGH_Q146$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _versionClient>_versionServer;
};











this.images=function $vpfn_lWsp9GfDHgDTIU5QafAE5w161$18(filters)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.core.filterListByProperties(_images,filters);
};





this.locked=function $vpfn_Q4g6y299jVLmQUs8BfecJA170$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _locked;
};







this.name=function $vpfn_ph2teDXPjn6gfcxGNHkwmw181$16(newName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(newName&&!_locked)
{
_name=newName;
_versionClient++;
}

return _name;
};






this.add=lockFunction(
function $vpfn_lbg88qTpvgPYp1dTU9yS8A198$8(imagesToAdd)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!imagesToAdd)
{
return;
}

if(imagesToAdd instanceof Array)
{
if(imagesToAdd.length===0)
{
return;
}
_images.append(imagesToAdd);
_versionClient++;
}
else
{
_images.push(imagesToAdd);
_versionClient++;
}
});






this.remove=lockFunction(
function $vpfn_lbg88qTpvgPYp1dTU9yS8A227$8(imagesToRemove)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!imagesToRemove)
{
return;
}

if(imagesToRemove instanceof Array)
{
if(imagesToRemove.length===0)
{
return;
}
for(var i=imagesToRemove.length-1;i>=0;i--)
{
removeImage(imagesToRemove[i]);
}
}
else
{
removeImage(imagesToRemove);
}
});





var removeImage=lockFunction(
function $vpfn_lbg88qTpvgPYp1dTU9yS8A256$8(image)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=_images.length-1;i>=0;i--)
{
if(_images[i].equals(image))
{
_images.remove(i);





if(_albumId>0||_versionClient>_versionServer)
{
_versionClient++;
}
break;
}
}
});





this.toJSON=function $vpfn_jXTnuURDQYlRT_EhKo$qHg281$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var json={};
json.clientId=_clientId;
json.versionId=_versionClient;

json.albumId=_albumId;
json.albumName=_name;
json.images=[];

for(var i=0,l=_images.length;i<l;i++)
{
var oImage=_images[i];
var oImageData={id:oImage.id,type:oImage.type};
json.images.push(oImageData);
}

return json;
};






this.update=function $vpfn_eqUGXtUg5dTwHc5DulCFvA306$18(json,bFull)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!json)
{
return;
}
else if(json.clientId&&json.clientId!=_clientId)
{
throw new Error("JSON is being applied to the wrong album.");
}

if(!bFull)
{



_albumId=json.albumId;



_versionServer=json.versionId;
}
else
{



_albumId=json.albumId;
_name=json.albumName;



for(var i=0,len=json.images.length;i<len;i++)
{
var oImage=vp.image.parseJSON(json.images[i]);
_images.push(oImage);
}
}
};



this.update(json,true);
this.update=lockFunction(this.update);
};






vp.image.AlbumManagerPersistence={
Immediate:1,
UnloadTimer:2,
UnloadManual:3,
UnloadOnly:4
};










vp.image.AlbumManager=function $vpfn_uj9VEg2EWN_jD29JuV4v1Q373$24(ePersistence,iPersistenceTimer,sDefaultName,json)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;


var _factory=new vp.image.AlbumFactory();


var _ePersistence=ePersistence;
var _iPersistenceTimer=iPersistenceTimer;


var _sDefaultName=sDefaultName;


var _albums=[];

var _albumsToDelete=[];


var _saveInProgress=false;
var _saveQueuedUp=false;






this.createAlbum=function $vpfn_Y3JV9RkuZm5ZiVcwED_Xpg401$23(sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var sNewName=sName||"";
sNewName=sNewName.substring(0,Math.min(sNewName.length,50));
sNewName=vp.text.trim(sNewName);
sNewName=sNewName||_sDefaultName;


var oAlbum=me.getAlbumByName(sNewName);


if(!oAlbum)
{
oAlbum=_factory.createAlbum();
oAlbum.name(sNewName);
oAlbum.brandnew=true;

_albums.unshift(oAlbum);

saveNow();
}

return oAlbum;
};






this.renameAlbum=function $vpfn_h8mHIBc5zONTs0TTn6yxwg432$23(oAlbum,sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var sOldName=oAlbum.name();
var sNewName=sName||"";
sNewName=sNewName.substring(0,Math.min(sNewName.length,50));
sNewName=vp.text.trim(sNewName);
if(!sNewName||sNewName===""||sNewName==sOldName)
{
return false;
}


var oExistingAlbum=me.getAlbumByName(sNewName);
if(oExistingAlbum)
{
return false;
}


oAlbum.name(sNewName);

saveNow();

return true;
};





this.deleteAlbum=function $vpfn_Gjf7ve_Cr4HKqWNruTDCCw463$23(oAlbum)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=_albums.length-1;i>=0;i--)
{
if(_albums[i]===oAlbum)
{

_albumsToDelete.push(oAlbum);
_albums.remove(i);

saveNow();

break;
}
}
};






this.addImages=function $vpfn_wncMgP8j5EYtRvwT7G3DLQ485$21(oAlbum,aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!oAlbum)
{
return;
}

if(!aImages)
{
return;
}

oAlbum.add(aImages);

saveNow();
};







this.swapImages=function $vpfn_9_bqGQiBJlEy$EBPcQsyiQ509$22(fromAlbum,toAlbum,aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!fromAlbum||!toAlbum)
{
return;
}

if(fromAlbum===toAlbum||!aImages)
{
return;
}

fromAlbum.remove(aImages);
toAlbum.add(aImages);

saveNow();
};




this.purgeImages=function $vpfn_a04BUFxc9avrJK_ruNw$Cw531$23(aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

for(var i=_albums.length-1;i>=0;i--)
{
_albums[i].remove(aImages);
};

saveNow();
};





this.count=function $vpfn_Ior65FeVD6Oq2p7sV1hTqA546$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _albums.length;
};






this.getAlbumByName=function $vpfn_OLiXYNo0RN9ux7VKXIBa0A556$26(sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

for(var i=0,len=_albums.length;i<len;i++)
{
if(_albums[i].name()===sName)
{
return _albums[i];
}
}
return null;
};






this.getAlbumById=function $vpfn_D485iJFj5yn9JusK76HF6A574$24(iClientId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var i=0,len=_albums.length;i<len;i++)
{
if(_albums[i].clientId()===iClientId)
{
return _albums[i];
}
}
return null;
};







this.getAlbums=function $vpfn_wZKxXqCXVBxwu68JJzxlpw592$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.core.filterListByProperties(_albums,{});
};





this.getImages=function $vpfn_wZ1P8FEHxsS8jSIZOwofWg601$21(filters)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var matchingImages=[];
for(var i=0,len=_albums.length;i<len;i++)
{
matchingImages.append(_albums[i].images(filters));
}
return matchingImages;
};





this.toJSON=function $vpfn_jXTnuURDQYlRT_EhKo$qHg615$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var json={};


json.albums=[];
json.albumsToDelete=[];


for(var i=0,len=_albums.length;i<len;i++)
{
var album=_albums[i];
if(album.dirty())
{
json.albums.push(album.toJSON());
}
}


for(var j=0,len2=_albumsToDelete.length;j<len2;j++)
{
var albumToDelete=_albumsToDelete[j];
if(albumToDelete.albumId()>0)
{
json.albumsToDelete.push(albumToDelete.toJSON());
}
}

return json;
};

var onSaveEnd=function $vpfn_08F0hJi1Ic2AOQzXac1cEQ646$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_saveInProgress=false;

if(_saveQueuedUp)
{
_saveQueuedUp=false;
doSave(false);
}
};





var onSaveError=function $vpfn_UrVsh7Fg87NVcRrkRyB7mQ661$22(ex)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

document.location.reload();


};





var onSaveResponse=function $vpfn_jTqJCgEa6UI1Sxa8m1JEgA673$25(jsonString)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try
{
var json=vp.http.parseJSON(jsonString);

if(json.error)
{
throw"server error";
}


for(var i=0,len=json.albums.length;i<len;i++)
{
var jsonAlbum=json.albums[i];
var oAlbum=me.getAlbumById(jsonAlbum.clientId);

if(oAlbum)
{

oAlbum.update(jsonAlbum,false);
}
else
{


for(var j=0,len2=_albumsToDelete.length;j<len2;j++)
{
var oAlbumToDelete=_albumsToDelete[j];
if(oAlbumToDelete.clientId()==jsonAlbum.clientId)
{
oAlbumToDelete.update(jsonAlbum,false);
}
}
}
}


onSaveEnd();
}
catch(e)
{

onSaveError();
}
};





var doSave=function $vpfn_pBGL84oXsOdoDAwcpAO0xA724$17(bSynchronous)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
















var json=me.toJSON();
if(json.albums.length<=0&&json.albumsToDelete.length<=0)
{
return;
}



if(_saveInProgress)
{
_saveQueuedUp=true;
return;
}


vp.web.setUrlHashData("clearcache",1);


_saveInProgress=true;


var sUrl="/Sales/Images/Albums/AlbumUpdateService.aspx?mpid=1";
var oQS=new vp.web.QueryString();
oQS.setItem("album-data",vp.http.serializeJSON(json));


_albumsToDelete=[];


if(bSynchronous)
{
var response=null;
try
{
response=vp.http.post(sUrl,oQS.toString());
}
catch(ex)
{
onSaveError(ex);
return;
}
onSaveResponse(response);
}
else
{
vp.http.postAsync(sUrl,oQS.toString(),onSaveResponse,onSaveError);
}
};




var saveNow=function $vpfn_lj8a0jQ1wZyeQvkmiiE4ig794$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_ePersistence===vp.image.AlbumManagerPersistence.Immediate)
{
doSave(false);
}
};
var saveUnload=function $vpfn_l0mxx63lcHwcsSzPt9XC8w801$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
doSave(false);
};
var saveTimer=function $vpfn_UKVQ8p1pXWnp8Uia5VVmKg805$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
doSave(false);
};
this.saveManual=function $vpfn_2bS46WzokgtOF$gE0vUEHg809$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
doSave(false);
};

var init=function $vpfn_Jfy7qEzxt7CTe$MBEWbrMg814$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


var sClearCache=vp.web.getUrlHashData("clearcache")||"";
if(sClearCache)
{

var oURL=new vp.web.URL(document.location.toString());

oURL.hash="";

document.location.replace(oURL.toString());

return;
}


if(_ePersistence===vp.image.AlbumManagerPersistence.UnloadTimer)
{
window.setInterval(saveTimer,_iPersistenceTimer);
}
if(_ePersistence===vp.image.AlbumManagerPersistence.UnloadManual)
{
$("#optionalSaveButton").show();
}
if(_ePersistence===vp.image.AlbumManagerPersistence.UnloadTimer||
_ePersistence===vp.image.AlbumManagerPersistence.UnloadManual||
_ePersistence===vp.image.AlbumManagerPersistence.UnloadOnly)
{
vp.events.add(window,"unload",saveUnload);
}


if(!json)
{
json={};
}
if(!json.albums)
{
json.albums=[];
}
for(var i=0,len=json.albums.length;i<len;i++)
{
var jsonAlbum=json.albums[i];
var oAlbum=jsonAlbum.locked==="true"
?_factory.getLockedAlbum(jsonAlbum)
:_factory.getAlbum(jsonAlbum);
_albums.push(oAlbum);
}
};

init();
};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}


vp.define("vp.images.photofilters");

vp.images.photofilters.photoFilterDialog=function $vpfn_Sv_5cKMP9zwNpbBZV0YwZA6$43(sDialogId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

this.url="";

this.dialogId=sDialogId;

this.dialog=null;

var callbackFunction=null;

var init=function $vpfn_Oxth22tDOvDKX3zp6F4yXQ18$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.dialogId)
{
me.dialog=vp.dialog.get(me.dialogId);
if(me.dialog)
{
me.url=new vp.web.URL(me.dialog.url);
window.photoFilterDialog=me;
}
}
else
{
throw new Error("Can't find a reference to photo filter dialog div");
}
};

this.changeParameters=function $vpfn_3pO8t9b_2lOexWh8ehSO0A35$28(paramArray)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
for(var k in paramArray)
{
if(k&&vp.images.photofilters.photoFilterDialog.urlParams[k])
{
me.url.setItem(vp.images.photofilters.photoFilterDialog.urlParams[k],convertValues(paramArray[k]));
}
}

me.dialog.url=me.url.toString();
};

var convertValues=function $vpfn_dZrF0_j857gm3Y_FclFCCQ48$24(value)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(value===false)
{
return"False";
}
else if(value===true)
{
return"True";
}
return value;
};

this.open=function $vpfn_enAPv0CtQpIBSBq5k7y0jw61$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.dialog.open();
};

init();
};

vp.images.photofilters.photoFilterDialog.urlParams=
{
ContainerId:"container_id",
ImageId:"image_id",
ImageType:"image_type",
CropTop:"croptop",
CropRight:"cropright",
CropBottom:"cropbottom",
CropLeft:"cropleft"
};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}


vp.define("vp.images.photofilters");

vp.images.photofilters.photoFilterTool=function $vpfn_JPw_tGJjrLFIwnMs9sm9tA6$41(sContainerId,iImageId,iStartingPhotoFilterType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;


var _sContainerId=sContainerId;


var _iStartingPhotoFilterType=iStartingPhotoFilterType||0;


var _iCurrentPhotoFilterType=-1;


var _oUploadFamily=vp.photofilter.UploadFamilies[iImageId];


var _bSaveInProgress=false;


var _oProgressBar=null;

this.elements=
{
mainImagePreview:$('#mainImagePreview')[0],
selectedThumbnail:$('#originalPhotoThumbnail')[0],
informationalText:$('#originalPhotoInfo')[0]
};




this.photoFilterOnClickHandler=function $vpfn_ulin01GA8zxp_vCBI7BY4A38$37(iPhotoFilterType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

changePhotoFilter(iPhotoFilterType);


var jNewSelectedThumbnail=$('.photo-filter-preview[photofiltertype = '+iPhotoFilterType+']');
var jNewInformationalText=$('.informational-text[photofiltertype = '+iPhotoFilterType+']');


$(me.elements.selectedThumbnail).closest('table').removeClass('selected');


jNewSelectedThumbnail.closest('table').addClass('selected');


$(me.elements.informationalText).hide();


jNewInformationalText.show();


me.elements.selectedThumbnail=jNewSelectedThumbnail[0];
me.elements.informationalText=jNewInformationalText[0];
};




this.saveAndClose=function $vpfn_j1Au4u9DrGmsW9eTaduioA67$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(_bSaveInProgress)
{
return;
}


if(_iCurrentPhotoFilterType===_iStartingPhotoFilterType)
{
vp.dialog.closeCurrent();
}


var fnApplyUpload=function $vpfn_RSeeOyJCpu7FQ4lju1LPMw83$28(oUpload)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(oUpload)
{

var oOldImageItem=vp.dialog.getParent().Editor.getItemByID(_sContainerId);


vp.dialog.getParent().vp.studio.ui.changeImage(
_sContainerId,
vp.dialog.getParent().DOCITEM_TYPE_UPLOADED_IMAGE,
oUpload.id,
oOldImageItem.cropInfo,
null,
oOldImageItem.coordinates.rotation.angleInDegrees);
}
else
{

alert(vp.images.photofilters.JSLM_UnableToTransform);
}


_bSaveInProgress=false;
if(_oProgressBar)
{
_oProgressBar.hide();
}


vp.dialog.closeCurrent();
};


var oExistingUpload=_oUploadFamily.applyFilter(_iCurrentPhotoFilterType,fnApplyUpload);


if(oExistingUpload)
{

fnApplyUpload(oExistingUpload);
}
else
{

_bSaveInProgress=true;
if(!_oProgressBar)
{
_oProgressBar=new vp.widget.LoadingBox();
_oProgressBar.delay=0;
_oProgressBar.manualHide=true;




_oProgressBar.message=vp.images.photofilters.JSLM_PleaseWait;
}
_oProgressBar.show();
}
};

this.refreshPreview=function $vpfn_3S5U3LKcg58Dte5Nhezgag145$26(sURL)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var previewPreloadHandler=function $vpfn_7f39jBnCmmpTs5zVXBq1$g147$36()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.elements.mainImagePreview.src=sURL;
};

vp.ui.preloadImageAndGetSize(sURL,previewPreloadHandler);
};




var changePhotoFilter=function $vpfn_lG4DRv7PsC1UjG6Capxl_w158$28(iPhotoFilterType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_iCurrentPhotoFilterType!==iPhotoFilterType)
{

_iCurrentPhotoFilterType=iPhotoFilterType;


var jPreviewElement=$(me.elements.mainImagePreview);
var iPreviewWidth=parseInt(jPreviewElement.attr('targetwidth'));
var sPreviewUrl=_oUploadFamily.previewFilter(iPhotoFilterType,iPreviewWidth);
jPreviewElement.attr('src',sPreviewUrl);
}
};

var init=function $vpfn_KArvzwWULaOR1vM5u64xiQ173$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

$('.photo-filter-preview').each(function $vpfn_MUPJyDTsO4ur$Bx3l1rKeQ176$40()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var iFilterType=parseInt($(this).attr('photofiltertype'));
var iThumbnailWidth=parseInt($(this).attr('targetwidth'));
var sThumbnailUrl=_oUploadFamily.previewFilter(iFilterType,iThumbnailWidth);
$(this).attr('src',sThumbnailUrl);
});


me.photoFilterOnClickHandler(_iStartingPhotoFilterType);
};
init();
};

var PhotoFilterTool;

vp.images.photofilters.photoFilterTool.init=function $vpfn_3MvB927MdBZ8x79981yjrQ192$46(sContainerId,iImageId,iStartingPhotoFilterType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
PhotoFilterTool=new vp.images.photofilters.photoFilterTool(sContainerId,iImageId,iStartingPhotoFilterType);

var oDialog=vp.dialog.getCurrent();
if(oDialog)
{
oDialog.resizeToFitContent(true);
}
};


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;

}






vp.define("vp.image.search");
vp.define("vp.image.Search");


vp.image.search.URL="/vp/ns/image_search.aspx";
vp.image.search.HOST="";





vp.image.search.Type={
Library:1,
Upload:2,
Logo:4,
Caricature:8,
Partner:16,
Album:32,
Accent:64,
Document:128
};


vp.image.search.Cache={};

vp.image.search.InProgress={};




vp.image.search.clearCache=function $vpfn_Gr31B8z2USVq5t7avi$Tjg40$29(eSearchType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

for(var dkey in vp.image.search.Cache)
{

if((dkey&eSearchType)>0)
{
vp.image.search.Cache[dkey]=null;
}
}


for(var rkey in vp.image.search.InProgress)
{

if((rkey&eSearchType)>0)
{
vp.image.search.InProgress[rkey]=null;
}
}


var bUpload=(eSearchType&vp.image.search.Type.Upload)>0;
if(bUpload)
{
vp.image.search.clearCache(vp.image.search.Type.Album);
}
};





vp.image.search.Base=function $vpfn_BLgBPaD5dWuqScXQzUM5Og74$23(fnBuildUrl,fnOnSearchComplete)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;




this.jsonp=false;




this.cacheKey=null;





this.images=null;





this.onsearchcomplete=new vp.events.CustomEvent(this,"onsearchcomplete");
if(fnOnSearchComplete)
{
this.onsearchcomplete.addHandler(fnOnSearchComplete);
}





this.search=function $vpfn_KMvtyTnucYxod76$3tpEKw108$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var searchUrl=fnBuildUrl();
searchUrl.setItem("ts",new Date().getTime());


if(me.cacheKey)
{

var oData=vp.image.search.Cache[me.cacheKey];
if(oData)
{

setTimeout(function $vpfn_b1V9kvP_7cAbpN8NQWPGHQ122$27()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
onDataReady(oData);
},0);
return;
}


var oRequest=vp.image.search.InProgress[me.cacheKey];
if(oRequest)
{
var fnRepeatData=function $vpfn_zqnNeSOAJT8Hw4qAaR6C8g133$35(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
onDataReady(e.images);
};
oRequest.onsearchcomplete.addHandler(fnRepeatData);
return;
};
}


if(me.cacheKey)
{
vp.image.search.InProgress[me.cacheKey]=me;
}


try
{

if(me.jsonp)
{
jQuery.getJSON(searchUrl.toString()+"&callback=?",onSearchComplete);
}

else
{
vp.http.getAsync(searchUrl,onSearchComplete);
}
}
catch(ex)
{
vp.logger.logError(Math.random(),"vp.image.search","vp.image.search: AJAX search error",vp.logger.Severity.Error);
onSearchComplete(null);
}
};





var onSearchComplete=function $vpfn_UzFhi8Uyj7ZKccPqcWXG1Q173$27(data)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.cacheKey)
{
vp.image.search.InProgress[me.cacheKey]=null;
}


var aImages=[];


if(data)
{
var dataArray=vp.http.parseJSON(data);


var bAlbums=dataArray.length>0&&dataArray[0].albumsignature;


if(bAlbums)
{
for(var a=1,alen=dataArray.length;a<alen;a++)
{

var oAlbum=dataArray[a];
aImages[a-1]=oAlbum;


for(var ai=0,ailen=oAlbum.images.length;ai<ailen;ai++)
{
oAlbum.images[ai]=vp.image.parseJSON(oAlbum.images[ai]);
}
}
}
else
{

for(var i=0,ilen=dataArray.length;i<ilen;i++)
{
aImages[i]=vp.image.parseJSON(dataArray[i]);
}
}


if(me.cacheKey)
{
vp.image.search.Cache[me.cacheKey]=aImages;
}
}

onDataReady(aImages);
};
var onDataReady=function $vpfn_1E3UqMUtSVKrT2IBZzPCZQ226$22(aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var e={};
e.images=aImages;
me.images=aImages;


me.onsearchcomplete.fire(e);
};
};

vp.image.MyImagesSearch=function $vpfn_PEnFIe7uPccHBngdoleBGA238$26(fnCallback,oOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;


oOptions=jQuery.extend(
{
searchTypes:vp.image.search.Type.Upload,
searchProduct:null
},(oOptions||{}));


var buildRequestUrl=function $vpfn_31FoVvHMJkWoM9Xaax2Kjw250$26()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

me.cacheKey=oOptions.searchTypes;


var eTypes=oOptions.searchTypes;
var bAlbum=(oOptions.searchTypes&vp.image.search.Type.Album)>0;
if(bAlbum)
{

eTypes=vp.image.search.Type.Upload;
}


var oUrl=new vp.web.URL(vp.image.search.HOST+vp.image.search.URL);
oUrl.setItem("t",eTypes);
oUrl.setItem("album",bAlbum);
oUrl.setItem("pfid",oOptions.searchProduct?oOptions.searchProduct:"");
return oUrl;
};


vp.image.search.Base.call(this,buildRequestUrl,fnCallback);
};

vp.image.LibraryImageSearch=function $vpfn_aTcs_YUHIvu3f9JzWRHw0A276$30(fnCallback,oOptions)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;


oOptions=jQuery.extend(
{
searchWords:"",
searchLocation:""
},(oOptions||{}));


var buildRequestUrl=function $vpfn_31FoVvHMJkWoM9Xaax2Kjw288$26()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




var oUrl=new vp.web.URL(vp.image.search.HOST+vp.image.search.URL);
oUrl.setItem("t",vp.image.search.Type.Library);
oUrl.setItem("p",oOptions.searchWords);
oUrl.setItem("img_search_loc",oOptions.searchLocation);
return oUrl;
};


vp.image.search.Base.call(this,buildRequestUrl,fnCallback);
};






vp.image.SearchedAlbum=function $vpfn_mIkxOAC_qORzYeJjjmhcQQ310$25(sName,iAlbumId,sCreated,sModified,images)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

this.sName=sName;

this.iAlbumId=iAlbumId;

this.sCreated=sCreated;

this.sModified=sModified;

this.oImages=images;
};








vp.image.Search=function $vpfn_p8azaNCSbArbEZbBrwZFmQ332$18(fnOnSearchCompleteHandler,bIsAlbumSearch,pfId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




var me=this;




var SEARCH_URL="vp/ns/image_search.aspx";




this.jsonp=false;




this.hostName="/";





this.extraParams={};





this.images=null;





this.albums=null;





this.onsearchcomplete=new vp.events.CustomEvent(this,"onsearchcomplete");

if(fnOnSearchCompleteHandler)
{
this.onsearchcomplete.addHandler(fnOnSearchCompleteHandler);
}





this.searchByShopper=function $vpfn_Ygny17FPlU1FtAaazq0Kmw388$27(iImageTypes)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(iImageTypes&vp.image.Search.Type.Library)
{
throw new Error("vp.image.Search.searchByShopper: this method does not support Library image search");
}

doSearch(iImageTypes,null);
};






this.searchByKeywords=function $vpfn_SoT$p3SDjio7DxYkJykmww404$28(sSearchWords)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
doSearch(vp.image.Search.Type.Library,sSearchWords);
};








var doSearch=function $vpfn_ztb6pBOjcVEOgVUOEelL1A416$19(iImageTypes,sSearchWords)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var searchURL=new vp.web.URL(me.hostName+SEARCH_URL);
searchURL.setItem("t",iImageTypes);
searchURL.setItem("p",sSearchWords);
searchURL.setItem("album",bIsAlbumSearch);
searchURL.setItem("ts",new Date().getTime());
searchURL.setItem("pfid",pfId!=undefined?pfId:"");

for(var key in me.extraParams)
{
searchURL.setItem(key,me.extraParams[key]);
}

try
{

if(me.jsonp)
{
jQuery.getJSON(searchURL.toString()+"&callback=?",me.searchCallback);
}

else
{
vp.http.getAsync(searchURL,me.searchCallback);
}
}
catch(ex)
{
vp.logger.logError(Math.random(),"vp.image.Search","vp.image.Search: AJAX search error",vp.logger.Severity.Error);
me.searchCallback(null);
}
};





this.searchCallback=function $vpfn_HH7xLpzpHSqkhruHU6PqxQ454$26(data)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.images=[];
me.albums=[];

var isAlbumSearch=false;



if(data)
{
var imageDataArray=vp.http.parseJSON(data);

if(imageDataArray.length>0&&imageDataArray[0].albumsignature)
{
isAlbumSearch=true;
}

var i;

if(isAlbumSearch)
{
for(i=1;i<imageDataArray.length;i++)
{
me.albums[i-1]=createAlbum(imageDataArray[i],i);
}
}
else
{

for(i=0;i<imageDataArray.length;i++)
{
me.images[i]=vp.image.parseJSON(imageDataArray[i]);
}
}
}


var e={};

if(isAlbumSearch)
{
e.albums=me.albums;
}
else
{
e.images=me.images;
}
me.onsearchcomplete.fire(e);
};

var createAlbum=function $vpfn_i9P9daCI48WUWZkxAf1$1A505$22(albumSpec,iClientId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var images=[];

for(var i=0;i<albumSpec.images.length;i++)
{
images[i]=vp.image.parseJSON(albumSpec.images[i]);
}


var oAlbum=new vp.image.SearchedAlbum(albumSpec.albumName,iClientId,albumSpec.created,albumSpec.modified,images);
return oAlbum;
};
};





vp.image.Search.Type={
Library:1,
Upload:2,
Logo:4,
Caricature:8,
Partner:16,
Album:32,
Accent:64,
Document:128
};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}
if(typeof vp=="undefined"){
var vp={};
}





if(!vp.upload){
vp.upload=function(){};
}


if(!vp.upload.thirdparty)
{
vp.upload.thirdparty=function(){};
}

vp.upload.thirdparty.AuthorizationCallbacks=[];

vp.upload.thirdparty.BeginAuthorization=function $vpfn_PlaZFi4pBjpfc8CAIp5Z4g22$42(sProviderName,sAuthUrl,fnCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.upload.thirdparty.AuthorizationCallbacks[sProviderName.toLowerCase()]=fnCallback;


window.open(sAuthUrl);
};




vp.upload.thirdparty.EndAuthorization=function $vpfn_FFNKp5cavqMEvWmOAG$jRw33$40(sourceName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(window.opener&&!window.opener.closed)
{
var closeWindow=true;
try
{
var fnCallback=window.opener.vp.upload.thirdparty.AuthorizationCallbacks[sourceName];
}
catch(e)
{


if(vp.upload.thirdparty.SitebuilderEndAuthUrl)
{
window.location=vp.upload.thirdparty.SitebuilderEndAuthUrl;
closeWindow=false;
}
}

if(fnCallback)
{
fnCallback();
}
else
{

}

if(closeWindow)
{
window.close();
}
}
};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}


vp.define("vp.widget");














vp.widget.SelectableItems=function $vpfn_OyOFG6XRxGpL8b2b0znaIA19$28(
_oParentElement,
_fnCreateElement,
_options)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;






var options=
jQuery.extend({

selectOnMove:true,

percentCovered:0,

selectedClass:'selected',

disabledClass:'disabled',

selectables:"> :not(.disabled)",

draggingClass:'dragging',

itemsPerPage:8,

paginators:[],

clickToSelect:false,

dragToSelect:false,

notDraggables:false,

makeItemsDraggable:false,

draggableSelector:false,

previewSelector:false,

scope:"default"
},(_options||{}));





var _oParent=$(_oParentElement);





var _iCurrentPage=0;





var _aItems=[];





var _oCustomData={};




this.makeDraggable=function $vpfn_hoPxFJOWDhEOf1DSQ6h$yw92$25(jElement,oItem)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var jDraggableElement=jElement.find(options.draggableSelector);
if(jDraggableElement.length===0)
{
jDraggableElement=jElement;
}

var jPreviewElement=jElement.find(options.previewSelector);
if(jPreviewElement.length===0)
{
jPreviewElement=jElement;
}

var oDraggableImage=new vp.studio.Draggable(jDraggableElement,{data:{oImage:oItem},scope:options.scope,distance:10});
oDraggableImage.setEnabled(!oItem.disabled);




jDraggableElement.mousedown(function $vpfn_PYhZjB2WuP6ySujkrbqM2A112$36()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oItem.disabled)
{
oDraggableImage.setEnabled(false);
return;
}

oDraggableImage.setEnabled(true);


var aImages=me.getSelectedItems();
if(!aImages.contains(oItem))
{
aImages.push(oItem);
}

var fnHelper=function $vpfn_0rH9blVb4CRo9AnjX2zVTw129$27(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}return me.createDraggablePreviewElement(jPreviewElement,aImages).get(0);};

oDraggableImage.option("helper",fnHelper);
oDraggableImage.data("aImages",aImages);
for(var key in _oCustomData)
{
oDraggableImage.data(key,_oCustomData[key]);
}

});
};





this.createDraggablePreviewElement=function $vpfn_Lys1bLEtGXU6PkhSPqhLBQ145$41(jPreview,aImages)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var jImageTemplate=jPreview.clone();
var jImageElement=$("<div/>").append(jImageTemplate);
var jImageCount=$("<div/>").html(aImages.length);

var jDragElement=$("<div/>").attr("class","album-image-drag");
jDragElement.append(jImageElement);
jDragElement.append(jImageCount);
return jDragElement;
};




var buildPage=function $vpfn_djx40OcksAolDnCuTWbSJw161$20(iPageNumber,bForceRefresh)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(_iCurrentPage===iPageNumber&&!bForceRefresh)
{
return;
}


var iNumItems=_aItems.length;
var iNumPages=Math.ceil(iNumItems/options.itemsPerPage);


iPageNumber=Math.max(iPageNumber,1);
iPageNumber=Math.min(iPageNumber,iNumPages);


_iCurrentPage=iPageNumber;


var iFirstIndex=(_iCurrentPage-1)*options.itemsPerPage;
var iLastIndex=Math.min(iFirstIndex+options.itemsPerPage,iNumItems);
var aPageItems=iFirstIndex>iNumItems-1?[]:_aItems.slice(iFirstIndex,iLastIndex);


var oDragSelector=$(".jquery-drag-to-select",_oParent).detach();
_oParent.empty();
_oParent.prepend(oDragSelector);


for(var i=0;i<aPageItems.length;i++)
{
var oItem=aPageItems[i];


var jNewElement=$(_fnCreateElement(oItem));

jNewElement.data('item',oItem);

if(options.makeItemsDraggable)
{
me.makeDraggable(jNewElement,oItem);
}





if(oItem.disabled)
{
jNewElement.addClass(options.disabledClass);
}

else if(options.clickToSelect)
{
jNewElement.click(function $vpfn_PYhZjB2WuP6ySujkrbqM2A216$34()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if($(this).hasClass(options.disabledClass))
{
return;
}


if($(this).hasClass(options.selectedClass))
{
$(this).removeClass(options.selectedClass);
}
else
{
$(this).addClass(options.selectedClass);
}
});
}




var currWin;
try
{
currWin=vp.dialog.getCurrent();
}
catch(ex)
{
}

if(currWin)
{
jNewElement.click(function $vpfn_PYhZjB2WuP6ySujkrbqM2A250$34()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(document).trigger("mouseup");
});
}


_oParent.append(jNewElement);
}


for(var j=0;j<options.paginators.length;j++)
{
var oPaginator=options.paginators[j];
oPaginator.selectedPageNumber=iPageNumber;
oPaginator.render();
}
};




this.getAllItems=function $vpfn_unAQnGfDsQmnb7NZ24UBZQ272$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.core.filterListByProperties(_aItems,{});
};




this.getSelectedItems=function $vpfn_aEN3sqDOhRTay345sgNLfQ280$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aItems=[];


_oParent.children().each(
function $vpfn_PYhZjB2WuP6ySujkrbqM2A286$12(i)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oItem=$(this).data('item');
if(!oItem)
{
return;
}

if($(this).hasClass(options.selectedClass))
{
aItems.push(oItem);
}
});
return aItems;
};

this.getItemsOnPage=function $vpfn_C3iFL5FheLljWVBcJ$COuA302$26()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var iNumItems=_aItems.length;
var iNumPages=Math.ceil(iNumItems/options.itemsPerPage);

var iFirstIndex=(_iCurrentPage-1)*options.itemsPerPage;
var iLastIndex=Math.min(iFirstIndex+options.itemsPerPage,iNumItems);

return(iFirstIndex>iNumItems-1)?[]:_aItems.slice(iFirstIndex,iLastIndex);
};




this.updateItems=function $vpfn_LjyB$$sLcl5OFpZPw5IXng316$23(aItems,bPreservePage,oCustomData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_aItems=aItems;


_oCustomData=oCustomData||{};


var iNumItems=_aItems.length;
var iNumPages=Math.ceil(iNumItems/options.itemsPerPage);
for(var i=0,l=options.paginators.length;i<l;i++)
{
options.paginators[i].numberOfPages=iNumPages;
}


buildPage(bPreservePage?_iCurrentPage:1,true);
};





this.refreshItems=function $vpfn_sg687cqQpzmG7JKDZwncFQ340$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

_oParent.children().each(
function $vpfn_PYhZjB2WuP6ySujkrbqM2A344$12(i)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oItem=$(this).data('item');
if(!oItem)
{
return;
}


$(this).removeClass(options.selectedClass);


if(oItem.disabled)
{
$(this).addClass(options.disabledClass);
}
else
{
$(this).removeClass(options.disabledClass);
}




if(options.makeItemsDraggable)
{
var jDraggableElement=$(this).find(options.draggableSelector);
if(jDraggableElement.length===0)
{
jDraggableElement=$(this);
}
jDraggableElement.draggable(oItem.disabled?'disable':'enable');
}
});
};

var startDrag=function $vpfn_yNMgQPh23x0feLsnD6Z0tw380$20(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}_oParent.addClass(options.draggingClass);};
var stopDrag=function $vpfn_YmvffKykoSH_cIGgPWKQ4A381$19(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}_oParent.removeClass(options.draggingClass);};




var init=function $vpfn_aJb_GMsonI1zXaG_s_3hZQ386$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

for(var i=0,l=options.paginators.length;i<l;i++)
{

options.paginators[i]=new vp.widget.Paginator(options.paginators[i],1,buildPage);
}


if(options.dragToSelect)
{

options.onShow=startDrag;
options.onHide=stopDrag;


_oParent.dragToSelect(options);
}
};


init();
};
