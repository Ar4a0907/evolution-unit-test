import { formatNumberAsCurrency } from '../02_stringExample'

describe("formatNumberAsCurrency", () => {
    test('formatNumberAsCurrency returns correct string with de locale', () => {
        const deFormat = formatNumberAsCurrency(1000, 'de')
        expect(deFormat).toContain('€')
        expect(deFormat).toMatch(/\d{1,}\.\d{1,3},00/)
        expect.assertions(2)
    })
    
    test('formatNumberAsCurrency returns correct string with us locale', () => {
        const usFormat = formatNumberAsCurrency(1000, 'en-US')
        expect(usFormat).toContain('1,000')
        expect.assertions(1)
    })

    test('formatNumberAsCurrency returns correct string with fr locale', () => {
        const frFormat = formatNumberAsCurrency(1000, 'fr')
        expect(frFormat).toBe('fr locale is currently not supported')
        expect.assertions(1)
    })
})
