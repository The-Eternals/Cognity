const express = require("express");
const router = express.Router();
const ExamScore = require("../models/ExamScore");


router.post("/", async (req, res) => {
  try {
    const { userId, examName, score } = req.body;

    const examScore = new ExamScore({ userId, examName, score });


    await examScore.save();

    res.status(201).json({ message: 'Exam score saved successfully' });
  } catch (error) {
    console.error('Error saving exam score', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
