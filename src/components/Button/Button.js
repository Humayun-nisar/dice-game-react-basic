import styles from "./Button.module.css";

const Button = ({ title, isPrimary }) => {
  return (
    <button className={isPrimary ? styles.primary : styles.secondary}>
      {title}
    </button>
  );
};

export default Button;
