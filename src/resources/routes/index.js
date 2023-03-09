const newsRouter = require("./news");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const loginRouter = require("./login");
const registerRouter = require("./register");
const contactRouter = require("./contact");
const adminRouter = require("./admin");
const testRouter = require("./test");

function route(app) {
  app.use("/test", testRouter)
  app.use("/register", registerRouter);
  app.use("/contact", contactRouter);
  app.use("/news", newsRouter);
  app.use("/courses", coursesRouter);
  app.use("/login", loginRouter);
  app.use("/admin", adminRouter);
  app.use("/", siteRouter);
}

module.exports = route;
