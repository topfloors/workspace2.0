                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;


}



if(typeof(vp)=="undefined")
{
var vp={};
}

if(!vp.debug){





vp.debug=function(){};
}

vp.debug.startTimer=function $vpfn_MbroWx4a3zkmb5bQ4cRPxQ22$22(sTimerName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!document.debugTimers)
{
document.debugTimers={};
}

document.debugTimers[sTimerName]=new Date();
};

vp.debug.stopTimer=function $vpfn_vgvcZYS7vLO7daTzB$FMvw32$21(sTimerName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!document.debugTimers)
{
throw Error("Timer: "+sTimerName+" not initialized");
}

vp.debug.trace("Timer: "+sTimerName+": "+(new Date()-document.debugTimers[sTimerName]));
};

var _traceWinLoaded=false;

vp.debug.clearTrace=function $vpfn_RmaS33ghksWRGVwQKl1QUA44$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!document.traceWindow||document.traceWindow.closed)
{
vp.debug.trace("");
}

try
{
document.traceWindow.document.body.innerHTML="";
document.traceWindow.focus();
}
catch(ex){}

};

vp.debug.trace=function $vpfn_wyFbs7fXJZUY_J5YwHTUZQ60$17(sMsg,bRaw)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sUrl='';

if(!document.traceWindow||document.traceWindow.closed)
{
if(_traceWinLoaded)
{
var fnRetry=function $vpfn_VwRQiinD5lTGAB1knLzRnA68$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.debug.trace(sMsg);
};
setTimeout(fnRetry,10);
return;
}

_traceWinLoaded=true;
document.traceWindow=window.open(sUrl,'traceWin','width=400px,height=600px,left=0px,top=0px,screenX=0px,screenY=0px,resizable=yes,scrollbars=yes');

var fnOnUnLoad=function $vpfn_VS_p89JixpkkGNKK4JJ$6Q79$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_traceWinLoaded=false;
};

vp.events.add(document.traceWindow,"unload",fnOnUnLoad);
}

var doc=document.traceWindow.document;

if(!doc.styleSet)
{
doc.write('<style>body,td,span { font-size:10px; font-family:Arial; }</style>');
doc.styleSet=true;
}

try
{
if(bRaw)
{
doc.write(sMsg);
}
else
{
doc.write("<span>"+sMsg+"</span><br>");
}
document.traceWindow.scrollTo(0,document.traceWindow.document.body.scrollHeight+30);
}
catch(e)
{
alert('Error opening trace window. Check popup blocking settings.');
}
};

var __fastTraceInfo=[];

vp.debug.fastTrace=function $vpfn_onEUb_l_c1qcCqxIr139CQ115$21(sMsg)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var dDate=new Date();
var sDate=dDate.getHours()+":"+dDate.getMinutes()+":"+dDate.getSeconds()+":"+dDate.getMilliseconds();
__fastTraceInfo.push(sDate+": "+sMsg);
};

vp.debug.showFastTrace=function $vpfn_erDkCsJgAcPigZInZILuqg122$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(__fastTraceInfo.length===0)
{
vp.debug.trace("no fast trace data");
}
else
{
for(var i=0;i<__fastTraceInfo.length;i++)
{
vp.debug.trace(__fastTraceInfo[i]);
}

__fastTraceInfo=[];
}

document.traceWindow.focus();
};

vp.debug.traceEvent=function $vpfn_C0p0YX7JCZPmv3dR3iYuJg141$22(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);
vp.debug.trace(e.type+": "+e.target.id);
};

var _lookWinLoaded=false;

vp.debug.look=function $vpfn_3ptTOLjIUMpnrDO4KTnJBw149$16(sMsg)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sUrl='about:blank';

if(!document.lookWindow||document.lookWindow.closed)
{
if(_lookWinLoaded)
{
var fnRetry=function $vpfn_VwRQiinD5lTGAB1knLzRnA157$23()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.debug.trace(sMsg);
};
setTimeout(fnRetry,10);
return;
}

