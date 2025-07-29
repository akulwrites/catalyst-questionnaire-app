const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const {
    postQuestion,
    getQuestions,
    getQuestion
} = require('../controllers/questionController');

router.post('/', upload.array('optionImages'), postQuestion);
router.get('/', getQuestions);
router.get('/:id', getQuestion);

module.exports = router;