goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33336 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33336(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33337 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33337(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32543 = coll;
var G__32544 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32543,G__32544) : shadow.dom.lazy_native_coll_seq.call(null,G__32543,G__32544));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32589 = arguments.length;
switch (G__32589) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32591 = arguments.length;
switch (G__32591) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32613 = arguments.length;
switch (G__32613) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32658 = arguments.length;
switch (G__32658) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32673 = arguments.length;
switch (G__32673) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32721 = arguments.length;
switch (G__32721) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32722){if((e32722 instanceof Object)){
var e = e32722;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32722;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32723 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32724 = null;
var count__32725 = (0);
var i__32726 = (0);
while(true){
if((i__32726 < count__32725)){
var el = chunk__32724.cljs$core$IIndexed$_nth$arity$2(null,i__32726);
var handler_33344__$1 = ((function (seq__32723,chunk__32724,count__32725,i__32726,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32723,chunk__32724,count__32725,i__32726,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33344__$1);


var G__33345 = seq__32723;
var G__33346 = chunk__32724;
var G__33347 = count__32725;
var G__33348 = (i__32726 + (1));
seq__32723 = G__33345;
chunk__32724 = G__33346;
count__32725 = G__33347;
i__32726 = G__33348;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32723);
if(temp__5753__auto__){
var seq__32723__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32723__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32723__$1);
var G__33349 = cljs.core.chunk_rest(seq__32723__$1);
var G__33350 = c__4638__auto__;
var G__33351 = cljs.core.count(c__4638__auto__);
var G__33352 = (0);
seq__32723 = G__33349;
chunk__32724 = G__33350;
count__32725 = G__33351;
i__32726 = G__33352;
continue;
} else {
var el = cljs.core.first(seq__32723__$1);
var handler_33353__$1 = ((function (seq__32723,chunk__32724,count__32725,i__32726,el,seq__32723__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32723,chunk__32724,count__32725,i__32726,el,seq__32723__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33353__$1);


var G__33354 = cljs.core.next(seq__32723__$1);
var G__33355 = null;
var G__33356 = (0);
var G__33357 = (0);
seq__32723 = G__33354;
chunk__32724 = G__33355;
count__32725 = G__33356;
i__32726 = G__33357;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32855 = arguments.length;
switch (G__32855) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32869 = cljs.core.seq(events);
var chunk__32870 = null;
var count__32871 = (0);
var i__32872 = (0);
while(true){
if((i__32872 < count__32871)){
var vec__32879 = chunk__32870.cljs$core$IIndexed$_nth$arity$2(null,i__32872);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32879,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33359 = seq__32869;
var G__33360 = chunk__32870;
var G__33361 = count__32871;
var G__33362 = (i__32872 + (1));
seq__32869 = G__33359;
chunk__32870 = G__33360;
count__32871 = G__33361;
i__32872 = G__33362;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32869);
if(temp__5753__auto__){
var seq__32869__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32869__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32869__$1);
var G__33363 = cljs.core.chunk_rest(seq__32869__$1);
var G__33364 = c__4638__auto__;
var G__33365 = cljs.core.count(c__4638__auto__);
var G__33366 = (0);
seq__32869 = G__33363;
chunk__32870 = G__33364;
count__32871 = G__33365;
i__32872 = G__33366;
continue;
} else {
var vec__32882 = cljs.core.first(seq__32869__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32882,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32882,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33367 = cljs.core.next(seq__32869__$1);
var G__33368 = null;
var G__33369 = (0);
var G__33370 = (0);
seq__32869 = G__33367;
chunk__32870 = G__33368;
count__32871 = G__33369;
i__32872 = G__33370;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32885 = cljs.core.seq(styles);
var chunk__32886 = null;
var count__32887 = (0);
var i__32888 = (0);
while(true){
if((i__32888 < count__32887)){
var vec__32895 = chunk__32886.cljs$core$IIndexed$_nth$arity$2(null,i__32888);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32895,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32895,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33371 = seq__32885;
var G__33372 = chunk__32886;
var G__33373 = count__32887;
var G__33374 = (i__32888 + (1));
seq__32885 = G__33371;
chunk__32886 = G__33372;
count__32887 = G__33373;
i__32888 = G__33374;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32885);
if(temp__5753__auto__){
var seq__32885__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32885__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32885__$1);
var G__33375 = cljs.core.chunk_rest(seq__32885__$1);
var G__33376 = c__4638__auto__;
var G__33377 = cljs.core.count(c__4638__auto__);
var G__33378 = (0);
seq__32885 = G__33375;
chunk__32886 = G__33376;
count__32887 = G__33377;
i__32888 = G__33378;
continue;
} else {
var vec__32957 = cljs.core.first(seq__32885__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32957,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32957,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33379 = cljs.core.next(seq__32885__$1);
var G__33380 = null;
var G__33381 = (0);
var G__33382 = (0);
seq__32885 = G__33379;
chunk__32886 = G__33380;
count__32887 = G__33381;
i__32888 = G__33382;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32960_33383 = key;
var G__32960_33384__$1 = (((G__32960_33383 instanceof cljs.core.Keyword))?G__32960_33383.fqn:null);
switch (G__32960_33384__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33386 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_33386,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_33386,"aria-");
}
})())){
el.setAttribute(ks_33386,value);
} else {
(el[ks_33386] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32984){
var map__32987 = p__32984;
var map__32987__$1 = cljs.core.__destructure_map(map__32987);
var props = map__32987__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32987__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32990 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32990,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32990,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32990,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32995 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32995,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32995;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33002 = arguments.length;
switch (G__33002) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33036){
var vec__33037 = p__33036;
var seq__33038 = cljs.core.seq(vec__33037);
var first__33039 = cljs.core.first(seq__33038);
var seq__33038__$1 = cljs.core.next(seq__33038);
var nn = first__33039;
var first__33039__$1 = cljs.core.first(seq__33038__$1);
var seq__33038__$2 = cljs.core.next(seq__33038__$1);
var np = first__33039__$1;
var nc = seq__33038__$2;
var node = vec__33037;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33040 = nn;
var G__33041 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33040,G__33041) : create_fn.call(null,G__33040,G__33041));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33042 = nn;
var G__33043 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33042,G__33043) : create_fn.call(null,G__33042,G__33043));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33044 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33044,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33044,(1),null);
var seq__33047_33394 = cljs.core.seq(node_children);
var chunk__33048_33395 = null;
var count__33049_33396 = (0);
var i__33050_33397 = (0);
while(true){
if((i__33050_33397 < count__33049_33396)){
var child_struct_33398 = chunk__33048_33395.cljs$core$IIndexed$_nth$arity$2(null,i__33050_33397);
var children_33399 = shadow.dom.dom_node(child_struct_33398);
if(cljs.core.seq_QMARK_(children_33399)){
var seq__33112_33400 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33399));
var chunk__33114_33401 = null;
var count__33115_33402 = (0);
var i__33116_33403 = (0);
while(true){
if((i__33116_33403 < count__33115_33402)){
var child_33404 = chunk__33114_33401.cljs$core$IIndexed$_nth$arity$2(null,i__33116_33403);
if(cljs.core.truth_(child_33404)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33404);


var G__33405 = seq__33112_33400;
var G__33406 = chunk__33114_33401;
var G__33407 = count__33115_33402;
var G__33408 = (i__33116_33403 + (1));
seq__33112_33400 = G__33405;
chunk__33114_33401 = G__33406;
count__33115_33402 = G__33407;
i__33116_33403 = G__33408;
continue;
} else {
var G__33409 = seq__33112_33400;
var G__33410 = chunk__33114_33401;
var G__33411 = count__33115_33402;
var G__33412 = (i__33116_33403 + (1));
seq__33112_33400 = G__33409;
chunk__33114_33401 = G__33410;
count__33115_33402 = G__33411;
i__33116_33403 = G__33412;
continue;
}
} else {
var temp__5753__auto___33413 = cljs.core.seq(seq__33112_33400);
if(temp__5753__auto___33413){
var seq__33112_33414__$1 = temp__5753__auto___33413;
if(cljs.core.chunked_seq_QMARK_(seq__33112_33414__$1)){
var c__4638__auto___33415 = cljs.core.chunk_first(seq__33112_33414__$1);
var G__33416 = cljs.core.chunk_rest(seq__33112_33414__$1);
var G__33417 = c__4638__auto___33415;
var G__33418 = cljs.core.count(c__4638__auto___33415);
var G__33419 = (0);
seq__33112_33400 = G__33416;
chunk__33114_33401 = G__33417;
count__33115_33402 = G__33418;
i__33116_33403 = G__33419;
continue;
} else {
var child_33421 = cljs.core.first(seq__33112_33414__$1);
if(cljs.core.truth_(child_33421)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33421);


var G__33422 = cljs.core.next(seq__33112_33414__$1);
var G__33423 = null;
var G__33424 = (0);
var G__33425 = (0);
seq__33112_33400 = G__33422;
chunk__33114_33401 = G__33423;
count__33115_33402 = G__33424;
i__33116_33403 = G__33425;
continue;
} else {
var G__33426 = cljs.core.next(seq__33112_33414__$1);
var G__33427 = null;
var G__33428 = (0);
var G__33429 = (0);
seq__33112_33400 = G__33426;
chunk__33114_33401 = G__33427;
count__33115_33402 = G__33428;
i__33116_33403 = G__33429;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33399);
}


var G__33431 = seq__33047_33394;
var G__33432 = chunk__33048_33395;
var G__33433 = count__33049_33396;
var G__33434 = (i__33050_33397 + (1));
seq__33047_33394 = G__33431;
chunk__33048_33395 = G__33432;
count__33049_33396 = G__33433;
i__33050_33397 = G__33434;
continue;
} else {
var temp__5753__auto___33435 = cljs.core.seq(seq__33047_33394);
if(temp__5753__auto___33435){
var seq__33047_33436__$1 = temp__5753__auto___33435;
if(cljs.core.chunked_seq_QMARK_(seq__33047_33436__$1)){
var c__4638__auto___33437 = cljs.core.chunk_first(seq__33047_33436__$1);
var G__33438 = cljs.core.chunk_rest(seq__33047_33436__$1);
var G__33439 = c__4638__auto___33437;
var G__33440 = cljs.core.count(c__4638__auto___33437);
var G__33441 = (0);
seq__33047_33394 = G__33438;
chunk__33048_33395 = G__33439;
count__33049_33396 = G__33440;
i__33050_33397 = G__33441;
continue;
} else {
var child_struct_33442 = cljs.core.first(seq__33047_33436__$1);
var children_33443 = shadow.dom.dom_node(child_struct_33442);
if(cljs.core.seq_QMARK_(children_33443)){
var seq__33120_33444 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33443));
var chunk__33122_33445 = null;
var count__33123_33446 = (0);
var i__33124_33447 = (0);
while(true){
if((i__33124_33447 < count__33123_33446)){
var child_33448 = chunk__33122_33445.cljs$core$IIndexed$_nth$arity$2(null,i__33124_33447);
if(cljs.core.truth_(child_33448)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33448);


var G__33449 = seq__33120_33444;
var G__33450 = chunk__33122_33445;
var G__33451 = count__33123_33446;
var G__33452 = (i__33124_33447 + (1));
seq__33120_33444 = G__33449;
chunk__33122_33445 = G__33450;
count__33123_33446 = G__33451;
i__33124_33447 = G__33452;
continue;
} else {
var G__33453 = seq__33120_33444;
var G__33454 = chunk__33122_33445;
var G__33455 = count__33123_33446;
var G__33456 = (i__33124_33447 + (1));
seq__33120_33444 = G__33453;
chunk__33122_33445 = G__33454;
count__33123_33446 = G__33455;
i__33124_33447 = G__33456;
continue;
}
} else {
var temp__5753__auto___33457__$1 = cljs.core.seq(seq__33120_33444);
if(temp__5753__auto___33457__$1){
var seq__33120_33458__$1 = temp__5753__auto___33457__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33120_33458__$1)){
var c__4638__auto___33459 = cljs.core.chunk_first(seq__33120_33458__$1);
var G__33460 = cljs.core.chunk_rest(seq__33120_33458__$1);
var G__33461 = c__4638__auto___33459;
var G__33462 = cljs.core.count(c__4638__auto___33459);
var G__33463 = (0);
seq__33120_33444 = G__33460;
chunk__33122_33445 = G__33461;
count__33123_33446 = G__33462;
i__33124_33447 = G__33463;
continue;
} else {
var child_33464 = cljs.core.first(seq__33120_33458__$1);
if(cljs.core.truth_(child_33464)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33464);


var G__33465 = cljs.core.next(seq__33120_33458__$1);
var G__33466 = null;
var G__33467 = (0);
var G__33468 = (0);
seq__33120_33444 = G__33465;
chunk__33122_33445 = G__33466;
count__33123_33446 = G__33467;
i__33124_33447 = G__33468;
continue;
} else {
var G__33470 = cljs.core.next(seq__33120_33458__$1);
var G__33471 = null;
var G__33472 = (0);
var G__33473 = (0);
seq__33120_33444 = G__33470;
chunk__33122_33445 = G__33471;
count__33123_33446 = G__33472;
i__33124_33447 = G__33473;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33443);
}


var G__33474 = cljs.core.next(seq__33047_33436__$1);
var G__33475 = null;
var G__33476 = (0);
var G__33477 = (0);
seq__33047_33394 = G__33474;
chunk__33048_33395 = G__33475;
count__33049_33396 = G__33476;
i__33050_33397 = G__33477;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33147 = cljs.core.seq(node);
var chunk__33148 = null;
var count__33149 = (0);
var i__33150 = (0);
while(true){
if((i__33150 < count__33149)){
var n = chunk__33148.cljs$core$IIndexed$_nth$arity$2(null,i__33150);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33479 = seq__33147;
var G__33480 = chunk__33148;
var G__33481 = count__33149;
var G__33482 = (i__33150 + (1));
seq__33147 = G__33479;
chunk__33148 = G__33480;
count__33149 = G__33481;
i__33150 = G__33482;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33147);
if(temp__5753__auto__){
var seq__33147__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33147__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33147__$1);
var G__33483 = cljs.core.chunk_rest(seq__33147__$1);
var G__33484 = c__4638__auto__;
var G__33485 = cljs.core.count(c__4638__auto__);
var G__33486 = (0);
seq__33147 = G__33483;
chunk__33148 = G__33484;
count__33149 = G__33485;
i__33150 = G__33486;
continue;
} else {
var n = cljs.core.first(seq__33147__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33487 = cljs.core.next(seq__33147__$1);
var G__33488 = null;
var G__33489 = (0);
var G__33490 = (0);
seq__33147 = G__33487;
chunk__33148 = G__33488;
count__33149 = G__33489;
i__33150 = G__33490;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33191 = arguments.length;
switch (G__33191) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33193 = arguments.length;
switch (G__33193) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33195 = arguments.length;
switch (G__33195) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33494 = arguments.length;
var i__4819__auto___33495 = (0);
while(true){
if((i__4819__auto___33495 < len__4818__auto___33494)){
args__4824__auto__.push((arguments[i__4819__auto___33495]));

var G__33496 = (i__4819__auto___33495 + (1));
i__4819__auto___33495 = G__33496;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33197_33497 = cljs.core.seq(nodes);
var chunk__33198_33498 = null;
var count__33199_33499 = (0);
var i__33200_33500 = (0);
while(true){
if((i__33200_33500 < count__33199_33499)){
var node_33502 = chunk__33198_33498.cljs$core$IIndexed$_nth$arity$2(null,i__33200_33500);
fragment.appendChild(shadow.dom._to_dom(node_33502));


var G__33503 = seq__33197_33497;
var G__33504 = chunk__33198_33498;
var G__33505 = count__33199_33499;
var G__33506 = (i__33200_33500 + (1));
seq__33197_33497 = G__33503;
chunk__33198_33498 = G__33504;
count__33199_33499 = G__33505;
i__33200_33500 = G__33506;
continue;
} else {
var temp__5753__auto___33507 = cljs.core.seq(seq__33197_33497);
if(temp__5753__auto___33507){
var seq__33197_33508__$1 = temp__5753__auto___33507;
if(cljs.core.chunked_seq_QMARK_(seq__33197_33508__$1)){
var c__4638__auto___33509 = cljs.core.chunk_first(seq__33197_33508__$1);
var G__33510 = cljs.core.chunk_rest(seq__33197_33508__$1);
var G__33511 = c__4638__auto___33509;
var G__33512 = cljs.core.count(c__4638__auto___33509);
var G__33513 = (0);
seq__33197_33497 = G__33510;
chunk__33198_33498 = G__33511;
count__33199_33499 = G__33512;
i__33200_33500 = G__33513;
continue;
} else {
var node_33514 = cljs.core.first(seq__33197_33508__$1);
fragment.appendChild(shadow.dom._to_dom(node_33514));


var G__33516 = cljs.core.next(seq__33197_33508__$1);
var G__33517 = null;
var G__33518 = (0);
var G__33519 = (0);
seq__33197_33497 = G__33516;
chunk__33198_33498 = G__33517;
count__33199_33499 = G__33518;
i__33200_33500 = G__33519;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33196){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33196));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33201_33521 = cljs.core.seq(scripts);
var chunk__33202_33522 = null;
var count__33203_33523 = (0);
var i__33204_33524 = (0);
while(true){
if((i__33204_33524 < count__33203_33523)){
var vec__33211_33526 = chunk__33202_33522.cljs$core$IIndexed$_nth$arity$2(null,i__33204_33524);
var script_tag_33527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33211_33526,(0),null);
var script_body_33528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33211_33526,(1),null);
eval(script_body_33528);


var G__33529 = seq__33201_33521;
var G__33530 = chunk__33202_33522;
var G__33531 = count__33203_33523;
var G__33532 = (i__33204_33524 + (1));
seq__33201_33521 = G__33529;
chunk__33202_33522 = G__33530;
count__33203_33523 = G__33531;
i__33204_33524 = G__33532;
continue;
} else {
var temp__5753__auto___33533 = cljs.core.seq(seq__33201_33521);
if(temp__5753__auto___33533){
var seq__33201_33534__$1 = temp__5753__auto___33533;
if(cljs.core.chunked_seq_QMARK_(seq__33201_33534__$1)){
var c__4638__auto___33535 = cljs.core.chunk_first(seq__33201_33534__$1);
var G__33536 = cljs.core.chunk_rest(seq__33201_33534__$1);
var G__33537 = c__4638__auto___33535;
var G__33538 = cljs.core.count(c__4638__auto___33535);
var G__33539 = (0);
seq__33201_33521 = G__33536;
chunk__33202_33522 = G__33537;
count__33203_33523 = G__33538;
i__33204_33524 = G__33539;
continue;
} else {
var vec__33214_33540 = cljs.core.first(seq__33201_33534__$1);
var script_tag_33541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33214_33540,(0),null);
var script_body_33542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33214_33540,(1),null);
eval(script_body_33542);


var G__33543 = cljs.core.next(seq__33201_33534__$1);
var G__33544 = null;
var G__33545 = (0);
var G__33546 = (0);
seq__33201_33521 = G__33543;
chunk__33202_33522 = G__33544;
count__33203_33523 = G__33545;
i__33204_33524 = G__33546;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33217){
var vec__33218 = p__33217;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33218,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33218,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33222 = arguments.length;
switch (G__33222) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33223 = cljs.core.seq(style_keys);
var chunk__33224 = null;
var count__33225 = (0);
var i__33226 = (0);
while(true){
if((i__33226 < count__33225)){
var it = chunk__33224.cljs$core$IIndexed$_nth$arity$2(null,i__33226);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33548 = seq__33223;
var G__33549 = chunk__33224;
var G__33550 = count__33225;
var G__33551 = (i__33226 + (1));
seq__33223 = G__33548;
chunk__33224 = G__33549;
count__33225 = G__33550;
i__33226 = G__33551;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33223);
if(temp__5753__auto__){
var seq__33223__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33223__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__33223__$1);
var G__33552 = cljs.core.chunk_rest(seq__33223__$1);
var G__33553 = c__4638__auto__;
var G__33554 = cljs.core.count(c__4638__auto__);
var G__33555 = (0);
seq__33223 = G__33552;
chunk__33224 = G__33553;
count__33225 = G__33554;
i__33226 = G__33555;
continue;
} else {
var it = cljs.core.first(seq__33223__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33556 = cljs.core.next(seq__33223__$1);
var G__33557 = null;
var G__33558 = (0);
var G__33559 = (0);
seq__33223 = G__33556;
chunk__33224 = G__33557;
count__33225 = G__33558;
i__33226 = G__33559;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33228,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33232 = k33228;
var G__33232__$1 = (((G__33232 instanceof cljs.core.Keyword))?G__33232.fqn:null);
switch (G__33232__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33228,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33233){
var vec__33234 = p__33233;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33234,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33234,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33227){
var self__ = this;
var G__33227__$1 = this;
return (new cljs.core.RecordIter((0),G__33227__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33229,other33230){
var self__ = this;
var this33229__$1 = this;
return (((!((other33230 == null)))) && ((((this33229__$1.constructor === other33230.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33229__$1.x,other33230.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33229__$1.y,other33230.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33229__$1.__extmap,other33230.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33228){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33237 = k33228;
var G__33237__$1 = (((G__33237 instanceof cljs.core.Keyword))?G__33237.fqn:null);
switch (G__33237__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33228);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33227){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33238 = cljs.core.keyword_identical_QMARK_;
var expr__33239 = k__4470__auto__;
if(cljs.core.truth_((pred__33238.cljs$core$IFn$_invoke$arity$2 ? pred__33238.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33239) : pred__33238.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33239)))){
return (new shadow.dom.Coordinate(G__33227,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33238.cljs$core$IFn$_invoke$arity$2 ? pred__33238.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33239) : pred__33238.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33239)))){
return (new shadow.dom.Coordinate(self__.x,G__33227,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33227),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33227){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33227,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33231){
var extmap__4501__auto__ = (function (){var G__33241 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33231,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33231)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33241);
} else {
return G__33241;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33231),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33231),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k33243,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__33247 = k33243;
var G__33247__$1 = (((G__33247 instanceof cljs.core.Keyword))?G__33247.fqn:null);
switch (G__33247__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33243,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__33248){
var vec__33249 = p__33248;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33249,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33249,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33242){
var self__ = this;
var G__33242__$1 = this;
return (new cljs.core.RecordIter((0),G__33242__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33244,other33245){
var self__ = this;
var this33244__$1 = this;
return (((!((other33245 == null)))) && ((((this33244__$1.constructor === other33245.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33244__$1.w,other33245.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33244__$1.h,other33245.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33244__$1.__extmap,other33245.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k33243){
var self__ = this;
var this__4468__auto____$1 = this;
var G__33252 = k33243;
var G__33252__$1 = (((G__33252 instanceof cljs.core.Keyword))?G__33252.fqn:null);
switch (G__33252__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33243);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__33242){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__33253 = cljs.core.keyword_identical_QMARK_;
var expr__33254 = k__4470__auto__;
if(cljs.core.truth_((pred__33253.cljs$core$IFn$_invoke$arity$2 ? pred__33253.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33254) : pred__33253.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33254)))){
return (new shadow.dom.Size(G__33242,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33253.cljs$core$IFn$_invoke$arity$2 ? pred__33253.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33254) : pred__33253.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33254)))){
return (new shadow.dom.Size(self__.w,G__33242,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__33242),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__33242){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33242,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33246){
var extmap__4501__auto__ = (function (){var G__33256 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33246,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33246)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33256);
} else {
return G__33256;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33246),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33246),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__33578 = (i + (1));
var G__33579 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33578;
ret = G__33579;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33261){
var vec__33262 = p__33261;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33262,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33266 = arguments.length;
switch (G__33266) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33581 = ps;
var G__33582 = (i + (1));
el__$1 = G__33581;
i = G__33582;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33267 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33267,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33267,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33267,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33270_33583 = cljs.core.seq(props);
var chunk__33271_33584 = null;
var count__33272_33585 = (0);
var i__33273_33586 = (0);
while(true){
if((i__33273_33586 < count__33272_33585)){
var vec__33280_33587 = chunk__33271_33584.cljs$core$IIndexed$_nth$arity$2(null,i__33273_33586);
var k_33588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33280_33587,(0),null);
var v_33589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33280_33587,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_33588);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33588),v_33589);


var G__33590 = seq__33270_33583;
var G__33591 = chunk__33271_33584;
var G__33592 = count__33272_33585;
var G__33593 = (i__33273_33586 + (1));
seq__33270_33583 = G__33590;
chunk__33271_33584 = G__33591;
count__33272_33585 = G__33592;
i__33273_33586 = G__33593;
continue;
} else {
var temp__5753__auto___33594 = cljs.core.seq(seq__33270_33583);
if(temp__5753__auto___33594){
var seq__33270_33595__$1 = temp__5753__auto___33594;
if(cljs.core.chunked_seq_QMARK_(seq__33270_33595__$1)){
var c__4638__auto___33596 = cljs.core.chunk_first(seq__33270_33595__$1);
var G__33597 = cljs.core.chunk_rest(seq__33270_33595__$1);
var G__33598 = c__4638__auto___33596;
var G__33599 = cljs.core.count(c__4638__auto___33596);
var G__33600 = (0);
seq__33270_33583 = G__33597;
chunk__33271_33584 = G__33598;
count__33272_33585 = G__33599;
i__33273_33586 = G__33600;
continue;
} else {
var vec__33283_33601 = cljs.core.first(seq__33270_33595__$1);
var k_33602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33283_33601,(0),null);
var v_33603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33283_33601,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_33602);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33602),v_33603);


var G__33607 = cljs.core.next(seq__33270_33595__$1);
var G__33608 = null;
var G__33609 = (0);
var G__33610 = (0);
seq__33270_33583 = G__33607;
chunk__33271_33584 = G__33608;
count__33272_33585 = G__33609;
i__33273_33586 = G__33610;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33287 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33287,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33287,(1),null);
var seq__33290_33611 = cljs.core.seq(node_children);
var chunk__33292_33612 = null;
var count__33293_33613 = (0);
var i__33294_33614 = (0);
while(true){
if((i__33294_33614 < count__33293_33613)){
var child_struct_33615 = chunk__33292_33612.cljs$core$IIndexed$_nth$arity$2(null,i__33294_33614);
if((!((child_struct_33615 == null)))){
if(typeof child_struct_33615 === 'string'){
var text_33616 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33616),child_struct_33615].join(''));
} else {
var children_33617 = shadow.dom.svg_node(child_struct_33615);
if(cljs.core.seq_QMARK_(children_33617)){
var seq__33308_33618 = cljs.core.seq(children_33617);
var chunk__33310_33619 = null;
var count__33311_33620 = (0);
var i__33312_33621 = (0);
while(true){
if((i__33312_33621 < count__33311_33620)){
var child_33622 = chunk__33310_33619.cljs$core$IIndexed$_nth$arity$2(null,i__33312_33621);
if(cljs.core.truth_(child_33622)){
node.appendChild(child_33622);


var G__33623 = seq__33308_33618;
var G__33624 = chunk__33310_33619;
var G__33625 = count__33311_33620;
var G__33626 = (i__33312_33621 + (1));
seq__33308_33618 = G__33623;
chunk__33310_33619 = G__33624;
count__33311_33620 = G__33625;
i__33312_33621 = G__33626;
continue;
} else {
var G__33629 = seq__33308_33618;
var G__33630 = chunk__33310_33619;
var G__33631 = count__33311_33620;
var G__33632 = (i__33312_33621 + (1));
seq__33308_33618 = G__33629;
chunk__33310_33619 = G__33630;
count__33311_33620 = G__33631;
i__33312_33621 = G__33632;
continue;
}
} else {
var temp__5753__auto___33634 = cljs.core.seq(seq__33308_33618);
if(temp__5753__auto___33634){
var seq__33308_33635__$1 = temp__5753__auto___33634;
if(cljs.core.chunked_seq_QMARK_(seq__33308_33635__$1)){
var c__4638__auto___33636 = cljs.core.chunk_first(seq__33308_33635__$1);
var G__33637 = cljs.core.chunk_rest(seq__33308_33635__$1);
var G__33638 = c__4638__auto___33636;
var G__33639 = cljs.core.count(c__4638__auto___33636);
var G__33640 = (0);
seq__33308_33618 = G__33637;
chunk__33310_33619 = G__33638;
count__33311_33620 = G__33639;
i__33312_33621 = G__33640;
continue;
} else {
var child_33641 = cljs.core.first(seq__33308_33635__$1);
if(cljs.core.truth_(child_33641)){
node.appendChild(child_33641);


var G__33642 = cljs.core.next(seq__33308_33635__$1);
var G__33643 = null;
var G__33644 = (0);
var G__33645 = (0);
seq__33308_33618 = G__33642;
chunk__33310_33619 = G__33643;
count__33311_33620 = G__33644;
i__33312_33621 = G__33645;
continue;
} else {
var G__33646 = cljs.core.next(seq__33308_33635__$1);
var G__33647 = null;
var G__33648 = (0);
var G__33649 = (0);
seq__33308_33618 = G__33646;
chunk__33310_33619 = G__33647;
count__33311_33620 = G__33648;
i__33312_33621 = G__33649;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33617);
}
}


var G__33650 = seq__33290_33611;
var G__33651 = chunk__33292_33612;
var G__33652 = count__33293_33613;
var G__33653 = (i__33294_33614 + (1));
seq__33290_33611 = G__33650;
chunk__33292_33612 = G__33651;
count__33293_33613 = G__33652;
i__33294_33614 = G__33653;
continue;
} else {
var G__33654 = seq__33290_33611;
var G__33655 = chunk__33292_33612;
var G__33656 = count__33293_33613;
var G__33657 = (i__33294_33614 + (1));
seq__33290_33611 = G__33654;
chunk__33292_33612 = G__33655;
count__33293_33613 = G__33656;
i__33294_33614 = G__33657;
continue;
}
} else {
var temp__5753__auto___33658 = cljs.core.seq(seq__33290_33611);
if(temp__5753__auto___33658){
var seq__33290_33659__$1 = temp__5753__auto___33658;
if(cljs.core.chunked_seq_QMARK_(seq__33290_33659__$1)){
var c__4638__auto___33660 = cljs.core.chunk_first(seq__33290_33659__$1);
var G__33661 = cljs.core.chunk_rest(seq__33290_33659__$1);
var G__33662 = c__4638__auto___33660;
var G__33663 = cljs.core.count(c__4638__auto___33660);
var G__33664 = (0);
seq__33290_33611 = G__33661;
chunk__33292_33612 = G__33662;
count__33293_33613 = G__33663;
i__33294_33614 = G__33664;
continue;
} else {
var child_struct_33665 = cljs.core.first(seq__33290_33659__$1);
if((!((child_struct_33665 == null)))){
if(typeof child_struct_33665 === 'string'){
var text_33666 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33666),child_struct_33665].join(''));
} else {
var children_33667 = shadow.dom.svg_node(child_struct_33665);
if(cljs.core.seq_QMARK_(children_33667)){
var seq__33314_33668 = cljs.core.seq(children_33667);
var chunk__33316_33669 = null;
var count__33317_33670 = (0);
var i__33318_33671 = (0);
while(true){
if((i__33318_33671 < count__33317_33670)){
var child_33672 = chunk__33316_33669.cljs$core$IIndexed$_nth$arity$2(null,i__33318_33671);
if(cljs.core.truth_(child_33672)){
node.appendChild(child_33672);


var G__33673 = seq__33314_33668;
var G__33674 = chunk__33316_33669;
var G__33675 = count__33317_33670;
var G__33676 = (i__33318_33671 + (1));
seq__33314_33668 = G__33673;
chunk__33316_33669 = G__33674;
count__33317_33670 = G__33675;
i__33318_33671 = G__33676;
continue;
} else {
var G__33677 = seq__33314_33668;
var G__33678 = chunk__33316_33669;
var G__33679 = count__33317_33670;
var G__33680 = (i__33318_33671 + (1));
seq__33314_33668 = G__33677;
chunk__33316_33669 = G__33678;
count__33317_33670 = G__33679;
i__33318_33671 = G__33680;
continue;
}
} else {
var temp__5753__auto___33681__$1 = cljs.core.seq(seq__33314_33668);
if(temp__5753__auto___33681__$1){
var seq__33314_33682__$1 = temp__5753__auto___33681__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33314_33682__$1)){
var c__4638__auto___33683 = cljs.core.chunk_first(seq__33314_33682__$1);
var G__33684 = cljs.core.chunk_rest(seq__33314_33682__$1);
var G__33685 = c__4638__auto___33683;
var G__33686 = cljs.core.count(c__4638__auto___33683);
var G__33687 = (0);
seq__33314_33668 = G__33684;
chunk__33316_33669 = G__33685;
count__33317_33670 = G__33686;
i__33318_33671 = G__33687;
continue;
} else {
var child_33688 = cljs.core.first(seq__33314_33682__$1);
if(cljs.core.truth_(child_33688)){
node.appendChild(child_33688);


var G__33689 = cljs.core.next(seq__33314_33682__$1);
var G__33690 = null;
var G__33691 = (0);
var G__33692 = (0);
seq__33314_33668 = G__33689;
chunk__33316_33669 = G__33690;
count__33317_33670 = G__33691;
i__33318_33671 = G__33692;
continue;
} else {
var G__33693 = cljs.core.next(seq__33314_33682__$1);
var G__33694 = null;
var G__33695 = (0);
var G__33696 = (0);
seq__33314_33668 = G__33693;
chunk__33316_33669 = G__33694;
count__33317_33670 = G__33695;
i__33318_33671 = G__33696;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33667);
}
}


var G__33697 = cljs.core.next(seq__33290_33659__$1);
var G__33698 = null;
var G__33699 = (0);
var G__33700 = (0);
seq__33290_33611 = G__33697;
chunk__33292_33612 = G__33698;
count__33293_33613 = G__33699;
i__33294_33614 = G__33700;
continue;
} else {
var G__33701 = cljs.core.next(seq__33290_33659__$1);
var G__33702 = null;
var G__33703 = (0);
var G__33704 = (0);
seq__33290_33611 = G__33701;
chunk__33292_33612 = G__33702;
count__33293_33613 = G__33703;
i__33294_33614 = G__33704;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33709 = arguments.length;
var i__4819__auto___33710 = (0);
while(true){
if((i__4819__auto___33710 < len__4818__auto___33709)){
args__4824__auto__.push((arguments[i__4819__auto___33710]));

var G__33711 = (i__4819__auto___33710 + (1));
i__4819__auto___33710 = G__33711;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33320){
var G__33321 = cljs.core.first(seq33320);
var seq33320__$1 = cljs.core.next(seq33320);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33321,seq33320__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33323 = arguments.length;
switch (G__33323) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__30660__auto___33717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_33328){
var state_val_33329 = (state_33328[(1)]);
if((state_val_33329 === (1))){
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33328__$1,(2),once_or_cleanup);
} else {
if((state_val_33329 === (2))){
var inst_33325 = (state_33328[(2)]);
var inst_33326 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33328__$1 = (function (){var statearr_33330 = state_33328;
(statearr_33330[(7)] = inst_33325);

return statearr_33330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33328__$1,inst_33326);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30509__auto__ = null;
var shadow$dom$state_machine__30509__auto____0 = (function (){
var statearr_33331 = [null,null,null,null,null,null,null,null];
(statearr_33331[(0)] = shadow$dom$state_machine__30509__auto__);

(statearr_33331[(1)] = (1));

return statearr_33331;
});
var shadow$dom$state_machine__30509__auto____1 = (function (state_33328){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_33328);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e33332){var ex__30512__auto__ = e33332;
var statearr_33333_33721 = state_33328;
(statearr_33333_33721[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_33328[(4)]))){
var statearr_33334_33722 = state_33328;
(statearr_33334_33722[(1)] = cljs.core.first((state_33328[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33723 = state_33328;
state_33328 = G__33723;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
shadow$dom$state_machine__30509__auto__ = function(state_33328){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30509__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30509__auto____1.call(this,state_33328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30509__auto____0;
shadow$dom$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30509__auto____1;
return shadow$dom$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_33335 = f__30661__auto__();
(statearr_33335[(6)] = c__30660__auto___33717);

return statearr_33335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
