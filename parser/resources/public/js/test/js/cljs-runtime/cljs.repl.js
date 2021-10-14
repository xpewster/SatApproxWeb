goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35122){
var map__35123 = p__35122;
var map__35123__$1 = cljs.core.__destructure_map(map__35123);
var m = map__35123__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35123__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35123__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35124_35325 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35125_35326 = null;
var count__35126_35327 = (0);
var i__35127_35328 = (0);
while(true){
if((i__35127_35328 < count__35126_35327)){
var f_35329 = chunk__35125_35326.cljs$core$IIndexed$_nth$arity$2(null,i__35127_35328);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35329], 0));


var G__35330 = seq__35124_35325;
var G__35331 = chunk__35125_35326;
var G__35332 = count__35126_35327;
var G__35333 = (i__35127_35328 + (1));
seq__35124_35325 = G__35330;
chunk__35125_35326 = G__35331;
count__35126_35327 = G__35332;
i__35127_35328 = G__35333;
continue;
} else {
var temp__5753__auto___35334 = cljs.core.seq(seq__35124_35325);
if(temp__5753__auto___35334){
var seq__35124_35335__$1 = temp__5753__auto___35334;
if(cljs.core.chunked_seq_QMARK_(seq__35124_35335__$1)){
var c__4638__auto___35336 = cljs.core.chunk_first(seq__35124_35335__$1);
var G__35337 = cljs.core.chunk_rest(seq__35124_35335__$1);
var G__35338 = c__4638__auto___35336;
var G__35339 = cljs.core.count(c__4638__auto___35336);
var G__35340 = (0);
seq__35124_35325 = G__35337;
chunk__35125_35326 = G__35338;
count__35126_35327 = G__35339;
i__35127_35328 = G__35340;
continue;
} else {
var f_35341 = cljs.core.first(seq__35124_35335__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35341], 0));


var G__35342 = cljs.core.next(seq__35124_35335__$1);
var G__35343 = null;
var G__35344 = (0);
var G__35345 = (0);
seq__35124_35325 = G__35342;
chunk__35125_35326 = G__35343;
count__35126_35327 = G__35344;
i__35127_35328 = G__35345;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35346 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35346], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35346)))?cljs.core.second(arglists_35346):arglists_35346)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35128_35347 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35129_35348 = null;
var count__35130_35349 = (0);
var i__35131_35350 = (0);
while(true){
if((i__35131_35350 < count__35130_35349)){
var vec__35140_35351 = chunk__35129_35348.cljs$core$IIndexed$_nth$arity$2(null,i__35131_35350);
var name_35352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35351,(0),null);
var map__35143_35353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140_35351,(1),null);
var map__35143_35354__$1 = cljs.core.__destructure_map(map__35143_35353);
var doc_35355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35143_35354__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35143_35354__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35352], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35356], 0));

if(cljs.core.truth_(doc_35355)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35355], 0));
} else {
}


var G__35357 = seq__35128_35347;
var G__35358 = chunk__35129_35348;
var G__35359 = count__35130_35349;
var G__35360 = (i__35131_35350 + (1));
seq__35128_35347 = G__35357;
chunk__35129_35348 = G__35358;
count__35130_35349 = G__35359;
i__35131_35350 = G__35360;
continue;
} else {
var temp__5753__auto___35361 = cljs.core.seq(seq__35128_35347);
if(temp__5753__auto___35361){
var seq__35128_35362__$1 = temp__5753__auto___35361;
if(cljs.core.chunked_seq_QMARK_(seq__35128_35362__$1)){
var c__4638__auto___35363 = cljs.core.chunk_first(seq__35128_35362__$1);
var G__35364 = cljs.core.chunk_rest(seq__35128_35362__$1);
var G__35365 = c__4638__auto___35363;
var G__35366 = cljs.core.count(c__4638__auto___35363);
var G__35367 = (0);
seq__35128_35347 = G__35364;
chunk__35129_35348 = G__35365;
count__35130_35349 = G__35366;
i__35131_35350 = G__35367;
continue;
} else {
var vec__35144_35368 = cljs.core.first(seq__35128_35362__$1);
var name_35369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35144_35368,(0),null);
var map__35147_35370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35144_35368,(1),null);
var map__35147_35371__$1 = cljs.core.__destructure_map(map__35147_35370);
var doc_35372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35147_35371__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35147_35371__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35369], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35373], 0));

if(cljs.core.truth_(doc_35372)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35372], 0));
} else {
}


var G__35374 = cljs.core.next(seq__35128_35362__$1);
var G__35375 = null;
var G__35376 = (0);
var G__35377 = (0);
seq__35128_35347 = G__35374;
chunk__35129_35348 = G__35375;
count__35130_35349 = G__35376;
i__35131_35350 = G__35377;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35148 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35149 = null;
var count__35150 = (0);
var i__35151 = (0);
while(true){
if((i__35151 < count__35150)){
var role = chunk__35149.cljs$core$IIndexed$_nth$arity$2(null,i__35151);
var temp__5753__auto___35378__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35378__$1)){
var spec_35391 = temp__5753__auto___35378__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35391)], 0));
} else {
}


