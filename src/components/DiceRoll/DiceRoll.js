import Button from "../Button/Button";
import styles from "./DiceRoll.module.css";
import { useState, useEffect } from "react";

const DiceRoll = ({
  rollDice,
  setRollDice,
  score,
  setScore,
  selectedNumber,
  setSelectedNumber,
}) => {
  const [ruleDisplay, setRuleDisplay] = useState(false);

  const handleRollDice = () => {
    setRollDice(Math.floor(Math.random() * 6) + 1);
  };
  useEffect(() => {
    setScore(0);
  }, []);

  return (
    <div className={styles.dice_roll_container}>
      <div className={styles.dice_roll_text}>
        <img onClick={handleRollDice} src={`./images/dice_${rollDice}.png`} />
        <p>Click on Dice to Roll</p>
      </div>
      <div className={styles.button_container}>
        <div
          onClick={() => {
            setScore(0);
          }}
        >
          <Button title="Reset Score" isPrimary={false} />
        </div>
        <div
          onClick={() => {
            setRuleDisplay(!ruleDisplay);
          }}
        >
          <Button
            title={ruleDisplay ? "Hide Rules" : "Show Rules"}
            isPrimary={true}
          />
        </div>
      </div>
      {ruleDisplay && (
        <div className={styles.show_rules}>
          <h2>How to play the dice game</h2>
          <ul>
            <li>Select a number by clicking on the dice image</li>
            <li>
              If the rolled dice returns the same number, you get points equal
              to your guessed number
            </li>
            <li>
              If you guess wrong, 2 points will be deducted from your score
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DiceRoll;
