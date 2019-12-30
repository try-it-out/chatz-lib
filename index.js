const AppError = require('./lib/AppError')
const ErrorHandler = require('./lib/ErrorHandler')
const { createErrorHandler } = require('./lib/ErrorHandler')
const createAuthToken = require('./lib/createAuthToken')
const initLogger = require('./lib/initLogger')
const initMongoose = require('./lib/initMongoose')
const { initPassport } = require('./lib/initPassport')

module.exports = {
  AppError,
  ErrorHandler,
  createErrorHandler,
  createAuthToken,
  initLogger,
  initMongoose,
  initPassport
}
