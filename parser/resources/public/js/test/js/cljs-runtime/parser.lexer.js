goog.provide('parser.lexer');
parser.lexer.seqify = (function parser$lexer$seqify(str){
return cljs.core.re_seq(/[\d]+|\D/,str);
});
parser.lexer.remove_whitespace = (function parser$lexer$remove_whitespace(chars){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x," ");
}),chars);
});
parser.lexer.tokenize = (function parser$lexer$tokenize(str){
return parser.lexer.remove_whitespace(parser.lexer.seqify(str));
});

//# sourceMappingURL=parser.lexer.js.map
