const express = require('express');
const betterSqlite3 = require('better-sqlite3');
const fs = require('fs');
const path = require('path');
const port = 3000;
const app = express();

//Conectar a la base de datos
const db = betterSqlite3('database.db');

//Leer y ejecutar el script init.sql
const initSqlPath = path.join(__dirname, 'init.sql');
const initSql = fs.readFileSync(initSqlPath, 'utf8');
db.exec(initSql);


app.get('/', (req,res) => {
    res.send("<h1>Hola mundo</h1>")
})

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
})

