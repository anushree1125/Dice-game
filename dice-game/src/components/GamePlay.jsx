import { useState } from "react";
import styled from "styled-components/";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore(score + randomNumber);
    } else {
      setScore(score - 2);
    }
    console.log(selectedNumber);
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setError={setError}
          error={error}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
}
export default GamePlay;

const MainContainer = styled.main`
  padding-top: 10px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
