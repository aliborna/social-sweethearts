import { ExpenseInput } from '../interfaces/interfaces';
import InputFactory from '../factories/inputFactory';
import CalculatorFactory from '../factories/calculatorFactory';

class reportFacade {

    private expenses: ExpenseInput[];

    private constructor(expenses: ExpenseInput[]) {
        this.expenses = expenses
    }

    static create(expenses: ExpenseInput[]) {
        return new this(expenses);
    }

    public mealAndTotal() {
        const decoratedExpenses = InputFactory.create(this.expenses);
        const totalCalculator = CalculatorFactory.total();
        const mealCalculator = CalculatorFactory.meal();

        const total = totalCalculator.calculate(
            decoratedExpenses
        );

        const mealExpenses = mealCalculator.calculate(
            decoratedExpenses
        );

        return {
            total,
            mealExpenses
        }
    }
}

export default reportFacade
