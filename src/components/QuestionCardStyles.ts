import styled from "styled-components";

export const QuestionCardWrapper = styled.div`
  background-color: #dee6d5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  max-width: 500px;
  margin: 0 auto;
`;

export const Question = styled.p`
  color: #977959;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AnswerButton = styled.button<{ userAnswer: boolean }>`
  background-color: ${(props) => (props.userAnswer ? "#999a5b" : "#999a5b")};
  color: ${(props) => (props.userAnswer ? "#dee6d5" : "#422006")};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  width: 100%;
  max-width: 300px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.userAnswer ? "#fca311" : "#1f4068")};
  }
`;

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  margin-top: 20px; 
`;
