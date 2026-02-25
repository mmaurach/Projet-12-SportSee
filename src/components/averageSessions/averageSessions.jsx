import "./averageSessions.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    //Ne rien afficher si c’est un fake point
    if (!data.dayLabel) return null;

    return (
      <div className="average-sessions-tooltip">{payload[0].value} min</div>
    );
  }

  return null;
};

const CustomCursor = ({ points, width, height }) => {
  if (!points || !points.length) return null;

  const { x, y } = points[0];
  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height * 100}
      fill="rgba(0, 0, 0, 0.1)"
    />
  );
};

function AverageSessionsChart({ sessions }) {
  if (!sessions || sessions.length === 0) return null;

  const weeklyDays = ["L", "M", "M", "J", "V", "S", "D"];

  const formattedData = [
    { index: 0, dayLabel: "", duree: sessions[0].duree },
    ...sessions.map((session, index) => ({
      index: index + 1,
      dayLabel: weeklyDays[index],
      duree: session.duree,
    })),
    {
      index: sessions.length + 1,
      dayLabel: "",
      duree: sessions[sessions.length - 1].duree,
    },
  ];

  return (
    <div className="average-sessions">
      <div className="average-sessions__title">Durée moyenne des sessions</div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 0, bottom: 20, left: 0, right: 0 }}
        >
          <defs>
            <linearGradient id="sessionsGradient">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.45} />
              <stop offset="50%" stopColor="#ffffff" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0.9} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="index"
            tickFormatter={(value) =>
              formattedData.find((d) => d.index === value)?.dayLabel
            }
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            style={{
              fontSize: "12px",
              opacity: 0.66,
              fill: "#ffffff",
            }}
          />

          <YAxis hide domain={["dataMin - 3", "dataMax + 30"]} />

          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />

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
