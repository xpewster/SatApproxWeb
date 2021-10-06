package main

import "fmt"
import "github.com/lukpank/go-glpk/glpk"
import "log"

func onee_approximation(p problem) float64 {
	return lp_solve(p, gather_vars(p))
}

/* Compile variables in a clause into an array[clause][pos/neg][vars] 
   0 = positive, 1 = negative(not) */
func gather_vars(p problem) [][2][]int {
	signs := make([][2][]int, len(p.clauses))
	for i, _clause := range p.clauses {
		for _, _var := range _clause {
			if _var > 0 {
				signs[i][0] = append(signs[i][0], _var)
			} else {
				signs[i][1] = append(signs[i][1], -1*_var)
			}
		}
	}
	return signs
}

func lp_solve(p problem, signs [][2][]int) float64{
	lp := glpk.New()
	defer lp.Delete()
	lp.SetObjDir(glpk.MAX)

	lp.AddRows(len(p.clauses))
	for i := 0; i < len(p.clauses); i++ {
		name := fmt.Sprintf("p%d", i)
		lp.SetRowName(i+1, name)
		lp.SetRowBnds(i+1, glpk.LO, float64(-1*len(signs[i][1])), 0)
	}

	lp.AddCols(len(p.vars)+len(p.clauses))
	for i := 0; i < len(p.vars); i++ {
		name := fmt.Sprintf("x%d", i)
		lp.SetColName(i+1, name)
		lp.SetColBnds(i+1, glpk.DB, 0, 1)
		lp.SetObjCoef(i+1, 0)
	}
	for i := 0; i < len(p.clauses); i++ {
		name := fmt.Sprintf("z%d", i)
		lp.SetColName(i+len(p.vars)+1, name)
		lp.SetColBnds(i+len(p.vars)+1, glpk.DB, 0, 1)
		lp.SetObjCoef(i+len(p.vars)+1, float64(p.weights[i]))
	}

	var _size int = (len(p.vars)+len(p.clauses))*len(p.clauses)
	ia := make([]int32, _size) // row number
	ja := make([]int32, _size) // col number
	ar := make([]float64, _size) // coef
	for i := 0; i < _size; i++ {
		var clause_num int32 = int32(i/(len(p.vars)+len(p.clauses))+1)
		var var_num int32 = int32(i%(len(p.vars)+len(p.clauses))+1)
		ia[i] = clause_num
		ja[i] = var_num
		if contains(signs[clause_num-1][0], var_num) {
			ar[i] = 1.0
		} else if contains(signs[clause_num-1][1], var_num) {
			ar[i] = -1.0
		} else {
			ar[i] = 0.0
		}
	}
	lp.LoadMatrix(ia, ja, ar)

	smcp := glpk.NewSmcp()
	smcp.SetMsgLev(glpk.MSG_ERR)
	if err := lp.Simplex(smcp); err != nil {
		log.Fatal(err)
	}
	z := lp.ObjVal()

	return z
}

func contains(s []int, e int32) bool {
    for _, a := range s {
        if a == int(e) {
            return true
        }
    }
    return false
}