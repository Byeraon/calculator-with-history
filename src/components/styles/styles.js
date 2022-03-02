import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const CalcBtn = styled(Button)`
  && {
    width: 100%;
    height: 80px;
    border-radius: 20px;
    border: 3px solid white;
    font-size: 2rem;
    color: white;
    font-family: "Orbitron", serif;
    background: #e17055;
    &:focus {
      outline: none;
    }
    &:hover {
      border: 3px solid #dfe6e9;
      font-weight: 500;
    }
    &.function-button {
      background-color: #2d3436;
    }
    &.white-button {
      color: #2d3436;
      background-color: white;
    }
  }
`;

export const HistoryBlock = styled.p`
  width: 100%;
  padding: 5px;
  border-radius: 8px;
  background: #e17055;
  color: white;
  box-sizing: border-box;
  margin: 10px 0;
`;

export const HistoryLists = styled.div`
  width: 50%;
  padding: 40px;
  box-sizing: border-box;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  @media (max-width: 980px) {
    width: 80%;
  }
`;

export const CalculatorStyles = styled.div`
  width: 50%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-rows: minmax(200px 350px) 1fr;
  grid-template-columns: 1fr;
  @media (max-width: 980px) {
    width: max-content;
    padding: 5%;
    box-sizing: border-box;
  }
  @media (max-width: 500px) {
    max-width: 90%;
    padding: 5%;
    box-sizing: border-box;
  }
  .display {
    font-family: "Orbitron", serif;
    margin: 0 !important;
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 500px) {
      width: 80%;
      max-height: 200px;
    }
    h1 {
      text-transform: uppercase;
      font-size: 3.2rem;
      color: white;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 2rem;
      }
    }
  }
  .number-pad {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    padding: 0px 0px 30px;
    width: 450px;
    margin: 0 auto;
    @media (max-width: 500px) {
      width: 70%;
      margin: 0;
    }
  }
  .zero-button {
    grid-column: 1/3;
  }
`;

export const DisplayStyles = styled.div`
  border: 4px solid white;
  max-width: 700px;
  margin: 10px auto;
  align-items: center;
  border-radius: 20px;
  width: 100%;
  background: #e17055;
  @media (max-width: 500px) {
    width: 95%;
    grid-template-rows: 60px 40px;
  }
  h2,
  p {
    text-align: center;
    color: white;
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    text-align: right;

    padding: 15px 20px;
    @media (max-width: 500px) {
      font-size: 1.5rem;
      padding: 10px;
    }
  }
  h2.long-main-display {
    font-size: 1.2rem;
  }
  p {
    margin: 5px 0;
    font-size: 1.3rem;
    @media (max-width: 500px) {
      font-size: 0.8rem;
    }
  }
  p.long-stored-display {
    font-size: 0.5rem;
  }
`;
