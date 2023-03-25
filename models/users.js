const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  isAdmin: Boolean,
});

module.exports = mongoose.Model("User", UserSchema);
