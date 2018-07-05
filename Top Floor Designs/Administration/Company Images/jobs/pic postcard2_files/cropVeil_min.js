                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}
if(typeof(vp)=="undefined")
{
var vp=function(){};
}

if(!vp.controls)
{
vp.controls={};
}

vp.controls.CropVeil=function $vpfn_gEvbrjSFHMfgPaFKkonESg12$23(manipulator,image)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var _manipulator,_manipulatorElement;
if(manipulator&&manipulator.element)
{
_manipulator=manipulator;
_manipulatorElement=_manipulator.element;
}
else
{
_manipulatorElement=manipulator;
}

var _image=image;

var me=this;

var init=function $vpfn_D4plcuVYPCkncLqOm_DXHg29$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_manipulator)
{
_manipulator.ondrag.addHandler(me.updateImagePosition);
_manipulator.onresize.addHandler(me.updateImagePosition);
_manipulator.ondeselect.addHandler(me.hide);
_manipulator.onselect.addHandler(me.show);
}
me.show();
};

this.updateImagePosition=function $vpfn_$0puWX4BOLoFVRSFvG07fw41$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_image.src)
{
var manipulatorPosition=$(_manipulatorElement).position();
$(_manipulatorElement).css("background","#ffffff url('"+_image.src+"') no-repeat "+manipulatorPosition.left*-1+"px "+manipulatorPosition.top*-1+"px");
}
};

this.hide=function $vpfn_udP77wBpIpj$2llxdyzDsA50$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(_manipulatorElement).css("background","");
$(_image).css("opacity","");
};

this.show=function $vpfn_2lrx81MgHvUhD46gFUbJUQ56$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(_image).css({opacity:0.6});
me.updateImagePosition();
};

init();
};