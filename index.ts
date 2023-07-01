import ReportFacade from './src/expenses/facade/reportFacade';


function report(expenses) {
  const reportFacade = ReportFacade.create(expenses)
  
  const { total, mealExpenses } = reportFacade.mealAndTotal();

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