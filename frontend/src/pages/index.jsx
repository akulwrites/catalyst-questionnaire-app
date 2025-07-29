import DynamicForm from '../components/DynamicForm';
import submitQuestion from '../actions/questions';
import { Typography } from '@mui/material';
import QuestionTable from '@/components/QuestionTable';
import { useState, useEffect } from 'react';
import { fetchAllQuestions } from '../actions/questions';

export default function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    document.title = "Career Catalyst App";
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const data = await fetchAllQuestions();
      setQuestions(data);
    } catch (error) {
      console.error("Failed to load questions:", error);
    }
  };

  const handleSubmit = async (formData) => {
    await submitQuestion(formData);
    alert("Question Saved!");
    await loadQuestions();
  };

  return (
    <div>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", sm: "2.2rem" },
          color: "#3f51b5",
          marginBottom: 3,
          fontFamily: `'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`
        }}
      >
        🧠 Career Path Test Questions
      </Typography>
      <DynamicForm onSubmit={handleSubmit} />
      <QuestionTable questions={questions}/>
    </div>
  );
}