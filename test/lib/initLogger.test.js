const { initLogger } = require('../../index.js')

describe('lib - logger', () => {
  it('Should init logger in "production" mode', () => {
    const logger = initLogger('production', {})
    expect(logger.transports.length).to.equal(1)
  })

  it('Should init logger in "test" mode', () => {
    const logger = initLogger('test', {})
    expect(logger.transports.length).to.equal(1)
  })

  it('Should init logger in default mode', () => {
    const logger = initLogger()
    expect(logger.transports.length).to.equal(1)
  })
})
