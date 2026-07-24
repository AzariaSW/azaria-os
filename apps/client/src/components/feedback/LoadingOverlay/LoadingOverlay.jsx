import Spinner from "../Spinner/Spinner";
import styles from "./LoadingOverlay.module.css";

function LoadingOverlay({ show }) {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <Spinner size="lg" />
    </div>
  );
}

export default LoadingOverlay;
