import styles from "./Input.module.css";

function Input({ as = "input", label, error, className = "", id, ...props }) {
  const Component = as;

  return (
    <div className={styles.group}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}

      <Component
        id={id}
        className={[styles.input, error && styles.error, className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />

      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}

export default Input;
