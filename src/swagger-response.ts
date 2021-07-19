import fs from 'fs';
import request from 'supertest';
import app from './app';
import { connectDatabase, disconnectDatabase } from './database'

const PORT = 3000
const URI = `localhost:${PORT}`

// still not done yet, on progress concatinating
const processData = async () => {
    await connectDatabase();
    let initialData;
    fs.readFile('./src/docs/swagger-output.json',(err, rawData)=>{
        if (err) {
            console.log("File read failed:", err)
            return;
        }
        initialData = JSON.parse(rawData.toString());
    })
    const response = await request(app)
            .get('/user/all')
    const logInResponse = response.body
    console.log({initialData,logInResponse})
    await disconnectDatabase();
}

processData()