const {
  AppError,
  createErrorHandler
} = require('../../index.js')

describe('lib - errorHandler', () => {
  it('handle - Should init without logger and do nothing', () => {
    const errHandler = createErrorHandler({})
    errHandler.handle(new Error('Test Error'))
  })

  it('handle - Should pass error to logger', (done) => {
    const errMessage = 'Test Error'
    const mockLogger = {
      error: (message) => {
        expect(message).to.equal(errMessage)
        done()
      }
    }

    const errHandler = createErrorHandler({ logger: mockLogger })
    errHandler.handle(new Error(errMessage))
  })

  it('isTrustedError - Should return true if error isTrustedError', () => {
    const errHandler = createErrorHandler()
    const isTrusted = errHandler.isTrustedError(new AppError('Test Error', true))
    expect(isTrusted).to.equal(true)
  })

  it('isTrustedError - Should return false if error isTrustedError', () => {
    const errHandler = createErrorHandler()
    const isTrusted = errHandler.isTrustedError(new Error('Test Error'))
    expect(isTrusted).to.equal(false)
  })
})
