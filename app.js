// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const dt = new Date()
  const years = dt.getFullYear()
  const month = dt.getMonth() + 1
  const date = dt.getDate()
  const hour = dt.getHours()
  const min = dt.getMinutes()
  const sec = dt.getSeconds()
  console.log(`${years}-${month}-${date} ${hour}:${min}:${sec} | ${req.method} from ${req.path}`)
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
