import express from 'express'
import mysql from 'mysql2'

const app = express()

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Fogjoe123.',
  database: 'test'
})

// middleware 解决客户端使用 json 格式传递数据时后端无法接收的问题
app.use(express.json())

app.get('/', (req, res) => {
  res.json('Hello this is backend!')
})

app.get('/books', (req, res) => {
  const q = 'SELECT * FROM books'
  db.query(q, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.post('/books', (req, res) => {
  const q = 'INSERT INTO books(`title`, `desc`, `cover`) VALUES (?)'
  const values = [req.body.title, req.body.desc, req.body.cover]

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err)
    return res.json('Book has been created successfully!')
  })
})

app.listen(9000, () => console.log('Connect to backend!!!'))
