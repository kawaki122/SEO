var express = require("express");
var router = express.Router();
var Home = require("../model/home");
var multer = require("multer");
const fs = require("fs");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  }
});
var upload = multer({ storage: storage });
/* GET home page. */
router.get("/", function(req, res, next) {
  Home.find((err, homes) => {
    let home = homes[0];
    res.render("home", { title: "SEO Cares", home });
  });
});
router.post("/edit", (req, res, next) => {
  let {
    _id,
    firstHeading,
    firstSubHead,
    firstContent,
    secondHeading,
    secondContent,
    thirdHeading,
    thirdContent
  } = req.body;
  let home = new Home({
    _id,
    firstHeading,
    firstSubHead,
    firstContent,
    secondHeading,
    secondContent,
    thirdHeading,
    thirdContent
  });
  Home.findByIdAndUpdate(_id, home, (err, homeNew) => {
    if (err) throw err;
    res.redirect("/dashboard");
  });
});
router.post("/picture1", upload.single("image"), (req, res, next) => {
  let { _id } = req.body;
  let url = "/uploads/" + req.file.filename;
  Home.findByIdAndUpdate(_id, { $set: { firstUrl: url } }, (err, homeNew) => {
    if (err) throw err;
    res.redirect("/pics");
  });
});
router.post("/picture2", upload.single("image"), (req, res, next) => {
  let { _id } = req.body;
  let url = "/uploads/" + req.file.filename;
  Home.findByIdAndUpdate(_id, { $set: { secondUrl: url } }, (err, homeNew) => {
    if (err) throw err;
    res.redirect("/pics");
  });
});
router.post("/picture3", upload.single("image"), (req, res, next) => {
  let { _id } = req.body;
  let url = "/uploads/" + req.file.filename;
  Home.findByIdAndUpdate(_id, { $set: { thirdUrl: url } }, (err, homeNew) => {
    if (err) throw err;
    res.redirect("/pics");
  });
});
router.get("/dashboard", function(req, res, next) {
  Home.find((err, homes) => {
    let home = homes[0];
    res.render("dashboard", { layout: "layout2", title: "Dashboard", home });
  });
});
router.get("/pics", function(req, res, next) {
  Home.find((err, homes) => {
    let home = homes[0];
    res.render("pics", { layout: "layout2", title: "Dashboard", home });
  });
});
module.exports = router;
