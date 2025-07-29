const questionService = require('../services/questionService');

const postQuestion = async (req, res) => {
    try {
        const result = await questionService.createQuestion(req);
        res.status(201).json({ message: "Question saved", data: result });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to save question" });
    }
};

const getQuestions = async (req, res) => {
    try {
        const questions = await questionService.fetchAllQuestions();
        res.status(200).json(questions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
};

const getQuestion = async (req, res) => {
    try {
        const id = req.params.id;
        const question = await questionService.fetchQuestionById(id);
        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch question' });
    }
};

module.exports = {
    postQuestion,
    getQuestions,
    getQuestion,
};