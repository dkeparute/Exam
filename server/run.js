const express = require('express')
const app = express()
const port = 3003

const mysql = require('mysql');

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "exam",
  password: "exam",
  database: "exam"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/labas/:id', (req, res) => {
  res.send(`labas tau ${req.params.id} `)
})

app.get('/test', (req, res) => {
  res.send(JSON.stringify({ test: 'OK' }))
})

// Kreipiames i DB ir issitraukiame duomenis 

app.get('/exam', (req, res) => {
  const sql = `
  select *
  from exam
  `;
  con.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})
// Perduodame DB duomenis
app.post('/exam', (req, res) => {
  const sql = `
  insert into exam
  (name, type, weight, born)
  values (?, ?, ?, ?)
  `;
  con.query(sql, [req.body.name, req.body.type, req.body.weight, req.body.born], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})
// Koreaguojame duomenis ir perduodame i DB

app.put('/exam/:id', (req, res) => {
  const sql = `
      update exam
      set name = ?, type = ?, weight = ?, born = ?
      where id = ?
  `;
  con.query(sql, [
    req.body.name,
    req.body.type,
    req.body.weight,
    req.body.born,
    req.params.id
  ], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})
// trinti gyvuna
app.delete('/exam/:id', (req, res) => {
  const sql = `
      delete from exam
      where id = ?
      `;
  con.query(sql, [req.params.id], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result);
  })
})

// Randa visus skirtingus tipus

app.get('/exam-type', (req, res) => {
  const sql = `
  select distinct type
  from exam
  `;
  con.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})

// Rodo tam tikro tipo rezultatus

app.get('/exam-filter/:type', (req, res) => {
  const sql = `
  select *
  from exam
  where type = ?
  `;
  con.query(sql, [req.params.type], (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  })
})

// paieska pagal varda
// SELECT column1, column2, ...
// FROM table_name
// WHERE columnN LIKE pattern;

app.get('/exam-name', (req, res) => {
  const sql = `
      SELECT *
      FROM exam
      WHERE name LIKE ?
  `;
  con.query(sql, ['%' + req.query.s + '%'], (err, results) => {
      if (err) {
          throw err;
      }
      res.send(results);
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})