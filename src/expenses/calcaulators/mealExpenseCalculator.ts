import { IExpense, Calculator } from "../interfaces/interfaces";

class MealExpenseCalculator implements Calculator {
  public calculate(expenses: IExpense[]): number {
    let total = 0;

    for (const expense of expenses) {
      if (expense.isMeal()) {
        total += expense.getAmount();
      }
    }

    return total;
  }
}

export default MealExpenseCalculator;
