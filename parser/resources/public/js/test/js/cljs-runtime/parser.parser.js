goog.provide('parser.parser');
parser.parser.str__GT_number = (function parser$parser$str__GT_number(str){
var n = parseInt(str);
if(typeof n === 'number'){
return n;
} else {
return null;
}
});
parser.parser.stack = (function parser$parser$stack(var_args){
var G__26392 = arguments.length;
switch (G__26392) {
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
var G__26404 = cljs.core.pop(operators);
var G__26405 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(operands),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)));
var G__26406 = input;
return (parser.parser.op_reduce.cljs$core$IFn$_invoke$arity$3 ? parser.parser.op_reduce.cljs$core$IFn$_invoke$arity$3(G__26404,G__26405,G__26406) : parser.parser.op_reduce.call(null,G__26404,G__26405,G__26406));
} else {
var G__26407 = cljs.core.pop(operators);
var G__26408 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)),(3),null)));
var G__26409 = input;
return (parser.parser.op_reduce.cljs$core$IFn$_invoke$arity$3 ? parser.parser.op_reduce.cljs$core$IFn$_invoke$arity$3(G__26407,G__26408,G__26409) : parser.parser.op_reduce.call(null,G__26407,G__26408,G__26409));
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
var G__26411 = cljs.core.pop(operators);
var G__26412 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(operands),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)));
var G__26413 = input;
return (parser.parser.par_reduce.cljs$core$IFn$_invoke$arity$3 ? parser.parser.par_reduce.cljs$core$IFn$_invoke$arity$3(G__26411,G__26412,G__26413) : parser.parser.par_reduce.call(null,G__26411,G__26412,G__26413));
} else {
var G__26414 = cljs.core.pop(operators);
var G__26415 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)),(3),null)));
var G__26416 = input;
return (parser.parser.par_reduce.cljs$core$IFn$_invoke$arity$3 ? parser.parser.par_reduce.cljs$core$IFn$_invoke$arity$3(G__26414,G__26415,G__26416) : parser.parser.par_reduce.call(null,G__26414,G__26415,G__26416));
}
}
});
parser.parser.end_reduce = (function parser$parser$end_reduce(operators,operands){
if(cljs.core.empty_QMARK_(operators)){
return cljs.core.first(operands);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(operators),parser.parser.not_sym)){
var G__26418 = cljs.core.pop(operators);
var G__26419 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(operands),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)));
return (parser.parser.end_reduce.cljs$core$IFn$_invoke$arity$2 ? parser.parser.end_reduce.cljs$core$IFn$_invoke$arity$2(G__26418,G__26419) : parser.parser.end_reduce.call(null,G__26418,G__26419));
} else {
var G__26420 = cljs.core.pop(operators);
var G__26421 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operators),(new cljs.core.List(null,cljs.core.last(cljs.core.pop(operands)),(new cljs.core.List(null,cljs.core.last(operands),null,(1),null)),(2),null)),(3),null)));
return (parser.parser.end_reduce.cljs$core$IFn$_invoke$arity$2 ? parser.parser.end_reduce.cljs$core$IFn$_invoke$arity$2(G__26420,G__26421) : parser.parser.end_reduce.call(null,G__26420,G__26421));
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
var G__26490 = cljs.core.first(resttok);
var G__26491 = operators;
var G__26492 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(operands,t);
var G__26493 = cljs.core.rest(resttok);
token = G__26490;
operators = G__26491;
operands = G__26492;
resttok = G__26493;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,"(")){
var G__26494 = cljs.core.first(resttok);
var G__26495 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(operators,token);
var G__26496 = operands;
var G__26497 = cljs.core.rest(resttok);
token = G__26494;
operators = G__26495;
operands = G__26496;
resttok = G__26497;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token,")")){
var pr = parser.parser.par_reduce(operators,operands,token);
var G__26498 = cljs.core.first(resttok);
var G__26499 = cljs.core.first(pr);
var G__26500 = cljs.core.second(pr);
var G__26501 = cljs.core.rest(resttok);
token = G__26498;
operators = G__26499;
operands = G__26500;
resttok = G__26501;
continue;
} else {
var or = parser.parser.op_reduce(operators,operands,token);
var G__26503 = cljs.core.first(resttok);
var G__26504 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.first(or),token);
var G__26505 = cljs.core.second(or);
var G__26506 = cljs.core.rest(resttok);
token = G__26503;
operators = G__26504;
operands = G__26505;
resttok = G__26506;
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
