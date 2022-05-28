const mongoose = require('mongoose')

const DB = 'mongodb+srv://innosufiyan:innosufiyan@cluster0.bryfl.mongodb.net/proshop?retryWrites=true&w=majority'


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB)

        console.log(`Mongo DB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

module.exports = connectDB