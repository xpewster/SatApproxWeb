(ns parser.convert)


(def not-sym "n")
(def and-sym "a")
(def or-sym "o")
(def implies-sym "i")

(defn third [lst]
  (second (rest lst)))

(defn is-op [sym]
  (seq? sym))

(defn remove-implies [tree]
  (if tree
    (if (is-op tree)
      (if (= (first tree) implies-sym)
        (list or-sym (list not-sym (remove-implies (second tree))) (remove-implies (third tree)))
        (if (third tree)
          (list (first tree) (remove-implies (second tree)) (remove-implies (third tree)))
          (list (first tree) (remove-implies (second tree)))))
      tree)
    nil))

(defn negation-normal [tree]
  (if tree
    (if (is-op tree)
      (if (= (first tree) not-sym)
        (if (is-op (second tree))
          (if (= (first (second tree)) not-sym)
            (negation-normal (second (second tree)))
            (if (= (first (second tree)) and-sym)
              (list or-sym (negation-normal (list not-sym (second (second tree)))) (negation-normal (list not-sym (third (second tree)))))
              (list and-sym (negation-normal (list not-sym (second (second tree)))) (negation-normal (list not-sym (third (second tree)))))))
          tree)
        (list (first tree) (negation-normal (second tree)) (negation-normal (third tree))))
      tree)
    nil))
  