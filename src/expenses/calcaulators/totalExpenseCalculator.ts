import { Expense } from '../interfaces/interfaces'

class TotalExpenseCalculator {
  
  
  static calculate(expenses: Expense[]): number {
    let total = 0;
    
    for (const expense of expenses) {
      total += expense.getAmount();
    }
    
    return total;
  }
}

export default TotalExpenseCalculator;
