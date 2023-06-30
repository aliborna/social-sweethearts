import InputFactory from './src/expenses/Factories/InputFactory';
import TotalExpenseCalculator from './src/expenses/calcaulators/totalExpenseCalculator'
import MealExpenseCalculator from './src/expenses/calcaulators/mealExpenseCalculator'

function report(expenses) {
  const inputFactory = new InputFactory()
  const decoratedExpenses = inputFactory.create(expenses)

  const total = TotalExpenseCalculator.calculate(
    decoratedExpenses
  );

  const mealExpenses = MealExpenseCalculator.calculate(
    decoratedExpenses
  );

  console.log("Total Meal Expense:", mealExpenses);
  console.log("Total All Expense:", total);
}

const type = { BREAKFAST: 1, LUNCH: 2, DINNER: 3, CAR_RENT: 4 }

const ExpensesJson = () => [
    { type: type.BREAKFAST, amount: 15.20 },
    { type: type.BREAKFAST, amount: 28.10 },
    { type: type.LUNCH, amount: 10.20 },
    { type: type.DINNER, amount: 16.00 },
    { type: type.DINNER, amount: 120.20 },
    { type: type.CAR_RENT, amount: 30 }
]

report(ExpensesJson())