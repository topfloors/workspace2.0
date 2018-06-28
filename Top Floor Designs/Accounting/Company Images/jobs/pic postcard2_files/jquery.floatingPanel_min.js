                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}

(function $vpfn_g2vZ170UWqJjk6pLYOKDjQ3$1($)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$.fn.floatingPanel=function $vpfn_5_4RdUiPydoH8xvyG0Xc1Q5$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var options=null;
var command=null;

if(typeof(arguments[0])==="string")
{
command=arguments[0];
options=arguments[1];
}
else
{
options=arguments[0];
}

var result=[];

for(var i=0,l=this.length;i<l;i++)
{
var element=$(this[i]);
if(command)
{
element.prop("floatingPanel")[command](options);
}
else
{
new vp.widget.floatingPanel(element,options);
}
result.push(element.prop("floatingPanel").element);
}

return $(result);
};
})(jQuery);