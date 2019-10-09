/**
 * Class for unified error handling.
 */
class ErrorHandler {
  /**
   * @param {Object} options
   * @param {Logger} [options.logger] - Instance of winston Logger.
   */
  constructor (options) {
    this.logger = options && options.logger
  }

  /**
   * Handle an error.
   * @param {Error|AppError} error
   */
  handle (error) {
    if (this.logger && error) {
      this.logger.error(error.message)
    }
  }

  /**
   * Check if error is trusted (produced by the application).
   * @param {Error|AppError} error
   * @returns {boolean}
   */
  isTrustedError (error) {
    return Boolean(error && error.isOperational)
  }
}

/**
 * Create an instance of ErrorHandler.
 * @param {Object} options
 * @param {Logger} [options.logger] - Instance of winston Logger.
 * @returns {ErrorHandler}
 */
function createErrorHandler (options) {
  return new ErrorHandler(options)
}

module.exports = ErrorHandler
module.exports.createErrorHandler = createErrorHandler
