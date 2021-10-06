package main

import "fmt"
import "math/rand"
import "math"
import "time"


const MAX_VAR = 1000000

type problem struct {
	clauses [][]int
	vars []int
	weights []float64
}

func main() {
	rand.Seed(time.Now().UnixNano())
	fmt.Println("Started satappr service.")
	_vars := []int{1,2,4}
	_clauses := [][]int{[]int{1,2},[]int{1,-2},[]int{-1,4}}
	_weights := []float64{1,1,2+0.1}
	p := problem{vars: _vars[:], clauses: _clauses, weights: _weights}
	a := half_approximation(p)
	// fmt.Printf("half sol: %f\n", a)
	b := onee_approximation(p)
	// fmt.Printf("1-1/e sol: %f\n", b)
	fmt.Println(math.Max(a, b))
}

