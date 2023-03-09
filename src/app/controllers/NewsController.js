const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class NewsController {
  news(req, res, next) {
    res.render("news/news");
  }
}
module.exports = new NewsController();
