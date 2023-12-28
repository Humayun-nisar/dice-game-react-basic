import Dice from "../Dice/Dice";
import styles from "./GameToolBar.module.css";
import { useEffect, useState } from "react";

const GameToolBar = ({
  selectedNumber,
  setSelectedNumber,
  score,
  rollDice,
  setScore,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    selectedNumber === rollDice
      ? setScore(score + rollDice)
      : setScore(score - 2);
  }, [rollDice]);

  return (
    <div className={styles.game_toolbar}>
      <div className={styles.game_toolbar_left}>
        <h2>{score}</h2>
        <p>Total Score</p>
      </div>
      <div className={styles.game_toolbar_right}>
        <div className={styles.game_toolbar_right_dice}>
          {arrNumber.map((value, index) => {
            return (
              <button
                onClick={() => setSelectedNumber(value)}
                className={
                  selectedNumber === value ? styles.dice_alternate : styles.dice
                }
                key={index}
              >
                {value}
              </button>
            );
          })}
        </div>
        <p>Select Number</p>
      </div>
    </div>
  );
};

export default GameToolBar;
