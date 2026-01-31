import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import "./scoreChart.scss";

function ScoreChart({ score }) {
  if (score === undefined || score === null) return null;

  const scoreData = [
    {
      score,
      fill: "#FF0000",
    },
  ];

  return (
    <div className="score">
      <h3 className="score__title">Score</h3>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={scoreData}
          startAngle={90}
          endAngle={450}
          innerRadius="65%"
          outerRadius="75%"
        >
          <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />

          <RadialBar dataKey="score" cornerRadius={20} />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="score__content">
        <p className="score__value">
          <span>{score * 100}%</span>
        </p>
        <p className="score__text">
          de votre
          <br />
          objectif
        </p>
      </div>
    </div>
  );
}

export default ScoreChart;
