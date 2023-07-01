import InputFactory from "./inputFactory"

describe('calculator factory', () => {
    const type = { BREAKFAST: 1, LUNCH: 2, DINNER: 3 }
    const expensesMock = [
        { type: type.BREAKFAST, amount: 15.20 },
        { type: type.BREAKFAST, amount: 28.10 },
        { type: type.LUNCH, amount: 10.20 },
        { type: type.DINNER, amount: 16.00 },
        { type: type.DINNER, amount: 120.20 },
    ];

    test('intance to be healthy', () => {
       const instance = new InputFactory()

       expect(instance).toBeTruthy()
    })
    
    test('check required functions and instances', () => {
      const expenses = InputFactory.create(expensesMock)
      console.log(expenses.length == expensesMock.length)
      expect(expenses.length).toBe(expensesMock.length)

   })

  })