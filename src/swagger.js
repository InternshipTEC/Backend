const swaggerAutogen = require('swagger-autogen')

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
       User: {
            name: "zay",
            email: "zay@gmail.com",
            password: "zay123"
        },
    }
}

const outputFile = './src/docs/swagger-output.json'
const endpointsFiles = ['./src/app.ts']

swaggerAutogen()(outputFile, endpointsFiles, doc)