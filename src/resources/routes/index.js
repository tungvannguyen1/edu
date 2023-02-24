const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const loginRouter = require('./login');
const contactRouter = require('./contact');
const adminRouter = require('./admin');

function route(app) {
    app.use('/contact', contactRouter);
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/login', loginRouter);
    app.use('/admin', adminRouter);
    app.use('/', siteRouter);
}

module.exports = route;
