goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35974 = arguments.length;
var i__4819__auto___35975 = (0);
while(true){
if((i__4819__auto___35975 < len__4818__auto___35974)){
args__4824__auto__.push((arguments[i__4819__auto___35975]));

var G__35976 = (i__4819__auto___35975 + (1));
i__4819__auto___35975 = G__35976;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35806){
var G__35807 = cljs.core.first(seq35806);
var seq35806__$1 = cljs.core.next(seq35806);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35807,seq35806__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35808 = cljs.core.seq(sources);
var chunk__35809 = null;
var count__35810 = (0);
var i__35811 = (0);
while(true){
if((i__35811 < count__35810)){
var map__35816 = chunk__35809.cljs$core$IIndexed$_nth$arity$2(null,i__35811);
var map__35816__$1 = cljs.core.__destructure_map(map__35816);
var src = map__35816__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35816__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35817){var e_35977 = e35817;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35977);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35977.message)].join('')));
}

var G__35978 = seq__35808;
var G__35979 = chunk__35809;
var G__35980 = count__35810;
var G__35981 = (i__35811 + (1));
seq__35808 = G__35978;
chunk__35809 = G__35979;
count__35810 = G__35980;
i__35811 = G__35981;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35808);
if(temp__5753__auto__){
var seq__35808__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35808__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35808__$1);
var G__35982 = cljs.core.chunk_rest(seq__35808__$1);
var G__35983 = c__4638__auto__;
var G__35984 = cljs.core.count(c__4638__auto__);
var G__35985 = (0);
seq__35808 = G__35982;
chunk__35809 = G__35983;
count__35810 = G__35984;
i__35811 = G__35985;
continue;
} else {
var map__35818 = cljs.core.first(seq__35808__$1);
var map__35818__$1 = cljs.core.__destructure_map(map__35818);
var src = map__35818__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35818__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35819){var e_35986 = e35819;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35986);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35986.message)].join('')));
}

var G__35987 = cljs.core.next(seq__35808__$1);
var G__35988 = null;
var G__35989 = (0);
var G__35990 = (0);
seq__35808 = G__35987;
chunk__35809 = G__35988;
count__35810 = G__35989;
i__35811 = G__35990;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35820 = cljs.core.seq(js_requires);
var chunk__35821 = null;
var count__35822 = (0);
var i__35823 = (0);
while(true){
if((i__35823 < count__35822)){
var js_ns = chunk__35821.cljs$core$IIndexed$_nth$arity$2(null,i__35823);
var require_str_35991 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35991);


var G__35992 = seq__35820;
var G__35993 = chunk__35821;
var G__35994 = count__35822;
var G__35995 = (i__35823 + (1));
seq__35820 = G__35992;
chunk__35821 = G__35993;
count__35822 = G__35994;
i__35823 = G__35995;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35820);
if(temp__5753__auto__){
var seq__35820__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35820__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35820__$1);
var G__35996 = cljs.core.chunk_rest(seq__35820__$1);
var G__35997 = c__4638__auto__;
var G__35998 = cljs.core.count(c__4638__auto__);
var G__35999 = (0);
seq__35820 = G__35996;
chunk__35821 = G__35997;
count__35822 = G__35998;
i__35823 = G__35999;
continue;
} else {
var js_ns = cljs.core.first(seq__35820__$1);
var require_str_36000 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36000);


