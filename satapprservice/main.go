package main

import "fmt"
import "math/rand"
import "math"
import "time"


const MAX_VAR = 1000000

const half_samples = 100
const onee_samples = 10
const half_timeout = 1
const onee_timeout = 2

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
	fmt.Println(monte_carlo(p))
}

func monte_carlo(p problem) float64 {
	var a, b float64 = 0.0, 0.0
	start := time.Now().UnixMilli()
	for i := 0; i < half_samples; i++ {
		a = math.Max(a, half_approximation(p))
		if time.Now().UnixMilli() >= start+half_timeout*1000 {
			break
		}
	}
	start = time.Now().UnixMilli()
	for i := 0; i < onee_samples; i++ {
		b = math.Max(b, onee_approximation(p))
		if time.Now().UnixMilli() >= start+onee_timeout*1000 {
			break
		}
	}
	return math.Max(a, b)
}
