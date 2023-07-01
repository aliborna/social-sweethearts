import { ExpenseInput, IExpense } from '../interfaces/interfaces';
import Expense from '../entities/Expense';


class InputFactory {

  static create(expenses: ExpenseInput[]) {

    const decoratedExpenses: IExpense[] = [];

    for (const expenseInput of expenses) {
      let expense: IExpense = new Expense(
        expenseInput.amount,
        expenseInput.type
      );

      decoratedExpenses.push(expense);
    }

    return decoratedExpenses;
  }
}

export default InputFactory
