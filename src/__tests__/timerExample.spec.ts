import { logMsgAfterSomeTime, logOnInterval } from '../04_timerExample'

describe('timerExample', () => {
    const logSpy = jest.spyOn(console, 'log')

    beforeEach(() => {
        jest.useFakeTimers();
    })

    afterEach(() => {
        jest.useRealTimers();
        logSpy.mockClear();
    })

    describe('logMsgAfterSomeTime', () => {
        it('should log message after a delay', () => {
            const message = 'hello world'
            const delay = 2000

            logMsgAfterSomeTime(message, delay)

            jest.runOnlyPendingTimers()

            expect(logSpy).toHaveBeenCalledTimes(1)
            expect(logSpy).toHaveBeenCalledWith(message, "was logged after %s seconds", delay / 1000)
        })
    })

    describe('logOnInterval', () => {
        it('should log message after a delay', () => {
            const delay = 10000
            logOnInterval(delay)

            jest.advanceTimersByTime(delay)
    
            expect(logSpy).toHaveBeenCalledTimes(1)
        })
    })
})
