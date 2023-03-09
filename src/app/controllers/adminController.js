const Course = require("../models/Course");
const account = require("../models/account");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class adminController {
  //[GET] /admin/course
  show(req, res, next) {
    Course.find({})
      .then((course) => {
        res.render("admin/coursesManage", {
          course: mutipleMongooseToObject(course),
          layout: false,
        });
      })
      .catch(next);
    
      

  }
  //[GET] admin/account
  showAccount(req, res, next) {
    account.find({})
      .then((account) => {
        res.render("admin/accountManage", {
          account: mutipleMongooseToObject(account),
          layout: false,
        });
      })
      .catch(next);
  }
   //[GET] /admin/detail/:id
  showAccountDetail(req,res,next){
       account.findOne({
        _id: req.params.id
    })
    .populate('list_course.course')
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
    
  }
  //[GET] /admin/add
  addCourse(req, res, next) {
    res.render("admin/addCourse", { layout: false });
  }
  //[POST] /admin/add
  addSaveCourse(req, res, next) {
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(req.body);
    console.log(course);
    course
      .save()
      .then(() => res.redirect("/admin"))
      .catch((error) => {});
  }
  // [GET] /admin/:id/edit
  editCourse(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("admin/editCourse", {
          course: mongooseToObject(course),
          layout: false,
        })
      )
      .catch(next);
  }
  // [PUT] /admin/:id/edit
  updateCourse(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/admin"))
      .catch(next);
  }
  //[DELETE] /admin/:id/delete
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("/admin"))
      .catch(next);
  }
}

module.exports = new adminController();
