const express = require('express')

const app = express()

app.get('/weather', (req, res) => {
  res.send('You provided "' + req.query.address + '" as the address')
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})