_lookWinLoaded=true;
document.lookWindow=window.open(sUrl,'lookWin','width=400px,height=600px,left=0px,top=0px,screenX=0px,screenY=0px,resizable=yes,scrollbars=yes');

var fnOnUnLoad=function $vpfn_VS_p89JixpkkGNKK4JJ$6Q168$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_lookWinLoaded=false;
};

vp.events.add(document.lookWindow,"unload",fnOnUnLoad);
}

var doc=document.lookWindow.document;

if(!doc.styleSet)
{
doc.write('<html>');
doc.write('<style>body,td,span { font-size:10px; font-family:Arial; }</style>');
doc.write('<body>');
doc.write('<div id="lookElement"></div>');
doc.write('</body>');
doc.write('</html>');
doc.styleSet=true;
}



doc.getElementById("lookElement").innerHTML=sMsg;





};



vp.debug.alert=function $vpfn_MK4X_aHiejyha2Z8ukgPag201$17(sStr)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
alert(sStr);
};

vp.debug.showElementInfoKeyHandler=function $vpfn_fK7kPWUyZyGen_bI2LAOeQ206$37(oEvent)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
oEvent=oEvent?oEvent:window.event;

if(oEvent.altKey&&oEvent.keyCode==81)
{
var oObj=document.elementFromPoint(oEvent.clientX,oEvent.clientY);
vp.debug.showElementInfo(oObj);
oEvent.cancelBubble=true;
return false;
}
else
{
return true;
}
};

vp.debug.showElementInfo=function $vpfn_tNJH4TGvhI_2fOvbHzs8QQ223$27(oObj,sName)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sTempBorder;
var nFoundIndex=-1;
var i;

if(!document.all)
{
return;
}

if(!document.debugObjRefs)
{
document.debugObjRefs=[];
}

var fnNewRow=function $vpfn_bt5twnvFHhsNiehAUQEEew239$16(sKey,sValue,sType)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return"<tr><td style='background-color:#EEEEEE;border:1px gray solid;' valign='top'>"+sKey+"</td><td valign='top' style='background-color:#EEEEEE;border:1px gray solid;'>"+sType+"</td><td  style='background-color:white;border:1px gray solid;'>"+sValue+"</td></tr>";
};

var fnHtmlEncode=function $vpfn_Bg0zFwWbXGjDAcNCnmMA2A244$20(sStr)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return sStr.toString().replace(/\&/gim,"&amp;").replace(/\</gim,"&lt;").replace(/\>/gim,"&gt;").replace(/\n/gim,"<br>").replace(/\t/gim,"&nbsp;&nbsp;&nbsp;&nbsp;").replace(/\s/gim,"&nbsp;");
};


if(oObj.tagName)
{
if(oObj.id&&oObj.id!=="")
{
sName="document.all."+oObj.id;
}
else if(oObj.id&&oObj.name&&oObj.name!=="")
{
sName="name: "+oObj.name;
}
}

if(!sName)
{
sName="unnamed";
}

var sAnchorID=new Date().toString();

var sMessage="<a name=\""+sAnchorID+"\" id=\""+sAnchorID+"\"></a>";
sMessage+='<table style="border:1px gray solid;border-collapse:collapse;" cellpadding=2 cellspacing=0>';

var sType=(oObj.tagName)?"HTML Element":"Object";

if(sName)
{
sMessage+=fnNewRow("<H3>"+sType+"</H3>","<H3>"+sName+"</H3>","");
}

if(oObj.tagName&&oObj.tagName!=="")
{
sMessage+=fnNewRow("<H3>Tag</H3>",oObj.tagName,"");
}

var arrProps=[];
var sProp;

for(sProp in oObj)
{
try{
var oTemp=oObj[sProp];
arrProps.push(sProp);
}catch(e){}
}

arrProps.sort();


if(oObj.parentElement)
{
arrProps.unshift("parentElement");
}

