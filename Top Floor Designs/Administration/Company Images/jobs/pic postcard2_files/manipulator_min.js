                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}

if(typeof(vp)=="undefined")
{
var vp={};
}

if(!vp.controls)
{
vp.controls={};
}









vp.controls.Manipulator=function $vpfn_f7wFiTiIQhXVcOtjwB_eGg21$26(vElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




this.element=vp.core.getElement(vElement,"vp.ui.Manipulator:constructor");






var m_oDocumentElement=document.documentElement?document.documentElement:document.body;





var m_oInitialMousePos=null;





var m_oInitialObjPos=null;





var m_oHandles=null;





var m_oHighlight=null;






var m_bDragStartFired=false;





var m_sInitialCursor="";





var m_sInitialBodyCursor="";





var m_sHandleImage=null;







this.onstartdrag=new vp.events.CustomEvent(this,"onstartdrag");





this.ondrag=new vp.events.CustomEvent(this,"ondrag");





this.ondrop=new vp.events.CustomEvent(this,"ondrop");





this.onresizestart=new vp.events.CustomEvent(this,"onresizestart");





this.onresize=new vp.events.CustomEvent(this,"onresize");





this.onresizeend=new vp.events.CustomEvent(this,"onresizeend");





this.onselect=new vp.events.CustomEvent(this,"onselect");





this.onbeforeselect=new vp.events.CustomEvent(this,"onbeforeselect");





this.ondeselect=new vp.events.CustomEvent(this,"ondeselect");





this.onbeforedeselect=new vp.events.CustomEvent(this,"onbeforedeselect");





this.ondblclick=new vp.events.CustomEvent(this,"ondblclick");





this.onmousedown=new vp.events.CustomEvent(this,"onmousedown");





this.onmouseup=new vp.events.CustomEvent(this,"onmouseup");





this.onmouseover=new vp.events.CustomEvent(this,"onmouseover");





this.onmouseout=new vp.events.CustomEvent(this,"onmouseout");







this.draggable=false;





this.resizable=false;





this.selected=false;





this.dragInProgress=false;





this.resizeInProgress=false;





this.useDragBoundingBox=true;





this.useResizeBoundingBox=true;





var m_bHandlesVisible=false;

var m_bConstrainProportions=false;






this.setConstrainProportions=function $vpfn_YdTKCecajZTiLZxu_4$h1g234$35(bConstrain)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
m_bConstrainProportions=bConstrain;
m_bHandlesVisible=false;
me.refresh();
};





this.getConstrainProportions=function $vpfn_dZz1DkFyfk8NGrExa8thTg245$35()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return m_bConstrainProportions;
};






this.style={
borderRollover:"2px blue dashed",
cursorDragging:"move"
};

var m_bDisabled=false;

var me=this;





var setStartCoords=function $vpfn_HC07yzJ7Plme_aHnOMynzg268$25(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
m_oInitialMousePos=getMousePos(e);

m_oInitialObjPos=vp.ui.getStyleRect(me.element);
};





var mousedownHandler=function $vpfn_Jc8W74x5WDDpVRc5aTRA2Q279$27(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);


if(vp.events.getEventData(e,"manipulatorHandled"))
{
return;
}


if(vp.events.isRightClick(e))
{
vp.events.cancelEvent(e);
return;
}

if(m_bDisabled)
{
return;
}

me.onmousedown.fire(e);


setStartCoords(e);

var bIsSelectionAction=true;


if(e.type==="mousedown")
{

vp.events.add(m_oDocumentElement,"mousemove",mousemoveHandler);
vp.events.add(m_oDocumentElement,"mouseup",mouseupHandler);


if(!me.selected)
{

if(!me.select(e))
{
vp.events.cancelEvent(e);
return;
}
}

else if(me.selected&&(e.ctrlKey||e.shiftKey)&&!e.target.isHandle)
{
me.deselect(e);
bIsSelectionAction=false;
}
}


if(bIsSelectionAction)
{
if(e.target.isHandle)
{
startResize(e);
}
else if(me.draggable)
{
startDrag(e);
}
}


