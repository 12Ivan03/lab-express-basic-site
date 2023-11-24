const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
  })

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html')
})

app.get('/compositions', (req, res) => {
    res.sendFile(__dirname + '/views/comps.html')
  })

app.get('/pictures', (req, res) => {
res.sendFile(__dirname + '/views/pic.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})