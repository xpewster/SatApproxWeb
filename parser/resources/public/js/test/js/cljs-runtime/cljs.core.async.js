goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30924 = arguments.length;
switch (G__30924) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30929 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30929 = (function (f,blockable,meta30930){
this.f = f;
this.blockable = blockable;
this.meta30930 = meta30930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30931,meta30930__$1){
var self__ = this;
var _30931__$1 = this;
return (new cljs.core.async.t_cljs$core$async30929(self__.f,self__.blockable,meta30930__$1));
}));

(cljs.core.async.t_cljs$core$async30929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30931){
var self__ = this;
var _30931__$1 = this;
return self__.meta30930;
}));

(cljs.core.async.t_cljs$core$async30929.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30929.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30930","meta30930",-747880979,null)], null);
}));

(cljs.core.async.t_cljs$core$async30929.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30929");

(cljs.core.async.t_cljs$core$async30929.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30929");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30929.
 */
cljs.core.async.__GT_t_cljs$core$async30929 = (function cljs$core$async$__GT_t_cljs$core$async30929(f__$1,blockable__$1,meta30930){
return (new cljs.core.async.t_cljs$core$async30929(f__$1,blockable__$1,meta30930));
});

}

return (new cljs.core.async.t_cljs$core$async30929(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30951 = arguments.length;
switch (G__30951) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30953 = arguments.length;
switch (G__30953) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30955 = arguments.length;
switch (G__30955) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32466 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32466) : fn1.call(null,val_32466));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32466) : fn1.call(null,val_32466));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30961 = arguments.length;
switch (G__30961) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___32484 = n;
var x_32485 = (0);
while(true){
if((x_32485 < n__4695__auto___32484)){
(a[x_32485] = x_32485);

var G__32487 = (x_32485 + (1));
x_32485 = G__32487;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30962 = (function (flag,meta30963){
this.flag = flag;
this.meta30963 = meta30963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30964,meta30963__$1){
var self__ = this;
var _30964__$1 = this;
return (new cljs.core.async.t_cljs$core$async30962(self__.flag,meta30963__$1));
}));

(cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30964){
var self__ = this;
var _30964__$1 = this;
return self__.meta30963;
}));

(cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30963","meta30963",-2121388688,null)], null);
}));

(cljs.core.async.t_cljs$core$async30962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30962");

(cljs.core.async.t_cljs$core$async30962.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30962.
 */
cljs.core.async.__GT_t_cljs$core$async30962 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30962(flag__$1,meta30963){
return (new cljs.core.async.t_cljs$core$async30962(flag__$1,meta30963));
});

}

return (new cljs.core.async.t_cljs$core$async30962(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30983 = (function (flag,cb,meta30984){
this.flag = flag;
this.cb = cb;
this.meta30984 = meta30984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30985,meta30984__$1){
var self__ = this;
var _30985__$1 = this;
return (new cljs.core.async.t_cljs$core$async30983(self__.flag,self__.cb,meta30984__$1));
}));

(cljs.core.async.t_cljs$core$async30983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30985){
var self__ = this;
var _30985__$1 = this;
return self__.meta30984;
}));

(cljs.core.async.t_cljs$core$async30983.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30983.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30984","meta30984",2093670432,null)], null);
}));

(cljs.core.async.t_cljs$core$async30983.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30983");

(cljs.core.async.t_cljs$core$async30983.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30983");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30983.
 */
cljs.core.async.__GT_t_cljs$core$async30983 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30983(flag__$1,cb__$1,meta30984){
return (new cljs.core.async.t_cljs$core$async30983(flag__$1,cb__$1,meta30984));
});

}

