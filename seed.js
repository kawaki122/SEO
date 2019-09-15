var Home = require("./model/home");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/siliconunion", {
  useNewUrlParser: true
});
let home = new Home({
  firstUrl: "",
  firstHeading: "Silicon Union",
  firstSubHead: "Business apps your company needs, built by you",
  firstContent:
    "Build apps that help fill gaps, like accelerating business workflows or<br> scaling internal operations,with G Suite’s low-code development <br>environment. App Maker is included with G Suite Business and Enterprise<br> editions as well as with G Suite for Education",
  secondUrl: "",
  secondHeading: "Build apps faster",
  secondContent:
    "Templates, drag-and-drop UI design and declarative data <br> modeling make it easy for IT developers andenthusiasts <br>to build apps that empower your teams",
  thirdUrl: "",
  thirdHeading: "Build apps faster",
  thirdContent:
    "Templates, drag-and-drop UI design and declarative data <br> modeling make it easy for IT developers andenthusiasts <br>to build apps that empower your teams"
});
home.save((err, home) => {
  console.log("done!");
});
