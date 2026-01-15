import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { averageSessionsData } from "../../data/averageSessions";
import "./averageSessions.scss";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="average-sessions-tooltip">{payload[0].value} min</div>
    );
  }
  return null;
};

function AverageSessionsChart() {
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  return (
    <div className="average-sessions">
      <h3 className="average-sessions__title">Durée moyenne des sessions</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={averageSessionsData}>
          <XAxis
            dataKey="day"
            tickFormatter={(day) => days[day - 1]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFFFFF", opacity: 0.6, fontSize: 12 }}
          />

          <YAxis hide />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSessionsChart;
