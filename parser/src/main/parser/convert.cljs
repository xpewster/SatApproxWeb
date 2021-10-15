(ns parser.convert)


(def not-sym "n")
(def and-sym "a")
(def or-sym "o")
(def implies-sym "i")

(defn third [lst]
  (second (rest lst)))

(defn is-op [sym]
  (or (= sym not-sym) (= sym and-sym) (= sym or-sym) (= sym implies-sym)))

(defn remove-implies [tree]
  (if tree
    (if (is-op (first tree))
      (if (= (first tree) implies-sym)
        (list or-sym (list not-sym (remove-implies (second tree))) (remove-implies (third tree)))
        (if (third tree)
          (list (first tree) (remove-implies (second tree)) (remove-implies (third tree)))
          (list (first tree) (remove-implies (second tree)))))
      tree)
    nil))