var G__35392 = seq__35148;
var G__35393 = chunk__35149;
var G__35394 = count__35150;
var G__35395 = (i__35151 + (1));
seq__35148 = G__35392;
chunk__35149 = G__35393;
count__35150 = G__35394;
i__35151 = G__35395;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35148);
if(temp__5753__auto____$1){
var seq__35148__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35148__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35148__$1);
var G__35396 = cljs.core.chunk_rest(seq__35148__$1);
var G__35397 = c__4638__auto__;
var G__35398 = cljs.core.count(c__4638__auto__);
var G__35399 = (0);
seq__35148 = G__35396;
chunk__35149 = G__35397;
count__35150 = G__35398;
i__35151 = G__35399;
continue;
} else {
var role = cljs.core.first(seq__35148__$1);
var temp__5753__auto___35400__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35400__$2)){
var spec_35401 = temp__5753__auto___35400__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35401)], 0));
} else {
}


var G__35402 = cljs.core.next(seq__35148__$1);
var G__35403 = null;
var G__35404 = (0);
var G__35405 = (0);
seq__35148 = G__35402;
chunk__35149 = G__35403;
count__35150 = G__35404;
i__35151 = G__35405;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35411 = cljs.core.ex_cause(t);
via = G__35410;
t = G__35411;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35155 = datafied_throwable;
var map__35155__$1 = cljs.core.__destructure_map(map__35155);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35155__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35155__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35155__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35156 = cljs.core.last(via);
var map__35156__$1 = cljs.core.__destructure_map(map__35156);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35157 = data;
var map__35157__$1 = cljs.core.__destructure_map(map__35157);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35157__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35157__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35157__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35158 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35158__$1 = cljs.core.__destructure_map(map__35158);
var top_data = map__35158__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35158__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35159 = phase;
var G__35159__$1 = (((G__35159 instanceof cljs.core.Keyword))?G__35159.fqn:null);
switch (G__35159__$1) {
case "read-source":
var map__35160 = data;
var map__35160__$1 = cljs.core.__destructure_map(map__35160);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35160__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35160__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35161 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35161__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35161,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35161);
var G__35161__$2 = (cljs.core.truth_((function (){var fexpr__35162 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35162.cljs$core$IFn$_invoke$arity$1 ? fexpr__35162.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35162.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35161__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35161__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35161__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35161__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35163 = top_data;
var G__35163__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35163,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35163);
var G__35163__$2 = (cljs.core.truth_((function (){var fexpr__35170 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35170.cljs$core$IFn$_invoke$arity$1 ? fexpr__35170.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35170.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35163__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35163__$1);
var G__35163__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35163__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35163__$2);
var G__35163__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35163__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35163__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35163__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35163__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35171 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35171,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35171,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35171,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35171,(3),null);
var G__35174 = top_data;
var G__35174__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35174,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35174);
var G__35174__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35174__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35174__$1);
var G__35174__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35174__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35174__$2);
var G__35174__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35174__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35174__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35174__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35174__$4;
}

break;
case "execution":
var vec__35175 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35175,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35175,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35175,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35175,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35154_SHARP_){
var or__4212__auto__ = (p1__35154_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__35178 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35178.cljs$core$IFn$_invoke$arity$1 ? fexpr__35178.cljs$core$IFn$_invoke$arity$1(p1__35154_SHARP_) : fexpr__35178.call(null,p1__35154_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__35179 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35179__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35179,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35179);
var G__35179__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35179__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35179__$1);
var G__35179__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35179__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35179__$2);
var G__35179__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35179__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35179__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35179__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35179__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35159__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35204){
var map__35205 = p__35204;
var map__35205__$1 = cljs.core.__destructure_map(map__35205);
var triage_data = map__35205__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35205__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35206 = phase;
var G__35206__$1 = (((G__35206 instanceof cljs.core.Keyword))?G__35206.fqn:null);
switch (G__35206__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35207 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35208 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35209 = loc;
var G__35210 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35211_35422 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35212_35423 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35213_35424 = true;
var _STAR_print_fn_STAR__temp_val__35214_35425 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35213_35424);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35214_35425);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35202_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35202_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35212_35423);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35211_35422);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35207,G__35208,G__35209,G__35210) : format.call(null,G__35207,G__35208,G__35209,G__35210));

break;
case "macroexpansion":
var G__35289 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35290 = cause_type;
var G__35291 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35292 = loc;
var G__35293 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35289,G__35290,G__35291,G__35292,G__35293) : format.call(null,G__35289,G__35290,G__35291,G__35292,G__35293));

break;
case "compile-syntax-check":
var G__35294 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35295 = cause_type;
var G__35296 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35297 = loc;
var G__35298 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35294,G__35295,G__35296,G__35297,G__35298) : format.call(null,G__35294,G__35295,G__35296,G__35297,G__35298));

break;
case "compilation":
var G__35299 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35300 = cause_type;
var G__35301 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35302 = loc;
var G__35303 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35299,G__35300,G__35301,G__35302,G__35303) : format.call(null,G__35299,G__35300,G__35301,G__35302,G__35303));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35304 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35305 = symbol;
var G__35306 = loc;
var G__35307 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35308_35426 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35309_35427 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35310_35428 = true;
var _STAR_print_fn_STAR__temp_val__35311_35429 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35310_35428);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35311_35429);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35203_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35203_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35309_35427);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35308_35426);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35304,G__35305,G__35306,G__35307) : format.call(null,G__35304,G__35305,G__35306,G__35307));
} else {
var G__35312 = "Execution error%s at %s(%s).\n%s\n";
var G__35313 = cause_type;
var G__35314 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35315 = loc;
var G__35316 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35312,G__35313,G__35314,G__35315,G__35316) : format.call(null,G__35312,G__35313,G__35314,G__35315,G__35316));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35206__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
