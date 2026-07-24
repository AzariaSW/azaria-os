import styles from "./Section.module.css";

function Section({
  title,
  description,
  maxWidth = "container",
  children,
  className = "",
  centered = false,
  ...props
}) {
  return (
    <section
      className={[styles.section, centered && styles.centered, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <div className={styles[maxWidth]}>
        {(title || description) && (
          <header className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}

            {description && <p className={styles.description}>{description}</p>}
          </header>
        )}

        {children}
      </div>
    </section>
  );
}

export default Section;
