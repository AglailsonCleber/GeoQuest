'use client';
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Card, CardContent, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import { Question } from '../types/quiz';

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showCorrect, setShowCorrect] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get<{ data: Question[] }>('/api/getQuestions'); // Ajuste a rota para a sua API
        setQuestions(response.data.data);
      } catch (error) {
        console.error('Erro ao buscar as perguntas:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleOptionClick = (optionKey: string) => {
    setSelectedOption(optionKey);
    setShowCorrect(true);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowCorrect(false);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (currentIndex >= questions.length) {
    return (
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant="h4">Parabéns! Você completou o quiz.</Typography>
      </Container>
    );
  }

  const currentQuestion = questions[currentIndex];
console.log(currentQuestion);
  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {`Pergunta ${currentIndex + 1}: ${currentQuestion.question}`}
          </Typography>
          <Box>
            {Object.entries(currentQuestion.options).map(([key, value]) => (
              <Button
                key={key}
                variant={selectedOption === key ? 'contained' : 'outlined'}
                color={
                  showCorrect
                    ? key === currentQuestion.correctAnswer
                      ? 'success'
                      : selectedOption === key
                      ? 'error'
                      : 'primary'
                    : 'primary'
                }
                onClick={() => handleOptionClick(key)}
                style={{ display: 'block', marginBottom: '1rem', width: '100%' }}
                disabled={showCorrect}
              >
                {value}
              </Button>
            ))}
          </Box>
          {showCorrect && (
            <Typography
              variant="body1"
              style={{ marginTop: '1rem' }}
              color={
                selectedOption === currentQuestion.correctAnswer ? 'success.main' : 'error.main'
              }
            >
              {selectedOption === currentQuestion.correctAnswer
                ? 'Resposta correta!'
                : `Resposta errada! A correta é: ${currentQuestion.options[currentQuestion.correctAnswer]}`}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextQuestion}
            style={{ marginTop: '1rem' }}
            disabled={!showCorrect}
          >
            Próxima Pergunta
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Quiz;
