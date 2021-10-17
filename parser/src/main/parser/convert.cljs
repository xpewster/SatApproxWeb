(ns parser.convert)


(def not-sym "n")
(def and-sym "a")
(def or-sym "o")
(def implies-sym "i")

(defn third [lst]
  (second (rest lst)))

(defn is-op? [sym]
  (seq? sym))

(defn remove-implies [tree]
  (if tree
    (if (is-op? tree)
      (if (= (first tree) implies-sym)
        (list or-sym (list not-sym (remove-implies (second tree))) (remove-implies (third tree)))
        (if (third tree)
          (list (first tree) (remove-implies (second tree)) (remove-implies (third tree)))
          (list (first tree) (remove-implies (second tree)))))
      tree)
    nil))

(defn negation-normal [tree]
  (if tree
    (if (is-op? tree)
      (if (= (first tree) not-sym)
        (if (is-op? (second tree))
          (if (= (first (second tree)) not-sym)
            (negation-normal (second (second tree)))
            (if (= (first (second tree)) and-sym)
              (list or-sym (negation-normal (list not-sym (second (second tree)))) (negation-normal (list not-sym (third (second tree)))))
              (list and-sym (negation-normal (list not-sym (second (second tree)))) (negation-normal (list not-sym (third (second tree)))))))
          tree)
        (list (first tree) (negation-normal (second tree)) (negation-normal (third tree))))
      tree)
    nil))
  
(defn distribute [tree]
  (if tree
    (if (is-op? tree)
      (if (= (first tree) or-sym)
        (let [index (first (keep-indexed #(if (and (is-op? %2) (= (first %2) and-sym)) %1 nil) (rest tree)))]
          (if index
            (if (= index 1)
              (list and-sym (distribute (list or-sym (second tree) (second (third tree)))) (distribute (list or-sym (second tree) (third (third tree)))))
              (list and-sym (distribute (list or-sym (second (second tree)) (third tree))) (distribute (list or-sym (third (second tree)) (third tree)))))
            tree))
          
        (if (= (first tree) not-sym)
          (list not-sym (distribute (second tree)))
          (list and-sym (distribute (second tree)) (distribute (third tree)))))
      tree)
    nil))

; precond: in cnf form
(defn condense-ors [tree]
  (if tree
    (if (is-op? tree)
      (if (= (first tree) or-sym)
        (concat (condense-ors (second tree)) (concat (condense-ors (third tree))))
        (if (= (first tree) not-sym)
          (list (str "-" (second tree)))
          (list and-sym (condense-ors (second tree)) (condense-ors (third tree)))))
      (list tree))
    nil))

(defn gather [tree]
  (if (= (first tree) and-sym)
    (concat (gather (second tree)) (gather (third tree)))
    (list tree)))


(defn cnf [tree]
  (gather (condense-ors (distribute (negation-normal (remove-implies tree))))))