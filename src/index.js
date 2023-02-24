const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const methodOverride = require('method-override')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')
const db = require('./config/db')
const route = require('./resources/routes')
const bodyParser = require('body-parser')

// db.connect()
// app.use(
//   express.urlencoded({
//       extended: true,
//   }),
// );
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.json());
app.use(cookieParser())

app.use(methodOverride('_method'))

//Template engine
app.engine('hbs', hbs.engine({
    extname: '.hbs',
    helpers: { sum(a,b) {return a+b} }
    
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