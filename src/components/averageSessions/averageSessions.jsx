import "./averageSessions.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="average-sessions-tooltip">{payload[0].value} min</div>
    );
  }
  return null;
};

function AverageSessionsChart({ sessions }) {
  if (!sessions || sessions.length === 0) return null;

  const weeklyDays = ["L", "M", "M", "J", "V", "S", "D"];

  const formattedData = sessions.map((session, index) => ({
    day: weeklyDays[index],
    duree: session.duree,
  }));

  return (
    <div className="average-sessions">
      <div className="average-sessions__title">Durée moyenne des sessions</div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData} margin={{ top: 20, bottom: 20 }}>
          <defs>
            <linearGradient id="sessionsGradient">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.45} />
              <stop offset="50%" stopColor="#ffffff" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0.9} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            dy={10}
            padding={{ left: 15, right: 15 }}
            style={{
              fontSize: "12px",
              opacity: 0.66,
              fill: "#ffffff",
            }}
          />

          <YAxis hide domain={["dataMin - 1", "dataMax + 1"]} />

          <Tooltip content={<CustomTooltip />} cursor={false} />

          <Line
            type="monotone"
            dataKey="duree"
            stroke="url(#sessionsGradient)"
            strokeWidth={2}
            dot={null}
            activeDot={{ r: 4, fill: "#ffffff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSessionsChart;
