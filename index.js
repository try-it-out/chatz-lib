module.exports = {
  AppError: require('./lib/AppError'),
  ErrorHandler: require('./lib/ErrorHandler'),
  createErrorHandler: require('./lib/ErrorHandler').createErrorHandler,
  createAuthToken: require('./lib/createAuthToken'),
  initLogger: require('./lib/initLogger'),
  initMongoose: require('./lib/initMongoose'),
  initPassport: require('./lib/initPassport').initPassport
}
