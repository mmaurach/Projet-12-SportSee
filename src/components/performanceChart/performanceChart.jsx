import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./performanceChart.scss";

const CustomTick = ({ payload, x, y, textAnchor }) => (
  <g className="recharts-layer recharts-polar-angle-axis-tick">
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      fontSize={12}
      fontWeight={500}
      fill="#FFFFFF"
      style={{ textTransform: "capitalize" }}
    >
      <tspan x={x}>{payload.value}</tspan>
    </text>
  </g>
);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "5px 10px",
          fontSize: "12px",
          fontWeight: 500,
        }}
      >
        {payload[0].value}
      </div>
    );
  }

  return null;
};

function PerformanceChart({ performance }) {
  if (!performance || performance.length === 0) return null;

  const formattedData = [...performance].reverse();

  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={formattedData}
          cx="50%"
          cy="50%"
          outerRadius="60%"
          margin={{ right: 20, left: 20 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" tick={CustomTick} tickSize={13} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;
