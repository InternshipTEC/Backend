import { Request } from 'express'
import { User } from '../../models/User'
import * as userService from '../../service/userService'


jest.mock('../../repositories/userRepository', () => {
	const mockUser = new User()
	mockUser.email = "jhonson@gmail.com"
	mockUser.name = "Jhonson Alibaba"
	mockUser.password = "JAthebaba12345"
	mockUser.id = "6862df45-240c-4cbd-8f2d-78c7c26440b1"
	return {
		getUserById : async (id:string) => Promise.resolve(mockUser),
		getUserByEmail : async (email:string) => Promise.resolve(mockUser),
		getAllUser : async () => Promise.resolve([mockUser]),
		createUser : async (user:User) => Promise.resolve(mockUser),
		updateUser : async (id:string,user:User) => Promise.resolve(mockUser),
		deleteUser : async () => Promise.resolve(mockUser),
	}
})

describe("getUserById function", () => {
	test("Return an object", async () => {
		const request = {
			body:{
				id: "6862df45-240c-4cbd-8f2d-78c7c26440b1"
			}
		} as Request
		const response = await userService.getUserById(request);
		expect(response).toBeTruthy()
	})
})

describe("getUserByEmail function", () => {
	test("Return an object", async () => {
		const request = {
			body:{
				email:"jhonny@gmail.com"
			}
		} as Request
		const response = await userService.getUserByEmail(request);
		expect(response).toBeTruthy()
	})
})

describe("getAllUser function", () => {
	test("Return an object",async () => {
		const response = await userService.getAllUser();
		expect(response).toBeTruthy()
	})
})

describe("createUser function", () => {
	test("Return an object",async () => {
		const request = {
			body:{
				email: "jhonson@gmail.com",
				name: "Jhonson Alibaba",
				password: "JAthebaba12345",
			}
		} as Request
		const response = await userService.createUser(request);
		expect(response).toBeTruthy()
	})
})

describe("updateUser function", () => {
	describe("Valid request", ()=>{
		test("Return an object",async () => {
			const request = {
				body:{
					email: "jhonson@gmail.com",
					name: "Jhonson Alibaba",
					password: "JAthebaba12345",
				}
			} as Request
			request.params= {id:"6862df45-240c-4cbd-8f2d-78c7c26440b1"}
			const response = await userService.updateUser(request);
			expect(response).toBeTruthy()
		})
	})
	describe("Invalid request", ()=>{
		test("Return an object",async () => {
			const request = {
				body:{
					email: "jhonson@gmail.com",
					name: "Jhonson Alibaba",
					password: "JAthebaba12345",
				}
			} as Request
			request.params= {id:"6862df45-240c-4cbd-8f2d-78c7c26440b1"}
			const response = await userService.updateUser(request);
			expect(response).toBeTruthy()
		})
	})

})

describe("deleteUser function", () => {
	test("Return an object",async () => {
		// Params is generally undefined and cannot be assigned during construction
		const request = {} as Request
		request.params= {id:"6862df45-240c-4cbd-8f2d-78c7c26440b1"}
		const response = await userService.deleteUser(request);
		expect(response).toBeTruthy()
	})
})



