import { useEffect, useState } from "react";
import Greeting from "../components/greeting/greeting";
import NutritionPanel from "../components/nutritionPanel/nutritionPanel";
import ActivityChart from "../components/activityChart/activityChart";
import AverageSessionsChart from "../components/averageSessions/averageSessions";
import ScoreChart from "../components/scoreChart/scoreChart";
import PerformanceChart from "../components/performanceChart/performanceChart";

import { getUser } from "../services/userService";
import "./home.scss";

function Home() {
  const [user, setUser] = useState(null);
  const userId = 12; // ou 18

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUser(userId);
      setUser(userData);
    }

    fetchUser();
  }, []);

  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <section className="home-wrapper">
      <Greeting userName={user.firstName} />

      <div className="home-dashboard">
        <div className="home-charts-wrapper">
          <ActivityChart />
          <div className="bottom-charts-wrapper">
            <AverageSessionsChart />
            <PerformanceChart />
            <ScoreChart />
          </div>
        </div>
        <NutritionPanel nutrition={user.keyData} />
      </div>
    </section>
  );
}

export default Home;
