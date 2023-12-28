import Button from "../../components/Button/Button";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className={styles.landing_container}>
      <div className={styles.landing_image}>
        <img src="./images/main_dice.png" />
      </div>
      <div className={styles.landing_content}>
        <h1>Dice Game</h1>
        <Link to="/game">
          <Button title="Play Now" isPrimary={true} />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
