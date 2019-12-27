const {
  AppError,
  initMongoose
} = require('../../index.js')
const { MongoMemoryServer } = require('mongodb-memory-server')
const { Connection } = require('mongoose')

describe('lib - mongoose', () => {
  it('Should fail if no dbUrl option passed to messageModel', () => {
    expect(initMongoose).to.throw(AppError, 'No dbUrl provided')
  })

  it('Should return connection when dbUrl passed', async () => {
    const mongod = new MongoMemoryServer()
    const dbUrl = await mongod.getConnectionString()
    const client = await initMongoose({ dbUrl })
    expect(client).to.be.an.instanceof(Connection)
    client.close()
    mongod.stop()
  })
})
