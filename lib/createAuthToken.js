const AppError = require('./AppError')
const jwt = require('jsonwebtoken')

/**
 * Create JWT Token.
 * @param {string} name - Username
 * @param {string} secret - Secret for jwt token.
 * @returns {string}
 */
module.exports = function createAuthToken (name, secret) {
  if (!name || !secret || typeof name !== 'string' || typeof secret !== 'string') {
    throw new AppError('Wrong token params', true)
  }
  return jwt.sign({ name }, secret)
}
