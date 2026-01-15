import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import "./scoreChart.scss";

const scoreData = [
  {
    value: 70,
    fill: "#FF0000",
  },
];

function ScoreChart() {
  return (
    <div className="score">
      <h3 className="score__title">Score</h3>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={scoreData}
          innerRadius="70%"
          outerRadius="80%"
          startAngle={90}
          endAngle={450}
        >
          <RadialBar dataKey="value" cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="score__content">
        <p className="score__value">
          <span>70%</span>
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
