class ContactController {
  //[GET]
  contact(req, res) {
    //USE 'OTHER' LAYOUT
    res.render("contact/contact", { title: "my other page", layout: "other" });
    // res.render('contact/contact')
  }
  //[GET]
  show(req, res) {
    res.send("extended of Contact!!!!");
  }
}
module.exports = new ContactController();
