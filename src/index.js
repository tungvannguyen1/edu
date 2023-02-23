const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')

const db = require('./config/db')
const route = require('./resources/routes')

// db.connect()
app.use(
  express.urlencoded({
      extended: true,
  }),
);

app.use(express.json());
app.use(cookieParser())

//Template engine
app.engine('hbs', hbs.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//static 
// Use static folder
app.use(express.static(path.join(__dirname, '/public')));

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})