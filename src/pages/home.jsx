import Greeting from "../components/greeting/greeting";
import NutritionPanel from "../components/nutritionPanel/nutritionPanel";
import ActivityChart from "../components/activityChart/activityChart";
import AverageSessionsChart from "../components/averageSessions/averageSessions";
import ScoreChart from "../components/scoreChart/scoreChart";
import PerformanceChart from "../components/performanceChart/performanceChart";
import "./home.scss";

function Home() {
  return (
    <section className="home-wrapper">
      <Greeting userName="Utilisateur" />

      <div className="home-dashboard">
        <div className="home-charts-wrapper">
          <ActivityChart />
          <div className="bottom-charts-wrapper">
            <AverageSessionsChart />
            <PerformanceChart />
            <ScoreChart />
          </div>
        </div>
        <NutritionPanel />
      </div>
    </section>
  );
}

export default Home;
