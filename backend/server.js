const express = require('express');
const cors = require('cors')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes.js')

const app = express()
const port = 5000;

connectDB()

app.use(cors())
app.use(express.json())



app.get('/',(req,res)=> {
    res.send('API is running')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)




app.listen(port, console.log('Server is running on port ' + port))