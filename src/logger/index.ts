import winston from 'winston'

import { LOGGER_LEVEL } from '../config'

const createFormatsOption = () => {
  const formats = [winston.format.simple()]

  // Colorize logging if on dev environment
  if (process.env.NODE_ENV !== 'production') {
    formats.unshift(winston.format.colorize())
  }

  return winston.format.combine(...formats)
}

const logger = winston.createLogger({
  level: LOGGER_LEVEL,
  transports: [new winston.transports.Console()],
  format: createFormatsOption(),
})

export default logger
