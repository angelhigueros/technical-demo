const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const config = require('./utils/config')
const router = require('./src/routes')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5000')
  next()
})

app.use(cors())

app.use('/api', router)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
})

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`)
})
