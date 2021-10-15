(ns parser.parser-test
  (:require [cljs.test :refer [deftest testing is]]
            [parser.parser :refer [and-sym or-sym not-sym implies-sym]]
            [parser.convert :refer [remove-implies]]))