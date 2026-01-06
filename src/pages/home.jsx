import "./home.scss";
import Greeting from "../components/greeting/greeting";
import NutritionPanel from "../components/nutritionPanel/nutritionPanel";

function Home() {
  return (
    <div className="home-wrapper">
      <Greeting userName="Utilisateur" />

      <div className="home__layout">
        <NutritionPanel />
      </div>
    </div>
  );
}
export default Home;
