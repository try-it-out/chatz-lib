const AppError = require('./AppError')
const mongoose = require('mongoose')
mongoose.Promise = Promise

/**
 * Initialize mongoose connection.
 * @param {Object} options
 * @param {string} options.dbUrl - Mongodb connection url.
 * @param {string} options.config - Mongoose connection config.
 * @returns {Promise}
 */
function initMongoose (options) {
  if (!options || !options.dbUrl) {
    throw new AppError('No dbUrl provided', true)
  }
  const config = Object.assign(
    {
      keepAlive: 1,
      poolSize: 5,
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    options.config
  )
  return mongoose.createConnection(options.dbUrl, config)
}

module.exports = initMongoose
