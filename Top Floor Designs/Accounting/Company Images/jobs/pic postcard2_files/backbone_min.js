                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                







(function(){






var root=this;



var previousBackbone=root.Backbone;


var array=[];
var push=array.push;
var slice=array.slice;
var splice=array.splice;



var Backbone;
if(typeof exports!=='undefined'){
Backbone=exports;
}else{
Backbone=root.Backbone={};
}


Backbone.VERSION='0.9.10';


var _=root._;
if(!_&&(typeof require!=='undefined'))_=require('underscore');


Backbone.$=root.jQuery||root.Zepto||root.ender;



Backbone.noConflict=function(){
root.Backbone=previousBackbone;
return this;
};




Backbone.emulateHTTP=false;





Backbone.emulateJSON=false;





var eventSplitter=/\s+/;




var eventsApi=function(obj,action,name,rest){
if(!name)return true;
if(typeof name==='object'){
for(var key in name){
obj[action].apply(obj,[key,name[key]].concat(rest));
}
}else if(eventSplitter.test(name)){
var names=name.split(eventSplitter);
for(var i=0,l=names.length;i<l;i++){
obj[action].apply(obj,[names[i]].concat(rest));
}
}else{
return true;
}
};



var triggerEvents=function(events,args){
var ev,i=-1,l=events.length;
switch(args.length){
case 0:while(++i<l)(ev=events[i]).callback.call(ev.ctx);
return;
case 1:while(++i<l)(ev=events[i]).callback.call(ev.ctx,args[0]);
return;
case 2:while(++i<l)(ev=events[i]).callback.call(ev.ctx,args[0],args[1]);
return;
case 3:while(++i<l)(ev=events[i]).callback.call(ev.ctx,args[0],args[1],args[2]);
return;
default:while(++i<l)(ev=events[i]).callback.apply(ev.ctx,args);
}
};











var Events=Backbone.Events={




on:function(name,callback,context){
if(!(eventsApi(this,'on',name,[callback,context])&&callback))return this;
this._events||(this._events={});
var list=this._events[name]||(this._events[name]=[]);
list.push({callback:callback,context:context,ctx:context||this});
return this;
},



once:function(name,callback,context){
if(!(eventsApi(this,'once',name,[callback,context])&&callback))return this;
var self=this;
var once=_.once(function(){
self.off(name,once);
callback.apply(this,arguments);
});
once._callback=callback;
this.on(name,once,context);
return this;
},





off:function(name,callback,context){
var list,ev,events,names,i,l,j,k;
if(!this._events||!eventsApi(this,'off',name,[callback,context]))return this;
if(!name&&!callback&&!context){
this._events={};
return this;
}

names=name?[name]:_.keys(this._events);
for(i=0,l=names.length;i<l;i++){
name=names[i];
if(list=this._events[name]){
events=[];
if(callback||context){
for(j=0,k=list.length;j<k;j++){
ev=list[j];
if((callback&&callback!==ev.callback&&
callback!==ev.callback._callback)||
(context&&context!==ev.context)){
events.push(ev);
}
}
}
this._events[name]=events;
}
}

return this;
},





trigger:function(name){
if(!this._events)return this;
var args=slice.call(arguments,1);
if(!eventsApi(this,'trigger',name,args))return this;
var events=this._events[name];
var allEvents=this._events.all;
if(events)triggerEvents(events,args);
if(allEvents)triggerEvents(allEvents,arguments);
return this;
},



listenTo:function(obj,name,callback){
var listeners=this._listeners||(this._listeners={});
var id=obj._listenerId||(obj._listenerId=_.uniqueId('l'));
listeners[id]=obj;
obj.on(name,typeof name==='object'?this:callback,this);
return this;
},



stopListening:function(obj,name,callback){
var listeners=this._listeners;
if(!listeners)return;
if(obj){
obj.off(name,typeof name==='object'?this:callback,this);
if(!name&&!callback)delete listeners[obj._listenerId];
}else{
if(typeof name==='object')callback=this;
for(var id in listeners){
listeners[id].off(name,callback,this);
}
this._listeners={};
}
return this;
}
};


Events.bind=Events.on;
Events.unbind=Events.off;



_.extend(Backbone,Events);






var Model=Backbone.Model=function(attributes,options){
var defaults;
var attrs=attributes||{};
this.cid=_.uniqueId('c');
this.attributes={};
if(options&&options.collection)this.collection=options.collection;
if(options&&options.parse)attrs=this.parse(attrs,options)||{};
if(defaults=_.result(this,'defaults')){
attrs=_.defaults({},attrs,defaults);
}
this.set(attrs,options);
this.changed={};
this.initialize.apply(this,arguments);
};


_.extend(Model.prototype,Events,{


changed:null,



idAttribute:'id',



initialize:function(){},


toJSON:function(options){
return _.clone(this.attributes);
},


sync:function(){
return Backbone.sync.apply(this,arguments);
},


get:function(attr){
return this.attributes[attr];
},


escape:function(attr){
return _.escape(this.get(attr));
},



has:function(attr){
return this.get(attr)!=null;
},





set:function(key,val,options){
var attr,attrs,unset,changes,silent,changing,prev,current;
if(key==null)return this;


if(typeof key==='object'){
attrs=key;
options=val;
}else{
(attrs={})[key]=val;
}

options||(options={});


if(!this._validate(attrs,options))return false;


unset=options.unset;
silent=options.silent;
changes=[];
changing=this._changing;
this._changing=true;

if(!changing){
this._previousAttributes=_.clone(this.attributes);
this.changed={};
}
current=this.attributes,prev=this._previousAttributes;


if(this.idAttribute in attrs)this.id=attrs[this.idAttribute];


for(attr in attrs){
val=attrs[attr];
if(!_.isEqual(current[attr],val))changes.push(attr);
if(!_.isEqual(prev[attr],val)){
this.changed[attr]=val;
}else{
delete this.changed[attr];
}
unset?delete current[attr]:current[attr]=val;
}


if(!silent){
if(changes.length)this._pending=true;
for(var i=0,l=changes.length;i<l;i++){
this.trigger('change:'+changes[i],this,current[changes[i]],options);
}
}

if(changing)return this;
if(!silent){
while(this._pending){
this._pending=false;
this.trigger('change',this,options);
}
}
this._pending=false;
this._changing=false;
return this;
},



unset:function(attr,options){
return this.set(attr,void 0,_.extend({},options,{unset:true}));
},



clear:function(options){
var attrs={};
for(var key in this.attributes)attrs[key]=void 0;
return this.set(attrs,_.extend({},options,{unset:true}));
},



hasChanged:function(attr){
if(attr==null)return!_.isEmpty(this.changed);
return _.has(this.changed,attr);
},







changedAttributes:function(diff){
if(!diff)return this.hasChanged()?_.clone(this.changed):false;
var val,changed=false;
var old=this._changing?this._previousAttributes:this.attributes;
for(var attr in diff){
if(_.isEqual(old[attr],(val=diff[attr])))continue;
(changed||(changed={}))[attr]=val;
}
return changed;
},



previous:function(attr){
if(attr==null||!this._previousAttributes)return null;
return this._previousAttributes[attr];
},



previousAttributes:function(){
return _.clone(this._previousAttributes);
},






fetch:function(options){
options=options?_.clone(options):{};
if(options.parse===void 0)options.parse=true;
var success=options.success;
options.success=function(model,resp,options){
if(!model.set(model.parse(resp,options),options))return false;
if(success)success(model,resp,options);
};
return this.sync('read',this,options);
},




save:function(key,val,options){
var attrs,success,method,xhr,attributes=this.attributes;


if(key==null||typeof key==='object'){
attrs=key;
options=val;
}else{
(attrs={})[key]=val;
}


if(attrs&&(!options||!options.wait)&&!this.set(attrs,options))return false;

options=_.extend({validate:true},options);


if(!this._validate(attrs,options))return false;


if(attrs&&options.wait){
this.attributes=_.extend({},attributes,attrs);
}



if(options.parse===void 0)options.parse=true;
success=options.success;
options.success=function(model,resp,options){

model.attributes=attributes;
var serverAttrs=model.parse(resp,options);
if(options.wait)serverAttrs=_.extend(attrs||{},serverAttrs);
if(_.isObject(serverAttrs)&&!model.set(serverAttrs,options)){
return false;
}
if(success)success(model,resp,options);
};


method=this.isNew()?'create':(options.patch?'patch':'update');
if(method==='patch')options.attrs=attrs;
xhr=this.sync(method,this,options);


if(attrs&&options.wait)this.attributes=attributes;

return xhr;
},




destroy:function(options){
options=options?_.clone(options):{};
var model=this;
var success=options.success;

var destroy=function(){
model.trigger('destroy',model,model.collection,options);
};

options.success=function(model,resp,options){
if(options.wait||model.isNew())destroy();
if(success)success(model,resp,options);
};

if(this.isNew()){
options.success(this,null,options);
return false;
}

var xhr=this.sync('delete',this,options);
if(!options.wait)destroy();
return xhr;
},




url:function(){
var base=_.result(this,'urlRoot')||_.result(this.collection,'url')||urlError();
if(this.isNew())return base;
return base+(base.charAt(base.length-1)==='/'?'':'/')+encodeURIComponent(this.id);
},



parse:function(resp,options){
return resp;
},


clone:function(){
return new this.constructor(this.attributes);
},


isNew:function(){
return this.id==null;
},


isValid:function(options){
return!this.validate||!this.validate(this.attributes,options);
},




_validate:function(attrs,options){
if(!options.validate||!this.validate)return true;
attrs=_.extend({},this.attributes,attrs);
var error=this.validationError=this.validate(attrs,options)||null;
if(!error)return true;
this.trigger('invalid',this,error,options||{});
return false;
}

});







var Collection=Backbone.Collection=function(models,options){
options||(options={});
if(options.model)this.model=options.model;
if(options.comparator!==void 0)this.comparator=options.comparator;
this.models=[];
this._reset();
this.initialize.apply(this,arguments);
if(models)this.reset(models,_.extend({silent:true},options));
};


_.extend(Collection.prototype,Events,{



model:Model,



initialize:function(){},



toJSON:function(options){
return this.map(function(model){return model.toJSON(options);});
},


sync:function(){
return Backbone.sync.apply(this,arguments);
},


add:function(models,options){
models=_.isArray(models)?models.slice():[models];
options||(options={});
var i,l,model,attrs,existing,doSort,add,at,sort,sortAttr;
add=[];
at=options.at;
sort=this.comparator&&(at==null)&&options.sort!=false;
sortAttr=_.isString(this.comparator)?this.comparator:null;



for(i=0,l=models.length;i<l;i++){
if(!(model=this._prepareModel(attrs=models[i],options))){
this.trigger('invalid',this,attrs,options);
continue;
}



if(existing=this.get(model)){
if(options.merge){
existing.set(attrs===model?model.attributes:attrs,options);
if(sort&&!doSort&&existing.hasChanged(sortAttr))doSort=true;
}
continue;
}


add.push(model);



model.on('all',this._onModelEvent,this);
this._byId[model.cid]=model;
if(model.id!=null)this._byId[model.id]=model;
}


if(add.length){
if(sort)doSort=true;
this.length+=add.length;
if(at!=null){
splice.apply(this.models,[at,0].concat(add));
}else{
push.apply(this.models,add);
}
}


if(doSort)this.sort({silent:true});

if(options.silent)return this;


for(i=0,l=add.length;i<l;i++){
(model=add[i]).trigger('add',model,this,options);
}


if(doSort)this.trigger('sort',this,options);

return this;
},


remove:function(models,options){
models=_.isArray(models)?models.slice():[models];
options||(options={});
var i,l,index,model;
for(i=0,l=models.length;i<l;i++){
model=this.get(models[i]);
if(!model)continue;
delete this._byId[model.id];
delete this._byId[model.cid];
index=this.indexOf(model);
this.models.splice(index,1);
this.length--;
if(!options.silent){
options.index=index;
model.trigger('remove',model,this,options);
}
this._removeReference(model);
}
return this;
},


push:function(model,options){
model=this._prepareModel(model,options);
this.add(model,_.extend({at:this.length},options));
return model;
},


pop:function(options){
var model=this.at(this.length-1);
this.remove(model,options);
return model;
},


unshift:function(model,options){
model=this._prepareModel(model,options);
this.add(model,_.extend({at:0},options));
return model;
},


shift:function(options){
var model=this.at(0);
this.remove(model,options);
return model;
},


slice:function(begin,end){
return this.models.slice(begin,end);
},


get:function(obj){
if(obj==null)return void 0;
this._idAttr||(this._idAttr=this.model.prototype.idAttribute);
return this._byId[obj.id||obj.cid||obj[this._idAttr]||obj];
},


at:function(index){
return this.models[index];
},


where:function(attrs){
if(_.isEmpty(attrs))return[];
return this.filter(function(model){
for(var key in attrs){
if(attrs[key]!==model.get(key))return false;
}
return true;
});
},




sort:function(options){
if(!this.comparator){
throw new Error('Cannot sort a set without a comparator');
}
options||(options={});


if(_.isString(this.comparator)||this.comparator.length===1){
this.models=this.sortBy(this.comparator,this);
}else{
this.models.sort(_.bind(this.comparator,this));
}

if(!options.silent)this.trigger('sort',this,options);
return this;
},


pluck:function(attr){
return _.invoke(this.models,'get',attr);
},



update:function(models,options){
options=_.extend({add:true,merge:true,remove:true},options);
if(options.parse)models=this.parse(models,options);
var model,i,l,existing;
var add=[],remove=[],modelMap={};


if(!_.isArray(models))models=models?[models]:[];


if(options.add&&!options.remove)return this.add(models,options);


for(i=0,l=models.length;i<l;i++){
model=models[i];
existing=this.get(model);
if(options.remove&&existing)modelMap[existing.cid]=true;
if((options.add&&!existing)||(options.merge&&existing)){
add.push(model);
}
}
if(options.remove){
for(i=0,l=this.models.length;i<l;i++){
model=this.models[i];
if(!modelMap[model.cid])remove.push(model);
}
}


if(remove.length)this.remove(remove,options);
if(add.length)this.add(add,options);
return this;
},




reset:function(models,options){
options||(options={});
if(options.parse)models=this.parse(models,options);
for(var i=0,l=this.models.length;i<l;i++){
this._removeReference(this.models[i]);
}
options.previousModels=this.models.slice();
this._reset();
if(models)this.add(models,_.extend({silent:true},options));
if(!options.silent)this.trigger('reset',this,options);
return this;
},




fetch:function(options){
options=options?_.clone(options):{};
if(options.parse===void 0)options.parse=true;
var success=options.success;
options.success=function(collection,resp,options){
var method=options.update?'update':'reset';
collection[method](resp,options);
if(success)success(collection,resp,options);
};
return this.sync('read',this,options);
},




create:function(model,options){
options=options?_.clone(options):{};
if(!(model=this._prepareModel(model,options)))return false;
if(!options.wait)this.add(model,options);
var collection=this;
var success=options.success;
options.success=function(model,resp,options){
if(options.wait)collection.add(model,options);
if(success)success(model,resp,options);
};
model.save(null,options);
return model;
},



parse:function(resp,options){
return resp;
},


clone:function(){
return new this.constructor(this.models);
},


_reset:function(){
this.length=0;
this.models.length=0;
this._byId={};
},


_prepareModel:function(attrs,options){
if(attrs instanceof Model){
if(!attrs.collection)attrs.collection=this;
return attrs;
}
options||(options={});
options.collection=this;
var model=new this.model(attrs,options);
if(!model._validate(attrs,options))return false;
return model;
},


_removeReference:function(model){
if(this===model.collection)delete model.collection;
model.off('all',this._onModelEvent,this);
},





_onModelEvent:function(event,model,collection,options){
if((event==='add'||event==='remove')&&collection!==this)return;
if(event==='destroy')this.remove(model,options);
if(model&&event==='change:'+model.idAttribute){
delete this._byId[model.previous(model.idAttribute)];
if(model.id!=null)this._byId[model.id]=model;
}
this.trigger.apply(this,arguments);
},

sortedIndex:function(model,value,context){
value||(value=this.comparator);
var iterator=_.isFunction(value)?value:function(model){
return model.get(value);
};
return _.sortedIndex(this.models,model,iterator,context);
}

});


var methods=['forEach','each','map','collect','reduce','foldl',
'inject','reduceRight','foldr','find','detect','filter','select',
'reject','every','all','some','any','include','contains','invoke',
'max','min','toArray','size','first','head','take','initial','rest',
'tail','drop','last','without','indexOf','shuffle','lastIndexOf',
'isEmpty','chain'];


_.each(methods,function(method){
Collection.prototype[method]=function(){
var args=slice.call(arguments);
args.unshift(this.models);
return _[method].apply(_,args);
};
});


var attributeMethods=['groupBy','countBy','sortBy'];


_.each(attributeMethods,function(method){
Collection.prototype[method]=function(value,context){
var iterator=_.isFunction(value)?value:function(model){
return model.get(value);
};
return _[method](this.models,iterator,context);
};
});






var Router=Backbone.Router=function(options){
options||(options={});
if(options.routes)this.routes=options.routes;
this._bindRoutes();
this.initialize.apply(this,arguments);
};



var optionalParam=/\((.*?)\)/g;
var namedParam=/(\(\?)?:\w+/g;
var splatParam=/\*\w+/g;
var escapeRegExp=/[\-{}\[\]+?.,\\\^$|#\s]/g;


_.extend(Router.prototype,Events,{



initialize:function(){},







route:function(route,name,callback){
if(!_.isRegExp(route))route=this._routeToRegExp(route);
if(!callback)callback=this[name];
Backbone.history.route(route,_.bind(function(fragment){
var args=this._extractParameters(route,fragment);
callback&&callback.apply(this,args);
this.trigger.apply(this,['route:'+name].concat(args));
this.trigger('route',name,args);
Backbone.history.trigger('route',this,name,args);
},this));
return this;
},


navigate:function(fragment,options){
Backbone.history.navigate(fragment,options);
return this;
},




_bindRoutes:function(){
if(!this.routes)return;
var route,routes=_.keys(this.routes);
while((route=routes.pop())!=null){
this.route(route,this.routes[route]);
}
},



_routeToRegExp:function(route){
route=route.replace(escapeRegExp,'\\$&')
.replace(optionalParam,'(?:$1)?')
.replace(namedParam,function(match,optional){
return optional?match:'([^\/]+)';
})
.replace(splatParam,'(.*?)');
return new RegExp('^'+route+'$');
},



_extractParameters:function(route,fragment){
return route.exec(fragment).slice(1);
}

});






var History=Backbone.History=function(){
this.handlers=[];
_.bindAll(this,'checkUrl');


if(typeof window!=='undefined'){
this.location=window.location;
this.history=window.history;
}
};


var routeStripper=/^[#\/]|\s+$/g;


var rootStripper=/^\/+|\/+$/g;


var isExplorer=/msie [\w.]+/;


var trailingSlash=/\/$/;


History.started=false;


_.extend(History.prototype,Events,{



interval:50,



getHash:function(window){
var match=(window||this).location.href.match(/#(.*)$/);
return match?match[1]:'';
},



getFragment:function(fragment,forcePushState){
if(fragment==null){
if(this._hasPushState||!this._wantsHashChange||forcePushState){
fragment=this.location.pathname;
var root=this.root.replace(trailingSlash,'');
if(!fragment.indexOf(root))fragment=fragment.substr(root.length);
}else{
fragment=this.getHash();
}
}
return fragment.replace(routeStripper,'');
},



start:function(options){
if(History.started)throw new Error("Backbone.history has already been started");
History.started=true;



this.options=_.extend({},{root:'/'},this.options,options);
this.root=this.options.root;
this._wantsHashChange=this.options.hashChange!==false;
this._wantsPushState=!!this.options.pushState;
this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);
var fragment=this.getFragment();
var docMode=document.documentMode;
var oldIE=(isExplorer.exec(navigator.userAgent.toLowerCase())&&(!docMode||docMode<=7));


this.root=('/'+this.root+'/').replace(rootStripper,'/');

if(oldIE&&this._wantsHashChange){
this.iframe=Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
this.navigate(fragment);
}



if(this._hasPushState){
Backbone.$(window).on('popstate',this.checkUrl);
}else if(this._wantsHashChange&&('onhashchange'in window)&&!oldIE){
Backbone.$(window).on('hashchange',this.checkUrl);
}else if(this._wantsHashChange){
this._checkUrlInterval=setInterval(this.checkUrl,this.interval);
}



this.fragment=fragment;
var loc=this.location;
var atRoot=loc.pathname.replace(/[^\/]$/,'$&/')===this.root;



if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!atRoot){
this.fragment=this.getFragment(null,true);
this.location.replace(this.root+this.location.search+'#'+this.fragment);

return true;



}else if(this._wantsPushState&&this._hasPushState&&atRoot&&loc.hash){
this.fragment=this.getHash().replace(routeStripper,'');
this.history.replaceState({},document.title,this.root+this.fragment+loc.search);
}

if(!this.options.silent)return this.loadUrl();
},



stop:function(){
Backbone.$(window).off('popstate',this.checkUrl).off('hashchange',this.checkUrl);
clearInterval(this._checkUrlInterval);
History.started=false;
},



route:function(route,callback){
this.handlers.unshift({route:route,callback:callback});
},



checkUrl:function(e){
var current=this.getFragment();
if(current===this.fragment&&this.iframe){
current=this.getFragment(this.getHash(this.iframe));
}
if(current===this.fragment)return false;
if(this.iframe)this.navigate(current);
this.loadUrl()||this.loadUrl(this.getHash());
},




loadUrl:function(fragmentOverride){
var fragment=this.fragment=this.getFragment(fragmentOverride);
var matched=_.any(this.handlers,function(handler){
if(handler.route.test(fragment)){
handler.callback(fragment);
return true;
}
});
return matched;
},








navigate:function(fragment,options){
if(!History.started)return false;
if(!options||options===true)options={trigger:options};
fragment=this.getFragment(fragment||'');
if(this.fragment===fragment)return;
this.fragment=fragment;
var url=this.root+fragment;


if(this._hasPushState){
this.history[options.replace?'replaceState':'pushState']({},document.title,url);



}else if(this._wantsHashChange){
this._updateHash(this.location,fragment,options.replace);
if(this.iframe&&(fragment!==this.getFragment(this.getHash(this.iframe)))){



if(!options.replace)this.iframe.document.open().close();
this._updateHash(this.iframe.location,fragment,options.replace);
}



}else{
return this.location.assign(url);
}
if(options.trigger)this.loadUrl(fragment);
},



_updateHash:function(location,fragment,replace){
if(replace){
var href=location.href.replace(/(javascript:|#).*$/,'');
location.replace(href+'#'+fragment);
}else{

location.hash='#'+fragment;
}
}

});


Backbone.history=new History;






var View=Backbone.View=function(options){
this.cid=_.uniqueId('view');
this._configure(options||{});
this._ensureElement();
this.initialize.apply(this,arguments);
this.delegateEvents();
};


var delegateEventSplitter=/^(\S+)\s*(.*)$/;


var viewOptions=['model','collection','el','id','attributes','className','tagName','events'];


_.extend(View.prototype,Events,{


tagName:'div',



$:function(selector){
return this.$el.find(selector);
},



initialize:function(){},




render:function(){
return this;
},



remove:function(){
this.$el.remove();
this.stopListening();
return this;
},



setElement:function(element,delegate){
if(this.$el)this.undelegateEvents();
this.$el=element instanceof Backbone.$?element:Backbone.$(element);
this.el=this.$el[0];
if(delegate!==false)this.delegateEvents();
return this;
},
















delegateEvents:function(events){
if(!(events||(events=_.result(this,'events'))))return;
this.undelegateEvents();
for(var key in events){
var method=events[key];
if(!_.isFunction(method))method=this[events[key]];
if(!method)throw new Error('Method "'+events[key]+'" does not exist');
var match=key.match(delegateEventSplitter);
var eventName=match[1],selector=match[2];
method=_.bind(method,this);
eventName+='.delegateEvents'+this.cid;
if(selector===''){
this.$el.on(eventName,method);
}else{
this.$el.on(eventName,selector,method);
}
}
},




undelegateEvents:function(){
this.$el.off('.delegateEvents'+this.cid);
},




_configure:function(options){
if(this.options)options=_.extend({},_.result(this,'options'),options);
_.extend(this,_.pick(options,viewOptions));
this.options=options;
},





_ensureElement:function(){
if(!this.el){
var attrs=_.extend({},_.result(this,'attributes'));
if(this.id)attrs.id=_.result(this,'id');
if(this.className)attrs['class']=_.result(this,'className');
var $el=Backbone.$('<'+_.result(this,'tagName')+'>').attr(attrs);
this.setElement($el,false);
}else{
this.setElement(_.result(this,'el'),false);
}
}

});





var methodMap={
'create':'POST',
'update':'PUT',
'patch':'PATCH',
'delete':'DELETE',
'read':'GET'
};
















Backbone.sync=function(method,model,options){
var type=methodMap[method];


_.defaults(options||(options={}),{
emulateHTTP:Backbone.emulateHTTP,
emulateJSON:Backbone.emulateJSON
});


var params={type:type,dataType:'json'};


if(!options.url){
params.url=_.result(model,'url')||urlError();
}


if(options.data==null&&model&&(method==='create'||method==='update'||method==='patch')){
params.contentType='application/json';
params.data=JSON.stringify(options.attrs||model.toJSON(options));
}


if(options.emulateJSON){
params.contentType='application/x-www-form-urlencoded';
params.data=params.data?{model:params.data}:{};
}



if(options.emulateHTTP&&(type==='PUT'||type==='DELETE'||type==='PATCH')){
params.type='POST';
if(options.emulateJSON)params.data._method=type;
var beforeSend=options.beforeSend;
options.beforeSend=function(xhr){
xhr.setRequestHeader('X-HTTP-Method-Override',type);
if(beforeSend)return beforeSend.apply(this,arguments);
};
}


if(params.type!=='GET'&&!options.emulateJSON){
params.processData=false;
}

var success=options.success;
options.success=function(resp){
if(success)success(model,resp,options);
model.trigger('sync',model,resp,options);
};

var error=options.error;
options.error=function(xhr){
if(error)error(model,xhr,options);
model.trigger('error',model,xhr,options);
};


var xhr=options.xhr=Backbone.ajax(_.extend(params,options));
model.trigger('request',model,xhr,options);
return xhr;
};


Backbone.ajax=function(){
return Backbone.$.ajax.apply(Backbone.$,arguments);
};







var extend=function(protoProps,staticProps){
var parent=this;
var child;




if(protoProps&&_.has(protoProps,'constructor')){
child=protoProps.constructor;
}else{
child=function(){return parent.apply(this,arguments);};
}


_.extend(child,parent,staticProps);



var Surrogate=function(){this.constructor=child;};
Surrogate.prototype=parent.prototype;
child.prototype=new Surrogate;



if(protoProps)_.extend(child.prototype,protoProps);



child.__super__=parent.prototype;

return child;
};


Model.extend=Collection.extend=Router.extend=View.extend=History.extend=extend;


var urlError=function(){
throw new Error('A "url" property or function must be specified');
};

}).call(this);









(function(){

var globalEventFunctions=
{
triggerGlobal:function()
{
Backbone.trigger.apply(Backbone,arguments);
},

onGlobal:function()
{
Backbone.on.apply(Backbone,arguments);
},

offGlobal:function()
{
Backbone.off.apply(Backbone,arguments);
},

onceGlobal:function()
{
Backbone.once.apply(Backbone,arguments);
},

listenToGlobal:function()
{
Backbone.listenTo.apply(Backbone,arguments);
},

stopListeningGlobal:function()
{
Backbone.stopListening.apply(Backbone,arguments);
}
};


_.extend(Backbone.Model.prototype,globalEventFunctions);
_.extend(Backbone.Collection.prototype,globalEventFunctions);
_.extend(Backbone.View.prototype,globalEventFunctions);
_.extend(Backbone.Events,globalEventFunctions);

})();







Backbone.Model.prototype.toJSON=function()
{
var json=_.clone(this.attributes);
_.each(json,function(value,name)
{
if(value&&_.isFunction(value.toJSON))
{
json[name]=value.toJSON();
}
});
return json;
};

































Backbone.ComputedPropertyMixin=
{

get:function(attr)
{
var computed=this._computed[attr];
if(computed)
{
return computed.get.call(this);
}
return this.attributes[attr];
},

createComputedProperty:function(options)
{
var defaults={
attr:"",
get:function(){},
bindings:[]
};
options=_.extend(defaults,options);


var triggerChange=function()
{
this.trigger("change:"+options.attr);
this.trigger("change");
};


var listen=function(method)
{
for(var i=0;i<options.bindings.length;i++)
{
var eventType=options.bindings[i].eventType?options.bindings[i].eventType:"change";

if(options.bindings[i].attribute)
{
options.bindings[i].model[method](eventType+":"+options.bindings[i].attribute,triggerChange,this);
}
else
{
options.bindings[i].model[method](eventType,triggerChange,this);
}
}
};

listen.call(this,"on");


this.on("destroy",listen.bind(this,"off"));


if(!this._computed)
{
this._computed={};
}
this._computed[options.attr]={get:options.get,bindings:options.bindings};
}
};








Backbone.Model.prototype.bindAttribute=function(model,modelAttribute,myAttribute)
{
if(!myAttribute)
{
myAttribute=modelAttribute;
}

var self=this;

this.set(myAttribute,model.get(modelAttribute),{silent:true});

this.listenTo(model,"change:"+modelAttribute,function()
{
self.set(myAttribute,model.get(modelAttribute));
});

this.on("destroy",function(){
this.stopListening(model,"change:"+modelAttribute);
});
};









Backbone.NestedCollection=Backbone.Collection.extend({



_prepareModel:function(model,options)
{
options=options||{};
options.parent=this.parent;

if(!(model instanceof Backbone.Model))
{
var attrs=model;
if(attrs.Model)
{
model=new(eval(attrs.Model))(attrs,options);
}
else
{
model=new this.model(attrs,options);
}
}

model.parent=this.parent;

return model;
}
});




Backbone.AncestorByTypeMixin=
{
getAncestorByType:function(type)
{
var parent=this.parent;

while(parent)
{
if(parent instanceof type)
{
return parent;
}
parent=parent.parent;
}

return null;
}
};








Backbone.NestedModel=Backbone.Model.extend({

initialize:function(attrs,options)
{
if(options&&options.parent)
{
this.parent=options.parent;
}

for(var attrKey in this.attributes)
{
var attrValue=this.attributes[attrKey];
if(_.isArray(attrValue)&&this[attrKey])
{
var collection=this[attrKey];
collection.parent=this;
collection.reset(attrValue);



this.set(attrKey,collection,{silent:true});


collection.on(
"change add remove reset",
function(model)
{
this.trigger("change",model);
},
this);
}
else if(_.isObject(attrValue)&&attrValue.Model)
{
this[attrKey]=new(eval(attrValue.Model))(attrValue,{parent:this});
this.set(attrKey,this[attrKey],{silent:true});
this[attrKey].parent=this;


this[attrKey].on(
"change reset",
function(model)
{
this.trigger("change",model);
},
this);
}
}
}

});

_.extend(Backbone.NestedModel.prototype,Backbone.AncestorByTypeMixin);
































Backbone.maintainSortOrder=function(collection,sortOrder)
{


var getSortToken=function()
{
return _.pluck(collection.models,"cid").join(",");
};


var lastTaskSortToken=getSortToken();


collection.on(
"change",
function()
{

collection.sort();



var newTaskSortToken=getSortToken();
if(lastTaskSortToken!=newTaskSortToken)
{
lastTaskSortToken=newTaskSortToken;

collection.trigger("sort",collection);
}
},
collection);







collection.comparator=function(a,b)
{
for(var prop in sortOrder)
{
var asc=(sortOrder[prop].order&&sortOrder[prop].order=="desc")?-1:1;
var map=sortOrder[prop].map||function(x){return x;};

var valA=map(a.get(prop));
var valB=map(b.get(prop));

if(valA!=valB)
{
return(valA>valB?1:-1)*asc;
}
}

return 0;
};
};

















Backbone.ReplaceElementMixin=
{
replaceElement:function(htmlOrElement)
{
var $newEl=$(htmlOrElement);

if(this.$el.length>0)
{
this.$el.replaceWith($newEl);
}

this.setElement($newEl);
}
};







(function()
{

var methodMap={
'create':'POST',
'update':'PUT',
'delete':'DELETE',
'read':'GET'
};

Backbone.syncMs=function(method,model,options)
{
var params={
type:methodMap[method],
data:model,
url:model.url()
};


return $.ajaxMs(_.extend(params,options));
};

})();





Backbone.extend=Backbone.Model.extend;







Backbone.Application=function()
{
this.initialize.apply(this,arguments);
};

Backbone.Application.extend=Backbone.Model.extend;

_.extend(Backbone.Application.prototype,Backbone.Events);








(function()
{
var routeStripper=/^[#\/]/;

Backbone.History.prototype.getFragment=function(fragment,forcePushState)
{
if(fragment==null)
{
if(this._hasPushState||forcePushState)
{
fragment=window.location.pathname;
var search=window.location.search;
if(search)fragment+=search;
}
else
{
fragment=window.location.hash;
}
}
if(!fragment.indexOf(this.options.root))fragment=fragment.substr(this.options.root.length);
return fragment.replace(routeStripper,'');
};

})();

(function(){

var queryStringParam=/^\?(.*)/;
var namedParam=/:([\w\d]+)/g;
var splatParam=/\*([\w\d]+)/g;
var escapeRegExp=/[-[\]{}()+?.,\\^$|#\s]/g;
var queryStrip=/(\?.*)$/;
var fragmentStrip=/^([^\?]*)/;
Backbone.Router.arrayValueSplit='|';

var _getFragment=Backbone.History.prototype.getFragment;

_.extend(Backbone.History.prototype,{
getFragment:function(fragment,forcePushState,excludeQueryString){
fragment=_getFragment.apply(this,arguments);
if(excludeQueryString){
fragment=fragment.replace(queryStrip,'');
}
return fragment;
},



getQueryParameters:function(fragment,forcePushState){
fragment=_getFragment.apply(this,arguments);

var queryString=fragment.replace(fragmentStrip,'');
var match=queryString.match(queryStringParam);
if(match){
queryString=match[1];
var rtn={};
iterateQueryString(queryString,function(name,value){
if(!rtn[name]){






rtn[name]=decodeURIComponent(value);
}else if(_.isString(rtn[name])){
rtn[name]=[rtn[name],value];
}else{
rtn[name].push(value);
}
});
return rtn;
}else{

return{};
}
}
});

_.extend(Backbone.Router.prototype,{
initialize:function(options){
this.encodedSplatParts=options&&options.encodedSplatParts;
},

getFragment:function(fragment,forcePushState,excludeQueryString){
fragment=_getFragment.apply(this,arguments);
if(excludeQueryString){
fragment=fragment.replace(queryStrip,'');
}
return fragment;
},

_routeToRegExp:function(route){
var splatMatch=(splatParam.exec(route)||{index:-1});
var namedMatch=(namedParam.exec(route)||{index:-1});

route=route.replace(escapeRegExp,"\\$&")
.replace(namedParam,"([^\/?]*)")
.replace(splatParam,"([^\?]*)");
route+='([\?]{1}.*)?';

var rtn=new RegExp('^'+route+'$');


if(splatMatch.index>=0){

if(namedMatch>=0){

rtn.splatMatch=splatMatch.index-namedMatch.index;
}else{
rtn.splatMatch=-1;
}
}

return rtn;
},





_extractParameters:function(route,fragment){
var params=route.exec(fragment).slice(1);


var match=params.length&&params[params.length-1]&&params[params.length-1].match(queryStringParam);
if(match){
var queryString=match[1];
var data={};
if(queryString){
var self=this;
iterateQueryString(queryString,function(name,value){
self._setParamValue(name,value,data);
});
}
params[params.length-1]=data;
}


var length=params.length;
if(route.splatMatch&&this.encodedSplatParts){
if(route.splatMatch<0){

return params;
}else{
length=length-1;
}
}

for(var i=0;i<length;i++){
if(_.isString(params[i])){
params[i]=decodeURIComponent(params[i]);
}
}

return params;
},




_setParamValue:function(key,value,data){

var parts=key.split('.');
var _data=data;
for(var i=0;i<parts.length;i++){
var part=parts[i];
if(i===parts.length-1){

_data[part]=this._decodeParamValue(value,_data[part]);
}else{
_data=_data[part]=_data[part]||{};
}
}
},






_decodeParamValue:function(value,currentValue){

var splitChar=Backbone.Router.arrayValueSplit;
if(value.indexOf(splitChar)>=0){
var values=value.split(splitChar);

for(var i=values.length-1;i>=0;i--){
if(!values[i]){
values.splice(i,1);
}else{
values[i]=decodeURIComponent(values[i]);
}
}
return values;
}
if(!currentValue){
return decodeURIComponent(value);
}else if(_.isArray(currentValue)){
currentValue.push(value);
return currentValue;
}else{
return[currentValue,value];
}
},




toFragment:function(route,queryParameters){
if(queryParameters){
if(!_.isString(queryParameters)){
queryParameters=this._toQueryString(queryParameters);
}
route+='?'+queryParameters;
}
return route;
},




_toQueryString:function(val,namePrefix){
var splitChar=Backbone.Router.arrayValueSplit;
function encodeSplit(val){return val.replace(splitChar,encodeURIComponent(splitChar));}

if(!val)return'';
namePrefix=namePrefix||'';
var rtn='';
for(var name in val){
var _val=val[name];
if(_.isString(_val)||_.isNumber(_val)||_.isBoolean(_val)||_.isDate(_val)){

_val=this._toQueryParam(_val);
if(_.isBoolean(_val)||_val){
rtn+=(rtn?'&':'')+this._toQueryParamName(name,namePrefix)+'='+encodeSplit(encodeURIComponent(_val));
}
}else if(_.isArray(_val)){

var str='';
for(var i in _val){
var param=this._toQueryParam(_val[i]);
if(_.isBoolean(param)||param){
str+=splitChar+encodeSplit(param);
}
}
if(str){
rtn+=(rtn?'&':'')+this._toQueryParamName(name,namePrefix)+'='+str;
}
}else{

var result=this._toQueryString(_val,this._toQueryParamName(name,namePrefix,true));
if(result){
rtn+=(rtn?'&':'')+result;
}
}
}
return rtn;
},







_toQueryParamName:function(name,prefix,isPrefix){
return(prefix+name+(isPrefix?'.':''));
},




_toQueryParam:function(param){
if(_.isNull(param)||_.isUndefined(param)){
return null;
}
if(_.isDate(param)){
return param.getDate().getTime();
}
return param;
}
});

function iterateQueryString(queryString,callback){
var keyValues=queryString.split('&');
_.each(keyValues,function(keyValue){
var arr=keyValue.split('=');
if(arr.length>1&&arr[1]){
callback(arr[0],arr[1]);
}
});
}

})();