return (new cljs.core.async.t_cljs$core$async30983(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30986_SHARP_){
var G__30988 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30986_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30988) : fret.call(null,G__30988));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30987_SHARP_){
var G__30989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30987_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30989) : fret.call(null,G__30989));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32498 = (i + (1));
i = G__32498;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32499 = arguments.length;
var i__4819__auto___32500 = (0);
while(true){
if((i__4819__auto___32500 < len__4818__auto___32499)){
args__4824__auto__.push((arguments[i__4819__auto___32500]));

var G__32501 = (i__4819__auto___32500 + (1));
i__4819__auto___32500 = G__32501;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30992){
var map__30993 = p__30992;
var map__30993__$1 = cljs.core.__destructure_map(map__30993);
var opts = map__30993__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30990){
var G__30991 = cljs.core.first(seq30990);
var seq30990__$1 = cljs.core.next(seq30990);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30991,seq30990__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30995 = arguments.length;
switch (G__30995) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30660__auto___32503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31019){
var state_val_31020 = (state_31019[(1)]);
if((state_val_31020 === (7))){
var inst_31015 = (state_31019[(2)]);
var state_31019__$1 = state_31019;
var statearr_31021_32504 = state_31019__$1;
(statearr_31021_32504[(2)] = inst_31015);

(statearr_31021_32504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (1))){
var state_31019__$1 = state_31019;
var statearr_31022_32505 = state_31019__$1;
(statearr_31022_32505[(2)] = null);

(statearr_31022_32505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (4))){
var inst_30998 = (state_31019[(7)]);
var inst_30998__$1 = (state_31019[(2)]);
var inst_30999 = (inst_30998__$1 == null);
var state_31019__$1 = (function (){var statearr_31023 = state_31019;
(statearr_31023[(7)] = inst_30998__$1);

return statearr_31023;
})();
if(cljs.core.truth_(inst_30999)){
var statearr_31024_32510 = state_31019__$1;
(statearr_31024_32510[(1)] = (5));

} else {
var statearr_31025_32511 = state_31019__$1;
(statearr_31025_32511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (13))){
var state_31019__$1 = state_31019;
var statearr_31026_32512 = state_31019__$1;
(statearr_31026_32512[(2)] = null);

(statearr_31026_32512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (6))){
var inst_30998 = (state_31019[(7)]);
var state_31019__$1 = state_31019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31019__$1,(11),to,inst_30998);
} else {
if((state_val_31020 === (3))){
var inst_31017 = (state_31019[(2)]);
var state_31019__$1 = state_31019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31019__$1,inst_31017);
} else {
if((state_val_31020 === (12))){
var state_31019__$1 = state_31019;
var statearr_31027_32513 = state_31019__$1;
(statearr_31027_32513[(2)] = null);

(statearr_31027_32513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (2))){
var state_31019__$1 = state_31019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31019__$1,(4),from);
} else {
if((state_val_31020 === (11))){
var inst_31008 = (state_31019[(2)]);
var state_31019__$1 = state_31019;
if(cljs.core.truth_(inst_31008)){
var statearr_31028_32514 = state_31019__$1;
(statearr_31028_32514[(1)] = (12));

} else {
var statearr_31029_32515 = state_31019__$1;
(statearr_31029_32515[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (9))){
var state_31019__$1 = state_31019;
var statearr_31030_32516 = state_31019__$1;
(statearr_31030_32516[(2)] = null);

(statearr_31030_32516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (5))){
var state_31019__$1 = state_31019;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31031_32517 = state_31019__$1;
(statearr_31031_32517[(1)] = (8));

} else {
var statearr_31032_32518 = state_31019__$1;
(statearr_31032_32518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (14))){
var inst_31013 = (state_31019[(2)]);
var state_31019__$1 = state_31019;
var statearr_31033_32519 = state_31019__$1;
(statearr_31033_32519[(2)] = inst_31013);

(statearr_31033_32519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (10))){
var inst_31005 = (state_31019[(2)]);
var state_31019__$1 = state_31019;
var statearr_31034_32520 = state_31019__$1;
(statearr_31034_32520[(2)] = inst_31005);

(statearr_31034_32520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31020 === (8))){
var inst_31002 = cljs.core.async.close_BANG_(to);
var state_31019__$1 = state_31019;
var statearr_31035_32521 = state_31019__$1;
(statearr_31035_32521[(2)] = inst_31002);

(statearr_31035_32521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_31036 = [null,null,null,null,null,null,null,null];
(statearr_31036[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_31036[(1)] = (1));

return statearr_31036;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_31019){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31019);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31037){var ex__30512__auto__ = e31037;
var statearr_31038_32522 = state_31019;
(statearr_31038_32522[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31019[(4)]))){
var statearr_31039_32523 = state_31019;
(statearr_31039_32523[(1)] = cljs.core.first((state_31019[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32524 = state_31019;
state_31019 = G__32524;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_31019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_31019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31040 = f__30661__auto__();
(statearr_31040[(6)] = c__30660__auto___32503);

return statearr_31040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__31041){
var vec__31042 = p__31041;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31042,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31042,(1),null);
var job = vec__31042;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30660__auto___32525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31049){
var state_val_31050 = (state_31049[(1)]);
if((state_val_31050 === (1))){
var state_31049__$1 = state_31049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31049__$1,(2),res,v);
} else {
if((state_val_31050 === (2))){
var inst_31046 = (state_31049[(2)]);
var inst_31047 = cljs.core.async.close_BANG_(res);
var state_31049__$1 = (function (){var statearr_31051 = state_31049;
(statearr_31051[(7)] = inst_31046);

return statearr_31051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31049__$1,inst_31047);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0 = (function (){
var statearr_31052 = [null,null,null,null,null,null,null,null];
(statearr_31052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__);

(statearr_31052[(1)] = (1));

return statearr_31052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1 = (function (state_31049){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31049);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31053){var ex__30512__auto__ = e31053;
var statearr_31054_32526 = state_31049;
(statearr_31054_32526[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31049[(4)]))){
var statearr_31055_32527 = state_31049;
(statearr_31055_32527[(1)] = cljs.core.first((state_31049[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32528 = state_31049;
state_31049 = G__32528;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__ = function(state_31049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1.call(this,state_31049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31056 = f__30661__auto__();
(statearr_31056[(6)] = c__30660__auto___32525);

return statearr_31056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31057){
var vec__31058 = p__31057;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31058,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31058,(1),null);
var job = vec__31058;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___32529 = n;
var __32530 = (0);
while(true){
if((__32530 < n__4695__auto___32529)){
var G__31061_32531 = type;
var G__31061_32532__$1 = (((G__31061_32531 instanceof cljs.core.Keyword))?G__31061_32531.fqn:null);
switch (G__31061_32532__$1) {
case "compute":
var c__30660__auto___32534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32530,c__30660__auto___32534,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async){
return (function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = ((function (__32530,c__30660__auto___32534,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async){
return (function (state_31074){
var state_val_31075 = (state_31074[(1)]);
if((state_val_31075 === (1))){
var state_31074__$1 = state_31074;
var statearr_31076_32535 = state_31074__$1;
(statearr_31076_32535[(2)] = null);

(statearr_31076_32535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (2))){
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31074__$1,(4),jobs);
} else {
if((state_val_31075 === (3))){
var inst_31072 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31074__$1,inst_31072);
} else {
if((state_val_31075 === (4))){
var inst_31064 = (state_31074[(2)]);
var inst_31065 = process(inst_31064);
var state_31074__$1 = state_31074;
if(cljs.core.truth_(inst_31065)){
var statearr_31077_32536 = state_31074__$1;
(statearr_31077_32536[(1)] = (5));

} else {
var statearr_31078_32537 = state_31074__$1;
(statearr_31078_32537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (5))){
var state_31074__$1 = state_31074;
var statearr_31079_32538 = state_31074__$1;
(statearr_31079_32538[(2)] = null);

(statearr_31079_32538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (6))){
var state_31074__$1 = state_31074;
var statearr_31080_32539 = state_31074__$1;
(statearr_31080_32539[(2)] = null);

(statearr_31080_32539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31075 === (7))){
var inst_31070 = (state_31074[(2)]);
var state_31074__$1 = state_31074;
var statearr_31081_32540 = state_31074__$1;
(statearr_31081_32540[(2)] = inst_31070);

(statearr_31081_32540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32530,c__30660__auto___32534,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async))
;
return ((function (__32530,switch__30508__auto__,c__30660__auto___32534,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0 = (function (){
var statearr_31082 = [null,null,null,null,null,null,null];
(statearr_31082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__);

(statearr_31082[(1)] = (1));

return statearr_31082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1 = (function (state_31074){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31074);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31083){var ex__30512__auto__ = e31083;
var statearr_31084_32541 = state_31074;
(statearr_31084_32541[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31074[(4)]))){
var statearr_31085_32542 = state_31074;
(statearr_31085_32542[(1)] = cljs.core.first((state_31074[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32545 = state_31074;
state_31074 = G__32545;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__ = function(state_31074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1.call(this,state_31074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__;
})()
;})(__32530,switch__30508__auto__,c__30660__auto___32534,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async))
})();
var state__30662__auto__ = (function (){var statearr_31086 = f__30661__auto__();
(statearr_31086[(6)] = c__30660__auto___32534);

return statearr_31086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
});})(__32530,c__30660__auto___32534,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async))
);


break;
case "async":
var c__30660__auto___32546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32530,c__30660__auto___32546,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async){
return (function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = ((function (__32530,c__30660__auto___32546,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async){
return (function (state_31099){
var state_val_31100 = (state_31099[(1)]);
if((state_val_31100 === (1))){
var state_31099__$1 = state_31099;
var statearr_31101_32547 = state_31099__$1;
(statearr_31101_32547[(2)] = null);

(statearr_31101_32547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (2))){
var state_31099__$1 = state_31099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31099__$1,(4),jobs);
} else {
if((state_val_31100 === (3))){
var inst_31097 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31099__$1,inst_31097);
} else {
if((state_val_31100 === (4))){
var inst_31089 = (state_31099[(2)]);
var inst_31090 = async(inst_31089);
var state_31099__$1 = state_31099;
if(cljs.core.truth_(inst_31090)){
var statearr_31102_32548 = state_31099__$1;
(statearr_31102_32548[(1)] = (5));

} else {
var statearr_31103_32549 = state_31099__$1;
(statearr_31103_32549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (5))){
var state_31099__$1 = state_31099;
var statearr_31104_32550 = state_31099__$1;
(statearr_31104_32550[(2)] = null);

(statearr_31104_32550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (6))){
var state_31099__$1 = state_31099;
var statearr_31105_32551 = state_31099__$1;
(statearr_31105_32551[(2)] = null);

(statearr_31105_32551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (7))){
var inst_31095 = (state_31099[(2)]);
var state_31099__$1 = state_31099;
var statearr_31106_32552 = state_31099__$1;
(statearr_31106_32552[(2)] = inst_31095);

(statearr_31106_32552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32530,c__30660__auto___32546,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async))
;
return ((function (__32530,switch__30508__auto__,c__30660__auto___32546,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0 = (function (){
var statearr_31107 = [null,null,null,null,null,null,null];
(statearr_31107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__);

(statearr_31107[(1)] = (1));

return statearr_31107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1 = (function (state_31099){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31099);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31108){var ex__30512__auto__ = e31108;
var statearr_31109_32553 = state_31099;
(statearr_31109_32553[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31099[(4)]))){
var statearr_31110_32554 = state_31099;
(statearr_31110_32554[(1)] = cljs.core.first((state_31099[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32555 = state_31099;
state_31099 = G__32555;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__ = function(state_31099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1.call(this,state_31099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__;
})()
;})(__32530,switch__30508__auto__,c__30660__auto___32546,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async))
})();
var state__30662__auto__ = (function (){var statearr_31111 = f__30661__auto__();
(statearr_31111[(6)] = c__30660__auto___32546);

return statearr_31111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
});})(__32530,c__30660__auto___32546,G__31061_32531,G__31061_32532__$1,n__4695__auto___32529,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31061_32532__$1)].join('')));

}

var G__32556 = (__32530 + (1));
__32530 = G__32556;
continue;
} else {
}
break;
}

var c__30660__auto___32557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31133){
var state_val_31134 = (state_31133[(1)]);
if((state_val_31134 === (7))){
var inst_31129 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31135_32558 = state_31133__$1;
(statearr_31135_32558[(2)] = inst_31129);

(statearr_31135_32558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (1))){
var state_31133__$1 = state_31133;
var statearr_31136_32559 = state_31133__$1;
(statearr_31136_32559[(2)] = null);

(statearr_31136_32559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (4))){
var inst_31114 = (state_31133[(7)]);
var inst_31114__$1 = (state_31133[(2)]);
var inst_31115 = (inst_31114__$1 == null);
var state_31133__$1 = (function (){var statearr_31137 = state_31133;
(statearr_31137[(7)] = inst_31114__$1);

return statearr_31137;
})();
if(cljs.core.truth_(inst_31115)){
var statearr_31138_32560 = state_31133__$1;
(statearr_31138_32560[(1)] = (5));

} else {
var statearr_31139_32561 = state_31133__$1;
(statearr_31139_32561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (6))){
var inst_31119 = (state_31133[(8)]);
var inst_31114 = (state_31133[(7)]);
var inst_31119__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31120 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31121 = [inst_31114,inst_31119__$1];
var inst_31122 = (new cljs.core.PersistentVector(null,2,(5),inst_31120,inst_31121,null));
var state_31133__$1 = (function (){var statearr_31140 = state_31133;
(statearr_31140[(8)] = inst_31119__$1);

return statearr_31140;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31133__$1,(8),jobs,inst_31122);
} else {
if((state_val_31134 === (3))){
var inst_31131 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31133__$1,inst_31131);
} else {
if((state_val_31134 === (2))){
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31133__$1,(4),from);
} else {
if((state_val_31134 === (9))){
var inst_31126 = (state_31133[(2)]);
var state_31133__$1 = (function (){var statearr_31141 = state_31133;
(statearr_31141[(9)] = inst_31126);

return statearr_31141;
})();
var statearr_31142_32562 = state_31133__$1;
(statearr_31142_32562[(2)] = null);

(statearr_31142_32562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (5))){
var inst_31117 = cljs.core.async.close_BANG_(jobs);
var state_31133__$1 = state_31133;
var statearr_31143_32563 = state_31133__$1;
(statearr_31143_32563[(2)] = inst_31117);

(statearr_31143_32563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (8))){
var inst_31119 = (state_31133[(8)]);
var inst_31124 = (state_31133[(2)]);
var state_31133__$1 = (function (){var statearr_31144 = state_31133;
(statearr_31144[(10)] = inst_31124);

return statearr_31144;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31133__$1,(9),results,inst_31119);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0 = (function (){
var statearr_31145 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31145[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__);

(statearr_31145[(1)] = (1));

return statearr_31145;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1 = (function (state_31133){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31133);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31146){var ex__30512__auto__ = e31146;
var statearr_31147_32564 = state_31133;
(statearr_31147_32564[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31133[(4)]))){
var statearr_31148_32565 = state_31133;
(statearr_31148_32565[(1)] = cljs.core.first((state_31133[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32566 = state_31133;
state_31133 = G__32566;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__ = function(state_31133){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1.call(this,state_31133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31149 = f__30661__auto__();
(statearr_31149[(6)] = c__30660__auto___32557);

return statearr_31149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


var c__30660__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31187){
var state_val_31188 = (state_31187[(1)]);
if((state_val_31188 === (7))){
var inst_31183 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
var statearr_31189_32567 = state_31187__$1;
(statearr_31189_32567[(2)] = inst_31183);

(statearr_31189_32567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (20))){
var state_31187__$1 = state_31187;
var statearr_31190_32568 = state_31187__$1;
(statearr_31190_32568[(2)] = null);

(statearr_31190_32568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (1))){
var state_31187__$1 = state_31187;
var statearr_31191_32569 = state_31187__$1;
(statearr_31191_32569[(2)] = null);

(statearr_31191_32569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (4))){
var inst_31152 = (state_31187[(7)]);
var inst_31152__$1 = (state_31187[(2)]);
var inst_31153 = (inst_31152__$1 == null);
var state_31187__$1 = (function (){var statearr_31192 = state_31187;
(statearr_31192[(7)] = inst_31152__$1);

return statearr_31192;
})();
if(cljs.core.truth_(inst_31153)){
var statearr_31193_32570 = state_31187__$1;
(statearr_31193_32570[(1)] = (5));

} else {
var statearr_31194_32571 = state_31187__$1;
(statearr_31194_32571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (15))){
var inst_31165 = (state_31187[(8)]);
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31187__$1,(18),to,inst_31165);
} else {
if((state_val_31188 === (21))){
var inst_31178 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
var statearr_31195_32572 = state_31187__$1;
(statearr_31195_32572[(2)] = inst_31178);

(statearr_31195_32572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (13))){
var inst_31180 = (state_31187[(2)]);
var state_31187__$1 = (function (){var statearr_31196 = state_31187;
(statearr_31196[(9)] = inst_31180);

return statearr_31196;
})();
var statearr_31197_32573 = state_31187__$1;
(statearr_31197_32573[(2)] = null);

(statearr_31197_32573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (6))){
var inst_31152 = (state_31187[(7)]);
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31187__$1,(11),inst_31152);
} else {
if((state_val_31188 === (17))){
var inst_31173 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
if(cljs.core.truth_(inst_31173)){
var statearr_31198_32574 = state_31187__$1;
(statearr_31198_32574[(1)] = (19));

} else {
var statearr_31199_32575 = state_31187__$1;
(statearr_31199_32575[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (3))){
var inst_31185 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31187__$1,inst_31185);
} else {
if((state_val_31188 === (12))){
var inst_31162 = (state_31187[(10)]);
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31187__$1,(14),inst_31162);
} else {
if((state_val_31188 === (2))){
var state_31187__$1 = state_31187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31187__$1,(4),results);
} else {
if((state_val_31188 === (19))){
var state_31187__$1 = state_31187;
var statearr_31200_32576 = state_31187__$1;
(statearr_31200_32576[(2)] = null);

(statearr_31200_32576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (11))){
var inst_31162 = (state_31187[(2)]);
var state_31187__$1 = (function (){var statearr_31201 = state_31187;
(statearr_31201[(10)] = inst_31162);

return statearr_31201;
})();
var statearr_31202_32577 = state_31187__$1;
(statearr_31202_32577[(2)] = null);

(statearr_31202_32577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (9))){
var state_31187__$1 = state_31187;
var statearr_31203_32578 = state_31187__$1;
(statearr_31203_32578[(2)] = null);

(statearr_31203_32578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (5))){
var state_31187__$1 = state_31187;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31204_32579 = state_31187__$1;
(statearr_31204_32579[(1)] = (8));

} else {
var statearr_31205_32581 = state_31187__$1;
(statearr_31205_32581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (14))){
var inst_31167 = (state_31187[(11)]);
var inst_31165 = (state_31187[(8)]);
var inst_31165__$1 = (state_31187[(2)]);
var inst_31166 = (inst_31165__$1 == null);
var inst_31167__$1 = cljs.core.not(inst_31166);
var state_31187__$1 = (function (){var statearr_31206 = state_31187;
(statearr_31206[(11)] = inst_31167__$1);

(statearr_31206[(8)] = inst_31165__$1);

return statearr_31206;
})();
if(inst_31167__$1){
var statearr_31207_32582 = state_31187__$1;
(statearr_31207_32582[(1)] = (15));

} else {
var statearr_31208_32583 = state_31187__$1;
(statearr_31208_32583[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (16))){
var inst_31167 = (state_31187[(11)]);
var state_31187__$1 = state_31187;
var statearr_31209_32584 = state_31187__$1;
(statearr_31209_32584[(2)] = inst_31167);

(statearr_31209_32584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (10))){
var inst_31159 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
var statearr_31210_32585 = state_31187__$1;
(statearr_31210_32585[(2)] = inst_31159);

(statearr_31210_32585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (18))){
var inst_31170 = (state_31187[(2)]);
var state_31187__$1 = state_31187;
var statearr_31211_32586 = state_31187__$1;
(statearr_31211_32586[(2)] = inst_31170);

(statearr_31211_32586[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31188 === (8))){
var inst_31156 = cljs.core.async.close_BANG_(to);
var state_31187__$1 = state_31187;
var statearr_31212_32587 = state_31187__$1;
(statearr_31212_32587[(2)] = inst_31156);

(statearr_31212_32587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0 = (function (){
var statearr_31213 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__);

(statearr_31213[(1)] = (1));

return statearr_31213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1 = (function (state_31187){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31187);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31214){var ex__30512__auto__ = e31214;
var statearr_31215_32614 = state_31187;
(statearr_31215_32614[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31187[(4)]))){
var statearr_31216_32615 = state_31187;
(statearr_31216_32615[(1)] = cljs.core.first((state_31187[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32616 = state_31187;
state_31187 = G__32616;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__ = function(state_31187){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1.call(this,state_31187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30509__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31217 = f__30661__auto__();
(statearr_31217[(6)] = c__30660__auto__);

return statearr_31217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));

return c__30660__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31219 = arguments.length;
switch (G__31219) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31221 = arguments.length;
switch (G__31221) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31223 = arguments.length;
switch (G__31223) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30660__auto___32620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31249){
var state_val_31250 = (state_31249[(1)]);
if((state_val_31250 === (7))){
var inst_31245 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
var statearr_31251_32621 = state_31249__$1;
(statearr_31251_32621[(2)] = inst_31245);

(statearr_31251_32621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (1))){
var state_31249__$1 = state_31249;
var statearr_31252_32622 = state_31249__$1;
(statearr_31252_32622[(2)] = null);

(statearr_31252_32622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (4))){
var inst_31226 = (state_31249[(7)]);
var inst_31226__$1 = (state_31249[(2)]);
var inst_31227 = (inst_31226__$1 == null);
var state_31249__$1 = (function (){var statearr_31253 = state_31249;
(statearr_31253[(7)] = inst_31226__$1);

return statearr_31253;
})();
if(cljs.core.truth_(inst_31227)){
var statearr_31254_32623 = state_31249__$1;
(statearr_31254_32623[(1)] = (5));

} else {
var statearr_31255_32624 = state_31249__$1;
(statearr_31255_32624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (13))){
var state_31249__$1 = state_31249;
var statearr_31256_32625 = state_31249__$1;
(statearr_31256_32625[(2)] = null);

(statearr_31256_32625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (6))){
var inst_31226 = (state_31249[(7)]);
var inst_31232 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31226) : p.call(null,inst_31226));
var state_31249__$1 = state_31249;
if(cljs.core.truth_(inst_31232)){
var statearr_31257_32626 = state_31249__$1;
(statearr_31257_32626[(1)] = (9));

} else {
var statearr_31258_32627 = state_31249__$1;
(statearr_31258_32627[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (3))){
var inst_31247 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31249__$1,inst_31247);
} else {
if((state_val_31250 === (12))){
var state_31249__$1 = state_31249;
var statearr_31259_32628 = state_31249__$1;
(statearr_31259_32628[(2)] = null);

(statearr_31259_32628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (2))){
var state_31249__$1 = state_31249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31249__$1,(4),ch);
} else {
if((state_val_31250 === (11))){
var inst_31226 = (state_31249[(7)]);
var inst_31236 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31249__$1,(8),inst_31236,inst_31226);
} else {
if((state_val_31250 === (9))){
var state_31249__$1 = state_31249;
var statearr_31260_32629 = state_31249__$1;
(statearr_31260_32629[(2)] = tc);

(statearr_31260_32629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (5))){
var inst_31229 = cljs.core.async.close_BANG_(tc);
var inst_31230 = cljs.core.async.close_BANG_(fc);
var state_31249__$1 = (function (){var statearr_31261 = state_31249;
(statearr_31261[(8)] = inst_31229);

return statearr_31261;
})();
var statearr_31262_32630 = state_31249__$1;
(statearr_31262_32630[(2)] = inst_31230);

(statearr_31262_32630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (14))){
var inst_31243 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
var statearr_31263_32631 = state_31249__$1;
(statearr_31263_32631[(2)] = inst_31243);

(statearr_31263_32631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (10))){
var state_31249__$1 = state_31249;
var statearr_31264_32632 = state_31249__$1;
(statearr_31264_32632[(2)] = fc);

(statearr_31264_32632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31250 === (8))){
var inst_31238 = (state_31249[(2)]);
var state_31249__$1 = state_31249;
if(cljs.core.truth_(inst_31238)){
var statearr_31265_32633 = state_31249__$1;
(statearr_31265_32633[(1)] = (12));

} else {
var statearr_31266_32634 = state_31249__$1;
(statearr_31266_32634[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_31267 = [null,null,null,null,null,null,null,null,null];
(statearr_31267[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_31267[(1)] = (1));

return statearr_31267;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_31249){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31249);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31268){var ex__30512__auto__ = e31268;
var statearr_31269_32635 = state_31249;
(statearr_31269_32635[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31249[(4)]))){
var statearr_31270_32636 = state_31249;
(statearr_31270_32636[(1)] = cljs.core.first((state_31249[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32637 = state_31249;
state_31249 = G__32637;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_31249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_31249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31271 = f__30661__auto__();
(statearr_31271[(6)] = c__30660__auto___32620);

return statearr_31271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30660__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31293){
var state_val_31294 = (state_31293[(1)]);
if((state_val_31294 === (7))){
var inst_31289 = (state_31293[(2)]);
var state_31293__$1 = state_31293;
var statearr_31295_32638 = state_31293__$1;
(statearr_31295_32638[(2)] = inst_31289);

(statearr_31295_32638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (1))){
var inst_31272 = init;
var inst_31273 = inst_31272;
var state_31293__$1 = (function (){var statearr_31296 = state_31293;
(statearr_31296[(7)] = inst_31273);

return statearr_31296;
})();
var statearr_31297_32639 = state_31293__$1;
(statearr_31297_32639[(2)] = null);

(statearr_31297_32639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (4))){
var inst_31276 = (state_31293[(8)]);
var inst_31276__$1 = (state_31293[(2)]);
var inst_31277 = (inst_31276__$1 == null);
var state_31293__$1 = (function (){var statearr_31298 = state_31293;
(statearr_31298[(8)] = inst_31276__$1);

return statearr_31298;
})();
if(cljs.core.truth_(inst_31277)){
var statearr_31299_32640 = state_31293__$1;
(statearr_31299_32640[(1)] = (5));

} else {
var statearr_31300_32641 = state_31293__$1;
(statearr_31300_32641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (6))){
var inst_31280 = (state_31293[(9)]);
var inst_31276 = (state_31293[(8)]);
var inst_31273 = (state_31293[(7)]);
var inst_31280__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31273,inst_31276) : f.call(null,inst_31273,inst_31276));
var inst_31281 = cljs.core.reduced_QMARK_(inst_31280__$1);
var state_31293__$1 = (function (){var statearr_31301 = state_31293;
(statearr_31301[(9)] = inst_31280__$1);

return statearr_31301;
})();
if(inst_31281){
var statearr_31302_32642 = state_31293__$1;
(statearr_31302_32642[(1)] = (8));

} else {
var statearr_31303_32643 = state_31293__$1;
(statearr_31303_32643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (3))){
var inst_31291 = (state_31293[(2)]);
var state_31293__$1 = state_31293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31293__$1,inst_31291);
} else {
if((state_val_31294 === (2))){
var state_31293__$1 = state_31293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31293__$1,(4),ch);
} else {
if((state_val_31294 === (9))){
var inst_31280 = (state_31293[(9)]);
var inst_31273 = inst_31280;
var state_31293__$1 = (function (){var statearr_31304 = state_31293;
(statearr_31304[(7)] = inst_31273);

return statearr_31304;
})();
var statearr_31305_32644 = state_31293__$1;
(statearr_31305_32644[(2)] = null);

(statearr_31305_32644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (5))){
var inst_31273 = (state_31293[(7)]);
var state_31293__$1 = state_31293;
var statearr_31306_32645 = state_31293__$1;
(statearr_31306_32645[(2)] = inst_31273);

(statearr_31306_32645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (10))){
var inst_31287 = (state_31293[(2)]);
var state_31293__$1 = state_31293;
var statearr_31307_32646 = state_31293__$1;
(statearr_31307_32646[(2)] = inst_31287);

(statearr_31307_32646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31294 === (8))){
var inst_31280 = (state_31293[(9)]);
var inst_31283 = cljs.core.deref(inst_31280);
var state_31293__$1 = state_31293;
var statearr_31308_32647 = state_31293__$1;
(statearr_31308_32647[(2)] = inst_31283);

(statearr_31308_32647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30509__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30509__auto____0 = (function (){
var statearr_31309 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31309[(0)] = cljs$core$async$reduce_$_state_machine__30509__auto__);

(statearr_31309[(1)] = (1));

return statearr_31309;
});
var cljs$core$async$reduce_$_state_machine__30509__auto____1 = (function (state_31293){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31293);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31310){var ex__30512__auto__ = e31310;
var statearr_31311_32648 = state_31293;
(statearr_31311_32648[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31293[(4)]))){
var statearr_31312_32649 = state_31293;
(statearr_31312_32649[(1)] = cljs.core.first((state_31293[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32650 = state_31293;
state_31293 = G__32650;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30509__auto__ = function(state_31293){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30509__auto____1.call(this,state_31293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30509__auto____0;
cljs$core$async$reduce_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30509__auto____1;
return cljs$core$async$reduce_$_state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31313 = f__30661__auto__();
(statearr_31313[(6)] = c__30660__auto__);

return statearr_31313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));

return c__30660__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30660__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31319){
var state_val_31320 = (state_31319[(1)]);
if((state_val_31320 === (1))){
var inst_31314 = cljs.core.async.reduce(f__$1,init,ch);
var state_31319__$1 = state_31319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31319__$1,(2),inst_31314);
} else {
if((state_val_31320 === (2))){
var inst_31316 = (state_31319[(2)]);
var inst_31317 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31316) : f__$1.call(null,inst_31316));
var state_31319__$1 = state_31319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31319__$1,inst_31317);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30509__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30509__auto____0 = (function (){
var statearr_31321 = [null,null,null,null,null,null,null];
(statearr_31321[(0)] = cljs$core$async$transduce_$_state_machine__30509__auto__);

(statearr_31321[(1)] = (1));

return statearr_31321;
});
var cljs$core$async$transduce_$_state_machine__30509__auto____1 = (function (state_31319){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31319);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31322){var ex__30512__auto__ = e31322;
var statearr_31323_32651 = state_31319;
(statearr_31323_32651[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31319[(4)]))){
var statearr_31324_32652 = state_31319;
(statearr_31324_32652[(1)] = cljs.core.first((state_31319[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32653 = state_31319;
state_31319 = G__32653;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30509__auto__ = function(state_31319){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30509__auto____1.call(this,state_31319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30509__auto____0;
cljs$core$async$transduce_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30509__auto____1;
return cljs$core$async$transduce_$_state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31325 = f__30661__auto__();
(statearr_31325[(6)] = c__30660__auto__);

return statearr_31325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));

return c__30660__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31327 = arguments.length;
switch (G__31327) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30660__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31352){
var state_val_31353 = (state_31352[(1)]);
if((state_val_31353 === (7))){
var inst_31334 = (state_31352[(2)]);
var state_31352__$1 = state_31352;
var statearr_31354_32655 = state_31352__$1;
(statearr_31354_32655[(2)] = inst_31334);

(statearr_31354_32655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (1))){
var inst_31328 = cljs.core.seq(coll);
var inst_31329 = inst_31328;
var state_31352__$1 = (function (){var statearr_31355 = state_31352;
(statearr_31355[(7)] = inst_31329);

return statearr_31355;
})();
var statearr_31356_32657 = state_31352__$1;
(statearr_31356_32657[(2)] = null);

(statearr_31356_32657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (4))){
var inst_31329 = (state_31352[(7)]);
var inst_31332 = cljs.core.first(inst_31329);
var state_31352__$1 = state_31352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31352__$1,(7),ch,inst_31332);
} else {
if((state_val_31353 === (13))){
var inst_31346 = (state_31352[(2)]);
var state_31352__$1 = state_31352;
var statearr_31357_32659 = state_31352__$1;
(statearr_31357_32659[(2)] = inst_31346);

(statearr_31357_32659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (6))){
var inst_31337 = (state_31352[(2)]);
var state_31352__$1 = state_31352;
if(cljs.core.truth_(inst_31337)){
var statearr_31358_32662 = state_31352__$1;
(statearr_31358_32662[(1)] = (8));

} else {
var statearr_31359_32663 = state_31352__$1;
(statearr_31359_32663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (3))){
var inst_31350 = (state_31352[(2)]);
var state_31352__$1 = state_31352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31352__$1,inst_31350);
} else {
if((state_val_31353 === (12))){
var state_31352__$1 = state_31352;
var statearr_31360_32664 = state_31352__$1;
(statearr_31360_32664[(2)] = null);

(statearr_31360_32664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (2))){
var inst_31329 = (state_31352[(7)]);
var state_31352__$1 = state_31352;
if(cljs.core.truth_(inst_31329)){
var statearr_31361_32668 = state_31352__$1;
(statearr_31361_32668[(1)] = (4));

} else {
var statearr_31362_32669 = state_31352__$1;
(statearr_31362_32669[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (11))){
var inst_31343 = cljs.core.async.close_BANG_(ch);
var state_31352__$1 = state_31352;
var statearr_31363_32670 = state_31352__$1;
(statearr_31363_32670[(2)] = inst_31343);

(statearr_31363_32670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (9))){
var state_31352__$1 = state_31352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31364_32672 = state_31352__$1;
(statearr_31364_32672[(1)] = (11));

} else {
var statearr_31365_32674 = state_31352__$1;
(statearr_31365_32674[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (5))){
var inst_31329 = (state_31352[(7)]);
var state_31352__$1 = state_31352;
var statearr_31366_32675 = state_31352__$1;
(statearr_31366_32675[(2)] = inst_31329);

(statearr_31366_32675[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (10))){
var inst_31348 = (state_31352[(2)]);
var state_31352__$1 = state_31352;
var statearr_31367_32676 = state_31352__$1;
(statearr_31367_32676[(2)] = inst_31348);

(statearr_31367_32676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31353 === (8))){
var inst_31329 = (state_31352[(7)]);
var inst_31339 = cljs.core.next(inst_31329);
var inst_31329__$1 = inst_31339;
var state_31352__$1 = (function (){var statearr_31368 = state_31352;
(statearr_31368[(7)] = inst_31329__$1);

return statearr_31368;
})();
var statearr_31369_32677 = state_31352__$1;
(statearr_31369_32677[(2)] = null);

(statearr_31369_32677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_31370 = [null,null,null,null,null,null,null,null];
(statearr_31370[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_31370[(1)] = (1));

return statearr_31370;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_31352){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31352);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31371){var ex__30512__auto__ = e31371;
var statearr_31372_32678 = state_31352;
(statearr_31372_32678[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31352[(4)]))){
var statearr_31373_32679 = state_31352;
(statearr_31373_32679[(1)] = cljs.core.first((state_31352[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32680 = state_31352;
state_31352 = G__32680;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_31352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_31352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31374 = f__30661__auto__();
(statearr_31374[(6)] = c__30660__auto__);

return statearr_31374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));

return c__30660__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31376 = arguments.length;
switch (G__31376) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32682 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32682(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32683 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32683(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32684 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32684(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32685 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32685(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31377 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31377 = (function (ch,cs,meta31378){
this.ch = ch;
this.cs = cs;
this.meta31378 = meta31378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31379,meta31378__$1){
var self__ = this;
var _31379__$1 = this;
return (new cljs.core.async.t_cljs$core$async31377(self__.ch,self__.cs,meta31378__$1));
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31379){
var self__ = this;
var _31379__$1 = this;
return self__.meta31378;
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31377.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31377.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31378","meta31378",-978349952,null)], null);
}));

(cljs.core.async.t_cljs$core$async31377.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31377.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31377");

(cljs.core.async.t_cljs$core$async31377.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31377");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31377.
 */
cljs.core.async.__GT_t_cljs$core$async31377 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31377(ch__$1,cs__$1,meta31378){
return (new cljs.core.async.t_cljs$core$async31377(ch__$1,cs__$1,meta31378));
});

}

return (new cljs.core.async.t_cljs$core$async31377(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30660__auto___32686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31559){
var state_val_31560 = (state_31559[(1)]);
if((state_val_31560 === (7))){
var inst_31555 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31562_32687 = state_31559__$1;
(statearr_31562_32687[(2)] = inst_31555);

(statearr_31562_32687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (20))){
var inst_31413 = (state_31559[(7)]);
var inst_31425 = cljs.core.first(inst_31413);
var inst_31426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31425,(0),null);
var inst_31427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31425,(1),null);
var state_31559__$1 = (function (){var statearr_31563 = state_31559;
(statearr_31563[(8)] = inst_31426);

return statearr_31563;
})();
if(cljs.core.truth_(inst_31427)){
var statearr_31564_32688 = state_31559__$1;
(statearr_31564_32688[(1)] = (22));

} else {
var statearr_31565_32689 = state_31559__$1;
(statearr_31565_32689[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (27))){
var inst_31382 = (state_31559[(9)]);
var inst_31462 = (state_31559[(10)]);
var inst_31457 = (state_31559[(11)]);
var inst_31455 = (state_31559[(12)]);
var inst_31462__$1 = cljs.core._nth(inst_31455,inst_31457);
var inst_31463 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31462__$1,inst_31382,done);
var state_31559__$1 = (function (){var statearr_31566 = state_31559;
(statearr_31566[(10)] = inst_31462__$1);

return statearr_31566;
})();
if(cljs.core.truth_(inst_31463)){
var statearr_31567_32690 = state_31559__$1;
(statearr_31567_32690[(1)] = (30));

} else {
var statearr_31568_32691 = state_31559__$1;
(statearr_31568_32691[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (1))){
var state_31559__$1 = state_31559;
var statearr_31569_32692 = state_31559__$1;
(statearr_31569_32692[(2)] = null);

(statearr_31569_32692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (24))){
var inst_31413 = (state_31559[(7)]);
var inst_31432 = (state_31559[(2)]);
var inst_31433 = cljs.core.next(inst_31413);
var inst_31391 = inst_31433;
var inst_31392 = null;
var inst_31393 = (0);
var inst_31394 = (0);
var state_31559__$1 = (function (){var statearr_31578 = state_31559;
(statearr_31578[(13)] = inst_31394);

(statearr_31578[(14)] = inst_31392);

(statearr_31578[(15)] = inst_31393);

(statearr_31578[(16)] = inst_31391);

(statearr_31578[(17)] = inst_31432);

return statearr_31578;
})();
var statearr_31580_32693 = state_31559__$1;
(statearr_31580_32693[(2)] = null);

(statearr_31580_32693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (39))){
var state_31559__$1 = state_31559;
var statearr_31584_32694 = state_31559__$1;
(statearr_31584_32694[(2)] = null);

(statearr_31584_32694[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (4))){
var inst_31382 = (state_31559[(9)]);
var inst_31382__$1 = (state_31559[(2)]);
var inst_31383 = (inst_31382__$1 == null);
var state_31559__$1 = (function (){var statearr_31585 = state_31559;
(statearr_31585[(9)] = inst_31382__$1);

return statearr_31585;
})();
if(cljs.core.truth_(inst_31383)){
var statearr_31586_32695 = state_31559__$1;
(statearr_31586_32695[(1)] = (5));

} else {
var statearr_31587_32696 = state_31559__$1;
(statearr_31587_32696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (15))){
var inst_31394 = (state_31559[(13)]);
var inst_31392 = (state_31559[(14)]);
var inst_31393 = (state_31559[(15)]);
var inst_31391 = (state_31559[(16)]);
var inst_31409 = (state_31559[(2)]);
var inst_31410 = (inst_31394 + (1));
var tmp31581 = inst_31392;
var tmp31582 = inst_31393;
var tmp31583 = inst_31391;
var inst_31391__$1 = tmp31583;
var inst_31392__$1 = tmp31581;
var inst_31393__$1 = tmp31582;
var inst_31394__$1 = inst_31410;
var state_31559__$1 = (function (){var statearr_31588 = state_31559;
(statearr_31588[(18)] = inst_31409);

(statearr_31588[(13)] = inst_31394__$1);

(statearr_31588[(14)] = inst_31392__$1);

(statearr_31588[(15)] = inst_31393__$1);

(statearr_31588[(16)] = inst_31391__$1);

return statearr_31588;
})();
var statearr_31589_32697 = state_31559__$1;
(statearr_31589_32697[(2)] = null);

(statearr_31589_32697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (21))){
var inst_31436 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31593_32698 = state_31559__$1;
(statearr_31593_32698[(2)] = inst_31436);

(statearr_31593_32698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (31))){
var inst_31462 = (state_31559[(10)]);
var inst_31466 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31462);
var state_31559__$1 = state_31559;
var statearr_31594_32699 = state_31559__$1;
(statearr_31594_32699[(2)] = inst_31466);

(statearr_31594_32699[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (32))){
var inst_31456 = (state_31559[(19)]);
var inst_31454 = (state_31559[(20)]);
var inst_31457 = (state_31559[(11)]);
var inst_31455 = (state_31559[(12)]);
var inst_31468 = (state_31559[(2)]);
var inst_31469 = (inst_31457 + (1));
var tmp31590 = inst_31456;
var tmp31591 = inst_31454;
var tmp31592 = inst_31455;
var inst_31454__$1 = tmp31591;
var inst_31455__$1 = tmp31592;
var inst_31456__$1 = tmp31590;
var inst_31457__$1 = inst_31469;
var state_31559__$1 = (function (){var statearr_31595 = state_31559;
(statearr_31595[(19)] = inst_31456__$1);

(statearr_31595[(21)] = inst_31468);

(statearr_31595[(20)] = inst_31454__$1);

(statearr_31595[(11)] = inst_31457__$1);

(statearr_31595[(12)] = inst_31455__$1);

return statearr_31595;
})();
var statearr_31596_32700 = state_31559__$1;
(statearr_31596_32700[(2)] = null);

(statearr_31596_32700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (40))){
var inst_31528 = (state_31559[(22)]);
var inst_31532 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31528);
var state_31559__$1 = state_31559;
var statearr_31597_32701 = state_31559__$1;
(statearr_31597_32701[(2)] = inst_31532);

(statearr_31597_32701[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (33))){
var inst_31519 = (state_31559[(23)]);
var inst_31521 = cljs.core.chunked_seq_QMARK_(inst_31519);
var state_31559__$1 = state_31559;
if(inst_31521){
var statearr_31598_32702 = state_31559__$1;
(statearr_31598_32702[(1)] = (36));

} else {
var statearr_31599_32703 = state_31559__$1;
(statearr_31599_32703[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (13))){
var inst_31403 = (state_31559[(24)]);
var inst_31406 = cljs.core.async.close_BANG_(inst_31403);
var state_31559__$1 = state_31559;
var statearr_31611_32704 = state_31559__$1;
(statearr_31611_32704[(2)] = inst_31406);

(statearr_31611_32704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (22))){
var inst_31426 = (state_31559[(8)]);
var inst_31429 = cljs.core.async.close_BANG_(inst_31426);
var state_31559__$1 = state_31559;
var statearr_31612_32705 = state_31559__$1;
(statearr_31612_32705[(2)] = inst_31429);

(statearr_31612_32705[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (36))){
var inst_31519 = (state_31559[(23)]);
var inst_31523 = cljs.core.chunk_first(inst_31519);
var inst_31524 = cljs.core.chunk_rest(inst_31519);
var inst_31525 = cljs.core.count(inst_31523);
var inst_31454 = inst_31524;
var inst_31455 = inst_31523;
var inst_31456 = inst_31525;
var inst_31457 = (0);
var state_31559__$1 = (function (){var statearr_31613 = state_31559;
(statearr_31613[(19)] = inst_31456);

(statearr_31613[(20)] = inst_31454);

(statearr_31613[(11)] = inst_31457);

(statearr_31613[(12)] = inst_31455);

return statearr_31613;
})();
var statearr_31614_32706 = state_31559__$1;
(statearr_31614_32706[(2)] = null);

(statearr_31614_32706[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (41))){
var inst_31519 = (state_31559[(23)]);
var inst_31534 = (state_31559[(2)]);
var inst_31535 = cljs.core.next(inst_31519);
var inst_31454 = inst_31535;
var inst_31455 = null;
var inst_31456 = (0);
var inst_31457 = (0);
var state_31559__$1 = (function (){var statearr_31615 = state_31559;
(statearr_31615[(19)] = inst_31456);

(statearr_31615[(20)] = inst_31454);

(statearr_31615[(11)] = inst_31457);

(statearr_31615[(25)] = inst_31534);

(statearr_31615[(12)] = inst_31455);

return statearr_31615;
})();
var statearr_31616_32707 = state_31559__$1;
(statearr_31616_32707[(2)] = null);

(statearr_31616_32707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (43))){
var state_31559__$1 = state_31559;
var statearr_31617_32708 = state_31559__$1;
(statearr_31617_32708[(2)] = null);

(statearr_31617_32708[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (29))){
var inst_31543 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31618_32709 = state_31559__$1;
(statearr_31618_32709[(2)] = inst_31543);

(statearr_31618_32709[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (44))){
var inst_31552 = (state_31559[(2)]);
var state_31559__$1 = (function (){var statearr_31619 = state_31559;
(statearr_31619[(26)] = inst_31552);

return statearr_31619;
})();
var statearr_31620_32710 = state_31559__$1;
(statearr_31620_32710[(2)] = null);

(statearr_31620_32710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (6))){
var inst_31446 = (state_31559[(27)]);
var inst_31445 = cljs.core.deref(cs);
var inst_31446__$1 = cljs.core.keys(inst_31445);
var inst_31447 = cljs.core.count(inst_31446__$1);
var inst_31448 = cljs.core.reset_BANG_(dctr,inst_31447);
var inst_31453 = cljs.core.seq(inst_31446__$1);
var inst_31454 = inst_31453;
var inst_31455 = null;
var inst_31456 = (0);
var inst_31457 = (0);
var state_31559__$1 = (function (){var statearr_31621 = state_31559;
(statearr_31621[(28)] = inst_31448);

(statearr_31621[(19)] = inst_31456);

(statearr_31621[(20)] = inst_31454);

(statearr_31621[(27)] = inst_31446__$1);

(statearr_31621[(11)] = inst_31457);

(statearr_31621[(12)] = inst_31455);

return statearr_31621;
})();
var statearr_31622_32711 = state_31559__$1;
(statearr_31622_32711[(2)] = null);

(statearr_31622_32711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (28))){
var inst_31454 = (state_31559[(20)]);
var inst_31519 = (state_31559[(23)]);
var inst_31519__$1 = cljs.core.seq(inst_31454);
var state_31559__$1 = (function (){var statearr_31623 = state_31559;
(statearr_31623[(23)] = inst_31519__$1);

return statearr_31623;
})();
if(inst_31519__$1){
var statearr_31624_32712 = state_31559__$1;
(statearr_31624_32712[(1)] = (33));

} else {
var statearr_31625_32713 = state_31559__$1;
(statearr_31625_32713[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (25))){
var inst_31456 = (state_31559[(19)]);
var inst_31457 = (state_31559[(11)]);
var inst_31459 = (inst_31457 < inst_31456);
var inst_31460 = inst_31459;
var state_31559__$1 = state_31559;
if(cljs.core.truth_(inst_31460)){
var statearr_31626_32714 = state_31559__$1;
(statearr_31626_32714[(1)] = (27));

} else {
var statearr_31627_32715 = state_31559__$1;
(statearr_31627_32715[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (34))){
var state_31559__$1 = state_31559;
var statearr_31628_32716 = state_31559__$1;
(statearr_31628_32716[(2)] = null);

(statearr_31628_32716[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (17))){
var state_31559__$1 = state_31559;
var statearr_31629_32717 = state_31559__$1;
(statearr_31629_32717[(2)] = null);

(statearr_31629_32717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (3))){
var inst_31557 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31559__$1,inst_31557);
} else {
if((state_val_31560 === (12))){
var inst_31441 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31630_32718 = state_31559__$1;
(statearr_31630_32718[(2)] = inst_31441);

(statearr_31630_32718[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (2))){
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31559__$1,(4),ch);
} else {
if((state_val_31560 === (23))){
var state_31559__$1 = state_31559;
var statearr_31631_32719 = state_31559__$1;
(statearr_31631_32719[(2)] = null);

(statearr_31631_32719[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (35))){
var inst_31541 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31632_32792 = state_31559__$1;
(statearr_31632_32792[(2)] = inst_31541);

(statearr_31632_32792[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (19))){
var inst_31413 = (state_31559[(7)]);
var inst_31417 = cljs.core.chunk_first(inst_31413);
var inst_31418 = cljs.core.chunk_rest(inst_31413);
var inst_31419 = cljs.core.count(inst_31417);
var inst_31391 = inst_31418;
var inst_31392 = inst_31417;
var inst_31393 = inst_31419;
var inst_31394 = (0);
var state_31559__$1 = (function (){var statearr_31633 = state_31559;
(statearr_31633[(13)] = inst_31394);

(statearr_31633[(14)] = inst_31392);

(statearr_31633[(15)] = inst_31393);

(statearr_31633[(16)] = inst_31391);

return statearr_31633;
})();
var statearr_31634_32793 = state_31559__$1;
(statearr_31634_32793[(2)] = null);

(statearr_31634_32793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (11))){
var inst_31391 = (state_31559[(16)]);
var inst_31413 = (state_31559[(7)]);
var inst_31413__$1 = cljs.core.seq(inst_31391);
var state_31559__$1 = (function (){var statearr_31635 = state_31559;
(statearr_31635[(7)] = inst_31413__$1);

return statearr_31635;
})();
if(inst_31413__$1){
var statearr_31636_32794 = state_31559__$1;
(statearr_31636_32794[(1)] = (16));

} else {
var statearr_31637_32795 = state_31559__$1;
(statearr_31637_32795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (9))){
var inst_31443 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31638_32796 = state_31559__$1;
(statearr_31638_32796[(2)] = inst_31443);

(statearr_31638_32796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (5))){
var inst_31389 = cljs.core.deref(cs);
var inst_31390 = cljs.core.seq(inst_31389);
var inst_31391 = inst_31390;
var inst_31392 = null;
var inst_31393 = (0);
var inst_31394 = (0);
var state_31559__$1 = (function (){var statearr_31639 = state_31559;
(statearr_31639[(13)] = inst_31394);

(statearr_31639[(14)] = inst_31392);

(statearr_31639[(15)] = inst_31393);

(statearr_31639[(16)] = inst_31391);

return statearr_31639;
})();
var statearr_31640_32797 = state_31559__$1;
(statearr_31640_32797[(2)] = null);

(statearr_31640_32797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (14))){
var state_31559__$1 = state_31559;
var statearr_31641_32798 = state_31559__$1;
(statearr_31641_32798[(2)] = null);

(statearr_31641_32798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (45))){
var inst_31549 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31642_32799 = state_31559__$1;
(statearr_31642_32799[(2)] = inst_31549);

(statearr_31642_32799[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (26))){
var inst_31446 = (state_31559[(27)]);
var inst_31545 = (state_31559[(2)]);
var inst_31546 = cljs.core.seq(inst_31446);
var state_31559__$1 = (function (){var statearr_31643 = state_31559;
(statearr_31643[(29)] = inst_31545);

return statearr_31643;
})();
if(inst_31546){
var statearr_31644_32800 = state_31559__$1;
(statearr_31644_32800[(1)] = (42));

} else {
var statearr_31645_32801 = state_31559__$1;
(statearr_31645_32801[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (16))){
var inst_31413 = (state_31559[(7)]);
var inst_31415 = cljs.core.chunked_seq_QMARK_(inst_31413);
var state_31559__$1 = state_31559;
if(inst_31415){
var statearr_31646_32802 = state_31559__$1;
(statearr_31646_32802[(1)] = (19));

} else {
var statearr_31647_32803 = state_31559__$1;
(statearr_31647_32803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (38))){
var inst_31538 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31648_32804 = state_31559__$1;
(statearr_31648_32804[(2)] = inst_31538);

(statearr_31648_32804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (30))){
var state_31559__$1 = state_31559;
var statearr_31649_32805 = state_31559__$1;
(statearr_31649_32805[(2)] = null);

(statearr_31649_32805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (10))){
var inst_31394 = (state_31559[(13)]);
var inst_31392 = (state_31559[(14)]);
var inst_31402 = cljs.core._nth(inst_31392,inst_31394);
var inst_31403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31402,(0),null);
var inst_31404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31402,(1),null);
var state_31559__$1 = (function (){var statearr_31650 = state_31559;
(statearr_31650[(24)] = inst_31403);

return statearr_31650;
})();
if(cljs.core.truth_(inst_31404)){
var statearr_31651_32806 = state_31559__$1;
(statearr_31651_32806[(1)] = (13));

} else {
var statearr_31652_32807 = state_31559__$1;
(statearr_31652_32807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (18))){
var inst_31439 = (state_31559[(2)]);
var state_31559__$1 = state_31559;
var statearr_31653_32808 = state_31559__$1;
(statearr_31653_32808[(2)] = inst_31439);

(statearr_31653_32808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (42))){
var state_31559__$1 = state_31559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31559__$1,(45),dchan);
} else {
if((state_val_31560 === (37))){
var inst_31528 = (state_31559[(22)]);
var inst_31382 = (state_31559[(9)]);
var inst_31519 = (state_31559[(23)]);
var inst_31528__$1 = cljs.core.first(inst_31519);
var inst_31529 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31528__$1,inst_31382,done);
var state_31559__$1 = (function (){var statearr_31654 = state_31559;
(statearr_31654[(22)] = inst_31528__$1);

return statearr_31654;
})();
if(cljs.core.truth_(inst_31529)){
var statearr_31655_32809 = state_31559__$1;
(statearr_31655_32809[(1)] = (39));

} else {
var statearr_31656_32810 = state_31559__$1;
(statearr_31656_32810[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31560 === (8))){
var inst_31394 = (state_31559[(13)]);
var inst_31393 = (state_31559[(15)]);
var inst_31396 = (inst_31394 < inst_31393);
var inst_31397 = inst_31396;
var state_31559__$1 = state_31559;
if(cljs.core.truth_(inst_31397)){
var statearr_31657_32811 = state_31559__$1;
(statearr_31657_32811[(1)] = (10));

} else {
var statearr_31658_32812 = state_31559__$1;
(statearr_31658_32812[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30509__auto__ = null;
var cljs$core$async$mult_$_state_machine__30509__auto____0 = (function (){
var statearr_31659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31659[(0)] = cljs$core$async$mult_$_state_machine__30509__auto__);

(statearr_31659[(1)] = (1));

return statearr_31659;
});
var cljs$core$async$mult_$_state_machine__30509__auto____1 = (function (state_31559){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31559);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31660){var ex__30512__auto__ = e31660;
var statearr_31661_32813 = state_31559;
(statearr_31661_32813[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31559[(4)]))){
var statearr_31662_32814 = state_31559;
(statearr_31662_32814[(1)] = cljs.core.first((state_31559[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32815 = state_31559;
state_31559 = G__32815;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30509__auto__ = function(state_31559){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30509__auto____1.call(this,state_31559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30509__auto____0;
cljs$core$async$mult_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30509__auto____1;
return cljs$core$async$mult_$_state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31663 = f__30661__auto__();
(statearr_31663[(6)] = c__30660__auto___32686);

return statearr_31663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31665 = arguments.length;
switch (G__31665) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32817 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32817(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32818 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32818(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32819 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32819(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32820 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32820(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32821 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32821(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32822 = arguments.length;
var i__4819__auto___32823 = (0);
while(true){
if((i__4819__auto___32823 < len__4818__auto___32822)){
args__4824__auto__.push((arguments[i__4819__auto___32823]));

var G__32824 = (i__4819__auto___32823 + (1));
i__4819__auto___32823 = G__32824;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31670){
var map__31671 = p__31670;
var map__31671__$1 = cljs.core.__destructure_map(map__31671);
var opts = map__31671__$1;
var statearr_31672_32825 = state;
(statearr_31672_32825[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31673_32826 = state;
(statearr_31673_32826[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31674_32827 = state;
(statearr_31674_32827[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31666){
var G__31667 = cljs.core.first(seq31666);
var seq31666__$1 = cljs.core.next(seq31666);
var G__31668 = cljs.core.first(seq31666__$1);
var seq31666__$2 = cljs.core.next(seq31666__$1);
var G__31669 = cljs.core.first(seq31666__$2);
var seq31666__$3 = cljs.core.next(seq31666__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31667,G__31668,G__31669,seq31666__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31675 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31675 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31676){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31676 = meta31676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31677,meta31676__$1){
var self__ = this;
var _31677__$1 = this;
return (new cljs.core.async.t_cljs$core$async31675(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31676__$1));
}));

(cljs.core.async.t_cljs$core$async31675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31677){
var self__ = this;
var _31677__$1 = this;
return self__.meta31676;
}));

(cljs.core.async.t_cljs$core$async31675.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31675.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31675.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31675.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31675.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31675.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31675.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31675.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31676","meta31676",-9503337,null)], null);
}));

(cljs.core.async.t_cljs$core$async31675.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31675");

(cljs.core.async.t_cljs$core$async31675.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31675");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31675.
 */
cljs.core.async.__GT_t_cljs$core$async31675 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31675(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31676){
return (new cljs.core.async.t_cljs$core$async31675(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31676));
});

}

return (new cljs.core.async.t_cljs$core$async31675(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30660__auto___32898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31745){
var state_val_31746 = (state_31745[(1)]);
if((state_val_31746 === (7))){
var inst_31705 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
if(cljs.core.truth_(inst_31705)){
var statearr_31747_32899 = state_31745__$1;
(statearr_31747_32899[(1)] = (8));

} else {
var statearr_31748_32900 = state_31745__$1;
(statearr_31748_32900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (20))){
var inst_31698 = (state_31745[(7)]);
var state_31745__$1 = state_31745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31745__$1,(23),out,inst_31698);
} else {
if((state_val_31746 === (1))){
var inst_31681 = calc_state();
var inst_31682 = cljs.core.__destructure_map(inst_31681);
var inst_31683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31682,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31682,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31682,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31686 = inst_31681;
var state_31745__$1 = (function (){var statearr_31749 = state_31745;
(statearr_31749[(8)] = inst_31685);

(statearr_31749[(9)] = inst_31684);

(statearr_31749[(10)] = inst_31686);

(statearr_31749[(11)] = inst_31683);

return statearr_31749;
})();
var statearr_31750_32901 = state_31745__$1;
(statearr_31750_32901[(2)] = null);

(statearr_31750_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (24))){
var inst_31689 = (state_31745[(12)]);
var inst_31686 = inst_31689;
var state_31745__$1 = (function (){var statearr_31751 = state_31745;
(statearr_31751[(10)] = inst_31686);

return statearr_31751;
})();
var statearr_31752_32902 = state_31745__$1;
(statearr_31752_32902[(2)] = null);

(statearr_31752_32902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (4))){
var inst_31700 = (state_31745[(13)]);
var inst_31698 = (state_31745[(7)]);
var inst_31697 = (state_31745[(2)]);
var inst_31698__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31697,(0),null);
var inst_31699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31697,(1),null);
var inst_31700__$1 = (inst_31698__$1 == null);
var state_31745__$1 = (function (){var statearr_31753 = state_31745;
(statearr_31753[(14)] = inst_31699);

(statearr_31753[(13)] = inst_31700__$1);

(statearr_31753[(7)] = inst_31698__$1);

return statearr_31753;
})();
if(cljs.core.truth_(inst_31700__$1)){
var statearr_31754_32903 = state_31745__$1;
(statearr_31754_32903[(1)] = (5));

} else {
var statearr_31755_32904 = state_31745__$1;
(statearr_31755_32904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (15))){
var inst_31690 = (state_31745[(15)]);
var inst_31719 = (state_31745[(16)]);
var inst_31719__$1 = cljs.core.empty_QMARK_(inst_31690);
var state_31745__$1 = (function (){var statearr_31756 = state_31745;
(statearr_31756[(16)] = inst_31719__$1);

return statearr_31756;
})();
if(inst_31719__$1){
var statearr_31757_32905 = state_31745__$1;
(statearr_31757_32905[(1)] = (17));

} else {
var statearr_31758_32906 = state_31745__$1;
(statearr_31758_32906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (21))){
var inst_31689 = (state_31745[(12)]);
var inst_31686 = inst_31689;
var state_31745__$1 = (function (){var statearr_31759 = state_31745;
(statearr_31759[(10)] = inst_31686);

return statearr_31759;
})();
var statearr_31760_32907 = state_31745__$1;
(statearr_31760_32907[(2)] = null);

(statearr_31760_32907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (13))){
var inst_31712 = (state_31745[(2)]);
var inst_31713 = calc_state();
var inst_31686 = inst_31713;
var state_31745__$1 = (function (){var statearr_31761 = state_31745;
(statearr_31761[(17)] = inst_31712);

(statearr_31761[(10)] = inst_31686);

return statearr_31761;
})();
var statearr_31762_32908 = state_31745__$1;
(statearr_31762_32908[(2)] = null);

(statearr_31762_32908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (22))){
var inst_31739 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
var statearr_31763_32909 = state_31745__$1;
(statearr_31763_32909[(2)] = inst_31739);

(statearr_31763_32909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (6))){
var inst_31699 = (state_31745[(14)]);
var inst_31703 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31699,change);
var state_31745__$1 = state_31745;
var statearr_31764_32910 = state_31745__$1;
(statearr_31764_32910[(2)] = inst_31703);

(statearr_31764_32910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (25))){
var state_31745__$1 = state_31745;
var statearr_31765_32911 = state_31745__$1;
(statearr_31765_32911[(2)] = null);

(statearr_31765_32911[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (17))){
var inst_31699 = (state_31745[(14)]);
var inst_31691 = (state_31745[(18)]);
var inst_31721 = (inst_31691.cljs$core$IFn$_invoke$arity$1 ? inst_31691.cljs$core$IFn$_invoke$arity$1(inst_31699) : inst_31691.call(null,inst_31699));
var inst_31722 = cljs.core.not(inst_31721);
var state_31745__$1 = state_31745;
var statearr_31766_32912 = state_31745__$1;
(statearr_31766_32912[(2)] = inst_31722);

(statearr_31766_32912[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (3))){
var inst_31743 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31745__$1,inst_31743);
} else {
if((state_val_31746 === (12))){
var state_31745__$1 = state_31745;
var statearr_31767_32913 = state_31745__$1;
(statearr_31767_32913[(2)] = null);

(statearr_31767_32913[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (2))){
var inst_31689 = (state_31745[(12)]);
var inst_31686 = (state_31745[(10)]);
var inst_31689__$1 = cljs.core.__destructure_map(inst_31686);
var inst_31690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31689__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31689__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31689__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31745__$1 = (function (){var statearr_31768 = state_31745;
(statearr_31768[(15)] = inst_31690);

(statearr_31768[(18)] = inst_31691);

(statearr_31768[(12)] = inst_31689__$1);

return statearr_31768;
})();
return cljs.core.async.ioc_alts_BANG_(state_31745__$1,(4),inst_31692);
} else {
if((state_val_31746 === (23))){
var inst_31730 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
if(cljs.core.truth_(inst_31730)){
var statearr_31769_32914 = state_31745__$1;
(statearr_31769_32914[(1)] = (24));

} else {
var statearr_31770_32915 = state_31745__$1;
(statearr_31770_32915[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (19))){
var inst_31725 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
var statearr_31771_32916 = state_31745__$1;
(statearr_31771_32916[(2)] = inst_31725);

(statearr_31771_32916[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (11))){
var inst_31699 = (state_31745[(14)]);
var inst_31709 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31699);
var state_31745__$1 = state_31745;
var statearr_31772_32917 = state_31745__$1;
(statearr_31772_32917[(2)] = inst_31709);

(statearr_31772_32917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (9))){
var inst_31699 = (state_31745[(14)]);
var inst_31690 = (state_31745[(15)]);
var inst_31716 = (state_31745[(19)]);
var inst_31716__$1 = (inst_31690.cljs$core$IFn$_invoke$arity$1 ? inst_31690.cljs$core$IFn$_invoke$arity$1(inst_31699) : inst_31690.call(null,inst_31699));
var state_31745__$1 = (function (){var statearr_31773 = state_31745;
(statearr_31773[(19)] = inst_31716__$1);

return statearr_31773;
})();
if(cljs.core.truth_(inst_31716__$1)){
var statearr_31774_32918 = state_31745__$1;
(statearr_31774_32918[(1)] = (14));

} else {
var statearr_31775_32919 = state_31745__$1;
(statearr_31775_32919[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (5))){
var inst_31700 = (state_31745[(13)]);
var state_31745__$1 = state_31745;
var statearr_31776_32920 = state_31745__$1;
(statearr_31776_32920[(2)] = inst_31700);

(statearr_31776_32920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (14))){
var inst_31716 = (state_31745[(19)]);
var state_31745__$1 = state_31745;
var statearr_31777_32921 = state_31745__$1;
(statearr_31777_32921[(2)] = inst_31716);

(statearr_31777_32921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (26))){
var inst_31735 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
var statearr_31778_32922 = state_31745__$1;
(statearr_31778_32922[(2)] = inst_31735);

(statearr_31778_32922[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (16))){
var inst_31727 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
if(cljs.core.truth_(inst_31727)){
var statearr_31779_32923 = state_31745__$1;
(statearr_31779_32923[(1)] = (20));

} else {
var statearr_31780_32924 = state_31745__$1;
(statearr_31780_32924[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (10))){
var inst_31741 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
var statearr_31781_32925 = state_31745__$1;
(statearr_31781_32925[(2)] = inst_31741);

(statearr_31781_32925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (18))){
var inst_31719 = (state_31745[(16)]);
var state_31745__$1 = state_31745;
var statearr_31782_32926 = state_31745__$1;
(statearr_31782_32926[(2)] = inst_31719);

(statearr_31782_32926[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (8))){
var inst_31698 = (state_31745[(7)]);
var inst_31707 = (inst_31698 == null);
var state_31745__$1 = state_31745;
if(cljs.core.truth_(inst_31707)){
var statearr_31783_32927 = state_31745__$1;
(statearr_31783_32927[(1)] = (11));

} else {
var statearr_31784_32928 = state_31745__$1;
(statearr_31784_32928[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30509__auto__ = null;
var cljs$core$async$mix_$_state_machine__30509__auto____0 = (function (){
var statearr_31785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31785[(0)] = cljs$core$async$mix_$_state_machine__30509__auto__);

(statearr_31785[(1)] = (1));

return statearr_31785;
});
var cljs$core$async$mix_$_state_machine__30509__auto____1 = (function (state_31745){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31745);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31786){var ex__30512__auto__ = e31786;
var statearr_31787_32929 = state_31745;
(statearr_31787_32929[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31745[(4)]))){
var statearr_31788_32930 = state_31745;
(statearr_31788_32930[(1)] = cljs.core.first((state_31745[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32931 = state_31745;
state_31745 = G__32931;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30509__auto__ = function(state_31745){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30509__auto____1.call(this,state_31745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30509__auto____0;
cljs$core$async$mix_$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30509__auto____1;
return cljs$core$async$mix_$_state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31789 = f__30661__auto__();
(statearr_31789[(6)] = c__30660__auto___32898);

return statearr_31789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32932 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32932(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32933 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32933(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32934 = (function() {
var G__32935 = null;
var G__32935__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32935__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32935 = function(p,v){
switch(arguments.length){
case 1:
return G__32935__1.call(this,p);
case 2:
return G__32935__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32935.cljs$core$IFn$_invoke$arity$1 = G__32935__1;
G__32935.cljs$core$IFn$_invoke$arity$2 = G__32935__2;
return G__32935;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31791 = arguments.length;
switch (G__31791) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32934(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32934(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31794 = arguments.length;
switch (G__31794) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31792_SHARP_){
if(cljs.core.truth_((p1__31792_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31792_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31792_SHARP_.call(null,topic)))){
return p1__31792_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31792_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31795 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31796){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31796 = meta31796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31797,meta31796__$1){
var self__ = this;
var _31797__$1 = this;
return (new cljs.core.async.t_cljs$core$async31795(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31796__$1));
}));

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31797){
var self__ = this;
var _31797__$1 = this;
return self__.meta31796;
}));

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31795.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31796","meta31796",1130878796,null)], null);
}));

(cljs.core.async.t_cljs$core$async31795.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31795");

(cljs.core.async.t_cljs$core$async31795.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31795");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31795.
 */
cljs.core.async.__GT_t_cljs$core$async31795 = (function cljs$core$async$__GT_t_cljs$core$async31795(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31796){
return (new cljs.core.async.t_cljs$core$async31795(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31796));
});

}

return (new cljs.core.async.t_cljs$core$async31795(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30660__auto___32938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31869){
var state_val_31870 = (state_31869[(1)]);
if((state_val_31870 === (7))){
var inst_31865 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31871_32939 = state_31869__$1;
(statearr_31871_32939[(2)] = inst_31865);

(statearr_31871_32939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (20))){
var state_31869__$1 = state_31869;
var statearr_31872_32940 = state_31869__$1;
(statearr_31872_32940[(2)] = null);

(statearr_31872_32940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (1))){
var state_31869__$1 = state_31869;
var statearr_31873_32941 = state_31869__$1;
(statearr_31873_32941[(2)] = null);

(statearr_31873_32941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (24))){
var inst_31848 = (state_31869[(7)]);
var inst_31857 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31848);
var state_31869__$1 = state_31869;
var statearr_31874_32942 = state_31869__$1;
(statearr_31874_32942[(2)] = inst_31857);

(statearr_31874_32942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (4))){
var inst_31800 = (state_31869[(8)]);
var inst_31800__$1 = (state_31869[(2)]);
var inst_31801 = (inst_31800__$1 == null);
var state_31869__$1 = (function (){var statearr_31875 = state_31869;
(statearr_31875[(8)] = inst_31800__$1);

return statearr_31875;
})();
if(cljs.core.truth_(inst_31801)){
var statearr_31876_32943 = state_31869__$1;
(statearr_31876_32943[(1)] = (5));

} else {
var statearr_31877_32944 = state_31869__$1;
(statearr_31877_32944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (15))){
var inst_31842 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31878_32945 = state_31869__$1;
(statearr_31878_32945[(2)] = inst_31842);

(statearr_31878_32945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (21))){
var inst_31862 = (state_31869[(2)]);
var state_31869__$1 = (function (){var statearr_31879 = state_31869;
(statearr_31879[(9)] = inst_31862);

return statearr_31879;
})();
var statearr_31880_32946 = state_31869__$1;
(statearr_31880_32946[(2)] = null);

(statearr_31880_32946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (13))){
var inst_31824 = (state_31869[(10)]);
var inst_31826 = cljs.core.chunked_seq_QMARK_(inst_31824);
var state_31869__$1 = state_31869;
if(inst_31826){
var statearr_31881_32947 = state_31869__$1;
(statearr_31881_32947[(1)] = (16));

} else {
var statearr_31882_32948 = state_31869__$1;
(statearr_31882_32948[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (22))){
var inst_31854 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
if(cljs.core.truth_(inst_31854)){
var statearr_31883_32949 = state_31869__$1;
(statearr_31883_32949[(1)] = (23));

} else {
var statearr_31884_32950 = state_31869__$1;
(statearr_31884_32950[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (6))){
var inst_31850 = (state_31869[(11)]);
var inst_31800 = (state_31869[(8)]);
var inst_31848 = (state_31869[(7)]);
var inst_31848__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31800) : topic_fn.call(null,inst_31800));
var inst_31849 = cljs.core.deref(mults);
var inst_31850__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31849,inst_31848__$1);
var state_31869__$1 = (function (){var statearr_31885 = state_31869;
(statearr_31885[(11)] = inst_31850__$1);

(statearr_31885[(7)] = inst_31848__$1);

return statearr_31885;
})();
if(cljs.core.truth_(inst_31850__$1)){
var statearr_31886_32951 = state_31869__$1;
(statearr_31886_32951[(1)] = (19));

} else {
var statearr_31887_32952 = state_31869__$1;
(statearr_31887_32952[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (25))){
var inst_31859 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31888_32953 = state_31869__$1;
(statearr_31888_32953[(2)] = inst_31859);

(statearr_31888_32953[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (17))){
var inst_31824 = (state_31869[(10)]);
var inst_31833 = cljs.core.first(inst_31824);
var inst_31834 = cljs.core.async.muxch_STAR_(inst_31833);
var inst_31835 = cljs.core.async.close_BANG_(inst_31834);
var inst_31836 = cljs.core.next(inst_31824);
var inst_31810 = inst_31836;
var inst_31811 = null;
var inst_31812 = (0);
var inst_31813 = (0);
var state_31869__$1 = (function (){var statearr_31889 = state_31869;
(statearr_31889[(12)] = inst_31813);

(statearr_31889[(13)] = inst_31810);

(statearr_31889[(14)] = inst_31811);

(statearr_31889[(15)] = inst_31812);

(statearr_31889[(16)] = inst_31835);

return statearr_31889;
})();
var statearr_31890_32954 = state_31869__$1;
(statearr_31890_32954[(2)] = null);

(statearr_31890_32954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (3))){
var inst_31867 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31869__$1,inst_31867);
} else {
if((state_val_31870 === (12))){
var inst_31844 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31891_32955 = state_31869__$1;
(statearr_31891_32955[(2)] = inst_31844);

(statearr_31891_32955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (2))){
var state_31869__$1 = state_31869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31869__$1,(4),ch);
} else {
if((state_val_31870 === (23))){
var state_31869__$1 = state_31869;
var statearr_31892_32956 = state_31869__$1;
(statearr_31892_32956[(2)] = null);

(statearr_31892_32956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (19))){
var inst_31850 = (state_31869[(11)]);
var inst_31800 = (state_31869[(8)]);
var inst_31852 = cljs.core.async.muxch_STAR_(inst_31850);
var state_31869__$1 = state_31869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31869__$1,(22),inst_31852,inst_31800);
} else {
if((state_val_31870 === (11))){
var inst_31810 = (state_31869[(13)]);
var inst_31824 = (state_31869[(10)]);
var inst_31824__$1 = cljs.core.seq(inst_31810);
var state_31869__$1 = (function (){var statearr_31893 = state_31869;
(statearr_31893[(10)] = inst_31824__$1);

return statearr_31893;
})();
if(inst_31824__$1){
var statearr_31894_32961 = state_31869__$1;
(statearr_31894_32961[(1)] = (13));

} else {
var statearr_31895_32962 = state_31869__$1;
(statearr_31895_32962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (9))){
var inst_31846 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31896_32963 = state_31869__$1;
(statearr_31896_32963[(2)] = inst_31846);

(statearr_31896_32963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (5))){
var inst_31807 = cljs.core.deref(mults);
var inst_31808 = cljs.core.vals(inst_31807);
var inst_31809 = cljs.core.seq(inst_31808);
var inst_31810 = inst_31809;
var inst_31811 = null;
var inst_31812 = (0);
var inst_31813 = (0);
var state_31869__$1 = (function (){var statearr_31897 = state_31869;
(statearr_31897[(12)] = inst_31813);

(statearr_31897[(13)] = inst_31810);

(statearr_31897[(14)] = inst_31811);

(statearr_31897[(15)] = inst_31812);

return statearr_31897;
})();
var statearr_31898_32964 = state_31869__$1;
(statearr_31898_32964[(2)] = null);

(statearr_31898_32964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (14))){
var state_31869__$1 = state_31869;
var statearr_31902_32965 = state_31869__$1;
(statearr_31902_32965[(2)] = null);

(statearr_31902_32965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (16))){
var inst_31824 = (state_31869[(10)]);
var inst_31828 = cljs.core.chunk_first(inst_31824);
var inst_31829 = cljs.core.chunk_rest(inst_31824);
var inst_31830 = cljs.core.count(inst_31828);
var inst_31810 = inst_31829;
var inst_31811 = inst_31828;
var inst_31812 = inst_31830;
var inst_31813 = (0);
var state_31869__$1 = (function (){var statearr_31903 = state_31869;
(statearr_31903[(12)] = inst_31813);

(statearr_31903[(13)] = inst_31810);

(statearr_31903[(14)] = inst_31811);

(statearr_31903[(15)] = inst_31812);

return statearr_31903;
})();
var statearr_31904_32966 = state_31869__$1;
(statearr_31904_32966[(2)] = null);

(statearr_31904_32966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (10))){
var inst_31813 = (state_31869[(12)]);
var inst_31810 = (state_31869[(13)]);
var inst_31811 = (state_31869[(14)]);
var inst_31812 = (state_31869[(15)]);
var inst_31818 = cljs.core._nth(inst_31811,inst_31813);
var inst_31819 = cljs.core.async.muxch_STAR_(inst_31818);
var inst_31820 = cljs.core.async.close_BANG_(inst_31819);
var inst_31821 = (inst_31813 + (1));
var tmp31899 = inst_31810;
var tmp31900 = inst_31811;
var tmp31901 = inst_31812;
var inst_31810__$1 = tmp31899;
var inst_31811__$1 = tmp31900;
var inst_31812__$1 = tmp31901;
var inst_31813__$1 = inst_31821;
var state_31869__$1 = (function (){var statearr_31905 = state_31869;
(statearr_31905[(12)] = inst_31813__$1);

(statearr_31905[(13)] = inst_31810__$1);

(statearr_31905[(14)] = inst_31811__$1);

(statearr_31905[(17)] = inst_31820);

(statearr_31905[(15)] = inst_31812__$1);

return statearr_31905;
})();
var statearr_31906_32967 = state_31869__$1;
(statearr_31906_32967[(2)] = null);

(statearr_31906_32967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (18))){
var inst_31839 = (state_31869[(2)]);
var state_31869__$1 = state_31869;
var statearr_31907_32968 = state_31869__$1;
(statearr_31907_32968[(2)] = inst_31839);

(statearr_31907_32968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31870 === (8))){
var inst_31813 = (state_31869[(12)]);
var inst_31812 = (state_31869[(15)]);
var inst_31815 = (inst_31813 < inst_31812);
var inst_31816 = inst_31815;
var state_31869__$1 = state_31869;
if(cljs.core.truth_(inst_31816)){
var statearr_31908_32969 = state_31869__$1;
(statearr_31908_32969[(1)] = (10));

} else {
var statearr_31909_32970 = state_31869__$1;
(statearr_31909_32970[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_31910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31910[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_31910[(1)] = (1));

return statearr_31910;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_31869){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31869);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31911){var ex__30512__auto__ = e31911;
var statearr_31912_32971 = state_31869;
(statearr_31912_32971[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31869[(4)]))){
var statearr_31913_32972 = state_31869;
(statearr_31913_32972[(1)] = cljs.core.first((state_31869[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32973 = state_31869;
state_31869 = G__32973;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_31869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_31869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31914 = f__30661__auto__();
(statearr_31914[(6)] = c__30660__auto___32938);

return statearr_31914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31916 = arguments.length;
switch (G__31916) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31918 = arguments.length;
switch (G__31918) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31920 = arguments.length;
switch (G__31920) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30660__auto___32977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_31963){
var state_val_31964 = (state_31963[(1)]);
if((state_val_31964 === (7))){
var state_31963__$1 = state_31963;
var statearr_31965_32978 = state_31963__$1;
(statearr_31965_32978[(2)] = null);

(statearr_31965_32978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (1))){
var state_31963__$1 = state_31963;
var statearr_31966_32979 = state_31963__$1;
(statearr_31966_32979[(2)] = null);

(statearr_31966_32979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (4))){
var inst_31923 = (state_31963[(7)]);
var inst_31924 = (state_31963[(8)]);
var inst_31926 = (inst_31924 < inst_31923);
var state_31963__$1 = state_31963;
if(cljs.core.truth_(inst_31926)){
var statearr_31967_32980 = state_31963__$1;
(statearr_31967_32980[(1)] = (6));

} else {
var statearr_31968_32981 = state_31963__$1;
(statearr_31968_32981[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (15))){
var inst_31949 = (state_31963[(9)]);
var inst_31954 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31949);
var state_31963__$1 = state_31963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31963__$1,(17),out,inst_31954);
} else {
if((state_val_31964 === (13))){
var inst_31949 = (state_31963[(9)]);
var inst_31949__$1 = (state_31963[(2)]);
var inst_31950 = cljs.core.some(cljs.core.nil_QMARK_,inst_31949__$1);
var state_31963__$1 = (function (){var statearr_31969 = state_31963;
(statearr_31969[(9)] = inst_31949__$1);

return statearr_31969;
})();
if(cljs.core.truth_(inst_31950)){
var statearr_31970_32982 = state_31963__$1;
(statearr_31970_32982[(1)] = (14));

} else {
var statearr_31971_32983 = state_31963__$1;
(statearr_31971_32983[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (6))){
var state_31963__$1 = state_31963;
var statearr_31972_32985 = state_31963__$1;
(statearr_31972_32985[(2)] = null);

(statearr_31972_32985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (17))){
var inst_31956 = (state_31963[(2)]);
var state_31963__$1 = (function (){var statearr_31974 = state_31963;
(statearr_31974[(10)] = inst_31956);

return statearr_31974;
})();
var statearr_31975_32986 = state_31963__$1;
(statearr_31975_32986[(2)] = null);

(statearr_31975_32986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (3))){
var inst_31961 = (state_31963[(2)]);
var state_31963__$1 = state_31963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31963__$1,inst_31961);
} else {
if((state_val_31964 === (12))){
var _ = (function (){var statearr_31976 = state_31963;
(statearr_31976[(4)] = cljs.core.rest((state_31963[(4)])));

return statearr_31976;
})();
var state_31963__$1 = state_31963;
var ex31973 = (state_31963__$1[(2)]);
var statearr_31977_32988 = state_31963__$1;
(statearr_31977_32988[(5)] = ex31973);


if((ex31973 instanceof Object)){
var statearr_31978_32989 = state_31963__$1;
(statearr_31978_32989[(1)] = (11));

(statearr_31978_32989[(5)] = null);

} else {
throw ex31973;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (2))){
var inst_31922 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31923 = cnt;
var inst_31924 = (0);
var state_31963__$1 = (function (){var statearr_31979 = state_31963;
(statearr_31979[(7)] = inst_31923);

(statearr_31979[(11)] = inst_31922);

(statearr_31979[(8)] = inst_31924);

return statearr_31979;
})();
var statearr_31980_32993 = state_31963__$1;
(statearr_31980_32993[(2)] = null);

(statearr_31980_32993[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (11))){
var inst_31928 = (state_31963[(2)]);
var inst_31929 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31963__$1 = (function (){var statearr_31981 = state_31963;
(statearr_31981[(12)] = inst_31928);

return statearr_31981;
})();
var statearr_31982_32994 = state_31963__$1;
(statearr_31982_32994[(2)] = inst_31929);

(statearr_31982_32994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (9))){
var inst_31924 = (state_31963[(8)]);
var _ = (function (){var statearr_31983 = state_31963;
(statearr_31983[(4)] = cljs.core.cons((12),(state_31963[(4)])));

return statearr_31983;
})();
var inst_31935 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31924) : chs__$1.call(null,inst_31924));
var inst_31936 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31924) : done.call(null,inst_31924));
var inst_31937 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31935,inst_31936);
var ___$1 = (function (){var statearr_31984 = state_31963;
(statearr_31984[(4)] = cljs.core.rest((state_31963[(4)])));

return statearr_31984;
})();
var state_31963__$1 = state_31963;
var statearr_31985_32996 = state_31963__$1;
(statearr_31985_32996[(2)] = inst_31937);

(statearr_31985_32996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (5))){
var inst_31947 = (state_31963[(2)]);
var state_31963__$1 = (function (){var statearr_31986 = state_31963;
(statearr_31986[(13)] = inst_31947);

return statearr_31986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31963__$1,(13),dchan);
} else {
if((state_val_31964 === (14))){
var inst_31952 = cljs.core.async.close_BANG_(out);
var state_31963__$1 = state_31963;
var statearr_31987_32997 = state_31963__$1;
(statearr_31987_32997[(2)] = inst_31952);

(statearr_31987_32997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (16))){
var inst_31959 = (state_31963[(2)]);
var state_31963__$1 = state_31963;
var statearr_31988_32998 = state_31963__$1;
(statearr_31988_32998[(2)] = inst_31959);

(statearr_31988_32998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (10))){
var inst_31924 = (state_31963[(8)]);
var inst_31940 = (state_31963[(2)]);
var inst_31941 = (inst_31924 + (1));
var inst_31924__$1 = inst_31941;
var state_31963__$1 = (function (){var statearr_31989 = state_31963;
(statearr_31989[(14)] = inst_31940);

(statearr_31989[(8)] = inst_31924__$1);

return statearr_31989;
})();
var statearr_31990_32999 = state_31963__$1;
(statearr_31990_32999[(2)] = null);

(statearr_31990_32999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31964 === (8))){
var inst_31945 = (state_31963[(2)]);
var state_31963__$1 = state_31963;
var statearr_31991_33001 = state_31963__$1;
(statearr_31991_33001[(2)] = inst_31945);

(statearr_31991_33001[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_31992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31992[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_31992[(1)] = (1));

return statearr_31992;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_31963){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_31963);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e31993){var ex__30512__auto__ = e31993;
var statearr_31994_33003 = state_31963;
(statearr_31994_33003[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_31963[(4)]))){
var statearr_31995_33004 = state_31963;
(statearr_31995_33004[(1)] = cljs.core.first((state_31963[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33005 = state_31963;
state_31963 = G__33005;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_31963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_31963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_31996 = f__30661__auto__();
(statearr_31996[(6)] = c__30660__auto___32977);

return statearr_31996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31999 = arguments.length;
switch (G__31999) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30660__auto___33007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_32031){
var state_val_32032 = (state_32031[(1)]);
if((state_val_32032 === (7))){
var inst_32011 = (state_32031[(7)]);
var inst_32010 = (state_32031[(8)]);
var inst_32010__$1 = (state_32031[(2)]);
var inst_32011__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32010__$1,(0),null);
var inst_32012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32010__$1,(1),null);
var inst_32013 = (inst_32011__$1 == null);
var state_32031__$1 = (function (){var statearr_32033 = state_32031;
(statearr_32033[(7)] = inst_32011__$1);

(statearr_32033[(9)] = inst_32012);

(statearr_32033[(8)] = inst_32010__$1);

return statearr_32033;
})();
if(cljs.core.truth_(inst_32013)){
var statearr_32034_33008 = state_32031__$1;
(statearr_32034_33008[(1)] = (8));

} else {
var statearr_32035_33009 = state_32031__$1;
(statearr_32035_33009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (1))){
var inst_32000 = cljs.core.vec(chs);
var inst_32001 = inst_32000;
var state_32031__$1 = (function (){var statearr_32036 = state_32031;
(statearr_32036[(10)] = inst_32001);

return statearr_32036;
})();
var statearr_32037_33010 = state_32031__$1;
(statearr_32037_33010[(2)] = null);

(statearr_32037_33010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (4))){
var inst_32001 = (state_32031[(10)]);
var state_32031__$1 = state_32031;
return cljs.core.async.ioc_alts_BANG_(state_32031__$1,(7),inst_32001);
} else {
if((state_val_32032 === (6))){
var inst_32027 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32038_33011 = state_32031__$1;
(statearr_32038_33011[(2)] = inst_32027);

(statearr_32038_33011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (3))){
var inst_32029 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32031__$1,inst_32029);
} else {
if((state_val_32032 === (2))){
var inst_32001 = (state_32031[(10)]);
var inst_32003 = cljs.core.count(inst_32001);
var inst_32004 = (inst_32003 > (0));
var state_32031__$1 = state_32031;
if(cljs.core.truth_(inst_32004)){
var statearr_32040_33012 = state_32031__$1;
(statearr_32040_33012[(1)] = (4));

} else {
var statearr_32041_33013 = state_32031__$1;
(statearr_32041_33013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (11))){
var inst_32001 = (state_32031[(10)]);
var inst_32020 = (state_32031[(2)]);
var tmp32039 = inst_32001;
var inst_32001__$1 = tmp32039;
var state_32031__$1 = (function (){var statearr_32042 = state_32031;
(statearr_32042[(11)] = inst_32020);

(statearr_32042[(10)] = inst_32001__$1);

return statearr_32042;
})();
var statearr_32043_33014 = state_32031__$1;
(statearr_32043_33014[(2)] = null);

(statearr_32043_33014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (9))){
var inst_32011 = (state_32031[(7)]);
var state_32031__$1 = state_32031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32031__$1,(11),out,inst_32011);
} else {
if((state_val_32032 === (5))){
var inst_32025 = cljs.core.async.close_BANG_(out);
var state_32031__$1 = state_32031;
var statearr_32044_33015 = state_32031__$1;
(statearr_32044_33015[(2)] = inst_32025);

(statearr_32044_33015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (10))){
var inst_32023 = (state_32031[(2)]);
var state_32031__$1 = state_32031;
var statearr_32045_33016 = state_32031__$1;
(statearr_32045_33016[(2)] = inst_32023);

(statearr_32045_33016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32032 === (8))){
var inst_32011 = (state_32031[(7)]);
var inst_32001 = (state_32031[(10)]);
var inst_32012 = (state_32031[(9)]);
var inst_32010 = (state_32031[(8)]);
var inst_32015 = (function (){var cs = inst_32001;
var vec__32006 = inst_32010;
var v = inst_32011;
var c = inst_32012;
return (function (p1__31997_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31997_SHARP_);
});
})();
var inst_32016 = cljs.core.filterv(inst_32015,inst_32001);
var inst_32001__$1 = inst_32016;
var state_32031__$1 = (function (){var statearr_32046 = state_32031;
(statearr_32046[(10)] = inst_32001__$1);

return statearr_32046;
})();
var statearr_32047_33017 = state_32031__$1;
(statearr_32047_33017[(2)] = null);

(statearr_32047_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_32048 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32048[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_32048[(1)] = (1));

return statearr_32048;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_32031){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_32031);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e32049){var ex__30512__auto__ = e32049;
var statearr_32050_33018 = state_32031;
(statearr_32050_33018[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_32031[(4)]))){
var statearr_32051_33019 = state_32031;
(statearr_32051_33019[(1)] = cljs.core.first((state_32031[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33020 = state_32031;
state_32031 = G__33020;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_32031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_32031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_32052 = f__30661__auto__();
(statearr_32052[(6)] = c__30660__auto___33007);

return statearr_32052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32054 = arguments.length;
switch (G__32054) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30660__auto___33022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_32078){
var state_val_32079 = (state_32078[(1)]);
if((state_val_32079 === (7))){
var inst_32060 = (state_32078[(7)]);
var inst_32060__$1 = (state_32078[(2)]);
var inst_32061 = (inst_32060__$1 == null);
var inst_32062 = cljs.core.not(inst_32061);
var state_32078__$1 = (function (){var statearr_32080 = state_32078;
(statearr_32080[(7)] = inst_32060__$1);

return statearr_32080;
})();
if(inst_32062){
var statearr_32081_33023 = state_32078__$1;
(statearr_32081_33023[(1)] = (8));

} else {
var statearr_32082_33024 = state_32078__$1;
(statearr_32082_33024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (1))){
var inst_32055 = (0);
var state_32078__$1 = (function (){var statearr_32083 = state_32078;
(statearr_32083[(8)] = inst_32055);

return statearr_32083;
})();
var statearr_32084_33025 = state_32078__$1;
(statearr_32084_33025[(2)] = null);

(statearr_32084_33025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (4))){
var state_32078__$1 = state_32078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32078__$1,(7),ch);
} else {
if((state_val_32079 === (6))){
var inst_32073 = (state_32078[(2)]);
var state_32078__$1 = state_32078;
var statearr_32085_33026 = state_32078__$1;
(statearr_32085_33026[(2)] = inst_32073);

(statearr_32085_33026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (3))){
var inst_32075 = (state_32078[(2)]);
var inst_32076 = cljs.core.async.close_BANG_(out);
var state_32078__$1 = (function (){var statearr_32086 = state_32078;
(statearr_32086[(9)] = inst_32075);

return statearr_32086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32078__$1,inst_32076);
} else {
if((state_val_32079 === (2))){
var inst_32055 = (state_32078[(8)]);
var inst_32057 = (inst_32055 < n);
var state_32078__$1 = state_32078;
if(cljs.core.truth_(inst_32057)){
var statearr_32087_33027 = state_32078__$1;
(statearr_32087_33027[(1)] = (4));

} else {
var statearr_32088_33028 = state_32078__$1;
(statearr_32088_33028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (11))){
var inst_32055 = (state_32078[(8)]);
var inst_32065 = (state_32078[(2)]);
var inst_32066 = (inst_32055 + (1));
var inst_32055__$1 = inst_32066;
var state_32078__$1 = (function (){var statearr_32089 = state_32078;
(statearr_32089[(10)] = inst_32065);

(statearr_32089[(8)] = inst_32055__$1);

return statearr_32089;
})();
var statearr_32090_33029 = state_32078__$1;
(statearr_32090_33029[(2)] = null);

(statearr_32090_33029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (9))){
var state_32078__$1 = state_32078;
var statearr_32091_33030 = state_32078__$1;
(statearr_32091_33030[(2)] = null);

(statearr_32091_33030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (5))){
var state_32078__$1 = state_32078;
var statearr_32092_33031 = state_32078__$1;
(statearr_32092_33031[(2)] = null);

(statearr_32092_33031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (10))){
var inst_32070 = (state_32078[(2)]);
var state_32078__$1 = state_32078;
var statearr_32093_33032 = state_32078__$1;
(statearr_32093_33032[(2)] = inst_32070);

(statearr_32093_33032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32079 === (8))){
var inst_32060 = (state_32078[(7)]);
var state_32078__$1 = state_32078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32078__$1,(11),out,inst_32060);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_32094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32094[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_32094[(1)] = (1));

return statearr_32094;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_32078){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_32078);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e32095){var ex__30512__auto__ = e32095;
var statearr_32096_33033 = state_32078;
(statearr_32096_33033[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_32078[(4)]))){
var statearr_32097_33034 = state_32078;
(statearr_32097_33034[(1)] = cljs.core.first((state_32078[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33035 = state_32078;
state_32078 = G__33035;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_32078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_32078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_32098 = f__30661__auto__();
(statearr_32098[(6)] = c__30660__auto___33022);

return statearr_32098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32100 = (function (f,ch,meta32101){
this.f = f;
this.ch = ch;
this.meta32101 = meta32101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32102,meta32101__$1){
var self__ = this;
var _32102__$1 = this;
return (new cljs.core.async.t_cljs$core$async32100(self__.f,self__.ch,meta32101__$1));
}));

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32102){
var self__ = this;
var _32102__$1 = this;
return self__.meta32101;
}));

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32103 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32103 = (function (f,ch,meta32101,_,fn1,meta32104){
this.f = f;
this.ch = ch;
this.meta32101 = meta32101;
this._ = _;
this.fn1 = fn1;
this.meta32104 = meta32104;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32105,meta32104__$1){
var self__ = this;
var _32105__$1 = this;
return (new cljs.core.async.t_cljs$core$async32103(self__.f,self__.ch,self__.meta32101,self__._,self__.fn1,meta32104__$1));
}));

(cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32105){
var self__ = this;
var _32105__$1 = this;
return self__.meta32104;
}));

(cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32099_SHARP_){
var G__32106 = (((p1__32099_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32099_SHARP_) : self__.f.call(null,p1__32099_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32106) : f1.call(null,G__32106));
});
}));

(cljs.core.async.t_cljs$core$async32103.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32101","meta32101",-1806764896,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32100","cljs.core.async/t_cljs$core$async32100",-77620878,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32104","meta32104",-1397527396,null)], null);
}));

(cljs.core.async.t_cljs$core$async32103.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32103.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32103");

(cljs.core.async.t_cljs$core$async32103.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32103");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32103.
 */
cljs.core.async.__GT_t_cljs$core$async32103 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32103(f__$1,ch__$1,meta32101__$1,___$2,fn1__$1,meta32104){
return (new cljs.core.async.t_cljs$core$async32103(f__$1,ch__$1,meta32101__$1,___$2,fn1__$1,meta32104));
});

}

return (new cljs.core.async.t_cljs$core$async32103(self__.f,self__.ch,self__.meta32101,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32107 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32107) : self__.f.call(null,G__32107));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32100.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32101","meta32101",-1806764896,null)], null);
}));

(cljs.core.async.t_cljs$core$async32100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32100");

(cljs.core.async.t_cljs$core$async32100.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32100.
 */
cljs.core.async.__GT_t_cljs$core$async32100 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32100(f__$1,ch__$1,meta32101){
return (new cljs.core.async.t_cljs$core$async32100(f__$1,ch__$1,meta32101));
});

}

return (new cljs.core.async.t_cljs$core$async32100(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32108 = (function (f,ch,meta32109){
this.f = f;
this.ch = ch;
this.meta32109 = meta32109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32110,meta32109__$1){
var self__ = this;
var _32110__$1 = this;
return (new cljs.core.async.t_cljs$core$async32108(self__.f,self__.ch,meta32109__$1));
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32110){
var self__ = this;
var _32110__$1 = this;
return self__.meta32109;
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32109","meta32109",-2050790094,null)], null);
}));

(cljs.core.async.t_cljs$core$async32108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32108");

(cljs.core.async.t_cljs$core$async32108.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32108.
 */
cljs.core.async.__GT_t_cljs$core$async32108 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32108(f__$1,ch__$1,meta32109){
return (new cljs.core.async.t_cljs$core$async32108(f__$1,ch__$1,meta32109));
});

}

return (new cljs.core.async.t_cljs$core$async32108(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32111 = (function (p,ch,meta32112){
this.p = p;
this.ch = ch;
this.meta32112 = meta32112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32113,meta32112__$1){
var self__ = this;
var _32113__$1 = this;
return (new cljs.core.async.t_cljs$core$async32111(self__.p,self__.ch,meta32112__$1));
}));

(cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32113){
var self__ = this;
var _32113__$1 = this;
return self__.meta32112;
}));

(cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32112","meta32112",-525999717,null)], null);
}));

(cljs.core.async.t_cljs$core$async32111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32111");

(cljs.core.async.t_cljs$core$async32111.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32111.
 */
cljs.core.async.__GT_t_cljs$core$async32111 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32111(p__$1,ch__$1,meta32112){
return (new cljs.core.async.t_cljs$core$async32111(p__$1,ch__$1,meta32112));
});

}

return (new cljs.core.async.t_cljs$core$async32111(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32115 = arguments.length;
switch (G__32115) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30660__auto___33058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_32136){
var state_val_32137 = (state_32136[(1)]);
if((state_val_32137 === (7))){
var inst_32132 = (state_32136[(2)]);
var state_32136__$1 = state_32136;
var statearr_32138_33059 = state_32136__$1;
(statearr_32138_33059[(2)] = inst_32132);

(statearr_32138_33059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (1))){
var state_32136__$1 = state_32136;
var statearr_32139_33060 = state_32136__$1;
(statearr_32139_33060[(2)] = null);

(statearr_32139_33060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (4))){
var inst_32118 = (state_32136[(7)]);
var inst_32118__$1 = (state_32136[(2)]);
var inst_32119 = (inst_32118__$1 == null);
var state_32136__$1 = (function (){var statearr_32140 = state_32136;
(statearr_32140[(7)] = inst_32118__$1);

return statearr_32140;
})();
if(cljs.core.truth_(inst_32119)){
var statearr_32141_33061 = state_32136__$1;
(statearr_32141_33061[(1)] = (5));

} else {
var statearr_32142_33062 = state_32136__$1;
(statearr_32142_33062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (6))){
var inst_32118 = (state_32136[(7)]);
var inst_32123 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32118) : p.call(null,inst_32118));
var state_32136__$1 = state_32136;
if(cljs.core.truth_(inst_32123)){
var statearr_32143_33063 = state_32136__$1;
(statearr_32143_33063[(1)] = (8));

} else {
var statearr_32144_33064 = state_32136__$1;
(statearr_32144_33064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (3))){
var inst_32134 = (state_32136[(2)]);
var state_32136__$1 = state_32136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32136__$1,inst_32134);
} else {
if((state_val_32137 === (2))){
var state_32136__$1 = state_32136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32136__$1,(4),ch);
} else {
if((state_val_32137 === (11))){
var inst_32126 = (state_32136[(2)]);
var state_32136__$1 = state_32136;
var statearr_32145_33065 = state_32136__$1;
(statearr_32145_33065[(2)] = inst_32126);

(statearr_32145_33065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (9))){
var state_32136__$1 = state_32136;
var statearr_32146_33066 = state_32136__$1;
(statearr_32146_33066[(2)] = null);

(statearr_32146_33066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (5))){
var inst_32121 = cljs.core.async.close_BANG_(out);
var state_32136__$1 = state_32136;
var statearr_32147_33067 = state_32136__$1;
(statearr_32147_33067[(2)] = inst_32121);

(statearr_32147_33067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (10))){
var inst_32129 = (state_32136[(2)]);
var state_32136__$1 = (function (){var statearr_32148 = state_32136;
(statearr_32148[(8)] = inst_32129);

return statearr_32148;
})();
var statearr_32149_33068 = state_32136__$1;
(statearr_32149_33068[(2)] = null);

(statearr_32149_33068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (8))){
var inst_32118 = (state_32136[(7)]);
var state_32136__$1 = state_32136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32136__$1,(11),out,inst_32118);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_32150 = [null,null,null,null,null,null,null,null,null];
(statearr_32150[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_32150[(1)] = (1));

return statearr_32150;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_32136){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_32136);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e32151){var ex__30512__auto__ = e32151;
var statearr_32152_33069 = state_32136;
(statearr_32152_33069[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_32136[(4)]))){
var statearr_32153_33070 = state_32136;
(statearr_32153_33070[(1)] = cljs.core.first((state_32136[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33071 = state_32136;
state_32136 = G__33071;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_32136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_32136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_32154 = f__30661__auto__();
(statearr_32154[(6)] = c__30660__auto___33058);

return statearr_32154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32156 = arguments.length;
switch (G__32156) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30660__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_32218){
var state_val_32219 = (state_32218[(1)]);
if((state_val_32219 === (7))){
var inst_32214 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32220_33073 = state_32218__$1;
(statearr_32220_33073[(2)] = inst_32214);

(statearr_32220_33073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (20))){
var inst_32184 = (state_32218[(7)]);
var inst_32195 = (state_32218[(2)]);
var inst_32196 = cljs.core.next(inst_32184);
var inst_32170 = inst_32196;
var inst_32171 = null;
var inst_32172 = (0);
var inst_32173 = (0);
var state_32218__$1 = (function (){var statearr_32221 = state_32218;
(statearr_32221[(8)] = inst_32195);

(statearr_32221[(9)] = inst_32173);

(statearr_32221[(10)] = inst_32170);

(statearr_32221[(11)] = inst_32171);

(statearr_32221[(12)] = inst_32172);

return statearr_32221;
})();
var statearr_32222_33074 = state_32218__$1;
(statearr_32222_33074[(2)] = null);

(statearr_32222_33074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (1))){
var state_32218__$1 = state_32218;
var statearr_32223_33075 = state_32218__$1;
(statearr_32223_33075[(2)] = null);

(statearr_32223_33075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (4))){
var inst_32159 = (state_32218[(13)]);
var inst_32159__$1 = (state_32218[(2)]);
var inst_32160 = (inst_32159__$1 == null);
var state_32218__$1 = (function (){var statearr_32224 = state_32218;
(statearr_32224[(13)] = inst_32159__$1);

return statearr_32224;
})();
if(cljs.core.truth_(inst_32160)){
var statearr_32225_33076 = state_32218__$1;
(statearr_32225_33076[(1)] = (5));

} else {
var statearr_32226_33077 = state_32218__$1;
(statearr_32226_33077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (15))){
var state_32218__$1 = state_32218;
var statearr_32230_33078 = state_32218__$1;
(statearr_32230_33078[(2)] = null);

(statearr_32230_33078[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (21))){
var state_32218__$1 = state_32218;
var statearr_32231_33079 = state_32218__$1;
(statearr_32231_33079[(2)] = null);

(statearr_32231_33079[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (13))){
var inst_32173 = (state_32218[(9)]);
var inst_32170 = (state_32218[(10)]);
var inst_32171 = (state_32218[(11)]);
var inst_32172 = (state_32218[(12)]);
var inst_32180 = (state_32218[(2)]);
var inst_32181 = (inst_32173 + (1));
var tmp32227 = inst_32170;
var tmp32228 = inst_32171;
var tmp32229 = inst_32172;
var inst_32170__$1 = tmp32227;
var inst_32171__$1 = tmp32228;
var inst_32172__$1 = tmp32229;
var inst_32173__$1 = inst_32181;
var state_32218__$1 = (function (){var statearr_32232 = state_32218;
(statearr_32232[(9)] = inst_32173__$1);

(statearr_32232[(10)] = inst_32170__$1);

(statearr_32232[(14)] = inst_32180);

(statearr_32232[(11)] = inst_32171__$1);

(statearr_32232[(12)] = inst_32172__$1);

return statearr_32232;
})();
var statearr_32233_33080 = state_32218__$1;
(statearr_32233_33080[(2)] = null);

(statearr_32233_33080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (22))){
var state_32218__$1 = state_32218;
var statearr_32234_33081 = state_32218__$1;
(statearr_32234_33081[(2)] = null);

(statearr_32234_33081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (6))){
var inst_32159 = (state_32218[(13)]);
var inst_32168 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32159) : f.call(null,inst_32159));
var inst_32169 = cljs.core.seq(inst_32168);
var inst_32170 = inst_32169;
var inst_32171 = null;
var inst_32172 = (0);
var inst_32173 = (0);
var state_32218__$1 = (function (){var statearr_32235 = state_32218;
(statearr_32235[(9)] = inst_32173);

(statearr_32235[(10)] = inst_32170);

(statearr_32235[(11)] = inst_32171);

(statearr_32235[(12)] = inst_32172);

return statearr_32235;
})();
var statearr_32236_33082 = state_32218__$1;
(statearr_32236_33082[(2)] = null);

(statearr_32236_33082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (17))){
var inst_32184 = (state_32218[(7)]);
var inst_32188 = cljs.core.chunk_first(inst_32184);
var inst_32189 = cljs.core.chunk_rest(inst_32184);
var inst_32190 = cljs.core.count(inst_32188);
var inst_32170 = inst_32189;
var inst_32171 = inst_32188;
var inst_32172 = inst_32190;
var inst_32173 = (0);
var state_32218__$1 = (function (){var statearr_32237 = state_32218;
(statearr_32237[(9)] = inst_32173);

(statearr_32237[(10)] = inst_32170);

(statearr_32237[(11)] = inst_32171);

(statearr_32237[(12)] = inst_32172);

return statearr_32237;
})();
var statearr_32238_33083 = state_32218__$1;
(statearr_32238_33083[(2)] = null);

(statearr_32238_33083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (3))){
var inst_32216 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32218__$1,inst_32216);
} else {
if((state_val_32219 === (12))){
var inst_32204 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32239_33084 = state_32218__$1;
(statearr_32239_33084[(2)] = inst_32204);

(statearr_32239_33084[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (2))){
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32218__$1,(4),in$);
} else {
if((state_val_32219 === (23))){
var inst_32212 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32240_33085 = state_32218__$1;
(statearr_32240_33085[(2)] = inst_32212);

(statearr_32240_33085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (19))){
var inst_32199 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32241_33086 = state_32218__$1;
(statearr_32241_33086[(2)] = inst_32199);

(statearr_32241_33086[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (11))){
var inst_32184 = (state_32218[(7)]);
var inst_32170 = (state_32218[(10)]);
var inst_32184__$1 = cljs.core.seq(inst_32170);
var state_32218__$1 = (function (){var statearr_32242 = state_32218;
(statearr_32242[(7)] = inst_32184__$1);

return statearr_32242;
})();
if(inst_32184__$1){
var statearr_32243_33087 = state_32218__$1;
(statearr_32243_33087[(1)] = (14));

} else {
var statearr_32244_33088 = state_32218__$1;
(statearr_32244_33088[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (9))){
var inst_32206 = (state_32218[(2)]);
var inst_32207 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32218__$1 = (function (){var statearr_32245 = state_32218;
(statearr_32245[(15)] = inst_32206);

return statearr_32245;
})();
if(cljs.core.truth_(inst_32207)){
var statearr_32246_33091 = state_32218__$1;
(statearr_32246_33091[(1)] = (21));

} else {
var statearr_32247_33092 = state_32218__$1;
(statearr_32247_33092[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (5))){
var inst_32162 = cljs.core.async.close_BANG_(out);
var state_32218__$1 = state_32218;
var statearr_32248_33093 = state_32218__$1;
(statearr_32248_33093[(2)] = inst_32162);

(statearr_32248_33093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (14))){
var inst_32184 = (state_32218[(7)]);
var inst_32186 = cljs.core.chunked_seq_QMARK_(inst_32184);
var state_32218__$1 = state_32218;
if(inst_32186){
var statearr_32249_33094 = state_32218__$1;
(statearr_32249_33094[(1)] = (17));

} else {
var statearr_32250_33095 = state_32218__$1;
(statearr_32250_33095[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (16))){
var inst_32202 = (state_32218[(2)]);
var state_32218__$1 = state_32218;
var statearr_32251_33096 = state_32218__$1;
(statearr_32251_33096[(2)] = inst_32202);

(statearr_32251_33096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32219 === (10))){
var inst_32173 = (state_32218[(9)]);
var inst_32171 = (state_32218[(11)]);
var inst_32178 = cljs.core._nth(inst_32171,inst_32173);
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32218__$1,(13),out,inst_32178);
} else {
if((state_val_32219 === (18))){
var inst_32184 = (state_32218[(7)]);
var inst_32193 = cljs.core.first(inst_32184);
var state_32218__$1 = state_32218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32218__$1,(20),out,inst_32193);
} else {
if((state_val_32219 === (8))){
var inst_32173 = (state_32218[(9)]);
var inst_32172 = (state_32218[(12)]);
var inst_32175 = (inst_32173 < inst_32172);
var inst_32176 = inst_32175;
var state_32218__$1 = state_32218;
if(cljs.core.truth_(inst_32176)){
var statearr_32252_33097 = state_32218__$1;
(statearr_32252_33097[(1)] = (10));

} else {
var statearr_32253_33098 = state_32218__$1;
(statearr_32253_33098[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30509__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30509__auto____0 = (function (){
var statearr_32254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32254[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30509__auto__);

(statearr_32254[(1)] = (1));

return statearr_32254;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30509__auto____1 = (function (state_32218){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_32218);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e32255){var ex__30512__auto__ = e32255;
var statearr_32256_33099 = state_32218;
(statearr_32256_33099[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_32218[(4)]))){
var statearr_32257_33100 = state_32218;
(statearr_32257_33100[(1)] = cljs.core.first((state_32218[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33101 = state_32218;
state_32218 = G__33101;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30509__auto__ = function(state_32218){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30509__auto____1.call(this,state_32218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30509__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30509__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_32258 = f__30661__auto__();
(statearr_32258[(6)] = c__30660__auto__);

return statearr_32258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));

return c__30660__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32260 = arguments.length;
switch (G__32260) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32262 = arguments.length;
switch (G__32262) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32264 = arguments.length;
switch (G__32264) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30660__auto___33129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_32288){
var state_val_32289 = (state_32288[(1)]);
if((state_val_32289 === (7))){
var inst_32283 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
var statearr_32290_33130 = state_32288__$1;
(statearr_32290_33130[(2)] = inst_32283);

(statearr_32290_33130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (1))){
var inst_32265 = null;
var state_32288__$1 = (function (){var statearr_32291 = state_32288;
(statearr_32291[(7)] = inst_32265);

return statearr_32291;
})();
var statearr_32292_33131 = state_32288__$1;
(statearr_32292_33131[(2)] = null);

(statearr_32292_33131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (4))){
var inst_32268 = (state_32288[(8)]);
var inst_32268__$1 = (state_32288[(2)]);
var inst_32269 = (inst_32268__$1 == null);
var inst_32270 = cljs.core.not(inst_32269);
var state_32288__$1 = (function (){var statearr_32293 = state_32288;
(statearr_32293[(8)] = inst_32268__$1);

return statearr_32293;
})();
if(inst_32270){
var statearr_32294_33132 = state_32288__$1;
(statearr_32294_33132[(1)] = (5));

} else {
var statearr_32295_33133 = state_32288__$1;
(statearr_32295_33133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (6))){
var state_32288__$1 = state_32288;
var statearr_32296_33134 = state_32288__$1;
(statearr_32296_33134[(2)] = null);

(statearr_32296_33134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (3))){
var inst_32285 = (state_32288[(2)]);
var inst_32286 = cljs.core.async.close_BANG_(out);
var state_32288__$1 = (function (){var statearr_32297 = state_32288;
(statearr_32297[(9)] = inst_32285);

return statearr_32297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32288__$1,inst_32286);
} else {
if((state_val_32289 === (2))){
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32288__$1,(4),ch);
} else {
if((state_val_32289 === (11))){
var inst_32268 = (state_32288[(8)]);
var inst_32277 = (state_32288[(2)]);
var inst_32265 = inst_32268;
var state_32288__$1 = (function (){var statearr_32298 = state_32288;
(statearr_32298[(10)] = inst_32277);

(statearr_32298[(7)] = inst_32265);

return statearr_32298;
})();
var statearr_32299_33135 = state_32288__$1;
(statearr_32299_33135[(2)] = null);

(statearr_32299_33135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (9))){
var inst_32268 = (state_32288[(8)]);
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32288__$1,(11),out,inst_32268);
} else {
if((state_val_32289 === (5))){
var inst_32265 = (state_32288[(7)]);
var inst_32268 = (state_32288[(8)]);
var inst_32272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32268,inst_32265);
var state_32288__$1 = state_32288;
if(inst_32272){
var statearr_32301_33136 = state_32288__$1;
(statearr_32301_33136[(1)] = (8));

} else {
var statearr_32302_33137 = state_32288__$1;
(statearr_32302_33137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (10))){
var inst_32280 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
var statearr_32303_33138 = state_32288__$1;
(statearr_32303_33138[(2)] = inst_32280);

(statearr_32303_33138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (8))){
var inst_32265 = (state_32288[(7)]);
var tmp32300 = inst_32265;
var inst_32265__$1 = tmp32300;
var state_32288__$1 = (function (){var statearr_32304 = state_32288;
(statearr_32304[(7)] = inst_32265__$1);

return statearr_32304;
})();
var statearr_32305_33139 = state_32288__$1;
(statearr_32305_33139[(2)] = null);

(statearr_32305_33139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_32306 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32306[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_32306[(1)] = (1));

return statearr_32306;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_32288){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_32288);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e32307){var ex__30512__auto__ = e32307;
var statearr_32308_33140 = state_32288;
(statearr_32308_33140[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_32288[(4)]))){
var statearr_32309_33141 = state_32288;
(statearr_32309_33141[(1)] = cljs.core.first((state_32288[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33142 = state_32288;
state_32288 = G__33142;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_32288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_32288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_32310 = f__30661__auto__();
(statearr_32310[(6)] = c__30660__auto___33129);

return statearr_32310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32312 = arguments.length;
switch (G__32312) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30660__auto___33144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_32350){
var state_val_32351 = (state_32350[(1)]);
if((state_val_32351 === (7))){
var inst_32346 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32352_33145 = state_32350__$1;
(statearr_32352_33145[(2)] = inst_32346);

(statearr_32352_33145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (1))){
var inst_32313 = (new Array(n));
var inst_32314 = inst_32313;
var inst_32315 = (0);
var state_32350__$1 = (function (){var statearr_32353 = state_32350;
(statearr_32353[(7)] = inst_32315);

(statearr_32353[(8)] = inst_32314);

return statearr_32353;
})();
var statearr_32354_33152 = state_32350__$1;
(statearr_32354_33152[(2)] = null);

(statearr_32354_33152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (4))){
var inst_32318 = (state_32350[(9)]);
var inst_32318__$1 = (state_32350[(2)]);
var inst_32319 = (inst_32318__$1 == null);
var inst_32320 = cljs.core.not(inst_32319);
var state_32350__$1 = (function (){var statearr_32355 = state_32350;
(statearr_32355[(9)] = inst_32318__$1);

return statearr_32355;
})();
if(inst_32320){
var statearr_32356_33153 = state_32350__$1;
(statearr_32356_33153[(1)] = (5));

} else {
var statearr_32357_33154 = state_32350__$1;
(statearr_32357_33154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (15))){
var inst_32340 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32358_33155 = state_32350__$1;
(statearr_32358_33155[(2)] = inst_32340);

(statearr_32358_33155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (13))){
var state_32350__$1 = state_32350;
var statearr_32359_33156 = state_32350__$1;
(statearr_32359_33156[(2)] = null);

(statearr_32359_33156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (6))){
var inst_32315 = (state_32350[(7)]);
var inst_32336 = (inst_32315 > (0));
var state_32350__$1 = state_32350;
if(cljs.core.truth_(inst_32336)){
var statearr_32360_33157 = state_32350__$1;
(statearr_32360_33157[(1)] = (12));

} else {
var statearr_32361_33158 = state_32350__$1;
(statearr_32361_33158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (3))){
var inst_32348 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32350__$1,inst_32348);
} else {
if((state_val_32351 === (12))){
var inst_32314 = (state_32350[(8)]);
var inst_32338 = cljs.core.vec(inst_32314);
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32350__$1,(15),out,inst_32338);
} else {
if((state_val_32351 === (2))){
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32350__$1,(4),ch);
} else {
if((state_val_32351 === (11))){
var inst_32330 = (state_32350[(2)]);
var inst_32331 = (new Array(n));
var inst_32314 = inst_32331;
var inst_32315 = (0);
var state_32350__$1 = (function (){var statearr_32362 = state_32350;
(statearr_32362[(7)] = inst_32315);

(statearr_32362[(10)] = inst_32330);

(statearr_32362[(8)] = inst_32314);

return statearr_32362;
})();
var statearr_32363_33159 = state_32350__$1;
(statearr_32363_33159[(2)] = null);

(statearr_32363_33159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (9))){
var inst_32314 = (state_32350[(8)]);
var inst_32328 = cljs.core.vec(inst_32314);
var state_32350__$1 = state_32350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32350__$1,(11),out,inst_32328);
} else {
if((state_val_32351 === (5))){
var inst_32318 = (state_32350[(9)]);
var inst_32315 = (state_32350[(7)]);
var inst_32314 = (state_32350[(8)]);
var inst_32323 = (state_32350[(11)]);
var inst_32322 = (inst_32314[inst_32315] = inst_32318);
var inst_32323__$1 = (inst_32315 + (1));
var inst_32324 = (inst_32323__$1 < n);
var state_32350__$1 = (function (){var statearr_32364 = state_32350;
(statearr_32364[(12)] = inst_32322);

(statearr_32364[(11)] = inst_32323__$1);

return statearr_32364;
})();
if(cljs.core.truth_(inst_32324)){
var statearr_32365_33160 = state_32350__$1;
(statearr_32365_33160[(1)] = (8));

} else {
var statearr_32366_33161 = state_32350__$1;
(statearr_32366_33161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (14))){
var inst_32343 = (state_32350[(2)]);
var inst_32344 = cljs.core.async.close_BANG_(out);
var state_32350__$1 = (function (){var statearr_32368 = state_32350;
(statearr_32368[(13)] = inst_32343);

return statearr_32368;
})();
var statearr_32369_33162 = state_32350__$1;
(statearr_32369_33162[(2)] = inst_32344);

(statearr_32369_33162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (10))){
var inst_32334 = (state_32350[(2)]);
var state_32350__$1 = state_32350;
var statearr_32370_33163 = state_32350__$1;
(statearr_32370_33163[(2)] = inst_32334);

(statearr_32370_33163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32351 === (8))){
var inst_32314 = (state_32350[(8)]);
var inst_32323 = (state_32350[(11)]);
var tmp32367 = inst_32314;
var inst_32314__$1 = tmp32367;
var inst_32315 = inst_32323;
var state_32350__$1 = (function (){var statearr_32371 = state_32350;
(statearr_32371[(7)] = inst_32315);

(statearr_32371[(8)] = inst_32314__$1);

return statearr_32371;
})();
var statearr_32372_33164 = state_32350__$1;
(statearr_32372_33164[(2)] = null);

(statearr_32372_33164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_32373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32373[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_32373[(1)] = (1));

return statearr_32373;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_32350){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_32350);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e32374){var ex__30512__auto__ = e32374;
var statearr_32375_33165 = state_32350;
(statearr_32375_33165[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_32350[(4)]))){
var statearr_32376_33166 = state_32350;
(statearr_32376_33166[(1)] = cljs.core.first((state_32350[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33167 = state_32350;
state_32350 = G__33167;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_32350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_32350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_32377 = f__30661__auto__();
(statearr_32377[(6)] = c__30660__auto___33144);

return statearr_32377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32379 = arguments.length;
switch (G__32379) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30660__auto___33169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30661__auto__ = (function (){var switch__30508__auto__ = (function (state_32424){
var state_val_32425 = (state_32424[(1)]);
if((state_val_32425 === (7))){
var inst_32420 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32426_33170 = state_32424__$1;
(statearr_32426_33170[(2)] = inst_32420);

(statearr_32426_33170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (1))){
var inst_32380 = [];
var inst_32381 = inst_32380;
var inst_32382 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32424__$1 = (function (){var statearr_32427 = state_32424;
(statearr_32427[(7)] = inst_32382);

(statearr_32427[(8)] = inst_32381);

return statearr_32427;
})();
var statearr_32428_33171 = state_32424__$1;
(statearr_32428_33171[(2)] = null);

(statearr_32428_33171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (4))){
var inst_32385 = (state_32424[(9)]);
var inst_32385__$1 = (state_32424[(2)]);
var inst_32386 = (inst_32385__$1 == null);
var inst_32387 = cljs.core.not(inst_32386);
var state_32424__$1 = (function (){var statearr_32429 = state_32424;
(statearr_32429[(9)] = inst_32385__$1);

return statearr_32429;
})();
if(inst_32387){
var statearr_32430_33172 = state_32424__$1;
(statearr_32430_33172[(1)] = (5));

} else {
var statearr_32431_33173 = state_32424__$1;
(statearr_32431_33173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (15))){
var inst_32381 = (state_32424[(8)]);
var inst_32412 = cljs.core.vec(inst_32381);
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32424__$1,(18),out,inst_32412);
} else {
if((state_val_32425 === (13))){
var inst_32407 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32432_33174 = state_32424__$1;
(statearr_32432_33174[(2)] = inst_32407);

(statearr_32432_33174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (6))){
var inst_32381 = (state_32424[(8)]);
var inst_32409 = inst_32381.length;
var inst_32410 = (inst_32409 > (0));
var state_32424__$1 = state_32424;
if(cljs.core.truth_(inst_32410)){
var statearr_32433_33175 = state_32424__$1;
(statearr_32433_33175[(1)] = (15));

} else {
var statearr_32434_33176 = state_32424__$1;
(statearr_32434_33176[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (17))){
var inst_32417 = (state_32424[(2)]);
var inst_32418 = cljs.core.async.close_BANG_(out);
var state_32424__$1 = (function (){var statearr_32435 = state_32424;
(statearr_32435[(10)] = inst_32417);

return statearr_32435;
})();
var statearr_32436_33177 = state_32424__$1;
(statearr_32436_33177[(2)] = inst_32418);

(statearr_32436_33177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (3))){
var inst_32422 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32424__$1,inst_32422);
} else {
if((state_val_32425 === (12))){
var inst_32381 = (state_32424[(8)]);
var inst_32400 = cljs.core.vec(inst_32381);
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32424__$1,(14),out,inst_32400);
} else {
if((state_val_32425 === (2))){
var state_32424__$1 = state_32424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32424__$1,(4),ch);
} else {
if((state_val_32425 === (11))){
var inst_32385 = (state_32424[(9)]);
var inst_32381 = (state_32424[(8)]);
var inst_32389 = (state_32424[(11)]);
var inst_32397 = inst_32381.push(inst_32385);
var tmp32437 = inst_32381;
var inst_32381__$1 = tmp32437;
var inst_32382 = inst_32389;
var state_32424__$1 = (function (){var statearr_32438 = state_32424;
(statearr_32438[(12)] = inst_32397);

(statearr_32438[(7)] = inst_32382);

(statearr_32438[(8)] = inst_32381__$1);

return statearr_32438;
})();
var statearr_32439_33178 = state_32424__$1;
(statearr_32439_33178[(2)] = null);

(statearr_32439_33178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (9))){
var inst_32382 = (state_32424[(7)]);
var inst_32393 = cljs.core.keyword_identical_QMARK_(inst_32382,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32424__$1 = state_32424;
var statearr_32440_33179 = state_32424__$1;
(statearr_32440_33179[(2)] = inst_32393);

(statearr_32440_33179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (5))){
var inst_32382 = (state_32424[(7)]);
var inst_32385 = (state_32424[(9)]);
var inst_32390 = (state_32424[(13)]);
var inst_32389 = (state_32424[(11)]);
var inst_32389__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32385) : f.call(null,inst_32385));
var inst_32390__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32389__$1,inst_32382);
var state_32424__$1 = (function (){var statearr_32441 = state_32424;
(statearr_32441[(13)] = inst_32390__$1);

(statearr_32441[(11)] = inst_32389__$1);

return statearr_32441;
})();
if(inst_32390__$1){
var statearr_32442_33180 = state_32424__$1;
(statearr_32442_33180[(1)] = (8));

} else {
var statearr_32443_33181 = state_32424__$1;
(statearr_32443_33181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (14))){
var inst_32385 = (state_32424[(9)]);
var inst_32389 = (state_32424[(11)]);
var inst_32402 = (state_32424[(2)]);
var inst_32403 = [];
var inst_32404 = inst_32403.push(inst_32385);
var inst_32381 = inst_32403;
var inst_32382 = inst_32389;
var state_32424__$1 = (function (){var statearr_32444 = state_32424;
(statearr_32444[(7)] = inst_32382);

(statearr_32444[(14)] = inst_32404);

(statearr_32444[(15)] = inst_32402);

(statearr_32444[(8)] = inst_32381);

return statearr_32444;
})();
var statearr_32445_33182 = state_32424__$1;
(statearr_32445_33182[(2)] = null);

(statearr_32445_33182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (16))){
var state_32424__$1 = state_32424;
var statearr_32446_33183 = state_32424__$1;
(statearr_32446_33183[(2)] = null);

(statearr_32446_33183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (10))){
var inst_32395 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
if(cljs.core.truth_(inst_32395)){
var statearr_32447_33184 = state_32424__$1;
(statearr_32447_33184[(1)] = (11));

} else {
var statearr_32448_33185 = state_32424__$1;
(statearr_32448_33185[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (18))){
var inst_32414 = (state_32424[(2)]);
var state_32424__$1 = state_32424;
var statearr_32449_33186 = state_32424__$1;
(statearr_32449_33186[(2)] = inst_32414);

(statearr_32449_33186[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32425 === (8))){
var inst_32390 = (state_32424[(13)]);
var state_32424__$1 = state_32424;
var statearr_32454_33187 = state_32424__$1;
(statearr_32454_33187[(2)] = inst_32390);

(statearr_32454_33187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30509__auto__ = null;
var cljs$core$async$state_machine__30509__auto____0 = (function (){
var statearr_32455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32455[(0)] = cljs$core$async$state_machine__30509__auto__);

(statearr_32455[(1)] = (1));

return statearr_32455;
});
var cljs$core$async$state_machine__30509__auto____1 = (function (state_32424){
while(true){
var ret_value__30510__auto__ = (function (){try{while(true){
var result__30511__auto__ = switch__30508__auto__(state_32424);
if(cljs.core.keyword_identical_QMARK_(result__30511__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30511__auto__;
}
break;
}
}catch (e32456){var ex__30512__auto__ = e32456;
var statearr_32457_33188 = state_32424;
(statearr_32457_33188[(2)] = ex__30512__auto__);


if(cljs.core.seq((state_32424[(4)]))){
var statearr_32458_33189 = state_32424;
(statearr_32458_33189[(1)] = cljs.core.first((state_32424[(4)])));

} else {
throw ex__30512__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33190 = state_32424;
state_32424 = G__33190;
continue;
} else {
return ret_value__30510__auto__;
}
break;
}
});
cljs$core$async$state_machine__30509__auto__ = function(state_32424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30509__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30509__auto____1.call(this,state_32424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30509__auto____0;
cljs$core$async$state_machine__30509__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30509__auto____1;
return cljs$core$async$state_machine__30509__auto__;
})()
})();
var state__30662__auto__ = (function (){var statearr_32461 = f__30661__auto__();
(statearr_32461[(6)] = c__30660__auto___33169);

return statearr_32461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30662__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