if(me.selected)
{
vp.events.setEventData(e,"manipulatorSelected",true);
}


vp.events.setEventData(e,"manipulatorHandled",true);


vp.events.cancelEvent(e);
};




var touchStartHandler=mousedownHandler;

var DELAY_FOR_DOUBLE_TAP=500;
var _oLastTouch=new Date().getTime()-DELAY_FOR_DOUBLE_TAP*2;
var _oTouchEndTimeout=-1;

var touchEndHandler=function $vpfn_FyBBwGsrFDtUQUsWEnHXMA368$26(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var now=new Date().getTime();
var delta=now-_oLastTouch;
clearTimeout(_oTouchEndTimeout);
if(delta<DELAY_FOR_DOUBLE_TAP)
{

_oLastTouch=now-DELAY_FOR_DOUBLE_TAP*2;
me.doubleClick(e);
}
else
{
_oLastTouch=now;
_oTouchEndTimeout=setTimeout(function $vpfn_aT0rOUNj$kwyTq8kzV_15Q382$43()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
mouseupHandler(e);
},DELAY_FOR_DOUBLE_TAP);
}
};

this.allowUserDeselection=true;
var documentMousedownHandler=function $vpfn_pHTppaQVWm0o3uvEx73Dmg390$35(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!me.selected||!me.allowUserDeselection)
{
return;
}

e=vp.events.getEvent(e);

if(vp.events.getEventData(e,"manipulatorHandled"))
{
return;
}


if(vp.events.isRightClick(e))
{
return;
}


if(vp.ui.isScrollBarClickEvent(e))
{
return;
}


if(e.ctrlKey)
{
return;
}



if(shouldElementNotBlurManipulator(e.target))
{
return;
}

me.deselect(e);
};






var shouldElementNotBlurManipulator=function $vpfn_YdvJCpcJWf7NHXj3VCPUhQ437$42(oElem)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oElem.nodeType==1&&oElem.dontBlurManipulator)
{
return true;
}
else if(oElem.nodeType==1&&oElem.tagName!="BODY")
{
return shouldElementNotBlurManipulator(oElem.parentNode);
}
else
{
return false;
}
};





var mouseupHandler=function $vpfn_mOc1ixOrhQXBRzgjzVdcRw457$25(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(m_bDisabled)
{
vp.events.cancelEvent(e);
return;
}

vp.events.remove(m_oDocumentElement,"mousemove",mousemoveHandler);
vp.events.remove(m_oDocumentElement,"mouseup",mouseupHandler);

me.onmouseup.fire(e);

if(me.resizeInProgress)
{
stopResize(e);
}
else if(me.dragInProgress)
{
stopDrag(e);
}

vp.events.cancelEvent(e);
};





var mousemoveHandler=function $vpfn_A3EbtCEiXQCYIy7UBM1S$w486$27(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(m_bDisabled)
{
vp.events.cancelEvent(e);
return;
}





if(vp.browser.isIE&&vp.browser.ver<9&&e.button===0)
{

mouseupHandler(e);
return;
}

if(me.resizeInProgress)
{
resize(e);
}
else if(me.dragInProgress)
{
drag(e);
}

me.refresh();

vp.events.cancelEvent(e);
};





this.doubleClick=function $vpfn_AWQ6Ku38OoumE$$weUhAaA523$23(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.ondblclick.fire(e);
};





var startResize=function $vpfn_Bfmt9RBlXYyVQSuwwcGqOA532$22(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);
me.resizeInProgress=true;
me.currentResizeHandle=e.target;
m_sInitialBodyCursor=document.body.style.cursor;
document.body.style.cursor=me.currentResizeHandle.style.cursor;

execEvent(me.onresizestart,e);
};





