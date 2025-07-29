const questionDAO = require('../dao/questionDAO');

const createQuestion = async (req) => {
    const { section, subsection, question, isMulti, options } = req.body;
    const parsedOptions = JSON.parse(options);
    const files = req.files;

    const formattedOptions = parsedOptions.map((opt, i) => ({
        text: opt.text,
        marks: parseInt(opt.marks),
        imageUrl: files[i] ? `/uploads/${files[i].filename}` : null,
    }));

    const savedQuestion = await questionDAO.createQuestionWithOptions({
        section,
        subsection,
        question,
        isMulti,
        options: formattedOptions,
    });

    return savedQuestion;
};  

const fetchAllQuestions = async () => {
    return await questionDAO.getAllQuestions();
};

const fetchQuestionById = async (id) => {
    return await questionDAO.getQuestionById(id);
};

module.exports = {
    createQuestion,
    fetchAllQuestions,
    fetchQuestionById,
};