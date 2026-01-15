import Greeting from "../components/greeting/greeting";
import NutritionPanel from "../components/nutritionPanel/nutritionPanel";
import ActivityChart from "../components/activityChart/activityChart";
import "./home.scss";

function Home() {
  return (
    <section className="home-wrapper">
      <Greeting userName="Utilisateur"/>

      <div className="home-dashboard">
       {/* <div className="home-charts-wrapper">
          <ActivityChart />
          <div className="bottom-charts-wrapper">*/}
            {/* ScoreChart, RadarChart, SessionChart plus tard  */}
        {/*  </div>
        </div>

        <NutritionPanel />*/}
      </div>
    </section>
  );
}

export default Home;
