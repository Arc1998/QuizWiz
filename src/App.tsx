import React, { useState } from 'react';
import { fetchQuizQuestions, QuestionsState } from './Api';
import QuestionCard from './components/QuetionCard'
import { Difficulty } from './Api';
import {
  AppWrapper,
  MotivationalQuote,
  StartButton,
  Score,
  NextButton,
} from './AppStyle'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 20;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameover] = useState(true);
  const [showQuote, setShowQuote] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameover(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    console.log("newQuestions", newQuestions);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
    setShowQuote(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prev) => prev + 1);
      const answerObject: AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
      console.log("score", score);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameover(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <AppWrapper>
      {showQuote && ( 
        <MotivationalQuote>
          "Welcome to the QuizWiz, where knowledge reigns supreme! Dive into a world of challenging questions, stimulating debates, and thrilling rounds. With a blend of history, culture, science, and more, this quiz is a celebration of learning and camaraderie. So, let the games begin and let your brilliance shine!"
        </MotivationalQuote>
      )}

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <StartButton onClick={startTrivia}>Start</StartButton>
      ) : null}
      {!gameOver ? <Score>Score: {score}</Score> : null}

      {loading && <p>Loading Questions....</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <NextButton onClick={nextQuestion}>Next Question</NextButton>
      ) : null}
    </AppWrapper>
  );
}

export default App;
