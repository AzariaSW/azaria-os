import "./Icon.css";

function Icon({ icon: IconComponent, size = "md", className = "", ...props }) {
  return (
    <IconComponent
      aria-hidden="true"
      focusable="false"
      className={`icon icon--${size} ${className}`.trim()}
      {...props}
    />
  );
}

export default Icon;
