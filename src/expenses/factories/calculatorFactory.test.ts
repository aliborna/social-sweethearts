import MealExpenseCalculator from "../calcaulators/mealExpenseCalculator"
import TotalExpenseCalculator from "../calcaulators/totalExpenseCalculator"
import CalculatorFactory from "./calculatorFactory"

describe('calculator factory', () => {

    test('intance to be healthy', () => {
       const instance = new CalculatorFactory()

       expect(instance).toBeTruthy()
    })
    
    test('check required functions and instances', () => {
      const mealInstance = CalculatorFactory.meal()
      const totalInstance = CalculatorFactory.total()

      expect(mealInstance).toBeTruthy()
      expect(totalInstance).toBeTruthy()
      expect(mealInstance instanceof MealExpenseCalculator).toBeTruthy()
      expect(totalInstance instanceof TotalExpenseCalculator).toBeTruthy()

   })

  })