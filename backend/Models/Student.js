const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    
    age: {
      type: Number,
    },
    mobile: {
      type: Number,
    },
    checkbox: {
      type: String,
    },
    
    duration: {
      type: String,
    },
   
   
    date: {
      type: Date,
    },
    
  },
  {
    collection: "students",
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);
