import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={[styles.button, styles[variant], styles[size], className].join(
        " ",
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