for(i=0;i<arrProps.length;i++)
{
sProp=arrProps[i];

if(oObj[sProp]===null)
{
sMessage+=fnNewRow(sProp,"null","null");
}
else if(oObj[sProp]==="")
{
sMessage+=fnNewRow(sProp,"&nbsp;","string");
}
else if(typeof(oObj[sProp])=="object")
{
var iIndex=document.debugObjRefs.length;
document.debugObjRefs[iIndex]=oObj[sProp];

var sLink="<a href=# onclick=\"";
sLink+="opener.vp.debug.showElementInfo(opener.document.debugObjRefs["+iIndex+"], '"+sName+"."+sProp+"');return false;";
sLink+="\">{...}</a>";

sMessage+=fnNewRow(sProp,sLink,"object");
}
else
{
sMessage+=fnNewRow(sProp,fnHtmlEncode(oObj[sProp]),typeof(oObj[sProp]));
}
}

if(oObj.style&&oObj.style.cssText)
{
arrProps=[];

for(sProp in oObj.style)
{
arrProps[arrProps.length]=sProp;
}

arrProps.sort();

for(i=0;i<arrProps.length;i++)
{
sProp=arrProps[i];
if(oObj.style[sProp]&&oObj.style[sProp]!=="")
{
sMessage+=fnNewRow("style: "+sProp,fnHtmlEncode(oObj.style[sProp])+"&nbsp;",typeof(oObj.style[sProp]));
}
}
}

sMessage+="</table>";

vp.debug.trace(sMessage);

document.traceWindow.document.getElementById(sAnchorID).scrollIntoView();
};



vp.debug.recurseFind=function $vpfn_vAgrwHhSxQZDgS9K2Js0Rw362$23(oElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oElement.nodeType!=1)
{
return;
}

for(var i=0;i<oElement.childNodes.length;i++)
{
vp.debug.recurseFind(oElement.childNodes[i]);

if(oElement.childNodes[i].tagName.toUpperCase()=="IFRAME")
{
vp.debug.recurseFind(oElement.childNodes[i].contentWindow.document);
}
}
};








vp.debug.drawRect=function $vpfn_Z6Q9BZ2Pt0myYztVA$Mz5Q387$20(oRect,sColor,sName,oRootElement)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!sName)
{
sName="default";
}

if(!sColor)
{
sColor="#000000";
}

if(!oRootElement)
{
oRootElement=document.body;
}

if(!window._debugRects)
{
window._debugRects={};
}

if(!window._debugRects[sName])
{
var oDiv=document.createElement("DIV");
oDiv.style.position="absolute";
oDiv.style.zIndex=1000000;
oDiv.style.border="1px "+sColor+" solid";

oRootElement.appendChild(oDiv);

window._debugRects[sName]=oDiv;
}

var oNewRect=vp.core.shallowCopy(oRect);
if(oNewRect.top<0)
{
oNewRect.height+=oNewRect.top;
oNewRect.top=0;
}

if(oNewRect.left<0)
{
oNewRect.width+=oNewRect.left;
oNewRect.left=0;
}

window._debugRects[sName].style.top=oRect.top+"px";
window._debugRects[sName].style.left=oRect.left+"px";
window._debugRects[sName].style.width=oRect.width+"px";
window._debugRects[sName].style.height=oRect.height+"px";
};







function Dictionary(oObj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




this.items={};





this.count=0;

var me=this;






this.setItem=function $vpfn_JTbUQTAf7A5dcAU7t$gt6g467$16(sKey,sValue)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(me.items[sKey])=="undefined")
{
me.count++;
}

me.items[sKey]=sValue;
};







this.getItem=function $vpfn_JiqQ2JOiMvWToXSJFyUv6w483$16(sKey)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
return me.items[sKey];
};





this.removeItem=function $vpfn_esUrWKi9lTvWrFqw$qJZpQ492$19(sKey)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(typeof(me.items[sKey])!="undefined")
{
me.count--;
}

var oHash=me.items;
delete oHash[sKey];
};

this.getKeys=function $vpfn_A7mNq1j1l8_OdTLC5k8ncg503$16()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var arr=[];

for(var sProp in oObj)
{
arr.push(sProp);
}

return arr;
};

