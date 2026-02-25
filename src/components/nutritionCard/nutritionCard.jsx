import "./nutritionCard.scss";

function NutritionCard({ icon, value, unit, label, type }) {
  return (
    <div className={`nutrition-card nutrition-card--${type}`}>
      <div className="nutrition-card__icon">
        <img src={icon} alt={label} />
      </div>

      <div className="nutrition-card__content">
        <p className="nutrition-card__value">
          {value}
          {unit}
        </p>
        <p className="nutrition-card__label">{label}</p>
      </div>
    </div>
  );
}

export default NutritionCard;
