import path from 'path'
import { config as loadEnv } from 'dotenv'
import { LoggerOptions } from 'typeorm/logger/LoggerOptions'

import { createTypeormLogger } from './database/utils'

loadEnv({ path: path.resolve(__dirname, '../.env') })

export const PORT = process.env.PORT || 3000
export const LOGGER_LEVEL = process.env.LOGGER_LEVEL || 'info'

export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_TEST = process.env.NODE_ENV === 'test'

export const DATABASE_LOGGING: LoggerOptions = createTypeormLogger(process.env.DATABASE_LOGGING)
export const DATABASE_HOST = process.env.DATABASE_HOST || ''
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME || ''
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || ''
export const DATABASE_NAME = process.env.DATABASE_NAME || ''
export const DATABASE_PORT = process.env.DATABASE_PORT || ''
