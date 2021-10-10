(ns parser.lexer
  (:require [clojure.string :as str]))


(defn seqify [str]
  (re-seq #"[\d]+|\D" str))

(defn remove-whitespace [chars]
  (remove (fn [x]
            (= x (str \space))) chars))

(defn tokenize [str]
  (remove-whitespace(seqify str)))

