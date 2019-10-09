const { createLogger, format, transports } = require('winston')

/**
 * Initialize winston Logger.
 * @param {string} type - Environment type.
 * @param {Object} options
 * @param {string} options.timestamp - Timestamp format.
 * @returns {Logger}
 */
function initLogger (type, options) {
  options = options || {}
  const timestamp = options.timestamp || 'YYYY-MM-DD HH:mm:ss'
  const transportsList = []

  switch (type) {
    case 'production':
      transportsList.push(new transports.Console({
        format: format.combine(
          format.timestamp({ format: timestamp }),
          format.json()
        )
      }))
      break
    case 'test':
      transportsList.push(new transports.Console({ silent: true }))
      break
    default:
      transportsList.push(new transports.Console({
        format: format.combine(
          format.timestamp({ format: timestamp }),
          format.colorize(),
          format.simple()
        )
      }))
      break
  }

  return createLogger({ transports: transportsList })
}

module.exports = initLogger
