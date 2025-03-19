# Backend autenticación usuarios

## Inicializar el repositorio

1. Hemos creado la carpeta
2. Inicializamos y subimos los primeros archivos al repositorio local

```bash
git init
git add .
git commit -m "build"
```

## Crear proyecto de npm
1. Para arrancar el proyecto de npm

```bash
npm init -y
```

2. Descargamos las dependencias

```bash
npm install express
npm i express
```

3. Creamos un .gitignore

## Crear servidor

1. Creamos un `hola mundo`
2. Añadimos `better-sqlite3`

```bash
npm i better-sqlite3
```
3. Lo integramos en nuestro server

```js
//Conectar a la base de datos
const db = betterSqlite3('database.db');

//Obtenemos la ruta absoluta a init.sql
const initSqlPath = path.join(__dirname, 'init.sql');
//Leemos el archivo init.sql
const initSql = fs.readFileSync(initSqlPath, 'utf8');
//Ejecutamos el contenido de init.sql
//exec solo funciona para queries que *NO* devuelven datos
db.exec(initSql);
//Para consultas que *SI* devuelven datos usamos prepare
// y luego lo ejecutamos con .all()
const query = db.prepare('SELECT * FROM users');
const users = query.all();
console.log(users);
```