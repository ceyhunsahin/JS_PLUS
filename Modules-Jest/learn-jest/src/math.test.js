

const { calculateTotal, celciusToFahrenheit,fahrenheitToCelcius,fibonacci } = require('./math');


describe('::fahrenheitToCelcius', () => {

    it ('should exist', () => {
            // test code
            expect(fahrenheitToCelcius).toBeDefined()
        })

        it ('should return a number', () => {
            expect(calculateTotal(100,0.2)).toBe(120)
        })

        it ('should convert 32F to 0C', () => {
            expect(fahrenheitToCelcius(32)).toBe(0)
        })

        it ('should convert 0C to 32F', () => {
            expect(celciusToFahrenheit(0)).toBe(32)
        })

        it ('should return 1 fibo', () => {
            expect(fibonacci()).toBe(1)
        })



    });


