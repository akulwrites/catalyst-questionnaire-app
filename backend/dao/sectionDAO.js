const { Section, Subsection } = require("../models");

const getAllSectionsWithSubsections = async () => {
    return await Section.findAll({
        include: [{ model: Subsection, as: "subsections" }],
        order: [["name", "ASC"]]
    });
};

module.exports = {
    getAllSectionsWithSubsections,
};