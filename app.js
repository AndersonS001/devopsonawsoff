const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => {
  res.send('Hello World by Anderson Aguiar!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