var G__36001 = cljs.core.next(seq__35820__$1);
var G__36002 = null;
var G__36003 = (0);
var G__36004 = (0);
seq__35820 = G__36001;
chunk__35821 = G__36002;
count__35822 = G__36003;
i__35823 = G__36004;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35825){
var map__35826 = p__35825;
var map__35826__$1 = cljs.core.__destructure_map(map__35826);
var msg = map__35826__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35826__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35826__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35829(s__35830){
return (new cljs.core.LazySeq(null,(function (){
var s__35830__$1 = s__35830;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35830__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35838 = cljs.core.first(xs__6308__auto__);
var map__35838__$1 = cljs.core.__destructure_map(map__35838);
var src = map__35838__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35838__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__35830__$1,map__35838,map__35838__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35826,map__35826__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35829_$_iter__35831(s__35832){
return (new cljs.core.LazySeq(null,((function (s__35830__$1,map__35838,map__35838__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35826,map__35826__$1,msg,info,reload_info){
return (function (){
var s__35832__$1 = s__35832;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35832__$1);
if(temp__5753__auto____$1){
var s__35832__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35832__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35832__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35834 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35833 = (0);
while(true){
if((i__35833 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__35833);
cljs.core.chunk_append(b__35834,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36005 = (i__35833 + (1));
i__35833 = G__36005;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35834),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35829_$_iter__35831(cljs.core.chunk_rest(s__35832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35834),null);
}
} else {
var warning = cljs.core.first(s__35832__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35829_$_iter__35831(cljs.core.rest(s__35832__$2)));
}
} else {
return null;
}
break;
}
});})(s__35830__$1,map__35838,map__35838__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35826,map__35826__$1,msg,info,reload_info))
,null,null));
});})(s__35830__$1,map__35838,map__35838__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35826,map__35826__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35829(cljs.core.rest(s__35830__$1)));
} else {
var G__36006 = cljs.core.rest(s__35830__$1);
s__35830__$1 = G__36006;
continue;
}
} else {
var G__36007 = cljs.core.rest(s__35830__$1);
s__35830__$1 = G__36007;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35843_36008 = cljs.core.seq(warnings);
var chunk__35844_36009 = null;
var count__35845_36010 = (0);
var i__35846_36011 = (0);
while(true){
if((i__35846_36011 < count__35845_36010)){
var map__35855_36012 = chunk__35844_36009.cljs$core$IIndexed$_nth$arity$2(null,i__35846_36011);
var map__35855_36013__$1 = cljs.core.__destructure_map(map__35855_36012);
var w_36014 = map__35855_36013__$1;
var msg_36015__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855_36013__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855_36013__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855_36013__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35855_36013__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36018)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36016),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36017),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36015__$1)].join(''));


var G__36019 = seq__35843_36008;
var G__36020 = chunk__35844_36009;
var G__36021 = count__35845_36010;
var G__36022 = (i__35846_36011 + (1));
seq__35843_36008 = G__36019;
chunk__35844_36009 = G__36020;
count__35845_36010 = G__36021;
i__35846_36011 = G__36022;
continue;
} else {
var temp__5753__auto___36023 = cljs.core.seq(seq__35843_36008);
if(temp__5753__auto___36023){
var seq__35843_36024__$1 = temp__5753__auto___36023;
if(cljs.core.chunked_seq_QMARK_(seq__35843_36024__$1)){
var c__4638__auto___36025 = cljs.core.chunk_first(seq__35843_36024__$1);
var G__36026 = cljs.core.chunk_rest(seq__35843_36024__$1);
var G__36027 = c__4638__auto___36025;
var G__36028 = cljs.core.count(c__4638__auto___36025);
var G__36029 = (0);
seq__35843_36008 = G__36026;
chunk__35844_36009 = G__36027;
count__35845_36010 = G__36028;
i__35846_36011 = G__36029;
continue;
} else {
var map__35862_36030 = cljs.core.first(seq__35843_36024__$1);
var map__35862_36031__$1 = cljs.core.__destructure_map(map__35862_36030);
var w_36032 = map__35862_36031__$1;
var msg_36033__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862_36031__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862_36031__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862_36031__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35862_36031__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36036)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36034),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36035),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36033__$1)].join(''));


