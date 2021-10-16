(ns parser.parser-test
  (:require [cljs.test :refer [deftest testing is]]
            [parser.parser :refer [and-sym or-sym not-sym implies-sym]]
            [parser.convert :refer [remove-implies negation-normal]]))

(def ex1 (list implies-sym "p" "q"))
(def ex2 (list and-sym "p" (list implies-sym (list or-sym (list implies-sym "q" "r") "a") "b")))
(def ex3 (list implies-sym (list implies-sym (list implies-sym "a" "b") "c") "d"))

(def ex4 (list and-sym "p" "q"))
(def ex5 (list not-sym (list and-sym "a" "b")))
(def ex6 (list or-sym (list not-sym (list or-sym (list not-sym "a") "b")) "c"))
(def ex7 (list not-sym (list or-sym (list not-sym (list not-sym "b")) "c")))

(deftest tests
  (testing "Convert"
    (testing "remove-implies1"
      (is (= (list or-sym (list not-sym "p") "q") (remove-implies ex1))))
    (testing "remove-implies2"
      (is (= (list and-sym "p" (list or-sym (list not-sym (list or-sym (list or-sym (list not-sym "q") "r") "a")) "b")) (remove-implies ex2))))
    (testing "remove-implies3"
      (is (= (list or-sym (list not-sym (list or-sym (list not-sym (list or-sym (list not-sym "a") "b")) "c")) "d") (remove-implies ex3))))
    (testing "negation-normal1"
      (is (= (list and-sym "p" "q") (negation-normal ex4))))
    (testing "negation-normal2"
      (is (= (list or-sym (list not-sym "a") (list not-sym "b")) (negation-normal ex5))))
    (testing "negation-normal3"
      (is (= (list or-sym (list and-sym "a" (list not-sym "b")) "c")  (negation-normal ex6))))
    (testing "negation-normal4"
      (is (= (list and-sym (list not-sym "b") (list not-sym "c"))  (negation-normal ex7))))))