var stopResize=function $vpfn_cJAIUYySyX$DBxQxfy8VDw547$21(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.resizeInProgress=false;
me.currentResizeHandle=null;

document.body.style.cursor=m_sInitialBodyCursor;
var element=vp.ui.getStyleRect(me.element);
e.delta={
top:element.top-m_oInitialObjPos.top,
left:element.left-m_oInitialObjPos.left,
width:element.width-m_oInitialObjPos.width,
height:element.height-m_oInitialObjPos.height
};

execEvent(me.onresizeend,e);
};







var resize=function $vpfn_PLo0T3Zgjprll6lGMNFwnw570$17(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sHandle=me.currentResizeHandle.handleName;


var oObjCoords=vp.ui.getStyleRect(m_oInitialObjPos);

var oMousePos=getMousePos(e);
var fAspectRatio=oObjCoords.width/oObjCoords.height;



var oProposedCoords={
width:m_oInitialObjPos.width-oMousePos.left+m_oInitialMousePos.left,
height:m_oInitialObjPos.height-oMousePos.top+m_oInitialMousePos.top,
left:m_oInitialObjPos.left+oMousePos.left-m_oInitialMousePos.left,
top:m_oInitialObjPos.top+oMousePos.top-m_oInitialMousePos.top
};


var oNewCoords=vp.ui.getStyleRect(me.element);

var MIN_WIDTH=10;
var MIN_HEIGHT=10;

switch(sHandle)
{
case"topLeft":
{
if(oProposedCoords.top+MIN_HEIGHT>=oObjCoords.bottom)
{
oProposedCoords.top=oObjCoords.bottom-MIN_HEIGHT;
oProposedCoords.height=MIN_HEIGHT;
}

if(oProposedCoords.left+MIN_WIDTH>=oObjCoords.right)
{
oProposedCoords.left=oObjCoords.right-MIN_WIDTH;
oProposedCoords.width=MIN_WIDTH;
}
break;
}
case"topRight":
{

oProposedCoords.width=m_oInitialObjPos.width+oMousePos.left-m_oInitialMousePos.left;
oProposedCoords.left=oObjCoords.left;

if(oProposedCoords.top+MIN_HEIGHT>=oObjCoords.bottom)
{
oProposedCoords.top=oObjCoords.bottom-MIN_HEIGHT;
oProposedCoords.height=MIN_HEIGHT;
}

if(oProposedCoords.width<=MIN_WIDTH)
{
oProposedCoords.width=MIN_WIDTH;
}

break;
}
case"bottomRight":
{
oProposedCoords.top=oObjCoords.top;
oProposedCoords.left=oObjCoords.left;
oProposedCoords.width=m_oInitialObjPos.width+oMousePos.left-m_oInitialMousePos.left;
oProposedCoords.height=m_oInitialObjPos.height+oMousePos.top-m_oInitialMousePos.top;

if(oProposedCoords.height<=MIN_HEIGHT)
{
oProposedCoords.height=MIN_HEIGHT;
}

if(oProposedCoords.width<=MIN_WIDTH)
{
oProposedCoords.width=MIN_WIDTH;
}

break;
}
case"bottomLeft":
{
oProposedCoords.top=oObjCoords.top;
oProposedCoords.height=m_oInitialObjPos.height+oMousePos.top-m_oInitialMousePos.top;

if(oProposedCoords.height<=MIN_HEIGHT)
{
oProposedCoords.height=MIN_HEIGHT;
}

if(oProposedCoords.left+MIN_WIDTH>=oObjCoords.right)
{
oProposedCoords.left=oObjCoords.right-MIN_WIDTH;
oProposedCoords.width=MIN_WIDTH;
}

break;
}
case"left":
{
oProposedCoords.top=oObjCoords.top;
oProposedCoords.height=m_oInitialObjPos.height;

if(oProposedCoords.left+MIN_WIDTH>=oObjCoords.right)
{
oProposedCoords.left=oObjCoords.right-MIN_WIDTH;
oProposedCoords.width=MIN_WIDTH;
}

break;
}
case"top":
{
oProposedCoords.left=m_oInitialObjPos.left;
oProposedCoords.width=m_oInitialObjPos.width;

if(oProposedCoords.top+MIN_HEIGHT>=oObjCoords.bottom)
{
oProposedCoords.top=oObjCoords.bottom-MIN_HEIGHT;
oProposedCoords.height=MIN_HEIGHT;
}

break;
}
case"bottom":
{
oProposedCoords.left=m_oInitialObjPos.left;
oProposedCoords.width=m_oInitialObjPos.width;
oProposedCoords.top=oObjCoords.top;
oProposedCoords.height=m_oInitialObjPos.height+oMousePos.top-m_oInitialMousePos.top;

if(oProposedCoords.height<=MIN_HEIGHT)
{
oProposedCoords.height=MIN_HEIGHT;
}

break;
}
case"right":
{
oProposedCoords.top=oObjCoords.top;
oProposedCoords.left=oObjCoords.left;
oProposedCoords.width=m_oInitialObjPos.width+oMousePos.left-m_oInitialMousePos.left;
oProposedCoords.height=m_oInitialObjPos.height;

if(oProposedCoords.width<=MIN_WIDTH)
{
oProposedCoords.width=MIN_WIDTH;
}

break;
}
default:
break;
}


if(me.useResizeBoundingBox&&me.boundingBox)
{
var boundingBox=vp.ui.getStyleRect(me.boundingBox);
if(oProposedCoords.left<boundingBox.left)
{
oProposedCoords.width+=oProposedCoords.left-boundingBox.left;
oProposedCoords.left=boundingBox.left;
}

if(oProposedCoords.top<boundingBox.top)
{
oProposedCoords.height+=oProposedCoords.top-boundingBox.top;
oProposedCoords.top=boundingBox.top;
}

if(vp.ui.getCoord(oProposedCoords,"right")>vp.ui.getCoord(boundingBox,"right"))
{
oProposedCoords.width=vp.ui.getCoord(boundingBox,"right")-oProposedCoords.left;
}

if(vp.ui.getCoord(oProposedCoords,"bottom")>vp.ui.getCoord(boundingBox,"bottom"))
{
oProposedCoords.height=vp.ui.getCoord(boundingBox,"bottom")-oProposedCoords.top;
}
}

oNewCoords=vp.ui.getStyleRect(oProposedCoords);



if(m_bConstrainProportions||e.ctrlKey)
{
if(oNewCoords.height*fAspectRatio>oNewCoords.width)
{
if(sHandle=="topRight"||sHandle=="topLeft")
{
oNewCoords.top=oNewCoords.top-oNewCoords.width/fAspectRatio+oNewCoords.height;
}

oNewCoords.height=oNewCoords.width/fAspectRatio;
}
else
{
if(sHandle=="bottomLeft"||sHandle=="topLeft")
{
oNewCoords.left=oNewCoords.left-oNewCoords.height*fAspectRatio+oNewCoords.width;
}

oNewCoords.width=oNewCoords.height*fAspectRatio;
}
}

e.newRect=oNewCoords;

var element=vp.ui.getStyleRect(me.element);



e.delta={
top:-(element.top-oNewCoords.top),
left:-(element.left-oNewCoords.left)
};


if(!execEvent(me.onresizestart,e))
{
return;
}

vp.ui.applyStyleRect(e.newRect,me.element);
execEvent(me.onresize,e);
};






