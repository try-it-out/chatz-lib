const { AppError } = require('../../index.js')
const { initPassport, getUserFromPayload } = require('../../lib/initPassport')
const { Passport } = require('passport')

describe('lib - initPassport', () => {
  it('Should fail if no secrte option passed', () => {
    expect(initPassport).to.throw(AppError, 'No jwt secret provided')
  })

  it('Should return passport instance when secret passed', async () => {
    const passport = await initPassport({ secret: '123' })
    expect(passport).to.be.an.instanceof(Passport)
  })
})

describe('lib - getUserFromPayload', () => {
  it('Should return user object from payload', async (done) => {
    const name = 'test123'
    getUserFromPayload({ name }, (_, user) => {
      expect(user.name).to.be.equal(name)
      done()
    })
  })

  it('Should faile if payload incorrect', async (done) => {
    getUserFromPayload({}, (err) => {
      expect(err.message).to.be.equal('Wrong jwt token')
      done()
    })
  })
})
