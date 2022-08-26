const express = require('express')

const app = express()


app.set('view engine', 'hbs')
app.get('*', (req, res)=>{
  res.render('404', {
    title:'404',
    name: 'Wildan Setya Nugraha',
    errorMessage: 'Page not found'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})    