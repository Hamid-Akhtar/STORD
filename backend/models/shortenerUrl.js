const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const urlSchema = new Schema(
  {
    actualUrl: { type: String },
    customUrl: { type: String },
  },
  {
    collection: "ShortnerURL",
    timestamps: true,
  }
);

module.exports = mongoose.model("ShortnerURL", urlSchema);
