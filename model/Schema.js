import mongoose from "mongoose";

const schema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
})

 const models = mongoose.model(schema)
 export default models