const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('Hello Express')
})

app.get('/weather', (req, res) => {
  res.send('Your weather')
})

app.listen(3000, () => {
  console.log('server is up on port 3000')
})