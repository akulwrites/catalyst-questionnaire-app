const sectionDAO = require("../dao/sectionDAO");

const fetchAllSections = async () => {
    return await sectionDAO.getAllSectionsWithSubsections();
};

module.exports = {
    fetchAllSections,
};