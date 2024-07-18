require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const routes = require('./routes/route')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes)

app.listen(port, () => {
  console.log(`listening on ${port}`)
})