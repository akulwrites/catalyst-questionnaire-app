const sequelize = require("../config/db");
const QuestionModel = require("./Question");
const OptionModel = require("./Option");
const SectionModel = require("./Section");
const SubsectionModel = require("./SubSection");

// Initialize models with sequelize instance
const Question = QuestionModel(sequelize);
const Option = OptionModel(sequelize);
const Section = SectionModel(sequelize);
const Subsection = SubsectionModel(sequelize);

// Define relationships
Question.hasMany(Option, {
    as: "options", // ✅ must match alias used in include
    foreignKey: "questionId"
});

Option.belongsTo(Question, {
    foreignKey: "questionId",
    as: "question"
});

Section.hasMany(Subsection, { 
    as: "subsections", 
    foreignKey: "sectionId" 
});

Subsection.belongsTo(Section, { 
    foreignKey: "sectionId" 
});
// Export initialized models and sequelize instance
module.exports = {
    sequelize,
    Question,
    Option,
    Section,
    Subsection
};