var G__36037 = cljs.core.next(seq__35843_36024__$1);
var G__36038 = null;
var G__36039 = (0);
var G__36040 = (0);
seq__35843_36008 = G__36037;
chunk__35844_36009 = G__36038;
count__35845_36010 = G__36039;
i__35846_36011 = G__36040;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35824_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35824_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35870){
var map__35871 = p__35870;
var map__35871__$1 = cljs.core.__destructure_map(map__35871);
var msg = map__35871__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35871__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35872 = cljs.core.seq(updates);
var chunk__35874 = null;
var count__35875 = (0);
var i__35876 = (0);
while(true){
if((i__35876 < count__35875)){
var path = chunk__35874.cljs$core$IIndexed$_nth$arity$2(null,i__35876);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35923_36041 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35927_36042 = null;
var count__35928_36043 = (0);
var i__35929_36044 = (0);
while(true){
if((i__35929_36044 < count__35928_36043)){
var node_36045 = chunk__35927_36042.cljs$core$IIndexed$_nth$arity$2(null,i__35929_36044);
if(cljs.core.not(node_36045.shadow$old)){
var path_match_36046 = shadow.cljs.devtools.client.browser.match_paths(node_36045.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36046)){
var new_link_36047 = (function (){var G__35936 = node_36045.cloneNode(true);
G__35936.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36046),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35936;
})();
(node_36045.shadow$old = true);

(new_link_36047.onload = ((function (seq__35923_36041,chunk__35927_36042,count__35928_36043,i__35929_36044,seq__35872,chunk__35874,count__35875,i__35876,new_link_36047,path_match_36046,node_36045,path,map__35871,map__35871__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36045);
});})(seq__35923_36041,chunk__35927_36042,count__35928_36043,i__35929_36044,seq__35872,chunk__35874,count__35875,i__35876,new_link_36047,path_match_36046,node_36045,path,map__35871,map__35871__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36046], 0));

goog.dom.insertSiblingAfter(new_link_36047,node_36045);


var G__36048 = seq__35923_36041;
var G__36049 = chunk__35927_36042;
var G__36050 = count__35928_36043;
var G__36051 = (i__35929_36044 + (1));
seq__35923_36041 = G__36048;
chunk__35927_36042 = G__36049;
count__35928_36043 = G__36050;
i__35929_36044 = G__36051;
continue;
} else {
var G__36052 = seq__35923_36041;
var G__36053 = chunk__35927_36042;
var G__36054 = count__35928_36043;
var G__36055 = (i__35929_36044 + (1));
seq__35923_36041 = G__36052;
chunk__35927_36042 = G__36053;
count__35928_36043 = G__36054;
i__35929_36044 = G__36055;
continue;
}
} else {
var G__36056 = seq__35923_36041;
var G__36057 = chunk__35927_36042;
var G__36058 = count__35928_36043;
var G__36059 = (i__35929_36044 + (1));
seq__35923_36041 = G__36056;
chunk__35927_36042 = G__36057;
count__35928_36043 = G__36058;
i__35929_36044 = G__36059;
continue;
}
} else {
var temp__5753__auto___36060 = cljs.core.seq(seq__35923_36041);
if(temp__5753__auto___36060){
var seq__35923_36061__$1 = temp__5753__auto___36060;
if(cljs.core.chunked_seq_QMARK_(seq__35923_36061__$1)){
var c__4638__auto___36062 = cljs.core.chunk_first(seq__35923_36061__$1);
var G__36063 = cljs.core.chunk_rest(seq__35923_36061__$1);
var G__36064 = c__4638__auto___36062;
var G__36065 = cljs.core.count(c__4638__auto___36062);
var G__36066 = (0);
seq__35923_36041 = G__36063;
chunk__35927_36042 = G__36064;
count__35928_36043 = G__36065;
i__35929_36044 = G__36066;
continue;
} else {
var node_36067 = cljs.core.first(seq__35923_36061__$1);
if(cljs.core.not(node_36067.shadow$old)){
var path_match_36068 = shadow.cljs.devtools.client.browser.match_paths(node_36067.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36068)){
var new_link_36069 = (function (){var G__35937 = node_36067.cloneNode(true);
G__35937.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36068),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35937;
})();
(node_36067.shadow$old = true);

(new_link_36069.onload = ((function (seq__35923_36041,chunk__35927_36042,count__35928_36043,i__35929_36044,seq__35872,chunk__35874,count__35875,i__35876,new_link_36069,path_match_36068,node_36067,seq__35923_36061__$1,temp__5753__auto___36060,path,map__35871,map__35871__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36067);
});})(seq__35923_36041,chunk__35927_36042,count__35928_36043,i__35929_36044,seq__35872,chunk__35874,count__35875,i__35876,new_link_36069,path_match_36068,node_36067,seq__35923_36061__$1,temp__5753__auto___36060,path,map__35871,map__35871__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36068], 0));

goog.dom.insertSiblingAfter(new_link_36069,node_36067);


var G__36070 = cljs.core.next(seq__35923_36061__$1);
var G__36071 = null;
var G__36072 = (0);
var G__36073 = (0);
seq__35923_36041 = G__36070;
chunk__35927_36042 = G__36071;
count__35928_36043 = G__36072;
i__35929_36044 = G__36073;
continue;
} else {
var G__36074 = cljs.core.next(seq__35923_36061__$1);
var G__36075 = null;
var G__36076 = (0);
var G__36077 = (0);
seq__35923_36041 = G__36074;
chunk__35927_36042 = G__36075;
count__35928_36043 = G__36076;
i__35929_36044 = G__36077;
continue;
}
} else {
var G__36078 = cljs.core.next(seq__35923_36061__$1);
var G__36079 = null;
var G__36080 = (0);
var G__36081 = (0);
seq__35923_36041 = G__36078;
chunk__35927_36042 = G__36079;
count__35928_36043 = G__36080;
i__35929_36044 = G__36081;
continue;
}
}
} else {
}
}
break;
}


