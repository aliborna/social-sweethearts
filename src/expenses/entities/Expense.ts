import { ExpenseType, Expense } from "../interfaces/interfaces";

class ConcreteExpense implements Expense {
  private amount: number;
  private type: ExpenseType;

  /**
   *  this variables should come from config 
   *  or should be in the input data or
   *  should have it from database
   */
  private isMealCategory = [
    ExpenseType.BREAKFAST,
    ExpenseType.LUNCH,
    ExpenseType.DINNER,
  ];

  private expenseName = {
    [ExpenseType.BREAKFAST]: "Breakfast",
    [ExpenseType.LUNCH]: "Lunch",
    [ExpenseType.DINNER]: "Dinner",
  };

  private overExpenseConfig = {
    [ExpenseType.BREAKFAST]: 20,
    [ExpenseType.LUNCH]: 50,
    [ExpenseType.DINNER]: 100,
  };

  /**
   * end of config variables
   */
  constructor(amount: number, type: ExpenseType) {
    this.amount = amount;
    this.type = type;

    this.info()
  }

  public getAmount(): number {
    return this.amount;
  }

  public isMeal(): boolean {
    return this.isMealCategory.includes(this.type);
  }

  public isOverExpense(): string {
    return this.getAmount() > this.overExpenseConfig[this.type]
      ? "[over-expense!]"
      : " ";
  }

  private info() {
    console.info(
      this.expenseName[this.type] +
        "\t" +
        this.amount +
        "eur" +
        "\t" +
        this.isOverExpense()
    );
  }
}

export default ConcreteExpense;
