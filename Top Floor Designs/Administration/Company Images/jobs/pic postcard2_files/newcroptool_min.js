                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}

if(typeof(vp)=="undefined")
{
var vp={};
}

if(!vp.controls)
{
vp.controls={};
}


vp.controls.newCropTool=function $vpfn_$HLqmXQXL_Q9lH43nJohdw14$26(image,oImage,disableUnlocking)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var IMAGE_SIZE=375;

this.modeIcons=[];
this.AspectRatio=0;
this.Crop=null;
this.RotationAngle=0;
this.RotatedImgUrl="";
this.disableUnlocking=disableUnlocking;
this.unlocked=this.disableUnlocking;

var me=this;
var _oImage=vp.image.parseJSON(oImage);
var _cropElement,_image;
_image=image;
var _fullSizePreview,_autoScalePreview;
var _currentAspectRatio=this.AspectRatio;
var _currentState="cropToFill";


var init=function $vpfn_qNu95a7eNV$inX$0lbnvDg36$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_fullSizePreview=$(".fullSizeImage");
_autoScalePreview=$(".fitSizeImage");

_cropElement=$(".manipulatorElement")[0];
_cropElement.manipulator=new vp.controls.Manipulator(_cropElement);
_cropElement.manipulator.resizable=true;
_cropElement.manipulator.draggable=true;
_cropElement.manipulator.style.borderSelected="1px black solid";
_cropElement.manipulator.onresizeend.addHandler(saveUserCrop);
_cropElement.manipulator.ondrop.addHandler(saveUserCrop);

_cropElement.manipulator.allowUserDeselection=false;

_cropElement.veil=new vp.controls.CropVeil(_cropElement.manipulator,_image[0]);
_currentAspectRatio=me.AspectRatio;
};


this.rotate=function $vpfn_iRXvkFTp13esdH79oD_CeQ56$18(angle)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.analytics.logAction('cropTool_rotate_'+angle.toString());

angle=me.RotationAngle+angle;

if(angle<0)
{
angle=360+angle;
}

if(angle===360)
{
angle=0;
}

var mainImagePreviewURL=new vp.web.URL(_image.attr("src"));
var fullSizePreviewURL=new vp.web.URL(_fullSizePreview.attr("src"));
if(me.RotatedImgUrl)
{
var autoScalePreviewURL=new vp.web.URL(me.RotatedImgUrl);
autoScalePreviewURL.setItem("rotation",angle);
me.RotatedImgUrl=_autoScalePreview.attr("src");
_autoScalePreview.attr("src",autoScalePreviewURL.toString());
}

fullSizePreviewURL.setItem("rotation",angle);
_fullSizePreview.attr("src",fullSizePreviewURL.toString());
if(_currentState==="cropToFill")
{
mainImagePreviewURL.setItem("rotation",angle);
_cropElement.manipulator.setEnabled(false);
_image.load(function $vpfn_5TLGW1JvbZ0nMDub8mAVhg88$24(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}resetManipulators();_cropElement.veil.updateImagePosition();_image.unbind("load");});
_image.attr("src",mainImagePreviewURL.toString());
}
else
{
mainImagePreviewURL=new vp.web.URL(_autoScalePreview.attr("src"));
_cropElement.manipulator.setEnabled(false);
_image.load(function $vpfn_5TLGW1JvbZ0nMDub8mAVhg95$24(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}resetManipulators();_image.unbind("load");});
_image.attr("src",scaleSize(mainImagePreviewURL,IMAGE_SIZE,IMAGE_SIZE).toString());
}
me.RotationAngle=angle;
};


this.unlock=function $vpfn_XJzoOVXtCyCTg$cfyxNDmQ102$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.analytics.logAction('cropTool_unlockImage');
$("#InformationCallout").text(vp.LangMap.CropToolText_0);
me.unlocked=true;
_cropElement.manipulator.setConstrainProportions(false);
};


this.scaleToFit=function $vpfn_tjM6BhDR4Fx71nLvA2UC7Q111$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.analytics.logAction('cropTool_scaleToFit');

