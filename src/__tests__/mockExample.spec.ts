// You are expected to mock formatNumberAsCurrency function with jest.fn()
const formatNumberAsCurrency = jest.fn().mockImplementation(() => {
    return 'some number'
});

jest.mock('../02_stringExample', () => {
    return {
        formatNumberAsCurrency: formatNumberAsCurrency
    }
})

import { listOfAvailableLocaleCurrencies } from '../05_mockExample'

describe("listOfAvailableLocaleCurrencies", () => {
    it('should return correct string', () => {
        expect(listOfAvailableLocaleCurrencies()).toEqual(["some number", "some number"])
        expect(formatNumberAsCurrency).toHaveBeenCalledTimes(2)
        expect(formatNumberAsCurrency).toHaveBeenCalledWith(1000, 'us')
        expect(formatNumberAsCurrency).toHaveBeenCalledWith(1000, 'de')
    })
})
