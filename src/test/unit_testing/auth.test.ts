import { Request } from 'express'
import { User } from '../../models/User'
import * as authService from '../../service/authService'

jest.mock('../../repositories/userRepository', () => {
  const mockUser = new User()
  mockUser.email = 'jhonson@gmail.com'
  mockUser.name = 'Jhonson Alibaba'
  mockUser.password = 'JAthebaba12345'
  mockUser.id = '6862df45-240c-4cbd-8f2d-78c7c26440b1'
  return {
    getUserById: async (id: string) => Promise.resolve(mockUser),
    getUserByEmail: async (email: string) => Promise.resolve(mockUser),
    getAllUser: async () => Promise.resolve([mockUser]),
    createUser: async (user: User) => Promise.resolve(mockUser),
    updateUser: async (id: string, user: User) => Promise.resolve(mockUser),
    deleteUser: async () => Promise.resolve(mockUser),
  }
})

describe('handleLogin function', () => {
  test('Return an object', async () => {
    const request = {
      body: {
        email: 'jhonson@gmail.com',
        name: 'Jhonson Alibaba',
        password: 'JAthebaba12345',
        id: '6862df45-240c-4cbd-8f2d-78c7c26440b1',
      },
    } as Request
    const response = await authService.handleLogin(request)
    expect(response).toBeTruthy()
  })
  test('Have a token access and user included', async () => {
    const request = {
      body: {
        email: 'jhonson@gmail.com',
        name: 'Jhonson Alibaba',
        password: 'JAthebaba12345',
        id: '6862df45-240c-4cbd-8f2d-78c7c26440b1',
      },
    } as Request
    const response = await authService.handleLogin(request)
    expect(response).toHaveProperty('user')
    expect(response).toHaveProperty('accessToken')
  })
})

describe('handleSignup function', () => {
  test('Return an object', async () => {
    const request = {
      body: {
        name: 'Jhonson Alibaba',
        password: 'JAthebaba12345',
      },
    } as Request
    const response = await authService.handleSignup(request)
    expect(response).toBeTruthy()
  })
  test('Have a token access and user included', async () => {
    const request = {
      body: {
        name: 'Jhonson Alibaba',
        password: 'JAthebaba12345',
      },
    } as Request
    const response = await authService.handleSignup(request)
    expect(response).toHaveProperty('user')
    expect(response).toHaveProperty('accessToken')
  })
})
