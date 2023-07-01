import { Expense, Calculator } from '../interfaces/interfaces'

class TotalExpenseCalculator implements Calculator {
  
  
  public calculate(expenses: Expense[]): number {
    let total = 0;
    
    for (const expense of expenses) {
      total += expense.getAmount();
    }
    
    return total;
  }
}

export default TotalExpenseCalculator;
