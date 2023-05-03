const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const chefData = require('./data/AllData.json')

app.use(cors())
app.get('/',(req,res)=>{
    res.send('api is running')
})

app.get('/chef',(req,res)=>{
    res.send(chefData)
})

app.get('/chef/:id',(req,res)=>{
    const id = req.params.id;
console.log(id)
    const findedData = chefData.find(pd=>pd.id==id)
    res.send(findedData)
})


app.listen(port,()=>{
    console.log(`port is running on:${port}`)
})