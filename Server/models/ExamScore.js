const mongoose = require("mongoose");

const examScoreSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  examName: String,
  score: Number,
  // Add any other fields you need for exam scores
});

const ExamScore = mongoose.model("ExamScore", examScoreSchema);

module.exports = ExamScore;