var G__36082 = seq__35872;
var G__36083 = chunk__35874;
var G__36084 = count__35875;
var G__36085 = (i__35876 + (1));
seq__35872 = G__36082;
chunk__35874 = G__36083;
count__35875 = G__36084;
i__35876 = G__36085;
continue;
} else {
var G__36086 = seq__35872;
var G__36087 = chunk__35874;
var G__36088 = count__35875;
var G__36089 = (i__35876 + (1));
seq__35872 = G__36086;
chunk__35874 = G__36087;
count__35875 = G__36088;
i__35876 = G__36089;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35872);
if(temp__5753__auto__){
var seq__35872__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35872__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35872__$1);
var G__36090 = cljs.core.chunk_rest(seq__35872__$1);
var G__36091 = c__4638__auto__;
var G__36092 = cljs.core.count(c__4638__auto__);
var G__36093 = (0);
seq__35872 = G__36090;
chunk__35874 = G__36091;
count__35875 = G__36092;
i__35876 = G__36093;
continue;
} else {
var path = cljs.core.first(seq__35872__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35938_36094 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35942_36095 = null;
var count__35943_36096 = (0);
var i__35944_36097 = (0);
while(true){
if((i__35944_36097 < count__35943_36096)){
var node_36098 = chunk__35942_36095.cljs$core$IIndexed$_nth$arity$2(null,i__35944_36097);
if(cljs.core.not(node_36098.shadow$old)){
var path_match_36099 = shadow.cljs.devtools.client.browser.match_paths(node_36098.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36099)){
var new_link_36100 = (function (){var G__35950 = node_36098.cloneNode(true);
G__35950.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36099),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35950;
})();
(node_36098.shadow$old = true);

(new_link_36100.onload = ((function (seq__35938_36094,chunk__35942_36095,count__35943_36096,i__35944_36097,seq__35872,chunk__35874,count__35875,i__35876,new_link_36100,path_match_36099,node_36098,path,seq__35872__$1,temp__5753__auto__,map__35871,map__35871__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36098);
});})(seq__35938_36094,chunk__35942_36095,count__35943_36096,i__35944_36097,seq__35872,chunk__35874,count__35875,i__35876,new_link_36100,path_match_36099,node_36098,path,seq__35872__$1,temp__5753__auto__,map__35871,map__35871__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36099], 0));

goog.dom.insertSiblingAfter(new_link_36100,node_36098);


var G__36101 = seq__35938_36094;
var G__36102 = chunk__35942_36095;
var G__36103 = count__35943_36096;
var G__36104 = (i__35944_36097 + (1));
seq__35938_36094 = G__36101;
chunk__35942_36095 = G__36102;
count__35943_36096 = G__36103;
i__35944_36097 = G__36104;
continue;
} else {
var G__36105 = seq__35938_36094;
var G__36106 = chunk__35942_36095;
var G__36107 = count__35943_36096;
var G__36108 = (i__35944_36097 + (1));
seq__35938_36094 = G__36105;
chunk__35942_36095 = G__36106;
count__35943_36096 = G__36107;
i__35944_36097 = G__36108;
continue;
}
} else {
var G__36109 = seq__35938_36094;
var G__36110 = chunk__35942_36095;
var G__36111 = count__35943_36096;
var G__36112 = (i__35944_36097 + (1));
seq__35938_36094 = G__36109;
chunk__35942_36095 = G__36110;
count__35943_36096 = G__36111;
i__35944_36097 = G__36112;
continue;
}
} else {
var temp__5753__auto___36113__$1 = cljs.core.seq(seq__35938_36094);
if(temp__5753__auto___36113__$1){
var seq__35938_36114__$1 = temp__5753__auto___36113__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35938_36114__$1)){
var c__4638__auto___36115 = cljs.core.chunk_first(seq__35938_36114__$1);
var G__36116 = cljs.core.chunk_rest(seq__35938_36114__$1);
var G__36117 = c__4638__auto___36115;
var G__36118 = cljs.core.count(c__4638__auto___36115);
var G__36119 = (0);
seq__35938_36094 = G__36116;
chunk__35942_36095 = G__36117;
count__35943_36096 = G__36118;
i__35944_36097 = G__36119;
continue;
} else {
var node_36120 = cljs.core.first(seq__35938_36114__$1);
if(cljs.core.not(node_36120.shadow$old)){
var path_match_36121 = shadow.cljs.devtools.client.browser.match_paths(node_36120.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36121)){
var new_link_36122 = (function (){var G__35951 = node_36120.cloneNode(true);
G__35951.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36121),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35951;
})();
(node_36120.shadow$old = true);

(new_link_36122.onload = ((function (seq__35938_36094,chunk__35942_36095,count__35943_36096,i__35944_36097,seq__35872,chunk__35874,count__35875,i__35876,new_link_36122,path_match_36121,node_36120,seq__35938_36114__$1,temp__5753__auto___36113__$1,path,seq__35872__$1,temp__5753__auto__,map__35871,map__35871__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36120);
});})(seq__35938_36094,chunk__35942_36095,count__35943_36096,i__35944_36097,seq__35872,chunk__35874,count__35875,i__35876,new_link_36122,path_match_36121,node_36120,seq__35938_36114__$1,temp__5753__auto___36113__$1,path,seq__35872__$1,temp__5753__auto__,map__35871,map__35871__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36121], 0));

