import mongoose from "mongoose";
import config from '../config.js';

const connection = {}

async function connectDb() {
    if (connection.isConnection) {
         return
     }

    const db = await mongoose.connect(config.mongoDbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })

    connection.isConnection = db.connections[0].readyState
}

export default connectDb