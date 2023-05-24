const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  exam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  answers: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
      selectedOption: {
        type: String,
        enum: ["A", "B", "C", "D"],
        required: true,
      },
    },
  ],
  score: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("response", responseSchema);