goog.dom.insertSiblingAfter(new_link_36122,node_36120);


var G__36123 = cljs.core.next(seq__35938_36114__$1);
var G__36124 = null;
var G__36125 = (0);
var G__36126 = (0);
seq__35938_36094 = G__36123;
chunk__35942_36095 = G__36124;
count__35943_36096 = G__36125;
i__35944_36097 = G__36126;
continue;
} else {
var G__36127 = cljs.core.next(seq__35938_36114__$1);
var G__36128 = null;
var G__36129 = (0);
var G__36130 = (0);
seq__35938_36094 = G__36127;
chunk__35942_36095 = G__36128;
count__35943_36096 = G__36129;
i__35944_36097 = G__36130;
continue;
}
} else {
var G__36131 = cljs.core.next(seq__35938_36114__$1);
var G__36132 = null;
var G__36133 = (0);
var G__36134 = (0);
seq__35938_36094 = G__36131;
chunk__35942_36095 = G__36132;
count__35943_36096 = G__36133;
i__35944_36097 = G__36134;
continue;
}
}
} else {
}
}
break;
}


var G__36135 = cljs.core.next(seq__35872__$1);
var G__36136 = null;
var G__36137 = (0);
var G__36138 = (0);
seq__35872 = G__36135;
chunk__35874 = G__36136;
count__35875 = G__36137;
i__35876 = G__36138;
continue;
} else {
var G__36139 = cljs.core.next(seq__35872__$1);
var G__36140 = null;
var G__36141 = (0);
var G__36142 = (0);
seq__35872 = G__36139;
chunk__35874 = G__36140;
count__35875 = G__36141;
i__35876 = G__36142;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35952){
var map__35953 = p__35952;
var map__35953__$1 = cljs.core.__destructure_map(map__35953);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35953__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35954){
var map__35955 = p__35954;
var map__35955__$1 = cljs.core.__destructure_map(map__35955);
var _ = map__35955__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35955__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35956,done,error){
var map__35957 = p__35956;
var map__35957__$1 = cljs.core.__destructure_map(map__35957);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35957__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35958,done,error){
var map__35959 = p__35958;
var map__35959__$1 = cljs.core.__destructure_map(map__35959);
var msg = map__35959__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35959__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35959__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35959__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35960){
var map__35961 = p__35960;
var map__35961__$1 = cljs.core.__destructure_map(map__35961);
var src = map__35961__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35961__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35962 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35962) : done.call(null,G__35962));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35963){
var map__35964 = p__35963;
var map__35964__$1 = cljs.core.__destructure_map(map__35964);
var msg__$1 = map__35964__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35964__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35965){var ex = e35965;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35966){
var map__35967 = p__35966;
var map__35967__$1 = cljs.core.__destructure_map(map__35967);
var env = map__35967__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35967__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35968){
var map__35969 = p__35968;
var map__35969__$1 = cljs.core.__destructure_map(map__35969);
var msg = map__35969__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35969__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35970){
var map__35971 = p__35970;
var map__35971__$1 = cljs.core.__destructure_map(map__35971);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35971__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35971__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35972){
var map__35973 = p__35972;
var map__35973__$1 = cljs.core.__destructure_map(map__35973);
var svc = map__35973__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35973__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