var startDrag=function $vpfn_JAIaO1DyX7odOSXDU35AdQ805$20(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.dragInProgress=true;


m_sInitialCursor=m_oHighlight.style.cursor;
m_oHighlight.style.cursor=me.style.cursorDragging;


};







var drag=function $vpfn_EQqS2xrqkymhHIMvCywPLQ822$15(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oMousePos=getMousePos(e);
var iDeltaTop=oMousePos.top-m_oInitialMousePos.top;
var iDeltaLeft=oMousePos.left-m_oInitialMousePos.left;


if(e.shiftKey)
{
if(Math.abs(iDeltaTop)>Math.abs(iDeltaLeft))
{
iDeltaLeft=0;
}
else
{
iDeltaTop=0;
}
}


if(Math.abs(iDeltaTop)>10||Math.abs(iDeltaLeft)>10||m_bDragStartFired)
{
var element=vp.ui.getStyleRect(me.element);


e.delta={
top:-(element.top-(m_oInitialObjPos.top+iDeltaTop)),
left:-(element.left-(m_oInitialObjPos.left+iDeltaLeft))
};


if(!m_bDragStartFired)
{
m_bDragStartFired=true;

if(!execEvent(me.onstartdrag,e))
{
return;
}
}


if(me.useDragBoundingBox&&me.boundingBox)
{
var boundingBox=vp.ui.getStyleRect(me.boundingBox);
if(element.left+e.delta.left<boundingBox.left)
{
e.delta.left=boundingBox.left-element.left;
}

if(element.top+e.delta.top<boundingBox.top)
{
e.delta.top=boundingBox.top-element.top;
}

if(element.right+e.delta.left>boundingBox.right)
{
e.delta.left=boundingBox.right-element.right;
}

if(element.bottom+e.delta.top>boundingBox.bottom)
{
e.delta.top=boundingBox.bottom-element.bottom;
}
}

me.element.style.top=(element.top+e.delta.top)+"px";
me.element.style.left=(element.left+e.delta.left)+"px";

execEvent(me.ondrag,e);
}

};





