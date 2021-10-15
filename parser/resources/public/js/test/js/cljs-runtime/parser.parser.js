goog.provide('parser.parser');
parser.parser.str__GT_number = (function parser$parser$str__GT_number(str){
var n = cljs.core.re_matches(/\d+/,str);
if(cljs.core.truth_(n)){
return parseInt(n,(10));
} else {
return null;
}
});
parser.parser.stack = (function parser$parser$stack(var_args){
var G__26399 = arguments.length;
switch (G__26399) {
case 0:
return parser.parser.stack.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return parser.parser.stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(parser.parser.stack.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(parser.parser.stack.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
}));

(parser.parser.stack.cljs$lang$maxFixedArity = 1);

parser.parser.not_sym = "n";
parser.parser.and_sym = "a";
parser.parser.or_sym = "o";
parser.parser.implies_sym = "i";
parser.parser.precedence = (new cljs.core.List(null,"(",(new cljs.core.List(null,parser.parser.implies_sym,(new cljs.core.List(null,parser.parser.or_sym,(new cljs.core.List(null,parser.parser.and_sym,(new cljs.core.List(null,parser.parser.not_sym,(new cljs.core.List(null,")",null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null));
parser.parser.prec = (function parser$parser$prec(sym){
return parser.parser.precedence.indexOf(sym);
});
parser.parser.op_reduce = (function parser$parser$op_reduce(operators,operands,input){
if((parser.parser.prec(cljs.core.peek(operators)) >= parser.parser.prec(input))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(operators),parser.parser.not_sym)){
var G__26400 = cljs.core.pop(operators);
var G__26401 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(operands),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)));
var G__26402 = input;
return (parser.parser.op_reduce.cljs$core$IFn$_invoke$arity$3 ? parser.parser.op_reduce.cljs$core$IFn$_invoke$arity$3(G__26400,G__26401,G__26402) : parser.parser.op_reduce.call(null,G__26400,G__26401,G__26402));
} else {
var G__26403 = cljs.core.pop(operators);
var G__26404 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)),(3),null)));
var G__26405 = input;
return (parser.parser.op_reduce.cljs$core$IFn$_invoke$arity$3 ? parser.parser.op_reduce.cljs$core$IFn$_invoke$arity$3(G__26403,G__26404,G__26405) : parser.parser.op_reduce.call(null,G__26403,G__26404,G__26405));
}
} else {
return (new cljs.core.List(null,operators,(new cljs.core.List(null,operands,null,(1),null)),(2),null));
}
});
parser.parser.par_reduce = (function parser$parser$par_reduce(operators,operands,input){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(operators),"(")){
return (new cljs.core.List(null,cljs.core.pop(operators),(new cljs.core.List(null,operands,null,(1),null)),(2),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(operators),parser.parser.not_sym)){
var G__26406 = cljs.core.pop(operators);
var G__26407 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(operands),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)));
var G__26408 = input;
return (parser.parser.par_reduce.cljs$core$IFn$_invoke$arity$3 ? parser.parser.par_reduce.cljs$core$IFn$_invoke$arity$3(G__26406,G__26407,G__26408) : parser.parser.par_reduce.call(null,G__26406,G__26407,G__26408));
} else {
var G__26409 = cljs.core.pop(operators);
var G__26410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)),(3),null)));
var G__26411 = input;
return (parser.parser.par_reduce.cljs$core$IFn$_invoke$arity$3 ? parser.parser.par_reduce.cljs$core$IFn$_invoke$arity$3(G__26409,G__26410,G__26411) : parser.parser.par_reduce.call(null,G__26409,G__26410,G__26411));
}
}
});
parser.parser.end_reduce = (function parser$parser$end_reduce(operators,operands){
if(cljs.core.empty_QMARK_(operators)){
return cljs.core.first(operands);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(operators),parser.parser.not_sym)){
var G__26412 = cljs.core.pop(operators);
var G__26413 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(operands),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)));
return (parser.parser.end_reduce.cljs$core$IFn$_invoke$arity$2 ? parser.parser.end_reduce.cljs$core$IFn$_invoke$arity$2(G__26412,G__26413) : parser.parser.end_reduce.call(null,G__26412,G__26413));
} else {
var G__26414 = cljs.core.pop(operators);
var G__26415 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)),(3),null)));
return (parser.parser.end_reduce.cljs$core$IFn$_invoke$arity$2 ? parser.parser.end_reduce.cljs$core$IFn$_invoke$arity$2(G__26414,G__26415) : parser.parser.end_reduce.call(null,G__26414,G__26415));
}
}
});
parser.parser.parse = (function parser$parser$parse(tokens){
var token = cljs.core.first(tokens);
var operators = parser.parser.stack.cljs$core$IFn$_invoke$arity$0();
var operands = parser.parser.stack.cljs$core$IFn$_invoke$arity$0();
var resttok = cljs.core.rest(tokens);
while(true){
if(cljs.core.truth_(token)){
var t = parser.parser.str__GT_number(token);
if(cljs.core.truth_(t)){
var G__26418 = cljs.core.first(resttok);
var G__26419 = operators;
var G__26420 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(operands,t);
var G__26421 = cljs.core.rest(resttok);
token = G__26418;
operators = G__26419;
operands = G__26420;
resttok = G__26421;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"(")){
var G__26422 = cljs.core.first(resttok);
var G__26423 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(operators,token);
var G__26424 = operands;
var G__26425 = cljs.core.rest(resttok);
token = G__26422;
operators = G__26423;
operands = G__26424;
resttok = G__26425;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,")")){
var pr = parser.parser.par_reduce(operators,operands,token);
var G__26427 = cljs.core.first(resttok);
var G__26428 = cljs.core.first(pr);
var G__26429 = cljs.core.second(pr);
var G__26430 = cljs.core.rest(resttok);
token = G__26427;
operators = G__26428;
operands = G__26429;
resttok = G__26430;
continue;
} else {
var or = parser.parser.op_reduce(operators,operands,token);
var G__26431 = cljs.core.first(resttok);
var G__26432 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.first(or),token);
var G__26433 = cljs.core.second(or);
var G__26434 = cljs.core.rest(resttok);
token = G__26431;
operators = G__26432;
operands = G__26433;
resttok = G__26434;
continue;
}
}
}
} else {
return parser.parser.end_reduce(operators,operands);
}
break;
}
});

//# sourceMappingURL=parser.parser.js.map
