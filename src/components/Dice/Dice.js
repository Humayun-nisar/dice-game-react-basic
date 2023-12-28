import styles from "./Dice.module.css";

const Dice = ({ value, click, setClick }) => {
  let counter = 0;
  const checkClick = () => {
    if (counter === 0) {
      setClick(true);
    } else {
      if (counter === value) {
        counter = value;
        setClick(!click);
      }
    }
    return (
      <button
        // onClick={checkClick}
        className={click ? styles.dice_alternate : styles.dice}
      >
        {value}
      </button>
    );
  };
};
export default Dice;
