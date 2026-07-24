import styles from "./Spinner.module.css";

function Spinner({ size = "md", className = "" }) {
  return (
    <span
      className={[styles.spinner, styles[size], className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    />
  );
}

export default Spinner;