this.setLocation=function $vpfn_9qjt$eufaO$F3K5BogQ4TQ900$23(top,left,width,height)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var startRect=vp.ui.getStyleRect(me.element);
if(me.useDragBoundingBox&&me.boundingBox)
{
var boundingBox=vp.ui.getStyleRect(me.boundingBox);
if(left<boundingBox.left)
{
width-=boundingBox.left-left;
left=boundingBox.left;
}

if(top<boundingBox.top)
{
height-=boundingBox.top-top;
top=boundingBox.top;
}

if(left+width>boundingBox.right)
{
width=boundingBox.right-left;


width=width>0?width:0;
}

if(top+height>boundingBox.bottom)
{
height=boundingBox.bottom-top;


height=height>0?height:0;
}
}

me.element.style.top=top+"px";
me.element.style.left=left+"px";
me.element.style.height=height+"px";
me.element.style.width=width+"px";

me.refresh();
};





var stopDrag=function $vpfn_1cBY8Sq0AyMj4cbDp8aazA947$19(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.dragInProgress=false;

m_oHighlight.style.cursor=m_sInitialCursor;
var element=vp.ui.getStyleRect(me.element);

e.delta={
top:element.top-m_oInitialObjPos.top,
left:element.left-m_oInitialObjPos.left
};

m_oInitialMousePos=null;
m_oInitialObjPos=null;

if(m_bDragStartFired)
{
execEvent(me.ondrop,e);
}

m_bDragStartFired=false;
};






this.select=function $vpfn_kv1v$DdogfS2uR1KSmVTBA975$18(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(m_bDisabled)
{
return false;
}

if(!execEvent(me.onbeforeselect,e))
{
return false;
}

me.selected=true;

me.refresh();

execEvent(me.onselect,e);

return true;
};






this.deselect=function $vpfn_UmKPGlDaTko5tuHRA737Lw1001$20(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!execEvent(me.onbeforedeselect,e))
{
return false;
}

me.selected=false;

showBorder(false);
showResizeHandles(false);

execEvent(me.ondeselect,e);

return true;
};




this.refresh=function $vpfn_jk9GEEOMYkBlgZixd8KdEQ1021$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(me.selected)
{
drawBorder();

drawResizeHandles();
}
};




var drawResizeHandles=function $vpfn_J9S027jQ6jg_p$eHnRcNcA1034$28()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sItem;







if(vp.browser.isIE&&
vp.browser.ver<7&&
!vp.ui.isQuirksMode()&&
m_oHandles&&
me.resizable&&
me.resizeInProgress&&!m_bConstrainProportions)
{
for(sItem in m_oHandles)
{
var handle=m_oHandles[sItem];
if(handle)
{
m_oHighlight.removeChild(handle);
}
}
m_oHandles=null;
}

