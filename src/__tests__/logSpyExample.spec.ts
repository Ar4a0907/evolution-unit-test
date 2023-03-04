import { log } from '../03_logSpyExample'

describe('log', () => {
    it('should log message after a delay', () => {
        log('hello world')
        expect.assertions(1)
    })
})