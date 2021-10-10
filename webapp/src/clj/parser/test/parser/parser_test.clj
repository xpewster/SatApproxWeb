(ns parser.parser-test
  (:require [clojure.test :refer :all]
            [parser.parser :refer :all]))

(def ex1 (list "1" and-sym "2"))
(def ex2 (list "1" or-sym "2" or-sym "3"))
(def ex3 (list not-sym "1" or-sym "2" and-sym not-sym "3" or-sym "4"))
(def ex4 (list "(" "1" or-sym "2" or-sym "3" ")" and-sym "5"))

(deftest tests
  (testing "Parser"
    (testing "parse1"
      (is (= (list and-sym 1 2) (parse ex1))))
    (testing "parse2"
      (is (= (list or-sym (list or-sym 1 2) 3) (parse ex2))))
    (testing "parse3"
      (is (= (list or-sym (list or-sym (list not-sym 1) (list and-sym 2 (list not-sym 3))) 4) (parse ex3))))
    (testing "parse4"
       (is (= (list and-sym (list or-sym (list or-sym "1" "2") "3") "5") (parse ex4))))))