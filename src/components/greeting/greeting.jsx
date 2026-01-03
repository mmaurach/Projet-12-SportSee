import "./greeting.scss";

function Greeting({ userName }) {
  return (
    <div className="greeting">
      <h1 className="greeting-title">
        Bonjour <span>{userName}</span>
      </h1>
      <p className="greeting-subtitle">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Greeting;
