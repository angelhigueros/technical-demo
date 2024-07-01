const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost')
  next()
})

app.use(cors())

app.get('/api', (req, res) => {
  res.json({ users: ['user 1', 'user 2', 'user 3', 'user 4', 'user 5'] })
})

app.use(express.static(path.join(__dirname, 'client/dist')))
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
})

app.listen(5000, () => {
  console.log(`Server is running on port 5000`)
})