if(!m_oHandles&&me.resizable)
{
m_oHandles={
topLeft:null,
topRight:null,
bottomRight:null,
bottomLeft:null,
top:null,
left:null,
bottom:null,
right:null
};

for(sItem in m_oHandles)
{
var hId=me.element.id+"_manip_handle_"+sItem;
var oHandle;
if(m_sHandleImage)
{
oHandle=document.createElement("IMG");
oHandle.src=m_sHandleImage;
}
else
{
oHandle=document.createElement("DIV");
}
oHandle.id=hId;
oHandle.isHandle=true;
oHandle.handleName=sItem;

var sCursor="";
switch(sItem)
{
case"topLeft":
oHandle.isCornerHandle=true;
break;
case"topRight":
oHandle.isCornerHandle=true;
break;
case"bottomLeft":
oHandle.isCornerHandle=true;
break;
case"bottomRight":
oHandle.isCornerHandle=true;
break;
case"top":
oHandle.isSideHandle=true;
break;
case"left":
oHandle.isSideHandle=true;
break;
case"bottom":
oHandle.isSideHandle=true;
break;
case"right":
oHandle.isSideHandle=true;
break;
default:
break;
}

oHandle.style.cursor=sCursor;
$(oHandle).addClass("manipulator-handle").addClass("manipulator-handle-"+sItem);

vp.events.add(oHandle,"mousedown",mousedownHandler);
vp.events.add(oHandle,"touchstart",touchStartHandler);
vp.events.add(oHandle,"touchmove",mousemoveHandler);
vp.events.add(oHandle,"touchend",mouseupHandler);

m_oHighlight.appendChild(oHandle);

m_oHandles[sItem]=oHandle;
}
}
showResizeHandles(me.resizable);
};





var showResizeHandles=function $vpfn_GaPqh4vacQzSNgvCpzwXeg1143$28(bShow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(m_bHandlesVisible==bShow)
{
return;
}

m_bHandlesVisible=bShow;

for(var sItem in m_oHandles)
{
if(sItem=="top"||sItem=="left"||sItem=="right"||sItem=="bottom")
{
m_oHandles[sItem].style.visibility=(m_bConstrainProportions||!bShow)?"hidden":"visible";
continue;
}

m_oHandles[sItem].style.visibility=bShow?"visible":"hidden";
}
};




var drawBorder=function $vpfn_OAUjQsFQh05hnMWVHz37hA1167$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!m_oHighlight)
{
m_oHighlight=document.createElement("DIV");
m_oHighlight.id=me.element.id+"_manip_highlight";
$(m_oHighlight.id).addClass("manipulator-highlight");
m_oHighlight.style.position="absolute";

m_oHighlight.style.zIndex=parseInt(me.element.style.zIndex||0)+100000;



var oHandle=document.createElement("IMG");
oHandle.isSpacer=true;
oHandle.src=vp.ui.imageUrl("/vp/images/s.gif");
oHandle.id=me.element.id+"_manip_spacer";
oHandle.style.width="100%";
oHandle.style.height="100%";


var oLowerHighlight=createBorderDiv(me.element.id+"_manip_highlightLower");
$(oLowerHighlight).addClass("manipulator-highlight-lower");


var oUpperHighlight=createBorderDiv(me.element.id+"_manip_highlightUpper");
$(oUpperHighlight).addClass("manipulator-highlight-upper");


me.element.parentNode.appendChild(m_oHighlight);
m_oHighlight.appendChild(oHandle);
m_oHighlight.appendChild(oLowerHighlight);
m_oHighlight.appendChild(oUpperHighlight);


vp.events.add(m_oHighlight,"mousedown",mousedownHandler);
vp.events.add(m_oHighlight,"mouseup",mouseupHandler);
vp.events.add(m_oHighlight,"dblclick",me.doubleClick);
vp.events.add(m_oHighlight,"mouseover",me.onmouseover.fire);
vp.events.add(m_oHighlight,"mouseout",me.onmouseout.fire);

vp.events.add(m_oHighlight,"touchstart",touchStartHandler);
vp.events.add(m_oHighlight,"touchmove",mousemoveHandler);
vp.events.add(m_oHighlight,"touchend",touchEndHandler);

vp.events.add(oHandle,"mouseover",me.onmouseover.fire);
vp.events.add(oHandle,"mouseout",me.onmouseout.fire);
}


