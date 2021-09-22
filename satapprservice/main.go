package main

import "fmt"
import "math/rand"
import "time"
// import "github.com/lukpank/go-glpk/glpk"

const MAX_VAR = 1000000

type problem struct {
	clauses [][]int
	vars []int
	weights []float32
}

func main() {
	rand.Seed(time.Now().UnixNano())
	fmt.Println("Started satappr service.")
	_vars := []int{1,2,4}
	_clauses := [][]int{[]int{1,2},[]int{1,-2},[]int{-1,4}}
	_weights := []float32{1,1,2+0.1}
	p := problem{vars: _vars[:], clauses: _clauses, weights: _weights}
	half_approximation(p)
}

func half_approximation(p problem) {
	var values []bool = randomize_values(p)
	fmt.Println(evaluate_clauses(p.clauses, values, p.weights))
}

func randomize_values(p problem) []bool {
	var values []bool = make([]bool, MAX_VAR+1)
	bits := int64(0)
	for i, v := range p.vars {
		if i % 63 == 0 {
			bits = rand.Int63()
		}
		bit := uint8(bits % 2)
		if bit == 0 {
			values[v] = true
		} else {
			values[v] = false
		}
		// fmt.Println(values[v])
		bits >>= 1
	}
	return values
}

func plug_in_values(clause []int, values []bool) []bool {
	var plugged []bool = make([]bool, len(clause))
	for i, v := range clause {
		if v < 0 {
			plugged[i] = !values[-v]
		} else {
			plugged[i] = values[v]
		}
	}
	return plugged
}

func evaluate_valued_clause(clause []bool) bool {
	for _, v := range clause {
		if v == true {
			return true
		}
	}
	return false
}

func evaluate_clauses(clauses [][]int, values []bool, weights []float32) float32 {
	var total float32 = 0.0
	for i, v := range clauses {
		c := evaluate_valued_clause(plug_in_values(v, values))
		if c == true {
			total += weights[i]
		}
	}
	return total
}