import 'reflect-metadata'
import { ConnectionOptions } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

import { DATABASE_LOGGING, DATABASE_HOST, DATABASE_PORT, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } from './config'

const baseConfig: ConnectionOptions = {
  type: 'mysql',
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  logging: DATABASE_LOGGING,
}

const config: ConnectionOptions[] = [
  {
    ...baseConfig,
    entities: [`${__dirname}/models/*{.ts,.js}`],
    migrations: [`${__dirname}/database/migrations/*{.ts,.js}`],
    cli: {
      entitiesDir: `src/models`,
      migrationsDir: `src/database/migrations`,
    },
    namingStrategy: new SnakeNamingStrategy(),
  },
  {
    ...baseConfig,
    name: 'seed',
    entities: [`${__dirname}/models/*{.ts,.js}`],
    migrations: [`${__dirname}/database/migrations/*{.ts,.js}`],
    cli: {
      migrationsDir: 'src/seeds',
    },
    namingStrategy: new SnakeNamingStrategy(),
  },
]

// module.exports is need in migration-cli
module.exports = config

// Normal default export for usage in code
export default config
