const express = require('express');
const cors = require('cors')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')

const app = express()
const port = 5000;

connectDB()

app.use(cors())
app.use(express.json())



app.get('/',(req,res)=> {
    res.send('API is running')
})

app.use('/api/products', productRoutes)




app.listen(port, console.log('Server is running on port ' + port))