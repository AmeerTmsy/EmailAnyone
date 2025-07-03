require('dotenv').config()
const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000
const mailRout = require('./routers/mailRout')
const connectDB = require('./config/db')
connectDB();

app.use(cors({origin: 'http://localhost:5173', credentials: true}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.use('/mails', mailRout)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})