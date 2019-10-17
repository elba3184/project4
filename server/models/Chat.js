const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    message: {
      type: String
    },
    sender: {
      type: String //should it the type bebe the user?
    }
  },
  {
    timestamps: true
  }
);

let Chat = mongoose.model("theChat", chatSchema);

module.exports = Chat;
