goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34255,res){
var map__34256 = p__34255;
var map__34256__$1 = cljs.core.__destructure_map(map__34256);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34256__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34256__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34257 = res;
var G__34257__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34257,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34257);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34257__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34257__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34259 = arguments.length;
switch (G__34259) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34260,msg,handlers,timeout_after_ms){
var map__34261 = p__34260;
var map__34261__$1 = cljs.core.__destructure_map(map__34261);
var runtime = map__34261__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34261__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34315 = arguments.length;
var i__4819__auto___34316 = (0);
while(true){
if((i__4819__auto___34316 < len__4818__auto___34315)){
args__4824__auto__.push((arguments[i__4819__auto___34316]));

var G__34317 = (i__4819__auto___34316 + (1));
i__4819__auto___34316 = G__34317;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__34265,ev,args){
var map__34266 = p__34265;
var map__34266__$1 = cljs.core.__destructure_map(map__34266);
var runtime = map__34266__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34266__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34267 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34270 = null;
var count__34271 = (0);
var i__34272 = (0);
while(true){
if((i__34272 < count__34271)){
var ext = chunk__34270.cljs$core$IIndexed$_nth$arity$2(null,i__34272);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34318 = seq__34267;
var G__34319 = chunk__34270;
var G__34320 = count__34271;
var G__34321 = (i__34272 + (1));
seq__34267 = G__34318;
chunk__34270 = G__34319;
count__34271 = G__34320;
i__34272 = G__34321;
continue;
} else {
var G__34322 = seq__34267;
var G__34323 = chunk__34270;
var G__34324 = count__34271;
var G__34325 = (i__34272 + (1));
seq__34267 = G__34322;
chunk__34270 = G__34323;
count__34271 = G__34324;
i__34272 = G__34325;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34267);
if(temp__5753__auto__){
var seq__34267__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34267__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34267__$1);
var G__34326 = cljs.core.chunk_rest(seq__34267__$1);
var G__34327 = c__4638__auto__;
var G__34328 = cljs.core.count(c__4638__auto__);
var G__34329 = (0);
seq__34267 = G__34326;
chunk__34270 = G__34327;
count__34271 = G__34328;
i__34272 = G__34329;
continue;
} else {
var ext = cljs.core.first(seq__34267__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34330 = cljs.core.next(seq__34267__$1);
var G__34331 = null;
var G__34332 = (0);
var G__34333 = (0);
seq__34267 = G__34330;
chunk__34270 = G__34331;
count__34271 = G__34332;
i__34272 = G__34333;
continue;
} else {
var G__34334 = cljs.core.next(seq__34267__$1);
var G__34335 = null;
var G__34336 = (0);
var G__34337 = (0);
seq__34267 = G__34334;
chunk__34270 = G__34335;
count__34271 = G__34336;
i__34272 = G__34337;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq34262){
var G__34263 = cljs.core.first(seq34262);
var seq34262__$1 = cljs.core.next(seq34262);
var G__34264 = cljs.core.first(seq34262__$1);
var seq34262__$2 = cljs.core.next(seq34262__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34263,G__34264,seq34262__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34276,p__34277){
var map__34278 = p__34276;
var map__34278__$1 = cljs.core.__destructure_map(map__34278);
var runtime = map__34278__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34278__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34279 = p__34277;
var map__34279__$1 = cljs.core.__destructure_map(map__34279);
var msg = map__34279__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34279__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34280 = cljs.core.deref(state_ref);
var map__34280__$1 = cljs.core.__destructure_map(map__34280);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34280__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34280__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34281){
var map__34282 = p__34281;
var map__34282__$1 = cljs.core.__destructure_map(map__34282);
var runtime = map__34282__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34282__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34283,msg){
var map__34284 = p__34283;
var map__34284__$1 = cljs.core.__destructure_map(map__34284);
var runtime = map__34284__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34284__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34285,key,p__34286){
var map__34287 = p__34285;
var map__34287__$1 = cljs.core.__destructure_map(map__34287);
var state = map__34287__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34287__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34288 = p__34286;
var map__34288__$1 = cljs.core.__destructure_map(map__34288);
var spec = map__34288__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34288__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34289,key,spec){
var map__34290 = p__34289;
var map__34290__$1 = cljs.core.__destructure_map(map__34290);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34290__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34291_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34291_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34292_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34292_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34293_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34293_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34294_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34294_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34295_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34295_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34296,key){
var map__34297 = p__34296;
var map__34297__$1 = cljs.core.__destructure_map(map__34297);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34297__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34298,msg){
var map__34299 = p__34298;
var map__34299__$1 = cljs.core.__destructure_map(map__34299);
var runtime = map__34299__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34299__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34300,p__34301){
var map__34302 = p__34300;
var map__34302__$1 = cljs.core.__destructure_map(map__34302);
var runtime = map__34302__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34302__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34303 = p__34301;
var map__34303__$1 = cljs.core.__destructure_map(map__34303);
var msg = map__34303__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34303__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34303__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34304 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34306 = null;
var count__34307 = (0);
var i__34308 = (0);
while(true){
if((i__34308 < count__34307)){
var map__34312 = chunk__34306.cljs$core$IIndexed$_nth$arity$2(null,i__34308);
var map__34312__$1 = cljs.core.__destructure_map(map__34312);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34312__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34338 = seq__34304;
var G__34339 = chunk__34306;
var G__34340 = count__34307;
var G__34341 = (i__34308 + (1));
seq__34304 = G__34338;
chunk__34306 = G__34339;
count__34307 = G__34340;
i__34308 = G__34341;
continue;
} else {
var G__34342 = seq__34304;
var G__34343 = chunk__34306;
var G__34344 = count__34307;
var G__34345 = (i__34308 + (1));
seq__34304 = G__34342;
chunk__34306 = G__34343;
count__34307 = G__34344;
i__34308 = G__34345;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34304);
if(temp__5753__auto__){
var seq__34304__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34304__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34304__$1);
var G__34346 = cljs.core.chunk_rest(seq__34304__$1);
var G__34347 = c__4638__auto__;
var G__34348 = cljs.core.count(c__4638__auto__);
var G__34349 = (0);
seq__34304 = G__34346;
chunk__34306 = G__34347;
count__34307 = G__34348;
i__34308 = G__34349;
continue;
} else {
var map__34313 = cljs.core.first(seq__34304__$1);
var map__34313__$1 = cljs.core.__destructure_map(map__34313);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34313__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34350 = cljs.core.next(seq__34304__$1);
var G__34351 = null;
var G__34352 = (0);
var G__34353 = (0);
seq__34304 = G__34350;
chunk__34306 = G__34351;
count__34307 = G__34352;
i__34308 = G__34353;
continue;
} else {
var G__34354 = cljs.core.next(seq__34304__$1);
var G__34355 = null;
var G__34356 = (0);
var G__34357 = (0);
seq__34304 = G__34354;
chunk__34306 = G__34355;
count__34307 = G__34356;
i__34308 = G__34357;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
