const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// now we are creating schema for the book
// the schema on RHS is nothing but the schema that we have got in line 2
const bookSchema = new Schema({
  //now bookSchema will have following things
  name: String,
  genre: String,
  authorId: String
});

// now we have defined the bookschema, we need to export the model
// "Book" is the name of the model, which is based on "bookSchema"
module.exports = mongoose.model("Book", bookSchema);
