const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Randy Ruiz')
})

app.get('*', (req, res) => {
    res.status(404).send()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})