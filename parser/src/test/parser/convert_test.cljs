(ns parser.parser-test
  (:require [cljs.test :refer [deftest testing is]]
            [parser.parser :refer [and-sym or-sym not-sym implies-sym]]
            [parser.convert :refer [remove-implies negation-normal distribute condense-ors gather]]))

(def ex1 (list implies-sym "p" "q"))
(def ex2 (list and-sym "p" (list implies-sym (list or-sym (list implies-sym "q" "r") "a") "b")))
(def ex3 (list implies-sym (list implies-sym (list implies-sym "a" "b") "c") "d"))

(def ex4 (list and-sym "p" "q"))
(def ex5 (list not-sym (list and-sym "a" "b")))
(def ex6 (list or-sym (list not-sym (list or-sym (list not-sym "a") "b")) "c"))
(def ex7 (list not-sym (list or-sym (list not-sym (list not-sym "b")) "c")))

(def ex8 (list or-sym "p" (list and-sym "q" "r")))
(def ex9 (list or-sym (list and-sym "q" "r") "p"))
(def ex10 (list not-sym (list or-sym (list and-sym "p" (list and-sym "q" (list not-sym "r"))) "s")))

(def ex11 (list or-sym (list or-sym "p" "q") "r"))
(def ex12 (list or-sym "r" (list or-sym "p" "q")))
(def ex13 (list and-sym (list and-sym (list or-sym "p" (list or-sym (list or-sym "q" "r") "s")) (list or-sym (list not-sym "p") (list not-sym "q"))) (list or-sym "x" "y")))

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
      (is (= (list and-sym (list not-sym "b") (list not-sym "c"))  (negation-normal ex7))))
    (testing "distribute1"
      (is (= (list and-sym "p" "q") (distribute ex4))))
    (testing "distribute2"
      (is (= (list and-sym (list or-sym "p" "q") (list or-sym "p" "r")) (distribute ex8))))
    (testing "distribute3"
      (is (= (list and-sym (list or-sym "q" "p") (list or-sym "r" "p"))  (distribute ex9))))
    (testing "distribute4"
      (is (= (list not-sym (list and-sym (list or-sym "p" "s") (list and-sym (list or-sym "q" "s") (list or-sym (list not-sym "r") "s"))))  (distribute ex10))))
    (testing "condense-ors1"
      (is (= (list "p" "q" "r") (condense-ors ex11))))
    (testing "condense-ors2"
      (is (= (list "r" "p" "q") (condense-ors ex12))))
    (testing "condense-ors3"
      (is (= (list and-sym (list and-sym (list "p" "q" "r" "s") (list "-p" "-q")) (list "x" "y")) (condense-ors ex13))))
    (testing "gather1"
      (is (= (list (list "p" "q" "r" "s") (list "-p" "-q") (list "x" "y")) (gather (condense-ors ex13)))))))