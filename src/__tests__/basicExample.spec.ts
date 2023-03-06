import { someRandomNumber } from '../01_basicExample'

describe("someRandomNumber", () => {
    it("should return a number", () => {
        const number = someRandomNumber()

        expect(number).toBeGreaterThanOrEqual(0)
        expect(number).toBeLessThanOrEqual(100)
        expect.assertions(2)
    })
})