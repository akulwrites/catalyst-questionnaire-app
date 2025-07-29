import axios from "axios";
import { GET_ALL_SECTIONS } from "../../endpoints/api";

export const fetchSectionsFromAPI = async () => {
    try {
        const res = await axios.get(GET_ALL_SECTIONS);
        const mapped = {};
            res.data.forEach((section) => {
            mapped[section.name] = section.subsections.map((s) => s.name);
        });
        return mapped;
    } catch (error) {
        console.error("Error fetching sections:", error);
        throw error;
    }
};