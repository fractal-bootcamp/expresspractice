const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())

const users = [{
    "email" : "bill@billy.com",
    "password" : "billythebill"
}]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');

})

app.post('/login', async (req, res) => {
    console.log("Post happened!")
    // console.log(req.body.email)
    // console.log(req.body.password)
    const emailInput = req.body.email
    const passwordInput = req.body.password

    const checkedUser = await users.find((user) => {
        return user.email === emailInput && user.password === passwordInput; 
    })
    console.log(checkedUser)
    // res.send(JSON.stringify(checkedUser))


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})