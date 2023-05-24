const mongoose = require("mongoose")

// const questionSchema = new mongoose.Schema({
//     questions:[{
//         type:String,
//         options:[],
//         answer: {}
//     }],
// })

const questionSchema = new mongoose.Schema({
    question: {
      type: String,
      required: true,
    },
    options: {
      type: {
        A: {
          type: String,
          required: true,
        },
        B: {
          type: String,
          required: true,
        },
        C: {
          type: String,
          required: true,
        },
        D: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    answer: {
      type: String,
      enum: ["A", "B", "C", "D"],
      required: true,
    },
  });

module.exports = mongoose.model("question",questionSchema)