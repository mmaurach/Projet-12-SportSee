import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Greeting from "../components/greeting/greeting";
import NutritionPanel from "../components/nutritionPanel/nutritionPanel";
import ActivityChart from "../components/activityChart/activityChart";
import AverageSessionsChart from "../components/averageSessions/averageSessions";
import ScoreChart from "../components/scoreChart/scoreChart";
import PerformanceChart from "../components/performanceChart/performanceChart";

import {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../services/userService";
import "./home.scss";

function Home() {
  const { id } = useParams();
  const userId = Number(id);
  const [user, setUser] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUser(userId);
      const activity = await getUserActivity(userId);
      const sessions = await getUserAverageSessions(userId);
      const performanceData = await getUserPerformance(userId);

      // console.log("USER", userData);
      // console.log("ACTIVITY", activity);

      setUser(userData);
      setActivityData(activity);
      setAverageSessions(sessions);
      setPerformance(performanceData);
    }

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <section className="home-wrapper">
      <Greeting userName={user.firstName} />
      <div className="home-dashboard">
        <div className="home-charts-wrapper">
          <ActivityChart activity={activityData} />
          <div className="bottom-charts-wrapper">
            <AverageSessionsChart sessions={averageSessions} />
            <PerformanceChart performance={performance} />
            <ScoreChart score={user.score} />
          </div>
        </div>
        <NutritionPanel nutrition={user.keyData} />
      </div>
    </section>
  );
}

export default Home;
