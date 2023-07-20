import React from "react";
import {
  QuestionCardWrapper,
  Question,
  AnswerButton,
  AnswerWrapper,
} from "./QuestionCardStyles"
import { AnswerObject } from "../App";

interface QuestionCardProps {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number; // Corrected property name
  totalQuestions: number; // Corrected property name
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr, // Corrected property name
  totalQuestions, // Corrected property name
}) => {
  return (
    <QuestionCardWrapper>
      <Question style={{ color: "black" }}>
        Question: {questionNr}/{totalQuestions}
      </Question>
      <Question
        style={{ color: "#422006" }}
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <AnswerWrapper>
        {answers.map((answer) => (
          <AnswerButton
            key={answer}
            userAnswer={userAnswer ? userAnswer.answer === answer : false}
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </AnswerButton>
        ))}
      </AnswerWrapper>
    </QuestionCardWrapper>
  );
};

export default QuestionCard;
