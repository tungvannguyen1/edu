const account = require("../models/account");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");
const jwt = require("jsonwebtoken");

class RegisterController {
  //[GET]
  getRegisterSite(req, res) {
    res.render("login/register", { layout: false });
  }
  //[POST]

  //test
  // register(req, res){
  //     console.log(req.body)
  // }

  /// Register OK
  register(req, res) {
    const accounts = new account(req.body);
    accounts
      .save()
      .then(() => res.send("SAVED!!!!"))
      .catch((error) => {});
  }
}

module.exports = new RegisterController();
