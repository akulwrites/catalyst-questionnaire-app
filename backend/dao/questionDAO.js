const { Question, Option } = require("../models");

const createQuestionWithOptions = async (data) => {
    const { section, subsection, question, isMulti, options } = data;
    const newQuestion = await Question.create({ section, subsection, question, isMulti });
    const optionEntries = options.map(opt => ({
        ...opt,
        questionId: newQuestion.id,
    }));
    await Option.bulkCreate(optionEntries);
    return newQuestion;
};

const getAllQuestions = async () => {
    const questions = await Question.findAll({
        include: [
            {
            model: Option,
            as: "options"
            }
        ],
        order: [["id", "DESC"]]
    });
    
    // Convert Sequelize instances into plain JSON objects
    const plainQuestions = questions.map((q) => q.get({ plain: true }));
    return plainQuestions;
};

const getQuestionById = async (id) => {
    return await Question.findOne({ where: { id }, include: Option });
};

module.exports = {
    createQuestionWithOptions,
    getAllQuestions,
    getQuestionById,
};