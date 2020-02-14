const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// now we are creating schema for the author
// the schema on RHS is nothing but the schema that we have got in line 2
const authorSchema = new Schema({
  //now authorSchema will have following things
  name: String,
  age: Number
});

// now we have defined the authorSchema, we need to export the model
// "Author" is the name of the model, which is based on "authorSchema"
module.exports = mongoose.model("Author", authorSchema);
