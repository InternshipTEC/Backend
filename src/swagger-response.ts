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
  postUserRequest: {
    name: faker.name.findName(),
    password: faker.internet.password(),
    email: faker.internet.email()
  },
  putUserRequest: {
    name: faker.name.findName(),
    password: faker.internet.password(),
    email: faker.internet.email()
  },
  signUpRequest: {
    name: faker.name.findName(),
    password: faker.internet.password(),
    email: faker.internet.email()
  },
  loginRequest: {
    name: faker.name.findName(),
    password: faker.internet.password()
  }
};

const processData = async () => {
  await connectDatabase();
  const postUserResponse = await request(app)
    .post("/user")
    .send(requests.postUserRequest);
  const getUserResponse = await request(app)
    .get(`/user/${postUserResponse.body.id}`)
    .send();
  const putUserResponse = await request(app)
    .put(`/user/${postUserResponse.body.id}`)
    .send(requests.postUserRequest);
  const getAllUserResponse = await request(app)
    .get(`/user/all`)
    .send();
  const deleteUserResponse = await request(app).delete(
    `/user/${postUserResponse.body.id}`
  );
  const signUpResponse = await request(app)
    .post("/auth/signup")
    .send(requests.signUpRequest);
  const loginResponse = await request(app)
    .post("/auth/login")
    .send({
      name: postUserResponse.body.email,
      password: postUserResponse.body.password
    });
  await request(app).delete(`/user/${signUpResponse.body.id}`);
  await disconnectDatabase();
  return {
    ...requests,
    postUserResponse: postUserResponse.body,
    putUserResponse: putUserResponse.body,
    getAllUserResponse: getAllUserResponse.body,
    getUserResponse: getUserResponse.body,
    deleteUserResponse: deleteUserResponse.body,
    loginResponse: loginResponse.body,
    signUpResponse: signUpResponse.body
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
