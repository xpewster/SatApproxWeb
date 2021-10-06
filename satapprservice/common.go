package main


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
