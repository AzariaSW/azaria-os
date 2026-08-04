import { Card } from "../.";
import "./StatCard.css";

function StatCard({ title, value, className = "" }) {
  return (
    <Card className={`stat-card ${className}`}>
      <span className="stat-card__title">{title}</span>

      <strong className="stat-card__value">{value}</strong>
    </Card>
  );
}

export default StatCard;
