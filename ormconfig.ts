import "reflect-metadata";
import { ConnectionOptions } from "typeorm";

import {
  DATABASE_LOGGING,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  IS_TEST,
  DATABASE_PASSWORD,
  DATABASE_NAME
} from "./src/config";

const baseConfig: ConnectionOptions = {
  type: "mysql",
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  logging: DATABASE_LOGGING
};

const config: ConnectionOptions[] = [
  {
    ...baseConfig,
    entities: [`src/models/*.{ts,.js}`],
    migrations: [`src/migrations/*{.ts,.js}`],
    cli: {
      entitiesDir: "src/models",
      migrationsDir: "src/migrations"
    }
  },
  {
    ...baseConfig,
    name: "seed",
    entities: [`${__dirname}/**/entities/**/*{.ts,.js}`],
    migrationsTableName: "seeds",
    migrations: ["seeds/**/*{.ts,.js}"],
    cli: {
      migrationsDir: "seeds"
    }
  }
];

// module.exports is need in migration-cli
module.exports = config;

// Normal default export for usage in code
export default config;
