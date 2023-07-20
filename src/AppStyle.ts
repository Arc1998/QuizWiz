import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 97vh;
`;

export const MotivationalQuote = styled.p`
  color: #422006;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 20px 10px;
  max-width: 500px;
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards, ${pulseAnimation} 2s infinite;

  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
`;

export const StartButton = styled.button`
  background-color: #dee6d5;
  color: #422006;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #999a5b;
  }
`;

export const Score = styled.p`
  color: #422006;
  font-size: 24px;
  font-weight: bold;
`;

export const NextButton = styled.button`
  background-color: #999a5b;
  color: #dee6d5;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #977959;
  }
`;
