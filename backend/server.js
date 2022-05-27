const express = require('express');
const cors = require('cors')
const products = require('./data/products');

const app = express()
const port = 5000;

app.use(cors())
app.use(express.json())


app.get('/',(req,res)=> {
    res.send('API is running')
})
app.get('/api/products',(req,res)=> {
    res.json(products)
})
app.get('/api/product/:id',(req,res)=> {
    const product = products?.find((p)=> p?._id === req?.params?.id)
    res.json(product)
})

app.listen(port, console.log('Server is running on port ' + port))