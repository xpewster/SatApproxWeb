(ns parser.lexer-test
  (:require [cljs.test :refer [deftest testing is]]
            [parser.lexer :refer [seqify remove-whitespace tokenize]]))

(deftest tests
  (testing "Tokenizer"
    (testing "seqify 1"
      (is (= (list "a" "b" "c" "f" "g" "h") (seqify "abcfgh"))))
    (testing "seqify 2"
      (is (= (list "1" "b" "c" " " "3" "g" "4" " ") (seqify "1bc 3g4 "))))
    (testing "seqify 3"
      (is (= (list "a" "b" "177" "c" " " " " "64" " " "6" "d") (seqify "ab177c  64 6d"))))
    (testing "remove-whitespace"
      (is (= (list "a" "b" "c" "f" "g" "h") (remove-whitespace (seqify " ab c   fg h ")))))
    (testing "tokenize 1"
      (is (= (list "a" "b" "177" "c" "64" "6" "d") (tokenize "ab177c  64 6d"))))
    (testing "tokenize 2"
      (is (= (list "(" "1" "V" "2" "^" "3" ")" "V" "16") (tokenize "(1V2^3) V16"))))))
