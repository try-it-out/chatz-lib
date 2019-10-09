/**
 * Application custom error type.
 * @extends Error
 */
class AppError extends Error {
  /**
   * @param {string} message - Error message.
   * @param {boolean} [isOperational] - Is error produced by application.
   * @param {number} [httpCode] - HTTP Code.
   */
  constructor (message, isOperational, httpCode) {
    super(message)
    Error.captureStackTrace(this, AppError)
    this.description = message
    this.isOperational = Boolean(isOperational)
    this.httpCode = httpCode
  }
}

module.exports = AppError