this.refreshCount=function $vpfn_oMk1uW2Em5fSgFjiDbXRuQ515$21()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.count=0;
for(var sProp in oObj)
{
me.count++;
}
};

this.load=function $vpfn_j_FSmZFx2KIzQwTdeG00jw524$13(oObj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.items={};
for(var sProp in oObj)
{
this.items[sProp]=oObj[sProp];
me.count++;
}
this.refreshCount();
};

if(oObj)
{
this.load(oObj);
}

}Dictionary._vpfn='$vpfn_TIIluudHy$mlc$ydKXl86Q446$0';





vp.debug.listProperties=function $vpfn_hhdhPBPnD$y3IZ9Ss_NWpg546$26(oObj)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var arr=[];

try
{
for(var prop in oObj)
{
try
{
arr.push(prop+": "+oObj[prop].toString());
}
catch(e)
{
arr.push(prop+": (error)");
}
}
}
catch(ex)
{
arr.push("all errors");
}

return arr.join("\n");
};

vp.debug.formatHTML=function $vpfn_FqFSNpyH1vymKZTVyC2HYQ572$22(sHTML)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDiv=document.createElement("DIV");
oDiv.innerHTML=sHTML;

var aOut=[];

for(var i=0;i<oDiv.childNodes.length;i++)
{
aOut.push(vp.debug.formatHTMLNode(oDiv.childNodes[i],0));
}

return aOut.join("");
};

vp.debug.formatHTMLNode=function $vpfn_aloVj7zx75efAzOgnOsnkA587$26(oNode,iRecursionLevel,bHTMLOutput)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sLeadingSpace="";
var i;
var sOut;

if(typeof(iRecursionLevel)=="undefined")
{
iRecursionLevel=0;
}

var bUseIndent=!oNode.parentNode||vp.debug._nodeShouldHaveLineBreak(oNode.parentNode);
var bUseIndentOnCloseTag=vp.debug._nodeShouldHaveLineBreak(oNode);

if(bUseIndent)
{
for(i=0;i<iRecursionLevel;i++)
{
if(bHTMLOutput)
{
sLeadingSpace+="&nbsp;&nbsp;&nbsp;&nbsp;";
}
else
{
sLeadingSpace+="    ";
}
}
}

var sClosingTagLeadingSpace="";
if(bUseIndentOnCloseTag)
{
sClosingTagLeadingSpace=sLeadingSpace;
}

if(oNode.nodeType==1)
{
var aOut=[];
var bHasChildren=oNode.childNodes.length>0;

if(bHTMLOutput)
{
aOut.push("<span style='color:brown;'>");
aOut.push("<span style='color:blue;'>&lt;</span>"+oNode.tagName);
}
else
{
aOut.push("<"+oNode.tagName);
}

for(i=0;i<oNode.attributes.length;i++)
{
if(oNode.attributes[i].specified)
{
var sValue=oNode.attributes[i].nodeValue;
if(oNode.attributes[i].nodeName=="style")
{
sValue=oNode.style.cssText;
}

if(bHTMLOutput)
{
aOut.push(" "+oNode.attributes[i].nodeName+"<span style='color:blue;'>=\"</span><span style='font-weight:bold; color:black;'>"+vp.web.xmlAttributeEncode(sValue)+"</span><span style='color:blue;'>\"</span>");
}
else
{
aOut.push(" "+oNode.attributes[i].nodeName+"=\""+vp.web.xmlAttributeEncode(sValue)+"\"");
}
}
}

if(bHTMLOutput)
{
aOut.push("<span style='color:blue;'>");
}


if(!bHasChildren)
{
aOut.push(" /");
}

if(bHTMLOutput)
{
aOut.push("&gt;</span></span>");
}
else
{
aOut.push(">");
}

if(vp.debug._nodeShouldHaveLineBreak(oNode))
{
if(bHTMLOutput)
{
aOut.push("<br>");
}
else
{
aOut.push("\n");
}
}


for(i=0;i<oNode.childNodes.length;i++)
{
aOut.push(vp.debug.formatHTMLNode(oNode.childNodes[i],iRecursionLevel+1,bHTMLOutput));
}

if(bHasChildren)
{
if(bHTMLOutput)
{
aOut.push("<span style='color:brown;'>");
aOut.push(sClosingTagLeadingSpace+"<span style='color:blue;'>&lt;</span>/"+oNode.tagName+"<span style='color:blue;'>&gt;</span>");
aOut.push("</span>");
}
else
{
aOut.push(sClosingTagLeadingSpace+"</"+oNode.tagName+">");
}
}

sOut=aOut.join("");
}
else
{
if(bHTMLOutput)
{
sOut="<span style='font-weight:bold; color:black;'>"+vp.web.htmlEncode(oNode.nodeValue)+"</span>";
}
else
{
sOut=oNode.nodeValue.replace(/[\n\r\f\t]/gi,"");
sOut=sOut.replace(/\u00A0/gi,"&nbsp;");
}
}

