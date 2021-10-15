package main

// import "fmt"
import "math/rand"


func half_approximation(p problem) float64{
	var values []bool = randomize_values(p)
	return evaluate_clauses(p.clauses, values, p.weights)
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
		bits >>= 1
	}
	return values
}
