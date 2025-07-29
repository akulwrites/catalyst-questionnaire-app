const sectionService = require("../services/sectionService");

const getAllSectionsWithSubsections = async (req, res) => {
    try {
        const data = await sectionService.fetchAllSections();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllSectionsWithSubsections:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    getAllSectionsWithSubsections,
};