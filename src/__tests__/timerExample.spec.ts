import { logMsgAfterSomeTime, logOnInterval } from '../04_timerExample'

describe('timerExample', () => {
    describe('logMsgAfterSomeTime', () => {
        it('should log message after a delay', () => {
            logMsgAfterSomeTime('hello world', 2000)
    
            expect(setTimeout).toHaveBeenCalledTimes(1)
        })
    })

    describe('logOnInterval', () => {
        it('should log message after a delay', () => {
            logOnInterval(10000)
    
            expect(setInterval).toHaveBeenCalledTimes(1)
        })
    })
})
