const author = require("../models/author");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class testController {
  show(req, res, next) {
    author
      .find({})
      .populate("list_course")
      .then((data) => {
        const data1 = data.forEach(data => {
            var userData = data.toObject()
            // console.log(userData.name,userData.email);
            // userData.list_course.forEach(course => {
            //     console.log(course)
            // })
            // console.log(userData)
        })
        res.json(data)
        
        // res.render("test", {
        //     userData,
        //     layout: false,
        //   });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = new testController();
