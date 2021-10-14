goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__4611__auto__ = (function shadow$test$env$get_test_vars_$_iter__35889(s__35890){
return (new cljs.core.LazySeq(null,(function (){
var s__35890__$1 = s__35890;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35890__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__35895 = cljs.core.first(xs__6308__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35895,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35895,(1),null);
var iterys__4607__auto__ = ((function (s__35890__$1,vec__35895,ns,ns_info,xs__6308__auto__,temp__5753__auto__){
return (function shadow$test$env$get_test_vars_$_iter__35889_$_iter__35891(s__35892){
return (new cljs.core.LazySeq(null,((function (s__35890__$1,vec__35895,ns,ns_info,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__35892__$1 = s__35892;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35892__$1);
if(temp__5753__auto____$1){
var s__35892__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35892__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35892__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35894 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35893 = (0);
while(true){
if((i__35893 < size__4610__auto__)){
var var$ = cljs.core._nth(c__4609__auto__,i__35893);
cljs.core.chunk_append(b__35894,var$);

var G__35917 = (i__35893 + (1));
i__35893 = G__35917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35894),shadow$test$env$get_test_vars_$_iter__35889_$_iter__35891(cljs.core.chunk_rest(s__35892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35894),null);
}
} else {
var var$ = cljs.core.first(s__35892__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__35889_$_iter__35891(cljs.core.rest(s__35892__$2)));
}
} else {
return null;
}
break;
}
});})(s__35890__$1,vec__35895,ns,ns_info,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__35890__$1,vec__35895,ns,ns_info,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$test$env$get_test_vars_$_iter__35889(cljs.core.rest(s__35890__$1)));
} else {
var G__35922 = cljs.core.rest(s__35890__$1);
s__35890__$1 = G__35922;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__4611__auto__ = (function shadow$test$env$get_test_count_$_iter__35898(s__35899){
return (new cljs.core.LazySeq(null,(function (){
var s__35899__$1 = s__35899;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35899__$1);
if(temp__5753__auto__){
var s__35899__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35899__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35899__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35901 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35900 = (0);
while(true){
if((i__35900 < size__4610__auto__)){
var map__35902 = cljs.core._nth(c__4609__auto__,i__35900);
var map__35902__$1 = cljs.core.__destructure_map(map__35902);
var test_ns = map__35902__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35902__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__35901,cljs.core.count(vars));

var G__35934 = (i__35900 + (1));
i__35900 = G__35934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35901),shadow$test$env$get_test_count_$_iter__35898(cljs.core.chunk_rest(s__35899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35901),null);
}
} else {
var map__35903 = cljs.core.first(s__35899__$2);
var map__35903__$1 = cljs.core.__destructure_map(map__35903);
var test_ns = map__35903__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35903__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__35898(cljs.core.rest(s__35899__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
