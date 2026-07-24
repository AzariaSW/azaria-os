import styles from "./Skeleton.module.css";

function Skeleton({ width = "100%", height = "1rem", className = "" }) {
  return (
    <div
      className={[styles.skeleton, className].filter(Boolean).join(" ")}
      style={{
        width,
        height,
      }}
    />
  );
}

export default Skeleton;
