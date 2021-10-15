(ns parser.parser)


(defn str->number [str]
  (let [n (re-matches #"\d+" str)]
    (if n
      (js/parseInt n 10)
      nil)))

(defn stack
  ([] (vector))
  ([coll] (reduce conj (vector) coll)))

(def not-sym "n")
(def and-sym "a")
(def or-sym "o")
(def implies-sym "i")

(def precedence (list "(" implies-sym or-sym and-sym not-sym ")"))

(defn prec [sym]
  (.indexOf precedence sym))

(defn op-reduce [operators operands input]
  (if (>= (prec (peek operators)) (prec input))
    (if (= (peek operators) not-sym)
      (op-reduce (pop operators) (conj (pop operands) (list (last operators) (last operands))) input)
      (op-reduce (pop operators) (conj (pop (pop operands)) (list (last operators) (last (pop operands)) (last operands))) input))
    (list operators operands)))

(defn par-reduce [operators operands input]
  (if (= (peek operators) "(")
    (list (pop operators) operands)
    (if (= (peek operators) not-sym)
       (par-reduce (pop operators) (conj (pop operands) (list (last operators) (last operands))) input)
       (par-reduce (pop operators) (conj (pop (pop operands)) (list (last operators) (last (pop operands)) (last operands))) input))))


(defn end-reduce [operators operands]
  (if (empty? operators)
    (first operands)
    (if (= (peek operators) not-sym)
       (end-reduce (pop operators) (conj (pop operands) (list (last operators) (last operands))))
       (end-reduce (pop operators) (conj (pop (pop operands)) (list (last operators) (last (pop operands)) (last operands)))))))

  
(defn parse [tokens]
  (loop [token (first tokens)
         operators (stack)
         operands (stack)
         resttok (rest tokens)]
    (if token
      (let [t (str->number token)]
        (if t
          (recur (first resttok) operators (conj operands t) (rest resttok))
          (if (= token "(")
            (recur (first resttok) (conj operators token) operands (rest resttok))
            (if (= token ")")
              (let [pr (par-reduce operators operands token)]
                (recur (first resttok) (first pr) (second pr) (rest resttok)))
              (let [or (op-reduce operators operands token)]
                (recur (first resttok) (conj (first or) token) (second or) (rest resttok)))))))
      (end-reduce operators operands))))