if(_currentState==="scaleToFit")
{
return;
}

var autoScalePreviewURL=new vp.web.URL(_autoScalePreview.attr("src"));
autoScalePreviewURL=scaleSize(autoScalePreviewURL,IMAGE_SIZE,IMAGE_SIZE);
$("#scaleToFitRadioButton").attr("checked","checked");


if(_image.attr("src")!==autoScalePreviewURL.toString())
{
_image.load(function $vpfn_5TLGW1JvbZ0nMDub8mAVhg127$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_cropElement.manipulator.hide();
_image.unbind("load");
});
_image.attr("src",autoScalePreviewURL.toString());
}
else
{
_cropElement.manipulator.hide();
}
_image.css("border","solid 1px black");
_currentState="scaleToFit";
$("#unlockControl").addClass("disabled");
$("#InformationCallout").text(vp.LangMap.CropToolText_2);
};


this.cropToFill=function $vpfn_yKeu6r5YEO_ewCHEHsB28g145$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.analytics.logAction('cropTool_cropToFill');

if(_currentState==="cropToFill")
{
return;
}
setCalloutText();

var fullSizePreviewURL=new vp.web.URL(_fullSizePreview.attr("src"));
fullSizePreviewURL=scaleSize(fullSizePreviewURL,IMAGE_SIZE,IMAGE_SIZE);
$("#cropRadioButton").attr("checked","checked");
_currentState="cropToFill";
if(_image.attr("src")!==fullSizePreviewURL.toString())
{
_image.load(function $vpfn_5TLGW1JvbZ0nMDub8mAVhg161$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
resetManipulators();
_cropElement.veil.updateImagePosition();
_image.unbind("load");
});
_image.attr("src",fullSizePreviewURL.toString());
}
else
{
resetManipulators();
_cropElement.veil.updateImagePosition();
}
_image.css("border","");
$("#unlockControl").removeClass("disabled");
};


var setCalloutText=function $vpfn_DaiOhhnWZ3aVF3Tiv3wmXw179$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$("#InformationCallout").empty();
if(me.AspectRatio)
{
if(!me.unlocked&&!me.disableUnlocking)
{
$("#InformationCallout").html(vp.LangMap.CropToolText_1+" <a href='javascript:void(0);'>"+vp.LangMap.CropToolText_12+"</a>");
$("#InformationCallout a").click(function $vpfn_5TLGW1JvbZ0nMDub8mAVhg187$49(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.unlock();
return false;
});
}
else
{
if(me.disableUnlocking)
{
$("#InformationCallout").text(vp.LangMap.CropToolText_1);
}
else
{
$("#InformationCallout").text(vp.LangMap.CropToolText_0);
}
}
}
else
{
$("#InformationCallout").text(vp.LangMap.CropToolText_0);
}
};


this.onCommit=function $vpfn_UC$m_1kfSbBikTJCPH15Lg211$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(window.parent)
{
var cropInfo;
var imageUrl=new vp.web.URL(_image.attr("src"));
var imageAspectRatio;
if(_currentState==="scaleToFit")
{
cropInfo={
top:parseFloat(imageUrl.getItemOrDefault("croptop",0)),
right:parseFloat(imageUrl.getItemOrDefault("cropright",0)),
bottom:parseFloat(imageUrl.getItemOrDefault("cropbottom",0)),
left:parseFloat(imageUrl.getItemOrDefault("cropleft",0))
};
imageAspectRatio=_image.width()/_image.height();
}
else
{
var imageSize={width:_image.width(),height:_image.height()};
var manipulatorRect=vp.ui.getStyleRect(_cropElement);
cropInfo={
top:1/(imageSize.height/manipulatorRect.top),
left:1/(imageSize.width/manipulatorRect.left),
right:1/(imageSize.width/(imageSize.width-manipulatorRect.right)),
bottom:1/(imageSize.height/(imageSize.height-manipulatorRect.bottom))
};
imageAspectRatio=manipulatorRect.width/manipulatorRect.height;

cropInfo=unrotateCropInfo(me.RotationAngle/90,cropInfo);
}

var iStudioImageType=_oImage.type===vp.image.Type.Library?2:3;
vp.dialog.getParent().cropDialog.callBack(
{
Crop:cropInfo,
Rotation:me.RotationAngle,
ImageId:_oImage.id,
ImageType:iStudioImageType,
AspectRatio:imageAspectRatio
});
}
};


