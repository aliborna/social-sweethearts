export interface IExpense {
  getAmount(): number;
  isMeal(): boolean;
  isOverExpense(): string;
}

export interface Calculator {
  calculate(expenses: IExpense[]): number
}

export enum ExpenseType {
  BREAKFAST = 1,
  LUNCH = 2,
  DINNER = 3,
}

export type ExpenseInput = {
  type: ExpenseType;
  amount: number;
};
