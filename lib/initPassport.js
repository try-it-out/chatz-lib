const AppError = require('./AppError')
const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

function getUserFromPayload (jwtPayload, done) {
  if (!jwtPayload || !jwtPayload.name) {
    done(new AppError('Wrong jwt token', true))
  } else {
    done(null, { name: jwtPayload.name })
  }
}

/**
 * Initialize passport.
 * @param {Object} options
 * @param {string} options.secret - Secret for jwt token.
 * @returns {Passport}
 */
function initPassport (options) {
  if (!options || !options.secret) {
    throw new AppError('No jwt secret provided', true)
  }
  const jwtPassportOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: options.secret
  }
  passport.use(new JwtStrategy(jwtPassportOptions, getUserFromPayload))
  return passport
}

module.exports = {
  initPassport,
  getUserFromPayload
}
