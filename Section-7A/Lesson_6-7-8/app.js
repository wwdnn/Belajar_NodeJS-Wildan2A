const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const viewsPath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')

hbs.registerPartials(partialsPath)
app.set('views', viewsPath)
app.set('view engine', 'hbs')

app.get('', (req, res)=>{
  res.render('index',{
    title: 'My title',
    name: 'Wildan Setya Nugraha'
  })
})

app.listen(3000, ()=>{
  console.log('Server is up on port 3000')
})