this.registerCropAndRotation=function $vpfn_2YNbEMR2B5Q9M9CDWpBVUw256$35(oCrop,rotation)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.unlocked=!me.AspectRatio;

me.RotationAngle=rotation;
var unrotatedImageSize=me.RotationAngle===0||me.RotationAngle===180?{width:_image.width(),height:_image.height()}:{width:_image.height(),height:_image.width()};


me.Crop=oCrop&&!isNegativeCrop(oCrop)?oCrop:{top:0,left:0,width:unrotatedImageSize.width,height:unrotatedImageSize.height};


var rotatedCrop=me.RotationAngle>0?rotateCrop(me.RotationAngle/90,me.Crop,unrotatedImageSize.height,unrotatedImageSize.width):me.Crop;



if(me.AspectRatio)
{


if(!oCrop||isNegativeCrop(oCrop))
{
rotatedCrop=me.RotationAngle>0?rotateManipulatorWithAspectRatio(me.RotationAngle,me.Crop):me.Crop;
}


var cropAspectRatio=rotatedCrop.width/rotatedCrop.height;


if(Math.abs(Math.round(cropAspectRatio*100)-Math.round(me.AspectRatio*100))>=1)
{

if(me.AspectRatio>cropAspectRatio)
{
rotatedCrop.height=Math.round(rotatedCrop.width/me.AspectRatio);
}
else
{
rotatedCrop.width=Math.round(rotatedCrop.height*me.AspectRatio);
}
}
}


if(isNegativeCrop(oCrop))
{
me.scaleToFit();
}


me.rotatedCropInfoCache={Crop:rotatedCrop,Angle:me.RotationAngle};
resetManipulators();
};




var saveUserCrop=function $vpfn_ucAEZnZi2mQmPy68QEJl8Q312$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_currentState!=="scaleToFit")
{
var manipulatorRect=vp.ui.getStyleRect(_cropElement);
var cropInfo={
top:manipulatorRect.top,
left:manipulatorRect.left,
width:manipulatorRect.width,
height:manipulatorRect.height
};
me.rotatedCropInfoCache={Crop:cropInfo,Angle:me.RotationAngle};
}
};


var scaleSize=function $vpfn_RR92nCj8J5xyypAL_OUKRQ328$20(url,maxWidth,maxHeight)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var currentWidth=parseInt(url.getItem("width"));
var currentHeight=parseInt(url.getItem("height"));
var currentAspectRatio=0;

if(currentWidth>currentHeight)
{
currentAspectRatio=currentHeight/currentWidth;
url.setItem("width",maxWidth);
url.setItem("height",parseInt(maxWidth*currentAspectRatio));
}
else
{
currentAspectRatio=currentWidth/currentHeight;
url.setItem("height",maxHeight);
url.setItem("width",parseInt(maxHeight*currentAspectRatio));
}

return url;
};


var unrotateCropInfo=function $vpfn_qJgpSTUogiDbrKKFoDaG7Q351$27(iRotationIndex,cropInfo)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(iRotationIndex<=0)
{
return cropInfo;
}
else
{
return unrotateCropInfo(iRotationIndex-1,{top:cropInfo.right,left:cropInfo.top,bottom:cropInfo.left,right:cropInfo.bottom});
}
};


var rotateCrop=function $vpfn_D14n4lkAWpL86iCxk4O4kw364$21(iRotationIndex,crop,imageWidth,imageHeight)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(iRotationIndex<=0)
{
return crop;
}
else
{
var bottom=imageWidth-(crop.top+crop.height);
var right=imageHeight-(crop.left+crop.width);
return rotateCrop(iRotationIndex-1,convertCropToCropBox({top:crop.left,left:bottom,bottom:right,right:crop.top},imageWidth,imageHeight),imageHeight,imageWidth);
}
};


