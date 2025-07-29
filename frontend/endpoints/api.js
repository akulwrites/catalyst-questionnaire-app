const apiUrl = process.env.NEXT_APP_BACKEND_URL || "http://localhost:3001";
console.log(`API URL: ${apiUrl}`);

export const QUESTIONS = `${apiUrl}/api/questions`;

export const GET_ALL_SECTIONS = `${apiUrl}/api/sections`;

export const GET_QUESTION_BY_ID = (id) => `${apiUrl}/api/questions/${id}`;