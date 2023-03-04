import { formatNumberAsCurrency } from '../02_stringExample'

describe("formatNumberAsCurrency", () => {
    test('formatNumberAsCurrency returns correct string with de locale', () => {
        const deFormat = formatNumberAsCurrency(1000, 'de')
        
        expect.assertions(1)
    })
    
    test('formatNumberAsCurrency returns correct string with us locale', () => {
        const usFormat = formatNumberAsCurrency(1000, 'us')

        expect.assertions(1)
    })

    test('formatNumberAsCurrency returns correct string with fr locale', () => {
        const frFormat = formatNumberAsCurrency(1000, 'fr')
        
        expect.assertions(1)
    })
})
