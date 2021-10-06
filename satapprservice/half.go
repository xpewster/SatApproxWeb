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

func evaluate_clauses(clauses [][]int, values []bool, weights []float64) float64 {
	var total float64 = 0.0
	for i, v := range clauses {
		c := evaluate_valued_clause(plug_in_values(v, values))
		if c == true {
			total += weights[i]
		}
	}
	return total
}
