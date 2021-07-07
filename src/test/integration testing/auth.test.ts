import request from 'supertest'
import { connectDatabase, disconnectDatabase } from '../../database'
import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cors, { CorsOptions } from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { router } from '../../routes/index'
import dotenv from 'dotenv'
import { IS_PRODUCTION } from '../../config'

dotenv.config()

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Service",
      version: "2.0.0",
      description: "This service is meant to be used as a user and authentication service at Bukit Vista"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis : ["./src/routes/**/*{.ts,.js}","./src/docs/**/*.yaml"]
}

const specs = swaggerJSDoc(options)
const corsOptions: CorsOptions = {
	origin: IS_PRODUCTION ? [] : 'http://localhost:3001',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
export const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(helmet())
app.use('/', router)
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs))

beforeAll(async ()=>{
	await connectDatabase()
})
afterAll(async () => {
	await disconnectDatabase()
})

describe("POST /user", ()=>{
	describe("valid request", ()=>{
		test("Should responded with a 200 status code", async ()=>{
			const response =  await request(app).post("/user").send({
				name:"jhonson",
				password:"jhonson1212",
				email:"jhonson@gmail.com"
			})
			expect(response.statusCode).toBe(200)
		})
		test("Should have user props detail", async () => {
			const response =  await request(app).post("/user").send({
				name:"jhonson1",
				password:"jhonson12122",
				email:"jhonson1@gmail.com"
			})
			const {id, name, password, email} = response.body
			expect(id).toBeTruthy();
			expect(name).toBeTruthy();
			expect(password).toBeTruthy();
			expect(email).toBeTruthy();
		})
	})
	describe("invalid request", () => {
		test("Without name, should return 400", async ()=>{
			const response =  await request(app).post("/user").send({
				password:"jhonson1212",
				email:"jhonson@gmail.com"
			})
			expect(response.statusCode).toBe(400)
		})
		test("Without password, should return 400", async ()=>{
			const response =  await request(app).post("/user").send({
				name:"jhonson1",
				email:"jhonson@gmail.com"
			})
			expect(response.statusCode).toBe(400)
		})
		test("Without email, should return 400", async ()=>{
			const response =  await request(app).post("/user").send({
				name:"jhonson1",
				password:"jhonson1212",
			})
			expect(response.statusCode).toBe(400)
		})
		test("Error return response", async ()=>{
			const response =  await request(app).post("/user").send({
				name:"jhonson1",
				password:"jhonson1212",
			})
			expect(response.body).toBeTruthy()
		})
	
	})
})

describe("Get /user/all", ()=>{
	describe("valid request", ()=>{
		test("Should responded with a 200 status code", async ()=>{
			const response =  await request(app).get("/user/all").send()
			expect(response.statusCode).toBe(200)
		})
		test("Should responded with an object", async ()=>{
			const response =  await request(app).get("/user/all").send()
			expect(response.statusCode).toBeTruthy()
		})
	})
})

describe("Get /get/{id}", ()=>{
	describe("valid request", ()=>{
		test("Should responded with a 200 status code", async ()=>{
			const postUser =  await request(app).post("/user").send({
				name:"jhonson",
				password:"jhonson1212",
				email:"jhonson21@gmail.com"
			})
			expect(postUser.statusCode).toBe(200)
			const getUser =  await request(app).get("/user/"+postUser.body.id).send()
			expect(getUser.statusCode).toBe(200)
		})
	})
})
