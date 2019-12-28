const { AppError, createAuthToken } = require('../../index')
const jwt = require('jsonwebtoken')

describe('lib - createAuthToken', () => {
  it('Should fail if no params passed', () => {
    expect(createAuthToken).to.throw(AppError, 'Wrong token params')
  })

  it('Should return JWT token', () => {
    const name = 'test123'
    const secret = 'secret123'
    const token = createAuthToken(name, secret)
    const payload = jwt.verify(token, secret)
    expect(payload.name).to.be.equal(name)
  })
})
