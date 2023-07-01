import { ExpenseInput, Expense } from '../interfaces/interfaces';
import ExpenseDomain from '../entities/Expense';


class InputFactory {

  static create(expenses: ExpenseInput[]) {

    const decoratedExpenses: Expense[] = [];

    for (const expenseInput of expenses) {
      let expense: Expense = new ExpenseDomain(
        expenseInput.amount,
        expenseInput.type
      );

      decoratedExpenses.push(expense);
    }

    return decoratedExpenses;
  }
}

export default InputFactory
