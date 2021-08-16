import request from 'supertest'
import app from '../../app'
import { connectDatabase, disconnectDatabase } from '../../database'
import { STAGE, API_VERSION } from '../../config'
import { User } from '../../models/User'

beforeAll(async () => {
  jest.setTimeout(50000)
  await connectDatabase()
})
afterAll(async () => {
  await disconnectDatabase()
  jest.setTimeout(10000)
})

beforeEach(()=>{
  jest.setTimeout(50000)
})

describe('Get /user', () => {
  describe('valid request', () => {
    test('Should responded with a 200 status code', async () => {
      const response = await request(app)
        .get(`/${STAGE}/${API_VERSION}/user`)
        .send()
      expect(response.statusCode).toBe(200)
    })
    test('Should responded with an object', async () => {
      const response = await request(app)
        .get('/user')
        .send()
      expect(response.statusCode).toBeTruthy()
    })
  })
})

describe('POST /auth/login', () => {
  describe('valid request non-google', () => {
    test('Should responded with a 200 status code', async () => {
      const response = await request(app)
        .post(`/${STAGE}/${API_VERSION}/auth/login`)
        .send({
          email: 'shintya.bukitvista@gmail.com',
          password: 'bukitvista',
          type: 'normal',
        })
      expect(response.statusCode).toBe(200)
    })

    test('Should responded with an userId', async () => {
      const response = await request(app)
        .post(`/${STAGE}/${API_VERSION}/auth/login`)
        .send({
          email: 'shintya.bukitvista@gmail.com',
          password: 'bukitvista',
          type: 'normal',
        })
      expect(response.body).toBeTruthy()
    })
  })
  describe('valid request google', () => {
    test('Should responded with a 200 status code', async () => {
      const response = await request(app)
        .post(`/${STAGE}/${API_VERSION}/auth/login`)
        .send({
          name: 'tes123t',
          email: 'bukit12356@test.com',
          googleId: '6345523121233442122312341341234',
          type: 'google',
          access_token: 'sasdf4w355424234adsaer323423',
          image_url: 'https:.asasdfasfd',
        })
      expect(response.statusCode).toBe(200)
    })
    test('Should responded with an userId', async () => {
      const response = await request(app)
        .post(`/${STAGE}/${API_VERSION}/auth/login`)
        .send({
          name: 'tes123t',
          email: 'bukit12356@test.com',
          googleId: '6345523121233442122312341341234',
          type: 'google',
          access_token: 'sasdf4w355424234adsaer323423',
          image_url: 'https:.asasdfasfd',
        })
      expect(response.body).toHaveProperty('userId')
    })
  })
  describe('service provider request', () => {
    test('Should responded with a 200 status code', async () => {
      const response = await request(app)
        .post(`/${STAGE}/${API_VERSION}/auth/login`)
        .send({
          email: 'eka_tourbali@yahoo.com',
          password:"bukitvista",
          type:"normal",
        })
      expect(response.statusCode).toBe(200)
    })
  })
  describe('valid request mobile', () => {
    describe('employee payload', () => {
      test('Should responded with a 200 status code', async () => {
        const response = await request(app)
          .post(`/${STAGE}/${API_VERSION}/auth/login`)
          .send(
            {
              "email":"shintya.bukitvista@gmail.com",
              "password":"bukitvista",
              "type":"normal",
              "platform": "mobile"
          }
          )
        expect(response.statusCode).toBe(200)
      })
      test('Should responded with an userId', async () => {
          const response = await request(app)
            .post(`/${STAGE}/${API_VERSION}/auth/login`)
            .send(
              {
                "email":"shintya.bukitvista@gmail.com",
                "password":"bukitvista",
                "type":"normal",
                "platform": "mobile"
            }
            )
        expect(response.body).toHaveProperty('userId')
      })
    })
    describe('partner payload', () => {
    test('Should responded with a 200 status code', async () => {
        const response = await request(app)
          .post(`/${STAGE}/${API_VERSION}/auth/login`)
          .send(
            {
              "email":"bv.partner1@gmail.com",
              "password":"bukitvista",
              "type":"normal",
              "platform": "mobile"
          }
          )
        expect(response.statusCode).toBe(200)
      })
      test('Should responded with an userId', async () => {
          const response = await request(app)
            .post(`/${STAGE}/${API_VERSION}/auth/login`)
            .send(
              {
                "email":"bv.partner1@gmail.com",
                "password":"bukitvista",
                "type":"normal",
                "platform": "mobile"
            }
            )
        expect(response.body).toHaveProperty('userId')
      })
    })
  })
})
