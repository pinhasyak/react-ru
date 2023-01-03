import styles from "./Button.module.css";
function Button(pros) {
  const { children, disabled = false } = pros;
  return (
    <button {...pros} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