var rotateManipulatorWithAspectRatio=function $vpfn_wXoEGHVgJEiz_a8G44v27g379$43(angle,cropInfo)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(angle===0||angle===360)
{

return cropInfo;
}
else if(angle>=180)
{
return rotateManipulatorWithAspectRatio(adjustAngle(angle-180),rotateCrop(2,cropInfo,_image.width(),_image.height()));
}
else
{
var a=cropInfo.width/2;
var b=cropInfo.height/2;
var x1=cropInfo.left+a;
var y1=cropInfo.top+b;
var x2=_image.width()-y1;
var y2=x1;

return{left:Math.max(x2-a,0),top:Math.max(y2-b,0),width:a*2,height:b*2};
}
};


var adjustRotatedManipulator=function $vpfn_4uzoThnnQZBFtH7VV5heNA406$35(cropInfo)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var a=cropInfo.width/2;
var b=cropInfo.height/2;
var x1=cropInfo.left+a;
var y1=cropInfo.top+b;


var delta,maxB,maxA;

if(y1+b>_image.height())
{
maxB=_image.height()-y1;
delta=b/maxB;
a=a/delta;
b=maxB;
}

if(x1+a>_image.width())
{
maxA=_image.width()-x1;
delta=a/maxA;
a=maxA;
b=b/delta;
}

if(y1-b<0)
{
maxB=y1;
delta=b/maxB;
a=a/delta;
b=maxB;
}

if(x1-a<0)
{
maxA=x1;
delta=a/maxA;
a=maxA;
b=b/delta;
}

return{left:x1-a,top:y1-b,width:a*2,height:b*2};
};



var resetManipulators=function $vpfn_P_XQqOrBWc85Fe8sT46NiA453$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var imageOffset=_image.position();
var imageWidth=_image.width();
var imageHeight=_image.height();
var newCropInfo={};

var cropInfo=me.rotatedCropInfoCache.Crop;


if(_currentState==="scaleToFit")
{
_cropElement.manipulator.deselect();
return;
}
else
{
if(!me.AspectRatio||me.unlocked)
{

newCropInfo=rotateCrop(adjustAngle(me.RotationAngle-me.rotatedCropInfoCache.Angle)/90,cropInfo,imageWidth,imageHeight);
_cropElement.manipulator.setConstrainProportions(false);
}
else
{

newCropInfo=rotateManipulatorWithAspectRatio(adjustAngle(me.RotationAngle-me.rotatedCropInfoCache.Angle),cropInfo);
_cropElement.manipulator.setConstrainProportions(true);
}
}


_cropElement.manipulator.setEnabled(true);
_cropElement.manipulator.setBoundingBox({top:imageOffset.top,left:imageOffset.left,width:imageWidth,height:imageHeight});
var adjustedCrop=adjustRotatedManipulator(newCropInfo);
_cropElement.manipulator.setLocation(adjustedCrop.top,adjustedCrop.left,adjustedCrop.width,adjustedCrop.height);

_cropElement.manipulator.show();
_cropElement.manipulator.select();

me.rotatedCropInfoCache={Crop:newCropInfo,Angle:me.RotationAngle};
};


var isNegativeCrop=function $vpfn_v3qDyBP3jGX0cG4J8iz11w497$25(crop)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return crop.top<0||crop.right<0||crop.bottom<0||crop.left<0;
};


var convertCropToCropBox=function $vpfn_YpK1bx3TcqyXL8pYBNFNuw503$31(crop,imgWidth,imgHeight)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return{top:crop.top,width:imgWidth-crop.left-crop.right,height:imgHeight-crop.top-crop.bottom,left:crop.left};
};


var adjustAngle=function $vpfn_gw6_rG2h4$ObmVYmToTfiA509$22(angle)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
angle=angle%360;
if(angle<0)
{
angle=360+angle;
}
return angle;
};

init();
};
