import styles from "./Card.module.css";

function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  ...props
}) {
  return (
    <article
      className={[
        styles.card,
        styles[padding],
        hover && styles.hover,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </article>
  );
}

export default Card;
