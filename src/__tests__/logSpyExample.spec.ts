import { log } from '../03_logSpyExample'

describe('log', () => {
    it('should log message after a delay', () => {
        const logSpy = jest.spyOn(console, 'log');
        log('hello world')

        expect(logSpy).toHaveBeenCalledWith('hello world');
        expect.assertions(1)
    })
})