var sBR="";
if(bUseIndent)
{
sBR=(bHTMLOutput?"<br>":"\n");
}

return sLeadingSpace+sOut+sBR;
};

vp.debug._nodeShouldHaveLineBreak=function $vpfn_NEx6HZGM8Oc3KG5VMZY5NA734$36(oNode)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(oNode.childNodes.length===0)
{
return false;
}

if(oNode.childNodes.length==1&&oNode.childNodes[0].nodeType==3)
{
return false;
}

return true;
};

vp.debug.handleKey=function $vpfn_vCWqdf1AYMbVLAOk0A1KFA749$21(e)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e=vp.events.getEvent(e);
if(e.shiftKey&&e.altKey)
{
if(e.keyCode==75)
{
vp.debug._debuggingKeyEnabled=vp.debug._debuggingKeyEnabled?false:true;
alert('breakpoints: '+(vp.debug._debuggingKeyEnabled?"enabled":"disabled"));
}
}
};

if(vp.events)
{
vp.events.add(document,"keyup",vp.debug.handleKey);
}


vp.debug.breakpoint=function $vpfn_UF$FfhSI4u36VpNrBBkv9g768$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(vp.debug._debuggingKeyEnabled)
{
debugger;
}
};

String.prototype._showWS=function $vpfn_tQuRLXUGVY5L0st_mLjxdQ776$27()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var aOut=this.split("");

for(var i=0;i<aOut.length;i++)
{
if(aOut[i]=="\n")
{
aOut[i]="\\n";
}
else if(aOut[i]=="\r")
{
aOut[i]="\\r";
}
else if(aOut[i]=="\t")
{
aOut[i]="\\t";
}
else if(aOut[i]=="\f")
{
aOut[i]="\\f";
}
else if(aOut[i]=="\u00A0")
{
aOut[i]="\\u00A0";
}
else if(aOut[i].charCodeAt(0)<32)
{
aOut[i]="\\x"+aOut[i].charCodeAt(0);
}
}
return aOut.join("");
};

String.prototype._formatHTML=function $vpfn_BlOgo5o30bnXZmefooszug810$31(bOutputHTML)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var oDiv=document.createElement("DIV");
oDiv.innerHTML=this;
var aData=[];
for(var i=0;i<oDiv.childNodes.length;i++)
{
aData.push(vp.debug.formatHTMLNode(oDiv.childNodes[i],0,bOutputHTML));
}

return aData.join("\n");
};

vp.debug.traceHTML=function $vpfn_uOFda321uDTIOWtaW3lwAA823$21(sHTML)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.debug.trace(sHTML._formatHTML(true));
};

function __log(sMsg)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!window.__logFile)
{
var oFs=new ActiveXObject("Scripting.FileSystemObject");

try
{
window.__logFile=oFs.OpenTextFile("C:\\js_log.txt",8,true);
}
catch(ex)
{
if(!window.__logFile)
{
alert("error");
return;
}
}
}

window.__logFile.Write(sMsg+"\r\n");
};__log._vpfn='$vpfn_sOAuw9z1r5uws$Ocg5t0RA828$0';