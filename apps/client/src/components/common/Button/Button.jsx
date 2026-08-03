import styles from "./Button.module.css";

function Button({
  as: Component = "button",
  children,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}) {
  return (
    <Component
      {...(Component === "button" ? { type } : {})}
      className={[
        styles.button,
        styles[variant],
        styles[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;