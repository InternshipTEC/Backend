import { createConnection, Connection, ConnectionOptions } from "typeorm";

import logger from "../logger";
import ormConfig from "../../ormconfig";
import { IS_TEST } from "../config";

let connection: Connection | undefined;

export function connectDatabase(options?: Partial<ConnectionOptions>) {
  // @ts-ignore -  Merging of same type causes error due to
  // potentially changing database connection type
  const connectionOption: ConnectionOptions = {
    ...ormConfig[0],
    ...options
  };

  return createConnection(connectionOption)
    .then(c => {
      connection = c;
      logger.info("DB connected");
      return connection;
    })
    .catch(error => {
      logger.error("DB Connection error");
      logger.error(error);
      throw error;
    });
}

export async function disconnectDatabase() {
  if (!connection) {
    throw new Error("Connection doesn't exist");
  }

  if (IS_TEST) {
    await connection.dropDatabase();
  }

  return connection.close();
}
