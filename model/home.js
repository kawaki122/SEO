var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var homeSchema = Schema({
  firstUrl: { type: String },
  firstHeading: {
    type: String
  },
  firstSubHead: {
    type: String
  },
  firstContent: {
    type: String
  },
  secondUrl: { type: String },
  secondHeading: {
    type: String
  },
  secondContent: {
    type: String
  },
  thirdUrl: { type: String },
  thirdHeading: {
    type: String
  },
  thirdContent: {
    type: String
  }
});

module.exports = mongoose.model("Home", homeSchema);
