import fs from "fs";
import request from "supertest";
import app from "./app";
import { connectDatabase, disconnectDatabase } from "./database";
import * as faker from "faker";
import dotenv from "dotenv";

dotenv.config();
const PORT = 3000;
const URI = `localhost:${PORT}`;

export const requests = {
  
};

const processData = async () => {
  await connectDatabase();
  const getWholeUserResponse = await request(app)
    .get(`/user`)
    .send();
  await disconnectDatabase();
  return {
    ...requests,
    getWholeUserResponse: getWholeUserResponse.body,
  };
};

processData()
  .then(rawdata => {
    const data = JSON.stringify(rawdata);
    fs.writeFile("./src/docs/swagger-req-res-definition.json", data, err => {
      if (err) {
        throw err;
      }
      console.log("Request and response data is saved");
    });
  })
  .catch(err => console.log(err));
