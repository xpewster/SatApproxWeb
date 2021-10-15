goog.provide('parser.parser_test');
parser.parser_test.ex1 = (new cljs.core.List(null,"1",(new cljs.core.List(null,parser.parser.and_sym,(new cljs.core.List(null,"2",null,(1),null)),(2),null)),(3),null));
parser.parser_test.ex2 = (new cljs.core.List(null,"1",(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,"2",(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,"3",null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
parser.parser_test.ex3 = (new cljs.core.List(null,parser.parser.not_sym,(new cljs.core.List(null,"1",(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,"2",(new cljs.core.List(null,parser.parser.and_sym,(new cljs.core.List(null,parser.parser.not_sym,(new cljs.core.List(null,"3",(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,"4",null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null));
parser.parser_test.ex4 = (new cljs.core.List(null,"(",(new cljs.core.List(null,"1",(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,"2",(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,"3",(new cljs.core.List(null,")",(new cljs.core.List(null,parser.parser.and_sym,(new cljs.core.List(null,"5",null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null));
parser.parser_test.tests = (function parser$parser_test$tests(){
return cljs.test.test_var(parser.parser_test.tests.cljs$lang$var);
});
parser.parser_test.tests.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Parser"], 0));

try{cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["parse1"], 0));

try{try{var values__9153__auto___26402 = (new cljs.core.List(null,(new cljs.core.List(null,parser.parser.and_sym,(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,parser.parser.parse(parser.parser_test.ex1),null,(1),null)),(2),null));
var result__9154__auto___26403 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9153__auto___26402);
if(cljs.core.truth_(result__9154__auto___26403)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",45,new cljs.core.Keyword(null,"pass","pass",1574159993),11,13,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"and-sym","and-sym",-8914053,null),(1),(2)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex1","ex1",-37648953,null))),13,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___26402),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",45,new cljs.core.Keyword(null,"fail","fail",1706214930),11,13,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"and-sym","and-sym",-8914053,null),(1),(2)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex1","ex1",-37648953,null))),13,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___26402),null,(1),null)),(2),null)),null]));
}

}catch (e26398){var t__9190__auto___26404 = e26398;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",45,new cljs.core.Keyword(null,"error","error",-978969032),11,13,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"and-sym","and-sym",-8914053,null),(1),(2)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex1","ex1",-37648953,null))),13,t__9190__auto___26404,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["parse2"], 0));

try{try{var values__9153__auto___26405 = (new cljs.core.List(null,(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(3),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,parser.parser.parse(parser.parser_test.ex2),null,(1),null)),(2),null));
var result__9154__auto___26406 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9153__auto___26405);
if(cljs.core.truth_(result__9154__auto___26406)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",60,new cljs.core.Keyword(null,"pass","pass",1574159993),11,15,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),(1),(2)),(3)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex2","ex2",-1188148104,null))),15,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___26405),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",60,new cljs.core.Keyword(null,"fail","fail",1706214930),11,15,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),(1),(2)),(3)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex2","ex2",-1188148104,null))),15,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___26405),null,(1),null)),(2),null)),null]));
}

}catch (e26399){var t__9190__auto___26407 = e26399;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",60,new cljs.core.Keyword(null,"error","error",-978969032),11,15,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),(1),(2)),(3)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex2","ex2",-1188148104,null))),15,t__9190__auto___26407,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["parse3"], 0));

try{try{var values__9153__auto___26408 = (new cljs.core.List(null,(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,(new cljs.core.List(null,parser.parser.not_sym,(new cljs.core.List(null,(1),null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,parser.parser.and_sym,(new cljs.core.List(null,(2),(new cljs.core.List(null,(new cljs.core.List(null,parser.parser.not_sym,(new cljs.core.List(null,(3),null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null)),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(4),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,parser.parser.parse(parser.parser_test.ex3),null,(1),null)),(2),null));
var result__9154__auto___26409 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9153__auto___26408);
if(cljs.core.truth_(result__9154__auto___26409)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",107,new cljs.core.Keyword(null,"pass","pass",1574159993),11,17,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"not-sym","not-sym",1429174890,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"and-sym","and-sym",-8914053,null),(2),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"not-sym","not-sym",1429174890,null),(3)))),(4)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex3","ex3",331343522,null))),17,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___26408),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",107,new cljs.core.Keyword(null,"fail","fail",1706214930),11,17,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"not-sym","not-sym",1429174890,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"and-sym","and-sym",-8914053,null),(2),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"not-sym","not-sym",1429174890,null),(3)))),(4)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex3","ex3",331343522,null))),17,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto___26408),null,(1),null)),(2),null)),null]));
}

}catch (e26400){var t__9190__auto___26410 = e26400;
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",107,new cljs.core.Keyword(null,"error","error",-978969032),11,17,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"not-sym","not-sym",1429174890,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"and-sym","and-sym",-8914053,null),(2),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"not-sym","not-sym",1429174890,null),(3)))),(4)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex3","ex3",331343522,null))),17,t__9190__auto___26410,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["parse4"], 0));

try{try{var values__9153__auto__ = (new cljs.core.List(null,(new cljs.core.List(null,parser.parser.and_sym,(new cljs.core.List(null,(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,(1),(new cljs.core.List(null,(2),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(3),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,(5),null,(1),null)),(2),null)),(3),null)),(new cljs.core.List(null,parser.parser.parse(parser.parser_test.ex4),null,(1),null)),(2),null));
var result__9154__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__9153__auto__);
if(cljs.core.truth_(result__9154__auto__)){
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",78,new cljs.core.Keyword(null,"pass","pass",1574159993),12,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"and-sym","and-sym",-8914053,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),(1),(2)),(3)),(5)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex4","ex4",-217705834,null))),19,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto__),null]));
} else {
cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",78,new cljs.core.Keyword(null,"fail","fail",1706214930),12,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"and-sym","and-sym",-8914053,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),(1),(2)),(3)),(5)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex4","ex4",-217705834,null))),19,(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9153__auto__),null,(1),null)),(2),null)),null]));
}

return result__9154__auto__;
}catch (e26401){var t__9190__auto__ = e26401;
return cljs.test.report.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)],["parser/parser_test.cljs",78,new cljs.core.Keyword(null,"error","error",-978969032),12,19,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"and-sym","and-sym",-8914053,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),cljs.core.list(new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"or-sym","or-sym",-1051480176,null),(1),(2)),(3)),(5)),cljs.core.list(new cljs.core.Symbol(null,"parse","parse",478366908,null),new cljs.core.Symbol(null,"ex4","ex4",-217705834,null))),19,t__9190__auto__,null]));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

(parser.parser_test.tests.cljs$lang$var = new cljs.core.Var(function(){return parser.parser_test.tests;},new cljs.core.Symbol("parser.parser-test","tests","parser.parser-test/tests",21394367,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"parser.parser-test","parser.parser-test",-707885450,null),new cljs.core.Symbol(null,"tests","tests",599445902,null),"parser/parser_test.cljs",15,1,10,10,cljs.core.List.EMPTY,null,(cljs.core.truth_(parser.parser_test.tests)?parser.parser_test.tests.cljs$lang$test:null)])));

//# sourceMappingURL=parser.parser_test.js.map
