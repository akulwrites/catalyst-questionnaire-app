import axios from 'axios';
import { QUESTIONS } from '../../endpoints/api';

export default async function submitQuestion(form) {
  const formData = new FormData();
  formData.append("section", form.section);
  formData.append("subsection", form.subsection);
  formData.append("question", form.question);
  formData.append("isMulti", form.isMulti);

  const options = form.options.map(opt => ({
    text: opt.text,
    marks: opt.marks
  }));

  formData.append("options", JSON.stringify(options));
  form.options.forEach(opt => {
    if (opt.image) formData.append("optionImages", opt.image);
  });

  return await axios.post(QUESTIONS, formData);
}

export const fetchAllQuestions = async () => {
  try {
    const res = await axios.get(QUESTIONS);
    return res.data;
  } catch (err) {
    console.error("Axios error fetching questions:", err);
    throw err;
  }
};