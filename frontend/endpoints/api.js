const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

export const QUESTIONS = `${apiUrl}/api/questions`;

export const GET_ALL_SECTIONS = `${apiUrl}/api/sections`;

export const GET_QUESTION_BY_ID = (id) => `${apiUrl}/api/questions/${id}`;