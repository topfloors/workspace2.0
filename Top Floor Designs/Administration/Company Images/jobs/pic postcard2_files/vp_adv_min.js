                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;








}





if(typeof vp=="undefined"){
var vp={};
}





if(!vp.xml)
{
vp.xml=function(){};
}







vp.xml.XMLNode=function $vpfn_Q0JKgThU13QDWuHldOv4Nw35$17(sTagName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.tagName=sTagName;





this.isTextNode=false;




this.setInnerText=function $vpfn_z8t$qxVtvD5pGFYLK2RlfQ54$24(sText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.children=[];
me.children.push(new vp.xml.TextNode(sText));
};





this.setInnerXML=function $vpfn_6q0nj7udWQgix8kzKVDCwQ64$23(sXML)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


me.children=[];
me.children.push(sXML);
};





this.getInnerXML=function $vpfn_x0geIqq0pqX_ZXsdS051ug76$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var arr=[];
var iLen=me.children.length;
for(var i=0;i<iLen;i++)
{
arr.push(me.children[i].toString());
}
return arr.join("");
};





this.attributes={};





this.children=[];





this.toString=function $vpfn_Lb3$ezCBleFsa0_sErVQPg103$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var arr=[];
arr.push("<"+me.tagName);
for(var attr in me.attributes)
{
if(typeof me.attributes[attr]!=="undefined"&&me.attributes[attr]!==null)
{
arr.push(" "+attr.toLowerCase()+"=\""+vp.web.xmlAttributeEncode(me.attributes[attr])+"\"");
}
}

if(me.children.length>0)
{
arr.push(">");
arr.push(me.getInnerXML());
arr.push("</"+me.tagName+">");
}
else
{

arr.push("/>");
}

return arr.join("");
};
};







vp.xml.TextNode=function $vpfn_mzOcNryXTHHtNoETuQl4bA137$18(sText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.text=sText;





this.isTextNode=true;





this.toString=function $vpfn_Lb3$ezCBleFsa0_sErVQPg157$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.web.xmlEncode(me.text);
};
};








vp.xml.XMLDocument=function $vpfn_K9nzySaFdzk7nPvqSkJJYA170$21(sRootTag)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}



this.inheritFrom=vp.xml.XMLNode;
this.inheritFrom(sRootTag);

var me=this;
var _sRootTag=sRootTag;






this.entityDeclarations={};





this.encoding="ISO-8859-1";

var base_toString=this.toString;





this.toString=function $vpfn_Lb3$ezCBleFsa0_sErVQPg200$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aOut=[];

aOut.add("<?xml version=\"1.0\" encoding=\""+me.encoding+"\"?>");
aOut.add("<!DOCTYPE "+_sRootTag);

var sEntityData="";
for(var sEntity in me.entityDeclarations)
{
sEntityData+="<!ENTITY "+sEntity+" \""+me.entityDeclarations[sEntity]+"\">";
}

if(sEntityData.length>0)
{
aOut.add(" [");
aOut.add(sEntityData);
aOut.add("]");
}

aOut.add(">");


aOut.add(base_toString());

return aOut.join("");
};
};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}



if(typeof(vp)=="undefined")
{
var vp={};
}

if(!vp.widget)
{
vp.widget=function(){};
}









vp.widget.TextArea=function $vpfn_MlNN5XMciMIG7NZz0BFpzA23$21(bSingleLine,oElement,defaultText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;


var KEYDOWN_TIMER_INTERVAL=350;


var _oElement=oElement?oElement:null;

var _sValue=null;


var _bIsRendered=false;


var _iPollTimer=null;


var _iKeyTimer=null;


var _oLastRange=null;


var _oLastSelectedTextFieldRange=null;


var _iLastSelectionStart=-1;


var _iLastSelectionEnd=-1;


var _sLastValue="";


var _iLastTextLength=0;


var _iLastWidth=0;



var _bIsScrollbarHeightAdded=false;

var _sLastDelayChangedValue=null;

var _defaultText=defaultText;





this.singleLine=bSingleLine?true:false;





this.attributes={};





this.onfocus=new vp.events.CustomEvent(this,"onfocus");





this.onblur=new vp.events.CustomEvent(this,"onblur");





this.onchange=new vp.events.CustomEvent(this,"onchange");





this.ondelaychange=new vp.events.CustomEvent(this,"ondelaychange");





this.onselectionchange=new vp.events.CustomEvent(this,"onselectionchange");





this.onkeydown=new vp.events.CustomEvent(this,"onkeydown");





this.onkeyup=new vp.events.CustomEvent(this,"onkeyup");

this.oninitialrender=new vp.events.CustomEvent(this,"oninitialrender");

this.isFocused=false;

this.maxLength=0;

this.maxHeight=0;

this.resizeManually=false;

this.isSelected=function $vpfn_i7Pw7iFRw724vW9ApHpx6g137$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me.isFocused;
};






this.setElementStyle=function $vpfn_PN_mg76OrpDwsv$ufl9Ebg147$27(sAttr,vValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_oElement.style[sAttr]=vValue;
};






this.getElementStyle=function $vpfn_qt$o24bg$N3ljrPQaoMlkQ157$27(sAttr)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _oElement.style[sAttr];
};





this.setValue=function $vpfn_IoMT5FmvGyadpOu_77136Q166$20(sValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oElement.value!=sValue)
{
_sValue=sValue;

_oElement.value=sValue;
updateSize();

checkForChanges();
}

if(_sLastDelayChangedValue===null)
{
_sLastDelayChangedValue=sValue;
}
};





this.getValue=function $vpfn_gGfLJ5mdv4OSnkhTR1nzpA188$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _oElement.value;
};




this.blur=function $vpfn_s44l_hPIMUO3HUstltiXNw196$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
blurHandler();
};




this.focus=function $vpfn_pmqBpIYH$SG8$T66rNtMvg204$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_oElement.focus();



if(vp.browser.isIE||vp.browser.isWebKit)
{
var _sValue=me.getValue();
setSelectionRange(_sValue.length,_sValue.length);
}
};




var focusHandler=function $vpfn_9LmZ_7slwpzdkjjKqqqXLg220$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me.isFocused)
{
me.isFocused=true;
me.onfocus.fire();
}

if(!_iPollTimer)
{
_iPollTimer=setInterval(checkForChanges,100);
}
};




var blurHandler=function $vpfn_1SEiaOAwevS1$pCHrblKfg237$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.isFocused=false;

clearInterval(_iPollTimer);
_iPollTimer=null;

me.onblur.fire();
};

var keyPressHandler=function $vpfn_0dKw321s7MmKTFH1vHjDLQ247$26(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(me.maxLength<=0)
{
return;
}

if(e.ctrlKey)
{
return;
}

if(getSelectedTextLength()>0)
{
return;
}

if(_oElement.value.length>=me.maxLength)
{
vp.events.cancelEvent(e);
}
};



var getSelectedTextLength=function $vpfn_pRJ1vRHZRt9m2U$aZCzQLg273$32()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
var oRange=_oElement.ownerDocument.selection.createRange();
if(!vp.ui.isChildOf(oRange,_oElement))
{
oRange=null;
}
if(oRange)
{
return oRange.text.length;
}
}
else
{
if(_oElement.selectionStart<_oElement.selectionEnd)
{
return _oElement.selectionEnd-_oElement.selectionStart;
}
}

return 0;
};

var pasteHandler=function $vpfn_K5XKIr65bAEA3L5X_pNdfA298$23(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.maxLength>0)
{
if(window.clipboardData)
{
var iEffectiveLength=_oElement.value.length-getSelectedTextLength();
if((iEffectiveLength+window.clipboardData.getData("Text").length)>me.maxLength)
{
vp.events.cancelEvent(e);
}
}
}
};




var keyDownHandler=function $vpfn_fPATyJqcC$TALaEtoe2r6g316$25(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);

if(vp.events.isVisibleKeyCode(e.charCode))
{
startUpdateTimer();
}

me.onkeydown.fire(e);
};




var keyUpHandler=function $vpfn_B6um$7bIscRIBrhKF8Cogg331$23(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);

if(vp.events.isVisibleKeyCode(e.charCode))
{
startUpdateTimer();
}

me.onkeyup.fire(e);
};




var checkForChanges=function $vpfn_AbX2AjFnaCmtgCqFdQCLaQ346$26()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




try
{


if(_oElement.value!=_sLastValue)
{
if(me.maxLength>0&&_oElement.value.length>me.maxLength)
{
_oElement.value=_sLastValue;
updateSize();
}
else
{
_sLastValue=_oElement.value;

updateSize();
startUpdateTimer();
me.onchange.fire();
}
}


if(document.all)
{
var oRange=document.selection.createRange();

if(!_oLastRange||!oRange.isEqual(_oLastRange))
{
me.onselectionchange.fire();
_oLastRange=oRange;
if(oRange.parentElement()==_oElement)
{
_oLastSelectedTextFieldRange=oRange;
}
}




if(!oRange.parentElement||oRange.parentElement()!=_oElement)
{
blurHandler();
}
}
else
{
if(_oElement.selectionStart!=_iLastSelectionStart||
_oElement.selectionEnd!=_iLastSelectionEnd)
{
me.onselectionchange.fire();

_iLastSelectionStart=_oElement.selectionStart;
_iLastSelectionEnd=_oElement.selectionEnd;
}
}
}
catch(ex)
{
blurHandler();
}
};





var startUpdateTimer=function $vpfn_dtNzl2u0pOevDLr4yBnWdg418$27()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_iKeyTimer)
{
clearTimeout(_iKeyTimer);
}

_iKeyTimer=setTimeout(fireDelayChanged,KEYDOWN_TIMER_INTERVAL);
};

var fireDelayChanged=function $vpfn_DsyPiP$fb2M$4QwiVa0Qxw428$27()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var e={
originalValue:_sLastDelayChangedValue||"",
newValue:me.getValue()
};

if(e.originalValue==e.newValue)
{
return;
}

_sLastDelayChangedValue=e.newValue;

me.ondelaychange.fire(e);
};





var updateSize=function $vpfn_dX4iD_CgZYYhlPzT2gYAIQ449$21(fnCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!fnCallback)
{
fnCallback=function(){};
}

var wrappedCallback=function $vpfn_fBXj6YkLxx26cOhSS003fA456$30()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
setTimeout(fnCallback,0);
};

if(me.resizeManually)
{
me.element.style.overflow="auto";
me.element.style.maxHeight="";
wrappedCallback();
return;
}

if(!_bIsRendered||me.singleLine)
{
wrappedCallback();
return;
}


var vlen=me.element.value.length,ewidth=me.element.offsetWidth;
var boxModelHeightDiff=$(me.element).innerHeight()-$(me.element).height();
if(vlen!=me.element.valLength||ewidth!=me.element.boxWidth)
{
if(!(vp.browser.isIE||vp.browser.isOpera)&&(vlen<me.element.valLength||ewidth!=me.element.boxWidth))
{
me.element.style.height="0px";
}

var h=Math.max(20,Math.min((me.element.scrollHeight-boxModelHeightDiff),100));
me.element.style.overflow=(me.element.scrollHeight>h?"auto":"hidden");
me.element.style.height=h+"px";
me.element.valLength=vlen;
me.element.boxWidth=ewidth;
}

wrappedCallback();
};





this.pasteInto=function $vpfn_5Nd7C5idjzcsiRyV5P7ecw499$21(sText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oElement.setSelectionRange)
{
var iStart=_iLastSelectionStart;
var iEnd=_iLastSelectionEnd;

_oElement.value=
_oElement.value.substring(0,iStart)+
sText+
_oElement.value.substring(iEnd);


if(iStart!=iEnd)
{
setSelectionRange(iStart,iStart+sText.length);
}

else
{
setSelectionRange(iStart+sText.length,iStart+sText.length);
}
}
else if(document.selection)
{
var range=_oLastSelectedTextFieldRange;
if(range.parentElement()==_oElement)
{
var isCollapsed=range.text.length===0;
range.text=sText;
if(!isCollapsed)
{



range.moveStart("character",-sText.length);
range.select();
}
}
}
};







var setSelectionRange=function $vpfn_kYP6s6LZSVbSPxxWerYI8w547$28(iStart,iEnd)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oElement.setSelectionRange)
{
_oElement.focus();
_oElement.setSelectionRange(iStart,iEnd);
}
else if(_oElement.createTextRange)
{
var range=_oElement.createTextRange();
range.collapse(true);
range.moveEnd('character',iEnd);
range.moveStart('character',iStart);
range.select();
}
};

this.refresh=function $vpfn_8nmCJx4VSaJ0KsODrQ3k9w564$19(fnCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
updateSize(fnCallback);
};





this.render=function $vpfn_vf6KucwIge940r58uD41ww573$18(vParent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_bIsRendered)
{
return;
}

var oParent=vp.core.getElement(vParent,"vp.widget.TextArea.render");

var sProp;
for(sProp in me.attributes)
{
_oElement[sProp]=me.attributes[sProp];
}

_sLastValue=_oElement.value;
_iLastTextLength=_oElement.value.length;

oParent.appendChild(_oElement);


if(_oElement.value!=_sValue&&_sValue!==null)
{
_oElement.value=_sValue;
}

_bIsRendered=true;

updateSize();

if(typeof(_oElement.style.resize)!="undefined")
{
_oElement.style.resize="none";
}

vp.events.add(_oElement,"mousedown",vp.events.cancelBubble);
me.oninitialrender.fire();
};

this.unrender=function $vpfn_4zrmwkYIXiTwBkEDMx9DZg612$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.ui.removeFromDOM(_oElement);
_bIsRendered=false;
};

this.setReadOnly=function $vpfn_4w4$JhMZD$b6Aj4yZOvbqQ618$23(bReadOnly)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oElement)
{
_oElement.readOnly=bReadOnly;
}
};

this.setAutoScroll=function $vpfn_FHw9nP393Rwq9tbY_lB_$Q626$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_oElement.style.overflow="auto";
};

this.setSizeAuto=function $vpfn_OX0VAZJGG36fDDaCoX8j0A631$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_oElement.style.width="100%";
_oElement.style.height="10px";
};

this.setSize=function $vpfn_Hg_bJllp1xQN7jwxaudSOA637$19(iWidth,iHeight)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_oElement.style.width=iWidth+"px";
_oElement.style.height=iHeight+"px";
_oElement.style.maxHeight="";
};

var _bIsUnselectable=false;

this.setUnselectable=function $vpfn_T0mz1A7XjLEMPx$ddVtrPA646$27(bUnselectable)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oElement)
{
if(bUnselectable&&!_bIsUnselectable)
{
vp.events.add(_oElement,"mousedown",vp.events.cancelEvent);
}
else if(!bUnselectable&&_bIsUnselectable)
{
vp.events.remove(_oElement,"mousedown",vp.events.cancelEvent);
}

_bIsUnselectable=bUnselectable;
}
};

this.getBoundingRect=function $vpfn_pMPFCigK7QlzLHE3QfehAg663$27()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.ui.getRect(_oElement);
};

this.turnOffBrowserAutoComplete=function $vpfn_grfIfQkaOm4Lx1GiQHuKSA668$38()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_oElement)
{
_oElement.setAttribute("autocomplete","off");
}
};

var init=function $vpfn_Ar4EQBF$rUrTOGT5nNhtgQ676$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_oElement)
{
_oElement=document.createElement(me.singleLine?"INPUT":"TEXTAREA");
}

if(me.singleLine)
{
_oElement.type="text";
}

vp.events.add(_oElement,"focus",focusHandler);
vp.events.add(_oElement,"mousedown",focusHandler);
vp.events.add(_oElement,"keydown",keyDownHandler);
vp.events.add(_oElement,"keypress",keyPressHandler);
vp.events.add(_oElement,"paste",pasteHandler);
vp.events.add(_oElement,"keyup",keyUpHandler);

if(!document.all&&!vp.browser.isWebKit)
{
vp.events.add(_oElement,"blur",blurHandler);
}

if(!me.singleLine)
{

if(vp.browser.isIE)
{
_oElement.style.overflow="visible";
}

else
{
_oElement.style.height="20px";
}
}

me.element=_oElement;
if(defaultText&&defaultText.length>0)
{
vp.widget.TextArea.setDefaultText(me,defaultText);
}
};

init();
};


vp.widget.TextArea.setDefaultText=function $vpfn_Sqd9cR82_9ue536VN0naeQ725$36(oField,sInitialText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sDefaultColor=oField.getElementStyle("color");
var INITIAL_COLOR="#777777";

oField.defaultText=sInitialText;
oField.initialColor=sDefaultColor;
if(!oField.getValue())
{
oField.setValue(sInitialText);
oField.setElementStyle("color",INITIAL_COLOR);
}

var onFocusHandler=function $vpfn_LQMNhykljm1zT5KBIe1DXA738$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oField.getValue()==oField.defaultText)
{
oField.setValue("");
oField.setElementStyle("color",oField.initialColor);
oField.focus();
}
};

var onBlurHandler=function $vpfn_SO19o6Lhw_qo1394Kc2Npg748$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oField.getValue().length===0)
{
oField.setValue(oField.defaultText);
oField.setElementStyle("color",INITIAL_COLOR);
}
};

oField.onfocus.addHandler(onFocusHandler);
oField.onblur.addHandler(onBlurHandler);
};

vp.widget.TextArea.isBlankOrDefaultText=function $vpfn_pQ$D10iX_8b$w0fJhP0uMg761$42(oField)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oField.getValue()==oField.defaultText||
oField.getValue().length===0)
{
return true;
}

return false;
};






vp.widget.TextArea.clearDefaultText=function $vpfn_9JoxOgahZaQUfnSRFCZTuA777$38(oField)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oField.getValue()==oField.defaultText)
{
oField.setValue("");
}

oField.defaultText="";
};







vp.widget.TextArea.resetToDefaultText=function $vpfn_RQR0ATdHyI$1tOOUZb7ckA793$40(oField)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oField.defaultText)
{
oField.setValue(oField.defaultText);
}
else
{
oField.setValue("");
}
};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}




if(typeof vp=="undefined"){
var vp={};
}





vp.crossdomain=function(){};




vp.crossdomain.IWebRequest=function $vpfn_l5EbrgI8b_eFmzlEyfdb7A19$29()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.getAsync=function(sUrl,fnCallback,fnErrorHandler){};
};





vp.crossdomain.WebRequest=function $vpfn_3y$MLbXMb9_zcyzayZwmvg28$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


var me=this;





this.inheritFrom=vp.crossdomain.IWebRequest;
this.inheritFrom();




this.getAsync=function $vpfn_wLlLnoCjQc80J9c2YRWi3w44$20(oUrl,fnCallback,fnErrorHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


oUrl=(typeof oUrl=="string")?new vp.web.URL(oUrl):oUrl;
if((!oUrl.hostname)||(oUrl.hostname.toLowerCase()==window.location.hostname.toLowerCase()))
{

vp.http.getAsync(oUrl.toString(),fnCallback,fnErrorHandler);
}
else
{

me.internalGetAync(oUrl,fnCallback,fnErrorHandler);
}

};











this.internalGetAync=function(oUrl,fnCallback,fnErrorHandler){};

};




vp.crossdomain.ProxyIFrameRequest=function $vpfn_mgDaa8wCUjl1FcYS$0GExQ79$36()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


var me=this;





this.inheritFrom=vp.crossdomain.WebRequest;
this.inheritFrom();




this.internalGetAync=function $vpfn_TM8vE44Opb2qYRTLGRtC8A95$27(oUrl,fnCallback,fnErrorHandler)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var request=new vp.crossdomain.IFrameWrapper();
request.getAsync(oUrl,fnCallback,fnErrorHandler);
};

};





vp.crossdomain.IFrameWrapper=function $vpfn_fI5so33o0N6jaGeRt5ebAA107$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




var me=this;




this.fnCallBack=null;




this.fnErrorCallback=null;




this.waitingForResponse=false;




var iframe=null;




var isCrossDomain=false;





var onIFrameLoad=function $vpfn_yP7Tsxl1Rhf90jL2aP6wsg144$23(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!me.waitingForResponse)
{

return;
}

var response=null;

if(!isCrossDomain)
{
try
{
response=iframe.contentWindow.response;
}
catch(ex)
{}
}


if(response)
{
onSuccessCallback(response);
}
else
{


window.setTimeout(afterIFrameLoadCheck,15000);
}

};





var afterIFrameLoadCheck=function $vpfn_1t2hiBkzBBpHmsm62YSgpw183$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


if(me.waitingForResponse)
{


var response=null;
try
{
response=iframe.contentWindow.response;
}
catch(ex)
{}


if(response)
{
onSuccessCallback(response);
}
else
{

me.waitingForResponse=false;
onErrorCallback("Never received the cross-domain response");
}
}
};





var onIFrameError=function $vpfn_qxuBFYnS4BzPHiALcQGtPw217$24(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.waitingForResponse=false;
onErrorCallback(e);
};




var onErrorCallback=function $vpfn_4AJVz_5sIqy0h8MS7OQ2Dg226$26(oErr)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.fnErrorCallback)
{
me.fnErrorCallback(oErr);
}
};




var onSuccessCallback=function $vpfn_XVOYO0Ng1nKjJjZYj9gz1Q237$28(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.waitingForResponse=false;
me.fnCallBack(sResponse);
};




this.cancel=function $vpfn_GCKoDACaua8KEDh8r6RNBA246$18()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.waitingForResponse)
{
me.waitingForResponse=false;


vp.events.remove(iframe,"load",onIFrameLoad);
vp.events.remove(iframe,"error",onIFrameError);

try
{

iframe.src="about:blank";
}
catch(ex){}
}
};

var initForRequest=function $vpfn_NnmHXrnSgkZcw7ino4FRFw265$25(oUrl,fnCallBack,fnClientErrorCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


me.fnCallBack=fnCallBack;
me.fnErrorCallback=fnClientErrorCallback;



if((!oUrl.hostname)||(oUrl.hostname.toLowerCase()==window.location.hostname.toLowerCase()))
{
oUrl.setItem("type","iframe");
isCrossDomain=false;
}
else
{

var requestId=vp.crossdomain.ProxyIFrameRequest.registerCrossDomainRequest(onSuccessCallback);

oUrl.setItem("type","cdiframe");
oUrl.setItem("parentdomain",window.location.hostname);
oUrl.setItem("cdrequestkey",requestId);
isCrossDomain=true;
}


iframe=vp.crossdomain.IFrameFactory.getNext();

vp.events.add(iframe,"load",onIFrameLoad);
vp.events.add(iframe,"error",onIFrameError);


me.waitingForResponse=true;

};




this.getAsync=function $vpfn_wLlLnoCjQc80J9c2YRWi3w304$20(oURl,fnCallBack,fnClientErrorCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

initForRequest(oURl,fnCallBack,fnClientErrorCallback);


iframe.src=oURl.toString();
};




this.postAsync=function $vpfn_3j1Hu0Sq80uHoQM3$L5X2A316$21(oUrl,fnCallBack,fnClientErrorCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.sendFormAsync(oUrl,null,fnCallBack,fnClientErrorCallback);
};




this.sendFormAsync=function $vpfn_2jUEdog1KQWhjGcfU9y9FQ324$25(oUrl,oForm,fnCallBack,fnClientErrorCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}





initForRequest(oUrl,fnCallBack,fnClientErrorCallback);


if(!oForm)
{
oForm=document.createElement("form");
iframe.parentNode.appendChild(oForm);
}




try
{
var sCookieSessionId=vp.cookies.getSubValue("SITE","S");
var iCookieSessionId=vp.core.getNumber(parseInt(sCookieSessionId),0);
if(iCookieSessionId>0)
{
oUrl.setItem("cdsession",iCookieSessionId);
}
}catch(ex){}


var cookies=null;
try
{

cookies=window.document.cookie;
}catch(ex){}


try
{
var cookieHiddenField=null;
for(var i=0;i<oForm.childNodes.length;i++)
{
if(oForm.childNodes[i].name=="cdcookies")
{
cookieHiddenField=oForm.childNodes[i];
break;
}
}

if(!cookieHiddenField)
{

cookieHiddenField=vp.ui.createNamedElement("input","cdcookies");
cookieHiddenField.type="hidden";
cookieHiddenField.value=cookies;
oForm.appendChild(cookieHiddenField);
}
}catch(ex){}


oForm.method="post";
oForm.target=iframe.name;
oForm.action=oUrl.toString();


oForm.submit();
};

};





vp.crossdomain.ProxyIFrameRequest.handleCrossDomainResponse=function $vpfn_o_btPh8g8ftvow_GPqoGZA399$62(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


var currentURL=new vp.web.URL(sResponse);

var crossDomainResponse=currentURL.hash.substr(1);


crossDomainResponse=vp.web.urlDecode(crossDomainResponse);


try
{
var response=vp.http.parseJSON(crossDomainResponse);
}catch(ex){}

if(response)
{
try
{

var callback=vp.crossdomain.ProxyIFrameRequest.crossDomainRequests[response.k];
callback(response.r);
}
catch(ex)
{
if((typeof vp!="undefined")&&vp.logger)
{
vp.crossdomain.safeLogError(Math.random(),"vp.upload.handleCrossDomainResponse","Error executing callback: "+ex,vp.logger.Severity.Error);
}
}
}
else
{
if((typeof vp!="undefined")&&vp.logger)
{
vp.crossdomain.safeLogError(Math.random(),"vp.upload.handleCrossDomainResponse","Received invalid response in cross-domain callback",vp.logger.Severity.Error);
}
}
};

vp.crossdomain.safeLogError=function $vpfn_hXTo481BHkyUErw3yHN1$A441$30(iX,sFunctionName,sMessage,iSeverity)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if((typeof vp!="undefined")&&vp.logger)
{
vp.logger.logError(iX,sFunctionName,sMessage,iSeverity);
}
};

vp.crossdomain.ProxyIFrameRequest.crossDomainRequestId=0;
vp.crossdomain.ProxyIFrameRequest.crossDomainRequests=Array();






vp.crossdomain.ProxyIFrameRequest.registerCrossDomainRequest=function $vpfn_IGetFow39oPvi22daM3p0g457$63(fnCallback)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


var requestId=vp.crossdomain.ProxyIFrameRequest.crossDomainRequestId;
vp.crossdomain.ProxyIFrameRequest.crossDomainRequestId++;

vp.crossdomain.ProxyIFrameRequest.crossDomainRequests[requestId]=fnCallback;
return requestId;

};

vp.crossdomain.IFrameFactory=new(function $vpfn_oR7aRMeGBhuolYw_yT0v8Q469$36()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var me=this;




var iframeContainer=null;




this.getNext=function $vpfn_twMGqV12ti0oMHvnMPZo5Q482$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!iframeContainer)
{
iframeContainer=document.createElement("Div");
iframeContainer.id="divCrossDomainRequests";
vp.ui.collapse(iframeContainer);
document.body.appendChild(iframeContainer);
}


var sName="iframe_crossdomain_"+vp.crossdomain.IFrameFactory.nextId;
vp.crossdomain.IFrameFactory.nextId++;


var iframe=vp.ui.createNamedElement("iframe",sName);
iframe.id=sName;
iframeContainer.appendChild(iframe);

return iframe;

};

})();

vp.crossdomain.IFrameFactory.nextId=0;





vp.crossdomain.ImagePing=function $vpfn_vuOfh63EXlX1vkNnEdDxkA513$27(cbSuccess,cbFailure,iTimeout)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var me=this;

var bTimedOut=false;
var bGotResponse=false;

this.ping=function $vpfn_6SLn0M0mfh1AwY8J96Fxjg521$16(sUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oImage=new Image();
vp.events.add(oImage,"load",onSuccess);
vp.events.add(oImage,"error",onError);
oImage.src=sUrl;

window.setTimeout(onTimeout,(iTimeout)?iTimeout:60000);
};

var onTimeout=function $vpfn_YSTu447b5CaXV2pYgbE_dA532$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!bGotResponse)
{
bTimedOut=true;
cbFailure();
}

};

var onSuccess=function $vpfn_bkE$gQjAvMI1hFsem9N69Q543$20(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
bGotResponse=true;
if(!bTimedOut)
{
cbSuccess();
}
};

var onError=function $vpfn_5oxmqZuvWhaL6TnEPEJ8YA552$18(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
bGotResponse=true;
if(!bTimedOut)
{
cbFailure();
}
};

};
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}



var swfobject=function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$16(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$351(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$1535(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$1856(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$1966(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$2120(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}f._vpfn='$vpfn_XBg6zUrCgKRU3T3q2KTHiA5$2262';function K(X){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(J){X()}else{U[U.length]=X}}K._vpfn='$vpfn_e_YXt3P8EMZR71xjGt2aIg5$2488';function s(Y){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function $vpfn_ROsa2MJfFc31V8sxAeu_Zg5$2856(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}X();Y()}}else{O.onload=Y}}}}}s._vpfn='$vpfn_Rhp9HT89iKpTKse31_M8Rg5$2546';function h(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(T){V()}else{H()}}h._vpfn='$vpfn_kAoLqKgIrH7l9J1mPx0AKA5$2912';function V(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$3106(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(typeof Z.GetVariable!=D){try{var ab=Z.GetVariable("$version");}catch(ex){}if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}V._vpfn='$vpfn_u$PKJCW70w4sJ8_5DPOohw5$2957';function H(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}H._vpfn='$vpfn_J94yw$88LHdtbV61IUNM0Q5$3456';function z(aa){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}z._vpfn='$vpfn_GY8oQxUPWl6jty1XwR8vAw5$4526';function A(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}return!a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}A._vpfn='$vpfn_zTmQyptDqYBdk2jX4N$qUw5$4725';function P(aa,ab,X,Z){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$5708(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}P._vpfn='$vpfn_6DsUZ9Vor8jvZ9j4o6oY4A5$4812';function p(Y){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$6017(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}p._vpfn='$vpfn_PY4RHlIv2ySl9r6KoV4j$g5$5845';function g(ab){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}g._vpfn='$vpfn_5_HEe14Q6LDmXfwkKw0d2w5$6180';function u(ai,ag,Y){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}u._vpfn='$vpfn_JwpDxP3dMe$ScHMT0vgZyA5$6549';function e(Z,X,Y){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}e._vpfn='$vpfn_iE0yWauaDuLC7cdahC9mnQ5$7701';function y(Y){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$7934(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}y._vpfn='$vpfn_s2s_IBuSBKsiqqEn0pev5w5$7821';function b(Z){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}b._vpfn='$vpfn_cEWWDcepRvg25E7aMI2Egg5$8069';function c(Z){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}c._vpfn='$vpfn_Qlam5UEH1fRF3H1mld2iPw5$8208';function C(X){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}return j.createElement(X)}C._vpfn='$vpfn_kj98ts6LXLrmpH2v$EaPXg5$8295';function i(Z,X,Y){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}i._vpfn='$vpfn__DwTVWm5PJV77JMsiwAPlw5$8339';function F(Z){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}F._vpfn='$vpfn_18bvJBD0vWWLWHp3mPmZ5A5$8408';function v(ac,Y,ad,ab){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}v._vpfn='$vpfn_Nq_yXPDmbloRkSlojnddOg5$8668';function w(Z,X){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}w._vpfn='$vpfn_3L2xApr28f26ubI5DHK1yQ5$9318';function L(Y){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}L._vpfn='$vpfn_$JgpyAdY7d0NF8JYNFZI0w5$9476';var d=function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$9623(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(M.ie&&M.win){window.attachEvent("onunload",function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$9688(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$10004(ab,X,aa,Z){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$10234(X){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(M.w3){return z(X)}},embedSWF:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$10287(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$10454(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$11128(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}m=false},ua:M,getFlashPlayerVersion:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$11184(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$11296(Z,Y,X){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$11397(Z,aa,X,Y){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$11471(X){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(M.w3){y(X)}},createCSS:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$11518(aa,Z,Y,X){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$11631(aa){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function $vpfn_$ECoHYiw2OB2uZEykmcIVw5$11977(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;

}



if(typeof(vp)=="undefined")
{
var vp={};
}

if(!vp.text)
{
vp.text=function(){};
}

var RANGE_COMPARE_END_TO_END="EndToEnd";
var RANGE_COMPARE_START_TO_END="StartToEnd";
var RANGE_COMPARE_START_TO_START="StartToStart";
var RANGE_COMPARE_END_TO_START="EndToStart";









vp.text.Range=function $vpfn_ubw9nos4OigbvKL2kCoaJQ30$16(oRange)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.range=oRange;
};

if(!document.all)
{

vp.text.Range.prototype._mozRangeCompareMap={};


vp.text.Range.prototype._mozRangeCompareMap[RANGE_COMPARE_END_TO_END]=Range.END_TO_END;
vp.text.Range.prototype._mozRangeCompareMap[RANGE_COMPARE_START_TO_END]=Range.START_TO_END;
vp.text.Range.prototype._mozRangeCompareMap[RANGE_COMPARE_START_TO_START]=Range.START_TO_START;
vp.text.Range.prototype._mozRangeCompareMap[RANGE_COMPARE_END_TO_START]=Range.END_TO_START;

}





vp.text.Range.prototype.toString=function $vpfn_3ylWars8aIVRil8zgyrWAA52$35()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
return this.range.text;
}
else
{
if(this.range.startContainer==this.range.endContainer&&
this.range.startContainer.nodeType==3)
{
return this.range.toString();
}

if(this.range.toString()==="")
{
return"";
}




var oStart=this._getNormalizedEndPoint(this.range.startContainer,this.range.startOffset);
var oEnd=this._getNormalizedEndPoint(this.range.endContainer,this.range.endOffset);

var oContainer=oStart.node;
var iOffset=oStart.offset;
var aOutput=[];
var bAtStart=true;

while(oContainer!=oEnd.node)
{
if(oContainer.nodeType==3)
{

var oSibling=oContainer.previousSibling;
if(!oSibling||
oSibling.nodeType!=1||
(oSibling.tagName!="P"&&oSibling.tagName!="LI")||
!this._isOnlyWhitespace(oContainer.nodeValue))
{
aOutput.add(oContainer.nodeValue.substr(iOffset));
}
}
else if(oContainer.tagName=="P"||
oContainer.tagName=="BR"||
oContainer.tagName=="LI")
{
if(!bAtStart)
{
aOutput.add("\r\n");
}
}


oContainer=vp.xml.NodeWalker.getNext(oContainer,true);
iOffset=0;
bAtStart=false;
}

if(oEnd.node.nodeType==3)
{
aOutput.add(oEnd.node.nodeValue.substring(iOffset,oEnd.offset));
}



var sRet=aOutput.join("").replace(/(.*?)[\r\n\f]*$/,"$1");


sRet=sRet.replace(/\u00A0/g," ");

return sRet;
}
};





vp.text.Range.prototype.getParent=function $vpfn_Jx0DlbkkJRsy6O9qD9AUcw132$36()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oParent;
if(document.all)
{
oParent=this.range.parentElement();
}
else
{
oParent=this.range.commonAncestorContainer;

if(oParent.nodeType!=1&&oParent.nodeType!=9)
{
oParent=oParent.parentNode;
}
}

return oParent;
};





vp.text.Range.prototype.getParentDocument=function $vpfn_FQjMCIHEIgEr_eqifyLWSA156$44()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oParent=this.getParent();
if(oParent.nodeType==9)
{
return oParent;
}
else
{
return oParent.ownerDocument;
}
};





vp.text.Range.prototype.selectNode=function $vpfn_zAw2O$J9OheObD5ZGiO8_w173$37(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
if(oNode.nodeType==1)
{
this.range.moveToElementText(oNode);
}
else if(oNode.nodeType==3)
{
this.range.moveToElementText(oNode.parentNode);

this.range.findText(oNode.nodeValue);
}
}
else
{
this.range.selectNode(oNode);
}
};





vp.text.Range.prototype.selectNodeContents=function $vpfn_Jywpm1pxsxc$172d4mpQDg198$45(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
this.range.moveToElementText(oNode);
}
else
{
this.range.selectNodeContents(oNode);
}
};





vp.text.Range.prototype.collapse=function $vpfn_oFeWI8F7GFNJ39A6vCAdmQ214$35(bToStart)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.range.collapse(bToStart);

if(!document.all)
{
var oEndPoint=this._getNormalizedEndPoint(this.range.startContainer,this.range.startOffset);
if(oEndPoint)
{
this.range.selectNode(this.getParentDocument().body);
this.range.setEnd(oEndPoint.node,oEndPoint.offset);
this.range.setStart(oEndPoint.node,oEndPoint.offset);
}
}
};





vp.text.Range.prototype.isCollapsed=function $vpfn_AXj8j1wGVsXsVLRkfs32Gg234$38()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return this.toString().length===0;
};







vp.text.Range.prototype.setEndPoint=function $vpfn_2SHlHoTIJ6bS3HQmkA42yQ245$38(sType,oRange)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
this.range.setEndPoint(sType,oRange.range);
}
else
{
if(sType==RANGE_COMPARE_END_TO_START)
{
this.range.setEnd(oRange.range.startContainer,oRange.range.startOffset);
}
else if(sType==RANGE_COMPARE_START_TO_START)
{
this.range.setStart(oRange.range.startContainer,oRange.range.startOffset);
}
else if(sType==RANGE_COMPARE_START_TO_END)
{
this.range.setStart(oRange.range.endContainer,oRange.range.endOffset);
}
else if(sType==RANGE_COMPARE_END_TO_END)
{
this.range.setEnd(oRange.range.endContainer,oRange.range.endOffset);
}
}
};




vp.text.Range.prototype.select=function $vpfn_gYDnNIsKmOpqpLMPdd0UHw275$33(bCaretAtStart)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(document.all)
{
this.range.select();
}
else
{
var oSelection=this.getParentDocument().defaultView.getSelection();
oSelection.removeAllRanges();
oSelection.addRange(this.range);

if(bCaretAtStart&&!this.range.collapsed)
{


oSelection.collapseToEnd();
oSelection.extend(this.range.startContainer,this.range.startOffset);
}
}
};





vp.text.Range.prototype.clone=function $vpfn_UOVvltoWWE$H9HPcCCKfPA302$32()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oNewRange=document.all?this.range.duplicate():this.range.cloneRange();
return new vp.text.Range(oNewRange);
};






vp.text.Range.prototype.buildNodeFromContents=function $vpfn_VnLbd9gttuXvs_filo55xA313$48(sTagName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oNode=this.getParentDocument().createElement(sTagName);

if(document.all)
{
oNode.innerHTML=this.range.htmlText;
}

else
{
oNode.appendChild(this.range.cloneContents());
}

return oNode;
};






vp.text.Range.prototype.pasteHTML=function $vpfn_aqf5U6mHZcd7ysJR7CShuA335$36(sHTML)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
this.range.pasteHTML(sHTML);
}
else
{
if(sHTML==="")
{
this.range.deleteContents();
return;
}

var oTextNode=this.getParentDocument().createElement("SPAN");
oTextNode.innerHTML=sHTML;
this.range.deleteContents();

var oChild;
for(var i=oTextNode.childNodes.length-1;i>=0;i--)
{
oChild=oTextNode.childNodes[i];
oTextNode.removeChild(oChild);
this.range.insertNode(oChild);
}

this.selectNode(oChild);
this.collapse(false);
}
};






vp.text.Range.prototype.insertNode=function $vpfn_vEcSTpJMPKUHnZoZ06W5lg371$37(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
var sTempId="tempNode"+(new Date().valueOf());
this.pasteHTML("<span id='"+sTempId+"'></span>");
var oTempElement=oNode.ownerDocument.getElementById(sTempId);
oTempElement.parentNode.replaceChild(oNode,oTempElement);
}
else
{
this.range.insertNode(oNode);

}
};




vp.text.Range.prototype.deleteContents=function $vpfn_QKZRHD_fngfb8gPdB5Kx4Q390$41()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
this.range.pasteHTML("");
}
else
{
this.range.deleteContents();
}
};







vp.text.Range.prototype.isEqual=function $vpfn_5iqZoxnBfXVOr$41R27o_Q408$34(oRange)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(this.range===null^oRange===null)
{
return false;
}
else if(this.range===null&&oRange===null)
{
return true;
}

if(document.all)
{
return this.range.isEqual(oRange.range);
}
else
{
return(this.range.startContainer==oRange.range.startContainer&&
this.range.endContainer==oRange.range.endContainer&&
this.range.startOffset==oRange.range.startOffset&&
this.range.endOffset==oRange.range.endOffset);
}
};









vp.text.Range.prototype.compareEndPoints=function $vpfn_ZO_BnWikl0Ii8XaSf5G_cw440$43(sType,oRange)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
return this.range.compareEndPoints(sType,oRange.range);
}
else
{




if(sType==RANGE_COMPARE_END_TO_START)
{
sType=RANGE_COMPARE_START_TO_END;
}
else if(sType==RANGE_COMPARE_START_TO_END)
{
sType=RANGE_COMPARE_END_TO_START;
}
return this.range.compareBoundaryPoints(this._mozRangeCompareMap[sType],oRange.range);
}
};




vp.text.Range.prototype.expandByWord=function $vpfn_XifTi$atXu0EU5wSGYXcnQ467$39()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this._expandByWordInDirection(true);
this._expandByWordInDirection(false);
};





vp.text.Range.prototype._expandByWordInDirection=function $vpfn_yWdp6BVN2g29yuGHIHwu9w477$51(bStart)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sDirection=bStart?"Start":"End";
var iIncrement=bStart?1:-1;
var oDotRegExp=bStart?(/^\./g):(/\.$/g);


var oNonWordRegExp=(/[^\w\.\'\u0080-\uFFFE]/g);
var bFoundDot=false;
var iLastHtmlTextLength=-1;
var bMoved=false;
var bContinue=true;


while(bContinue)
{
var bMoveBack=false;

var iCountMoved=this["move"+sDirection](iIncrement*-1);

var sLastVal=sCurrentVal;
var sCurrentVal=this.toString();

if(iCountMoved===0||sLastVal==sCurrentVal)
{


if(document.all&&
this.range.htmlText.length>iLastHtmlTextLength)
{
bMoveBack=true;
}
else if(document.all&&iCountMoved===1&&sLastVal==sCurrentVal)
{
bMoveBack=true;
}


else if(!document.all&&sLastVal==sCurrentVal&&iCountMoved>0)
{
bMoveBack=true;
}
else
{
if(bFoundDot)
{
bFoundDot=false;
bMoveBack=true;
}

bContinue=false;
}
}
else
{
if(oDotRegExp.test(sCurrentVal))
{
bFoundDot=true;
}
else if(oNonWordRegExp.test(sCurrentVal))
{
bMoveBack=true;
}
else
{
bFoundDot=false;
bMoved=true;
}
}

if(bMoveBack)
{
this["move"+sDirection](iIncrement*(bFoundDot?2:1));
bContinue=false;
}

if(document.all)
{
iLastHtmlTextLength=this.range.htmlText.length;
}
}

return bMoved;
};





vp.text.Range.prototype._isBlockLevelElement=function $vpfn_6OUwaRky6y2Ri_plVX2skA566$47(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oNode.nodeType==3)
{
return false;
}
return oNode.tagName=="P"||
oNode.tagName=="BR"||
oNode.tagName=="LI"||
oNode.tagName=="DIV";
};





vp.text.Range.prototype.move=function $vpfn_bU4rvtU_YOPqCUw3H08JQw582$31(iCharacters)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
this.range.move("character",iCharacters);
}
else
{

if(iCharacters>0)
{
this.moveEnd(iCharacters);
this.collapse(false);
}
else
{
this.moveStart(iCharacters);
this.collapse(true);
}
}
};





vp.text.Range.prototype.moveEnd=function $vpfn_m$2LRo6manLkl6M3HGUZOw608$34(iCharacters)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return this._moveEndPoint(iCharacters,false);
};





vp.text.Range.prototype.moveStart=function $vpfn_6$isH_IHs7RCTSLaxSpIEA617$36(iCharacters)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return this._moveEndPoint(iCharacters,true);
};








vp.text.Range.prototype._howManyCharactersAreLeft=function $vpfn_Z0w8IyYZH2ZvvEIsORdd3A629$52(oContainer,iOffset,iDirection)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(iDirection>0)
{
if(oContainer.nodeType==3)
{
return oContainer.nodeValue.length-iOffset;
}
else
{
return 0;
}
}
else
{
return iOffset;
}
};





vp.text.Range.prototype._moveEndPoint=function $vpfn_HYMZkdKsAkW71z7dFSV1CA652$40(iCount,bStart)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sEndPoint=bStart?"Start":"End";
if(document.all)
{
var iOriginalLen=this.toString().length;
var iRet=this.range["move"+sEndPoint]("character",iCount);
return Math.max(iRet,Math.abs(iOriginalLen-this.toString().length));
}
else
{
if(iCount===0)
{
return 0;
}

var iCountMoved=0;
var bForward=iCount>0;
var iDirection=bForward?1:-1;
iCount=Math.abs(iCount);

var oNode=this.range[sEndPoint.toLowerCase()+"Container"];
var iOffset=this.range[sEndPoint.toLowerCase()+"Offset"];

var oEndPoint=this._getNormalizedEndPoint(oNode,iOffset);
var oOriginalEndPoint=vp.core.shallowCopy(oEndPoint);

if(!oEndPoint)
{
return 0;
}

oNode=oEndPoint.node;

while(oNode&&iCount>0)
{

if(oNode.nodeType==3)
{
var iCharsLeftInTextNode=this._howManyCharactersAreLeft(oNode,oEndPoint.offset,iDirection);
var iCountToMove=Math.min(iCount,iCharsLeftInTextNode);

oEndPoint.offset+=(iCountToMove*iDirection);
iCount-=iCountToMove;
iCountMoved+=iCountToMove;
oEndPoint.node=oNode;



if(oEndPoint.offset===0)
{
oEndPoint=this._getNormalizedEndPoint(oEndPoint.node,oEndPoint.offset);
}
}

if(iCount===0)
{
break;
}

var oNextNode=vp.xml.NodeWalker.getNext(oNode,bForward);
while(iCount>0)
{
if(!oNextNode)
{
iCount=0;
break;
}

if(oNextNode.nodeType==3)
{

if(!bForward&&this._isBlockLevelElement(oEndPoint.node))
{
iCount--;
iCountMoved++;
}

oNode=oNextNode;
oEndPoint.node=oNextNode;
oEndPoint.offset=bForward?0:oNextNode.nodeValue.length;
break;
}

if(this._isBlockLevelElement(oNextNode))
{


if(bForward||oEndPoint.node.nodeType!=3||oEndPoint.offset>0)
{
iCount--;
iCountMoved++;
}

oEndPoint.node=oNextNode;
oEndPoint.offset=0;
}

oNextNode=vp.xml.NodeWalker.getNext(oNextNode,bForward);
}
}

oEndPoint=this._getNormalizedEndPoint(oEndPoint.node,oEndPoint.offset);

if(vp.core.shallowIsEqual(oEndPoint,oOriginalEndPoint))
{
return 0;
}



var bResetStart=(bStart&&iDirection>0)||(!bStart&&iDirection<0);

var sOtherEndpoint=bStart?"end":"start";
var oOtherEndPoint=this._getNormalizedEndPoint(this.range[sOtherEndpoint+"Container"],this.range[sOtherEndpoint+"Offset"]);

if(bResetStart)
{
var oRange=vp.text.createTextRange(this.getParentDocument());
oRange.selectNode(oEndPoint.node);
oRange.range.setStart(oEndPoint.node,oEndPoint.offset);
oRange.range.setEnd(oEndPoint.node,oEndPoint.offset);

if(bStart)
{
if(this.compareEndPoints(RANGE_COMPARE_END_TO_START,oRange)<0)
{
oOtherEndPoint=oEndPoint;
}
}
else
{
if(this.compareEndPoints(RANGE_COMPARE_START_TO_START,oRange)>0)
{
oOtherEndPoint=oEndPoint;
}
}
}

this.range.setStart(this.getParentDocument().body,0);
this.collapse(true);

var oStartingPoint=bStart?oEndPoint:oOtherEndPoint;
var oEndingPoint=bStart?oOtherEndPoint:oEndPoint;

this.range.setEnd(oEndingPoint.node,oEndingPoint.offset);
this.range.setStart(oStartingPoint.node,oStartingPoint.offset);

}

return iCountMoved;
};






vp.text.Range.prototype._getNormalizedEndPoint=function $vpfn_qMRsyp3$XH5ryZOL4hF92Q810$49(oNode,iOffset)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oNode.nodeType==3)
{


if(iOffset===0)
{
var oLastNode=oNode;

while(oLastNode=vp.xml.NodeWalker.getNext(oLastNode,false))

{
if(oLastNode.nodeType==3)
{
return{
node:oLastNode,
offset:oLastNode.nodeValue.length
};
}
else if(oLastNode.tagName=="BR")
{
return{
node:oLastNode,
offset:0
};
}
else if(oLastNode.tagName=="P"||
oLastNode.tagName=="BODY"||
oLastNode.tagName=="LI"||
oLastNode.tagName=="DIV")
{
break;
}
}
}

return{
node:oNode,
offset:iOffset
};
}
else if(oNode.nodeType==1)
{

if(oNode.tagName=="BR")
{
return{
node:oNode,
offset:0
};
}


if(iOffset!==0)
{
if(oNode.childNodes.length>iOffset)
{
oNode=oNode.childNodes[iOffset];

if(oNode.nodeType==1&&oNode.tagName=="BR")
{
oNextNode=vp.xml.NodeWalker.getNext(oNode,false);
if(oNextNode&&oNextNode.nodeType==3)
{
return this._getNormalizedEndPoint(oNextNode,oNextNode.nodeValue.length);
}
}
}
else
{


oNextNode=vp.xml.NodeWalker.getNextAfter(oNode,true);
if(oNextNode)
{
oNode=oNextNode;
}
else
{


while(oNode.lastChild)
{
oNode=oNode.lastChild;
}

while(oNode)
{
if(oNode.nodeType==3)
{
return this._getNormalizedEndPoint(oNode,oNode.nodeValue.length);
}
else if(oNode.tagName=="BR")
{
return this._getNormalizedEndPoint(oNode,0);
}
else if(oNode.tagName=="P"||oNode.tagName=="LI")
{
return{
node:oNode,
offset:0
};
}

oNode=vp.xml.NodeWalker.getNext(oNode,false);
}
}
}
}

var oCurrentNode=oNode;
var oLastP=null;

while(oCurrentNode)
{
var oNextNode=vp.xml.NodeWalker.getNext(oCurrentNode,true);

if(oCurrentNode.nodeType==3||oCurrentNode.tagName=="BR")
{
return this._getNormalizedEndPoint(oCurrentNode,0);
}


else if(oCurrentNode.tagName=="P")
{
if(!oNextNode||
oNextNode.tagName=="P"||
oNextNode.tagName=="LI"||
oNextNode.tagName=="BR")
{
return{
node:oCurrentNode,
offset:0
};
}

oLastP=oCurrentNode;
}

oCurrentNode=oNextNode;
}

if(oLastP)
{
return{
node:oLastP,
offset:0
};
}
}

return null;
};





vp.text.Range.prototype.insertPlaceholders=function $vpfn_LQvKd8ABwToArsrZL_59Yg969$45(sUniqueID)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var sSelectedText=this.toString();


if(sSelectedText!=="")
{
this._insertTokenInRange(sUniqueID,false,this);
}


this._insertTokenInRange(sUniqueID,true,this);



if(document.all||sSelectedText!=="")
{
this.restoreFromPlaceholders(sUniqueID,true);
}
};





vp.text.Range.prototype.restoreFromPlaceholders=function $vpfn_tl8h8v9uyWd0RmBUkTgiOA995$50(sUniqueID,bPreserveTokens)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var i;
var oDocument=this.getParentDocument();
var oStartToken=oDocument.getElementById(this._getTokenName(sUniqueID,true));

if(!oStartToken)
{
return;
}


this.selectNode(oStartToken);
this.range.collapse(false);


if(!bPreserveTokens)
{
this._removeToken(oStartToken,"Start");
}


var oEndToken=oDocument.getElementById(this._getTokenName(sUniqueID,false));

if(oEndToken)
{

var oEndRange=vp.text.createTextRange(oDocument);
oEndRange.selectNode(oEndToken);
oEndRange.range.collapse(true);



this.setEndPoint(RANGE_COMPARE_END_TO_START,oEndRange);


if(!bPreserveTokens)
{
this._removeToken(oEndToken,"End");
}
}
else
{
this.range.collapse(true);
}
};

vp.text.Range.prototype._removeToken=function $vpfn_PWIX5tk1Q7l3yp4keOyiXA1042$39(oToken,sType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oParent=oToken.parentNode;

var iCharOffset=-1;
var iNodeOffset=-1;




if(!document.all)
{
if(oToken.previousSibling&&oToken.nextSibling)
{
if(oToken.previousSibling.nodeType==3&&
oToken.nextSibling.nodeType==3)
{

for(iNodeOffset=0;iNodeOffset<oParent.childNodes.length;iNodeOffset++)
{
var oChild=oParent.childNodes[iNodeOffset];
if(oChild==oToken.previousSibling)
{
iCharOffset=oChild.nodeValue.length;
break;
}
}
}
}
}

oToken.id="";
oParent.removeChild(oToken);


if(!document.all&&iNodeOffset>=0)
{
oParent.normalize();
this.range["set"+sType](oParent.childNodes[iNodeOffset],iCharOffset);
}
};







vp.text.Range.prototype._getTokenName=function $vpfn_AEv4m5K3DGNauL7WS7tgKw1090$40(sUniqueID,bStart)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return(bStart?"start":"end")+"_token_"+sUniqueID;
};









vp.text.Range.prototype._insertTokenInRange=function $vpfn_fJqRTD$xUoMmJv04nRztDQ1103$46(sUniqueID,bStart,oRange)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDoc=oRange.getParentDocument();
var sTokenName=this._getTokenName(sUniqueID,bStart);


var oOldToken=oDoc.getElementById(sTokenName);
while(oOldToken)
{
if(oOldToken.parentNode)
{
oOldToken.parentNode.removeChild(oOldToken);
}
oOldToken.id="";
oOldToken=oDoc.getElementById(sTokenName);
}

var oToken=oDoc.createElement("INS");
oToken.id=sTokenName;
oToken.isToken=true;
oToken.style.display="none";
oToken.innerHTML="*!t";


var oClonedRange=oRange.clone();
oClonedRange.range.collapse(bStart);


if(document.all)
{


var sTokenHTML=oToken.outerHTML;
var oParent=oClonedRange.getParent();
if((oParent.tagName=="P"||oParent.tagName=="LI")&&
oParent.innerHTML.length===0)
{
sTokenHTML+="&nbsp;";
}
oClonedRange.pasteHTML(sTokenHTML);
}
else
{
oClonedRange.range.insertNode(oToken);
}
};






vp.text.Range.prototype.findText=function $vpfn_8qXG_TW1rEucCdU4vSS7gg1155$35(sText,iOccurrence)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(iOccurrence)=="undefined")
{
iOccurrence=1;
}

var i;
var oNewRange=null;

if(document.all)
{
var oScopeRange=this.clone();
oNewRange=null;

var bFound=false;
for(i=0;i<iOccurrence;i++)
{
oNewRange=oScopeRange.clone();
bFound=oNewRange.range.findText(sText,0);
if(!bFound)
{
oNewRange=null;
break;
}
oScopeRange.setEndPoint(RANGE_COMPARE_START_TO_END,oNewRange);
}


if(oNewRange)
{
return this.inRange(oNewRange)?oNewRange:null;
}
else
{
return null;
}
}
else
{

var oOriginalSelection=vp.text.getSelectedRange(this.getParentDocument());

var oWin=this.getParentDocument().defaultView;
var oRange=null;
i=0;


while(oWin.find(sText))
{
oNewRange=vp.text.getSelectedRange(this.getParentDocument());
if(this.inRange(oNewRange))
{
oRange=oNewRange;
i++;
}

if(i>=iOccurrence)
{
break;
}
}


if(oOriginalSelection)
{
oOriginalSelection.select();
}
else
{
oWin.getSelection().removeAllRanges();
}

return oRange;
}
};






vp.text.Range.prototype.inRange=function $vpfn_nAxA0lBjT1MScU9FnjUZtw1237$34(oRange)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(document.all)
{
return this.range.inRange(oRange.range);
}
else
{
return this.compareEndPoints(RANGE_COMPARE_START_TO_START,oRange)<=0&&
this.compareEndPoints(RANGE_COMPARE_END_TO_END,oRange)>=0;
}
};






vp.text.Range.prototype.moveNextWord=function $vpfn_WzMhf8mZ2xLbCm3wQWq3FA1255$39()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oOriginalRange=this.clone().range;
var bRestore=false;
this.collapse(false);


while(true)
{
if(!this.moveEnd(1))
{
bRestore=true;
break;
}

if(vp.text.Range.prototype._isOnlyWhitespace(this._toStringBasic()))
{
this.moveStart(1);
}
else
{
this.moveEnd(-1);
break;
}
}

if(!bRestore)
{
var bFound=this._expandByWordInDirection(false);
if(!bFound)
{
bRestore=true;
}
}

if(bRestore)
{
this.range=oOriginalRange;
return false;
}

return true;
};




vp.text.Range.prototype._toStringBasic=function $vpfn_JC2sqJrN1WJ5fW6htGGnrg1302$41()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return document.all?this.range.text:this.range.toString();
};




vp.text.Range.prototype._isOnlyWhitespace=function $vpfn_sjLxLLcHqRypddLY8cKecw1310$44(sText)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return!((/\w/).test(sText));
};






vp.text.createTextRange=function $vpfn_vHRbbY1i1sllWsgDaH1SQQ1320$26(oDocument)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oDocument=oDocument||document;
var oRange=document.all?oDocument.body.createTextRange():oDocument.createRange();
return new vp.text.Range(oRange);
};








vp.text.getSelectedRange=function $vpfn_lQoyTg$1pTPfH7ShzJzrEg1334$27(oDocument,oParentElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oDocument=oDocument||document;
var oRange;


if(document.all)
{
try
{
oRange=oDocument.selection.createRange();
if(oParentElement&&!vp.ui.isChildOf(oRange,oParentElement))
{
oRange=null;
}
}
catch(e)
{
if(e.number!=-2147024891)
{
throw e;
}

}
}
else
{
var oSelection=oDocument.defaultView.getSelection();
if(oSelection.rangeCount>0)
{
oRange=oSelection.getRangeAt(0);
}
}

if(oParentElement&&!oRange)
{
var oWrapper=vp.text.createTextRange(oDocument);
oWrapper.selectNodeContents(oParentElement);
oWrapper.collapse(true);
return oWrapper;
}
else if(oRange)
{
return new vp.text.Range(oRange);
}
else
{
return null;
}
};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}


if(typeof(vp)=="undefined")
{
var vp={};
}


if(!vp.widget)
{
vp.widget={};
}


















vp.widget.RichMenu=function $vpfn_UE6ui5Jiih$cmixRh4Mq3g32$21(oElement,oMenuParent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

this.chrome=null;

this.element=oElement;
this.menuElement=null;
this.selectedNode=null;
this.menuPadding=-1;
this.menuWidth=0;
this.menuHeight=0;
this.orientation=null;
this.isFormField=null;

this.onchange=new vp.events.CustomEvent(this,"onchange");
this.onbeforechange=new vp.events.CustomEvent(this,"onbeforechange");
this.onstatechange=new vp.events.CustomEvent(this,"onstatechange");
this.onshowmenu=new vp.events.CustomEvent(this,"onshowmenu");
this.onhidemenu=new vp.events.CustomEvent(this,"onhidemenu");

var _bEnabled=true;
var _sInitialValue=null;

this.isTemplateMenu=false;
var _templateMenuOptions=[];

var _oLeftImg=null;
var _oMiddleCol=null;
var _oRightImg=null;

var _oMenuParent=oMenuParent||window;

var _oInitialAttributes={};

var init=function $vpfn_yQb6rewA6FgOkBhbtYJHZw67$15()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.core.setObjectReference(me.element,me,"_menu");

if(!me.chrome)
{
var sChromeName=vp.core.getAttribute(me.element,"chrome","");
if(sChromeName)
{
me.chrome=vp.core.shallowCopy(eval(sChromeName));
}

if(!me.chrome)
{
me.chrome=vp.core.shallowCopy(vp.widget.RichMenu.chrome);
}
}

if(!me.chrome)
{
throw new Error("No chrome defined for RichMenu");
}

_oInitialAttributes.menuWidth=vp.core.getAttribute(me.element,"menuwidth",me.menuWidth);
_oInitialAttributes.menuHeight=vp.core.getAttribute(me.element,"menuheight",me.menuHeight);
_oInitialAttributes.orientation=vp.core.getAttribute(me.element,"orientation",null);
_oInitialAttributes.menuPadding=vp.core.getAttribute(me.element,"menupadding",null);
_oInitialAttributes.isFormField=vp.core.getAttribute(me.element,"isformfield",null);
_oInitialAttributes.hideOnMouseOut=vp.core.getBoolean(vp.core.getAttribute(me.element,"hideonmouseout",false));

_sInitialValue=vp.core.getAttribute(me.element,"value",null);


var sTransformHtmlFunction=vp.core.getAttribute(me.element,"transformSelectedItemHTML",null);
if(sTransformHtmlFunction)
{
me.transformSelectedItemHTML=new Function("sLabel","sValue",sTransformHtmlFunction);
}

me.menuElement=_oMenuParent.document.createElement("DIV");
me.menuElement.className="richMenuItems";

vp.ui.setStyleValue(me.element,"cursor","pointer");

vp.events.add(me.menuElement,"mousedown",vp.events.cancel);

var optionsFound=false;

var iLen=me.element.childNodes.length;
for(var i=0;i<iLen;i++)
{
var oNode=me.element.childNodes[0];
me.element.removeChild(oNode);


if(oNode.nodeType==3)
{
continue;
}

if(vp.core.getBoolean(vp.core.getAttribute(oNode,"rich-menu-template")))
{
if(optionsFound)
{
throw new Error("RichMenu contains both a template and options, which is not allowed.");
}

me.isTemplateMenu=true;

me.menuElement.appendChild(oNode);

oNode.style.display="";
oNode.style.visibility="";

break;
}
else
{
if(me.isTemplateMenu)
{
throw new Error("RichMenu contains both a template and options, which is not allowed.");
}

optionsFound=true;

var sValue=vp.core.getAttribute(oNode,"value");
if(typeof(sValue)=="undefined")
{
sValue=$(oNode).children("[value]").attr("value");
}
if(typeof(sValue)=="undefined")
{
sValue=$(oNode).find("*[value]").attr("value");
}

oNode.setAttribute("value",sValue);

var sOnClick=vp.core.getAttribute(oNode,"onclick");

me.addOption(oNode.innerHTML,sValue,isNodeSelected(oNode),sOnClick);
}
}

if(me.isTemplateMenu)
{
initMenu();

vp.ui.forAllChildren(
me.menuElement,
function $vpfn_mzWnvLdJAeegzh589usKFg176$16(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oNode.nodeType==1&&vp.core.getAttribute(oNode,"value"))
{
applyMouseUpHandler(oNode);

if(isNodeSelected(oNode))
{
me.selectedNode=oNode;
}

_templateMenuOptions.add(oNode);
}
});

if(!me.selectedNode&&_templateMenuOptions.length>0)
{
me.selectedNode=_templateMenuOptions[0];
}
}
else
{
if(!me.selectedNode&&me.menuElement.childNodes.length>0)
{
me.selectedNode=me.menuElement.childNodes[0];
}
}

if(!me.isTemplateMenu)
{
if(me.chrome.menuStyle)
{
me.menuElement.style.cssText=me.chrome.menuStyle;
}
else
{
me.menuElement.style.backgroundColor="white";
me.menuElement.style.border="1px black solid";
me.menuElement.style.padding="2px";
}
}

me.menuElement.style.position="absolute";
me.menuElement.style.width="1px";
me.menuElement.style.height="1px";
me.menuElement.style.zIndex=100100;
me.menuElement.style.display="none";
me.menuElement.unselectable="on";

vp.ui.setStyleValue(me.menuElement,"cursor","pointer");


vp.ui.makeUnselectable(me.menuElement);


vp.events.add(me.element,"mousedown",mouseDownHandler);

_oMenuParent.document.body.appendChild(me.menuElement);

var sFieldName=me.element.getAttribute("name")||me.element.id;

if(me.isFormField&&sFieldName)
{
me.internalHiddenField=document.createElement("INPUT");
me.internalHiddenField.type="hidden";
me.internalHiddenField.name=sFieldName;

me.element.parentNode.insertBefore(me.internalHiddenField,me.element);
}

me.outerTable=document.createElement("TABLE");
me.outerTable.style.borderCollapse="collapse";
me.outerTable.style.padding=0;
me.outerTable.style.width="100%";
var oMainRow=me.outerTable.insertRow(-1);

var oLeftCol=oMainRow.insertCell(-1);
oLeftCol.style.padding=0;
_oLeftImg=document.createElement("IMG");
_oLeftImg.width=me.chrome.leftImageWidth;
_oLeftImg.src=me.chrome.leftImage;
oLeftCol.appendChild(_oLeftImg);

_oMiddleCol=oMainRow.insertCell(-1);
_oMiddleCol.vAlign="middle";
_oMiddleCol.style.padding=0;
_oMiddleCol.width="99%";

if(me.chrome&&me.chrome.middleImage)
{
_oMiddleCol.style.backgroundImage="url("+me.chrome.middleImage+")";
}

var oRightCol=oMainRow.insertCell(-1);
oRightCol.style.padding=0;
oRightCol.style.verticalAlign="bottom";

if(me.chrome.rightImage)
{
_oRightImg=document.createElement("IMG");
_oRightImg.src=me.chrome.rightImage;
_oRightImg.width=me.chrome.rightImageWidth;
oRightCol.appendChild(_oRightImg);
}
else
{
oRightCol.innerHTML="&nbsp;";
}

me.element.appendChild(me.outerTable);

me.textElement=document.createElement("DIV");
me.textElement.style.overflow="hidden";
me.textElement.style.whiteSpace="nowrap";

var iElementWidth=me.element.offsetWidth>0?me.element.offsetWidth:parseInt(vp.ui.getCurrentStyle(me.element,"width"));

me.textElement.style.width=iElementWidth-(me.chrome.leftImageWidth+me.chrome.rightImageWidth)+"px";
me.textElement.style.height=(me.chrome.contentAreaHeight)+"px";

_oMiddleCol.appendChild(me.textElement);


if(me.selectedNode)
{
selectItem(me.selectedNode);
}

vp.ui.makeUnselectable(me.element);



setupEvenHandler("onchange");
setupEvenHandler("onbeforechange");
setupEvenHandler("onstatechange");
setupEvenHandler("onshowmenu");
setupEvenHandler("onhidemenu");
};

var isNodeSelected=function $vpfn_C39o$e0LSPBdjRjG9G67lg315$25(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_sInitialValue&&_sInitialValue==vp.core.getAttribute(oNode,"value"))
{
return true;
}

if(vp.core.getBoolean(vp.core.getAttribute(oNode,"selected")))
{
return true;
}

return false;
};

var setupEvenHandler=function $vpfn_bqLIVM4hHfYwb1h0sZWWhw330$27(sEventName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sFunc=vp.core.getAttribute(me.element,"menu"+sEventName);
if(sFunc)
{
me[sEventName].addHandler(new Function("event",sFunc));
}
};

var _bMenuInitialized=false;

var initMenu=function $vpfn_tYVSqSBueV_tdy8uOeRf1Q341$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_bMenuInitialized)
{
return;
}

if(me.hideOnMouseOut===null)
{
me.hideOnMouseOut=_oInitialAttributes.hideOnMouseOut;
}

if(me.menuWidth===0)
{
me.menuWidth=_oInitialAttributes.menuWidth;

if(me.menuWidth===0)
{
me.menuWidth=me.element.offsetWidth;
}
}

if(me.menuHeight===0)
{
me.menuHeight=_oInitialAttributes.menuHeight;
}

if(me.menuPadding==-1)
{
if(_oInitialAttributes.menuPadding)
{
me.menuPadding=_oInitialAttributes.menuPadding;
}

if(me.menuPadding==-1)
{
me.menuPadding=2;
}
}

if(!me.orientation)
{
me.orientation=_oInitialAttributes.orientation;

if(!me.orientation)
{
me.orientation="down";
}

me.orientation=me.orientation.toLowerCase();
}

if(me.isFormField===null)
{
me.isFormField=_oInitialAttributes.isFormField;

if(me.isFormField===null)
{
me.isFormField=false;
}
}

_bMenuInitialized=true;
};

var applyMouseUpHandler=function $vpfn_nBmrorAELScnySFkFrNRew406$30(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var fnMouseUpHandler=function $vpfn_5$DutcfwB4CY8PNxpQ9MnA408$31(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if($(oNode).hasClass("disabled"))
{
return;
}
vp.events.cancel(e);

e.currentValue=me.getValue();
e.newValue=vp.core.getAttribute(oNode,"value");

if(me.onbeforechange.fire(e))
{
e.currentValue=null;
selectItem(oNode);
me.onchange.fire(e);
}
me.hide();
};

vp.events.add(oNode,"mouseup",fnMouseUpHandler);
};

this.insertOption=function $vpfn_GGqpPdeUYuiZBtl7MfuEUQ431$24(sLabelHTML,sValue,bSelected,iPosition,sOnClick)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
initMenu();

var oNode=_oMenuParent.document.createElement("DIV");
oNode.innerHTML=sLabelHTML;

oNode.style.padding=me.menuPadding+"px 0";
oNode.setAttribute("value",sValue);
oNode.setAttribute("selected",bSelected?"true":"false");
oNode.setAttribute("unselectable","on");
if(sOnClick)
{
oNode.setAttribute("onclick",sOnClick);
}
oNode.style.cssFloat="left";
oNode.style.styleFloat="left";

if(iPosition<=0||me.menuElement.childNodes.length<=iPosition)
{
me.menuElement.appendChild(oNode);
}
else
{
me.menuElement.insertBefore(oNode,me.menuElement.childNodes[iPosition]);
}

if(bSelected)
{
me.selectedNode=oNode;
}

applyMouseUpHandler(oNode);

var fnMouseOverHandler=function $vpfn_mzWnvLdJAeegzh589usKFg465$33()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(this.style.backgroundColor==="")
{


this.style.backgroundColor="rgb(221,221,221)";
}
}
.getClosure(oNode);

var fnMouseOutHandler=function $vpfn_mzWnvLdJAeegzh589usKFg476$32()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(this.style.backgroundColor.replace(/ /g,'')==="rgb(221,221,221)")
{

this.style.backgroundColor="";
}
}
.getClosure(oNode);

vp.events.add(oNode,"mouseover",fnMouseOverHandler);
vp.events.add(oNode,"mouseout",fnMouseOutHandler);
vp.events.add(oNode,"mousedown",vp.events.cancel);
vp.ui.setStyleValue(oNode,"cursor","pointer");
oNode.style.width="100%";

vp.ui.makeUnselectable(oNode);
};

this.addOption=function $vpfn_mB$Y2qWrVSYNgC2w3jUSkQ495$21(sLabelHTML,sValue,bSelected,sOnClick)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.insertOption(sLabelHTML,sValue,bSelected,-1,sOnClick);
};

this.removeAllOptions=function $vpfn_5JkH$1tic4QfRpGaINVdVQ500$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
initMenu();

me.menuElement.innerHTML="";
me.selectedNode=null;
};

var selectItem=function $vpfn_h1XfAZaBkSwKFXcwiPHR2g508$21(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.selectedNode!=oNode)
{
if(me.selectedNode)
{
me.selectedNode.setAttribute("selected",false);
}
if(oNode)
{
oNode.setAttribute("selected",true);
}
me.selectedNode=oNode;
}

var sValue=me.selectedNode?me.selectedNode.getAttribute("value"):"";
var sLabel=me.selectedNode?me.selectedNode.innerHTML:"&nbsp;";

me.textElement.innerHTML=me.transformSelectedItemHTML(sLabel,sValue);

if(me.internalHiddenField)
{
me.internalHiddenField.value=sValue;
}
};

this.transformSelectedItemHTML=function $vpfn_3_ivhVqFEQA5uoNt6UonWg534$37(sLabelHTML,sValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return sLabelHTML;
};

var _bIsShowing=false;

var mouseDownHandler=function $vpfn_51vTOBZneiCrENwiVDa8Sw541$27(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);
vp.events.cancelEvent(e);

if(_bIsShowing)
{
me.hide();
}
else
{
me.show(e);
}
};

this._getMenuPosition=function $vpfn_s8UTl_RXFSdH5m3pSRRU$g556$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.ui.getRect(me.element);
};

this.show=function $vpfn_CcCjqrNgGjvZ6Vo5Gk1wXA561$16(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
initMenu();

if(!_bEnabled)
{
return;
}

var oRect=me._getMenuPosition();

me.menuElement.style.display="block";
me.menuElement.style.visibility="hidden";
me.menuElement.style.position="absolute";
me.menuElement.style.height="auto";

var iMenuWidth=me.menuWidth;


if(!vp.ui.isQuirksMode())
{
var iHorizontalPadding=parseInt(me.menuElement.style.paddingLeft)+parseInt(me.menuElement.style.paddingRight);
var iHorizontalBorder=parseInt(me.menuElement.style.borderLeftWidth)+parseInt(me.menuElement.style.borderRightWidth);
var iHack=(iHorizontalPadding+iHorizontalBorder);
if(!isNaN(iHack))
{
iMenuWidth-=iHack;
}
}

me.menuElement.style.width=iMenuWidth+"px";

oRect.left+=me.chrome&&me.chrome.menuOffset?me.chrome.menuOffset:0;

if(me.orientation=="up")
{
oRect.top-=me.menuHeight?me.menuHeight:me.menuElement.offsetHeight;
}
else if(me.orientation=="rightauto"||me.orientation=="leftauto")
{
var PADDING=5;
var oViewPortSize=vp.ui.getViewportSize();
var oViewPortOffset=vp.ui.getScrollOffset();

var iBottomOverlap=(oRect.top+me.menuElement.offsetHeight)-(oViewPortOffset.top+(oViewPortSize.height-PADDING));
if(iBottomOverlap>0)
{
oRect.top-=iBottomOverlap;
}

if(oRect.top<oViewPortOffset.top+PADDING)
{
oRect.top=oViewPortOffset.top+PADDING;
}

if(me.orientation=="rightauto")
{
oRect.left+=oRect.width;
}
else
{
oRect.left-=me.menuElement.offsetWidth;
}
}
else
{
oRect.top+=oRect.height;
}

vp.ui.setPositionGlobal(me.menuElement,oRect);

if(me.menuHeight!==0)
{
if(me.menuElement.offsetHeight>=me.menuHeight)
{
me.menuElement.style.height=me.menuHeight+"px";
me.menuElement.style.overflowY="scroll";
}
else
{
me.menuElement.style.height="auto";
me.menuElement.style.overflowY="";
}
}

me.menuElement.style.overflowX="hidden";

if(_oRightImg)
{
_oRightImg.src=me.chrome.rightImageClicked;
}

vp.events.add(vp.ui.getRootElement(),"mousedown",me.hide);

if(me.hideOnMouseOut)
{
vp.events.add(me.menuElement,"mouseout",_hideWithDelay);
vp.events.add(me.menuElement,"mouseover",_cancelHideWithDelay);

vp.events.add(me.element,"mouseout",_hideWithDelay);
vp.events.add(me.element,"mouseover",_cancelHideWithDelay);
}

_bIsShowing=true;

me.menuElement.style.visibility="visible";

me.onshowmenu.fire(e);
};

this.hideOnMouseOut=null;

var _timer;

var _hideWithDelay=function $vpfn_TvQVQTZV0m8UVurhdVO6nA675$25(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
window.clearTimeout(_timer);
_timer=window.setTimeout(me.hide,300);
};

var _cancelHideWithDelay=function $vpfn_aoNkudaezrGmrFZjPE4kkQ681$31(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
window.clearTimeout(_timer);
};

this.hide=function $vpfn_VG1zJWAet4oSeY0suyfDNA686$16(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(e)
{
e=vp.events.getEvent(e);

vp.events.cancelEvent(e);


if(e.target==me.element||(e.target&&vp.ui.isChildOf(e.target,me.element)))
{
return;
}


if(e.target==me.menuElement||(e.target&&vp.ui.isChildOf(e.target,me.menuElement)))
{
return;
}
}

if(_oRightImg)
{
_oRightImg.src=me.chrome.rightImage;
}

_bIsShowing=false;
me.menuElement.style.display="none";
vp.events.remove(vp.ui.getRootElement(),"mousedown",me.hide);

me.onhidemenu.fire(e);
};

this.getValue=function $vpfn_x6BiyNBzzLGNHawENwvwSQ719$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me.selectedNode?vp.core.getAttribute(me.selectedNode,"value"):null;
};

this.setValue=function $vpfn_1PvTys$lmhDCvXBPyIQm4Q724$20(sValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sValue===null||sValue==="")
{
selectItem(null);
return true;
}
else
{
var element=$(me.menuElement).find('[value="'+sValue+'"]')[0];
if(element)
{
selectItem(element);
return true;
}
}

return false;
};

this.disableValue=function $vpfn_JXzULNxaO8mi8gEQbKp3mQ744$24(sValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sValue)
{
var element=$(me.menuElement).find('[value="'+sValue+'"]')[0];
if(element)
{
$(element).addClass("disabled");
}
}
};

this.enableValue=function $vpfn__qbJ01dq5UflaO9WxwN58A756$23(sValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(sValue)
{
var element=$(me.menuElement).find('[value="'+sValue+'"]')[0];
if(element)
{
$(element).removeClass("disabled");
}
}
};

this.getAllValues=function $vpfn_nkSWHbhqI292YFU6yqdSnA768$24()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aOut=[];
var iLen=me.menuElement.childNodes.length;
for(var i=0;i<iLen;i++)
{
aOut.add(vp.core.getAttribute(me.menuElement.childNodes[i],"value"));
}
return aOut;
};

this.setEnabled=function $vpfn_eGY7vRAgjJSZOT59SPzt3Q779$22(bEnabled)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(bEnabled==_bEnabled)
{
return;
}

_bEnabled=bEnabled;

vp.ui.setStyleValue(me.element,"cursor",bEnabled?"pointer":"default");

if(!bEnabled)
{
me.hide();

if(_oLeftImg&&me.chrome.leftImageDisabled)
{
_oLeftImg.src=me.chrome.leftImageDisabled;
}
if(me.chrome.middleImageDisabled)
{
_oMiddleCol.style.backgroundImage="url("+me.chrome.middleImageDisabled+")";
}
if(_oRightImg&&me.chrome.rightImageDisabled)
{
_oRightImg.src=me.chrome.rightImageDisabled;
}

me.textElement.innerHTML="&nbsp;";
}
else
{
if(_oLeftImg&&me.chrome.leftImage)
{
_oLeftImg.src=me.chrome.leftImage;
}
if(me.chrome.middleImage)
{
_oMiddleCol.style.backgroundImage="url("+me.chrome.middleImage+")";
}
if(_oRightImg&&me.chrome.rightImage)
{
_oRightImg.src=me.chrome.rightImage;
}

me.textElement.innerHTML="&nbsp;";

selectItem(me.selectedNode);
}

var e={};
e.enabled=_bEnabled;

me.onstatechange.fire(e);
};

this.isEnabled=function $vpfn_bI1JY$rcTqYEbEy_svNFgw835$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return _bEnabled;
};

init();
};






vp.widget.RichMenu.getMenu=function $vpfn_rNb3wm6DMin$ZXhFd6AgNQ848$29(oElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return vp.core.getObjectReference(oElement,"_menu");
};






vp.widget.RichMenu.initializeById=function $vpfn_vB_NouiRv7rfP5j$TuQPRQ858$36(sElementId)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oElem=document.getElementById(sElementId);
return new vp.widget.RichMenu(oElem);
};


vp.widget.RichMenu.chrome={};

vp.widget.RichMenu.chrome.menuOffset=0;
vp.widget.RichMenu.chrome.menuStyle="border:1px #495F81 solid; background-color:white; padding:2px; text-align:left;";
vp.widget.RichMenu.chrome.contentAreaHeight=18;
vp.widget.RichMenu.chrome.leftImage=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/left.gif");
vp.widget.RichMenu.chrome.leftImageWidth=2;
vp.widget.RichMenu.chrome.middleImage=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/middle.gif");
vp.widget.RichMenu.chrome.rightImage=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/right.gif");
vp.widget.RichMenu.chrome.rightImageWidth=17;
vp.widget.RichMenu.chrome.leftImageDisabled=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/left_disabled.gif");
vp.widget.RichMenu.chrome.middleImageDisabled=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/middle_disabled.gif");
vp.widget.RichMenu.chrome.rightImageDisabled=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/right_disabled.gif");
vp.widget.RichMenu.chrome.rightImageClicked=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/right_clicked.gif");


vp.widget.RichMenu.neutralChrome={};
vp.widget.RichMenu.neutralChrome.menuOffset=0;
vp.widget.RichMenu.neutralChrome.menuStyle="border:1px #495F81 solid; background-color:white; padding:2px; text-align:left;";
vp.widget.RichMenu.neutralChrome.contentAreaHeight=18;
vp.widget.RichMenu.neutralChrome.leftImage=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/left.gif");
vp.widget.RichMenu.neutralChrome.leftImageWidth=2;
vp.widget.RichMenu.neutralChrome.middleImage=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/middle.gif");
vp.widget.RichMenu.neutralChrome.rightImage=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/right.gif");
vp.widget.RichMenu.neutralChrome.rightImageWidth=17;
vp.widget.RichMenu.neutralChrome.leftImageDisabled=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/left_disabled.gif");
vp.widget.RichMenu.neutralChrome.middleImageDisabled=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/middle_disabled.gif");
vp.widget.RichMenu.neutralChrome.rightImageDisabled=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/right_disabled.gif");
vp.widget.RichMenu.neutralChrome.rightImageClicked=vp.ui.imageUrl("/vp/images/nns/common/richmenu/default/right_clicked.gif");


if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;

}



if(typeof(vp)=="undefined")
{
var vp={};
}

if(!vp.color)
{




vp.color=function(){};
}





vp.color.IColorData=function $vpfn_I7aoFMGzARYbnkjXFHT5JQ25$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




this.toString=function(){};





this.toPreview=function(){};
};




vp.color.SUBSTRATE_HEX_VALUE="#020202";




vp.color.SUBSTRATE_NAMED_VALUE="-1,1:2,2,2";






vp.color.IColorData.fromString=function $vpfn_J8nTDwkWX$EMO2G6rMEFYg55$33(sColorData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sourceValues=sColorData.split(",");
if(sourceValues.length===4)
{

return new vp.color._CmykColor(
parseInt(sourceValues[0],10),
parseInt(sourceValues[1],10),
parseInt(sourceValues[2],10),
parseInt(sourceValues[3],10)
);
}
else if(sourceValues.length===3)
{

return new vp.color._RgbColor(
parseInt(sourceValues[0],10),
parseInt(sourceValues[1],10),
parseInt(sourceValues[2],10)
);
}
else if(sourceValues.length===2)
{

return new vp.color._NamedColor(
parseInt(sourceValues[0],10),
parseInt(sourceValues[1],10)
);
}
else
{
throw new Error("vp.color.IColorData: bad source color");
}
};










vp.color._RgbColor=function $vpfn_GeA8I8dRzz8Ct678epFerQ100$21(r,g,b)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

this.red=r||0;
this.green=g||0;
this.blue=b||0;





this.toString=function $vpfn_PM5RLlE9ICkaVL57ZmzYiQ112$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aComponents=[me.red,me.green,me.blue];
return aComponents.join(',');
};





this.toPreview=function $vpfn_dIkMNoX9dEiRwD_QkIBWww122$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return new vp.color._RgbColor(me.red,me.green,me.blue);
};
};











vp.color._CmykColor=function $vpfn_6Eg66ZyFMZvBIbZ$azJptw138$22(c,m,y,k)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;

this.cyan=c||0;
this.magenta=m||0;
this.yellow=y||0;
this.black=k||0;





this.toString=function $vpfn_PM5RLlE9ICkaVL57ZmzYiQ151$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aComponents=[me.cyan,me.magenta,me.yellow,me.black];
return aComponents.join(',');
};





this.toPreview=function $vpfn_dIkMNoX9dEiRwD_QkIBWww161$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var cc=me.cyan*0.01;
var mm=me.magenta*0.01;
var yy=me.yellow*0.01;
var kk=me.black*0.01;

var rr=1-((cc*(1-kk))+kk);
var gg=1-((mm*(1-kk))+kk);
var bb=1-((yy*(1-kk))+kk);

return new vp.color._RgbColor(
Math.round(rr*255),
Math.round(gg*255),
Math.round(bb*255)
);
};
};









vp.color._NamedColor=function $vpfn_TVui2pF_KB5NOIjAPth1vw188$23(id,type)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;
this.id=id;
this.type=type;





this.toString=function $vpfn_PM5RLlE9ICkaVL57ZmzYiQ198$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me.id+","+me.type;
};





this.toPreview=function $vpfn_dIkMNoX9dEiRwD_QkIBWww207$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
throw new Error("Can't convert named color to RGB");
};

};












vp.color._getColorData=function $vpfn_G7hkwERzCcu3W7OJztPbvg225$25(args)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oColor={
_source:null,
_preview:null
};


if(args.length===1&&typeof(args[0])=="object")
{

if(args[0]._source)
{
oColor._source=vp.color.IColorData.fromString(args[0]._source.toString());
}
oColor._preview=vp.color.IColorData.fromString(args[0]._preview.toString());
}

else if(args.length===3&&typeof(args[0])=="number")
{
oColor._source=new vp.color._RgbColor(args[0],args[1],args[2]);
oColor._preview=oColor._source.toPreview();
}

else if(args.length===4&&typeof(args[0])=="number")
{
oColor._source=new vp.color._CmykColor(args[0],args[1],args[2],args[3]);
oColor._preview=oColor._source.toPreview();
}

else if(args.length===1&&typeof(args[0])=="string")
{
if(args[0].indexOf("rgb(")===0)
{

var regx=/rgb\((\d+),(\d+),(\d+)\)/i;
var rgbString=args[0].replace(/\s/g,"");
var rgbValues=regx.exec(rgbString);



oColor._source=null;
oColor._preview=new vp.color._RgbColor(
rgbValues[1],
rgbValues[2],
rgbValues[3]
);
}
else if(args[0].indexOf(",")>=0)
{

var sColors=args[0].split(':');
if(sColors.length!=2)
{


sColors=args[0].split('-');
}


oColor._source=vp.color.IColorData.fromString(sColors[0]);


oColor._preview=vp.color.IColorData.fromString(sColors[1]);
}
else
{

var sHex=args[0];
if(sHex.indexOf("#")===0)
{
sHex=sHex.substr(1);
}

oColor._source=null;
oColor._preview=new vp.color._RgbColor(
parseInt(sHex.substr(0,2),16),
parseInt(sHex.substr(2,2),16),
parseInt(sHex.substr(4,2),16)
);
}
}
else

{
oColor._source=null;
oColor._preview=new vp.color._RgbColor(0,0,0);
}

return oColor;
};








vp.color.Color=function $vpfn_fAg2XpUhqP7A8L$ZhkS1OA325$17(vColor)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;
var oColor=vp.color._getColorData(arguments);






this._source=oColor._source;






this._preview=oColor._preview;





this.toHex=function $vpfn_SVuXCf3m81j9uYTyZPz5qA348$17()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var fnIntToHex=function $vpfn_WUyFeoan7FKO5iNxfeb46A351$25(iVal)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(iVal===0)
{
return"00";
}
return"0123456789ABCDEF".charAt((iVal-iVal%16)/16)+"0123456789ABCDEF".charAt(iVal%16);
};

return"#"+fnIntToHex(me._preview.red)+fnIntToHex(me._preview.green)+fnIntToHex(me._preview.blue);
};





this.toDOMString=function $vpfn_AM3yE8tAmY0GmrVV2AFYOw367$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return"rgb("+me._preview.red+", "+me._preview.green+", "+me._preview.blue+")";
};





this.getBrightness=function $vpfn_uERD2DuFcPyvwwmO9Rmsfg376$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return Math.round((0.299*me._preview.red)+(0.587*me._preview.green)+(0.114*me._preview.blue));
};





this.getSourceColorData=function $vpfn_v$Rphe$e$_Kf_k2en_YIPg385$30()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me._source;
};





this.toPreviewRgbString=function $vpfn_WV2tIaJTNJMmNYlKowvC0A394$30()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me._preview.toString();
};





this.toString=function $vpfn_PM5RLlE9ICkaVL57ZmzYiQ403$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me._source)
{

return me._source.toString()+':'+me._preview.toString();
}
else
{

return me.toHex();
}
};





this.equals=function $vpfn_bmTBtD9actminddlBw7nVg421$18(oColor)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oColor)
{

return me.toString()==oColor.toString();
}
return false;
};
};






vp.color.validateHex=function $vpfn_0giw7p4chOAvCJJ_l3ID$A437$23(sColor)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oRegEx=/^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/gi;
return oRegEx.test(sColor);
};





vp.color.getColor=function $vpfn_Jg0nuBuA_KaS03Syz6lZoA447$20(vColor)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return new vp.color.Color(vColor);
};

if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}








if(typeof vp=="undefined")
{
var vp={};
}




if(typeof vp.image=="undefined")
{
vp.image=function(){};
}






vp.image.Image=function $vpfn__ZiQe$C9TRfBWEblU1$8xA28$17(type,id){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}





var me=this;






this.type=(typeof type=="undefined"?vp.image.Type.Upload:parseInt(type,10));




this.id=(id?parseInt(id,10):vp.image.Image.InvalidId);





this.token=null;





this.fileId=null;







this.plantPrefix=null;





this.previewUrl=null;




this.languageId=1;







this.width=null;





this.height=null;





this.name=null;





this.dateCreated=null;





this.dateTaken=null;





this.canDelete=null;




this.isLogo=null;
this.isPhoto=null;
this.isStamp=null;
this.isFoil=null;
this.isEmbroidery=null;
this.isThermography=null;
this.thermographyColorCount=null;





this.equals=function $vpfn_5keGo5NDs0dKkBBPNV2FsA132$18(oImage){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oImage){

return me.id==oImage.id&&
me.type==oImage.type;

}
return false;
};
};





vp.image.Type={
Library:0,
Upload:1,
Logo:2,
CustomerSiteUpload:7,
EmailMarketingUpload:8,
Document:11,
Caricature:12,
Partner:13
};




vp.image.Image.InvalidId=-1;






vp.image.EditedImage=function $vpfn_52tJdkp7MubDg3uqNlo2wg168$23(type,id)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}



var me=this;





this.inheritFrom=vp.image.Image;
this.inheritFrom(type,id);





this.rotation=vp.image.EditedImage.Rotation.None;





this.cropInfo={};
this.cropInfo.left=0;
this.cropInfo.right=0;
this.cropInfo.top=0;
this.cropInfo.bottom=0;




this.isCropped=function $vpfn_6KDq8m27rqcCNaaAfohceQ201$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return((me.cropInfo.left!==0)||
(me.cropInfo.right!==0)||
(me.cropInfo.top!==0)||
(me.cropInfo.bottom!==0));
};




this.serializeJSON=function $vpfn_h_QCk5mlEt0dAuWn6nYIPw212$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var json={};
json.id=this.id;
json.type=this.type;
json.token=this.token;
json.plantPrefix=this.plantPrefix;
json.cropInfo=this.cropInfo;
json.rotation=this.rotation;
return vp.http.serializeJSON(json);
};
};






vp.image.parseJSON=function $vpfn_C$rLJHIl4rwYMhG1nfan2g230$21(vData)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var json=typeof(vData)==="string"?vp.http.parseJSON(vData):vData;


var oImage=new vp.image.EditedImage(parseInt(json.type,10),parseInt(json.id,10));
if(json.token)
{
oImage.token=json.token;
}
if(json.fileId)
{
oImage.fileId=json.fileId;
}


oImage.plantPrefix=json.plantPrefix||"";
if(json.previewUrl)
{
oImage.previewUrl=json.previewUrl;
}



oImage.width=json.width;
oImage.height=json.height;
oImage.name=json.name;
oImage.dateCreated=json.dateCreated;
if(json.dateTaken)
{
oImage.dateTaken=json.dateTaken;
}
oImage.canDelete=json.canDelete;
oImage.isLogo=json.isLogo||false;
oImage.isStamp=json.isStamp||false;
oImage.isPhoto=json.isPhoto||false;
oImage.isFoil=json.isFoil||false;
oImage.isEmbroidery=json.isEmbroidery||false;
oImage.isThermography=json.isThermography||false;
oImage.thermographyColorCount=json.thermographyColorCount;


if(json.cropInfo)
{
oImage.cropInfo={};
oImage.cropInfo.left=parseFloat(json.cropInfo.left);
oImage.cropInfo.right=parseFloat(json.cropInfo.right);
oImage.cropInfo.top=parseFloat(json.cropInfo.top);
oImage.cropInfo.bottom=parseFloat(json.cropInfo.bottom);
}
if(json.rotation)
{
oImage.rotation=parseInt(json.rotation,10);
}

vp.image.imageDataStorage.addImage(oImage);

return oImage;
};




vp.image.EditedImage.Rotation={
None:0,
Rotation90:90,
Rotation180:180,
Rotation270:270
};






vp.image.StudioDocItemTypeToImageType=function $vpfn_kQUeeCwu$vG7qIWbUkmPhA306$40(eDocItemType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
switch(eDocItemType)
{
case DOCITEM_TYPE_LIBRARY_IMAGE:
case DOCITEM_TYPE_PLACEHOLDER:
return vp.image.Type.Library;
case DOCITEM_TYPE_UPLOADED_IMAGE:
return vp.image.Type.Upload;
case DOCITEM_TYPE_LOGO:
return vp.image.Type.Logo;
case DOCITEM_TYPE_CARICATURE:
return vp.image.Type.Caricature;
default:
throw"vp.image.StudioDocItemTypeToImageType: invalid document item type";
}
return null;
};







vp.image.ImageTypeToStudioDocItemType=function $vpfn_vs1ed2JMhVicEbr5D7yN5Q331$40(eImageType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
switch(eImageType)
{
case vp.image.Type.Library:
return DOCITEM_TYPE_LIBRARY_IMAGE;
case vp.image.Type.Upload:
return DOCITEM_TYPE_UPLOADED_IMAGE;
case vp.image.Type.Logo:
return DOCITEM_TYPE_LOGO;
case vp.image.Type.Caricature:
return DOCITEM_TYPE_CARICATURE;
default:
throw"vp.image.StudioDocItemTypeToImageType: invalid document item type";
}
return null;
};







vp.image.convertStudioImageToEditedImage=function $vpfn_uSiavSFuKa55JQ9QLgNRhw355$43(oDocItemImage,oEditor)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var imageType=vp.image.StudioDocItemTypeToImageType(oDocItemImage.type);


var image=new vp.image.EditedImage(imageType,oDocItemImage.getItemID());





image.cropInfo={};
vp.core.applyProperties(oDocItemImage.cropInfo,image.cropInfo);

image.container=oDocItemImage.imageContainer.parentNode;
image.externalId=oDocItemImage.id;
image.locked=oDocItemImage.locked;
image.rotation=oDocItemImage.coordinates.rotation.angleInDegrees;

return image;
};





vp.image.ImagePreview=function $vpfn_EajS1Kn$Ofc$TjLKrcwwXA382$24(image)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}



var me=this;




this.image=image;





this.previewSize={};
this.previewSize.width=0;
this.previewSize.height=0;






this.bestFit=true;






this.exactSize=false;




this.getPreviewUrl=function $vpfn_Agz3QIxWLYgcdNJJKN4nsw419$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sUrl=me.getPreviewUrlObject().toString();



if(me.image.type==vp.image.Type.Library)
{
sUrl=vp.ui.imageUrl(sUrl,true);
}

return sUrl;
};

this.getPreviewUrlObject=function $vpfn_RN7ssmm7no67wiJV3JLRkg433$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var bIsCropped=me.image.cropInfo&&me.image.isCropped();
var bIsRotated=me.image.rotation&&me.image.rotation!==vp.image.EditedImage.Rotation.None;
var bIsCustomized=bIsCropped||bIsRotated;
var bIsThumbnail=me.previewSize.width<=100&&me.previewSize.height<=100;

if(me.image.previewUrl&&bIsThumbnail&&!me.exactSize&&!bIsCustomized)
{



return new vp.web.URL(me.image.previewUrl);
}
else if(me.image.type==vp.image.Type.Caricature)
{

return getCaricaturePreviewUrl();
}
else if(me.image.type==vp.image.Type.CustomerSiteUpload)
{

return new vp.web.URL("/vp/util/image_preview.aspx?thumb=true&type=CustomerSiteUpload&image_id="+me.image.id);
}
else
{

return getImagePreviewUrl();
}
};




var getImagePreviewUrl=function $vpfn_D1hYhaP5cjvdYBGotZ5OnQ467$29()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var imageData=vp.image.imageDataStorage.getImageCached(me.image.id,me.image.type)||{};


var bRenderDistributed=!imageData.isEmbroidery;
var bLibrary=me.image.type==vp.image.Type.Library;
var sPrefix=bLibrary?'/any':(bRenderDistributed?imageData.plantPrefix||"":"");
var sPath=bLibrary?'/preview/image.caspx':'/preview/image.aspx';
var url=new vp.web.URL(sPrefix+sPath);









var imageType="invalid";
switch(me.image.type)
{
case vp.image.Type.Library:
imageType="image";
break;
case vp.image.Type.Upload:
imageType="upload";
break;
case vp.image.Type.Logo:
imageType="logo";
break;
default:

break;
}
url.setItem('image_type',imageType);


if(bRenderDistributed&&imageData.token)
{
url.setItem('image_token',imageData.token);
}
else
{
url.setItem('image_id',me.image.id);
}





if(me.previewSize.width>0&&me.previewSize.height>0)
{
if(me.bestFit)
{
url.setItem('maxwidth',me.previewSize.width);
url.setItem('maxheight',me.previewSize.height);
}
else
{
url.setItem('width',me.previewSize.width);
url.setItem('height',me.previewSize.height);
}
}
url.setItem('trim',1);


url.setItem('trypng',1);


switch(me.image.rotation)
{
case vp.image.EditedImage.Rotation.Rotation90:
case vp.image.EditedImage.Rotation.Rotation180:
case vp.image.EditedImage.Rotation.Rotation270:
url.setItem('rotation',me.image.rotation);
break;
case vp.image.EditedImage.Rotation.None:
default:
break;
}


if(me.image.cropInfo&&me.image.isCropped())
{
url.setItem('use_crop',1);
url.setItem('cropleft',me.image.cropInfo.left);
url.setItem('croptop',me.image.cropInfo.top);
url.setItem('cropright',me.image.cropInfo.right);
url.setItem('cropbottom',me.image.cropInfo.bottom);
}


if(vp.web.getQueryString("admin"))
{
url.setItem("admin",vp.web.getQueryString("admin"));
}

return url;
};

var getCaricaturePreviewUrl=function $vpfn_VFqUHhRm6NXw3WAPDg8Hwg569$34()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var url=new vp.web.URL('/vp/ns/caricatures/caricature_preview.aspx');


url.setItem('caricature_id',me.image.id);


url.setItem('width',me.previewSize.width);
url.setItem('height',me.previewSize.height);

return url;
};
};






vp.image.ImageInfo=function $vpfn_YoE830T1t2Ib8Lkpj9$uTw589$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}



var me=this;





var my={};






my.image=null;





my.callbackFnOK=null;





my.callbackFnError=null;






this.intrinsicWidth=null;





this.intrinsicHeight=null;





this.name=null;





this.loadImageInfo=function $vpfn_zyuv$cG85ATYz7TuHijW7A644$25(oImage,cbOK,cbError)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

this.intrinsicWidth=null;
this.intrinsicHeight=null;
this.name=null;

my.image=oImage;
my.callbackFnOK=cbOK;
my.callbackFnError=cbError;

var url=new vp.web.URL('/vp/ns/imageinfo.caspx');


url.setItem('image_id',my.image.id);



var imageType="invalid";
switch(my.image.type)
{
case vp.image.Type.Library:
imageType="image";
break;
case vp.image.Type.Upload:
imageType="upload";
break;
default:
throw"invalid image type";
break;
}
url.setItem('image_type',imageType);

try{
vp.http.getAsync(url,loadImageCallback);
}catch(oError){
my.callbackFnError();
}
};





var loadImageCallback=function $vpfn_0ZzxBEVA9jGAL0oE8_5K$A688$28(sResponse)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
try{
var oInfo=vp.http.parseJSON(sResponse);
if(oInfo.error)
{
my.callbackFnError();
}
else
{
me.intrinsicWidth=oInfo.intrinsicWidth;
me.intrinsicHeight=oInfo.intrinsicHeight;
me.name=oInfo.name;

my.callbackFnOK();
}
}catch(oError){
alert(oError);
my.callbackFnError();
}
};
};




vp.image.ImageDataStorage=function $vpfn_xqJZxyxGCsnUfVZRl9a5Ug714$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;
var _uploadList={};
var _libraryImageList={};


this.getImageCached=function $vpfn_GBNB_tDLCxsUIk7cXfN3Bg721$26(iImageId,eImageType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(iImageId>0&&eImageType===vp.image.Type.Upload)
{
return _uploadList[iImageId];
}
if(iImageId>0&&eImageType===vp.image.Type.Library)
{
return _libraryImageList[iImageId];
}
return null;
};


this.getImage=function $vpfn_7wd13hM_nQRzHalIM0wL_A735$20(iImageId,eImageType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(typeof(eImageType)=="undefined")
{
eImageType=vp.image.Type.Upload;
}

if(eImageType!=vp.image.Type.Upload&&eImageType!=vp.image.Type.Library)
{
return null;
}


var oImage=me.getImageCached(iImageId,eImageType);
if(oImage)
{
return oImage;
}


if(iImageId>0)
{
try
{

var vData=$.ajaxAsmx(
{
url:new vp.web.URL('/sales/images/imagedata.asmx?'),
methodName:"GetImageData",
data:{imageId:iImageId,imageType:eImageType},
async:false
});

var oData=vp.http.parseJSON(vData);
if(oData.id>0)
{
return vp.image.parseJSON(oData);
}
}
catch(ex){}
}


return null;
};


this.addImage=function $vpfn_O14dGcqauA4G6iGB9vwyKg783$20(oImage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oImage.id>0&&oImage.type===vp.image.Type.Upload)
{
_uploadList[oImage.id]=oImage;
}
else if(oImage.id>0&&oImage.type===vp.image.Type.Library)
{
_libraryImageList[oImage.id]=oImage;
}
};
};

vp.image.imageDataStorage=new vp.image.ImageDataStorage();
if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}








if(typeof vp=="undefined")
{
var vp={};
}




if(typeof vp.image=="undefined")
{
vp.image=function(){};
}











vp.image.getAutoPlacedImageCrop=function $vpfn_Zc_sxWc5RXGDxRXLAfPdFA33$34(originalImageSize,containerSize,oCropInfo)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!oCropInfo)
{
oCropInfo={top:0,left:0,right:0,bottom:0};
}





















var imageRect={top:0,left:0,width:originalImageSize.width,height:originalImageSize.height};




var imageCropRect=this.cropInfoToCropRect(oCropInfo,imageRect);


var containerRect={
left:imageCropRect.left-0.5*(containerSize.width-imageCropRect.width),
top:imageCropRect.top-0.5*(containerSize.height-imageCropRect.height),
width:containerSize.width,
height:containerSize.height};





var cropFitZoom=Math.min(containerSize.width/imageCropRect.width,
containerSize.height/imageCropRect.height);


var cropFitRect=this.zoomRect(imageCropRect,cropFitZoom);





var imageFitRect=this.cropInfoToCropContainer(oCropInfo,cropFitRect);




var containerFillRect=this.zoomRectToFillSpace(containerRect,imageFitRect);



return this.cropBoxesToCropInfo(containerFillRect,imageFitRect);
}.getClosure({



zoomRectToFillSpace:








function $vpfn_Zc_sxWc5RXGDxRXLAfPdFA111$8(innerRectToZoom,outerRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
innerRectToZoom.right=innerRectToZoom.left+innerRectToZoom.width;
innerRectToZoom.bottom=innerRectToZoom.top+innerRectToZoom.height;
outerRect.right=outerRect.left+outerRect.width;
outerRect.bottom=outerRect.top+outerRect.height;


var zoomLeft=innerRectToZoom.width*0.5/
(innerRectToZoom.width*0.5-Math.max(0,outerRect.left-innerRectToZoom.left));
var zoomTop=innerRectToZoom.height*0.5/
(innerRectToZoom.height*0.5-Math.max(0,outerRect.top-innerRectToZoom.top));
var zoomRight=innerRectToZoom.width*0.5/
(innerRectToZoom.width*0.5-Math.max(0,innerRectToZoom.right-outerRect.right));
var zoomBottom=innerRectToZoom.height*0.5/
(innerRectToZoom.height*0.5-Math.max(0,innerRectToZoom.bottom-outerRect.bottom));


var zoomRatio=Math.max(zoomBottom,Math.max(zoomLeft,Math.max(zoomRight,zoomTop)));



return this.zoomRect(innerRectToZoom,1.0/zoomRatio);
},
zoomRect:







function $vpfn_Zc_sxWc5RXGDxRXLAfPdFA143$8(rectToZoom,zoomRatio)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var zoomedRectHeight=zoomRatio*rectToZoom.height;
var zoomedRectWidth=zoomRatio*rectToZoom.width;
var zoomedRectX=rectToZoom.left-0.5*(zoomedRectWidth-rectToZoom.width);
var zoomedRectY=rectToZoom.top-0.5*(zoomedRectHeight-rectToZoom.height);

return{
top:zoomedRectY,
left:zoomedRectX,
width:zoomedRectWidth,
height:zoomedRectHeight
};
},
cropInfoToCropRect:







function $vpfn_Zc_sxWc5RXGDxRXLAfPdFA166$8(cropInfo,containerRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return{
left:containerRect.left+(containerRect.width*cropInfo.left),
top:containerRect.top+(containerRect.height*cropInfo.top),
width:containerRect.width*(1.0-(cropInfo.left+cropInfo.right)),
height:containerRect.height*(1.0-(cropInfo.top+cropInfo.bottom))
};
},
cropInfoToCropContainer:







function $vpfn_Zc_sxWc5RXGDxRXLAfPdFA183$8(cropInfo,cropRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var containerWidth=cropRect.width/(1.0-(cropInfo.left+cropInfo.right));
var containerHeight=cropRect.height/(1.0-(cropInfo.top+cropInfo.bottom));
return{
top:cropRect.top-(containerHeight*cropInfo.top),
left:cropRect.left-(containerWidth*cropInfo.left),
width:containerWidth,
height:containerHeight};
},
cropBoxesToCropInfo:







function $vpfn_Zc_sxWc5RXGDxRXLAfPdFA201$8(containerRect,cropRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
cropRect.right=cropRect.left+cropRect.width;
cropRect.bottom=cropRect.top+cropRect.height;
containerRect.right=containerRect.left+containerRect.width;
containerRect.bottom=containerRect.top+containerRect.height;

var newCrop=new vp.studio.CropInfo(
(containerRect.top-cropRect.top)/cropRect.height,
(containerRect.left-cropRect.left)/cropRect.width,
(cropRect.right-containerRect.right)/cropRect.width,
(cropRect.bottom-containerRect.bottom)/cropRect.height);
newCrop.top=Math.abs(newCrop.top)>0.001?newCrop.top:0;
newCrop.right=Math.abs(newCrop.right)>0.001?newCrop.right:0;
newCrop.bottom=Math.abs(newCrop.bottom)>0.001?newCrop.bottom:0;
newCrop.left=Math.abs(newCrop.left)>0.001?newCrop.left:0;

return newCrop;
}
});


/*!
 * jQuery UI 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */

(function($,undefined){




$.ui=$.ui||{};
if($.ui.version){
return;
}

$.extend($.ui,{
version:"1.8.21",

keyCode:{
ALT:18,
BACKSPACE:8,
CAPS_LOCK:20,
COMMA:188,
COMMAND:91,
COMMAND_LEFT:91,
COMMAND_RIGHT:93,
CONTROL:17,
DELETE:46,
DOWN:40,
END:35,
ENTER:13,
ESCAPE:27,
HOME:36,
INSERT:45,
LEFT:37,
MENU:93,
NUMPAD_ADD:107,
NUMPAD_DECIMAL:110,
NUMPAD_DIVIDE:111,
NUMPAD_ENTER:108,
NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,
PAGE_UP:33,
PERIOD:190,
RIGHT:39,
SHIFT:16,
SPACE:32,
TAB:9,
UP:38,
WINDOWS:91
}
});


$.fn.extend({
propAttr:$.fn.prop||$.fn.attr,

_focus:$.fn.focus,
focus:function(delay,fn){
return typeof delay==="number"?
this.each(function(){
var elem=this;
setTimeout(function(){
$(elem).focus();
if(fn){
fn.call(elem);
}
},delay);
}):
this._focus.apply(this,arguments);
},

scrollParent:function(){
var scrollParent;
if(($.browser.msie&&(/(static|relative)/).test(this.css('position')))||(/absolute/).test(this.css('position'))){
scrollParent=this.parents().filter(function(){
return(/(relative|absolute|fixed)/).test($.curCSS(this,'position',1))&&(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
}).eq(0);
}else{
scrollParent=this.parents().filter(function(){
return(/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
}).eq(0);
}

return(/fixed/).test(this.css('position'))||!scrollParent.length?$(document):scrollParent;
},

zIndex:function(zIndex){
if(zIndex!==undefined){
return this.css("zIndex",zIndex);
}

if(this.length){
var elem=$(this[0]),position,value;
while(elem.length&&elem[0]!==document){



position=elem.css("position");
if(position==="absolute"||position==="relative"||position==="fixed"){




value=parseInt(elem.css("zIndex"),10);
if(!isNaN(value)&&value!==0){
return value;
}
}
elem=elem.parent();
}
}

return 0;
},

disableSelection:function(){
return this.bind(($.support.selectstart?"selectstart":"mousedown")+
".ui-disableSelection",function(event){
event.preventDefault();
});
},

enableSelection:function(){
return this.unbind(".ui-disableSelection");
}
});

$.each(["Width","Height"],function(i,name){
var side=name==="Width"?["Left","Right"]:["Top","Bottom"],
type=name.toLowerCase(),
orig={
innerWidth:$.fn.innerWidth,
innerHeight:$.fn.innerHeight,
outerWidth:$.fn.outerWidth,
outerHeight:$.fn.outerHeight
};

function reduce(elem,size,border,margin){
$.each(side,function(){
size-=parseFloat($.curCSS(elem,"padding"+this,true))||0;
if(border){
size-=parseFloat($.curCSS(elem,"border"+this+"Width",true))||0;
}
if(margin){
size-=parseFloat($.curCSS(elem,"margin"+this,true))||0;
}
});
return size;
}

$.fn["inner"+name]=function(size){
if(size===undefined){
return orig["inner"+name].call(this);
}

return this.each(function(){
$(this).css(type,reduce(this,size)+"px");
});
};

$.fn["outer"+name]=function(size,margin){
if(typeof size!=="number"){
return orig["outer"+name].call(this,size);
}

return this.each(function(){
$(this).css(type,reduce(this,size,true,margin)+"px");
});
};
});


function focusable(element,isTabIndexNotNaN){
var nodeName=element.nodeName.toLowerCase();
if("area"===nodeName){
var map=element.parentNode,
mapName=map.name,
img;
if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){
return false;
}
img=$("img[usemap=#"+mapName+"]")[0];
return!!img&&visible(img);
}
return(/input|select|textarea|button|object/.test(nodeName)
?!element.disabled
:"a"==nodeName
?element.href||isTabIndexNotNaN
:isTabIndexNotNaN)

&&visible(element);
}

function visible(element){
return!$(element).parents().andSelf().filter(function(){
return $.curCSS(this,"visibility")==="hidden"||
$.expr.filters.hidden(this);
}).length;
}

$.extend($.expr[":"],{
data:function(elem,i,match){
return!!$.data(elem,match[3]);
},

focusable:function(element){
return focusable(element,!isNaN($.attr(element,"tabindex")));
},

tabbable:function(element){
var tabIndex=$.attr(element,"tabindex"),
isTabIndexNaN=isNaN(tabIndex);
return(isTabIndexNaN||tabIndex>=0)&&focusable(element,!isTabIndexNaN);
}
});


$(function(){
var body=document.body,
div=body.appendChild(div=document.createElement("div"));




div.offsetHeight;

$.extend(div.style,{
minHeight:"100px",
height:"auto",
padding:0,
borderWidth:0
});

$.support.minHeight=div.offsetHeight===100;
$.support.selectstart="onselectstart"in div;



body.removeChild(div).style.display="none";
});






$.extend($.ui,{

plugin:{
add:function(module,option,set){
var proto=$.ui[module].prototype;
for(var i in set){
proto.plugins[i]=proto.plugins[i]||[];
proto.plugins[i].push([option,set[i]]);
}
},
call:function(instance,name,args){
var set=instance.plugins[name];
if(!set||!instance.element[0].parentNode){
return;
}

for(var i=0;i<set.length;i++){
if(instance.options[set[i][0]]){
set[i][1].apply(instance.element,args);
}
}
}
},


contains:function(a,b){
return document.compareDocumentPosition?
a.compareDocumentPosition(b)&16:
a!==b&&a.contains(b);
},


hasScroll:function(el,a){


if($(el).css("overflow")==="hidden"){
return false;
}

var scroll=(a&&a==="left")?"scrollLeft":"scrollTop",
has=false;

if(el[scroll]>0){
return true;
}




el[scroll]=1;
has=(el[scroll]>0);
el[scroll]=0;
return has;
},


isOverAxis:function(x,reference,size){

return(x>reference)&&(x<(reference+size));
},
isOver:function(y,x,top,left,height,width){

return $.ui.isOverAxis(y,top,height)&&$.ui.isOverAxis(x,left,width);
}
});

})(jQuery);/*!
 * jQuery UI Widget 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */

(function($,undefined){


if($.cleanData){
var _cleanData=$.cleanData;
$.cleanData=function(elems){
for(var i=0,elem;(elem=elems[i])!=null;i++){
try{
$(elem).triggerHandler("remove");

}catch(e){}
}
_cleanData(elems);
};
}else{
var _remove=$.fn.remove;
$.fn.remove=function(selector,keepData){
return this.each(function(){
if(!keepData){
if(!selector||$.filter(selector,[this]).length){
$("*",this).add([this]).each(function(){
try{
$(this).triggerHandler("remove");

}catch(e){}
});
}
}
return _remove.call($(this),selector,keepData);
});
};
}

$.widget=function(name,base,prototype){
var namespace=name.split(".")[0],
fullName;
name=name.split(".")[1];
fullName=namespace+"-"+name;

if(!prototype){
prototype=base;
base=$.Widget;
}


$.expr[":"][fullName]=function(elem){
return!!$.data(elem,name);
};

$[namespace]=$[namespace]||{};
$[namespace][name]=function(options,element){

if(arguments.length){
this._createWidget(options,element);
}
};

var basePrototype=new base();








basePrototype.options=$.extend(true,{},basePrototype.options);
$[namespace][name].prototype=$.extend(true,basePrototype,{
namespace:namespace,
widgetName:name,
widgetEventPrefix:$[namespace][name].prototype.widgetEventPrefix||name,
widgetBaseClass:fullName
},prototype);

$.widget.bridge(name,$[namespace][name]);
};

$.widget.bridge=function(name,object){
$.fn[name]=function(options){
var isMethodCall=typeof options==="string",
args=Array.prototype.slice.call(arguments,1),
returnValue=this;


options=!isMethodCall&&args.length?
$.extend.apply(null,[true,options].concat(args)):
options;


if(isMethodCall&&options.charAt(0)==="_"){
return returnValue;
}

if(isMethodCall){
this.each(function(){
var instance=$.data(this,name),
methodValue=instance&&$.isFunction(instance[options])?
instance[options].apply(instance,args):
instance;









if(methodValue!==instance&&methodValue!==undefined){
returnValue=methodValue;
return false;
}
});
}else{
this.each(function(){
var instance=$.data(this,name);
if(instance){
instance.option(options||{})._init();
}else{
$.data(this,name,new object(options,this));
}
});
}

return returnValue;
};
};

$.Widget=function(options,element){

if(arguments.length){
this._createWidget(options,element);
}
};

$.Widget.prototype={
widgetName:"widget",
widgetEventPrefix:"",
options:{
disabled:false
},
_createWidget:function(options,element){


$.data(element,this.widgetName,this);
this.element=$(element);
this.options=$.extend(true,{},
this.options,
this._getCreateOptions(),
options);

var self=this;
this.element.bind("remove."+this.widgetName,function(){
self.destroy();
});

this._create();
this._trigger("create");
this._init();
},
_getCreateOptions:function(){
return $.metadata&&$.metadata.get(this.element[0])[this.widgetName];
},
_create:function(){},
_init:function(){},

destroy:function(){
this.element
.unbind("."+this.widgetName)
.removeData(this.widgetName);
this.widget()
.unbind("."+this.widgetName)
.removeAttr("aria-disabled")
.removeClass(
this.widgetBaseClass+"-disabled "+
"ui-state-disabled");
},

widget:function(){
return this.element;
},

option:function(key,value){
var options=key;

if(arguments.length===0){

return $.extend({},this.options);
}

if(typeof key==="string"){
if(value===undefined){
return this.options[key];
}
options={};
options[key]=value;
}

this._setOptions(options);

return this;
},
_setOptions:function(options){
var self=this;
$.each(options,function(key,value){
self._setOption(key,value);
});

return this;
},
_setOption:function(key,value){
this.options[key]=value;

if(key==="disabled"){
this.widget()
[value?"addClass":"removeClass"](
this.widgetBaseClass+"-disabled"+" "+
"ui-state-disabled")
.attr("aria-disabled",value);
}

return this;
},

enable:function(){
return this._setOption("disabled",false);
},
disable:function(){
return this._setOption("disabled",true);
},

_trigger:function(type,event,data){
var prop,orig,
callback=this.options[type];

data=data||{};
event=$.Event(event);
event.type=(type===this.widgetEventPrefix?
type:
this.widgetEventPrefix+type).toLowerCase();


event.target=this.element[0];


orig=event.originalEvent;
if(orig){
for(prop in orig){
if(!(prop in event)){
event[prop]=orig[prop];
}
}
}

this.element.trigger(event,data);

return!($.isFunction(callback)&&
callback.call(this.element[0],event,data)===false||
event.isDefaultPrevented());
}
};

})(jQuery);/*!
 * jQuery UI Mouse 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 * jquery.ui.widget.js
 */

(function($,undefined){

var mouseHandled=false;
$(document).mouseup(function(e){
mouseHandled=false;
});

$.widget("ui.mouse",{
options:{
cancel:':input,option',
distance:1,
delay:0
},
_mouseInit:function(){
var self=this;

this.element
.bind('mousedown.'+this.widgetName,function(event){
return self._mouseDown(event);
})
.bind('click.'+this.widgetName,function(event){
if(true===$.data(event.target,self.widgetName+'.preventClickEvent')){
$.removeData(event.target,self.widgetName+'.preventClickEvent');
event.stopImmediatePropagation();
return false;
}
});

this.started=false;
},



_mouseDestroy:function(){
this.element.unbind('.'+this.widgetName);


if(this._mouseMoveDelegate)
{
$(document)
.unbind('mousemove.'+this.widgetName,this._mouseMoveDelegate)
.unbind('mouseup.'+this.widgetName,this._mouseUpDelegate);
}
},

_mouseDown:function(event){

if(mouseHandled){return};


(this._mouseStarted&&this._mouseUp(event));

this._mouseDownEvent=event;

var self=this,
btnIsLeft=(event.which==1),


elIsCancel=(typeof this.options.cancel=="string"&&event.target.nodeName?$(event.target).closest(this.options.cancel).length:false);
if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){
return true;
}








$(this.element).each(function(){
if(this.setCapture){
this.setCapture();
}
});





this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){
this._mouseDelayTimer=setTimeout(function(){
self.mouseDelayMet=true;
},this.options.delay);
}

if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){
this._mouseStarted=(this._mouseStart(event)!==false);
if(!this._mouseStarted){
event.preventDefault();
return true;
}
}


if(true===$.data(event.target,this.widgetName+'.preventClickEvent')){
$.removeData(event.target,this.widgetName+'.preventClickEvent');
}


this._mouseMoveDelegate=function(event){
return self._mouseMove(event);
};
this._mouseUpDelegate=function(event){
return self._mouseUp(event);
};
$(document)
.bind('mousemove.'+this.widgetName,this._mouseMoveDelegate)
.bind('mouseup.'+this.widgetName,this._mouseUpDelegate);

event.preventDefault();

mouseHandled=true;
return true;
},

_mouseMove:function(event){















if(this._mouseStarted){
this._mouseDrag(event);
return event.preventDefault();
}

if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){
this._mouseStarted=
(this._mouseStart(this._mouseDownEvent,event)!==false);
(this._mouseStarted?this._mouseDrag(event):this._mouseUp(event));
}

return!this._mouseStarted;
},

_mouseUp:function(event){
$(document)
.unbind('mousemove.'+this.widgetName,this._mouseMoveDelegate)
.unbind('mouseup.'+this.widgetName,this._mouseUpDelegate);

if(this._mouseStarted){
this._mouseStarted=false;

if(event.target==this._mouseDownEvent.target){
$.data(event.target,this.widgetName+'.preventClickEvent',true);
}

this._mouseStop(event);
}






if(document.releaseCapture){
document.releaseCapture();
}




return false;
},

_mouseDistanceMet:function(event){
return(Math.max(
Math.abs(this._mouseDownEvent.pageX-event.pageX),
Math.abs(this._mouseDownEvent.pageY-event.pageY)
)>=this.options.distance
);
},

_mouseDelayMet:function(event){
return this.mouseDelayMet;
},


_mouseStart:function(event){},
_mouseDrag:function(event){},
_mouseStop:function(event){},
_mouseCapture:function(event){return true;}
});

})(jQuery);/*!
 * jQuery UI Position 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */

(function($,undefined){

$.ui=$.ui||{};

var horizontalPositions=/left|center|right/,
verticalPositions=/top|center|bottom/,
center="center",
support={},
_position=$.fn.position,
_offset=$.fn.offset;

$.fn.position=function(options){
if(!options||!options.of){
return _position.apply(this,arguments);
}


options=$.extend({},options);

var target=$(options.of),
targetElem=target[0],
collision=(options.collision||"flip").split(" "),
offset=options.offset?options.offset.split(" "):[0,0],
targetWidth,
targetHeight,
basePosition;

if(targetElem.nodeType===9){
targetWidth=target.width();
targetHeight=target.height();
basePosition={top:0,left:0};

}else if(targetElem.setTimeout){
targetWidth=target.width();
targetHeight=target.height();
basePosition={top:target.scrollTop(),left:target.scrollLeft()};
}else if(targetElem.preventDefault){

options.at="left top";
targetWidth=targetHeight=0;
basePosition={top:options.of.pageY,left:options.of.pageX};
}else{
targetWidth=target.outerWidth();
targetHeight=target.outerHeight();
basePosition=target.offset();
}



$.each(["my","at"],function(){
var pos=(options[this]||"").split(" ");
if(pos.length===1){
pos=horizontalPositions.test(pos[0])?
pos.concat([center]):
verticalPositions.test(pos[0])?
[center].concat(pos):
[center,center];
}
pos[0]=horizontalPositions.test(pos[0])?pos[0]:center;
pos[1]=verticalPositions.test(pos[1])?pos[1]:center;
options[this]=pos;
});


if(collision.length===1){
collision[1]=collision[0];
}


offset[0]=parseInt(offset[0],10)||0;
if(offset.length===1){
offset[1]=offset[0];
}
offset[1]=parseInt(offset[1],10)||0;

if(options.at[0]==="right"){
basePosition.left+=targetWidth;
}else if(options.at[0]===center){
basePosition.left+=targetWidth/2;
}

if(options.at[1]==="bottom"){
basePosition.top+=targetHeight;
}else if(options.at[1]===center){
basePosition.top+=targetHeight/2;
}

basePosition.left+=offset[0];
basePosition.top+=offset[1];

return this.each(function(){
var elem=$(this),
elemWidth=elem.outerWidth(),
elemHeight=elem.outerHeight(),
marginLeft=parseInt($.curCSS(this,"marginLeft",true))||0,
marginTop=parseInt($.curCSS(this,"marginTop",true))||0,
collisionWidth=elemWidth+marginLeft+
(parseInt($.curCSS(this,"marginRight",true))||0),
collisionHeight=elemHeight+marginTop+
(parseInt($.curCSS(this,"marginBottom",true))||0),
position=$.extend({},basePosition),
collisionPosition;

if(options.my[0]==="right"){
position.left-=elemWidth;
}else if(options.my[0]===center){
position.left-=elemWidth/2;
}

if(options.my[1]==="bottom"){
position.top-=elemHeight;
}else if(options.my[1]===center){
position.top-=elemHeight/2;
}


if(!support.fractions){
position.left=Math.round(position.left);
position.top=Math.round(position.top);
}

collisionPosition={
left:position.left-marginLeft,
top:position.top-marginTop
};

$.each(["left","top"],function(i,dir){
if($.ui.position[collision[i]]){
$.ui.position[collision[i]][dir](position,{
targetWidth:targetWidth,
targetHeight:targetHeight,
elemWidth:elemWidth,
elemHeight:elemHeight,
collisionPosition:collisionPosition,
collisionWidth:collisionWidth,
collisionHeight:collisionHeight,
offset:offset,
my:options.my,
at:options.at
});
}
});

if($.fn.bgiframe){
elem.bgiframe();
}
elem.offset($.extend(position,{using:options.using}));
});
};

$.ui.position={
fit:{
left:function(position,data){
var win=$(window),
over=data.collisionPosition.left+data.collisionWidth-win.width()-win.scrollLeft();
position.left=over>0?position.left-over:Math.max(position.left-data.collisionPosition.left,position.left);
},
top:function(position,data){
var win=$(window),
over=data.collisionPosition.top+data.collisionHeight-win.height()-win.scrollTop();
position.top=over>0?position.top-over:Math.max(position.top-data.collisionPosition.top,position.top);
}
},

flip:{
left:function(position,data){
if(data.at[0]===center){
return;
}
var win=$(window),
over=data.collisionPosition.left+data.collisionWidth-win.width()-win.scrollLeft(),
myOffset=data.my[0]==="left"?
-data.elemWidth:
data.my[0]==="right"?
data.elemWidth:
0,
atOffset=data.at[0]==="left"?
data.targetWidth:
-data.targetWidth,
offset=-2*data.offset[0];
position.left+=data.collisionPosition.left<0?
myOffset+atOffset+offset:
over>0?
myOffset+atOffset+offset:
0;
},
top:function(position,data){
if(data.at[1]===center){
return;
}
var win=$(window),
over=data.collisionPosition.top+data.collisionHeight-win.height()-win.scrollTop(),
myOffset=data.my[1]==="top"?
-data.elemHeight:
data.my[1]==="bottom"?
data.elemHeight:
0,
atOffset=data.at[1]==="top"?
data.targetHeight:
-data.targetHeight,
offset=-2*data.offset[1];
position.top+=data.collisionPosition.top<0?
myOffset+atOffset+offset:
over>0?
myOffset+atOffset+offset:
0;
}
}
};


if(!$.offset.setOffset){
$.offset.setOffset=function(elem,options){

if(/static/.test($.curCSS(elem,"position"))){
elem.style.position="relative";
}
var curElem=$(elem),
curOffset=curElem.offset(),
curTop=parseInt($.curCSS(elem,"top",true),10)||0,
curLeft=parseInt($.curCSS(elem,"left",true),10)||0,
props={
top:(options.top-curOffset.top)+curTop,
left:(options.left-curOffset.left)+curLeft
};

if('using'in options){
options.using.call(elem,props);
}else{
curElem.css(props);
}
};

$.fn.offset=function(options){
var elem=this[0];
if(!elem||!elem.ownerDocument){return null;}
if(options){
if($.isFunction(options)){
return this.each(function(i){
$(this).offset(options.call(this,i,$(this).offset()));
});
}
return this.each(function(){
$.offset.setOffset(this,options);
});
}
return _offset.call(this);
};
}


(function(){
var body=document.getElementsByTagName("body")[0],
div=document.createElement("div"),
testElement,testElementParent,testElementStyle,offset,offsetTotal;


testElement=document.createElement(body?"div":"body");
testElementStyle={
visibility:"hidden",
width:0,
height:0,
border:0,
margin:0,
background:"none"
};
if(body){
$.extend(testElementStyle,{
position:"absolute",
left:"-1000px",
top:"-1000px"
});
}
for(var i in testElementStyle){
testElement.style[i]=testElementStyle[i];
}
testElement.appendChild(div);
testElementParent=body||document.documentElement;
testElementParent.insertBefore(testElement,testElementParent.firstChild);

div.style.cssText="position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";

offset=$(div).offset(function(_,offset){
return offset;
}).offset();

testElement.innerHTML="";
testElementParent.removeChild(testElement);

offsetTotal=offset.top+offset.left+(body?2000:0);
support.fractions=offsetTotal>21&&offsetTotal<22;
})();

}(jQuery));/*!
 * jQuery UI Draggable 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.mouse.js
 * jquery.ui.widget.js
 */

(function($,undefined){

$.widget("ui.draggable",$.ui.mouse,{
widgetEventPrefix:"drag",
options:{
addClasses:true,
appendTo:"parent",
axis:false,
connectToSortable:false,
containment:false,
cursor:"auto",
cursorAt:false,
grid:false,
handle:false,
helper:"original",
iframeFix:false,
opacity:false,
refreshPositions:false,
revert:false,
revertDuration:500,
scope:"default",
scroll:true,
scrollSensitivity:20,
scrollSpeed:20,
snap:false,
snapMode:"both",
snapTolerance:20,
stack:false,
zIndex:false
},
_create:function(){

if(this.options.helper=='original'&&!(/^(?:r|a|f)/).test(this.element.css("position")))
this.element[0].style.position='relative';

(this.options.addClasses&&this.element.addClass("ui-draggable"));
(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));

this._mouseInit();

},

destroy:function(){
if(!this.element.data('draggable'))return;
this.element
.removeData("draggable")
.unbind(".draggable")
.removeClass("ui-draggable"
+" ui-draggable-dragging"
+" ui-draggable-disabled");
this._mouseDestroy();

return this;
},

_mouseCapture:function(event){

var o=this.options;


if(this.helper||o.disabled||$(event.target).is('.ui-resizable-handle'))
return false;


this.handle=this._getHandle(event);
if(!this.handle)
return false;

if(o.iframeFix){
$(o.iframeFix===true?"iframe":o.iframeFix).each(function(){
$('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>')
.css({
width:this.offsetWidth+"px",height:this.offsetHeight+"px",
position:"absolute",opacity:"0.001",zIndex:1000
})
.css($(this).offset())
.appendTo("body");
});
}

return true;

},

_mouseStart:function(event){

var o=this.options;


this.helper=this._createHelper(event);

this.helper.addClass("ui-draggable-dragging");


this._cacheHelperProportions();


if($.ui.ddmanager)
$.ui.ddmanager.current=this;







this._cacheMargins();


this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();


this.offset=this.positionAbs=this.element.offset();
this.offset={
top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left
};

$.extend(this.offset,{
click:{
left:event.pageX-this.offset.left,
top:event.pageY-this.offset.top
},
parent:this._getParentOffset(),
relative:this._getRelativeOffset()
});


this.originalPosition=this.position=this._generatePosition(event);
this.originalPageX=event.pageX;
this.originalPageY=event.pageY;


(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));


if(o.containment)
this._setContainment();


if(this._trigger("start",event)===false){
this._clear();
return false;
}


this._cacheHelperProportions();


if($.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(this,event);


this._mouseDrag(event,true);


if($.ui.ddmanager)$.ui.ddmanager.dragStart(this,event);

return true;
},

_mouseDrag:function(event,noPropagation){


this.position=this._generatePosition(event);
this.positionAbs=this._convertPositionTo("absolute");


if(!noPropagation){
var ui=this._uiHash();
if(this._trigger('drag',event,ui)===false){
this._mouseUp({});
return false;
}
this.position=ui.position;
}

if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+'px';
if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+'px';
if($.ui.ddmanager)$.ui.ddmanager.drag(this,event);

return false;
},

_mouseStop:function(event){


var dropped=false;
if($.ui.ddmanager&&!this.options.dropBehaviour)
dropped=$.ui.ddmanager.drop(this,event);


if(this.dropped){
dropped=this.dropped;
this.dropped=false;
}


var element=this.element[0],elementInDom=false;
while(element&&(element=element.parentNode)){
if(element==document){
elementInDom=true;
}
}
if(!elementInDom&&this.options.helper==="original")
return false;

if((this.options.revert=="invalid"&&!dropped)||(this.options.revert=="valid"&&dropped)||this.options.revert===true||($.isFunction(this.options.revert)&&this.options.revert.call(this.element,dropped))){
var self=this;
$(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){
if(self._trigger("stop",event)!==false){
self._clear();
}
});
}else{
if(this._trigger("stop",event)!==false){
this._clear();
}
}

return false;
},

_mouseUp:function(event){
if(this.options.iframeFix===true){
$("div.ui-draggable-iframeFix").each(function(){
this.parentNode.removeChild(this);
});
}


if($.ui.ddmanager)$.ui.ddmanager.dragStop(this,event);

return $.ui.mouse.prototype._mouseUp.call(this,event);
},

cancel:function(){

if(this.helper.is(".ui-draggable-dragging")){
this._mouseUp({});
}else{
this._clear();
}

return this;

},

_getHandle:function(event){

var handle=!this.options.handle||!$(this.options.handle,this.element).length?true:false;
$(this.options.handle,this.element)
.find("*")
.andSelf()
.each(function(){
if(this==event.target)handle=true;
});

return handle;

},

_createHelper:function(event){

var o=this.options;
var helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event])):(o.helper=='clone'?this.element.clone().removeAttr('id'):this.element);

if(!helper.parents('body').length)
helper.appendTo((o.appendTo=='parent'?this.element[0].parentNode:o.appendTo));

if(helper[0]!=this.element[0]&&!(/(fixed|absolute)/).test(helper.css("position")))
helper.css("position","absolute");

return helper;

},

_adjustOffsetFromHelper:function(obj){
if(typeof obj=='string'){
obj=obj.split(' ');
}
if($.isArray(obj)){
obj={left:+obj[0],top:+obj[1]||0};
}
if('left'in obj){
this.offset.click.left=obj.left+this.margins.left;
}
if('right'in obj){
this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;
}
if('top'in obj){
this.offset.click.top=obj.top+this.margins.top;
}
if('bottom'in obj){
this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;
}
},

_getParentOffset:function(){


this.offsetParent=this.helper.offsetParent();
var po=this.offsetParent.offset();





if(this.cssPosition=='absolute'&&this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0])){
po.left+=this.scrollParent.scrollLeft();
po.top+=this.scrollParent.scrollTop();
}

if((this.offsetParent[0]==document.body)
||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=='html'&&$.browser.msie))
po={top:0,left:0};

return{
top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
};

},

_getRelativeOffset:function(){

if(this.cssPosition=="relative"){
var p=this.element.position();
return{
top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),
left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()
};
}else{
return{top:0,left:0};
}

},

_cacheMargins:function(){
this.margins={
left:(parseInt(this.element.css("marginLeft"),10)||0),
top:(parseInt(this.element.css("marginTop"),10)||0),
right:(parseInt(this.element.css("marginRight"),10)||0),
bottom:(parseInt(this.element.css("marginBottom"),10)||0)
};
},

_cacheHelperProportions:function(){
this.helperProportions={
width:this.helper.outerWidth(),
height:this.helper.outerHeight()
};
},

_setContainment:function(){

var o=this.options;
if(o.containment=='parent')o.containment=this.helper[0].parentNode;
if(o.containment=='document'||o.containment=='window')this.containment=[
o.containment=='document'?0:$(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,
o.containment=='document'?0:$(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(o.containment=='document'?0:$(window).scrollLeft())+$(o.containment=='document'?document:window).width()-this.helperProportions.width-this.margins.left,
(o.containment=='document'?0:$(window).scrollTop())+($(o.containment=='document'?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top
];

if(!(/^(document|window|parent)$/).test(o.containment)&&o.containment.constructor!=Array){
var c=$(o.containment);
var ce=c[0];if(!ce)return;
var co=c.offset();
var over=($(ce).css("overflow")!='hidden');

this.containment=[
(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0),
(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0),
(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,
(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom
];
this.relative_container=c;

}else if(o.containment.constructor==Array){
this.containment=o.containment;
}

},

_convertPositionTo:function(d,pos){

if(!pos)pos=this.position;
var mod=d=="absolute"?1:-1;
var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);

return{
top:(
pos.top
+this.offset.relative.top*mod
+this.offset.parent.top*mod
-($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)
),
left:(
pos.left
+this.offset.relative.left*mod
+this.offset.parent.left*mod
-($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod)
)
};

},

_generatePosition:function(event){

var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);
var pageX=event.pageX;
var pageY=event.pageY;






if(this.originalPosition){
var containment;
if(this.containment){
if(this.relative_container){
var co=this.relative_container.offset();
containment=[this.containment[0]+co.left,
this.containment[1]+co.top,
this.containment[2]+co.left,
this.containment[3]+co.top];
}
else{
containment=this.containment;
}

if(event.pageX-this.offset.click.left<containment[0])pageX=containment[0]+this.offset.click.left;
if(event.pageY-this.offset.click.top<containment[1])pageY=containment[1]+this.offset.click.top;
if(event.pageX-this.offset.click.left>containment[2])pageX=containment[2]+this.offset.click.left;
if(event.pageY-this.offset.click.top>containment[3])pageY=containment[3]+this.offset.click.top;
}

if(o.grid){

var top=o.grid[1]?this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY;
pageY=containment?(!(top-this.offset.click.top<containment[1]||top-this.offset.click.top>containment[3])?top:(!(top-this.offset.click.top<containment[1])?top-o.grid[1]:top+o.grid[1])):top;

var left=o.grid[0]?this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX;
pageX=containment?(!(left-this.offset.click.left<containment[0]||left-this.offset.click.left>containment[2])?left:(!(left-this.offset.click.left<containment[0])?left-o.grid[0]:left+o.grid[0])):left;
}

}

return{
top:(
pageY
-this.offset.click.top
-this.offset.relative.top
-this.offset.parent.top
+($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))
),
left:(
pageX
-this.offset.click.left
-this.offset.relative.left
-this.offset.parent.left
+($.browser.safari&&$.browser.version<526&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft()))
)
};

},

_clear:function(){
this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval)this.helper.remove();

this.helper=null;
this.cancelHelperRemoval=false;
},



_trigger:function(type,event,ui){
ui=ui||this._uiHash();
$.ui.plugin.call(this,type,[event,ui]);
if(type=="drag")this.positionAbs=this._convertPositionTo("absolute");
return $.Widget.prototype._trigger.call(this,type,event,ui);
},

plugins:{},

_uiHash:function(event){
return{
helper:this.helper,
position:this.position,
originalPosition:this.originalPosition,
offset:this.positionAbs
};
}

});

$.extend($.ui.draggable,{
version:"1.8.21"
});

$.ui.plugin.add("draggable","connectToSortable",{
start:function(event,ui){

var inst=$(this).data("draggable"),o=inst.options,
uiSortable=$.extend({},ui,{item:inst.element});
inst.sortables=[];
$(o.connectToSortable).each(function(){
var sortable=$.data(this,'sortable');
if(sortable&&!sortable.options.disabled){
inst.sortables.push({
instance:sortable,
shouldRevert:sortable.options.revert
});
sortable.refreshPositions();
sortable._trigger("activate",event,uiSortable);
}
});

},
stop:function(event,ui){


var inst=$(this).data("draggable"),
uiSortable=$.extend({},ui,{item:inst.element});

$.each(inst.sortables,function(){
if(this.instance.isOver){

this.instance.isOver=0;

inst.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;


if(this.shouldRevert)this.instance.options.revert=true;


this.instance._mouseStop(event);

this.instance.options.helper=this.instance.options._helper;


if(inst.options.helper=='original')
this.instance.currentItem.css({top:'auto',left:'auto'});

}else{
this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",event,uiSortable);
}

});

},
drag:function(event,ui){

var inst=$(this).data("draggable"),self=this;

var checkPos=function(o){
var dyClick=this.offset.click.top,dxClick=this.offset.click.left;
var helperTop=this.positionAbs.top,helperLeft=this.positionAbs.left;
var itemHeight=o.height,itemWidth=o.width;
var itemTop=o.top,itemLeft=o.left;

return $.ui.isOver(helperTop+dyClick,helperLeft+dxClick,itemTop,itemLeft,itemHeight,itemWidth);
};

$.each(inst.sortables,function(i){


this.instance.positionAbs=inst.positionAbs;
this.instance.helperProportions=inst.helperProportions;
this.instance.offset.click=inst.offset.click;

if(this.instance._intersectsWith(this.instance.containerCache)){


if(!this.instance.isOver){

this.instance.isOver=1;



this.instance.currentItem=$(self).clone().removeAttr('id').appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){return ui.helper[0];};

event.target=this.instance.currentItem[0];
this.instance._mouseCapture(event,true);
this.instance._mouseStart(event,true,true);


this.instance.offset.click.top=inst.offset.click.top;
this.instance.offset.click.left=inst.offset.click.left;
this.instance.offset.parent.left-=inst.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=inst.offset.parent.top-this.instance.offset.parent.top;

inst._trigger("toSortable",event);
inst.dropped=this.instance.element;

inst.currentItem=inst.element;
this.instance.fromOutside=inst;

}


if(this.instance.currentItem)this.instance._mouseDrag(event);

}else{



if(this.instance.isOver){

this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;


this.instance.options.revert=false;


this.instance._trigger('out',event,this.instance._uiHash(this.instance));

this.instance._mouseStop(event,true);
this.instance.options.helper=this.instance.options._helper;


this.instance.currentItem.remove();
if(this.instance.placeholder)this.instance.placeholder.remove();

inst._trigger("fromSortable",event);
inst.dropped=false;
}

};

});

}
});

$.ui.plugin.add("draggable","cursor",{
start:function(event,ui){
var t=$('body'),o=$(this).data('draggable').options;
if(t.css("cursor"))o._cursor=t.css("cursor");
t.css("cursor",o.cursor);
},
stop:function(event,ui){
var o=$(this).data('draggable').options;
if(o._cursor)$('body').css("cursor",o._cursor);
}
});

$.ui.plugin.add("draggable","opacity",{
start:function(event,ui){
var t=$(ui.helper),o=$(this).data('draggable').options;
if(t.css("opacity"))o._opacity=t.css("opacity");
t.css('opacity',o.opacity);
},
stop:function(event,ui){
var o=$(this).data('draggable').options;
if(o._opacity)$(ui.helper).css('opacity',o._opacity);
}
});

$.ui.plugin.add("draggable","scroll",{
start:function(event,ui){
var i=$(this).data("draggable");
if(i.scrollParent[0]!=document&&i.scrollParent[0].tagName!='HTML')i.overflowOffset=i.scrollParent.offset();
},
drag:function(event,ui){

var i=$(this).data("draggable"),o=i.options,scrolled=false;

if(i.scrollParent[0]!=document&&i.scrollParent[0].tagName!='HTML'){

if(!o.axis||o.axis!='x'){
if((i.overflowOffset.top+i.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity)
i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop+o.scrollSpeed;
else if(event.pageY-i.overflowOffset.top<o.scrollSensitivity)
i.scrollParent[0].scrollTop=scrolled=i.scrollParent[0].scrollTop-o.scrollSpeed;
}

if(!o.axis||o.axis!='y'){
if((i.overflowOffset.left+i.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity)
i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft+o.scrollSpeed;
else if(event.pageX-i.overflowOffset.left<o.scrollSensitivity)
i.scrollParent[0].scrollLeft=scrolled=i.scrollParent[0].scrollLeft-o.scrollSpeed;
}

}else{

if(!o.axis||o.axis!='x'){
if(event.pageY-$(document).scrollTop()<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);
else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);
}

if(!o.axis||o.axis!='y'){
if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);
else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);
}

}

if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(i,event);

}
});

$.ui.plugin.add("draggable","snap",{
start:function(event,ui){

var i=$(this).data("draggable"),o=i.options;
i.snapElements=[];

$(o.snap.constructor!=String?(o.snap.items||':data(draggable)'):o.snap).each(function(){
var $t=$(this);var $o=$t.offset();
if(this!=i.element[0])i.snapElements.push({
item:this,
width:$t.outerWidth(),height:$t.outerHeight(),
top:$o.top,left:$o.left
});
});

},
drag:function(event,ui){

var inst=$(this).data("draggable"),o=inst.options;
var d=o.snapTolerance;

var x1=ui.offset.left,x2=x1+inst.helperProportions.width,
y1=ui.offset.top,y2=y1+inst.helperProportions.height;

for(var i=inst.snapElements.length-1;i>=0;i--){

var l=inst.snapElements[i].left,r=l+inst.snapElements[i].width,
t=inst.snapElements[i].top,b=t+inst.snapElements[i].height;


if(!((l-d<x1&&x1<r+d&&t-d<y1&&y1<b+d)||(l-d<x1&&x1<r+d&&t-d<y2&&y2<b+d)||(l-d<x2&&x2<r+d&&t-d<y1&&y1<b+d)||(l-d<x2&&x2<r+d&&t-d<y2&&y2<b+d))){
if(inst.snapElements[i].snapping)(inst.options.snap.release&&inst.options.snap.release.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})));
inst.snapElements[i].snapping=false;
continue;
}

if(o.snapMode!='inner'){
var ts=Math.abs(t-y2)<=d;
var bs=Math.abs(b-y1)<=d;
var ls=Math.abs(l-x2)<=d;
var rs=Math.abs(r-x1)<=d;
if(ts)ui.position.top=inst._convertPositionTo("relative",{top:t-inst.helperProportions.height,left:0}).top-inst.margins.top;
if(bs)ui.position.top=inst._convertPositionTo("relative",{top:b,left:0}).top-inst.margins.top;
if(ls)ui.position.left=inst._convertPositionTo("relative",{top:0,left:l-inst.helperProportions.width}).left-inst.margins.left;
if(rs)ui.position.left=inst._convertPositionTo("relative",{top:0,left:r}).left-inst.margins.left;
}

var first=(ts||bs||ls||rs);

if(o.snapMode!='outer'){
var ts=Math.abs(t-y1)<=d;
var bs=Math.abs(b-y2)<=d;
var ls=Math.abs(l-x1)<=d;
var rs=Math.abs(r-x2)<=d;
if(ts)ui.position.top=inst._convertPositionTo("relative",{top:t,left:0}).top-inst.margins.top;
if(bs)ui.position.top=inst._convertPositionTo("relative",{top:b-inst.helperProportions.height,left:0}).top-inst.margins.top;
if(ls)ui.position.left=inst._convertPositionTo("relative",{top:0,left:l}).left-inst.margins.left;
if(rs)ui.position.left=inst._convertPositionTo("relative",{top:0,left:r-inst.helperProportions.width}).left-inst.margins.left;
}

if(!inst.snapElements[i].snapping&&(ts||bs||ls||rs||first))
(inst.options.snap.snap&&inst.options.snap.snap.call(inst.element,event,$.extend(inst._uiHash(),{snapItem:inst.snapElements[i].item})));
inst.snapElements[i].snapping=(ts||bs||ls||rs||first);

};

}
});

$.ui.plugin.add("draggable","stack",{
start:function(event,ui){

var o=$(this).data("draggable").options;

var group=$.makeArray($(o.stack)).sort(function(a,b){
return(parseInt($(a).css("zIndex"),10)||0)-(parseInt($(b).css("zIndex"),10)||0);
});
if(!group.length){return;}

var min=parseInt(group[0].style.zIndex)||0;
$(group).each(function(i){
this.style.zIndex=min+i;
});

this[0].style.zIndex=min+group.length;

}
});

$.ui.plugin.add("draggable","zIndex",{
start:function(event,ui){
var t=$(ui.helper),o=$(this).data("draggable").options;
if(t.css("zIndex"))o._zIndex=t.css("zIndex");
t.css('zIndex',o.zIndex);
},
stop:function(event,ui){
var o=$(this).data("draggable").options;
if(o._zIndex)$(ui.helper).css('zIndex',o._zIndex);
}
});

})(jQuery);/*!
 * jQuery UI Droppable 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.widget.js
 * jquery.ui.mouse.js
 * jquery.ui.draggable.js
 */

(function($,undefined){

$.widget("ui.droppable",{
widgetEventPrefix:"drop",
options:{
accept:'*',
activeClass:false,
addClasses:true,
greedy:false,
hoverClass:false,
scope:'default',
tolerance:'intersect'
},
_create:function(){

var o=this.options,accept=o.accept;
this.isover=0;this.isout=1;

this.accept=$.isFunction(accept)?accept:function(d){
return d.is(accept);
};


this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};


$.ui.ddmanager.droppables[o.scope]=$.ui.ddmanager.droppables[o.scope]||[];
$.ui.ddmanager.droppables[o.scope].push(this);

(o.addClasses&&this.element.addClass("ui-droppable"));

},

destroy:function(){
var drop=$.ui.ddmanager.droppables[this.options.scope];
for(var i=0;i<drop.length;i++)
if(drop[i]==this)
drop.splice(i,1);

this.element
.removeClass("ui-droppable ui-droppable-disabled")
.removeData("droppable")
.unbind(".droppable");

return this;
},

_setOption:function(key,value){

if(key=='accept'){
this.accept=$.isFunction(value)?value:function(d){
return d.is(value);
};
}
$.Widget.prototype._setOption.apply(this,arguments);
},

_activate:function(event){
var draggable=$.ui.ddmanager.current;
if(this.options.activeClass)this.element.addClass(this.options.activeClass);
(draggable&&this._trigger('activate',event,this.ui(draggable)));
},

_deactivate:function(event){
var draggable=$.ui.ddmanager.current;
if(this.options.activeClass)this.element.removeClass(this.options.activeClass);
(draggable&&this._trigger('deactivate',event,this.ui(draggable)));
},

_over:function(event){

var draggable=$.ui.ddmanager.current;
if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return;

if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){
if(this.options.hoverClass)this.element.addClass(this.options.hoverClass);
this._trigger('over',event,this.ui(draggable));
}

},

_out:function(event){

var draggable=$.ui.ddmanager.current;
if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return;

if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){
if(this.options.hoverClass)this.element.removeClass(this.options.hoverClass);
this._trigger('out',event,this.ui(draggable));
}

},

_drop:function(event,custom){

var draggable=custom||$.ui.ddmanager.current;
if(!draggable||(draggable.currentItem||draggable.element)[0]==this.element[0])return false;

var childrenIntersection=false;
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){
var inst=$.data(this,'droppable');
if(
inst.options.greedy
&&!inst.options.disabled
&&inst.options.scope==draggable.options.scope
&&inst.accept.call(inst.element[0],(draggable.currentItem||draggable.element))
&&$.ui.intersect(draggable,$.extend(inst,{offset:inst.element.offset()}),inst.options.tolerance)
){childrenIntersection=true;return false;}
});
if(childrenIntersection)return false;

if(this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){
if(this.options.activeClass)this.element.removeClass(this.options.activeClass);
if(this.options.hoverClass)this.element.removeClass(this.options.hoverClass);
this._trigger('drop',event,this.ui(draggable));
return this.element;
}

return false;

},

ui:function(c){
return{
draggable:(c.currentItem||c.element),
helper:c.helper,
position:c.position,
offset:c.positionAbs
};
}

});

$.extend($.ui.droppable,{
version:"1.8.21"
});

$.ui.intersect=function(draggable,droppable,toleranceMode){

if(!droppable.offset)return false;

var x1=(draggable.positionAbs||draggable.position.absolute).left,x2=x1+draggable.helperProportions.width,
y1=(draggable.positionAbs||draggable.position.absolute).top,y2=y1+draggable.helperProportions.height;
var l=droppable.offset.left,r=l+droppable.proportions.width,
t=droppable.offset.top,b=t+droppable.proportions.height;

switch(toleranceMode){
case'fit':
return(l<=x1&&x2<=r
&&t<=y1&&y2<=b);
break;
case'intersect':
return(l<x1+(draggable.helperProportions.width/2)
&&x2-(draggable.helperProportions.width/2)<r
&&t<y1+(draggable.helperProportions.height/2)
&&y2-(draggable.helperProportions.height/2)<b);
break;
case'pointer':
var draggableLeft=((draggable.positionAbs||draggable.position.absolute).left+(draggable.clickOffset||draggable.offset.click).left),
draggableTop=((draggable.positionAbs||draggable.position.absolute).top+(draggable.clickOffset||draggable.offset.click).top),
isOver=$.ui.isOver(draggableTop,draggableLeft,t,l,droppable.proportions.height,droppable.proportions.width);
return isOver;
break;
case'touch':
return(
(y1>=t&&y1<=b)||
(y2>=t&&y2<=b)||
(y1<t&&y2>b)
)&&(
(x1>=l&&x1<=r)||
(x2>=l&&x2<=r)||
(x1<l&&x2>r)
);
break;
default:
return false;
break;
}

};




$.ui.ddmanager={
current:null,
droppables:{'default':[]},
prepareOffsets:function(t,event){

var m=$.ui.ddmanager.droppables[t.options.scope]||[];
var type=event?event.type:null;
var list=(t.currentItem||t.element).find(":data(droppable)").andSelf();

droppablesLoop:for(var i=0;i<m.length;i++){

if(m[i].options.disabled||(t&&!m[i].accept.call(m[i].element[0],(t.currentItem||t.element))))continue;
for(var j=0;j<list.length;j++){if(list[j]==m[i].element[0]){m[i].proportions.height=0;continue droppablesLoop;}};
m[i].visible=m[i].element.css("display")!="none";if(!m[i].visible)continue;

if(type=="mousedown")m[i]._activate.call(m[i],event);

m[i].offset=m[i].element.offset();
m[i].proportions={width:m[i].element[0].offsetWidth,height:m[i].element[0].offsetHeight};

}

},
drop:function(draggable,event){

var dropped=false;
$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){

if(!this.options)return;
if(!this.options.disabled&&this.visible&&$.ui.intersect(draggable,this,this.options.tolerance))
dropped=this._drop.call(this,event)||dropped;

if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(draggable.currentItem||draggable.element))){
this.isout=1;this.isover=0;
this._deactivate.call(this,event);
}

});
return dropped;

},
dragStart:function(draggable,event){

draggable.element.parents(":not(body,html)").bind("scroll.droppable",function(){
if(!draggable.options.refreshPositions)$.ui.ddmanager.prepareOffsets(draggable,event);
});
},
drag:function(draggable,event){


if(draggable.options.refreshPositions)$.ui.ddmanager.prepareOffsets(draggable,event);


$.each($.ui.ddmanager.droppables[draggable.options.scope]||[],function(){

if(this.options.disabled||this.greedyChild||!this.visible)return;
var intersects=$.ui.intersect(draggable,this,this.options.tolerance);

var c=!intersects&&this.isover==1?'isout':(intersects&&this.isover==0?'isover':null);
if(!c)return;

var parentInstance;
if(this.options.greedy){
var parent=this.element.parents(':data(droppable):eq(0)');
if(parent.length){
parentInstance=$.data(parent[0],'droppable');
parentInstance.greedyChild=(c=='isover'?1:0);
}
}


if(parentInstance&&c=='isover'){
parentInstance['isover']=0;
parentInstance['isout']=1;
parentInstance._out.call(parentInstance,event);
}

this[c]=1;this[c=='isout'?'isover':'isout']=0;
this[c=="isover"?"_over":"_out"].call(this,event);


if(parentInstance&&c=='isout'){
parentInstance['isout']=0;
parentInstance['isover']=1;
parentInstance._over.call(parentInstance,event);
}
});

},
dragStop:function(draggable,event){
draggable.element.parents(":not(body,html)").unbind("scroll.droppable");

if(!draggable.options.refreshPositions)$.ui.ddmanager.prepareOffsets(draggable,event);
}
};

})(jQuery);/*!
 * jQuery UI Resizable 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.mouse.js
 * jquery.ui.widget.js
 */

(function($,undefined){

$.widget("ui.resizable",$.ui.mouse,{
widgetEventPrefix:"resize",
options:{
alsoResize:false,
animate:false,
animateDuration:"slow",
animateEasing:"swing",
aspectRatio:false,
autoHide:false,
containment:false,
ghost:false,
grid:false,
handles:"e,s,se",
helper:false,
maxHeight:null,
maxWidth:null,
minHeight:10,
minWidth:10,
zIndex:1000
},
_create:function(){

var self=this,o=this.options;
this.element.addClass("ui-resizable");

$.extend(this,{
_aspectRatio:!!(o.aspectRatio),
aspectRatio:o.aspectRatio,
originalElement:this.element,
_proportionallyResizeElements:[],
_helper:o.helper||o.ghost||o.animate?o.helper||'ui-resizable-helper':null
});


if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){


this.element.wrap(
$('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
position:this.element.css('position'),
width:this.element.outerWidth(),
height:this.element.outerHeight(),
top:this.element.css('top'),
left:this.element.css('left')
})
);


this.element=this.element.parent().data(
"resizable",this.element.data('resizable')
);

this.elementIsWrapper=true;


this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});


this.originalResizeStyle=this.originalElement.css('resize');
this.originalElement.css('resize','none');


this._proportionallyResizeElements.push(this.originalElement.css({position:'static',zoom:1,display:'block'}));


this.originalElement.css({margin:this.originalElement.css('margin')});


this._proportionallyResize();

}

this.handles=o.handles||(!$('.ui-resizable-handle',this.element).length?"e,s,se":{n:'.ui-resizable-n',e:'.ui-resizable-e',s:'.ui-resizable-s',w:'.ui-resizable-w',se:'.ui-resizable-se',sw:'.ui-resizable-sw',ne:'.ui-resizable-ne',nw:'.ui-resizable-nw'});
if(this.handles.constructor==String){

if(this.handles=='all')this.handles='n,e,s,w,se,sw,ne,nw';
var n=this.handles.split(",");this.handles={};

for(var i=0;i<n.length;i++){

var handle=$.trim(n[i]),hname='ui-resizable-'+handle;
var axis=$('<div class="ui-resizable-handle '+hname+'"></div>');


axis.css({zIndex:o.zIndex});


if('se'==handle){
axis.addClass('ui-icon ui-icon-gripsmall-diagonal-se');
};


this.handles[handle]='.ui-resizable-'+handle;
this.element.append(axis);
}

}

this._renderAxis=function(target){

target=target||this.element;

for(var i in this.handles){

if(this.handles[i].constructor==String)
this.handles[i]=$(this.handles[i],this.element).show();


if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){

var axis=$(this.handles[i],this.element),padWrapper=0;


padWrapper=/sw|ne|nw|se|n|s/.test(i)?axis.outerHeight():axis.outerWidth();


var padPos=['padding',
/ne|nw|n/.test(i)?'Top':
/se|sw|s/.test(i)?'Bottom':
/^e$/.test(i)?'Right':'Left'].join("");

target.css(padPos,padWrapper);

this._proportionallyResize();

}


if(!$(this.handles[i]).length)
continue;

}
};


this._renderAxis(this.element);

this._handles=$('.ui-resizable-handle',this.element)
.disableSelection();


this._handles.mouseover(function(){
if(!self.resizing){
if(this.className)
var axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);

self.axis=axis&&axis[1]?axis[1]:'se';
}
});


if(o.autoHide){
this._handles.hide();
$(this.element)
.addClass("ui-resizable-autohide")
.hover(function(){
if(o.disabled)return;
$(this).removeClass("ui-resizable-autohide");
self._handles.show();
},
function(){
if(o.disabled)return;
if(!self.resizing){
$(this).addClass("ui-resizable-autohide");
self._handles.hide();
}
});
}


this._mouseInit();

},

destroy:function(){

this._mouseDestroy();

var _destroy=function(exp){
$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
.removeData("resizable").unbind(".resizable").find('.ui-resizable-handle').remove();
};


if(this.elementIsWrapper){
_destroy(this.element);
var wrapper=this.element;
wrapper.after(
this.originalElement.css({
position:wrapper.css('position'),
width:wrapper.outerWidth(),
height:wrapper.outerHeight(),
top:wrapper.css('top'),
left:wrapper.css('left')
})
).remove();
}

this.originalElement.css('resize',this.originalResizeStyle);
_destroy(this.originalElement);

return this;
},

_mouseCapture:function(event){
var handle=false;
for(var i in this.handles){
if($(this.handles[i])[0]==event.target){
handle=true;
}
}

return!this.options.disabled&&handle;
},

_mouseStart:function(event){

var o=this.options,iniPos=this.element.position(),el=this.element;

this.resizing=true;
this.documentScroll={top:$(document).scrollTop(),left:$(document).scrollLeft()};


if(el.is('.ui-draggable')||(/absolute/).test(el.css('position'))){
el.css({position:'absolute',top:iniPos.top,left:iniPos.left});
}

this._renderProxy();

var curleft=num(this.helper.css('left')),curtop=num(this.helper.css('top'));

if(o.containment){
curleft+=$(o.containment).scrollLeft()||0;
curtop+=$(o.containment).scrollTop()||0;
}


this.offset=this.helper.offset();
this.position={left:curleft,top:curtop};
this.size=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};
this.originalSize=this._helper?{width:el.outerWidth(),height:el.outerHeight()}:{width:el.width(),height:el.height()};
this.originalPosition={left:curleft,top:curtop};
this.sizeDiff={width:el.outerWidth()-el.width(),height:el.outerHeight()-el.height()};
this.originalMousePosition={left:event.pageX,top:event.pageY};


this.aspectRatio=(typeof o.aspectRatio=='number')?o.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);

var cursor=$('.ui-resizable-'+this.axis).css('cursor');
$('body').css('cursor',cursor=='auto'?this.axis+'-resize':cursor);

el.addClass("ui-resizable-resizing");
this._propagate("start",event);
return true;
},

_mouseDrag:function(event){


var el=this.helper,o=this.options,props={},
self=this,smp=this.originalMousePosition,a=this.axis;

var dx=(event.pageX-smp.left)||0,dy=(event.pageY-smp.top)||0;
var trigger=this._change[a];
if(!trigger)return false;


var data=trigger.apply(this,[event,dx,dy]),ie6=$.browser.msie&&$.browser.version<7,csdif=this.sizeDiff;


this._updateVirtualBoundaries(event.shiftKey);
if(this._aspectRatio||event.shiftKey)
data=this._updateRatio(data,event);

data=this._respectSize(data,event);


this._propagate("resize",event);

el.css({
top:this.position.top+"px",left:this.position.left+"px",
width:this.size.width+"px",height:this.size.height+"px"
});

if(!this._helper&&this._proportionallyResizeElements.length)
this._proportionallyResize();

this._updateCache(data);


this._trigger('resize',event,this.ui());

return false;
},

_mouseStop:function(event){

this.resizing=false;
var o=this.options,self=this;

if(this._helper){
var pr=this._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),
soffseth=ista&&$.ui.hasScroll(pr[0],'left')?0:self.sizeDiff.height,
soffsetw=ista?0:self.sizeDiff.width;

var s={width:(self.helper.width()-soffsetw),height:(self.helper.height()-soffseth)},
left=(parseInt(self.element.css('left'),10)+(self.position.left-self.originalPosition.left))||null,
top=(parseInt(self.element.css('top'),10)+(self.position.top-self.originalPosition.top))||null;

if(!o.animate)
this.element.css($.extend(s,{top:top,left:left}));

self.helper.height(self.size.height);
self.helper.width(self.size.width);

if(this._helper&&!o.animate)this._proportionallyResize();
}

$('body').css('cursor','auto');

this.element.removeClass("ui-resizable-resizing");

this._propagate("stop",event);

if(this._helper)this.helper.remove();
return false;

},

_updateVirtualBoundaries:function(forceAspectRatio){
var o=this.options,pMinWidth,pMaxWidth,pMinHeight,pMaxHeight,b;

b={
minWidth:isNumber(o.minWidth)?o.minWidth:0,
maxWidth:isNumber(o.maxWidth)?o.maxWidth:Infinity,
minHeight:isNumber(o.minHeight)?o.minHeight:0,
maxHeight:isNumber(o.maxHeight)?o.maxHeight:Infinity
};

if(this._aspectRatio||forceAspectRatio){


pMinWidth=b.minHeight*this.aspectRatio;
pMinHeight=b.minWidth/this.aspectRatio;
pMaxWidth=b.maxHeight*this.aspectRatio;
pMaxHeight=b.maxWidth/this.aspectRatio;

if(pMinWidth>b.minWidth)b.minWidth=pMinWidth;
if(pMinHeight>b.minHeight)b.minHeight=pMinHeight;
if(pMaxWidth<b.maxWidth)b.maxWidth=pMaxWidth;
if(pMaxHeight<b.maxHeight)b.maxHeight=pMaxHeight;
}
this._vBoundaries=b;
},

_updateCache:function(data){
var o=this.options;
this.offset=this.helper.offset();
if(isNumber(data.left))this.position.left=data.left;
if(isNumber(data.top))this.position.top=data.top;
if(isNumber(data.height))this.size.height=data.height;
if(isNumber(data.width))this.size.width=data.width;
},

_updateRatio:function(data,event){

var o=this.options,cpos=this.position,csize=this.size,a=this.axis;

if(isNumber(data.height))data.width=(data.height*this.aspectRatio);
else if(isNumber(data.width))data.height=(data.width/this.aspectRatio);

if(a=='sw'){
data.left=cpos.left+(csize.width-data.width);
data.top=null;
}
if(a=='nw'){
data.top=cpos.top+(csize.height-data.height);
data.left=cpos.left+(csize.width-data.width);
}

return data;
},

_respectSize:function(data,event){

var el=this.helper,o=this._vBoundaries,pRatio=this._aspectRatio||event.shiftKey,a=this.axis,
ismaxw=isNumber(data.width)&&o.maxWidth&&(o.maxWidth<data.width),ismaxh=isNumber(data.height)&&o.maxHeight&&(o.maxHeight<data.height),
isminw=isNumber(data.width)&&o.minWidth&&(o.minWidth>data.width),isminh=isNumber(data.height)&&o.minHeight&&(o.minHeight>data.height);

if(isminw)data.width=o.minWidth;
if(isminh)data.height=o.minHeight;
if(ismaxw)data.width=o.maxWidth;
if(ismaxh)data.height=o.maxHeight;

var dw=this.originalPosition.left+this.originalSize.width,dh=this.position.top+this.size.height;
var cw=/sw|nw|w/.test(a),ch=/nw|ne|n/.test(a);

if(isminw&&cw)data.left=dw-o.minWidth;
if(ismaxw&&cw)data.left=dw-o.maxWidth;
if(isminh&&ch)data.top=dh-o.minHeight;
if(ismaxh&&ch)data.top=dh-o.maxHeight;


var isNotwh=!data.width&&!data.height;
if(isNotwh&&!data.left&&data.top)data.top=null;
else if(isNotwh&&!data.top&&data.left)data.left=null;

return data;
},

_proportionallyResize:function(){

var o=this.options;
if(!this._proportionallyResizeElements.length)return;
var element=this.helper||this.element;

for(var i=0;i<this._proportionallyResizeElements.length;i++){

var prel=this._proportionallyResizeElements[i];

if(!this.borderDif){
var b=[prel.css('borderTopWidth'),prel.css('borderRightWidth'),prel.css('borderBottomWidth'),prel.css('borderLeftWidth')],
p=[prel.css('paddingTop'),prel.css('paddingRight'),prel.css('paddingBottom'),prel.css('paddingLeft')];

this.borderDif=$.map(b,function(v,i){
var border=parseInt(v,10)||0,padding=parseInt(p[i],10)||0;
return border+padding;
});
}

if($.browser.msie&&!(!($(element).is(':hidden')||$(element).parents(':hidden').length)))
continue;

prel.css({
height:(element.height()-this.borderDif[0]-this.borderDif[2])||0,
width:(element.width()-this.borderDif[1]-this.borderDif[3])||0
});

};

},

_renderProxy:function(){

var el=this.element,o=this.options;
this.elementOffset=el.offset();

if(this._helper){

this.helper=this.helper||$('<div style="overflow:hidden;"></div>');


var ie6=$.browser.msie&&$.browser.version<7,ie6offset=(ie6?1:0),
pxyoffset=(ie6?2:-1);

this.helper.addClass(this._helper).css({
width:this.element.outerWidth()+pxyoffset,
height:this.element.outerHeight()+pxyoffset,
position:'absolute',
left:this.elementOffset.left-ie6offset+'px',
top:this.elementOffset.top-ie6offset+'px',
zIndex:++o.zIndex
});

this.helper
.appendTo("body")
.disableSelection();

}else{
this.helper=this.element;
}

},

_change:{
e:function(event,dx,dy){
return{width:this.originalSize.width+dx};
},
w:function(event,dx,dy){
var o=this.options,cs=this.originalSize,sp=this.originalPosition;
return{left:sp.left+dx,width:cs.width-dx};
},
n:function(event,dx,dy){
var o=this.options,cs=this.originalSize,sp=this.originalPosition;
return{top:sp.top+dy,height:cs.height-dy};
},
s:function(event,dx,dy){
return{height:this.originalSize.height+dy};
},
se:function(event,dx,dy){
return $.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));
},
sw:function(event,dx,dy){
return $.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));
},
ne:function(event,dx,dy){
return $.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[event,dx,dy]));
},
nw:function(event,dx,dy){
return $.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[event,dx,dy]));
}
},

_propagate:function(n,event){
$.ui.plugin.call(this,n,[event,this.ui()]);
(n!="resize"&&this._trigger(n,event,this.ui()));
},

plugins:{},

ui:function(){
return{
originalElement:this.originalElement,
element:this.element,
helper:this.helper,
position:this.position,
size:this.size,
originalSize:this.originalSize,
originalPosition:this.originalPosition
};
}

});

$.extend($.ui.resizable,{
version:"1.8.21"
});





$.ui.plugin.add("resizable","alsoResize",{

start:function(event,ui){
var self=$(this).data("resizable"),o=self.options;

var _store=function(exp){
$(exp).each(function(){
var el=$(this);
el.data("resizable-alsoresize",{
width:parseInt(el.width(),10),height:parseInt(el.height(),10),
left:parseInt(el.css('left'),10),top:parseInt(el.css('top'),10)
});
});
};

if(typeof(o.alsoResize)=='object'&&!o.alsoResize.parentNode){
if(o.alsoResize.length){o.alsoResize=o.alsoResize[0];_store(o.alsoResize);}
else{$.each(o.alsoResize,function(exp){_store(exp);});}
}else{
_store(o.alsoResize);
}
},

resize:function(event,ui){
var self=$(this).data("resizable"),o=self.options,os=self.originalSize,op=self.originalPosition;

var delta={
height:(self.size.height-os.height)||0,width:(self.size.width-os.width)||0,
top:(self.position.top-op.top)||0,left:(self.position.left-op.left)||0
},

_alsoResize=function(exp,c){
$(exp).each(function(){
var el=$(this),start=$(this).data("resizable-alsoresize"),style={},
css=c&&c.length?c:el.parents(ui.originalElement[0]).length?['width','height']:['width','height','top','left'];

$.each(css,function(i,prop){
var sum=(start[prop]||0)+(delta[prop]||0);
if(sum&&sum>=0)
style[prop]=sum||null;
});

el.css(style);
});
};

if(typeof(o.alsoResize)=='object'&&!o.alsoResize.nodeType){
$.each(o.alsoResize,function(exp,c){_alsoResize(exp,c);});
}else{
_alsoResize(o.alsoResize);
}
},

stop:function(event,ui){
$(this).removeData("resizable-alsoresize");
}
});

$.ui.plugin.add("resizable","animate",{

stop:function(event,ui){
var self=$(this).data("resizable"),o=self.options;

var pr=self._proportionallyResizeElements,ista=pr.length&&(/textarea/i).test(pr[0].nodeName),
soffseth=ista&&$.ui.hasScroll(pr[0],'left')?0:self.sizeDiff.height,
soffsetw=ista?0:self.sizeDiff.width;

var style={width:(self.size.width-soffsetw),height:(self.size.height-soffseth)},
left=(parseInt(self.element.css('left'),10)+(self.position.left-self.originalPosition.left))||null,
top=(parseInt(self.element.css('top'),10)+(self.position.top-self.originalPosition.top))||null;

self.element.animate(
$.extend(style,top&&left?{top:top,left:left}:{}),{
duration:o.animateDuration,
easing:o.animateEasing,
step:function(){

var data={
width:parseInt(self.element.css('width'),10),
height:parseInt(self.element.css('height'),10),
top:parseInt(self.element.css('top'),10),
left:parseInt(self.element.css('left'),10)
};

if(pr&&pr.length)$(pr[0]).css({width:data.width,height:data.height});


self._updateCache(data);
self._propagate("resize",event);

}
}
);
}

});

$.ui.plugin.add("resizable","containment",{

start:function(event,ui){
var self=$(this).data("resizable"),o=self.options,el=self.element;
var oc=o.containment,ce=(oc instanceof $)?oc.get(0):(/parent/.test(oc))?el.parent().get(0):oc;
if(!ce)return;

self.containerElement=$(ce);

if(/document/.test(oc)||oc==document){
self.containerOffset={left:0,top:0};
self.containerPosition={left:0,top:0};

self.parentData={
element:$(document),left:0,top:0,
width:$(document).width(),height:$(document).height()||document.body.parentNode.scrollHeight
};
}


else{
var element=$(ce),p=[];
$(["Top","Right","Left","Bottom"]).each(function(i,name){p[i]=num(element.css("padding"+name));});

self.containerOffset=element.offset();
self.containerPosition=element.position();
self.containerSize={height:(element.innerHeight()-p[3]),width:(element.innerWidth()-p[1])};

var co=self.containerOffset,ch=self.containerSize.height,cw=self.containerSize.width,
width=($.ui.hasScroll(ce,"left")?ce.scrollWidth:cw),height=($.ui.hasScroll(ce)?ce.scrollHeight:ch);

self.parentData={
element:ce,left:co.left,top:co.top,width:width,height:height
};
}
},

resize:function(event,ui){
var self=$(this).data("resizable"),o=self.options,
ps=self.containerSize,co=self.containerOffset,cs=self.size,cp=self.position,
pRatio=self._aspectRatio||event.shiftKey,cop={top:0,left:0},ce=self.containerElement;

if(ce[0]!=document&&(/static/).test(ce.css('position')))cop=co;

if(cp.left<(self._helper?co.left:0)){
self.size.width=self.size.width+(self._helper?(self.position.left-co.left):(self.position.left-cop.left));
if(pRatio)self.size.height=self.size.width/self.aspectRatio;
self.position.left=o.helper?co.left:0;
}

if(cp.top<(self._helper?co.top:0)){
self.size.height=self.size.height+(self._helper?(self.position.top-co.top):self.position.top);
if(pRatio)self.size.width=self.size.height*self.aspectRatio;
self.position.top=self._helper?co.top:0;
}

self.offset.left=self.parentData.left+self.position.left;
self.offset.top=self.parentData.top+self.position.top;

var woset=Math.abs((self._helper?self.offset.left-cop.left:(self.offset.left-cop.left))+self.sizeDiff.width),
hoset=Math.abs((self._helper?self.offset.top-cop.top:(self.offset.top-co.top))+self.sizeDiff.height);

var isParent=self.containerElement.get(0)==self.element.parent().get(0),
isOffsetRelative=/relative|absolute/.test(self.containerElement.css('position'));

if(isParent&&isOffsetRelative)woset-=self.parentData.left;

if(woset+self.size.width>=self.parentData.width){
self.size.width=self.parentData.width-woset;
if(pRatio)self.size.height=self.size.width/self.aspectRatio;
}

if(hoset+self.size.height>=self.parentData.height){
self.size.height=self.parentData.height-hoset;
if(pRatio)self.size.width=self.size.height*self.aspectRatio;
}
},

stop:function(event,ui){
var self=$(this).data("resizable"),o=self.options,cp=self.position,
co=self.containerOffset,cop=self.containerPosition,ce=self.containerElement;

var helper=$(self.helper),ho=helper.offset(),w=helper.outerWidth()-self.sizeDiff.width,h=helper.outerHeight()-self.sizeDiff.height;

if(self._helper&&!o.animate&&(/relative/).test(ce.css('position')))
$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});

if(self._helper&&!o.animate&&(/static/).test(ce.css('position')))
$(this).css({left:ho.left-cop.left-co.left,width:w,height:h});

}
});

$.ui.plugin.add("resizable","ghost",{

start:function(event,ui){

var self=$(this).data("resizable"),o=self.options,cs=self.size;

self.ghost=self.originalElement.clone();
self.ghost
.css({opacity:.25,display:'block',position:'relative',height:cs.height,width:cs.width,margin:0,left:0,top:0})
.addClass('ui-resizable-ghost')
.addClass(typeof o.ghost=='string'?o.ghost:'');

self.ghost.appendTo(self.helper);

},

resize:function(event,ui){
var self=$(this).data("resizable"),o=self.options;
if(self.ghost)self.ghost.css({position:'relative',height:self.size.height,width:self.size.width});
},

stop:function(event,ui){
var self=$(this).data("resizable"),o=self.options;
if(self.ghost&&self.helper)self.helper.get(0).removeChild(self.ghost.get(0));
}

});

$.ui.plugin.add("resizable","grid",{

resize:function(event,ui){
var self=$(this).data("resizable"),o=self.options,cs=self.size,os=self.originalSize,op=self.originalPosition,a=self.axis,ratio=o._aspectRatio||event.shiftKey;
o.grid=typeof o.grid=="number"?[o.grid,o.grid]:o.grid;
var ox=Math.round((cs.width-os.width)/(o.grid[0]||1))*(o.grid[0]||1),oy=Math.round((cs.height-os.height)/(o.grid[1]||1))*(o.grid[1]||1);

if(/^(se|s|e)$/.test(a)){
self.size.width=os.width+ox;
self.size.height=os.height+oy;
}
else if(/^(ne)$/.test(a)){
self.size.width=os.width+ox;
self.size.height=os.height+oy;
self.position.top=op.top-oy;
}
else if(/^(sw)$/.test(a)){
self.size.width=os.width+ox;
self.size.height=os.height+oy;
self.position.left=op.left-ox;
}
else{
self.size.width=os.width+ox;
self.size.height=os.height+oy;
self.position.top=op.top-oy;
self.position.left=op.left-ox;
}
}

});

var num=function(v){
return parseInt(v,10)||0;
};

var isNumber=function(value){
return!isNaN(parseInt(value,10));
};

})(jQuery);/*!
 * jQuery UI Selectable 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.mouse.js
 * jquery.ui.widget.js
 */

(function($,undefined){

$.widget("ui.selectable",$.ui.mouse,{
options:{
appendTo:'body',
autoRefresh:true,
distance:0,
filter:'*',
tolerance:'touch'
},
_create:function(){
var self=this;

this.element.addClass("ui-selectable");

this.dragged=false;


var selectees;
this.refresh=function(){
selectees=$(self.options.filter,self.element[0]);
selectees.addClass("ui-selectee");
selectees.each(function(){
var $this=$(this);
var pos=$this.offset();
$.data(this,"selectable-item",{
element:this,
$element:$this,
left:pos.left,
top:pos.top,
right:pos.left+$this.outerWidth(),
bottom:pos.top+$this.outerHeight(),
startselected:false,
selected:$this.hasClass('ui-selected'),
selecting:$this.hasClass('ui-selecting'),
unselecting:$this.hasClass('ui-unselecting')
});
});
};
this.refresh();

this.selectees=selectees.addClass("ui-selectee");

this._mouseInit();

this.helper=$("<div class='ui-selectable-helper'></div>");
},

destroy:function(){
this.selectees
.removeClass("ui-selectee")
.removeData("selectable-item");
this.element
.removeClass("ui-selectable ui-selectable-disabled")
.removeData("selectable")
.unbind(".selectable");
this._mouseDestroy();

return this;
},

_mouseStart:function(event){
var self=this;

this.opos=[event.pageX,event.pageY];

if(this.options.disabled)
return;

var options=this.options;

this.selectees=$(options.filter,this.element[0]);

this._trigger("start",event);

$(options.appendTo).append(this.helper);

this.helper.css({
"left":event.clientX,
"top":event.clientY,
"width":0,
"height":0
});

if(options.autoRefresh){
this.refresh();
}

this.selectees.filter('.ui-selected').each(function(){
var selectee=$.data(this,"selectable-item");
selectee.startselected=true;
if(!event.metaKey&&!event.ctrlKey){
selectee.$element.removeClass('ui-selected');
selectee.selected=false;
selectee.$element.addClass('ui-unselecting');
selectee.unselecting=true;

self._trigger("unselecting",event,{
unselecting:selectee.element
});
}
});

$(event.target).parents().andSelf().each(function(){
var selectee=$.data(this,"selectable-item");
if(selectee){
var doSelect=(!event.metaKey&&!event.ctrlKey)||!selectee.$element.hasClass('ui-selected');
selectee.$element
.removeClass(doSelect?"ui-unselecting":"ui-selected")
.addClass(doSelect?"ui-selecting":"ui-unselecting");
selectee.unselecting=!doSelect;
selectee.selecting=doSelect;
selectee.selected=doSelect;

if(doSelect){
self._trigger("selecting",event,{
selecting:selectee.element
});
}else{
self._trigger("unselecting",event,{
unselecting:selectee.element
});
}
return false;
}
});

},

_mouseDrag:function(event){
var self=this;
this.dragged=true;

if(this.options.disabled)
return;

var options=this.options;

var x1=this.opos[0],y1=this.opos[1],x2=event.pageX,y2=event.pageY;
if(x1>x2){var tmp=x2;x2=x1;x1=tmp;}
if(y1>y2){var tmp=y2;y2=y1;y1=tmp;}
this.helper.css({left:x1,top:y1,width:x2-x1,height:y2-y1});

this.selectees.each(function(){
var selectee=$.data(this,"selectable-item");

if(!selectee||selectee.element==self.element[0])
return;
var hit=false;
if(options.tolerance=='touch'){
hit=(!(selectee.left>x2||selectee.right<x1||selectee.top>y2||selectee.bottom<y1));
}else if(options.tolerance=='fit'){
hit=(selectee.left>x1&&selectee.right<x2&&selectee.top>y1&&selectee.bottom<y2);
}

if(hit){

if(selectee.selected){
selectee.$element.removeClass('ui-selected');
selectee.selected=false;
}
if(selectee.unselecting){
selectee.$element.removeClass('ui-unselecting');
selectee.unselecting=false;
}
if(!selectee.selecting){
selectee.$element.addClass('ui-selecting');
selectee.selecting=true;

self._trigger("selecting",event,{
selecting:selectee.element
});
}
}else{

if(selectee.selecting){
if((event.metaKey||event.ctrlKey)&&selectee.startselected){
selectee.$element.removeClass('ui-selecting');
selectee.selecting=false;
selectee.$element.addClass('ui-selected');
selectee.selected=true;
}else{
selectee.$element.removeClass('ui-selecting');
selectee.selecting=false;
if(selectee.startselected){
selectee.$element.addClass('ui-unselecting');
selectee.unselecting=true;
}

self._trigger("unselecting",event,{
unselecting:selectee.element
});
}
}
if(selectee.selected){
if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){
selectee.$element.removeClass('ui-selected');
selectee.selected=false;

selectee.$element.addClass('ui-unselecting');
selectee.unselecting=true;

self._trigger("unselecting",event,{
unselecting:selectee.element
});
}
}
}
});

return false;
},

_mouseStop:function(event){
var self=this;

this.dragged=false;

var options=this.options;

$('.ui-unselecting',this.element[0]).each(function(){
var selectee=$.data(this,"selectable-item");
selectee.$element.removeClass('ui-unselecting');
selectee.unselecting=false;
selectee.startselected=false;
self._trigger("unselected",event,{
unselected:selectee.element
});
});
$('.ui-selecting',this.element[0]).each(function(){
var selectee=$.data(this,"selectable-item");
selectee.$element.removeClass('ui-selecting').addClass('ui-selected');
selectee.selecting=false;
selectee.selected=true;
selectee.startselected=true;
self._trigger("selected",event,{
selected:selectee.element
});
});
this._trigger("stop",event);

this.helper.remove();

return false;
}

});

$.extend($.ui.selectable,{
version:"1.8.21"
});

})(jQuery);/*!
 * jQuery UI Sortable 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.mouse.js
 * jquery.ui.widget.js
 */

(function($,undefined){

$.widget("ui.sortable",$.ui.mouse,{
widgetEventPrefix:"sort",
ready:false,
options:{
appendTo:"parent",
axis:false,
connectWith:false,
containment:false,
cursor:'auto',
cursorAt:false,
dropOnEmpty:true,
forcePlaceholderSize:false,
forceHelperSize:false,
grid:false,
handle:false,
helper:"original",
items:'> *',
opacity:false,
placeholder:false,
revert:false,
scroll:true,
scrollSensitivity:20,
scrollSpeed:20,
scope:"default",
tolerance:"intersect",
zIndex:1000
},
_create:function(){

var o=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");


this.refresh();


this.floating=this.items.length?o.axis==='x'||(/left|right/).test(this.items[0].item.css('float'))||(/inline|table-cell/).test(this.items[0].item.css('display')):false;


this.offset=this.element.offset();


this._mouseInit();


this.ready=true

},

destroy:function(){
$.Widget.prototype.destroy.call(this);
this.element
.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();

for(var i=this.items.length-1;i>=0;i--)
this.items[i].item.removeData(this.widgetName+"-item");

return this;
},

_setOption:function(key,value){
if(key==="disabled"){
this.options[key]=value;

this.widget()
[value?"addClass":"removeClass"]("ui-sortable-disabled");
}else{

$.Widget.prototype._setOption.apply(this,arguments);
}
},

_mouseCapture:function(event,overrideHandle){
var that=this;

if(this.reverting){
return false;
}

if(this.options.disabled||this.options.type=='static')return false;


this._refreshItems(event);


var currentItem=null,self=this,nodes=$(event.target).parents().each(function(){
if($.data(this,that.widgetName+'-item')==self){
currentItem=$(this);
return false;
}
});
if($.data(event.target,that.widgetName+'-item')==self)currentItem=$(event.target);

if(!currentItem)return false;
if(this.options.handle&&!overrideHandle){
var validHandle=false;

$(this.options.handle,currentItem).find("*").andSelf().each(function(){if(this==event.target)validHandle=true;});
if(!validHandle)return false;
}

this.currentItem=currentItem;
this._removeCurrentsFromItems();
return true;

},

_mouseStart:function(event,overrideHandle,noActivation){

var o=this.options,self=this;
this.currentContainer=this;


this.refreshPositions();


this.helper=this._createHelper(event);


this._cacheHelperProportions();







this._cacheMargins();


this.scrollParent=this.helper.scrollParent();


this.offset=this.currentItem.offset();
this.offset={
top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left
};

$.extend(this.offset,{
click:{
left:event.pageX-this.offset.left,
top:event.pageY-this.offset.top
},
parent:this._getParentOffset(),
relative:this._getRelativeOffset()
});



this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");


this.originalPosition=this._generatePosition(event);
this.originalPageX=event.pageX;
this.originalPageY=event.pageY;


(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));


this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};


if(this.helper[0]!=this.currentItem[0]){
this.currentItem.hide();
}


this._createPlaceholder();


if(o.containment)
this._setContainment();

if(o.cursor){
if($('body').css("cursor"))this._storedCursor=$('body').css("cursor");
$('body').css("cursor",o.cursor);
}

if(o.opacity){
if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");
this.helper.css("opacity",o.opacity);
}

if(o.zIndex){
if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");
this.helper.css("zIndex",o.zIndex);
}


if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!='HTML')
this.overflowOffset=this.scrollParent.offset();


this._trigger("start",event,this._uiHash());


if(!this._preserveHelperProportions)
this._cacheHelperProportions();



if(!noActivation){
for(var i=this.containers.length-1;i>=0;i--){this.containers[i]._trigger("activate",event,self._uiHash(this));}
}


if($.ui.ddmanager)
$.ui.ddmanager.current=this;

if($.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(this,event);

this.dragging=true;

this.helper.addClass("ui-sortable-helper");
this._mouseDrag(event);
return true;

},

_mouseDrag:function(event){


this.position=this._generatePosition(event);
this.positionAbs=this._convertPositionTo("absolute");

if(!this.lastPositionAbs){
this.lastPositionAbs=this.positionAbs;
}


if(this.options.scroll){
var o=this.options,scrolled=false;
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!='HTML'){

if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-event.pageY<o.scrollSensitivity)
this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop+o.scrollSpeed;
else if(event.pageY-this.overflowOffset.top<o.scrollSensitivity)
this.scrollParent[0].scrollTop=scrolled=this.scrollParent[0].scrollTop-o.scrollSpeed;

if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-event.pageX<o.scrollSensitivity)
this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft+o.scrollSpeed;
else if(event.pageX-this.overflowOffset.left<o.scrollSensitivity)
this.scrollParent[0].scrollLeft=scrolled=this.scrollParent[0].scrollLeft-o.scrollSpeed;

}else{

if(event.pageY-$(document).scrollTop()<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()-o.scrollSpeed);
else if($(window).height()-(event.pageY-$(document).scrollTop())<o.scrollSensitivity)
scrolled=$(document).scrollTop($(document).scrollTop()+o.scrollSpeed);

if(event.pageX-$(document).scrollLeft()<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()-o.scrollSpeed);
else if($(window).width()-(event.pageX-$(document).scrollLeft())<o.scrollSensitivity)
scrolled=$(document).scrollLeft($(document).scrollLeft()+o.scrollSpeed);

}

if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour)
$.ui.ddmanager.prepareOffsets(this,event);
}


this.positionAbs=this._convertPositionTo("absolute");


if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+'px';
if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+'px';


for(var i=this.items.length-1;i>=0;i--){


var item=this.items[i],itemElement=item.item[0],intersection=this._intersectsWithPointer(item);
if(!intersection)continue;

if(itemElement!=this.currentItem[0]
&&this.placeholder[intersection==1?"next":"prev"]()[0]!=itemElement
&&!$.ui.contains(this.placeholder[0],itemElement)
&&(this.options.type=='semi-dynamic'?!$.ui.contains(this.element[0],itemElement):true)

){

this.direction=intersection==1?"down":"up";

if(this.options.tolerance=="pointer"||this._intersectsWithSides(item)){
this._rearrange(event,item);
}else{
break;
}

this._trigger("change",event,this._uiHash());
break;
}
}


this._contactContainers(event);


if($.ui.ddmanager)$.ui.ddmanager.drag(this,event);


this._trigger('sort',event,this._uiHash());

this.lastPositionAbs=this.positionAbs;
return false;

},

_mouseStop:function(event,noPropagation){

if(!event)return;


if($.ui.ddmanager&&!this.options.dropBehaviour)
$.ui.ddmanager.drop(this,event);

if(this.options.revert){
var self=this;
var cur=self.placeholder.offset();

self.reverting=true;

$(this.helper).animate({
left:cur.left-this.offset.parent.left-self.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),
top:cur.top-this.offset.parent.top-self.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)
},parseInt(this.options.revert,10)||500,function(){
self._clear(event);
});
}else{
this._clear(event,noPropagation);
}

return false;

},

cancel:function(){

var self=this;

if(this.dragging){

this._mouseUp({target:null});

if(this.options.helper=="original")
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
else
this.currentItem.show();


for(var i=this.containers.length-1;i>=0;i--){
this.containers[i]._trigger("deactivate",null,self._uiHash(this));
if(this.containers[i].containerCache.over){
this.containers[i]._trigger("out",null,self._uiHash(this));
this.containers[i].containerCache.over=0;
}
}

}

if(this.placeholder){

if(this.placeholder[0].parentNode)this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode)this.helper.remove();

$.extend(this,{
helper:null,
dragging:false,
reverting:false,
_noFinalSort:null
});

if(this.domPosition.prev){
$(this.domPosition.prev).after(this.currentItem);
}else{
$(this.domPosition.parent).prepend(this.currentItem);
}
}

return this;

},

serialize:function(o){

var items=this._getItemsAsjQuery(o&&o.connected);
var str=[];o=o||{};

$(items).each(function(){
var res=($(o.item||this).attr(o.attribute||'id')||'').match(o.expression||(/(.+)[-=_](.+)/));
if(res)str.push((o.key||res[1]+'[]')+'='+(o.key&&o.expression?res[1]:res[2]));
});

if(!str.length&&o.key){
str.push(o.key+'=');
}

return str.join('&');

},

toArray:function(o){

var items=this._getItemsAsjQuery(o&&o.connected);
var ret=[];o=o||{};

items.each(function(){ret.push($(o.item||this).attr(o.attribute||'id')||'');});
return ret;

},


_intersectsWith:function(item){

var x1=this.positionAbs.left,
x2=x1+this.helperProportions.width,
y1=this.positionAbs.top,
y2=y1+this.helperProportions.height;

var l=item.left,
r=l+item.width,
t=item.top,
b=t+item.height;

var dyClick=this.offset.click.top,
dxClick=this.offset.click.left;

var isOverElement=(y1+dyClick)>t&&(y1+dyClick)<b&&(x1+dxClick)>l&&(x1+dxClick)<r;

if(this.options.tolerance=="pointer"
||this.options.forcePointerForContainers
||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?'width':'height']>item[this.floating?'width':'height'])
){
return isOverElement;
}else{

return(l<x1+(this.helperProportions.width/2)
&&x2-(this.helperProportions.width/2)<r
&&t<y1+(this.helperProportions.height/2)
&&y2-(this.helperProportions.height/2)<b);

}
},

_intersectsWithPointer:function(item){

var isOverElementHeight=(this.options.axis==='x')||$.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,item.top,item.height),
isOverElementWidth=(this.options.axis==='y')||$.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,item.left,item.width),
isOverElement=isOverElementHeight&&isOverElementWidth,
verticalDirection=this._getDragVerticalDirection(),
horizontalDirection=this._getDragHorizontalDirection();

if(!isOverElement)
return false;

return this.floating?
(((horizontalDirection&&horizontalDirection=="right")||verticalDirection=="down")?2:1)
:(verticalDirection&&(verticalDirection=="down"?2:1));

},

_intersectsWithSides:function(item){

var isOverBottomHalf=$.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,item.top+(item.height/2),item.height),
isOverRightHalf=$.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,item.left+(item.width/2),item.width),
verticalDirection=this._getDragVerticalDirection(),
horizontalDirection=this._getDragHorizontalDirection();

if(this.floating&&horizontalDirection){
return((horizontalDirection=="right"&&isOverRightHalf)||(horizontalDirection=="left"&&!isOverRightHalf));
}else{
return verticalDirection&&((verticalDirection=="down"&&isOverBottomHalf)||(verticalDirection=="up"&&!isOverBottomHalf));
}

},

_getDragVerticalDirection:function(){
var delta=this.positionAbs.top-this.lastPositionAbs.top;
return delta!=0&&(delta>0?"down":"up");
},

_getDragHorizontalDirection:function(){
var delta=this.positionAbs.left-this.lastPositionAbs.left;
return delta!=0&&(delta>0?"right":"left");
},

refresh:function(event){
this._refreshItems(event);
this.refreshPositions();
return this;
},

_connectWith:function(){
var options=this.options;
return options.connectWith.constructor==String
?[options.connectWith]
:options.connectWith;
},

_getItemsAsjQuery:function(connected){

var self=this;
var items=[];
var queries=[];
var connectWith=this._connectWith();

if(connectWith&&connected){
for(var i=connectWith.length-1;i>=0;i--){
var cur=$(connectWith[i]);
for(var j=cur.length-1;j>=0;j--){
var inst=$.data(cur[j],this.widgetName);
if(inst&&inst!=this&&!inst.options.disabled){
queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element):$(inst.options.items,inst.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'),inst]);
}
};
};
}

queries.push([$.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):$(this.options.items,this.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'),this]);

for(var i=queries.length-1;i>=0;i--){
queries[i][0].each(function(){
items.push(this);
});
};

return $(items);

},

_removeCurrentsFromItems:function(){

var list=this.currentItem.find(":data("+this.widgetName+"-item)");

for(var i=0;i<this.items.length;i++){

for(var j=0;j<list.length;j++){
if(list[j]==this.items[i].item[0])
this.items.splice(i,1);
};

};

},

_refreshItems:function(event){

this.items=[];
this.containers=[this];
var items=this.items;
var self=this;
var queries=[[$.isFunction(this.options.items)?this.options.items.call(this.element[0],event,{item:this.currentItem}):$(this.options.items,this.element),this]];
var connectWith=this._connectWith();

if(connectWith&&this.ready){
for(var i=connectWith.length-1;i>=0;i--){
var cur=$(connectWith[i]);
for(var j=cur.length-1;j>=0;j--){
var inst=$.data(cur[j],this.widgetName);
if(inst&&inst!=this&&!inst.options.disabled){
queries.push([$.isFunction(inst.options.items)?inst.options.items.call(inst.element[0],event,{item:this.currentItem}):$(inst.options.items,inst.element),inst]);
this.containers.push(inst);
}
};
};
}

for(var i=queries.length-1;i>=0;i--){
var targetData=queries[i][1];
var _queries=queries[i][0];

for(var j=0,queriesLength=_queries.length;j<queriesLength;j++){
var item=$(_queries[j]);

item.data(this.widgetName+'-item',targetData);

items.push({
item:item,
instance:targetData,
width:0,height:0,
left:0,top:0
});
};
};

},

refreshPositions:function(fast){


if(this.offsetParent&&this.helper){
this.offset.parent=this._getParentOffset();
}

for(var i=this.items.length-1;i>=0;i--){
var item=this.items[i];


if(item.instance!=this.currentContainer&&this.currentContainer&&item.item[0]!=this.currentItem[0])
continue;

var t=this.options.toleranceElement?$(this.options.toleranceElement,item.item):item.item;

if(!fast){
item.width=t.outerWidth();
item.height=t.outerHeight();
}

var p=t.offset();
item.left=p.left;
item.top=p.top;
};

if(this.options.custom&&this.options.custom.refreshContainers){
this.options.custom.refreshContainers.call(this);
}else{
for(var i=this.containers.length-1;i>=0;i--){
var p=this.containers[i].element.offset();
this.containers[i].containerCache.left=p.left;
this.containers[i].containerCache.top=p.top;
this.containers[i].containerCache.width=this.containers[i].element.outerWidth();
this.containers[i].containerCache.height=this.containers[i].element.outerHeight();
};
}

return this;
},

_createPlaceholder:function(that){

var self=that||this,o=self.options;

if(!o.placeholder||o.placeholder.constructor==String){
var className=o.placeholder;
o.placeholder={
element:function(){

var el=$(document.createElement(self.currentItem[0].nodeName))
.addClass(className||self.currentItem[0].className+" ui-sortable-placeholder")
.removeClass("ui-sortable-helper")[0];

if(!className)
el.style.visibility="hidden";

return el;
},
update:function(container,p){



if(className&&!o.forcePlaceholderSize)return;


if(!p.height()){p.height(self.currentItem.innerHeight()-parseInt(self.currentItem.css('paddingTop')||0,10)-parseInt(self.currentItem.css('paddingBottom')||0,10));};
if(!p.width()){p.width(self.currentItem.innerWidth()-parseInt(self.currentItem.css('paddingLeft')||0,10)-parseInt(self.currentItem.css('paddingRight')||0,10));};
}
};
}


self.placeholder=$(o.placeholder.element.call(self.element,self.currentItem));


self.currentItem.after(self.placeholder);


o.placeholder.update(self,self.placeholder);

},

_contactContainers:function(event){


var innermostContainer=null,innermostIndex=null;


for(var i=this.containers.length-1;i>=0;i--){


if($.ui.contains(this.currentItem[0],this.containers[i].element[0]))
continue;

if(this._intersectsWith(this.containers[i].containerCache)){


if(innermostContainer&&$.ui.contains(this.containers[i].element[0],innermostContainer.element[0]))
continue;

innermostContainer=this.containers[i];
innermostIndex=i;

}else{

if(this.containers[i].containerCache.over){
this.containers[i]._trigger("out",event,this._uiHash(this));
this.containers[i].containerCache.over=0;
}
}

}


if(!innermostContainer)return;


if(this.containers.length===1){
this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));
this.containers[innermostIndex].containerCache.over=1;
}else if(this.currentContainer!=this.containers[innermostIndex]){


var dist=10000;var itemWithLeastDistance=null;var base=this.positionAbs[this.containers[innermostIndex].floating?'left':'top'];
for(var j=this.items.length-1;j>=0;j--){
if(!$.ui.contains(this.containers[innermostIndex].element[0],this.items[j].item[0]))continue;
var cur=this.containers[innermostIndex].floating?this.items[j].item.offset().left:this.items[j].item.offset().top;
if(Math.abs(cur-base)<dist){
dist=Math.abs(cur-base);itemWithLeastDistance=this.items[j];
this.direction=(cur-base>0)?'down':'up';
}
}

if(!itemWithLeastDistance&&!this.options.dropOnEmpty)
return;

this.currentContainer=this.containers[innermostIndex];
itemWithLeastDistance?this._rearrange(event,itemWithLeastDistance,null,true):this._rearrange(event,null,this.containers[innermostIndex].element,true);
this._trigger("change",event,this._uiHash());
this.containers[innermostIndex]._trigger("change",event,this._uiHash(this));


this.options.placeholder.update(this.currentContainer,this.placeholder);

this.containers[innermostIndex]._trigger("over",event,this._uiHash(this));
this.containers[innermostIndex].containerCache.over=1;
}


},

_createHelper:function(event){

var o=this.options;
var helper=$.isFunction(o.helper)?$(o.helper.apply(this.element[0],[event,this.currentItem])):(o.helper=='clone'?this.currentItem.clone():this.currentItem);

if(!helper.parents('body').length)
$(o.appendTo!='parent'?o.appendTo:this.currentItem[0].parentNode)[0].appendChild(helper[0]);

if(helper[0]==this.currentItem[0])
this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};

if(helper[0].style.width==''||o.forceHelperSize)helper.width(this.currentItem.width());
if(helper[0].style.height==''||o.forceHelperSize)helper.height(this.currentItem.height());

return helper;

},

_adjustOffsetFromHelper:function(obj){
if(typeof obj=='string'){
obj=obj.split(' ');
}
if($.isArray(obj)){
obj={left:+obj[0],top:+obj[1]||0};
}
if('left'in obj){
this.offset.click.left=obj.left+this.margins.left;
}
if('right'in obj){
this.offset.click.left=this.helperProportions.width-obj.right+this.margins.left;
}
if('top'in obj){
this.offset.click.top=obj.top+this.margins.top;
}
if('bottom'in obj){
this.offset.click.top=this.helperProportions.height-obj.bottom+this.margins.top;
}
},

_getParentOffset:function(){



this.offsetParent=this.helper.offsetParent();
var po=this.offsetParent.offset();





if(this.cssPosition=='absolute'&&this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0])){
po.left+=this.scrollParent.scrollLeft();
po.top+=this.scrollParent.scrollTop();
}

if((this.offsetParent[0]==document.body)
||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=='html'&&$.browser.msie))
po={top:0,left:0};

return{
top:po.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),
left:po.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)
};

},

_getRelativeOffset:function(){

if(this.cssPosition=="relative"){
var p=this.currentItem.position();
return{
top:p.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),
left:p.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()
};
}else{
return{top:0,left:0};
}

},

_cacheMargins:function(){
this.margins={
left:(parseInt(this.currentItem.css("marginLeft"),10)||0),
top:(parseInt(this.currentItem.css("marginTop"),10)||0)
};
},

_cacheHelperProportions:function(){
this.helperProportions={
width:this.helper.outerWidth(),
height:this.helper.outerHeight()
};
},

_setContainment:function(){

var o=this.options;
if(o.containment=='parent')o.containment=this.helper[0].parentNode;
if(o.containment=='document'||o.containment=='window')this.containment=[
0-this.offset.relative.left-this.offset.parent.left,
0-this.offset.relative.top-this.offset.parent.top,
$(o.containment=='document'?document:window).width()-this.helperProportions.width-this.margins.left,
($(o.containment=='document'?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top
];

if(!(/^(document|window|parent)$/).test(o.containment)){
var ce=$(o.containment)[0];
var co=$(o.containment).offset();
var over=($(ce).css("overflow")!='hidden');

this.containment=[
co.left+(parseInt($(ce).css("borderLeftWidth"),10)||0)+(parseInt($(ce).css("paddingLeft"),10)||0)-this.margins.left,
co.top+(parseInt($(ce).css("borderTopWidth"),10)||0)+(parseInt($(ce).css("paddingTop"),10)||0)-this.margins.top,
co.left+(over?Math.max(ce.scrollWidth,ce.offsetWidth):ce.offsetWidth)-(parseInt($(ce).css("borderLeftWidth"),10)||0)-(parseInt($(ce).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,
co.top+(over?Math.max(ce.scrollHeight,ce.offsetHeight):ce.offsetHeight)-(parseInt($(ce).css("borderTopWidth"),10)||0)-(parseInt($(ce).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top
];
}

},

_convertPositionTo:function(d,pos){

if(!pos)pos=this.position;
var mod=d=="absolute"?1:-1;
var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);

return{
top:(
pos.top
+this.offset.relative.top*mod
+this.offset.parent.top*mod
-($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop()))*mod)
),
left:(
pos.left
+this.offset.relative.left*mod
+this.offset.parent.left*mod
-($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft())*mod)
)
};

},

_generatePosition:function(event){

var o=this.options,scroll=this.cssPosition=='absolute'&&!(this.scrollParent[0]!=document&&$.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,scrollIsRootNode=(/(html|body)/i).test(scroll[0].tagName);





if(this.cssPosition=='relative'&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){
this.offset.relative=this._getRelativeOffset();
}

var pageX=event.pageX;
var pageY=event.pageY;






if(this.originalPosition){

if(this.containment){
if(event.pageX-this.offset.click.left<this.containment[0])pageX=this.containment[0]+this.offset.click.left;
if(event.pageY-this.offset.click.top<this.containment[1])pageY=this.containment[1]+this.offset.click.top;
if(event.pageX-this.offset.click.left>this.containment[2])pageX=this.containment[2]+this.offset.click.left;
if(event.pageY-this.offset.click.top>this.containment[3])pageY=this.containment[3]+this.offset.click.top;
}

if(o.grid){
var top=this.originalPageY+Math.round((pageY-this.originalPageY)/o.grid[1])*o.grid[1];
pageY=this.containment?(!(top-this.offset.click.top<this.containment[1]||top-this.offset.click.top>this.containment[3])?top:(!(top-this.offset.click.top<this.containment[1])?top-o.grid[1]:top+o.grid[1])):top;

var left=this.originalPageX+Math.round((pageX-this.originalPageX)/o.grid[0])*o.grid[0];
pageX=this.containment?(!(left-this.offset.click.left<this.containment[0]||left-this.offset.click.left>this.containment[2])?left:(!(left-this.offset.click.left<this.containment[0])?left-o.grid[0]:left+o.grid[0])):left;
}

}

return{
top:(
pageY
-this.offset.click.top
-this.offset.relative.top
-this.offset.parent.top
+($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollTop():(scrollIsRootNode?0:scroll.scrollTop())))
),
left:(
pageX
-this.offset.click.left
-this.offset.relative.left
-this.offset.parent.left
+($.browser.safari&&this.cssPosition=='fixed'?0:(this.cssPosition=='fixed'?-this.scrollParent.scrollLeft():scrollIsRootNode?0:scroll.scrollLeft()))
)
};

},

_rearrange:function(event,i,a,hardRefresh){

a?a[0].appendChild(this.placeholder[0]):i.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=='down'?i.item[0]:i.item[0].nextSibling));






this.counter=this.counter?++this.counter:1;
var self=this,counter=this.counter;

window.setTimeout(function(){
if(counter==self.counter)self.refreshPositions(!hardRefresh);
},0);

},

_clear:function(event,noPropagation){

this.reverting=false;


var delayedTriggers=[],self=this;



if(!this._noFinalSort&&this.currentItem.parent().length)this.placeholder.before(this.currentItem);
this._noFinalSort=null;

if(this.helper[0]==this.currentItem[0]){
for(var i in this._storedCSS){
if(this._storedCSS[i]=='auto'||this._storedCSS[i]=='static')this._storedCSS[i]='';
}
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
}else{
this.currentItem.show();
}

if(this.fromOutside&&!noPropagation)delayedTriggers.push(function(event){this._trigger("receive",event,this._uiHash(this.fromOutside));});
if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!noPropagation)delayedTriggers.push(function(event){this._trigger("update",event,this._uiHash());});
if(!$.ui.contains(this.element[0],this.currentItem[0])){
if(!noPropagation)delayedTriggers.push(function(event){this._trigger("remove",event,this._uiHash());});
for(var i=this.containers.length-1;i>=0;i--){
if($.ui.contains(this.containers[i].element[0],this.currentItem[0])&&!noPropagation){
delayedTriggers.push((function(c){return function(event){c._trigger("receive",event,this._uiHash(this));};}).call(this,this.containers[i]));
delayedTriggers.push((function(c){return function(event){c._trigger("update",event,this._uiHash(this));};}).call(this,this.containers[i]));
}
};
};


for(var i=this.containers.length-1;i>=0;i--){
if(!noPropagation)delayedTriggers.push((function(c){return function(event){c._trigger("deactivate",event,this._uiHash(this));};}).call(this,this.containers[i]));
if(this.containers[i].containerCache.over){
delayedTriggers.push((function(c){return function(event){c._trigger("out",event,this._uiHash(this));};}).call(this,this.containers[i]));
this.containers[i].containerCache.over=0;
}
}


if(this._storedCursor)$('body').css("cursor",this._storedCursor);
if(this._storedOpacity)this.helper.css("opacity",this._storedOpacity);
if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=='auto'?'':this._storedZIndex);

this.dragging=false;
if(this.cancelHelperRemoval){
if(!noPropagation){
this._trigger("beforeStop",event,this._uiHash());
for(var i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);};
this._trigger("stop",event,this._uiHash());
}
return false;
}

if(!noPropagation)this._trigger("beforeStop",event,this._uiHash());


this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

if(this.helper[0]!=this.currentItem[0])this.helper.remove();this.helper=null;

if(!noPropagation){
for(var i=0;i<delayedTriggers.length;i++){delayedTriggers[i].call(this,event);};
this._trigger("stop",event,this._uiHash());
}

this.fromOutside=false;
return true;

},

_trigger:function(){
if($.Widget.prototype._trigger.apply(this,arguments)===false){
this.cancel();
}
},

_uiHash:function(inst){
var self=inst||this;
return{
helper:self.helper,
placeholder:self.placeholder||$([]),
position:self.position,
originalPosition:self.originalPosition,
offset:self.positionAbs,
item:self.currentItem,
sender:inst?inst.element:null
};
}

});

$.extend($.ui.sortable,{
version:"1.8.21"
});

})(jQuery);/*!
 * jQuery UI Accordion 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.widget.js
 */

(function($,undefined){

$.widget("ui.accordion",{
options:{
active:0,
animated:"slide",
autoHeight:true,
clearStyle:false,
collapsible:false,
event:"click",
fillSpace:false,
header:"> li > :first-child,> :not(li):even",
icons:{
header:"ui-icon-triangle-1-e",
headerSelected:"ui-icon-triangle-1-s"
},
navigation:false,
navigationFilter:function(){
return this.href.toLowerCase()===location.href.toLowerCase();
}
},

_create:function(){
var self=this,
options=self.options;

self.running=0;

self.element
.addClass("ui-accordion ui-widget ui-helper-reset")


.children("li")
.addClass("ui-accordion-li-fix");

self.headers=self.element.find(options.header)
.addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all")
.bind("mouseenter.accordion",function(){
if(options.disabled){
return;
}
$(this).addClass("ui-state-hover");
})
.bind("mouseleave.accordion",function(){
if(options.disabled){
return;
}
$(this).removeClass("ui-state-hover");
})
.bind("focus.accordion",function(){
if(options.disabled){
return;
}
$(this).addClass("ui-state-focus");
})
.bind("blur.accordion",function(){
if(options.disabled){
return;
}
$(this).removeClass("ui-state-focus");
});

self.headers.next()
.addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");

if(options.navigation){
var current=self.element.find("a").filter(options.navigationFilter).eq(0);
if(current.length){
var header=current.closest(".ui-accordion-header");
if(header.length){

self.active=header;
}else{

self.active=current.closest(".ui-accordion-content").prev();
}
}
}

self.active=self._findActive(self.active||options.active)
.addClass("ui-state-default ui-state-active")
.toggleClass("ui-corner-all")
.toggleClass("ui-corner-top");
self.active.next().addClass("ui-accordion-content-active");

self._createIcons();
self.resize();


self.element.attr("role","tablist");

self.headers
.attr("role","tab")
.bind("keydown.accordion",function(event){
return self._keydown(event);
})
.next()
.attr("role","tabpanel");

self.headers
.not(self.active||"")
.attr({
"aria-expanded":"false",
"aria-selected":"false",
tabIndex:-1
})
.next()
.hide();


if(!self.active.length){
self.headers.eq(0).attr("tabIndex",0);
}else{
self.active
.attr({
"aria-expanded":"true",
"aria-selected":"true",
tabIndex:0
});
}


if(!$.browser.safari){
self.headers.find("a").attr("tabIndex",-1);
}

if(options.event){
self.headers.bind(options.event.split(" ").join(".accordion ")+".accordion",function(event){
self._clickHandler.call(self,event,this);
event.preventDefault();
});
}
},

_createIcons:function(){
var options=this.options;
if(options.icons){
$("<span></span>")
.addClass("ui-icon "+options.icons.header)
.prependTo(this.headers);
this.active.children(".ui-icon")
.toggleClass(options.icons.header)
.toggleClass(options.icons.headerSelected);
this.element.addClass("ui-accordion-icons");
}
},

_destroyIcons:function(){
this.headers.children(".ui-icon").remove();
this.element.removeClass("ui-accordion-icons");
},

destroy:function(){
var options=this.options;

this.element
.removeClass("ui-accordion ui-widget ui-helper-reset")
.removeAttr("role");

this.headers
.unbind(".accordion")
.removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top")
.removeAttr("role")
.removeAttr("aria-expanded")
.removeAttr("aria-selected")
.removeAttr("tabIndex");

this.headers.find("a").removeAttr("tabIndex");
this._destroyIcons();
var contents=this.headers.next()
.css("display","")
.removeAttr("role")
.removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
if(options.autoHeight||options.fillHeight){
contents.css("height","");
}

return $.Widget.prototype.destroy.call(this);
},

_setOption:function(key,value){
$.Widget.prototype._setOption.apply(this,arguments);

if(key=="active"){
this.activate(value);
}
if(key=="icons"){
this._destroyIcons();
if(value){
this._createIcons();
}
}


if(key=="disabled"){
this.headers.add(this.headers.next())
[value?"addClass":"removeClass"](
"ui-accordion-disabled ui-state-disabled");
}
},

_keydown:function(event){
if(this.options.disabled||event.altKey||event.ctrlKey){
return;
}

var keyCode=$.ui.keyCode,
length=this.headers.length,
currentIndex=this.headers.index(event.target),
toFocus=false;

switch(event.keyCode){
case keyCode.RIGHT:
case keyCode.DOWN:
toFocus=this.headers[(currentIndex+1)%length];
break;
case keyCode.LEFT:
case keyCode.UP:
toFocus=this.headers[(currentIndex-1+length)%length];
break;
case keyCode.SPACE:
case keyCode.ENTER:
this._clickHandler({target:event.target},event.target);
event.preventDefault();
}

if(toFocus){
$(event.target).attr("tabIndex",-1);
$(toFocus).attr("tabIndex",0);
toFocus.focus();
return false;
}

return true;
},

resize:function(){
var options=this.options,
maxHeight;

if(options.fillSpace){
if($.browser.msie){
var defOverflow=this.element.parent().css("overflow");
this.element.parent().css("overflow","hidden");
}
maxHeight=this.element.parent().height();
if($.browser.msie){
this.element.parent().css("overflow",defOverflow);
}

this.headers.each(function(){
maxHeight-=$(this).outerHeight(true);
});

this.headers.next()
.each(function(){
$(this).height(Math.max(0,maxHeight-
$(this).innerHeight()+$(this).height()));
})
.css("overflow","auto");
}else if(options.autoHeight){
maxHeight=0;
this.headers.next()
.each(function(){
maxHeight=Math.max(maxHeight,$(this).height("").height());
})
.height(maxHeight);
}

return this;
},

activate:function(index){

this.options.active=index;

var active=this._findActive(index)[0];
this._clickHandler({target:active},active);

return this;
},

_findActive:function(selector){
return selector
?typeof selector==="number"
?this.headers.filter(":eq("+selector+")")
:this.headers.not(this.headers.not(selector))
:selector===false
?$([])
:this.headers.filter(":eq(0)");
},


_clickHandler:function(event,target){
var options=this.options;
if(options.disabled){
return;
}


if(!event.target){
if(!options.collapsible){
return;
}
this.active
.removeClass("ui-state-active ui-corner-top")
.addClass("ui-state-default ui-corner-all")
.children(".ui-icon")
.removeClass(options.icons.headerSelected)
.addClass(options.icons.header);
this.active.next().addClass("ui-accordion-content-active");
var toHide=this.active.next(),
data={
options:options,
newHeader:$([]),
oldHeader:options.active,
newContent:$([]),
oldContent:toHide
},
toShow=(this.active=$([]));
this._toggle(toShow,toHide,data);
return;
}


var clicked=$(event.currentTarget||target),
clickedIsActive=clicked[0]===this.active[0];



options.active=options.collapsible&&clickedIsActive?
false:
this.headers.index(clicked);


if(this.running||(!options.collapsible&&clickedIsActive)){
return;
}


var active=this.active,
toShow=clicked.next(),
toHide=this.active.next(),
data={
options:options,
newHeader:clickedIsActive&&options.collapsible?$([]):clicked,
oldHeader:this.active,
newContent:clickedIsActive&&options.collapsible?$([]):toShow,
oldContent:toHide
},
down=this.headers.index(this.active[0])>this.headers.index(clicked[0]);



this.active=clickedIsActive?$([]):clicked;
this._toggle(toShow,toHide,data,clickedIsActive,down);


active
.removeClass("ui-state-active ui-corner-top")
.addClass("ui-state-default ui-corner-all")
.children(".ui-icon")
.removeClass(options.icons.headerSelected)
.addClass(options.icons.header);
if(!clickedIsActive){
clicked
.removeClass("ui-state-default ui-corner-all")
.addClass("ui-state-active ui-corner-top")
.children(".ui-icon")
.removeClass(options.icons.header)
.addClass(options.icons.headerSelected);
clicked
.next()
.addClass("ui-accordion-content-active");
}

return;
},

_toggle:function(toShow,toHide,data,clickedIsActive,down){
var self=this,
options=self.options;

self.toShow=toShow;
self.toHide=toHide;
self.data=data;

var complete=function(){
if(!self){
return;
}
return self._completed.apply(self,arguments);
};


self._trigger("changestart",null,self.data);


self.running=toHide.size()===0?toShow.size():toHide.size();

if(options.animated){
var animOptions={};

if(options.collapsible&&clickedIsActive){
animOptions={
toShow:$([]),
toHide:toHide,
complete:complete,
down:down,
autoHeight:options.autoHeight||options.fillSpace
};
}else{
animOptions={
toShow:toShow,
toHide:toHide,
complete:complete,
down:down,
autoHeight:options.autoHeight||options.fillSpace
};
}

if(!options.proxied){
options.proxied=options.animated;
}

if(!options.proxiedDuration){
options.proxiedDuration=options.duration;
}

options.animated=$.isFunction(options.proxied)?
options.proxied(animOptions):
options.proxied;

options.duration=$.isFunction(options.proxiedDuration)?
options.proxiedDuration(animOptions):
options.proxiedDuration;

var animations=$.ui.accordion.animations,
duration=options.duration,
easing=options.animated;

if(easing&&!animations[easing]&&!$.easing[easing]){
easing="slide";
}
if(!animations[easing]){
animations[easing]=function(options){
this.slide(options,{
easing:easing,
duration:duration||700
});
};
}

animations[easing](animOptions);
}else{
if(options.collapsible&&clickedIsActive){
toShow.toggle();
}else{
toHide.hide();
toShow.show();
}

complete(true);
}


toHide.prev()
.attr({
"aria-expanded":"false",
"aria-selected":"false",
tabIndex:-1
})
.blur();
toShow.prev()
.attr({
"aria-expanded":"true",
"aria-selected":"true",
tabIndex:0
})
.focus();
},

_completed:function(cancel){
this.running=cancel?0:--this.running;
if(this.running){
return;
}

if(this.options.clearStyle){
this.toShow.add(this.toHide).css({
height:"",
overflow:""
});
}


this.toHide.removeClass("ui-accordion-content-active");

if(this.toHide.length){
this.toHide.parent()[0].className=this.toHide.parent()[0].className;
}

this._trigger("change",null,this.data);
}
});

$.extend($.ui.accordion,{
version:"1.8.21",
animations:{
slide:function(options,additions){
options=$.extend({
easing:"swing",
duration:300
},options,additions);
if(!options.toHide.size()){
options.toShow.animate({
height:"show",
paddingTop:"show",
paddingBottom:"show"
},options);
return;
}
if(!options.toShow.size()){
options.toHide.animate({
height:"hide",
paddingTop:"hide",
paddingBottom:"hide"
},options);
return;
}
var overflow=options.toShow.css("overflow"),
percentDone=0,
showProps={},
hideProps={},
fxAttrs=["height","paddingTop","paddingBottom"],
originalWidth;

var s=options.toShow;
originalWidth=s[0].style.width;
s.width(s.parent().width()
-parseFloat(s.css("paddingLeft"))
-parseFloat(s.css("paddingRight"))
-(parseFloat(s.css("borderLeftWidth"))||0)
-(parseFloat(s.css("borderRightWidth"))||0));

$.each(fxAttrs,function(i,prop){
hideProps[prop]="hide";

var parts=(""+$.css(options.toShow[0],prop)).match(/^([\d+-.]+)(.*)$/);
showProps[prop]={
value:parts[1],
unit:parts[2]||"px"
};
});
options.toShow.css({height:0,overflow:"hidden"}).show();
options.toHide
.filter(":hidden")
.each(options.complete)
.end()
.filter(":visible")
.animate(hideProps,{
step:function(now,settings){



if(settings.prop=="height"){
percentDone=(settings.end-settings.start===0)?0:
(settings.now-settings.start)/(settings.end-settings.start);
}

options.toShow[0].style[settings.prop]=
(percentDone*showProps[settings.prop].value)
+showProps[settings.prop].unit;
},
duration:options.duration,
easing:options.easing,
complete:function(){
if(!options.autoHeight){
options.toShow.css("height","");
}
options.toShow.css({
width:originalWidth,
overflow:overflow
});
options.complete();
}
});
},
bounceslide:function(options){
this.slide(options,{
easing:options.down?"easeOutBounce":"swing",
duration:options.down?1000:200
});
}
}
});

})(jQuery);/*!
 * jQuery UI Autocomplete 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.widget.js
 * jquery.ui.position.js
 */

(function($,undefined){


var requestIndex=0;

$.widget("ui.autocomplete",{
options:{
appendTo:"body",
autoFocus:false,
delay:300,
minLength:1,
position:{
my:"left top",
at:"left bottom",
collision:"none"
},
source:null
},

pending:0,

_create:function(){
var self=this,
doc=this.element[0].ownerDocument,
suppressKeyPress;
this.isMultiLine=this.element.is("textarea");

this.element
.addClass("ui-autocomplete-input")
.attr("autocomplete","off")

.attr({
role:"textbox",
"aria-autocomplete":"list",
"aria-haspopup":"true"
})
.bind("keydown.autocomplete",function(event){
if(self.options.disabled||self.element.propAttr("readOnly")){
return;
}

suppressKeyPress=false;
var keyCode=$.ui.keyCode;
switch(event.keyCode){
case keyCode.PAGE_UP:
self._move("previousPage",event);
break;
case keyCode.PAGE_DOWN:
self._move("nextPage",event);
break;
case keyCode.UP:
self._keyEvent("previous",event);
break;
case keyCode.DOWN:
self._keyEvent("next",event);
break;
case keyCode.ENTER:
case keyCode.NUMPAD_ENTER:

if(self.menu.active){


suppressKeyPress=true;
event.preventDefault();
}

case keyCode.TAB:
if(!self.menu.active){
return;
}
self.menu.select(event);
break;
case keyCode.ESCAPE:
self.element.val(self.term);
self.close(event);
break;
default:

clearTimeout(self.searching);
self.searching=setTimeout(function(){

if(self.term!=self.element.val()){
self.selectedItem=null;
self.search(null,event);
}
},self.options.delay);
break;
}
})
.bind("keypress.autocomplete",function(event){
if(suppressKeyPress){
suppressKeyPress=false;
event.preventDefault();
}
})
.bind("focus.autocomplete",function(){
if(self.options.disabled){
return;
}

self.selectedItem=null;
self.previous=self.element.val();
})
.bind("blur.autocomplete",function(event){
if(self.options.disabled){
return;
}

clearTimeout(self.searching);

self.closing=setTimeout(function(){
self.close(event);
self._change(event);
},150);
});
this._initSource();
this.menu=$("<ul></ul>")
.addClass("ui-autocomplete")
.appendTo($(this.options.appendTo||"body",doc)[0])

.mousedown(function(event){




var menuElement=self.menu.element[0];
if(!$(event.target).closest(".ui-menu-item").length){
setTimeout(function(){
$(document).one('mousedown',function(event){
if(event.target!==self.element[0]&&
event.target!==menuElement&&
!$.ui.contains(menuElement,event.target)){
self.close();
}
});
},1);
}


setTimeout(function(){
clearTimeout(self.closing);
},13);
})
.menu({
focus:function(event,ui){
var item=ui.item.data("item.autocomplete");
if(false!==self._trigger("focus",event,{item:item})){

if(/^key/.test(event.originalEvent.type)){
self.element.val(item.value);
}
}
},
selected:function(event,ui){
var item=ui.item.data("item.autocomplete"),
previous=self.previous;


if(self.element[0]!==doc.activeElement){
self.element.focus();
self.previous=previous;



setTimeout(function(){
self.previous=previous;
self.selectedItem=item;
},1);
}

if(false!==self._trigger("select",event,{item:item})){
self.element.val(item.value);
}


self.term=self.element.val();

self.close(event);
self.selectedItem=item;
},
blur:function(event,ui){


if(self.menu.element.is(":visible")&&
(self.element.val()!==self.term)){
self.element.val(self.term);
}
}
})
.zIndex(this.element.zIndex()+1)

.css({top:0,left:0})
.hide()
.data("menu");
if($.fn.bgiframe){
this.menu.element.bgiframe();
}



self.beforeunloadHandler=function(){
self.element.removeAttr("autocomplete");
};
$(window).bind("beforeunload",self.beforeunloadHandler);
},

destroy:function(){
this.element
.removeClass("ui-autocomplete-input")
.removeAttr("autocomplete")
.removeAttr("role")
.removeAttr("aria-autocomplete")
.removeAttr("aria-haspopup");
this.menu.element.remove();
$(window).unbind("beforeunload",this.beforeunloadHandler);
$.Widget.prototype.destroy.call(this);
},

_setOption:function(key,value){
$.Widget.prototype._setOption.apply(this,arguments);
if(key==="source"){
this._initSource();
}
if(key==="appendTo"){
this.menu.element.appendTo($(value||"body",this.element[0].ownerDocument)[0])
}
if(key==="disabled"&&value&&this.xhr){
this.xhr.abort();
}
},

_initSource:function(){
var self=this,
array,
url;
if($.isArray(this.options.source)){
array=this.options.source;
this.source=function(request,response){
response($.ui.autocomplete.filter(array,request.term));
};
}else if(typeof this.options.source==="string"){
url=this.options.source;
this.source=function(request,response){
if(self.xhr){
self.xhr.abort();
}
self.xhr=$.ajax({
url:url,
data:request,
dataType:"json",
success:function(data,status){
response(data);
},
error:function(){
response([]);
}
});
};
}else{
this.source=this.options.source;
}
},

search:function(value,event){
value=value!=null?value:this.element.val();


this.term=this.element.val();

if(value.length<this.options.minLength){
return this.close(event);
}

clearTimeout(this.closing);
if(this._trigger("search",event)===false){
return;
}

return this._search(value);
},

_search:function(value){
this.pending++;
this.element.addClass("ui-autocomplete-loading");

this.source({term:value},this._response());
},

_response:function(){
var that=this,
index=++requestIndex;

return function(content){
if(index===requestIndex){
that.__response(content);
}

that.pending--;
if(!that.pending){
that.element.removeClass("ui-autocomplete-loading");
}
};
},

__response:function(content){
if(!this.options.disabled&&content&&content.length){
content=this._normalize(content);
this._suggest(content);
this._trigger("open");
}else{
this.close();
}
},

close:function(event){
clearTimeout(this.closing);
if(this.menu.element.is(":visible")){
this.menu.element.hide();
this.menu.deactivate();
this._trigger("close",event);
}
},

_change:function(event){
if(this.previous!==this.element.val()){
this._trigger("change",event,{item:this.selectedItem});
}
},

_normalize:function(items){

if(items.length&&items[0].label&&items[0].value){
return items;
}
return $.map(items,function(item){
if(typeof item==="string"){
return{
label:item,
value:item
};
}
return $.extend({
label:item.label||item.value,
value:item.value||item.label
},item);
});
},

_suggest:function(items){
var ul=this.menu.element
.empty()
.zIndex(this.element.zIndex()+1);
this._renderMenu(ul,items);

this.menu.deactivate();
this.menu.refresh();


ul.show();
this._resizeMenu();
ul.position($.extend({
of:this.element
},this.options.position));

if(this.options.autoFocus){
this.menu.next(new $.Event("mouseover"));
}
},

_resizeMenu:function(){
var ul=this.menu.element;
ul.outerWidth(Math.max(


ul.width("").outerWidth()+1,
this.element.outerWidth()
));
},

_renderMenu:function(ul,items){
var self=this;
$.each(items,function(index,item){
self._renderItem(ul,item);
});
},

_renderItem:function(ul,item){
return $("<li></li>")
.data("item.autocomplete",item)
.append($("<a></a>").text(item.label))
.appendTo(ul);
},

_move:function(direction,event){
if(!this.menu.element.is(":visible")){
this.search(null,event);
return;
}
if(this.menu.first()&&/^previous/.test(direction)||
this.menu.last()&&/^next/.test(direction)){
this.element.val(this.term);
this.menu.deactivate();
return;
}
this.menu[direction](event);
},

widget:function(){
return this.menu.element;
},
_keyEvent:function(keyEvent,event){
if(!this.isMultiLine||this.menu.element.is(":visible")){
this._move(keyEvent,event);


event.preventDefault();
}
}
});

$.extend($.ui.autocomplete,{
escapeRegex:function(value){
return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");
},
filter:function(array,term){
var matcher=new RegExp($.ui.autocomplete.escapeRegex(term),"i");
return $.grep(array,function(value){
return matcher.test(value.label||value.value||value);
});
}
});

}(jQuery));


















(function($){

$.widget("ui.menu",{
_create:function(){
var self=this;
this.element
.addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
.attr({
role:"listbox",
"aria-activedescendant":"ui-active-menuitem"
})
.click(function(event){
if(!$(event.target).closest(".ui-menu-item a").length){
return;
}

event.preventDefault();
self.select(event);
});
this.refresh();
},

refresh:function(){
var self=this;


var items=this.element.children("li:not(.ui-menu-item):has(a)")
.addClass("ui-menu-item")
.attr("role","menuitem");

items.children("a")
.addClass("ui-corner-all")
.attr("tabindex",-1)

.mouseenter(function(event){
self.activate(event,$(this).parent());
})
.mouseleave(function(){
self.deactivate();
});
},

activate:function(event,item){
this.deactivate();
if(this.hasScroll()){
var offset=item.offset().top-this.element.offset().top,
scroll=this.element.scrollTop(),
elementHeight=this.element.height();
if(offset<0){
this.element.scrollTop(scroll+offset);
}else if(offset>=elementHeight){
this.element.scrollTop(scroll+offset-elementHeight+item.height());
}
}
this.active=item.eq(0)
.children("a")
.addClass("ui-state-hover")
.attr("id","ui-active-menuitem")
.end();
this._trigger("focus",event,{item:item});
},

deactivate:function(){
if(!this.active){return;}

this.active.children("a")
.removeClass("ui-state-hover")
.removeAttr("id");
this._trigger("blur");
this.active=null;
},

next:function(event){
this.move("next",".ui-menu-item:first",event);
},

previous:function(event){
this.move("prev",".ui-menu-item:last",event);
},

first:function(){
return this.active&&!this.active.prevAll(".ui-menu-item").length;
},

last:function(){
return this.active&&!this.active.nextAll(".ui-menu-item").length;
},

move:function(direction,edge,event){
if(!this.active){
this.activate(event,this.element.children(edge));
return;
}
var next=this.active[direction+"All"](".ui-menu-item").eq(0);
if(next.length){
this.activate(event,next);
}else{
this.activate(event,this.element.children(edge));
}
},


nextPage:function(event){
if(this.hasScroll()){

if(!this.active||this.last()){
this.activate(event,this.element.children(".ui-menu-item:first"));
return;
}
var base=this.active.offset().top,
height=this.element.height(),
result=this.element.children(".ui-menu-item").filter(function(){
var close=$(this).offset().top-base-height+$(this).height();

return close<10&&close>-10;
});


if(!result.length){
result=this.element.children(".ui-menu-item:last");
}
this.activate(event,result);
}else{
this.activate(event,this.element.children(".ui-menu-item")
.filter(!this.active||this.last()?":first":":last"));
}
},


previousPage:function(event){
if(this.hasScroll()){

if(!this.active||this.first()){
this.activate(event,this.element.children(".ui-menu-item:last"));
return;
}

var base=this.active.offset().top,
height=this.element.height(),
result=this.element.children(".ui-menu-item").filter(function(){
var close=$(this).offset().top-base+height-$(this).height();

return close<10&&close>-10;
});


if(!result.length){
result=this.element.children(".ui-menu-item:first");
}
this.activate(event,result);
}else{
this.activate(event,this.element.children(".ui-menu-item")
.filter(!this.active||this.first()?":last":":first"));
}
},

hasScroll:function(){
return this.element.height()<this.element[$.fn.prop?"prop":"attr"]("scrollHeight");
},

select:function(event){
this._trigger("selected",event,{item:this.active});
}
});

}(jQuery));/*!
 * jQuery UI Button 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.widget.js
 */

(function($,undefined){

var lastActive,startXPos,startYPos,clickDragged,
baseClasses="ui-button ui-widget ui-state-default ui-corner-all",
stateClasses="ui-state-hover ui-state-active ",
typeClasses="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
formResetHandler=function(){
var buttons=$(this).find(":ui-button");
setTimeout(function(){
buttons.button("refresh");
},1);
},
radioGroup=function(radio){
var name=radio.name,
form=radio.form,
radios=$([]);
if(name){
if(form){
radios=$(form).find("[name='"+name+"']");
}else{
radios=$("[name='"+name+"']",radio.ownerDocument)
.filter(function(){
return!this.form;
});
}
}
return radios;
};

$.widget("ui.button",{
options:{
disabled:null,
text:true,
label:null,
icons:{
primary:null,
secondary:null
}
},
_create:function(){
this.element.closest("form")
.unbind("reset.button")
.bind("reset.button",formResetHandler);

if(typeof this.options.disabled!=="boolean"){
this.options.disabled=!!this.element.propAttr("disabled");
}else{
this.element.propAttr("disabled",this.options.disabled);
}

this._determineButtonType();
this.hasTitle=!!this.buttonElement.attr("title");

var self=this,
options=this.options,
toggleButton=this.type==="checkbox"||this.type==="radio",
hoverClass="ui-state-hover"+(!toggleButton?" ui-state-active":""),
focusClass="ui-state-focus";

if(options.label===null){
options.label=this.buttonElement.html();
}

this.buttonElement
.addClass(baseClasses)
.attr("role","button")
.bind("mouseenter.button",function(){
if(options.disabled){
return;
}
$(this).addClass("ui-state-hover");
if(this===lastActive){
$(this).addClass("ui-state-active");
}
})
.bind("mouseleave.button",function(){
if(options.disabled){
return;
}
$(this).removeClass(hoverClass);
})
.bind("click.button",function(event){
if(options.disabled){
event.preventDefault();
event.stopImmediatePropagation();
}
});

this.element
.bind("focus.button",function(){

self.buttonElement.addClass(focusClass);
})
.bind("blur.button",function(){
self.buttonElement.removeClass(focusClass);
});

if(toggleButton){
this.element.bind("change.button",function(){
if(clickDragged){
return;
}
self.refresh();
});



this.buttonElement
.bind("mousedown.button",function(event){
if(options.disabled){
return;
}
clickDragged=false;
startXPos=event.pageX;
startYPos=event.pageY;
})
.bind("mouseup.button",function(event){
if(options.disabled){
return;
}
if(startXPos!==event.pageX||startYPos!==event.pageY){
clickDragged=true;
}
});
}

if(this.type==="checkbox"){
this.buttonElement.bind("click.button",function(){
if(options.disabled||clickDragged){
return false;
}
$(this).toggleClass("ui-state-active");
self.buttonElement.attr("aria-pressed",self.element[0].checked);
});
}else if(this.type==="radio"){
this.buttonElement.bind("click.button",function(){
if(options.disabled||clickDragged){
return false;
}
$(this).addClass("ui-state-active");
self.buttonElement.attr("aria-pressed","true");

var radio=self.element[0];
radioGroup(radio)
.not(radio)
.map(function(){
return $(this).button("widget")[0];
})
.removeClass("ui-state-active")
.attr("aria-pressed","false");
});
}else{
this.buttonElement
.bind("mousedown.button",function(){
if(options.disabled){
return false;
}
$(this).addClass("ui-state-active");
lastActive=this;
$(document).one("mouseup",function(){
lastActive=null;
});
})
.bind("mouseup.button",function(){
if(options.disabled){
return false;
}
$(this).removeClass("ui-state-active");
})
.bind("keydown.button",function(event){
if(options.disabled){
return false;
}
if(event.keyCode==$.ui.keyCode.SPACE||event.keyCode==$.ui.keyCode.ENTER){
$(this).addClass("ui-state-active");
}
})
.bind("keyup.button",function(){
$(this).removeClass("ui-state-active");
});

if(this.buttonElement.is("a")){
this.buttonElement.keyup(function(event){
if(event.keyCode===$.ui.keyCode.SPACE){

$(this).click();
}
});
}
}




this._setOption("disabled",options.disabled);
this._resetButton();
},

_determineButtonType:function(){

if(this.element.is(":checkbox")){
this.type="checkbox";
}else if(this.element.is(":radio")){
this.type="radio";
}else if(this.element.is("input")){
this.type="input";
}else{
this.type="button";
}

if(this.type==="checkbox"||this.type==="radio"){


var ancestor=this.element.parents().filter(":last"),
labelSelector="label[for='"+this.element.attr("id")+"']";
this.buttonElement=ancestor.find(labelSelector);
if(!this.buttonElement.length){
ancestor=ancestor.length?ancestor.siblings():this.element.siblings();
this.buttonElement=ancestor.filter(labelSelector);
if(!this.buttonElement.length){
this.buttonElement=ancestor.find(labelSelector);
}
}
this.element.addClass("ui-helper-hidden-accessible");

var checked=this.element.is(":checked");
if(checked){
this.buttonElement.addClass("ui-state-active");
}
this.buttonElement.attr("aria-pressed",checked);
}else{
this.buttonElement=this.element;
}
},

widget:function(){
return this.buttonElement;
},

destroy:function(){
this.element
.removeClass("ui-helper-hidden-accessible");
this.buttonElement
.removeClass(baseClasses+" "+stateClasses+" "+typeClasses)
.removeAttr("role")
.removeAttr("aria-pressed")
.html(this.buttonElement.find(".ui-button-text").html());

if(!this.hasTitle){
this.buttonElement.removeAttr("title");
}

$.Widget.prototype.destroy.call(this);
},

_setOption:function(key,value){
$.Widget.prototype._setOption.apply(this,arguments);
if(key==="disabled"){
if(value){
this.element.propAttr("disabled",true);
}else{
this.element.propAttr("disabled",false);
}
return;
}
this._resetButton();
},

refresh:function(){
var isDisabled=this.element.is(":disabled");
if(isDisabled!==this.options.disabled){
this._setOption("disabled",isDisabled);
}
if(this.type==="radio"){
radioGroup(this.element[0]).each(function(){
if($(this).is(":checked")){
$(this).button("widget")
.addClass("ui-state-active")
.attr("aria-pressed","true");
}else{
$(this).button("widget")
.removeClass("ui-state-active")
.attr("aria-pressed","false");
}
});
}else if(this.type==="checkbox"){
if(this.element.is(":checked")){
this.buttonElement
.addClass("ui-state-active")
.attr("aria-pressed","true");
}else{
this.buttonElement
.removeClass("ui-state-active")
.attr("aria-pressed","false");
}
}
},

_resetButton:function(){
if(this.type==="input"){
if(this.options.label){
this.element.val(this.options.label);
}
return;
}
var buttonElement=this.buttonElement.removeClass(typeClasses),
buttonText=$("<span></span>",this.element[0].ownerDocument)
.addClass("ui-button-text")
.html(this.options.label)
.appendTo(buttonElement.empty())
.text(),
icons=this.options.icons,
multipleIcons=icons.primary&&icons.secondary,
buttonClasses=[];

if(icons.primary||icons.secondary){
if(this.options.text){
buttonClasses.push("ui-button-text-icon"+(multipleIcons?"s":(icons.primary?"-primary":"-secondary")));
}

if(icons.primary){
buttonElement.prepend("<span class='ui-button-icon-primary ui-icon "+icons.primary+"'></span>");
}

if(icons.secondary){
buttonElement.append("<span class='ui-button-icon-secondary ui-icon "+icons.secondary+"'></span>");
}

if(!this.options.text){
buttonClasses.push(multipleIcons?"ui-button-icons-only":"ui-button-icon-only");

if(!this.hasTitle){
buttonElement.attr("title",buttonText);
}
}
}else{
buttonClasses.push("ui-button-text-only");
}
buttonElement.addClass(buttonClasses.join(" "));
}
});

$.widget("ui.buttonset",{
options:{
items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
},

_create:function(){
this.element.addClass("ui-buttonset");
},

_init:function(){
this.refresh();
},

_setOption:function(key,value){
if(key==="disabled"){
this.buttons.button("option",key,value);
}

$.Widget.prototype._setOption.apply(this,arguments);
},

refresh:function(){
var rtl=this.element.css("direction")==="rtl";

this.buttons=this.element.find(this.options.items)
.filter(":ui-button")
.button("refresh")
.end()
.not(":ui-button")
.button()
.end()
.map(function(){
return $(this).button("widget")[0];
})
.removeClass("ui-corner-all ui-corner-left ui-corner-right")
.filter(":first")
.addClass(rtl?"ui-corner-right":"ui-corner-left")
.end()
.filter(":last")
.addClass(rtl?"ui-corner-left":"ui-corner-right")
.end()
.end();
},

destroy:function(){
this.element.removeClass("ui-buttonset");
this.buttons
.map(function(){
return $(this).button("widget")[0];
})
.removeClass("ui-corner-left ui-corner-right")
.end()
.button("destroy");

$.Widget.prototype.destroy.call(this);
}
});

}(jQuery));/*!
 * jQuery UI Dialog 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.widget.js
 *  jquery.ui.button.js
 * jquery.ui.draggable.js
 * jquery.ui.mouse.js
 * jquery.ui.position.js
 * jquery.ui.resizable.js
 */

(function($,undefined){

var uiDialogClasses=
'ui-dialog '+
'ui-widget '+
'ui-widget-content '+
'ui-corner-all ',
sizeRelatedOptions={
buttons:true,
height:true,
maxHeight:true,
maxWidth:true,
minHeight:true,
minWidth:true,
width:true
},
resizableRelatedOptions={
maxHeight:true,
maxWidth:true,
minHeight:true,
minWidth:true
},

attrFn=$.attrFn||{
val:true,
css:true,
html:true,
text:true,
data:true,
width:true,
height:true,
offset:true,
click:true
};

$.widget("ui.dialog",{
options:{
autoOpen:true,
buttons:{},
closeOnEscape:true,
closeText:'close',
dialogClass:'',
draggable:true,
hide:null,
height:'auto',
maxHeight:false,
maxWidth:false,
minHeight:150,
minWidth:150,
modal:false,
position:{
my:'center',
at:'center',
collision:'fit',

using:function(pos){
var topOffset=$(this).css(pos).offset().top;
if(topOffset<0){
$(this).css('top',pos.top-topOffset);
}
}
},
resizable:true,
show:null,
stack:true,
title:'',
width:300,
zIndex:1000
},

_create:function(){
this.originalTitle=this.element.attr('title');

if(typeof this.originalTitle!=="string"){
this.originalTitle="";
}

this.options.title=this.options.title||this.originalTitle;
var self=this,
options=self.options,

title=options.title||'&#160;',
titleId=$.ui.dialog.getTitleId(self.element),

uiDialog=(self.uiDialog=$('<div></div>'))
.appendTo(document.body)
.hide()
.addClass(uiDialogClasses+options.dialogClass)
.css({
zIndex:options.zIndex
})


.attr('tabIndex',-1).css('outline',0).keydown(function(event){
if(options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&
event.keyCode===$.ui.keyCode.ESCAPE){

self.close(event);
event.preventDefault();
}
})
.attr({
role:'dialog',
'aria-labelledby':titleId
})
.mousedown(function(event){
self.moveToTop(false,event);
}),

uiDialogContent=self.element
.show()
.removeAttr('title')
.addClass(
'ui-dialog-content '+
'ui-widget-content')
.appendTo(uiDialog),

uiDialogTitlebar=(self.uiDialogTitlebar=$('<div></div>'))
.addClass(
'ui-dialog-titlebar '+
'ui-widget-header '+
'ui-corner-all '+
'ui-helper-clearfix'
)
.prependTo(uiDialog),

uiDialogTitlebarClose=$('<a href="#"></a>')
.addClass(
'ui-dialog-titlebar-close '+
'ui-corner-all'
)
.attr('role','button')
.hover(
function(){
uiDialogTitlebarClose.addClass('ui-state-hover');
},
function(){
uiDialogTitlebarClose.removeClass('ui-state-hover');
}
)
.focus(function(){
uiDialogTitlebarClose.addClass('ui-state-focus');
})
.blur(function(){
uiDialogTitlebarClose.removeClass('ui-state-focus');
})
.click(function(event){
self.close(event);
return false;
})
.appendTo(uiDialogTitlebar),

uiDialogTitlebarCloseText=(self.uiDialogTitlebarCloseText=$('<span></span>'))
.addClass(
'ui-icon '+
'ui-icon-closethick'
)
.text(options.closeText)
.appendTo(uiDialogTitlebarClose),

uiDialogTitle=$('<span></span>')
.addClass('ui-dialog-title')
.attr('id',titleId)
.html(title)
.prependTo(uiDialogTitlebar);




if($.isFunction(options.beforeclose)&&!$.isFunction(options.beforeClose)){
options.beforeClose=options.beforeclose;
}

uiDialogTitlebar.find("*").add(uiDialogTitlebar).disableSelection();

if(options.draggable&&$.fn.draggable){
self._makeDraggable();
}
if(options.resizable&&$.fn.resizable){
self._makeResizable();
}

self._createButtons(options.buttons);
self._isOpen=false;

if($.fn.bgiframe){
uiDialog.bgiframe();
}
},

_init:function(){
if(this.options.autoOpen){
this.open();
}
},

destroy:function(){
var self=this;

if(self.overlay){
self.overlay.destroy();
}
self.uiDialog.hide();
self.element
.unbind('.dialog')
.removeData('dialog')
.removeClass('ui-dialog-content ui-widget-content')
.hide().appendTo('body');
self.uiDialog.remove();

if(self.originalTitle){
self.element.attr('title',self.originalTitle);
}

return self;
},

widget:function(){
return this.uiDialog;
},

close:function(event){
var self=this,
maxZ,thisZ;

if(false===self._trigger('beforeClose',event)){
return;
}

if(self.overlay){
self.overlay.destroy();
}
self.uiDialog.unbind('keypress.ui-dialog');

self._isOpen=false;

if(self.options.hide){
self.uiDialog.hide(self.options.hide,function(){
self._trigger('close',event);
});
}else{
self.uiDialog.hide();
self._trigger('close',event);
}

$.ui.dialog.overlay.resize();


if(self.options.modal){
maxZ=0;
$('.ui-dialog').each(function(){
if(this!==self.uiDialog[0]){
thisZ=$(this).css('z-index');
if(!isNaN(thisZ)){
maxZ=Math.max(maxZ,thisZ);
}
}
});
$.ui.dialog.maxZ=maxZ;
}

return self;
},

isOpen:function(){
return this._isOpen;
},



moveToTop:function(force,event){
var self=this,
options=self.options,
saveScroll;

if((options.modal&&!force)||
(!options.stack&&!options.modal)){
return self._trigger('focus',event);
}

if(options.zIndex>$.ui.dialog.maxZ){
$.ui.dialog.maxZ=options.zIndex;
}
if(self.overlay){
$.ui.dialog.maxZ+=1;
self.overlay.$el.css('z-index',$.ui.dialog.overlay.maxZ=$.ui.dialog.maxZ);
}



saveScroll={scrollTop:self.element.scrollTop(),scrollLeft:self.element.scrollLeft()};
$.ui.dialog.maxZ+=1;
self.uiDialog.css('z-index',$.ui.dialog.maxZ);
self.element.attr(saveScroll);
self._trigger('focus',event);

return self;
},

open:function(){
if(this._isOpen){return;}

var self=this,
options=self.options,
uiDialog=self.uiDialog;

self.overlay=options.modal?new $.ui.dialog.overlay(self):null;
self._size();
self._position(options.position);
uiDialog.show(options.show);
self.moveToTop(true);


if(options.modal){
uiDialog.bind("keydown.ui-dialog",function(event){
if(event.keyCode!==$.ui.keyCode.TAB){
return;
}

var tabbables=$(':tabbable',this),
first=tabbables.filter(':first'),
last=tabbables.filter(':last');

if(event.target===last[0]&&!event.shiftKey){
first.focus(1);
return false;
}else if(event.target===first[0]&&event.shiftKey){
last.focus(1);
return false;
}
});
}



$(self.element.find(':tabbable').get().concat(
uiDialog.find('.ui-dialog-buttonpane :tabbable').get().concat(
uiDialog.get()))).eq(0).focus();

self._isOpen=true;
self._trigger('open');

return self;
},

_createButtons:function(buttons){
var self=this,
hasButtons=false,
uiDialogButtonPane=$('<div></div>')
.addClass(
'ui-dialog-buttonpane '+
'ui-widget-content '+
'ui-helper-clearfix'
),
uiButtonSet=$("<div></div>")
.addClass("ui-dialog-buttonset")
.appendTo(uiDialogButtonPane);


self.uiDialog.find('.ui-dialog-buttonpane').remove();

if(typeof buttons==='object'&&buttons!==null){
$.each(buttons,function(){
return!(hasButtons=true);
});
}
if(hasButtons){
$.each(buttons,function(name,props){
props=$.isFunction(props)?
{click:props,text:name}:
props;
var button=$('<button type="button"></button>')
.click(function(){
props.click.apply(self.element[0],arguments);
})
.appendTo(uiButtonSet);

$.each(props,function(key,value){
if(key==="click"){
return;
}
if(key in attrFn){
button[key](value);
}else{
button.attr(key,value);
}
});
if($.fn.button){
button.button();
}
});
uiDialogButtonPane.appendTo(self.uiDialog);
}
},

_makeDraggable:function(){
var self=this,
options=self.options,
doc=$(document),
heightBeforeDrag;

function filteredUi(ui){
return{
position:ui.position,
offset:ui.offset
};
}

self.uiDialog.draggable({
cancel:'.ui-dialog-content, .ui-dialog-titlebar-close',
handle:'.ui-dialog-titlebar',
containment:'document',
start:function(event,ui){
heightBeforeDrag=options.height==="auto"?"auto":$(this).height();
$(this).height($(this).height()).addClass("ui-dialog-dragging");
self._trigger('dragStart',event,filteredUi(ui));
},
drag:function(event,ui){
self._trigger('drag',event,filteredUi(ui));
},
stop:function(event,ui){
options.position=[ui.position.left-doc.scrollLeft(),
ui.position.top-doc.scrollTop()];
$(this).removeClass("ui-dialog-dragging").height(heightBeforeDrag);
self._trigger('dragStop',event,filteredUi(ui));
$.ui.dialog.overlay.resize();
}
});
},

_makeResizable:function(handles){
handles=(handles===undefined?this.options.resizable:handles);
var self=this,
options=self.options,


position=self.uiDialog.css('position'),
resizeHandles=(typeof handles==='string'?
handles:
'n,e,s,w,se,sw,ne,nw'
);

function filteredUi(ui){
return{
originalPosition:ui.originalPosition,
originalSize:ui.originalSize,
position:ui.position,
size:ui.size
};
}

self.uiDialog.resizable({
cancel:'.ui-dialog-content',
containment:'document',
alsoResize:self.element,
maxWidth:options.maxWidth,
maxHeight:options.maxHeight,
minWidth:options.minWidth,
minHeight:self._minHeight(),
handles:resizeHandles,
start:function(event,ui){
$(this).addClass("ui-dialog-resizing");
self._trigger('resizeStart',event,filteredUi(ui));
},
resize:function(event,ui){
self._trigger('resize',event,filteredUi(ui));
},
stop:function(event,ui){
$(this).removeClass("ui-dialog-resizing");
options.height=$(this).height();
options.width=$(this).width();
self._trigger('resizeStop',event,filteredUi(ui));
$.ui.dialog.overlay.resize();
}
})
.css('position',position)
.find('.ui-resizable-se').addClass('ui-icon ui-icon-grip-diagonal-se');
},

_minHeight:function(){
var options=this.options;

if(options.height==='auto'){
return options.minHeight;
}else{
return Math.min(options.minHeight,options.height);
}
},

_position:function(position){
var myAt=[],
offset=[0,0],
isVisible;

if(position){




if(typeof position==='string'||(typeof position==='object'&&'0'in position)){
myAt=position.split?position.split(' '):[position[0],position[1]];
if(myAt.length===1){
myAt[1]=myAt[0];
}

$.each(['left','top'],function(i,offsetPosition){
if(+myAt[i]===myAt[i]){
offset[i]=myAt[i];
myAt[i]=offsetPosition;
}
});

position={
my:myAt.join(" "),
at:myAt.join(" "),
offset:offset.join(" ")
};
}

position=$.extend({},$.ui.dialog.prototype.options.position,position);
}else{
position=$.ui.dialog.prototype.options.position;
}


isVisible=this.uiDialog.is(':visible');
if(!isVisible){
this.uiDialog.show();
}
this.uiDialog

.css({top:0,left:0})
.position($.extend({of:window},position));
if(!isVisible){
this.uiDialog.hide();
}
},

_setOptions:function(options){
var self=this,
resizableOptions={},
resize=false;

$.each(options,function(key,value){
self._setOption(key,value);

if(key in sizeRelatedOptions){
resize=true;
}
if(key in resizableRelatedOptions){
resizableOptions[key]=value;
}
});

if(resize){
this._size();
}
if(this.uiDialog.is(":data(resizable)")){
this.uiDialog.resizable("option",resizableOptions);
}
},

_setOption:function(key,value){
var self=this,
uiDialog=self.uiDialog;

switch(key){



case"beforeclose":
key="beforeClose";
break;
case"buttons":
self._createButtons(value);
break;
case"closeText":

self.uiDialogTitlebarCloseText.text(""+value);
break;
case"dialogClass":
uiDialog
.removeClass(self.options.dialogClass)
.addClass(uiDialogClasses+value);
break;
case"disabled":
if(value){
uiDialog.addClass('ui-dialog-disabled');
}else{
uiDialog.removeClass('ui-dialog-disabled');
}
break;
case"draggable":
var isDraggable=uiDialog.is(":data(draggable)");
if(isDraggable&&!value){
uiDialog.draggable("destroy");
}

if(!isDraggable&&value){
self._makeDraggable();
}
break;
case"position":
self._position(value);
break;
case"resizable":

var isResizable=uiDialog.is(":data(resizable)");
if(isResizable&&!value){
uiDialog.resizable('destroy');
}


if(isResizable&&typeof value==='string'){
uiDialog.resizable('option','handles',value);
}


if(!isResizable&&value!==false){
self._makeResizable(value);
}
break;
case"title":

$(".ui-dialog-title",self.uiDialogTitlebar).html(""+(value||'&#160;'));
break;
}

$.Widget.prototype._setOption.apply(self,arguments);
},

_size:function(){



var options=this.options,
nonContentHeight,
minContentHeight,
isVisible=this.uiDialog.is(":visible");


this.element.show().css({
width:'auto',
minHeight:0,
height:0
});

if(options.minWidth>options.width){
options.width=options.minWidth;
}



nonContentHeight=this.uiDialog.css({
height:'auto',
width:options.width
})
.height();
minContentHeight=Math.max(0,options.minHeight-nonContentHeight);

if(options.height==="auto"){

if($.support.minHeight){
this.element.css({
minHeight:minContentHeight,
height:"auto"
});
}else{
this.uiDialog.show();
var autoHeight=this.element.css("height","auto").height();
if(!isVisible){
this.uiDialog.hide();
}
this.element.height(Math.max(autoHeight,minContentHeight));
}
}else{
this.element.height(Math.max(options.height-nonContentHeight,0));
}

if(this.uiDialog.is(':data(resizable)')){
this.uiDialog.resizable('option','minHeight',this._minHeight());
}
}
});

$.extend($.ui.dialog,{
version:"1.8.21",

uuid:0,
maxZ:0,

getTitleId:function($el){
var id=$el.attr('id');
if(!id){
this.uuid+=1;
id=this.uuid;
}
return'ui-dialog-title-'+id;
},

overlay:function(dialog){
this.$el=$.ui.dialog.overlay.create(dialog);
}
});

$.extend($.ui.dialog.overlay,{
instances:[],

oldInstances:[],
maxZ:0,
events:$.map('focus,mousedown,mouseup,keydown,keypress,click'.split(','),
function(event){return event+'.dialog-overlay';}).join(' '),
create:function(dialog){
if(this.instances.length===0){



setTimeout(function(){

if($.ui.dialog.overlay.instances.length){
$(document).bind($.ui.dialog.overlay.events,function(event){


if($(event.target).zIndex()<$.ui.dialog.overlay.maxZ){
return false;
}
});
}
},1);


$(document).bind('keydown.dialog-overlay',function(event){
if(dialog.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode&&
event.keyCode===$.ui.keyCode.ESCAPE){

dialog.close(event);
event.preventDefault();
}
});


$(window).bind('resize.dialog-overlay',$.ui.dialog.overlay.resize);
}

var $el=(this.oldInstances.pop()||$('<div></div>').addClass('ui-widget-overlay'))
.appendTo(document.body)
.css({
width:this.width(),
height:this.height()
});

if($.fn.bgiframe){
$el.bgiframe();
}

this.instances.push($el);
return $el;
},

destroy:function($el){
var indexOf=$.inArray($el,this.instances);
if(indexOf!=-1){
this.oldInstances.push(this.instances.splice(indexOf,1)[0]);
}

if(this.instances.length===0){
$([document,window]).unbind('.dialog-overlay');
}

$el.remove();


var maxZ=0;
$.each(this.instances,function(){
maxZ=Math.max(maxZ,this.css('z-index'));
});
this.maxZ=maxZ;
},

height:function(){
var scrollHeight,
offsetHeight;

if($.browser.msie&&$.browser.version<7){
scrollHeight=Math.max(
document.documentElement.scrollHeight,
document.body.scrollHeight
);
offsetHeight=Math.max(
document.documentElement.offsetHeight,
document.body.offsetHeight
);

if(scrollHeight<offsetHeight){
return $(window).height()+'px';
}else{
return scrollHeight+'px';
}

}else{
return $(document).height()+'px';
}
},

width:function(){
var scrollWidth,
offsetWidth;

if($.browser.msie){
scrollWidth=Math.max(
document.documentElement.scrollWidth,
document.body.scrollWidth
);
offsetWidth=Math.max(
document.documentElement.offsetWidth,
document.body.offsetWidth
);

if(scrollWidth<offsetWidth){
return $(window).width()+'px';
}else{
return scrollWidth+'px';
}

}else{
return $(document).width()+'px';
}
},

resize:function(){








var $overlays=$([]);
$.each($.ui.dialog.overlay.instances,function(){
$overlays=$overlays.add(this);
});

$overlays.css({
width:0,
height:0
}).css({
width:$.ui.dialog.overlay.width(),
height:$.ui.dialog.overlay.height()
});
}
});

$.extend($.ui.dialog.overlay.prototype,{
destroy:function(){
$.ui.dialog.overlay.destroy(this.$el);
}
});

}(jQuery));/*!
 * jQuery UI Slider 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.mouse.js
 * jquery.ui.widget.js
 */

(function($,undefined){



var numPages=5;

$.widget("ui.slider",$.ui.mouse,{

widgetEventPrefix:"slide",

options:{
animate:false,
distance:0,
max:100,
min:0,
orientation:"horizontal",
range:false,
step:1,
value:0,
values:null
},

_create:function(){
var self=this,
o=this.options,
existingHandles=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
handle="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
handleCount=(o.values&&o.values.length)||1,
handles=[];

this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();

this.element
.addClass("ui-slider"+
" ui-slider-"+this.orientation+
" ui-widget"+
" ui-widget-content"+
" ui-corner-all"+
(o.disabled?" ui-slider-disabled ui-disabled":""));

this.range=$([]);

if(o.range){
if(o.range===true){
if(!o.values){
o.values=[this._valueMin(),this._valueMin()];
}
if(o.values.length&&o.values.length!==2){
o.values=[o.values[0],o.values[0]];
}
}

this.range=$("<div></div>")
.appendTo(this.element)
.addClass("ui-slider-range"+


" ui-widget-header"+
((o.range==="min"||o.range==="max")?" ui-slider-range-"+o.range:""));
}

for(var i=existingHandles.length;i<handleCount;i+=1){
handles.push(handle);
}

this.handles=existingHandles.add($(handles.join("")).appendTo(self.element));

this.handle=this.handles.eq(0);

this.handles.add(this.range).filter("a")
.click(function(event){
event.preventDefault();
})
.hover(function(){
if(!o.disabled){
$(this).addClass("ui-state-hover");
}
},function(){
$(this).removeClass("ui-state-hover");
})
.focus(function(){
if(!o.disabled){
$(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
$(this).addClass("ui-state-focus");
}else{
$(this).blur();
}
})
.blur(function(){
$(this).removeClass("ui-state-focus");
});

this.handles.each(function(i){
$(this).data("index.ui-slider-handle",i);
});

this.handles
.keydown(function(event){
var index=$(this).data("index.ui-slider-handle"),
allowed,
curVal,
newVal,
step;

if(self.options.disabled){
return;
}

switch(event.keyCode){
case $.ui.keyCode.HOME:
case $.ui.keyCode.END:
case $.ui.keyCode.PAGE_UP:
case $.ui.keyCode.PAGE_DOWN:
case $.ui.keyCode.UP:
case $.ui.keyCode.RIGHT:
case $.ui.keyCode.DOWN:
case $.ui.keyCode.LEFT:
event.preventDefault();
if(!self._keySliding){
self._keySliding=true;
$(this).addClass("ui-state-active");
allowed=self._start(event,index);
if(allowed===false){
return;
}
}
break;
}

step=self.options.step;
if(self.options.values&&self.options.values.length){
curVal=newVal=self.values(index);
}else{
curVal=newVal=self.value();
}

switch(event.keyCode){
case $.ui.keyCode.HOME:
newVal=self._valueMin();
break;
case $.ui.keyCode.END:
newVal=self._valueMax();
break;
case $.ui.keyCode.PAGE_UP:
newVal=self._trimAlignValue(curVal+((self._valueMax()-self._valueMin())/numPages));
break;
case $.ui.keyCode.PAGE_DOWN:
newVal=self._trimAlignValue(curVal-((self._valueMax()-self._valueMin())/numPages));
break;
case $.ui.keyCode.UP:
case $.ui.keyCode.RIGHT:
if(curVal===self._valueMax()){
return;
}
newVal=self._trimAlignValue(curVal+step);
break;
case $.ui.keyCode.DOWN:
case $.ui.keyCode.LEFT:
if(curVal===self._valueMin()){
return;
}
newVal=self._trimAlignValue(curVal-step);
break;
}

self._slide(event,index,newVal);
})
.keyup(function(event){
var index=$(this).data("index.ui-slider-handle");

if(self._keySliding){
self._keySliding=false;
self._stop(event,index);
self._change(event,index);
$(this).removeClass("ui-state-active");
}

});

this._refreshValue();

this._animateOff=false;
},

destroy:function(){
this.handles.remove();
this.range.remove();

this.element
.removeClass("ui-slider"+
" ui-slider-horizontal"+
" ui-slider-vertical"+
" ui-slider-disabled"+
" ui-widget"+
" ui-widget-content"+
" ui-corner-all")
.removeData("slider")
.unbind(".slider");

this._mouseDestroy();

return this;
},

_mouseCapture:function(event){
var o=this.options,
position,
normValue,
distance,
closestHandle,
self,
index,
allowed,
offset,
mouseOverHandle;

if(o.disabled){
return false;
}

this.elementSize={
width:this.element.outerWidth(),
height:this.element.outerHeight()
};
this.elementOffset=this.element.offset();

position={x:event.pageX,y:event.pageY};
normValue=this._normValueFromMouse(position);
distance=this._valueMax()-this._valueMin()+1;
self=this;
this.handles.each(function(i){
var thisDistance=Math.abs(normValue-self.values(i));
if(distance>thisDistance){
distance=thisDistance;
closestHandle=$(this);
index=i;
}
});




if(o.range===true&&this.values(1)===o.min){
index+=1;
closestHandle=$(this.handles[index]);
}

allowed=this._start(event,index);
if(allowed===false){
return false;
}
this._mouseSliding=true;

self._handleIndex=index;

closestHandle
.addClass("ui-state-active")
.focus();

offset=closestHandle.offset();
mouseOverHandle=!$(event.target).parents().andSelf().is(".ui-slider-handle");
this._clickOffset=mouseOverHandle?{left:0,top:0}:{
left:event.pageX-offset.left-(closestHandle.width()/2),
top:event.pageY-offset.top-
(closestHandle.height()/2)-
(parseInt(closestHandle.css("borderTopWidth"),10)||0)-
(parseInt(closestHandle.css("borderBottomWidth"),10)||0)+
(parseInt(closestHandle.css("marginTop"),10)||0)
};

if(!this.handles.hasClass("ui-state-hover")){
this._slide(event,index,normValue);
}
this._animateOff=true;
return true;
},

_mouseStart:function(event){
return true;
},

_mouseDrag:function(event){
var position={x:event.pageX,y:event.pageY},
normValue=this._normValueFromMouse(position);

this._slide(event,this._handleIndex,normValue);

return false;
},

_mouseStop:function(event){
this.handles.removeClass("ui-state-active");
this._mouseSliding=false;

this._stop(event,this._handleIndex);
this._change(event,this._handleIndex);

this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;

return false;
},

_detectOrientation:function(){
this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal";
},

_normValueFromMouse:function(position){
var pixelTotal,
pixelMouse,
percentMouse,
valueTotal,
valueMouse;

if(this.orientation==="horizontal"){
pixelTotal=this.elementSize.width;
pixelMouse=position.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0);
}else{
pixelTotal=this.elementSize.height;
pixelMouse=position.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);
}

percentMouse=(pixelMouse/pixelTotal);
if(percentMouse>1){
percentMouse=1;
}
if(percentMouse<0){
percentMouse=0;
}
if(this.orientation==="vertical"){
percentMouse=1-percentMouse;
}

valueTotal=this._valueMax()-this._valueMin();
valueMouse=this._valueMin()+percentMouse*valueTotal;

return this._trimAlignValue(valueMouse);
},

_start:function(event,index){
var uiHash={
handle:this.handles[index],
value:this.value()
};
if(this.options.values&&this.options.values.length){
uiHash.value=this.values(index);
uiHash.values=this.values();
}
return this._trigger("start",event,uiHash);
},

_slide:function(event,index,newVal){
var otherVal,
newValues,
allowed;

if(this.options.values&&this.options.values.length){
otherVal=this.values(index?0:1);

if((this.options.values.length===2&&this.options.range===true)&&
((index===0&&newVal>otherVal)||(index===1&&newVal<otherVal))
){
newVal=otherVal;
}

if(newVal!==this.values(index)){
newValues=this.values();
newValues[index]=newVal;

allowed=this._trigger("slide",event,{
handle:this.handles[index],
value:newVal,
values:newValues
});
otherVal=this.values(index?0:1);
if(allowed!==false){
this.values(index,newVal,true);
}
}
}else{
if(newVal!==this.value()){

allowed=this._trigger("slide",event,{
handle:this.handles[index],
value:newVal
});
if(allowed!==false){
this.value(newVal);
}
}
}
},

_stop:function(event,index){
var uiHash={
handle:this.handles[index],
value:this.value()
};
if(this.options.values&&this.options.values.length){
uiHash.value=this.values(index);
uiHash.values=this.values();
}

this._trigger("stop",event,uiHash);
},

_change:function(event,index){
if(!this._keySliding&&!this._mouseSliding){
var uiHash={
handle:this.handles[index],
value:this.value()
};
if(this.options.values&&this.options.values.length){
uiHash.value=this.values(index);
uiHash.values=this.values();
}

this._trigger("change",event,uiHash);
}
},

value:function(newValue){
if(arguments.length){
this.options.value=this._trimAlignValue(newValue);
this._refreshValue();
this._change(null,0);
return;
}

return this._value();
},

values:function(index,newValue){
var vals,
newValues,
i;

if(arguments.length>1){
this.options.values[index]=this._trimAlignValue(newValue);
this._refreshValue();
this._change(null,index);
return;
}

if(arguments.length){
if($.isArray(arguments[0])){
vals=this.options.values;
newValues=arguments[0];
for(i=0;i<vals.length;i+=1){
vals[i]=this._trimAlignValue(newValues[i]);
this._change(null,i);
}
this._refreshValue();
}else{
if(this.options.values&&this.options.values.length){
return this._values(index);
}else{
return this.value();
}
}
}else{
return this._values();
}
},

_setOption:function(key,value){
var i,
valsLength=0;

if($.isArray(this.options.values)){
valsLength=this.options.values.length;
}

$.Widget.prototype._setOption.apply(this,arguments);

switch(key){
case"disabled":
if(value){
this.handles.filter(".ui-state-focus").blur();
this.handles.removeClass("ui-state-hover");
this.handles.propAttr("disabled",true);
this.element.addClass("ui-disabled");
}else{
this.handles.propAttr("disabled",false);
this.element.removeClass("ui-disabled");
}
break;
case"orientation":
this._detectOrientation();
this.element
.removeClass("ui-slider-horizontal ui-slider-vertical")
.addClass("ui-slider-"+this.orientation);
this._refreshValue();
break;
case"value":
this._animateOff=true;
this._refreshValue();
this._change(null,0);
this._animateOff=false;
break;
case"values":
this._animateOff=true;
this._refreshValue();
for(i=0;i<valsLength;i+=1){
this._change(null,i);
}
this._animateOff=false;
break;
}
},



_value:function(){
var val=this.options.value;
val=this._trimAlignValue(val);

return val;
},




_values:function(index){
var val,
vals,
i;

if(arguments.length){
val=this.options.values[index];
val=this._trimAlignValue(val);

return val;
}else{


vals=this.options.values.slice();
for(i=0;i<vals.length;i+=1){
vals[i]=this._trimAlignValue(vals[i]);
}

return vals;
}
},


_trimAlignValue:function(val){
if(val<=this._valueMin()){
return this._valueMin();
}
if(val>=this._valueMax()){
return this._valueMax();
}
var step=(this.options.step>0)?this.options.step:1,
valModStep=(val-this._valueMin())%step,
alignValue=val-valModStep;

if(Math.abs(valModStep)*2>=step){
alignValue+=(valModStep>0)?step:(-step);
}



return parseFloat(alignValue.toFixed(5));
},

_valueMin:function(){
return this.options.min;
},

_valueMax:function(){
return this.options.max;
},

_refreshValue:function(){
var oRange=this.options.range,
o=this.options,
self=this,
animate=(!this._animateOff)?o.animate:false,
valPercent,
_set={},
lastValPercent,
value,
valueMin,
valueMax;

if(this.options.values&&this.options.values.length){
this.handles.each(function(i,j){
valPercent=(self.values(i)-self._valueMin())/(self._valueMax()-self._valueMin())*100;
_set[self.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";
$(this).stop(1,1)[animate?"animate":"css"](_set,o.animate);
if(self.options.range===true){
if(self.orientation==="horizontal"){
if(i===0){
self.range.stop(1,1)[animate?"animate":"css"]({left:valPercent+"%"},o.animate);
}
if(i===1){
self.range[animate?"animate":"css"]({width:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});
}
}else{
if(i===0){
self.range.stop(1,1)[animate?"animate":"css"]({bottom:(valPercent)+"%"},o.animate);
}
if(i===1){
self.range[animate?"animate":"css"]({height:(valPercent-lastValPercent)+"%"},{queue:false,duration:o.animate});
}
}
}
lastValPercent=valPercent;
});
}else{
value=this.value();
valueMin=this._valueMin();
valueMax=this._valueMax();
valPercent=(valueMax!==valueMin)?
(value-valueMin)/(valueMax-valueMin)*100:
0;
_set[self.orientation==="horizontal"?"left":"bottom"]=valPercent+"%";
this.handle.stop(1,1)[animate?"animate":"css"](_set,o.animate);

if(oRange==="min"&&this.orientation==="horizontal"){
this.range.stop(1,1)[animate?"animate":"css"]({width:valPercent+"%"},o.animate);
}
if(oRange==="max"&&this.orientation==="horizontal"){
this.range[animate?"animate":"css"]({width:(100-valPercent)+"%"},{queue:false,duration:o.animate});
}
if(oRange==="min"&&this.orientation==="vertical"){
this.range.stop(1,1)[animate?"animate":"css"]({height:valPercent+"%"},o.animate);
}
if(oRange==="max"&&this.orientation==="vertical"){
this.range[animate?"animate":"css"]({height:(100-valPercent)+"%"},{queue:false,duration:o.animate});
}
}
}

});

$.extend($.ui.slider,{
version:"1.8.21"
});

}(jQuery));/*!
 * jQuery UI Tabs 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 * jquery.ui.core.js
 * jquery.ui.widget.js
 */

(function($,undefined){

var tabId=0,
listId=0;

function getNextTabId(){
return++tabId;
}

function getNextListId(){
return++listId;
}

$.widget("ui.tabs",{
options:{
add:null,
ajaxOptions:null,
cache:false,
cookie:null,
collapsible:false,
disable:null,
disabled:[],
enable:null,
event:"click",
fx:null,
idPrefix:"ui-tabs-",
load:null,
panelTemplate:"<div></div>",
remove:null,
select:null,
show:null,
spinner:"<em>Loading&#8230;</em>",
tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"
},

_create:function(){
this._tabify(true);
},

_setOption:function(key,value){
if(key=="selected"){
if(this.options.collapsible&&value==this.options.selected){
return;
}
this.select(value);
}else{
this.options[key]=value;
this._tabify();
}
},

_tabId:function(a){
return a.title&&a.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||
this.options.idPrefix+getNextTabId();
},

_sanitizeSelector:function(hash){

return hash.replace(/:/g,"\\:");
},

_cookie:function(){
var cookie=this.cookie||
(this.cookie=this.options.cookie.name||"ui-tabs-"+getNextListId());
return $.cookie.apply(null,[cookie].concat($.makeArray(arguments)));
},

_ui:function(tab,panel){
return{
tab:tab,
panel:panel,
index:this.anchors.index(tab)
};
},

_cleanup:function(){

this.lis.filter(".ui-state-processing")
.removeClass("ui-state-processing")
.find("span:data(label.tabs)")
.each(function(){
var el=$(this);
el.html(el.data("label.tabs")).removeData("label.tabs");
});
},

_tabify:function(init){
var self=this,
o=this.options,
fragmentId=/^#.+/;

this.list=this.element.find("ol,ul").eq(0);
this.lis=$(" > li:has(a[href])",this.list);
this.anchors=this.lis.map(function(){
return $("a",this)[0];
});
this.panels=$([]);

this.anchors.each(function(i,a){
var href=$(a).attr("href");





var hrefBase=href.split("#")[0],
baseEl;
if(hrefBase&&(hrefBase===location.toString().split("#")[0]||
(baseEl=$("base")[0])&&hrefBase===baseEl.href)){
href=a.hash;
a.href=href;
}


if(fragmentId.test(href)){
self.panels=self.panels.add(self.element.find(self._sanitizeSelector(href)));


}else if(href&&href!=="#"){

$.data(a,"href.tabs",href);



$.data(a,"load.tabs",href.replace(/#.*$/,""));

var id=self._tabId(a);
a.href="#"+id;
var $panel=self.element.find("#"+id);
if(!$panel.length){
$panel=$(o.panelTemplate)
.attr("id",id)
.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
.insertAfter(self.panels[i-1]||self.list);
$panel.data("destroy.tabs",true);
}
self.panels=self.panels.add($panel);

}else{
o.disabled.push(i);
}
});


if(init){

this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.lis.addClass("ui-state-default ui-corner-top");
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");






if(o.selected===undefined){
if(location.hash){
this.anchors.each(function(i,a){
if(a.hash==location.hash){
o.selected=i;
return false;
}
});
}
if(typeof o.selected!=="number"&&o.cookie){
o.selected=parseInt(self._cookie(),10);
}
if(typeof o.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){
o.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
}
o.selected=o.selected||(this.lis.length?0:-1);
}else if(o.selected===null){
o.selected=-1;
}


o.selected=((o.selected>=0&&this.anchors[o.selected])||o.selected<0)
?o.selected
:0;




o.disabled=$.unique(o.disabled.concat(
$.map(this.lis.filter(".ui-state-disabled"),function(n,i){
return self.lis.index(n);
})
)).sort();

if($.inArray(o.selected,o.disabled)!=-1){
o.disabled.splice($.inArray(o.selected,o.disabled),1);
}


this.panels.addClass("ui-tabs-hide");
this.lis.removeClass("ui-tabs-selected ui-state-active");

if(o.selected>=0&&this.anchors.length){
self.element.find(self._sanitizeSelector(self.anchors[o.selected].hash)).removeClass("ui-tabs-hide");
this.lis.eq(o.selected).addClass("ui-tabs-selected ui-state-active");


self.element.queue("tabs",function(){
self._trigger("show",null,
self._ui(self.anchors[o.selected],self.element.find(self._sanitizeSelector(self.anchors[o.selected].hash))[0]));
});

this.load(o.selected);
}



$(window).bind("unload",function(){
self.lis.add(self.anchors).unbind(".tabs");
self.lis=self.anchors=self.panels=null;
});

}else{
o.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
}



this.element[o.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");


if(o.cookie){
this._cookie(o.selected,o.cookie);
}


for(var i=0,li;(li=this.lis[i]);i++){
$(li)[$.inArray(i,o.disabled)!=-1&&

!$(li).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");
}


if(o.cache===false){
this.anchors.removeData("cache.tabs");
}


this.lis.add(this.anchors).unbind(".tabs");

if(o.event!=="mouseover"){
var addState=function(state,el){
if(el.is(":not(.ui-state-disabled)")){
el.addClass("ui-state-"+state);
}
};
var removeState=function(state,el){
el.removeClass("ui-state-"+state);
};
this.lis.bind("mouseover.tabs",function(){
addState("hover",$(this));
});
this.lis.bind("mouseout.tabs",function(){
removeState("hover",$(this));
});
this.anchors.bind("focus.tabs",function(){
addState("focus",$(this).closest("li"));
});
this.anchors.bind("blur.tabs",function(){
removeState("focus",$(this).closest("li"));
});
}


var hideFx,showFx;
if(o.fx){
if($.isArray(o.fx)){
hideFx=o.fx[0];
showFx=o.fx[1];
}else{
hideFx=showFx=o.fx;
}
}



function resetStyle($el,fx){
$el.css("display","");
if(!$.support.opacity&&fx.opacity){
$el[0].style.removeAttribute("filter");
}
}


var showTab=showFx
?function(clicked,$show){
$(clicked).closest("li").addClass("ui-tabs-selected ui-state-active");
$show.hide().removeClass("ui-tabs-hide")
.animate(showFx,showFx.duration||"normal",function(){
resetStyle($show,showFx);
self._trigger("show",null,self._ui(clicked,$show[0]));
});
}
:function(clicked,$show){
$(clicked).closest("li").addClass("ui-tabs-selected ui-state-active");
$show.removeClass("ui-tabs-hide");
self._trigger("show",null,self._ui(clicked,$show[0]));
};


var hideTab=hideFx
?function(clicked,$hide){
$hide.animate(hideFx,hideFx.duration||"normal",function(){
self.lis.removeClass("ui-tabs-selected ui-state-active");
$hide.addClass("ui-tabs-hide");
resetStyle($hide,hideFx);
self.element.dequeue("tabs");
});
}
:function(clicked,$hide,$show){
self.lis.removeClass("ui-tabs-selected ui-state-active");
$hide.addClass("ui-tabs-hide");
self.element.dequeue("tabs");
};


this.anchors.bind(o.event+".tabs",function(){
var el=this,
$li=$(el).closest("li"),
$hide=self.panels.filter(":not(.ui-tabs-hide)"),
$show=self.element.find(self._sanitizeSelector(el.hash));





if(($li.hasClass("ui-tabs-selected")&&!o.collapsible)||
$li.hasClass("ui-state-disabled")||
$li.hasClass("ui-state-processing")||
self.panels.filter(":animated").length||
self._trigger("select",null,self._ui(this,$show[0]))===false){
this.blur();
return false;
}

o.selected=self.anchors.index(this);

self.abort();


if(o.collapsible){
if($li.hasClass("ui-tabs-selected")){
o.selected=-1;

if(o.cookie){
self._cookie(o.selected,o.cookie);
}

self.element.queue("tabs",function(){
hideTab(el,$hide);
}).dequeue("tabs");

this.blur();
return false;
}else if(!$hide.length){
if(o.cookie){
self._cookie(o.selected,o.cookie);
}

self.element.queue("tabs",function(){
showTab(el,$show);
});


self.load(self.anchors.index(this));

this.blur();
return false;
}
}

if(o.cookie){
self._cookie(o.selected,o.cookie);
}


if($show.length){
if($hide.length){
self.element.queue("tabs",function(){
hideTab(el,$hide);
});
}
self.element.queue("tabs",function(){
showTab(el,$show);
});

self.load(self.anchors.index(this));
}else{
throw"jQuery UI Tabs: Mismatching fragment identifier.";
}





if($.browser.msie){
this.blur();
}
});


this.anchors.bind("click.tabs",function(){
return false;
});
},

_getIndex:function(index){


if(typeof index=="string"){
index=this.anchors.index(this.anchors.filter("[href$='"+index+"']"));
}

return index;
},

destroy:function(){
var o=this.options;

this.abort();

this.element
.unbind(".tabs")
.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible")
.removeData("tabs");

this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");

this.anchors.each(function(){
var href=$.data(this,"href.tabs");
if(href){
this.href=href;
}
var $this=$(this).unbind(".tabs");
$.each(["href","load","cache"],function(i,prefix){
$this.removeData(prefix+".tabs");
});
});

this.lis.unbind(".tabs").add(this.panels).each(function(){
if($.data(this,"destroy.tabs")){
$(this).remove();
}else{
$(this).removeClass([
"ui-state-default",
"ui-corner-top",
"ui-tabs-selected",
"ui-state-active",
"ui-state-hover",
"ui-state-focus",
"ui-state-disabled",
"ui-tabs-panel",
"ui-widget-content",
"ui-corner-bottom",
"ui-tabs-hide"
].join(" "));
}
});

if(o.cookie){
this._cookie(null,o.cookie);
}

return this;
},

add:function(url,label,index){
if(index===undefined){
index=this.anchors.length;
}

var self=this,
o=this.options,
$li=$(o.tabTemplate.replace(/#\{href\}/g,url).replace(/#\{label\}/g,label)),
id=!url.indexOf("#")?url.replace("#",""):this._tabId($("a",$li)[0]);

$li.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);


var $panel=self.element.find("#"+id);
if(!$panel.length){
$panel=$(o.panelTemplate)
.attr("id",id)
.data("destroy.tabs",true);
}
$panel.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");

if(index>=this.lis.length){
$li.appendTo(this.list);
$panel.appendTo(this.list[0].parentNode);
}else{
$li.insertBefore(this.lis[index]);
$panel.insertBefore(this.panels[index]);
}

o.disabled=$.map(o.disabled,function(n,i){
return n>=index?++n:n;
});

this._tabify();

if(this.anchors.length==1){
o.selected=0;
$li.addClass("ui-tabs-selected ui-state-active");
$panel.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){
self._trigger("show",null,self._ui(self.anchors[0],self.panels[0]));
});

this.load(0);
}

this._trigger("add",null,this._ui(this.anchors[index],this.panels[index]));
return this;
},

remove:function(index){
index=this._getIndex(index);
var o=this.options,
$li=this.lis.eq(index).remove(),
$panel=this.panels.eq(index).remove();



if($li.hasClass("ui-tabs-selected")&&this.anchors.length>1){
this.select(index+(index+1<this.anchors.length?1:-1));
}

o.disabled=$.map(
$.grep(o.disabled,function(n,i){
return n!=index;
}),
function(n,i){
return n>=index?--n:n;
});

this._tabify();

this._trigger("remove",null,this._ui($li.find("a")[0],$panel[0]));
return this;
},

enable:function(index){
index=this._getIndex(index);
var o=this.options;
if($.inArray(index,o.disabled)==-1){
return;
}

this.lis.eq(index).removeClass("ui-state-disabled");
o.disabled=$.grep(o.disabled,function(n,i){
return n!=index;
});

this._trigger("enable",null,this._ui(this.anchors[index],this.panels[index]));
return this;
},

disable:function(index){
index=this._getIndex(index);
var self=this,o=this.options;

if(index!=o.selected){
this.lis.eq(index).addClass("ui-state-disabled");

o.disabled.push(index);
o.disabled.sort();

this._trigger("disable",null,this._ui(this.anchors[index],this.panels[index]));
}

return this;
},

select:function(index){
index=this._getIndex(index);
if(index==-1){
if(this.options.collapsible&&this.options.selected!=-1){
index=this.options.selected;
}else{
return this;
}
}
this.anchors.eq(index).trigger(this.options.event+".tabs");
return this;
},

load:function(index){
index=this._getIndex(index);
var self=this,
o=this.options,
a=this.anchors.eq(index)[0],
url=$.data(a,"load.tabs");

this.abort();


if(!url||this.element.queue("tabs").length!==0&&$.data(a,"cache.tabs")){
this.element.dequeue("tabs");
return;
}


this.lis.eq(index).addClass("ui-state-processing");

if(o.spinner){
var span=$("span",a);
span.data("label.tabs",span.html()).html(o.spinner);
}

this.xhr=$.ajax($.extend({},o.ajaxOptions,{
url:url,
success:function(r,s){
self.element.find(self._sanitizeSelector(a.hash)).html(r);


self._cleanup();

if(o.cache){
$.data(a,"cache.tabs",true);
}

self._trigger("load",null,self._ui(self.anchors[index],self.panels[index]));
try{
o.ajaxOptions.success(r,s);
}
catch(e){}
},
error:function(xhr,s,e){

self._cleanup();

self._trigger("load",null,self._ui(self.anchors[index],self.panels[index]));
try{




o.ajaxOptions.error(xhr,s,index,a);
}
catch(e){}
}
}));


self.element.dequeue("tabs");

return this;
},

abort:function(){

this.element.queue([]);
this.panels.stop(false,true);



this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));


if(this.xhr){
this.xhr.abort();
delete this.xhr;
}


this._cleanup();
return this;
},

url:function(index,url){
this.anchors.eq(index).removeData("cache.tabs").data("load.tabs",url);
return this;
},

length:function(){
return this.anchors.length;
}
});

$.extend($.ui.tabs,{
version:"1.8.21"
});








$.extend($.ui.tabs.prototype,{
rotation:null,
rotate:function(ms,continuing){
var self=this,
o=this.options;

var rotate=self._rotate||(self._rotate=function(e){
clearTimeout(self.rotation);
self.rotation=setTimeout(function(){
var t=o.selected;
self.select(++t<self.anchors.length?t:0);
},ms);

if(e){
e.stopPropagation();
}
});

var stop=self._unrotate||(self._unrotate=!continuing
?function(e){
if(e.clientX){
self.rotate(null);
}
}
:function(e){
rotate();
});


if(ms){
this.element.bind("tabsshow",rotate);
this.anchors.bind(o.event+".tabs",stop);
rotate();

}else{
clearTimeout(self.rotation);
this.element.unbind("tabsshow",rotate);
this.anchors.unbind(o.event+".tabs",stop);
delete this._rotate;
delete this._unrotate;
}

return this;
}
});

})(jQuery);/*!
 * jQuery UI Datepicker 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 * jquery.ui.core.js
 */

(function($,undefined){

$.extend($.ui,{datepicker:{version:"1.8.21"}});

var PROP_NAME='datepicker';
var dpuuid=new Date().getTime();
var instActive;






function Datepicker(){
this.debug=false;
this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId='ui-datepicker-div';
this._inlineClass='ui-datepicker-inline';
this._appendClass='ui-datepicker-append';
this._triggerClass='ui-datepicker-trigger';
this._dialogClass='ui-datepicker-dialog';
this._disableClass='ui-datepicker-disabled';
this._unselectableClass='ui-datepicker-unselectable';
this._currentClass='ui-datepicker-current-day';
this._dayOverClass='ui-datepicker-days-cell-over';
this.regional=[];
this.regional['']={
closeText:'Done',
prevText:'Prev',
nextText:'Next',
currentText:'Today',
monthNames:['January','February','March','April','May','June',
'July','August','September','October','November','December'],
monthNamesShort:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
dayNames:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
dayNamesShort:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
dayNamesMin:['Su','Mo','Tu','We','Th','Fr','Sa'],
weekHeader:'Wk',
dateFormat:'mm/dd/yy',
firstDay:0,
isRTL:false,
showMonthAfterYear:false,
yearSuffix:''
};
this._defaults={
showOn:'focus',

showAnim:'fadeIn',
showOptions:{},
defaultDate:null,

appendText:'',
buttonText:'...',
buttonImage:'',
buttonImageOnly:false,
hideIfNoPrevNext:false,

navigationAsDateFormat:false,
gotoCurrent:false,
changeMonth:false,
changeYear:false,
yearRange:'c-10:c+10',


showOtherMonths:false,
selectOtherMonths:false,
showWeek:false,
calculateWeek:this.iso8601Week,

shortYearCutoff:'+10',


minDate:null,
maxDate:null,
duration:'fast',
beforeShowDay:null,


beforeShow:null,

onSelect:null,
onChangeMonthYear:null,
onClose:null,
numberOfMonths:1,
showCurrentAtPos:0,
stepMonths:1,
stepBigMonths:12,
altField:'',
altFormat:'',
constrainInput:true,
showButtonPanel:false,
autoSize:false,
disabled:false
};
$.extend(this._defaults,this.regional['']);
this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
}

$.extend(Datepicker.prototype,{

markerClassName:'hasDatepicker',


maxRows:4,


log:function(){
if(this.debug)
console.log.apply('',arguments);
},


_widgetDatepicker:function(){
return this.dpDiv;
},




setDefaults:function(settings){
extendRemove(this._defaults,settings||{});
return this;
},




_attachDatepicker:function(target,settings){

var inlineSettings=null;
for(var attrName in this._defaults){
var attrValue=target.getAttribute('date:'+attrName);
if(attrValue){
inlineSettings=inlineSettings||{};
try{
inlineSettings[attrName]=eval(attrValue);
}catch(err){
inlineSettings[attrName]=attrValue;
}
}
}
var nodeName=target.nodeName.toLowerCase();
var inline=(nodeName=='div'||nodeName=='span');
if(!target.id){
this.uuid+=1;
target.id='dp'+this.uuid;
}
var inst=this._newInst($(target),inline);
inst.settings=$.extend({},settings||{},inlineSettings||{});
if(nodeName=='input'){
this._connectDatepicker(target,inst);
}else if(inline){
this._inlineDatepicker(target,inst);
}
},


_newInst:function(target,inline){
var id=target[0].id.replace(/([^A-Za-z0-9_-])/g,'\\\\$1');
return{id:id,input:target,
selectedDay:0,selectedMonth:0,selectedYear:0,
drawMonth:0,drawYear:0,
inline:inline,
dpDiv:(!inline?this.dpDiv:
bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))};
},


_connectDatepicker:function(target,inst){
var input=$(target);
inst.append=$([]);
inst.trigger=$([]);
if(input.hasClass(this.markerClassName))
return;
this._attachments(input,inst);
input.addClass(this.markerClassName).keydown(this._doKeyDown).
keypress(this._doKeyPress).keyup(this._doKeyUp).
bind("setData.datepicker",function(event,key,value){
inst.settings[key]=value;
}).bind("getData.datepicker",function(event,key){
return this._get(inst,key);
});
this._autoSize(inst);
$.data(target,PROP_NAME,inst);

if(inst.settings.disabled){
this._disableDatepicker(target);
}
},


_attachments:function(input,inst){
var appendText=this._get(inst,'appendText');
var isRTL=this._get(inst,'isRTL');
if(inst.append)
inst.append.remove();
if(appendText){
inst.append=$('<span class="'+this._appendClass+'">'+appendText+'</span>');
input[isRTL?'before':'after'](inst.append);
}
input.unbind('focus',this._showDatepicker);
if(inst.trigger)
inst.trigger.remove();
var showOn=this._get(inst,'showOn');
if(showOn=='focus'||showOn=='both')
input.focus(this._showDatepicker);
if(showOn=='button'||showOn=='both'){
var buttonText=this._get(inst,'buttonText');
var buttonImage=this._get(inst,'buttonImage');
inst.trigger=$(this._get(inst,'buttonImageOnly')?
$('<img/>').addClass(this._triggerClass).
attr({src:buttonImage,alt:buttonText,title:buttonText}):
$('<button type="button"></button>').addClass(this._triggerClass).
html(buttonImage==''?buttonText:$('<img/>').attr(
{src:buttonImage,alt:buttonText,title:buttonText})));
input[isRTL?'before':'after'](inst.trigger);
inst.trigger.click(function(){
if($.datepicker._datepickerShowing&&$.datepicker._lastInput==input[0])
$.datepicker._hideDatepicker();
else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!=input[0]){
$.datepicker._hideDatepicker();
$.datepicker._showDatepicker(input[0]);
}else
$.datepicker._showDatepicker(input[0]);
return false;
});
}
},


_autoSize:function(inst){
if(this._get(inst,'autoSize')&&!inst.inline){
var date=new Date(2009,12-1,20);
var dateFormat=this._get(inst,'dateFormat');
if(dateFormat.match(/[DM]/)){
var findMax=function(names){
var max=0;
var maxI=0;
for(var i=0;i<names.length;i++){
if(names[i].length>max){
max=names[i].length;
maxI=i;
}
}
return maxI;
};
date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/)?
'monthNames':'monthNamesShort'))));
date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/)?
'dayNames':'dayNamesShort')))+20-date.getDay());
}
inst.input.attr('size',this._formatDate(inst,date).length);
}
},


_inlineDatepicker:function(target,inst){
var divSpan=$(target);
if(divSpan.hasClass(this.markerClassName))
return;
divSpan.addClass(this.markerClassName).append(inst.dpDiv).
bind("setData.datepicker",function(event,key,value){
inst.settings[key]=value;
}).bind("getData.datepicker",function(event,key){
return this._get(inst,key);
});
$.data(target,PROP_NAME,inst);
this._setDate(inst,this._getDefaultDate(inst),true);
this._updateDatepicker(inst);
this._updateAlternate(inst);

if(inst.settings.disabled){
this._disableDatepicker(target);
}


inst.dpDiv.css("display","block");
},










_dialogDatepicker:function(input,date,onSelect,settings,pos){
var inst=this._dialogInst;
if(!inst){
this.uuid+=1;
var id='dp'+this.uuid;
this._dialogInput=$('<input type="text" id="'+id+
'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
this._dialogInput.keydown(this._doKeyDown);
$('body').append(this._dialogInput);
inst=this._dialogInst=this._newInst(this._dialogInput,false);
inst.settings={};
$.data(this._dialogInput[0],PROP_NAME,inst);
}
extendRemove(inst.settings,settings||{});
date=(date&&date.constructor==Date?this._formatDate(inst,date):date);
this._dialogInput.val(date);

this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);
if(!this._pos){
var browserWidth=document.documentElement.clientWidth;
var browserHeight=document.documentElement.clientHeight;
var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;
var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=
[(browserWidth/2)-100+scrollX,(browserHeight/2)-150+scrollY];
}


this._dialogInput.css('left',(this._pos[0]+20)+'px').css('top',this._pos[1]+'px');
inst.settings.onSelect=onSelect;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if($.blockUI)
$.blockUI(this.dpDiv);
$.data(this._dialogInput[0],PROP_NAME,inst);
return this;
},



_destroyDatepicker:function(target){
var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){
return;
}
var nodeName=target.nodeName.toLowerCase();
$.removeData(target,PROP_NAME);
if(nodeName=='input'){
inst.append.remove();
inst.trigger.remove();
$target.removeClass(this.markerClassName).
unbind('focus',this._showDatepicker).
unbind('keydown',this._doKeyDown).
unbind('keypress',this._doKeyPress).
unbind('keyup',this._doKeyUp);
}else if(nodeName=='div'||nodeName=='span')
$target.removeClass(this.markerClassName).empty();
},



_enableDatepicker:function(target){
var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){
return;
}
var nodeName=target.nodeName.toLowerCase();
if(nodeName=='input'){
target.disabled=false;
inst.trigger.filter('button').
each(function(){this.disabled=false;}).end().
filter('img').css({opacity:'1.0',cursor:''});
}
else if(nodeName=='div'||nodeName=='span'){
var inline=$target.children('.'+this._inlineClass);
inline.children().removeClass('ui-state-disabled');
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
removeAttr("disabled");
}
this._disabledInputs=$.map(this._disabledInputs,
function(value){return(value==target?null:value);});
},



_disableDatepicker:function(target){
var $target=$(target);
var inst=$.data(target,PROP_NAME);
if(!$target.hasClass(this.markerClassName)){
return;
}
var nodeName=target.nodeName.toLowerCase();
if(nodeName=='input'){
target.disabled=true;
inst.trigger.filter('button').
each(function(){this.disabled=true;}).end().
filter('img').css({opacity:'0.5',cursor:'default'});
}
else if(nodeName=='div'||nodeName=='span'){
var inline=$target.children('.'+this._inlineClass);
inline.children().addClass('ui-state-disabled');
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
attr("disabled","disabled");
}
this._disabledInputs=$.map(this._disabledInputs,
function(value){return(value==target?null:value);});
this._disabledInputs[this._disabledInputs.length]=target;
},




_isDisabledDatepicker:function(target){
if(!target){
return false;
}
for(var i=0;i<this._disabledInputs.length;i++){
if(this._disabledInputs[i]==target)
return true;
}
return false;
},





_getInst:function(target){
try{
return $.data(target,PROP_NAME);
}
catch(err){
throw'Missing instance data for this datepicker';
}
},









_optionDatepicker:function(target,name,value){
var inst=this._getInst(target);
if(arguments.length==2&&typeof name=='string'){
return(name=='defaults'?$.extend({},$.datepicker._defaults):
(inst?(name=='all'?$.extend({},inst.settings):
this._get(inst,name)):null));
}
var settings=name||{};
if(typeof name=='string'){
settings={};
settings[name]=value;
}
if(inst){
if(this._curInst==inst){
this._hideDatepicker();
}
var date=this._getDateDatepicker(target,true);
var minDate=this._getMinMaxDate(inst,'min');
var maxDate=this._getMinMaxDate(inst,'max');
extendRemove(inst.settings,settings);

if(minDate!==null&&settings['dateFormat']!==undefined&&settings['minDate']===undefined)
inst.settings.minDate=this._formatDate(inst,minDate);
if(maxDate!==null&&settings['dateFormat']!==undefined&&settings['maxDate']===undefined)
inst.settings.maxDate=this._formatDate(inst,maxDate);
this._attachments($(target),inst);
this._autoSize(inst);
this._setDate(inst,date);
this._updateAlternate(inst);
this._updateDatepicker(inst);
}
},


_changeDatepicker:function(target,name,value){
this._optionDatepicker(target,name,value);
},



_refreshDatepicker:function(target){
var inst=this._getInst(target);
if(inst){
this._updateDatepicker(inst);
}
},




_setDateDatepicker:function(target,date){
var inst=this._getInst(target);
if(inst){
this._setDate(inst,date);
this._updateDatepicker(inst);
this._updateAlternate(inst);
}
},





_getDateDatepicker:function(target,noDefault){
var inst=this._getInst(target);
if(inst&&!inst.inline)
this._setDateFromField(inst,noDefault);
return(inst?this._getDate(inst):null);
},


_doKeyDown:function(event){
var inst=$.datepicker._getInst(event.target);
var handled=true;
var isRTL=inst.dpDiv.is('.ui-datepicker-rtl');
inst._keyEvent=true;
if($.datepicker._datepickerShowing)
switch(event.keyCode){
case 9:$.datepicker._hideDatepicker();
handled=false;
break;
case 13:var sel=$('td.'+$.datepicker._dayOverClass+':not(.'+
$.datepicker._currentClass+')',inst.dpDiv);
if(sel[0])
$.datepicker._selectDay(event.target,inst.selectedMonth,inst.selectedYear,sel[0]);
var onSelect=$.datepicker._get(inst,'onSelect');
if(onSelect){
var dateStr=$.datepicker._formatDate(inst);


onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);
}
else
$.datepicker._hideDatepicker();
return false;
break;
case 27:$.datepicker._hideDatepicker();
break;
case 33:$.datepicker._adjustDate(event.target,(event.ctrlKey?
-$.datepicker._get(inst,'stepBigMonths'):
-$.datepicker._get(inst,'stepMonths')),'M');
break;
case 34:$.datepicker._adjustDate(event.target,(event.ctrlKey?
+$.datepicker._get(inst,'stepBigMonths'):
+$.datepicker._get(inst,'stepMonths')),'M');
break;
case 35:if(event.ctrlKey||event.metaKey)$.datepicker._clearDate(event.target);
handled=event.ctrlKey||event.metaKey;
break;
case 36:if(event.ctrlKey||event.metaKey)$.datepicker._gotoToday(event.target);
handled=event.ctrlKey||event.metaKey;
break;
case 37:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,(isRTL?+1:-1),'D');
handled=event.ctrlKey||event.metaKey;

if(event.originalEvent.altKey)$.datepicker._adjustDate(event.target,(event.ctrlKey?
-$.datepicker._get(inst,'stepBigMonths'):
-$.datepicker._get(inst,'stepMonths')),'M');

break;
case 38:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,-7,'D');
handled=event.ctrlKey||event.metaKey;
break;
case 39:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,(isRTL?-1:+1),'D');
handled=event.ctrlKey||event.metaKey;

if(event.originalEvent.altKey)$.datepicker._adjustDate(event.target,(event.ctrlKey?
+$.datepicker._get(inst,'stepBigMonths'):
+$.datepicker._get(inst,'stepMonths')),'M');

break;
case 40:if(event.ctrlKey||event.metaKey)$.datepicker._adjustDate(event.target,+7,'D');
handled=event.ctrlKey||event.metaKey;
break;
default:handled=false;
}
else if(event.keyCode==36&&event.ctrlKey)
$.datepicker._showDatepicker(this);
else{
handled=false;
}
if(handled){
event.preventDefault();
event.stopPropagation();
}
},


_doKeyPress:function(event){
var inst=$.datepicker._getInst(event.target);
if($.datepicker._get(inst,'constrainInput')){
var chars=$.datepicker._possibleChars($.datepicker._get(inst,'dateFormat'));
var chr=String.fromCharCode(event.charCode==undefined?event.keyCode:event.charCode);
return event.ctrlKey||event.metaKey||(chr<' '||!chars||chars.indexOf(chr)>-1);
}
},


_doKeyUp:function(event){
var inst=$.datepicker._getInst(event.target);
if(inst.input.val()!=inst.lastVal){
try{
var date=$.datepicker.parseDate($.datepicker._get(inst,'dateFormat'),
(inst.input?inst.input.val():null),
$.datepicker._getFormatConfig(inst));
if(date){
$.datepicker._setDateFromField(inst);
$.datepicker._updateAlternate(inst);
$.datepicker._updateDatepicker(inst);
}
}
catch(err){
$.datepicker.log(err);
}
}
return true;
},





_showDatepicker:function(input){
input=input.target||input;
if(input.nodeName.toLowerCase()!='input')
input=$('input',input.parentNode)[0];
if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput==input)
return;
var inst=$.datepicker._getInst(input);
if($.datepicker._curInst&&$.datepicker._curInst!=inst){
$.datepicker._curInst.dpDiv.stop(true,true);
if(inst&&$.datepicker._datepickerShowing){
$.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
}
}
var beforeShow=$.datepicker._get(inst,'beforeShow');
var beforeShowSettings=beforeShow?beforeShow.apply(input,[input,inst]):{};
if(beforeShowSettings===false){

return;
}
extendRemove(inst.settings,beforeShowSettings);
inst.lastVal=null;
$.datepicker._lastInput=input;
$.datepicker._setDateFromField(inst);
if($.datepicker._inDialog)
input.value='';
if(!$.datepicker._pos){
$.datepicker._pos=$.datepicker._findPos(input);
$.datepicker._pos[1]+=input.offsetHeight;
}
var isFixed=false;
$(input).parents().each(function(){
isFixed|=$(this).css('position')=='fixed';
return!isFixed;
});
if(isFixed&&$.browser.opera){
$.datepicker._pos[0]-=document.documentElement.scrollLeft;
$.datepicker._pos[1]-=document.documentElement.scrollTop;
}
var offset={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};
$.datepicker._pos=null;

inst.dpDiv.empty();

inst.dpDiv.css({position:'absolute',display:'block',top:'-1000px'});
$.datepicker._updateDatepicker(inst);


offset=$.datepicker._checkOffset(inst,offset,isFixed);
inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?
'static':(isFixed?'fixed':'absolute')),display:'none',
left:offset.left+'px',top:offset.top+'px'});
if(!inst.inline){
var showAnim=$.datepicker._get(inst,'showAnim');
var duration=$.datepicker._get(inst,'duration');
var postProcess=function(){
var cover=inst.dpDiv.find('iframe.ui-datepicker-cover');
if(!!cover.length){
var borders=$.datepicker._getBorders(inst.dpDiv);
cover.css({left:-borders[0],top:-borders[1],
width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()});
}
};
inst.dpDiv.zIndex($(input).zIndex()+1);
$.datepicker._datepickerShowing=true;
if($.effects&&$.effects[showAnim])
inst.dpDiv.show(showAnim,$.datepicker._get(inst,'showOptions'),duration,postProcess);
else
inst.dpDiv[showAnim||'show']((showAnim?duration:null),postProcess);
if(!showAnim||!duration)
postProcess();
if(inst.input.is(':visible')&&!inst.input.is(':disabled'))
inst.input.focus();
$.datepicker._curInst=inst;
}
},


_updateDatepicker:function(inst){
var self=this;
self.maxRows=4;
var borders=$.datepicker._getBorders(inst.dpDiv);
instActive=inst;
inst.dpDiv.empty().append(this._generateHTML(inst));
var cover=inst.dpDiv.find('iframe.ui-datepicker-cover');
if(!!cover.length){
cover.css({left:-borders[0],top:-borders[1],width:inst.dpDiv.outerWidth(),height:inst.dpDiv.outerHeight()})
}
inst.dpDiv.find('.'+this._dayOverClass+' a').mouseover();
var numMonths=this._getNumberOfMonths(inst);
var cols=numMonths[1];
var width=17;
inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
if(cols>1)
inst.dpDiv.addClass('ui-datepicker-multi-'+cols).css('width',(width*cols)+'em');
inst.dpDiv[(numMonths[0]!=1||numMonths[1]!=1?'add':'remove')+
'Class']('ui-datepicker-multi');
inst.dpDiv[(this._get(inst,'isRTL')?'add':'remove')+
'Class']('ui-datepicker-rtl');
if(inst==$.datepicker._curInst&&$.datepicker._datepickerShowing&&inst.input&&


inst.input.is(':visible')&&!inst.input.is(':disabled')&&inst.input[0]!=document.activeElement)
inst.input.focus();

if(inst.yearshtml){
var origyearshtml=inst.yearshtml;
setTimeout(function(){

if(origyearshtml===inst.yearshtml&&inst.yearshtml){
inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
}
origyearshtml=inst.yearshtml=null;
},0);
}
},




_getBorders:function(elem){
var convert=function(value){
return{thin:1,medium:2,thick:3}[value]||value;
};
return[parseFloat(convert(elem.css('border-left-width'))),
parseFloat(convert(elem.css('border-top-width')))];
},


_checkOffset:function(inst,offset,isFixed){
var dpWidth=inst.dpDiv.outerWidth();
var dpHeight=inst.dpDiv.outerHeight();
var inputWidth=inst.input?inst.input.outerWidth():0;
var inputHeight=inst.input?inst.input.outerHeight():0;
var viewWidth=document.documentElement.clientWidth+$(document).scrollLeft();
var viewHeight=document.documentElement.clientHeight+$(document).scrollTop();

offset.left-=(this._get(inst,'isRTL')?(dpWidth-inputWidth):0);
offset.left-=(isFixed&&offset.left==inst.input.offset().left)?$(document).scrollLeft():0;
offset.top-=(isFixed&&offset.top==(inst.input.offset().top+inputHeight))?$(document).scrollTop():0;


offset.left-=Math.min(offset.left,(offset.left+dpWidth>viewWidth&&viewWidth>dpWidth)?
Math.abs(offset.left+dpWidth-viewWidth):0);
offset.top-=Math.min(offset.top,(offset.top+dpHeight>viewHeight&&viewHeight>dpHeight)?
Math.abs(dpHeight+inputHeight):0);

return offset;
},


_findPos:function(obj){
var inst=this._getInst(obj);
var isRTL=this._get(inst,'isRTL');
while(obj&&(obj.type=='hidden'||obj.nodeType!=1||$.expr.filters.hidden(obj))){
obj=obj[isRTL?'previousSibling':'nextSibling'];
}
var position=$(obj).offset();
return[position.left,position.top];
},



_hideDatepicker:function(input){
var inst=this._curInst;
if(!inst||(input&&inst!=$.data(input,PROP_NAME)))
return;
if(this._datepickerShowing){
var showAnim=this._get(inst,'showAnim');
var duration=this._get(inst,'duration');
var postProcess=function(){
$.datepicker._tidyDialog(inst);
};
if($.effects&&$.effects[showAnim])
inst.dpDiv.hide(showAnim,$.datepicker._get(inst,'showOptions'),duration,postProcess);
else
inst.dpDiv[(showAnim=='slideDown'?'slideUp':
(showAnim=='fadeIn'?'fadeOut':'hide'))]((showAnim?duration:null),postProcess);
if(!showAnim)
postProcess();
this._datepickerShowing=false;
var onClose=this._get(inst,'onClose');
if(onClose)
onClose.apply((inst.input?inst.input[0]:null),
[(inst.input?inst.input.val():''),inst]);
this._lastInput=null;
if(this._inDialog){
this._dialogInput.css({position:'absolute',left:'0',top:'-100px'});
if($.blockUI){
$.unblockUI();
$('body').append(this.dpDiv);
}
}
this._inDialog=false;
}
},


_tidyDialog:function(inst){
inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
},


_checkExternalClick:function(event){
if(!$.datepicker._curInst)
return;

var $target=$(event.target),
inst=$.datepicker._getInst($target[0]);

if((($target[0].id!=$.datepicker._mainDivId&&
$target.parents('#'+$.datepicker._mainDivId).length==0&&
!$target.hasClass($.datepicker.markerClassName)&&
!$target.closest("."+$.datepicker._triggerClass).length&&
$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)))||
($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=inst))
$.datepicker._hideDatepicker();
},


_adjustDate:function(id,offset,period){
var target=$(id);
var inst=this._getInst(target[0]);
if(this._isDisabledDatepicker(target[0])){
return;
}
this._adjustInstDate(inst,offset+
(period=='M'?this._get(inst,'showCurrentAtPos'):0),
period);
this._updateDatepicker(inst);
},


_gotoToday:function(id){
var target=$(id);
var inst=this._getInst(target[0]);
if(this._get(inst,'gotoCurrent')&&inst.currentDay){
inst.selectedDay=inst.currentDay;
inst.drawMonth=inst.selectedMonth=inst.currentMonth;
inst.drawYear=inst.selectedYear=inst.currentYear;
}
else{
var date=new Date();
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
}
this._notifyChange(inst);
this._adjustDate(target);
},


_selectMonthYear:function(id,select,period){
var target=$(id);
var inst=this._getInst(target[0]);
inst['selected'+(period=='M'?'Month':'Year')]=
inst['draw'+(period=='M'?'Month':'Year')]=
parseInt(select.options[select.selectedIndex].value,10);
this._notifyChange(inst);
this._adjustDate(target);
},


_selectDay:function(id,month,year,td){
var target=$(id);
if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[0])){
return;
}
var inst=this._getInst(target[0]);
inst.selectedDay=inst.currentDay=$('a',td).html();
inst.selectedMonth=inst.currentMonth=month;
inst.selectedYear=inst.currentYear=year;
this._selectDate(id,this._formatDate(inst,
inst.currentDay,inst.currentMonth,inst.currentYear));
},


_clearDate:function(id){
var target=$(id);
var inst=this._getInst(target[0]);
this._selectDate(target,'');
},


_selectDate:function(id,dateStr){
var target=$(id);
var inst=this._getInst(target[0]);
dateStr=(dateStr!=null?dateStr:this._formatDate(inst));
if(inst.input)
inst.input.val(dateStr);
this._updateAlternate(inst);
var onSelect=this._get(inst,'onSelect');
if(onSelect)
onSelect.apply((inst.input?inst.input[0]:null),[dateStr,inst]);
else if(inst.input)
inst.input.trigger('change');
if(inst.inline)
this._updateDatepicker(inst);
else{
this._hideDatepicker();
this._lastInput=inst.input[0];
if(typeof(inst.input[0])!='object')
inst.input.focus();
this._lastInput=null;
}
},


_updateAlternate:function(inst){
var altField=this._get(inst,'altField');
if(altField){
var altFormat=this._get(inst,'altFormat')||this._get(inst,'dateFormat');
var date=this._getDate(inst);
var dateStr=this.formatDate(altFormat,date,this._getFormatConfig(inst));
$(altField).each(function(){$(this).val(dateStr);});
}
},




noWeekends:function(date){
var day=date.getDay();
return[(day>0&&day<6),''];
},




iso8601Week:function(date){
var checkDate=new Date(date.getTime());

checkDate.setDate(checkDate.getDate()+4-(checkDate.getDay()||7));
var time=checkDate.getTime();
checkDate.setMonth(0);
checkDate.setDate(1);
return Math.floor(Math.round((time-checkDate)/86400000)/7)+1;
},













parseDate:function(format,value,settings){
if(format==null||value==null)
throw'Invalid arguments';
value=(typeof value=='object'?value.toString():value+'');
if(value=='')
return null;
var shortYearCutoff=(settings?settings.shortYearCutoff:null)||this._defaults.shortYearCutoff;
shortYearCutoff=(typeof shortYearCutoff!='string'?shortYearCutoff:
new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;
var year=-1;
var month=-1;
var day=-1;
var doy=-1;
var literal=false;

var lookAhead=function(match){
var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches)
iFormat++;
return matches;
};

var getNumber=function(match){
var isDoubled=lookAhead(match);
var size=(match=='@'?14:(match=='!'?20:
(match=='y'&&isDoubled?4:(match=='o'?3:2))));
var digits=new RegExp('^\\d{1,'+size+'}');
var num=value.substring(iValue).match(digits);
if(!num)
throw'Missing number at position '+iValue;
iValue+=num[0].length;
return parseInt(num[0],10);
};

var getName=function(match,shortNames,longNames){
var names=$.map(lookAhead(match)?longNames:shortNames,function(v,k){
return[[k,v]];
}).sort(function(a,b){
return-(a[1].length-b[1].length);
});
var index=-1;
$.each(names,function(i,pair){
var name=pair[1];
if(value.substr(iValue,name.length).toLowerCase()==name.toLowerCase()){
index=pair[0];
iValue+=name.length;
return false;
}
});
if(index!=-1)
return index+1;
else
throw'Unknown name at position '+iValue;
};

var checkLiteral=function(){
if(value.charAt(iValue)!=format.charAt(iFormat))
throw'Unexpected literal at position '+iValue;
iValue++;
};
var iValue=0;
for(var iFormat=0;iFormat<format.length;iFormat++){
if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;
else
checkLiteral();
else
switch(format.charAt(iFormat)){
case'd':
day=getNumber('d');
break;
case'D':
getName('D',dayNamesShort,dayNames);
break;
case'o':
doy=getNumber('o');
break;
case'm':
month=getNumber('m');
break;
case'M':
month=getName('M',monthNamesShort,monthNames);
break;
case'y':
year=getNumber('y');
break;
case'@':
var date=new Date(getNumber('@'));
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case'!':
var date=new Date((getNumber('!')-this._ticksTo1970)/10000);
year=date.getFullYear();
month=date.getMonth()+1;
day=date.getDate();
break;
case"'":
if(lookAhead("'"))
checkLiteral();
else
literal=true;
break;
default:
checkLiteral();
}
}
if(iValue<value.length){
throw"Extra/unparsed characters found in date: "+value.substring(iValue);
}
if(year==-1)
year=new Date().getFullYear();
else if(year<100)
year+=new Date().getFullYear()-new Date().getFullYear()%100+
(year<=shortYearCutoff?0:-100);
if(doy>-1){
month=1;
day=doy;
do{
var dim=this._getDaysInMonth(year,month-1);
if(day<=dim)
break;
month++;
day-=dim;
}while(true);
}
var date=this._daylightSavingAdjust(new Date(year,month-1,day));
if(date.getFullYear()!=year||date.getMonth()+1!=month||date.getDate()!=day)
throw'Invalid date';
return date;
},


ATOM:'yy-mm-dd',
COOKIE:'D, dd M yy',
ISO_8601:'yy-mm-dd',
RFC_822:'D, d M y',
RFC_850:'DD, dd-M-y',
RFC_1036:'D, d M y',
RFC_1123:'D, d M yy',
RFC_2822:'D, d M yy',
RSS:'D, d M y',
TICKS:'!',
TIMESTAMP:'@',
W3C:'yy-mm-dd',

_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+
Math.floor(1970/400))*24*60*60*10000000),




























formatDate:function(format,date,settings){
if(!date)
return'';
var dayNamesShort=(settings?settings.dayNamesShort:null)||this._defaults.dayNamesShort;
var dayNames=(settings?settings.dayNames:null)||this._defaults.dayNames;
var monthNamesShort=(settings?settings.monthNamesShort:null)||this._defaults.monthNamesShort;
var monthNames=(settings?settings.monthNames:null)||this._defaults.monthNames;

var lookAhead=function(match){
var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches)
iFormat++;
return matches;
};

var formatNumber=function(match,value,len){
var num=''+value;
if(lookAhead(match))
while(num.length<len)
num='0'+num;
return num;
};

var formatName=function(match,value,shortNames,longNames){
return(lookAhead(match)?longNames[value]:shortNames[value]);
};
var output='';
var literal=false;
if(date)
for(var iFormat=0;iFormat<format.length;iFormat++){
if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;
else
output+=format.charAt(iFormat);
else
switch(format.charAt(iFormat)){
case'd':
output+=formatNumber('d',date.getDate(),2);
break;
case'D':
output+=formatName('D',date.getDay(),dayNamesShort,dayNames);
break;
case'o':
output+=formatNumber('o',
Math.round((new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime()-new Date(date.getFullYear(),0,0).getTime())/86400000),3);
break;
case'm':
output+=formatNumber('m',date.getMonth()+1,2);
break;
case'M':
output+=formatName('M',date.getMonth(),monthNamesShort,monthNames);
break;
case'y':
output+=(lookAhead('y')?date.getFullYear():
(date.getYear()%100<10?'0':'')+date.getYear()%100);
break;
case'@':
output+=date.getTime();
break;
case'!':
output+=date.getTime()*10000+this._ticksTo1970;
break;
case"'":
if(lookAhead("'"))
output+="'";
else
literal=true;
break;
default:
output+=format.charAt(iFormat);
}
}
return output;
},


_possibleChars:function(format){
var chars='';
var literal=false;

var lookAhead=function(match){
var matches=(iFormat+1<format.length&&format.charAt(iFormat+1)==match);
if(matches)
iFormat++;
return matches;
};
for(var iFormat=0;iFormat<format.length;iFormat++)
if(literal)
if(format.charAt(iFormat)=="'"&&!lookAhead("'"))
literal=false;
else
chars+=format.charAt(iFormat);
else
switch(format.charAt(iFormat)){
case'd':case'm':case'y':case'@':
chars+='0123456789';
break;
case'D':case'M':
return null;
case"'":
if(lookAhead("'"))
chars+="'";
else
literal=true;
break;
default:
chars+=format.charAt(iFormat);
}
return chars;
},


_get:function(inst,name){
return inst.settings[name]!==undefined?
inst.settings[name]:this._defaults[name];
},


_setDateFromField:function(inst,noDefault){
if(inst.input.val()==inst.lastVal){
return;
}
var dateFormat=this._get(inst,'dateFormat');
var dates=inst.lastVal=inst.input?inst.input.val():null;
var date,defaultDate;
date=defaultDate=this._getDefaultDate(inst);
var settings=this._getFormatConfig(inst);
try{
date=this.parseDate(dateFormat,dates,settings)||defaultDate;
}catch(event){
this.log(event);
dates=(noDefault?'':dates);
}
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
inst.currentDay=(dates?date.getDate():0);
inst.currentMonth=(dates?date.getMonth():0);
inst.currentYear=(dates?date.getFullYear():0);
this._adjustInstDate(inst);
},


_getDefaultDate:function(inst){
return this._restrictMinMax(inst,
this._determineDate(inst,this._get(inst,'defaultDate'),new Date()));
},


_determineDate:function(inst,date,defaultDate){
var offsetNumeric=function(offset){
var date=new Date();
date.setDate(date.getDate()+offset);
return date;
};
var offsetString=function(offset){
try{
return $.datepicker.parseDate($.datepicker._get(inst,'dateFormat'),
offset,$.datepicker._getFormatConfig(inst));
}
catch(e){

}
var date=(offset.toLowerCase().match(/^c/)?
$.datepicker._getDate(inst):null)||new Date();
var year=date.getFullYear();
var month=date.getMonth();
var day=date.getDate();
var pattern=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
var matches=pattern.exec(offset);
while(matches){
switch(matches[2]||'d'){
case'd':case'D':
day+=parseInt(matches[1],10);break;
case'w':case'W':
day+=parseInt(matches[1],10)*7;break;
case'm':case'M':
month+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break;
case'y':case'Y':
year+=parseInt(matches[1],10);
day=Math.min(day,$.datepicker._getDaysInMonth(year,month));
break;
}
matches=pattern.exec(offset);
}
return new Date(year,month,day);
};
var newDate=(date==null||date===''?defaultDate:(typeof date=='string'?offsetString(date):
(typeof date=='number'?(isNaN(date)?defaultDate:offsetNumeric(date)):new Date(date.getTime()))));
newDate=(newDate&&newDate.toString()=='Invalid Date'?defaultDate:newDate);
if(newDate){
newDate.setHours(0);
newDate.setMinutes(0);
newDate.setSeconds(0);
newDate.setMilliseconds(0);
}
return this._daylightSavingAdjust(newDate);
},







_daylightSavingAdjust:function(date){
if(!date)return null;
date.setHours(date.getHours()>12?date.getHours()+2:0);
return date;
},


_setDate:function(inst,date,noChange){
var clear=!date;
var origMonth=inst.selectedMonth;
var origYear=inst.selectedYear;
var newDate=this._restrictMinMax(inst,this._determineDate(inst,date,new Date()));
inst.selectedDay=inst.currentDay=newDate.getDate();
inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();
inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();
if((origMonth!=inst.selectedMonth||origYear!=inst.selectedYear)&&!noChange)
this._notifyChange(inst);
this._adjustInstDate(inst);
if(inst.input){
inst.input.val(clear?'':this._formatDate(inst));
}
},


_getDate:function(inst){
var startDate=(!inst.currentYear||(inst.input&&inst.input.val()=='')?null:
this._daylightSavingAdjust(new Date(
inst.currentYear,inst.currentMonth,inst.currentDay)));
return startDate;
},


_generateHTML:function(inst){
var today=new Date();
today=this._daylightSavingAdjust(
new Date(today.getFullYear(),today.getMonth(),today.getDate()));
var isRTL=this._get(inst,'isRTL');
var showButtonPanel=this._get(inst,'showButtonPanel');
var hideIfNoPrevNext=this._get(inst,'hideIfNoPrevNext');
var navigationAsDateFormat=this._get(inst,'navigationAsDateFormat');
var numMonths=this._getNumberOfMonths(inst);
var showCurrentAtPos=this._get(inst,'showCurrentAtPos');
var stepMonths=this._get(inst,'stepMonths');
var isMultiMonth=(numMonths[0]!=1||numMonths[1]!=1);
var currentDate=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):
new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
var minDate=this._getMinMaxDate(inst,'min');
var maxDate=this._getMinMaxDate(inst,'max');
var drawMonth=inst.drawMonth-showCurrentAtPos;
var drawYear=inst.drawYear;
if(drawMonth<0){
drawMonth+=12;
drawYear--;
}
if(maxDate){
var maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
maxDate.getMonth()-(numMonths[0]*numMonths[1])+1,maxDate.getDate()));
maxDraw=(minDate&&maxDraw<minDate?minDate:maxDraw);
while(this._daylightSavingAdjust(new Date(drawYear,drawMonth,1))>maxDraw){
drawMonth--;
if(drawMonth<0){
drawMonth=11;
drawYear--;
}
}
}
inst.drawMonth=drawMonth;
inst.drawYear=drawYear;
var prevText=this._get(inst,'prevText');
prevText=(!navigationAsDateFormat?prevText:this.formatDate(prevText,
this._daylightSavingAdjust(new Date(drawYear,drawMonth-stepMonths,1)),
this._getFormatConfig(inst)));
var prev=(this._canAdjustMonth(inst,-1,drawYear,drawMonth)?
'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+dpuuid+
'.datepicker._adjustDate(\'#'+inst.id+'\', -'+stepMonths+', \'M\');"'+
' title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'e':'w')+'">'+prevText+'</span></a>':
(hideIfNoPrevNext?'':'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+prevText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'e':'w')+'">'+prevText+'</span></a>'));
var nextText=this._get(inst,'nextText');
nextText=(!navigationAsDateFormat?nextText:this.formatDate(nextText,
this._daylightSavingAdjust(new Date(drawYear,drawMonth+stepMonths,1)),
this._getFormatConfig(inst)));
var next=(this._canAdjustMonth(inst,+1,drawYear,drawMonth)?
'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+dpuuid+
'.datepicker._adjustDate(\'#'+inst.id+'\', +'+stepMonths+', \'M\');"'+
' title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'w':'e')+'">'+nextText+'</span></a>':
(hideIfNoPrevNext?'':'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+nextText+'"><span class="ui-icon ui-icon-circle-triangle-'+(isRTL?'w':'e')+'">'+nextText+'</span></a>'));
var currentText=this._get(inst,'currentText');
var gotoDate=(this._get(inst,'gotoCurrent')&&inst.currentDay?currentDate:today);
currentText=(!navigationAsDateFormat?currentText:
this.formatDate(currentText,gotoDate,this._getFormatConfig(inst)));
var controls=(!inst.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+dpuuid+
'.datepicker._hideDatepicker();">'+this._get(inst,'closeText')+'</button>':'');
var buttonPanel=(showButtonPanel)?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(isRTL?controls:'')+
(this._isInRange(inst,gotoDate)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+dpuuid+
'.datepicker._gotoToday(\'#'+inst.id+'\');"'+
'>'+currentText+'</button>':'')+(isRTL?'':controls)+'</div>':'';
var firstDay=parseInt(this._get(inst,'firstDay'),10);
firstDay=(isNaN(firstDay)?0:firstDay);
var showWeek=this._get(inst,'showWeek');
var dayNames=this._get(inst,'dayNames');
var dayNamesShort=this._get(inst,'dayNamesShort');
var dayNamesMin=this._get(inst,'dayNamesMin');
var monthNames=this._get(inst,'monthNames');
var monthNamesShort=this._get(inst,'monthNamesShort');
var beforeShowDay=this._get(inst,'beforeShowDay');
var showOtherMonths=this._get(inst,'showOtherMonths');
var selectOtherMonths=this._get(inst,'selectOtherMonths');
var calculateWeek=this._get(inst,'calculateWeek')||this.iso8601Week;
var defaultDate=this._getDefaultDate(inst);
var html='';
for(var row=0;row<numMonths[0];row++){
var group='';
this.maxRows=4;
for(var col=0;col<numMonths[1];col++){
var selectedDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,inst.selectedDay));
var cornerClass=' ui-corner-all';
var calender='';
if(isMultiMonth){
calender+='<div class="ui-datepicker-group';
if(numMonths[1]>1)
switch(col){
case 0:calender+=' ui-datepicker-group-first';
cornerClass=' ui-corner-'+(isRTL?'right':'left');break;
case numMonths[1]-1:calender+=' ui-datepicker-group-last';
cornerClass=' ui-corner-'+(isRTL?'left':'right');break;
default:calender+=' ui-datepicker-group-middle';cornerClass='';break;
}
calender+='">';
}
calender+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+cornerClass+'">'+
(/all|left/.test(cornerClass)&&row==0?(isRTL?next:prev):'')+
(/all|right/.test(cornerClass)&&row==0?(isRTL?prev:next):'')+
this._generateMonthYearHeader(inst,drawMonth,drawYear,minDate,maxDate,
row>0||col>0,monthNames,monthNamesShort)+
'</div><table class="ui-datepicker-calendar"><thead>'+
'<tr>';
var thead=(showWeek?'<th class="ui-datepicker-week-col">'+this._get(inst,'weekHeader')+'</th>':'');
for(var dow=0;dow<7;dow++){
var day=(dow+firstDay)%7;
thead+='<th'+((dow+firstDay+6)%7>=5?' class="ui-datepicker-week-end"':'')+'>'+
'<span title="'+dayNames[day]+'">'+dayNamesMin[day]+'</span></th>';
}
calender+=thead+'</tr></thead><tbody>';
var daysInMonth=this._getDaysInMonth(drawYear,drawMonth);
if(drawYear==inst.selectedYear&&drawMonth==inst.selectedMonth)
inst.selectedDay=Math.min(inst.selectedDay,daysInMonth);
var leadDays=(this._getFirstDayOfMonth(drawYear,drawMonth)-firstDay+7)%7;
var curRows=Math.ceil((leadDays+daysInMonth)/7);
var numRows=(isMultiMonth?this.maxRows>curRows?this.maxRows:curRows:curRows);
this.maxRows=numRows;
var printDate=this._daylightSavingAdjust(new Date(drawYear,drawMonth,1-leadDays));
for(var dRow=0;dRow<numRows;dRow++){
calender+='<tr>';
var tbody=(!showWeek?'':'<td class="ui-datepicker-week-col">'+
this._get(inst,'calculateWeek')(printDate)+'</td>');
for(var dow=0;dow<7;dow++){
var daySettings=(beforeShowDay?
beforeShowDay.apply((inst.input?inst.input[0]:null),[printDate]):[true,'']);
var otherMonth=(printDate.getMonth()!=drawMonth);
var unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[0]||
(minDate&&printDate<minDate)||(maxDate&&printDate>maxDate);
tbody+='<td class="'+
((dow+firstDay+6)%7>=5?' ui-datepicker-week-end':'')+
(otherMonth?' ui-datepicker-other-month':'')+
((printDate.getTime()==selectedDate.getTime()&&drawMonth==inst.selectedMonth&&inst._keyEvent)||
(defaultDate.getTime()==printDate.getTime()&&defaultDate.getTime()==selectedDate.getTime())?

' '+this._dayOverClass:'')+
(unselectable?' '+this._unselectableClass+' ui-state-disabled':'')+
(otherMonth&&!showOtherMonths?'':' '+daySettings[1]+
(printDate.getTime()==currentDate.getTime()?' '+this._currentClass:'')+
(printDate.getTime()==today.getTime()?' ui-datepicker-today':''))+'"'+
((!otherMonth||showOtherMonths)&&daySettings[2]?' title="'+daySettings[2]+'"':'')+
(unselectable?'':' onclick="DP_jQuery_'+dpuuid+'.datepicker._selectDay(\'#'+
inst.id+'\','+printDate.getMonth()+','+printDate.getFullYear()+', this);return false;"')+'>'+
(otherMonth&&!showOtherMonths?'&#xa0;':
(unselectable?'<span class="ui-state-default">'+printDate.getDate()+'</span>':'<a class="ui-state-default'+
(printDate.getTime()==today.getTime()?' ui-state-highlight':'')+
(printDate.getTime()==currentDate.getTime()?' ui-state-active':'')+
(otherMonth?' ui-priority-secondary':'')+
'" href="#">'+printDate.getDate()+'</a>'))+'</td>';
printDate.setDate(printDate.getDate()+1);
printDate=this._daylightSavingAdjust(printDate);
}
calender+=tbody+'</tr>';
}
drawMonth++;
if(drawMonth>11){
drawMonth=0;
drawYear++;
}
calender+='</tbody></table>'+(isMultiMonth?'</div>'+
((numMonths[0]>0&&col==numMonths[1]-1)?'<div class="ui-datepicker-row-break"></div>':''):'');
group+=calender;
}
html+=group;
}
html+=buttonPanel+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?
'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':'');
inst._keyEvent=false;
return html;
},


_generateMonthYearHeader:function(inst,drawMonth,drawYear,minDate,maxDate,
secondary,monthNames,monthNamesShort){
var changeMonth=this._get(inst,'changeMonth');
var changeYear=this._get(inst,'changeYear');
var showMonthAfterYear=this._get(inst,'showMonthAfterYear');
var html='<div class="ui-datepicker-title">';
var monthHtml='';

if(secondary||!changeMonth)
monthHtml+='<span class="ui-datepicker-month">'+monthNames[drawMonth]+'</span>';
else{
var inMinYear=(minDate&&minDate.getFullYear()==drawYear);
var inMaxYear=(maxDate&&maxDate.getFullYear()==drawYear);
monthHtml+='<select class="ui-datepicker-month" '+
'onchange="DP_jQuery_'+dpuuid+'.datepicker._selectMonthYear(\'#'+inst.id+'\', this, \'M\');" '+
'>';
for(var month=0;month<12;month++){
if((!inMinYear||month>=minDate.getMonth())&&
(!inMaxYear||month<=maxDate.getMonth()))
monthHtml+='<option value="'+month+'"'+
(month==drawMonth?' selected="selected"':'')+
'>'+monthNamesShort[month]+'</option>';
}
monthHtml+='</select>';
}
if(!showMonthAfterYear)
html+=monthHtml+(secondary||!(changeMonth&&changeYear)?'&#xa0;':'');

if(!inst.yearshtml){
inst.yearshtml='';
if(secondary||!changeYear)
html+='<span class="ui-datepicker-year">'+drawYear+'</span>';
else{

var years=this._get(inst,'yearRange').split(':');
var thisYear=new Date().getFullYear();
var determineYear=function(value){
var year=(value.match(/c[+-].*/)?drawYear+parseInt(value.substring(1),10):
(value.match(/[+-].*/)?thisYear+parseInt(value,10):
parseInt(value,10)));
return(isNaN(year)?thisYear:year);
};
var year=determineYear(years[0]);
var endYear=Math.max(year,determineYear(years[1]||''));
year=(minDate?Math.max(year,minDate.getFullYear()):year);
endYear=(maxDate?Math.min(endYear,maxDate.getFullYear()):endYear);
inst.yearshtml+='<select class="ui-datepicker-year" '+
'onchange="DP_jQuery_'+dpuuid+'.datepicker._selectMonthYear(\'#'+inst.id+'\', this, \'Y\');" '+
'>';
for(;year<=endYear;year++){
inst.yearshtml+='<option value="'+year+'"'+
(year==drawYear?' selected="selected"':'')+
'>'+year+'</option>';
}
inst.yearshtml+='</select>';

html+=inst.yearshtml;
inst.yearshtml=null;
}
}
html+=this._get(inst,'yearSuffix');
if(showMonthAfterYear)
html+=(secondary||!(changeMonth&&changeYear)?'&#xa0;':'')+monthHtml;
html+='</div>';
return html;
},


_adjustInstDate:function(inst,offset,period){
var year=inst.drawYear+(period=='Y'?offset:0);
var month=inst.drawMonth+(period=='M'?offset:0);
var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,month))+
(period=='D'?offset:0);
var date=this._restrictMinMax(inst,
this._daylightSavingAdjust(new Date(year,month,day)));
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
if(period=='M'||period=='Y')
this._notifyChange(inst);
},


_restrictMinMax:function(inst,date){
var minDate=this._getMinMaxDate(inst,'min');
var maxDate=this._getMinMaxDate(inst,'max');
var newDate=(minDate&&date<minDate?minDate:date);
newDate=(maxDate&&newDate>maxDate?maxDate:newDate);
return newDate;
},


_notifyChange:function(inst){
var onChange=this._get(inst,'onChangeMonthYear');
if(onChange)
onChange.apply((inst.input?inst.input[0]:null),
[inst.selectedYear,inst.selectedMonth+1,inst]);
},


_getNumberOfMonths:function(inst){
var numMonths=this._get(inst,'numberOfMonths');
return(numMonths==null?[1,1]:(typeof numMonths=='number'?[1,numMonths]:numMonths));
},


_getMinMaxDate:function(inst,minMax){
return this._determineDate(inst,this._get(inst,minMax+'Date'),null);
},


_getDaysInMonth:function(year,month){
return 32-this._daylightSavingAdjust(new Date(year,month,32)).getDate();
},


_getFirstDayOfMonth:function(year,month){
return new Date(year,month,1).getDay();
},


_canAdjustMonth:function(inst,offset,curYear,curMonth){
var numMonths=this._getNumberOfMonths(inst);
var date=this._daylightSavingAdjust(new Date(curYear,
curMonth+(offset<0?offset:numMonths[0]*numMonths[1]),1));
if(offset<0)
date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));
return this._isInRange(inst,date);
},


_isInRange:function(inst,date){
var minDate=this._getMinMaxDate(inst,'min');
var maxDate=this._getMinMaxDate(inst,'max');
return((!minDate||date.getTime()>=minDate.getTime())&&
(!maxDate||date.getTime()<=maxDate.getTime()));
},


_getFormatConfig:function(inst){
var shortYearCutoff=this._get(inst,'shortYearCutoff');
shortYearCutoff=(typeof shortYearCutoff!='string'?shortYearCutoff:
new Date().getFullYear()%100+parseInt(shortYearCutoff,10));
return{shortYearCutoff:shortYearCutoff,
dayNamesShort:this._get(inst,'dayNamesShort'),dayNames:this._get(inst,'dayNames'),
monthNamesShort:this._get(inst,'monthNamesShort'),monthNames:this._get(inst,'monthNames')};
},


_formatDate:function(inst,day,month,year){
if(!day){
inst.currentDay=inst.selectedDay;
inst.currentMonth=inst.selectedMonth;
inst.currentYear=inst.selectedYear;
}
var date=(day?(typeof day=='object'?day:
this._daylightSavingAdjust(new Date(year,month,day))):
this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return this.formatDate(this._get(inst,'dateFormat'),date,this._getFormatConfig(inst));
}
});






function bindHover(dpDiv){
var selector='button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
return dpDiv.bind('mouseout',function(event){
var elem=$(event.target).closest(selector);
if(!elem.length){
return;
}
elem.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover");
})
.bind('mouseover',function(event){
var elem=$(event.target).closest(selector);
if($.datepicker._isDisabledDatepicker(instActive.inline?dpDiv.parent()[0]:instActive.input[0])||
!elem.length){
return;
}
elem.parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
elem.addClass('ui-state-hover');
if(elem.hasClass('ui-datepicker-prev'))elem.addClass('ui-datepicker-prev-hover');
if(elem.hasClass('ui-datepicker-next'))elem.addClass('ui-datepicker-next-hover');
});
}


function extendRemove(target,props){
$.extend(target,props);
for(var name in props)
if(props[name]==null||props[name]==undefined)
target[name]=props[name];
return target;
};


function isArray(a){
return(a&&(($.browser.safari&&typeof a=='object'&&a.length)||
(a.constructor&&a.constructor.toString().match(/\Array\(\)/))));
};





$.fn.datepicker=function(options){


if(!this.length){
return this;
}


if(!$.datepicker.initialized){
$(document).mousedown($.datepicker._checkExternalClick).
find('body').append($.datepicker.dpDiv);
$.datepicker.initialized=true;
}

var otherArgs=Array.prototype.slice.call(arguments,1);
if(typeof options=='string'&&(options=='isDisabled'||options=='getDate'||options=='widget'))
return $.datepicker['_'+options+'Datepicker'].
apply($.datepicker,[this[0]].concat(otherArgs));
if(options=='option'&&arguments.length==2&&typeof arguments[1]=='string')
return $.datepicker['_'+options+'Datepicker'].
apply($.datepicker,[this[0]].concat(otherArgs));
return this.each(function(){
typeof options=='string'?
$.datepicker['_'+options+'Datepicker'].
apply($.datepicker,[this].concat(otherArgs)):
$.datepicker._attachDatepicker(this,options);
});
};

$.datepicker=new Datepicker();
$.datepicker.initialized=false;
$.datepicker.uuid=new Date().getTime();
$.datepicker.version="1.8.21";



window['DP_jQuery_'+dpuuid]=$;

})(jQuery);/*!
 * jQuery UI Progressbar 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */

(function($,undefined){

$.widget("ui.progressbar",{
options:{
value:0,
max:100
},

min:0,

_create:function(){
this.element
.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
.attr({
role:"progressbar",
"aria-valuemin":this.min,
"aria-valuemax":this.options.max,
"aria-valuenow":this._value()
});

this.valueDiv=$("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>")
.appendTo(this.element);

this.oldValue=this._value();
this._refreshValue();
},

destroy:function(){
this.element
.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all")
.removeAttr("role")
.removeAttr("aria-valuemin")
.removeAttr("aria-valuemax")
.removeAttr("aria-valuenow");

this.valueDiv.remove();

$.Widget.prototype.destroy.apply(this,arguments);
},

value:function(newValue){
if(newValue===undefined){
return this._value();
}

this._setOption("value",newValue);
return this;
},

_setOption:function(key,value){
if(key==="value"){
this.options.value=value;
this._refreshValue();
if(this._value()===this.options.max){
this._trigger("complete");
}
}

$.Widget.prototype._setOption.apply(this,arguments);
},

_value:function(){
var val=this.options.value;

if(typeof val!=="number"){
val=0;
}
return Math.min(this.options.max,Math.max(this.min,val));
},

_percentage:function(){
return 100*this._value()/this.options.max;
},

_refreshValue:function(){
var value=this.value();
var percentage=this._percentage();

if(this.oldValue!==value){
this.oldValue=value;
this._trigger("change");
}

this.valueDiv
.toggle(value>this.min)
.toggleClass("ui-corner-right",value===this.options.max)
.width(percentage.toFixed(0)+"%");
this.element.attr("aria-valuenow",value);
}
});

$.extend($.ui.progressbar,{
version:"1.8.21"
});

})(jQuery);/*!
 * jQuery UI Effects 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */

;jQuery.effects||(function($,undefined){

$.effects={};








$.each(['backgroundColor','borderBottomColor','borderLeftColor',
'borderRightColor','borderTopColor','borderColor','color','outlineColor'],
function(i,attr){
$.fx.step[attr]=function(fx){
if(!fx.colorInit){
fx.start=getColor(fx.elem,attr);
fx.end=getRGB(fx.end);
fx.colorInit=true;
}

fx.elem.style[attr]='rgb('+
Math.max(Math.min(parseInt((fx.pos*(fx.end[0]-fx.start[0]))+fx.start[0],10),255),0)+','+
Math.max(Math.min(parseInt((fx.pos*(fx.end[1]-fx.start[1]))+fx.start[1],10),255),0)+','+
Math.max(Math.min(parseInt((fx.pos*(fx.end[2]-fx.start[2]))+fx.start[2],10),255),0)+')';
};
});






function getRGB(color){
var result;


if(color&&color.constructor==Array&&color.length==3)
return color;


if(result=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
return[parseInt(result[1],10),parseInt(result[2],10),parseInt(result[3],10)];


if(result=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
return[parseFloat(result[1])*2.55,parseFloat(result[2])*2.55,parseFloat(result[3])*2.55];


if(result=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
return[parseInt(result[1],16),parseInt(result[2],16),parseInt(result[3],16)];


if(result=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
return[parseInt(result[1]+result[1],16),parseInt(result[2]+result[2],16),parseInt(result[3]+result[3],16)];


if(result=/rgba\(0, 0, 0, 0\)/.exec(color))
return colors['transparent'];


return colors[$.trim(color).toLowerCase()];
}

function getColor(elem,attr){
var color;

do{
color=$.curCSS(elem,attr);


if(color!=''&&color!='transparent'||$.nodeName(elem,"body"))
break;

attr="backgroundColor";
}while(elem=elem.parentNode);

return getRGB(color);
};





var colors={
aqua:[0,255,255],
azure:[240,255,255],
beige:[245,245,220],
black:[0,0,0],
blue:[0,0,255],
brown:[165,42,42],
cyan:[0,255,255],
darkblue:[0,0,139],
darkcyan:[0,139,139],
darkgrey:[169,169,169],
darkgreen:[0,100,0],
darkkhaki:[189,183,107],
darkmagenta:[139,0,139],
darkolivegreen:[85,107,47],
darkorange:[255,140,0],
darkorchid:[153,50,204],
darkred:[139,0,0],
darksalmon:[233,150,122],
darkviolet:[148,0,211],
fuchsia:[255,0,255],
gold:[255,215,0],
green:[0,128,0],
indigo:[75,0,130],
khaki:[240,230,140],
lightblue:[173,216,230],
lightcyan:[224,255,255],
lightgreen:[144,238,144],
lightgrey:[211,211,211],
lightpink:[255,182,193],
lightyellow:[255,255,224],
lime:[0,255,0],
magenta:[255,0,255],
maroon:[128,0,0],
navy:[0,0,128],
olive:[128,128,0],
orange:[255,165,0],
pink:[255,192,203],
purple:[128,0,128],
violet:[128,0,128],
red:[255,0,0],
silver:[192,192,192],
white:[255,255,255],
yellow:[255,255,0],
transparent:[255,255,255]
};







var classAnimationActions=['add','remove','toggle'],
shorthandStyles={
border:1,
borderBottom:1,
borderColor:1,
borderLeft:1,
borderRight:1,
borderTop:1,
borderWidth:1,
margin:1,
padding:1
};

function getElementStyles(){
var style=document.defaultView
?document.defaultView.getComputedStyle(this,null)
:this.currentStyle,
newStyle={},
key,
camelCase;


if(style&&style.length&&style[0]&&style[style[0]]){
var len=style.length;
while(len--){
key=style[len];
if(typeof style[key]=='string'){
camelCase=key.replace(/\-(\w)/g,function(all,letter){
return letter.toUpperCase();
});
newStyle[camelCase]=style[key];
}
}
}else{
for(key in style){
if(typeof style[key]==='string'){
newStyle[key]=style[key];
}
}
}

return newStyle;
}

function filterStyles(styles){
var name,value;
for(name in styles){
value=styles[name];
if(

value==null||

$.isFunction(value)||

name in shorthandStyles||

(/scrollbar/).test(name)||


(!(/color/i).test(name)&&isNaN(parseFloat(value)))
){
delete styles[name];
}
}

return styles;
}

function styleDifference(oldStyle,newStyle){
var diff={_:0},
name;

for(name in newStyle){
if(oldStyle[name]!=newStyle[name]){
diff[name]=newStyle[name];
}
}

return diff;
}

$.effects.animateClass=function(value,duration,easing,callback){
if($.isFunction(easing)){
callback=easing;
easing=null;
}

return this.queue(function(){
var that=$(this),
originalStyleAttr=that.attr('style')||' ',
originalStyle=filterStyles(getElementStyles.call(this)),
newStyle,
className=that.attr('class')||"";

$.each(classAnimationActions,function(i,action){
if(value[action]){
that[action+'Class'](value[action]);
}
});
newStyle=filterStyles(getElementStyles.call(this));
that.attr('class',className);

that.animate(styleDifference(originalStyle,newStyle),{
queue:false,
duration:duration,
easing:easing,
complete:function(){
$.each(classAnimationActions,function(i,action){
if(value[action]){that[action+'Class'](value[action]);}
});

if(typeof that.attr('style')=='object'){
that.attr('style').cssText='';
that.attr('style').cssText=originalStyleAttr;
}else{
that.attr('style',originalStyleAttr);
}
if(callback){callback.apply(this,arguments);}
$.dequeue(this);
}
});
});
};

$.fn.extend({
_addClass:$.fn.addClass,
addClass:function(classNames,speed,easing,callback){
return speed?$.effects.animateClass.apply(this,[{add:classNames},speed,easing,callback]):this._addClass(classNames);
},

_removeClass:$.fn.removeClass,
removeClass:function(classNames,speed,easing,callback){
return speed?$.effects.animateClass.apply(this,[{remove:classNames},speed,easing,callback]):this._removeClass(classNames);
},

_toggleClass:$.fn.toggleClass,
toggleClass:function(classNames,force,speed,easing,callback){
if(typeof force=="boolean"||force===undefined){
if(!speed){

return this._toggleClass(classNames,force);
}else{
return $.effects.animateClass.apply(this,[(force?{add:classNames}:{remove:classNames}),speed,easing,callback]);
}
}else{

return $.effects.animateClass.apply(this,[{toggle:classNames},force,speed,easing]);
}
},

switchClass:function(remove,add,speed,easing,callback){
return $.effects.animateClass.apply(this,[{add:add,remove:remove},speed,easing,callback]);
}
});







$.extend($.effects,{
version:"1.8.21",


save:function(element,set){
for(var i=0;i<set.length;i++){
if(set[i]!==null)element.data("ec.storage."+set[i],element[0].style[set[i]]);
}
},


restore:function(element,set){
for(var i=0;i<set.length;i++){
if(set[i]!==null)element.css(set[i],element.data("ec.storage."+set[i]));
}
},

setMode:function(el,mode){
if(mode=='toggle')mode=el.is(':hidden')?'show':'hide';
return mode;
},

getBaseline:function(origin,original){

var y,x;
switch(origin[0]){
case'top':y=0;break;
case'middle':y=0.5;break;
case'bottom':y=1;break;
default:y=origin[0]/original.height;
};
switch(origin[1]){
case'left':x=0;break;
case'center':x=0.5;break;
case'right':x=1;break;
default:x=origin[1]/original.width;
};
return{x:x,y:y};
},


createWrapper:function(element){


if(element.parent().is('.ui-effects-wrapper')){
return element.parent();
}


var props={
width:element.outerWidth(true),
height:element.outerHeight(true),
'float':element.css('float')
},
wrapper=$('<div></div>')
.addClass('ui-effects-wrapper')
.css({
fontSize:'100%',
background:'transparent',
border:'none',
margin:0,
padding:0
}),
active=document.activeElement;




try{
active.id;
}catch(e){
active=document.body;
}

element.wrap(wrapper);


if(element[0]===active||$.contains(element[0],active)){
$(active).focus();
}

wrapper=element.parent();


if(element.css('position')=='static'){
wrapper.css({position:'relative'});
element.css({position:'relative'});
}else{
$.extend(props,{
position:element.css('position'),
zIndex:element.css('z-index')
});
$.each(['top','left','bottom','right'],function(i,pos){
props[pos]=element.css(pos);
if(isNaN(parseInt(props[pos],10))){
props[pos]='auto';
}
});
element.css({position:'relative',top:0,left:0,right:'auto',bottom:'auto'});
}

return wrapper.css(props).show();
},

removeWrapper:function(element){
var parent,
active=document.activeElement;

if(element.parent().is('.ui-effects-wrapper')){
parent=element.parent().replaceWith(element);

if(element[0]===active||$.contains(element[0],active)){
$(active).focus();
}
return parent;
}

return element;
},

setTransition:function(element,list,factor,value){
value=value||{};
$.each(list,function(i,x){
var unit=element.cssUnit(x);
if(unit[0]>0)value[x]=unit[0]*factor+unit[1];
});
return value;
}
});


function _normalizeArguments(effect,options,speed,callback){

if(typeof effect=='object'){
callback=options;
speed=null;
options=effect;
effect=options.effect;
}
if($.isFunction(options)){
callback=options;
speed=null;
options={};
}
if(typeof options=='number'||$.fx.speeds[options]){
callback=speed;
speed=options;
options={};
}
if($.isFunction(speed)){
callback=speed;
speed=null;
}

options=options||{};

speed=speed||options.duration;
speed=$.fx.off?0:typeof speed=='number'
?speed:speed in $.fx.speeds?$.fx.speeds[speed]:$.fx.speeds._default;

callback=callback||options.complete;

return[effect,options,speed,callback];
}

function standardSpeed(speed){

if(!speed||typeof speed==="number"||$.fx.speeds[speed]){
return true;
}


if(typeof speed==="string"&&!$.effects[speed]){
return true;
}

return false;
}

$.fn.extend({
effect:function(effect,options,speed,callback){
var args=_normalizeArguments.apply(this,arguments),

args2={
options:args[1],
duration:args[2],
callback:args[3]
},
mode=args2.options.mode,
effectMethod=$.effects[effect];

if($.fx.off||!effectMethod){

if(mode){
return this[mode](args2.duration,args2.callback);
}else{
return this.each(function(){
if(args2.callback){
args2.callback.call(this);
}
});
}
}

return effectMethod.call(this,args2);
},

_show:$.fn.show,
show:function(speed){
if(standardSpeed(speed)){
return this._show.apply(this,arguments);
}else{
var args=_normalizeArguments.apply(this,arguments);
args[1].mode='show';
return this.effect.apply(this,args);
}
},

_hide:$.fn.hide,
hide:function(speed){
if(standardSpeed(speed)){
return this._hide.apply(this,arguments);
}else{
var args=_normalizeArguments.apply(this,arguments);
args[1].mode='hide';
return this.effect.apply(this,args);
}
},


__toggle:$.fn.toggle,
toggle:function(speed){
if(standardSpeed(speed)||typeof speed==="boolean"||$.isFunction(speed)){
return this.__toggle.apply(this,arguments);
}else{
var args=_normalizeArguments.apply(this,arguments);
args[1].mode='toggle';
return this.effect.apply(this,args);
}
},


cssUnit:function(key){
var style=this.css(key),val=[];
$.each(['em','px','%','pt'],function(i,unit){
if(style.indexOf(unit)>0)
val=[parseFloat(style),unit];
});
return val;
}
});













































$.easing.jswing=$.easing.swing;

$.extend($.easing,
{
def:'easeOutQuad',
swing:function(x,t,b,c,d){

return $.easing[$.easing.def](x,t,b,c,d);
},
easeInQuad:function(x,t,b,c,d){
return c*(t/=d)*t+b;
},
easeOutQuad:function(x,t,b,c,d){
return-c*(t/=d)*(t-2)+b;
},
easeInOutQuad:function(x,t,b,c,d){
if((t/=d/2)<1)return c/2*t*t+b;
return-c/2*((--t)*(t-2)-1)+b;
},
easeInCubic:function(x,t,b,c,d){
return c*(t/=d)*t*t+b;
},
easeOutCubic:function(x,t,b,c,d){
return c*((t=t/d-1)*t*t+1)+b;
},
easeInOutCubic:function(x,t,b,c,d){
if((t/=d/2)<1)return c/2*t*t*t+b;
return c/2*((t-=2)*t*t+2)+b;
},
easeInQuart:function(x,t,b,c,d){
return c*(t/=d)*t*t*t+b;
},
easeOutQuart:function(x,t,b,c,d){
return-c*((t=t/d-1)*t*t*t-1)+b;
},
easeInOutQuart:function(x,t,b,c,d){
if((t/=d/2)<1)return c/2*t*t*t*t+b;
return-c/2*((t-=2)*t*t*t-2)+b;
},
easeInQuint:function(x,t,b,c,d){
return c*(t/=d)*t*t*t*t+b;
},
easeOutQuint:function(x,t,b,c,d){
return c*((t=t/d-1)*t*t*t*t+1)+b;
},
easeInOutQuint:function(x,t,b,c,d){
if((t/=d/2)<1)return c/2*t*t*t*t*t+b;
return c/2*((t-=2)*t*t*t*t+2)+b;
},
easeInSine:function(x,t,b,c,d){
return-c*Math.cos(t/d*(Math.PI/2))+c+b;
},
easeOutSine:function(x,t,b,c,d){
return c*Math.sin(t/d*(Math.PI/2))+b;
},
easeInOutSine:function(x,t,b,c,d){
return-c/2*(Math.cos(Math.PI*t/d)-1)+b;
},
easeInExpo:function(x,t,b,c,d){
return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;
},
easeOutExpo:function(x,t,b,c,d){
return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;
},
easeInOutExpo:function(x,t,b,c,d){
if(t==0)return b;
if(t==d)return b+c;
if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;
return c/2*(-Math.pow(2,-10*--t)+2)+b;
},
easeInCirc:function(x,t,b,c,d){
return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;
},
easeOutCirc:function(x,t,b,c,d){
return c*Math.sqrt(1-(t=t/d-1)*t)+b;
},
easeInOutCirc:function(x,t,b,c,d){
if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;
return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;
},
easeInElastic:function(x,t,b,c,d){
var s=1.70158;var p=0;var a=c;
if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;
if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);
return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
},
easeOutElastic:function(x,t,b,c,d){
var s=1.70158;var p=0;var a=c;
if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;
if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);
return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;
},
easeInOutElastic:function(x,t,b,c,d){
var s=1.70158;var p=0;var a=c;
if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);
if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);
if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;
},
easeInBack:function(x,t,b,c,d,s){
if(s==undefined)s=1.70158;
return c*(t/=d)*t*((s+1)*t-s)+b;
},
easeOutBack:function(x,t,b,c,d,s){
if(s==undefined)s=1.70158;
return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
},
easeInOutBack:function(x,t,b,c,d,s){
if(s==undefined)s=1.70158;
if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
},
easeInBounce:function(x,t,b,c,d){
return c-$.easing.easeOutBounce(x,d-t,0,c,d)+b;
},
easeOutBounce:function(x,t,b,c,d){
if((t/=d)<(1/2.75)){
return c*(7.5625*t*t)+b;
}else if(t<(2/2.75)){
return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;
}else if(t<(2.5/2.75)){
return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;
}else{
return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;
}
},
easeInOutBounce:function(x,t,b,c,d){
if(t<d/2)return $.easing.easeInBounce(x,t*2,0,c,d)*.5+b;
return $.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;
}
});


































})(jQuery);/*!
 * jQuery UI Effects Blind 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.blind=function(o){

return this.queue(function(){


var el=$(this),props=['position','top','bottom','left','right'];


var mode=$.effects.setMode(el,o.options.mode||'hide');
var direction=o.options.direction||'vertical';


$.effects.save(el,props);el.show();
var wrapper=$.effects.createWrapper(el).css({overflow:'hidden'});
var ref=(direction=='vertical')?'height':'width';
var distance=(direction=='vertical')?wrapper.height():wrapper.width();
if(mode=='show')wrapper.css(ref,0);


var animation={};
animation[ref]=mode=='show'?distance:0;


wrapper.animate(animation,o.duration,o.options.easing,function(){
if(mode=='hide')el.hide();
$.effects.restore(el,props);$.effects.removeWrapper(el);
if(o.callback)o.callback.apply(el[0],arguments);
el.dequeue();
});

});

};

})(jQuery);/*!
 * jQuery UI Effects Bounce 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.bounce=function(o){

return this.queue(function(){


var el=$(this),props=['position','top','bottom','left','right'];


var mode=$.effects.setMode(el,o.options.mode||'effect');
var direction=o.options.direction||'up';
var distance=o.options.distance||20;
var times=o.options.times||5;
var speed=o.duration||250;
if(/show|hide/.test(mode))props.push('opacity');


$.effects.save(el,props);el.show();
$.effects.createWrapper(el);
var ref=(direction=='up'||direction=='down')?'top':'left';
var motion=(direction=='up'||direction=='left')?'pos':'neg';
var distance=o.options.distance||(ref=='top'?el.outerHeight({margin:true})/3:el.outerWidth({margin:true})/3);
if(mode=='show')el.css('opacity',0).css(ref,motion=='pos'?-distance:distance);
if(mode=='hide')distance=distance/(times*2);
if(mode!='hide')times--;


if(mode=='show'){
var animation={opacity:1};
animation[ref]=(motion=='pos'?'+=':'-=')+distance;
el.animate(animation,speed/2,o.options.easing);
distance=distance/2;
times--;
};
for(var i=0;i<times;i++){
var animation1={},animation2={};
animation1[ref]=(motion=='pos'?'-=':'+=')+distance;
animation2[ref]=(motion=='pos'?'+=':'-=')+distance;
el.animate(animation1,speed/2,o.options.easing).animate(animation2,speed/2,o.options.easing);
distance=(mode=='hide')?distance*2:distance/2;
};
if(mode=='hide'){
var animation={opacity:0};
animation[ref]=(motion=='pos'?'-=':'+=')+distance;
el.animate(animation,speed/2,o.options.easing,function(){
el.hide();
$.effects.restore(el,props);$.effects.removeWrapper(el);
if(o.callback)o.callback.apply(this,arguments);
});
}else{
var animation1={},animation2={};
animation1[ref]=(motion=='pos'?'-=':'+=')+distance;
animation2[ref]=(motion=='pos'?'+=':'-=')+distance;
el.animate(animation1,speed/2,o.options.easing).animate(animation2,speed/2,o.options.easing,function(){
$.effects.restore(el,props);$.effects.removeWrapper(el);
if(o.callback)o.callback.apply(this,arguments);
});
};
el.queue('fx',function(){el.dequeue();});
el.dequeue();
});

};

})(jQuery);/*!
 * jQuery UI Effects Clip 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.clip=function(o){

return this.queue(function(){


var el=$(this),props=['position','top','bottom','left','right','height','width'];


var mode=$.effects.setMode(el,o.options.mode||'hide');
var direction=o.options.direction||'vertical';


$.effects.save(el,props);el.show();
var wrapper=$.effects.createWrapper(el).css({overflow:'hidden'});
var animate=el[0].tagName=='IMG'?wrapper:el;
var ref={
size:(direction=='vertical')?'height':'width',
position:(direction=='vertical')?'top':'left'
};
var distance=(direction=='vertical')?animate.height():animate.width();
if(mode=='show'){animate.css(ref.size,0);animate.css(ref.position,distance/2);}


var animation={};
animation[ref.size]=mode=='show'?distance:0;
animation[ref.position]=mode=='show'?0:distance/2;


animate.animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){
if(mode=='hide')el.hide();
$.effects.restore(el,props);$.effects.removeWrapper(el);
if(o.callback)o.callback.apply(el[0],arguments);
el.dequeue();
}});

});

};

})(jQuery);/*!
 * jQuery UI Effects Drop 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.drop=function(o){

return this.queue(function(){


var el=$(this),props=['position','top','bottom','left','right','opacity'];


var mode=$.effects.setMode(el,o.options.mode||'hide');
var direction=o.options.direction||'left';


$.effects.save(el,props);el.show();
$.effects.createWrapper(el);
var ref=(direction=='up'||direction=='down')?'top':'left';
var motion=(direction=='up'||direction=='left')?'pos':'neg';
var distance=o.options.distance||(ref=='top'?el.outerHeight({margin:true})/2:el.outerWidth({margin:true})/2);
if(mode=='show')el.css('opacity',0).css(ref,motion=='pos'?-distance:distance);


var animation={opacity:mode=='show'?1:0};
animation[ref]=(mode=='show'?(motion=='pos'?'+=':'-='):(motion=='pos'?'-=':'+='))+distance;


el.animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){
if(mode=='hide')el.hide();
$.effects.restore(el,props);$.effects.removeWrapper(el);
if(o.callback)o.callback.apply(this,arguments);
el.dequeue();
}});

});

};

})(jQuery);/*!
 * jQuery UI Effects Explode 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.explode=function(o){

return this.queue(function(){

var rows=o.options.pieces?Math.round(Math.sqrt(o.options.pieces)):3;
var cells=o.options.pieces?Math.round(Math.sqrt(o.options.pieces)):3;

o.options.mode=o.options.mode=='toggle'?($(this).is(':visible')?'hide':'show'):o.options.mode;
var el=$(this).show().css('visibility','hidden');
var offset=el.offset();


offset.top-=parseInt(el.css("marginTop"),10)||0;
offset.left-=parseInt(el.css("marginLeft"),10)||0;

var width=el.outerWidth(true);
var height=el.outerHeight(true);

for(var i=0;i<rows;i++){
for(var j=0;j<cells;j++){
el
.clone()
.appendTo('body')
.wrap('<div></div>')
.css({
position:'absolute',
visibility:'visible',
left:-j*(width/cells),
top:-i*(height/rows)
})
.parent()
.addClass('ui-effects-explode')
.css({
position:'absolute',
overflow:'hidden',
width:width/cells,
height:height/rows,
left:offset.left+j*(width/cells)+(o.options.mode=='show'?(j-Math.floor(cells/2))*(width/cells):0),
top:offset.top+i*(height/rows)+(o.options.mode=='show'?(i-Math.floor(rows/2))*(height/rows):0),
opacity:o.options.mode=='show'?0:1
}).animate({
left:offset.left+j*(width/cells)+(o.options.mode=='show'?0:(j-Math.floor(cells/2))*(width/cells)),
top:offset.top+i*(height/rows)+(o.options.mode=='show'?0:(i-Math.floor(rows/2))*(height/rows)),
opacity:o.options.mode=='show'?1:0
},o.duration||500);
}
}


setTimeout(function(){

o.options.mode=='show'?el.css({visibility:'visible'}):el.css({visibility:'visible'}).hide();
if(o.callback)o.callback.apply(el[0]);
el.dequeue();

$('div.ui-effects-explode').remove();

},o.duration||500);


});

};

})(jQuery);/*!
 * jQuery UI Effects Fade 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.fade=function(o){
return this.queue(function(){
var elem=$(this),
mode=$.effects.setMode(elem,o.options.mode||'hide');

elem.animate({opacity:mode},{
queue:false,
duration:o.duration,
easing:o.options.easing,
complete:function(){
(o.callback&&o.callback.apply(this,arguments));
elem.dequeue();
}
});
});
};

})(jQuery);/*!
 * jQuery UI Effects Fold 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.fold=function(o){

return this.queue(function(){


var el=$(this),props=['position','top','bottom','left','right'];


var mode=$.effects.setMode(el,o.options.mode||'hide');
var size=o.options.size||15;
var horizFirst=!(!o.options.horizFirst);
var duration=o.duration?o.duration/2:$.fx.speeds._default/2;


$.effects.save(el,props);el.show();
var wrapper=$.effects.createWrapper(el).css({overflow:'hidden'});
var widthFirst=((mode=='show')!=horizFirst);
var ref=widthFirst?['width','height']:['height','width'];
var distance=widthFirst?[wrapper.width(),wrapper.height()]:[wrapper.height(),wrapper.width()];
var percent=/([0-9]+)%/.exec(size);
if(percent)size=parseInt(percent[1],10)/100*distance[mode=='hide'?0:1];
if(mode=='show')wrapper.css(horizFirst?{height:0,width:size}:{height:size,width:0});


var animation1={},animation2={};
animation1[ref[0]]=mode=='show'?distance[0]:size;
animation2[ref[1]]=mode=='show'?distance[1]:0;


wrapper.animate(animation1,duration,o.options.easing)
.animate(animation2,duration,o.options.easing,function(){
if(mode=='hide')el.hide();
$.effects.restore(el,props);$.effects.removeWrapper(el);
if(o.callback)o.callback.apply(el[0],arguments);
el.dequeue();
});

});

};

})(jQuery);/*!
 * jQuery UI Effects Highlight 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.highlight=function(o){
return this.queue(function(){
var elem=$(this),
props=['backgroundImage','backgroundColor','opacity'],
mode=$.effects.setMode(elem,o.options.mode||'show'),
animation={
backgroundColor:elem.css('backgroundColor')
};

if(mode=='hide'){
animation.opacity=0;
}

$.effects.save(elem,props);
elem
.show()
.css({
backgroundImage:'none',
backgroundColor:o.options.color||'#ffff99'
})
.animate(animation,{
queue:false,
duration:o.duration,
easing:o.options.easing,
complete:function(){
(mode=='hide'&&elem.hide());
$.effects.restore(elem,props);
(mode=='show'&&!$.support.opacity&&this.style.removeAttribute('filter'));
(o.callback&&o.callback.apply(this,arguments));
elem.dequeue();
}
});
});
};

})(jQuery);/*!
 * jQuery UI Effects Pulsate 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.pulsate=function(o){
return this.queue(function(){
var elem=$(this),
mode=$.effects.setMode(elem,o.options.mode||'show'),
times=((o.options.times||5)*2)-1,
duration=o.duration?o.duration/2:$.fx.speeds._default/2,
isVisible=elem.is(':visible'),
animateTo=0;

if(!isVisible){
elem.css('opacity',0).show();
animateTo=1;
}

if((mode=='hide'&&isVisible)||(mode=='show'&&!isVisible)){
times--;
}

for(var i=0;i<times;i++){
elem.animate({opacity:animateTo},duration,o.options.easing);
animateTo=(animateTo+1)%2;
}

elem.animate({opacity:animateTo},duration,o.options.easing,function(){
if(animateTo==0){
elem.hide();
}
(o.callback&&o.callback.apply(this,arguments));
});

elem
.queue('fx',function(){elem.dequeue();})
.dequeue();
});
};

})(jQuery);/*!
 * jQuery UI Effects Scale 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.puff=function(o){
return this.queue(function(){
var elem=$(this),
mode=$.effects.setMode(elem,o.options.mode||'hide'),
percent=parseInt(o.options.percent,10)||150,
factor=percent/100,
original={height:elem.height(),width:elem.width()};

$.extend(o.options,{
fade:true,
mode:mode,
percent:mode=='hide'?percent:100,
from:mode=='hide'
?original
:{
height:original.height*factor,
width:original.width*factor
}
});

elem.effect('scale',o.options,o.duration,o.callback);
elem.dequeue();
});
};

$.effects.scale=function(o){

return this.queue(function(){


var el=$(this);


var options=$.extend(true,{},o.options);
var mode=$.effects.setMode(el,o.options.mode||'effect');
var percent=parseInt(o.options.percent,10)||(parseInt(o.options.percent,10)==0?0:(mode=='hide'?0:100));
var direction=o.options.direction||'both';
var origin=o.options.origin;
if(mode!='effect'){
options.origin=origin||['middle','center'];
options.restore=true;
}
var original={height:el.height(),width:el.width()};
el.from=o.options.from||(mode=='show'?{height:0,width:0}:original);


var factor={
y:direction!='horizontal'?(percent/100):1,
x:direction!='vertical'?(percent/100):1
};
el.to={height:original.height*factor.y,width:original.width*factor.x};

if(o.options.fade){
if(mode=='show'){el.from.opacity=0;el.to.opacity=1;};
if(mode=='hide'){el.from.opacity=1;el.to.opacity=0;};
};


options.from=el.from;options.to=el.to;options.mode=mode;


el.effect('size',options,o.duration,o.callback);
el.dequeue();
});

};

$.effects.size=function(o){

return this.queue(function(){


var el=$(this),props=['position','top','bottom','left','right','width','height','overflow','opacity'];
var props1=['position','top','bottom','left','right','overflow','opacity'];
var props2=['width','height','overflow'];
var cProps=['fontSize'];
var vProps=['borderTopWidth','borderBottomWidth','paddingTop','paddingBottom'];
var hProps=['borderLeftWidth','borderRightWidth','paddingLeft','paddingRight'];


var mode=$.effects.setMode(el,o.options.mode||'effect');
var restore=o.options.restore||false;
var scale=o.options.scale||'both';
var origin=o.options.origin;
var original={height:el.height(),width:el.width()};
el.from=o.options.from||original;
el.to=o.options.to||original;

if(origin){
var baseline=$.effects.getBaseline(origin,original);
el.from.top=(original.height-el.from.height)*baseline.y;
el.from.left=(original.width-el.from.width)*baseline.x;
el.to.top=(original.height-el.to.height)*baseline.y;
el.to.left=(original.width-el.to.width)*baseline.x;
};
var factor={
from:{y:el.from.height/original.height,x:el.from.width/original.width},
to:{y:el.to.height/original.height,x:el.to.width/original.width}
};
if(scale=='box'||scale=='both'){
if(factor.from.y!=factor.to.y){
props=props.concat(vProps);
el.from=$.effects.setTransition(el,vProps,factor.from.y,el.from);
el.to=$.effects.setTransition(el,vProps,factor.to.y,el.to);
};
if(factor.from.x!=factor.to.x){
props=props.concat(hProps);
el.from=$.effects.setTransition(el,hProps,factor.from.x,el.from);
el.to=$.effects.setTransition(el,hProps,factor.to.x,el.to);
};
};
if(scale=='content'||scale=='both'){
if(factor.from.y!=factor.to.y){
props=props.concat(cProps);
el.from=$.effects.setTransition(el,cProps,factor.from.y,el.from);
el.to=$.effects.setTransition(el,cProps,factor.to.y,el.to);
};
};
$.effects.save(el,restore?props:props1);el.show();
$.effects.createWrapper(el);
el.css('overflow','hidden').css(el.from);


if(scale=='content'||scale=='both'){
vProps=vProps.concat(['marginTop','marginBottom']).concat(cProps);
hProps=hProps.concat(['marginLeft','marginRight']);
props2=props.concat(vProps).concat(hProps);
el.find("*[width]").each(function(){
var child=$(this);
if(restore)$.effects.save(child,props2);
var c_original={height:child.height(),width:child.width()};
child.from={height:c_original.height*factor.from.y,width:c_original.width*factor.from.x};
child.to={height:c_original.height*factor.to.y,width:c_original.width*factor.to.x};
if(factor.from.y!=factor.to.y){
child.from=$.effects.setTransition(child,vProps,factor.from.y,child.from);
child.to=$.effects.setTransition(child,vProps,factor.to.y,child.to);
};
if(factor.from.x!=factor.to.x){
child.from=$.effects.setTransition(child,hProps,factor.from.x,child.from);
child.to=$.effects.setTransition(child,hProps,factor.to.x,child.to);
};
child.css(child.from);
child.animate(child.to,o.duration,o.options.easing,function(){
if(restore)$.effects.restore(child,props2);
});
});
};


el.animate(el.to,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){
if(el.to.opacity===0){
el.css('opacity',el.from.opacity);
}
if(mode=='hide')el.hide();
$.effects.restore(el,restore?props:props1);$.effects.removeWrapper(el);
if(o.callback)o.callback.apply(this,arguments);
el.dequeue();
}});

});

};

})(jQuery);/*!
 * jQuery UI Effects Shake 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.shake=function(o){

return this.queue(function(){


var el=$(this),props=['position','top','bottom','left','right'];


var mode=$.effects.setMode(el,o.options.mode||'effect');
var direction=o.options.direction||'left';
var distance=o.options.distance||20;
var times=o.options.times||3;
var speed=o.duration||o.options.duration||140;


$.effects.save(el,props);el.show();
$.effects.createWrapper(el);
var ref=(direction=='up'||direction=='down')?'top':'left';
var motion=(direction=='up'||direction=='left')?'pos':'neg';


var animation={},animation1={},animation2={};
animation[ref]=(motion=='pos'?'-=':'+=')+distance;
animation1[ref]=(motion=='pos'?'+=':'-=')+distance*2;
animation2[ref]=(motion=='pos'?'-=':'+=')+distance*2;


el.animate(animation,speed,o.options.easing);
for(var i=1;i<times;i++){
el.animate(animation1,speed,o.options.easing).animate(animation2,speed,o.options.easing);
};
el.animate(animation1,speed,o.options.easing).
animate(animation,speed/2,o.options.easing,function(){
$.effects.restore(el,props);$.effects.removeWrapper(el);
if(o.callback)o.callback.apply(this,arguments);
});
el.queue('fx',function(){el.dequeue();});
el.dequeue();
});

};

})(jQuery);/*!
 * jQuery UI Effects Slide 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.slide=function(o){

return this.queue(function(){


var el=$(this),props=['position','top','bottom','left','right'];


var mode=$.effects.setMode(el,o.options.mode||'show');
var direction=o.options.direction||'left';


$.effects.save(el,props);el.show();
$.effects.createWrapper(el).css({overflow:'hidden'});
var ref=(direction=='up'||direction=='down')?'top':'left';
var motion=(direction=='up'||direction=='left')?'pos':'neg';
var distance=o.options.distance||(ref=='top'?el.outerHeight({margin:true}):el.outerWidth({margin:true}));
if(mode=='show')el.css(ref,motion=='pos'?(isNaN(distance)?"-"+distance:-distance):distance);


var animation={};
animation[ref]=(mode=='show'?(motion=='pos'?'+=':'-='):(motion=='pos'?'-=':'+='))+distance;


el.animate(animation,{queue:false,duration:o.duration,easing:o.options.easing,complete:function(){
if(mode=='hide')el.hide();
$.effects.restore(el,props);$.effects.removeWrapper(el);
if(o.callback)o.callback.apply(this,arguments);
el.dequeue();
}});

});

};

})(jQuery);/*!
 * jQuery UI Effects Transfer 1.8.21
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 * jquery.effects.core.js
 */

(function($,undefined){

$.effects.transfer=function(o){
return this.queue(function(){
var elem=$(this),
target=$(o.options.to),
endPosition=target.offset(),
animation={
top:endPosition.top,
left:endPosition.left,
height:target.innerHeight(),
width:target.innerWidth()
},
startPosition=elem.offset(),
transfer=$('<div class="ui-effects-transfer"></div>')
.appendTo(document.body)
.addClass(o.options.className)
.css({
top:startPosition.top,
left:startPosition.left,
height:elem.innerHeight(),
width:elem.innerWidth(),
position:'absolute'
})
.animate(animation,o.duration,o.options.easing,function(){
transfer.remove();
(o.callback&&o.callback.apply(elem[0],arguments));
elem.dequeue();
});
});
};

})(jQuery);




/*! 
@title: 
Drag to Select 
 
@version: 
1.1 
 
@author: 
Andreas Lagerkvist 
 
@date: 
2009-04-06 
 
@url: 
http://andreaslagerkvist.com/jquery/drag-to-select/ 
 
@license: 
http://creativecommons.org/licenses/by/3.0/ 
 
@copyright: 
2008 Andreas Lagerkvist (andreaslagerkvist.com) 
 
@requires: 
jquery, jquery.dragToSelect.css 
 
@does: 
Use this plug-in to allow your users to select certain elements by dragging a "select box". Works very similar to how you can drag-n-select files and folders in most OS:es. 
 
@howto: 
$('#my-files').dragToSelect(selectables: 'li'); would make every li in the #my-files-element selectable by dragging. The li:s will recieve a "selected"-class when they are within range of the select box when user drops. 
 
Make sure a parent-element of the selectables has position: relative as well as overflow: auto or scroll. 
 
@exampleHTML: 
<ul> 
 <li><img src="http://exscale.se/__files/3d/lamp-and-mates/lamp-and-mates-01_small.jpg" alt="Lamp and Mates" /></li> 
 <li><img src="http://exscale.se/__files/3d/stugan-winter_small.jpg" alt="The Cottage - Winter time" /></li> 
 <li><img src="http://exscale.se/__files/3d/ps2_small.jpg" alt="PS2" /></li> 
</ul> 
 
@exampleJS: 
$('#jquery-drag-to-select-example').dragToSelect({ 
 selectables: 'li',  
 onHide: function () { 
  alert($('#jquery-drag-to-select-example li.selected').length + ' selected'); 
 } 
}); 
***/

jQuery.fn.dragToSelect=function(conf)
{
var c=typeof(conf)=='object'?conf:{};


var config=jQuery.extend({
className:'jquery-drag-to-select',
activeClass:'active',
disabledClass:'disabled',
selectedClass:'selected',
scrollTH:10,
percentCovered:25,
selectables:false,
notDraggables:false,
autoScroll:false,
selectOnMove:false,
onShow:function(){return true;},
onHide:function(){return true;},
onRefresh:function(){return true;}
},c);

var realParent=jQuery(this);
var parent=realParent;

do
{
if(/auto|scroll|hidden/.test(parent.css('overflow')))
{
break;
}
parent=parent.parent();
}while(parent[0].parentNode);


if(conf=='disable')
{
parent.addClass(config.disabledClass);
return this;
}
else if(conf=='enable')
{
parent.removeClass(config.disabledClass);
return this;
}

var parentOffset=parent.offset();
var parentDim={
left:parentOffset.left,
top:parentOffset.top,
width:parent.width(),
height:parent.height()
};


var selectBoxOrigin={
left:0,
top:0
};


var selectBox=jQuery('<div/>')
.appendTo(parent)
.attr('class',config.className)
.css('position','absolute');



var preSelected=null;


var showSelectBox=function(e)
{
if(parent.is('.'+config.disabledClass))
{
return;
}



parentOffset=parent.offset();
parentDim={
left:parentOffset.left,
top:parentOffset.top,
width:parent.width(),
height:parent.height()
};

selectBoxOrigin.left=e.pageX-parentDim.left+parent[0].scrollLeft;
selectBoxOrigin.top=e.pageY-parentDim.top+parent[0].scrollTop;

var css={
left:selectBoxOrigin.left+'px',
top:selectBoxOrigin.top+'px',
width:'1px',
height:'1px'
};
selectBox.addClass(config.activeClass).css(css);

config.onShow();
};


var refreshSelectBox=function(e)
{
if(!selectBox.is('.'+config.activeClass)||parent.is('.'+config.disabledClass))
{
return;
}

var left=e.pageX-parentDim.left+parent[0].scrollLeft;
var top=e.pageY-parentDim.top+parent[0].scrollTop;
var newLeft=left;
var newTop=top;
var newWidth=selectBoxOrigin.left-newLeft;
var newHeight=selectBoxOrigin.top-newTop;

if(left>selectBoxOrigin.left)
{
newLeft=selectBoxOrigin.left;
newWidth=left-selectBoxOrigin.left;
}

if(top>selectBoxOrigin.top)
{
newTop=selectBoxOrigin.top;
newHeight=top-selectBoxOrigin.top;
}

var css={
left:newLeft+'px',
top:newTop+'px',
width:newWidth+'px',
height:newHeight+'px'
};
selectBox.css(css);

config.onRefresh();
};


var hideSelectBox=function(e)
{
if(!selectBox.is('.'+config.activeClass)||parent.is('.'+config.disabledClass))
{
return;
}
if(config.onHide(selectBox)!==false)
{
selectBox.removeClass(config.activeClass);
}
};


var scrollPerhaps=function(e)
{
if(!selectBox.is('.'+config.activeClass)||parent.is('.'+config.disabledClass))
{
return;
}


if((e.pageY+config.scrollTH)>(parentDim.top+parentDim.height))
{
parent[0].scrollTop+=config.scrollTH;
}

if((e.pageY-config.scrollTH)<parentDim.top)
{
parent[0].scrollTop-=config.scrollTH;
}

if((e.pageX+config.scrollTH)>(parentDim.left+parentDim.width))
{
parent[0].scrollLeft+=config.scrollTH;
}

if((e.pageX-config.scrollTH)<parentDim.left)
{
parent[0].scrollLeft-=config.scrollTH;
}
};


var selectElementsInRange=function()
{
if(!selectBox.is('.'+config.activeClass)||parent.is('.'+config.disabledClass))
{
return;
}

var selectables=realParent.find(config.selectables);
var selectBoxOffset=selectBox.offset();
var selectBoxDim={
left:selectBoxOffset.left,
top:selectBoxOffset.top,
width:selectBox.width(),
height:selectBox.height()
};

selectables.each(function(i)
{
var el=$(this);
var elOffset=el.offset();
var elDim={
left:elOffset.left,
top:elOffset.top,
width:el.width(),
height:el.height()
};

if(percentCovered(selectBoxDim,elDim)>config.percentCovered)
{
el.addClass(config.selectedClass);
}
else
{



var bWasPreSelected=false;
if(preSelected)
{
preSelected.each(function(i)
{
if($(this)[0]==el[0])
{
bWasPreSelected=true;
}
});
}
if(!bWasPreSelected)
{
el.removeClass(config.selectedClass);
}
}
});
};


var percentCovered=function(dim1,dim2)
{

if(
(dim1.left<=dim2.left)&&
(dim1.top<=dim2.top)&&
((dim1.left+dim1.width)>=(dim2.left+dim2.width))&&
((dim1.top+dim1.height)>(dim2.top+dim2.height))
)
{
return 100;
}

else
{
dim1.right=dim1.left+dim1.width;
dim1.bottom=dim1.top+dim1.height;
dim2.right=dim2.left+dim2.width;
dim2.bottom=dim2.top+dim2.height;

var l=Math.max(dim1.left,dim2.left);
var r=Math.min(dim1.right,dim2.right);
var t=Math.max(dim1.top,dim2.top);
var b=Math.min(dim1.bottom,dim2.bottom);

if(b>=t&&r>=l)
{










var percent=(((r-l)*(b-t))/(dim2.width*dim2.height))*100;



return percent;
}
}

return 0;
};


selectBox
.mousemove(function(e)
{
refreshSelectBox(e);

if(config.selectables&&config.selectOnMove)
{
selectElementsInRange();
}

if(config.autoScroll)
{
scrollPerhaps(e);
}

e.preventDefault();
})
.mouseup(function(e)
{
if(config.selectables)
{
selectElementsInRange();
}

hideSelectBox(e);

e.preventDefault();
});

if(jQuery.fn.disableTextSelect)
{
parent.disableTextSelect();
}

parent
.mousedown(function(e)
{

if((e.pageX+20)>jQuery(document.body).width())
{
return;
}



if(config.notDraggables)
{
var child=$(e.target);
while(child[0]!=parent[0]&&child[0].parentNode)
{
if(child.is(config.notDraggables))
{
return;
}
child=child.parent();
}
}




preSelected=null;
if(e.ctrlKey||e.shiftKey)
{
preSelected=realParent.find("."+config.selectedClass);
}

showSelectBox(e);

e.preventDefault();
})
.mousemove(function(e)
{
refreshSelectBox(e);

if(config.selectables&&config.selectOnMove)
{
selectElementsInRange();
}

if(config.autoScroll)
{
scrollPerhaps(e);
}

e.preventDefault();
})
.mouseup(function(e)
{
if(config.selectables)
{
selectElementsInRange();
}

hideSelectBox(e);

e.preventDefault();
});



















return this;
};
