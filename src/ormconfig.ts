import 'reflect-metadata'
import { ConnectionOptions } from 'typeorm'

import { DATABASE_LOGGING, DATABASE_URL, DATABASE_URL_TEST, IS_TEST, IS_PRODUCTION } from './config'

const baseConfig: ConnectionOptions = {
  type: 'postgres',
  url: IS_TEST ? DATABASE_URL_TEST : DATABASE_URL,
  logging: DATABASE_LOGGING,
}

const config: ConnectionOptions[] = [
  {
    ...baseConfig,
    entities: [`${__dirname}/**/entities/**/*{.ts,.js}`],
    migrations: ['migrations/**/*{.ts,.js}'],
    synchronize: !IS_PRODUCTION,
    cli: {
      migrationsDir: 'migrations',
    },
  },
  {
    ...baseConfig,
    name: 'seed',
    entities: [`${__dirname}/**/entities/**/*{.ts,.js}`],
    migrationsTableName: 'seeds',
    migrations: ['seeds/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'seeds',
    },
  },
]

// module.exports is need in migration-cli
module.exports = config

// Normal default export for usage in code
export default config
