import GameToolBar from "../../components/GameToolBar/GameToolBar";
import DiceRoll from "../../components/DiceRoll/DiceRoll";
import styles from "./Game.module.css";
import { useState } from "react";

const Game = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [rollDice, setRollDice] = useState(1);
  return (
    <div className={styles.game}>
      <GameToolBar
        score={score}
        setScore={setScore}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        rollDice={rollDice}
        setRollDice={setRollDice}
      />
      <DiceRoll
        score={score}
        setScore={setScore}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        rollDice={rollDice}
        setRollDice={setRollDice}
      />
    </div>
  );
};

export default Game;
