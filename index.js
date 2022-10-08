const express = require('express')
const app = express()
const port = 3000

app.get('/:name', (req, res) => {
  res.send('Hola ' + req.params.name + ', soy un servidor web creado con Express.js y Node.js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
