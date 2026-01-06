import "./nutritionPanel.scss";
import NutritionCard from "../nutritionCard/nutritionCard";

import caloriesIcon from "../../assets/calorie.png";
import proteineIcon from "../../assets/proteine.png";
import glucideIcon from "../../assets/glucide.png";
import lipideIcon from "../../assets/lipide.png";

function NutritionPanel() {
  return (
    <aside className="nutrition-panel">
      <NutritionCard
        type="calories"
        icon={caloriesIcon}
        value={1930}
        unit="kCal"
        label="Calories"
      />

      <NutritionCard
        type="proteine"
        icon={proteineIcon}
        value={155}
        unit="g"
        label="Protéines"
      />

      <NutritionCard
        type="glucide"
        icon={glucideIcon}
        value={290}
        unit="g"
        label="Glucides"
      />

      <NutritionCard
        type="lipide"
        icon={lipideIcon}
        value={50}
        unit="g"
        label="Lipides"
      />
    </aside>
  );
}

export default NutritionPanel;
