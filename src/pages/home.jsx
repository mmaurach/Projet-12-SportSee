import "./home.scss";
import Greeting from "../components/greeting/greeting";

function Home() {
  return (
    <div className="home-wrapper">
      <Greeting userName="Utilisateur" />
    </div>
  );
}

export default Home;
