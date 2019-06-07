const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/users', (req, res)=> {
    console.log(req.body)
    res.send('<h2>Uploader user</h2>')
})

app.listen(port, ()=> {
    console.log(`Online ${port}`)
})