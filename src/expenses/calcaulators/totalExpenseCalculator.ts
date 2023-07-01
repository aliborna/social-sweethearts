import { IExpense, Calculator } from '../interfaces/interfaces'

class TotalExpenseCalculator implements Calculator {
  
  
  public calculate(expenses: IExpense[]): number {
    let total = 0;
    
    for (const expense of expenses) {
      total += expense.getAmount();
    }
    
    return total;
  }
}

export default TotalExpenseCalculator;
