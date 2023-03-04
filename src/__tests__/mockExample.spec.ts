// You are expected to mock formatNumberAsCurrency function with jest.fn()
jest.mock('../stringExample', () => {
    return {
        formatNumberAsCurrency: jest.fn().mockImplementation(() => {
            return 'some number'
        })
    }
})

import { listOfAvailableLocaleCurrencies } from '../mockExample'

describe("listOfAvailableLocaleCurrencies", () => {
    it('should return correct string', () => {
        expect(listOfAvailableLocaleCurrencies()).toEqual()

        expect(formatNumberAsCurrency).toHaveBeenCalledTimes()
        expect(formatNumberAsCurrency).toHaveBeenCalledWith()
    })
})