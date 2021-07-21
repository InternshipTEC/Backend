const swaggerAutogen = require('swagger-autogen')
const fs = require('fs')

const requests = JSON.parse(fs.readFileSync('./src/docs/swagger-req-res-definition.json').toString())
const doc = {
    info: {
        version: "1.0.0",
        title: "Bukit Vista User Service API",
        description: "Documentation of Bukit Vista user and authentication service"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Auth",
            "description": "Endpoints for authentication operation"
        },
        {
            "name": "User",
            "description": "Endpoints for user crud operation"
        },
    ],
    definitions: {
        ...requests
    }
}

const outputFile = './src/docs/swagger-output.json'
const endpointsFiles = ['./src/app.ts']

swaggerAutogen()(outputFile, endpointsFiles, doc)