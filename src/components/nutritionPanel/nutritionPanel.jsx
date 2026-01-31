import "./nutritionPanel.scss";
import NutritionCard from "../nutritionCard/nutritionCard";

import caloriesIcon from "../../assets/calorie.png";
import proteineIcon from "../../assets/proteine.png";
import glucideIcon from "../../assets/glucide.png";
import lipideIcon from "../../assets/lipide.png";

function NutritionPanel({ nutrition }) {
  if (!nutrition) return null;

  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    nutrition;

  return (
    <aside className="nutrition-panel">
      <NutritionCard
        type="calories"
        icon={caloriesIcon}
        value={calorieCount}
        unit="kCal"
        label="Calories"
      />

      <NutritionCard
        type="proteine"
        icon={proteineIcon}
        value={proteinCount}
        unit="g"
        label="Protéines"
      />

      <NutritionCard
        type="glucide"
        icon={glucideIcon}
        value={carbohydrateCount}
        unit="g"
        label="Glucides"
      />

      <NutritionCard
        type="lipide"
        icon={lipideIcon}
        value={lipidCount}
        unit="g"
        label="Lipides"
      />
    </aside>
  );
}

export default NutritionPanel;
