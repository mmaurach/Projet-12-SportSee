import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { performanceData } from "../../data/performance";
import "./performanceChart.scss";

function PerformanceChart() {
  const formattedData = [...performanceData].reverse();
  const customTick = ({ payload, x, y, textAnchor }) => {
    return (
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
          <tspan x={x} dy="0em">
            {payload.value}
          </tspan>
        </text>
      </g>
    );
  };

  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={formattedData} cx="50%" cy="50%" outerRadius="75%">
          <PolarGrid radialLines={false} />

          <PolarAngleAxis dataKey="subject" tick={customTick} />

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
