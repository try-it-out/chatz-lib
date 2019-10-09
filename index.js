module.exports = {
  AppError: require('./lib/AppError'),
  ErrorHandler: require('./lib/ErrorHandler'),
  createErrorHandler: require('./lib/ErrorHandler').createErrorHandler,
  initLogger: require('./lib/initLogger'),
  initMongoose: require('./lib/initMongoose')
}
