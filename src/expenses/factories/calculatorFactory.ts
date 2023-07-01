import TotalExpenseCalculator from '../calcaulators/totalExpenseCalculator';
import MealExpenseCalculator from '../calcaulators/mealExpenseCalculator';


class CalculatorFactory {

  static total() {
    return new TotalExpenseCalculator();
  }

  static meal() {
    return new MealExpenseCalculator();
  }
}

export default CalculatorFactory
