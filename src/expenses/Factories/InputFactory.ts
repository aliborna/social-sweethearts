import { ExpenseInput, Expense  } from '../interfaces/interfaces';
import ConcreteExpense from '../entities/ConcreteExpense';


class InputFactory {

  public create(expenses: ExpenseInput[]) {

    const decoratedExpenses: Expense[] = [];

    for (const expenseInput of expenses) {
      let expense: Expense = new ConcreteExpense(
        expenseInput.amount,
        expenseInput.type
      );

      decoratedExpenses.push(expense);
    }

    return decoratedExpenses;
  }
}

export default InputFactory
