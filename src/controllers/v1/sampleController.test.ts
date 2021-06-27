import request from 'supertest'
import express from 'express'
import bodyParser from 'body-parser'

import sampleController from './sampleController'

const app = express()

app.use(bodyParser.json())
app.use(sampleController)

const server = request(app)

describe('/v1/request/sample', () => {
  it('should return status 200 OK with body success true and userId 1234', async () => {
    server
      .get('/v1/request/sample')
      .set('Accept', 'application/json')
      .expect(200)
      .end(async (err, res) => {
        expect(res.body).toEqual({
          success: true,
          data: {
            id: 1234,
          },
        })
      })
  })
})
