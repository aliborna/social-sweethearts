import reportFacade from "./reportFacade"

describe('calculator factory', () => {
    const type = { BREAKFAST: 1, LUNCH: 2, DINNER: 3, Car_Rent: 4 }

    const expensesMock = [
        { type: type.BREAKFAST, amount: 5 },
        { type: type.LUNCH, amount: 10 },
        { type: type.DINNER, amount: 16.00 },
        { type: type.Car_Rent, amount: 20 },
    ];
    test('intance to be healthy', () => {
        const instance = reportFacade.create(expensesMock)

        expect(instance).toBeTruthy()
    })

    test('check meal and total calculation', () => {
        
        const instance = reportFacade.create(expensesMock)

        const { total, mealExpenses } = instance.mealAndTotal()

        expect(total).toBe(51);
        expect(mealExpenses).toBe(31)
    })

})