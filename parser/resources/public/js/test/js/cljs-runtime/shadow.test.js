goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__26385){
var vec__26386 = p__26385;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26386,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26386,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__26391 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__26391__$1 = (((G__26391 instanceof cljs.core.Keyword))?G__26391.fqn:null);
switch (G__26391__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__26394 = (function (){
var seq__26398 = cljs.core.seq(vars__$1);
var chunk__26399 = null;
var count__26400 = (0);
var i__26401 = (0);
while(true){
if((i__26401 < count__26400)){
var v = chunk__26399.cljs$core$IIndexed$_nth$arity$2(null,i__26401);
var temp__5753__auto___26542 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5753__auto___26542)){
var t_26543 = temp__5753__auto___26542;
var G__26441_26544 = ((function (seq__26398,chunk__26399,count__26400,i__26401,t_26543,temp__5753__auto___26542,v,each_fixture_fn,G__26391,G__26391__$1,env,once_fixtures,each_fixtures,vec__26386,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_26543)));
});})(seq__26398,chunk__26399,count__26400,i__26401,t_26543,temp__5753__auto___26542,v,each_fixture_fn,G__26391,G__26391__$1,env,once_fixtures,each_fixtures,vec__26386,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__26441_26544) : each_fixture_fn.call(null,G__26441_26544));
} else {
}


var G__26545 = seq__26398;
var G__26546 = chunk__26399;
var G__26547 = count__26400;
var G__26548 = (i__26401 + (1));
seq__26398 = G__26545;
chunk__26399 = G__26546;
count__26400 = G__26547;
i__26401 = G__26548;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26398);
if(temp__5753__auto__){
var seq__26398__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26398__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__26398__$1);
var G__26549 = cljs.core.chunk_rest(seq__26398__$1);
var G__26550 = c__4638__auto__;
var G__26551 = cljs.core.count(c__4638__auto__);
var G__26552 = (0);
seq__26398 = G__26549;
chunk__26399 = G__26550;
count__26400 = G__26551;
i__26401 = G__26552;
continue;
} else {
var v = cljs.core.first(seq__26398__$1);
var temp__5753__auto___26553__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5753__auto___26553__$1)){
var t_26554 = temp__5753__auto___26553__$1;
var G__26442_26555 = ((function (seq__26398,chunk__26399,count__26400,i__26401,t_26554,temp__5753__auto___26553__$1,v,seq__26398__$1,temp__5753__auto__,each_fixture_fn,G__26391,G__26391__$1,env,once_fixtures,each_fixtures,vec__26386,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_26554)));
});})(seq__26398,chunk__26399,count__26400,i__26401,t_26554,temp__5753__auto___26553__$1,v,seq__26398__$1,temp__5753__auto__,each_fixture_fn,G__26391,G__26391__$1,env,once_fixtures,each_fixtures,vec__26386,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__26442_26555) : each_fixture_fn.call(null,G__26442_26555));
} else {
}


var G__26558 = cljs.core.next(seq__26398__$1);
var G__26559 = null;
var G__26560 = (0);
var G__26561 = (0);
seq__26398 = G__26558;
chunk__26399 = G__26559;
count__26400 = G__26560;
i__26401 = G__26561;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__26393 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__26393.cljs$core$IFn$_invoke$arity$1 ? fexpr__26393.cljs$core$IFn$_invoke$arity$1(G__26394) : fexpr__26393.call(null,G__26394));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26391__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__26383_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__26383_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__26446 = shadow.test.env.get_test_ns_info(ns);
var map__26446__$1 = cljs.core.__destructure_map(map__26446);
var test_ns = map__26446__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26446__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__26448,vars){
var map__26449 = p__26448;
var map__26449__$1 = cljs.core.__destructure_map(map__26449);
var env = map__26449__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26449__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__26450_26562 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__26452_26563 = null;
var count__26453_26564 = (0);
var i__26454_26565 = (0);
while(true){
if((i__26454_26565 < count__26453_26564)){
var vec__26476_26566 = chunk__26452_26563.cljs$core$IIndexed$_nth$arity$2(null,i__26454_26565);
var test_ns_26567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26476_26566,(0),null);
var ns_info_26568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26476_26566,(1),null);
var map__26479_26569 = ns_info_26568;
var map__26479_26570__$1 = cljs.core.__destructure_map(map__26479_26569);
var fixtures_26571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26479_26570__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5753__auto___26572 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_26571);
if(cljs.core.truth_(temp__5753__auto___26572)){
var fix_26573 = temp__5753__auto___26572;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_26567,fix_26573], 0));
} else {
}

var temp__5753__auto___26574 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_26571);
if(cljs.core.truth_(temp__5753__auto___26574)){
var fix_26575 = temp__5753__auto___26574;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_26567,fix_26575], 0));
} else {
}


var G__26576 = seq__26450_26562;
var G__26577 = chunk__26452_26563;
var G__26578 = count__26453_26564;
var G__26579 = (i__26454_26565 + (1));
seq__26450_26562 = G__26576;
chunk__26452_26563 = G__26577;
count__26453_26564 = G__26578;
i__26454_26565 = G__26579;
continue;
} else {
var temp__5753__auto___26580 = cljs.core.seq(seq__26450_26562);
if(temp__5753__auto___26580){
var seq__26450_26582__$1 = temp__5753__auto___26580;
if(cljs.core.chunked_seq_QMARK_(seq__26450_26582__$1)){
var c__4638__auto___26584 = cljs.core.chunk_first(seq__26450_26582__$1);
var G__26585 = cljs.core.chunk_rest(seq__26450_26582__$1);
var G__26586 = c__4638__auto___26584;
var G__26587 = cljs.core.count(c__4638__auto___26584);
var G__26588 = (0);
seq__26450_26562 = G__26585;
chunk__26452_26563 = G__26586;
count__26453_26564 = G__26587;
i__26454_26565 = G__26588;
continue;
} else {
var vec__26480_26589 = cljs.core.first(seq__26450_26582__$1);
var test_ns_26590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26480_26589,(0),null);
var ns_info_26591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26480_26589,(1),null);
var map__26483_26592 = ns_info_26591;
var map__26483_26593__$1 = cljs.core.__destructure_map(map__26483_26592);
var fixtures_26594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26483_26593__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5753__auto___26595__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_26594);
if(cljs.core.truth_(temp__5753__auto___26595__$1)){
var fix_26596 = temp__5753__auto___26595__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_26590,fix_26596], 0));
} else {
}

var temp__5753__auto___26597__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_26594);
if(cljs.core.truth_(temp__5753__auto___26597__$1)){
var fix_26598 = temp__5753__auto___26597__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_26590,fix_26598], 0));
} else {
}


var G__26599 = cljs.core.next(seq__26450_26582__$1);
var G__26600 = null;
var G__26601 = (0);
var G__26602 = (0);
seq__26450_26562 = G__26599;
chunk__26452_26563 = G__26600;
count__26453_26564 = G__26601;
i__26454_26565 = G__26602;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26447_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__26447_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__26484 = cljs.test.get_current_env();
var map__26484__$1 = cljs.core.__destructure_map(map__26484);
var env = map__26484__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26484__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26484__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__26486 = arguments.length;
switch (G__26486) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__26488 = arguments.length;
switch (G__26488) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__26522 = shadow.test.env.get_test_ns_info(ns);
var map__26522__$1 = cljs.core.__destructure_map(map__26522);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26522__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__26525 = arguments.length;
switch (G__26525) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26523_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__26523_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__26530 = arguments.length;
switch (G__26530) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26528_SHARP_){
var or__4212__auto__ = (re == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26528_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
