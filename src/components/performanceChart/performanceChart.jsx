import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { performanceData } from "../../data/performance";
import "./performanceChart.scss";

function PerformanceChart() {
  return (
    <div className="performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={performanceData}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#FFFFFF", fontSize: 12 }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />

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