vp.ui.applyStyleRect(me.element,m_oHighlight);

showBorder(true);
};


this.show=function $vpfn_GJcZ2EPVNNBknVFgVZyZEg1223$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(m_oHighlight)
{
$(m_oHighlight).show();
$(me.element).show();
execEvent(me.onselect,{});
return true;
}
return false;
};

this.hide=function $vpfn_1OI2ttRVWwndxmVK6W3WHQ1235$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(m_oHighlight)
{
$(m_oHighlight).hide();
$(me.element).hide();
execEvent(me.ondeselect,{});
return true;
}
return false;
};






var createBorderDiv=function $vpfn__oJ3QDLyH1RlMyhcGTP5sA1252$26(sID)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDiv=document.createElement("DIV");
oDiv.id=sID;
oDiv.style.position="absolute";
oDiv.style.top=0+"px";
oDiv.style.left=0+"px";
oDiv.style.width="100%";
oDiv.style.height="100%";

return oDiv;
};





var showBorder=function $vpfn_dRDBfbt1c3Lredvd4RuWFw1269$21(bShow)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(m_oHighlight)
{
m_oHighlight.style.visibility=bShow?"visible":"hidden";
}
};










var getMousePos=function $vpfn_qWTyK9v8rhmYUJb1PsOOGA1286$22(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);

if(e.touches&&e.touches.length==1)
{

return{
left:e.touches[0].clientX,
top:e.touches[0].clientY
};
}

return{
left:e.clientX,
top:e.clientY
};
};








var execEvent=function $vpfn_YwIdgoj8SxpCnkWE3lz4HQ1312$20(oEvent,e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var bRet=oEvent.fire(e);
return(typeof bRet=="undefined")?true:bRet;
};




this.toggleEnabled=function $vpfn_zXJZCFkpEFkHPfl8AZ$xTg1321$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.setEnabled(!me.isEnabled());
};





this.setEnabled=function $vpfn_DlIF59fEDAFIUt7e$XjwWQ1330$22(bEnable)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
m_bDisabled=!bEnable;
me.element.style.cursor=bEnable?"move":m_sInitialBodyCursor;
};





this.isEnabled=function $vpfn_b$Me1eRL0PYyXhg6UEfFoA1340$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return!m_bDisabled;
};





this.setBoundingBox=function $vpfn_FjDsx7ozukCBJzEdTmF1ZQ1349$26(oRect)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var oRealRect=vp.ui.getStyleRect(oRect);
me.boundingBox={};
me.boundingBox.top=oRealRect.top?oRealRect.top:0;
me.boundingBox.left=oRealRect.left?oRealRect.left:0;
me.boundingBox.width=oRealRect.width?oRealRect.width:0;
me.boundingBox.height=oRealRect.height?oRealRect.height:0;
me.boundingBox.right=oRealRect.right?oRealRect.right:me.boundingBox.left+me.boundingBox.width;
me.boundingBox.bottom=oRealRect.bottom?oRealRect.bottom:me.boundingBox.top+me.boundingBox.height;
};





this.setHandleImageUrl=function $vpfn_YIfyfzbdTF9XHLRwlUuKcw1366$29(imageUrl)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
m_sHandleImage=imageUrl;
};





this.getDOMElement=function $vpfn_3kh$9dypLqag8IUWVSInOg1375$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return m_oHighlight;
};

vp.events.add(me.element,"mouseover",me.onmouseover.fire);
vp.events.add(me.element,"mouseout",me.onmouseout.fire);

vp.events.add(me.element,"mousedown",mousedownHandler);

vp.events.add(m_oDocumentElement,"mousedown",documentMousedownHandler);



me.element.style.position="absolute";
me.element.style.cursor="move";
};

