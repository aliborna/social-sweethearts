import { Expense } from '../interfaces/interfaces'

class MealExpenseCalculator {
  
  
  static calculate(expenses: Expense[]): number {
    let total = 0;
    
    for (const expense of expenses) {
      if(expense.isMeal()) {
        total += expense.getAmount();
      }
    }
    
    return total;
  }
}

export default MealExpenseCalculator;
