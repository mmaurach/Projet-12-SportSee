import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import "./activityChart.scss";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const kilogram = payload.find((item) => item.dataKey === "kilogram")?.value;

    const calories = payload.find((item) => item.dataKey === "calories")?.value;

    return (
      <div
        style={{
          width: "45px",
          height: "75px",
          backgroundColor: "#E60000",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          fontSize: "10px",
          fontWeight: 500,
        }}
      >
        <p style={{ margin: 0 }}>{kilogram}kg</p>
        <p style={{ margin: 0 }}>{calories}kCal</p>
      </div>
    );
  }

  return null;
};

const RenderCustomizedLegend = () => (
  <div className="LegendWrapper">
    <div className="LegendPoids">
      <div className="LegendCircle" style={{ backgroundColor: "black" }} />
      <div>Poids (kg)</div>
    </div>
    <div className="LegendCalories">
      <div className="LegendCircle" style={{ backgroundColor: "red" }} />
      <div>Calories brûlées (kCal)</div>
    </div>
  </div>
);

function ActivityChart({ activity }) {
  if (!activity || activity.length === 0) return null;

  return (
    <div className="activity-chart">
      <div className="activity-chart__header">
        <h2>Activité quotidienne</h2>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activity}
          margin={{ top: 40, right: 10, left: 50, bottom: 20 }}
          barSize={10}
          barGap={8}
        >
          <Legend
            verticalAlign="top"
            content={RenderCustomizedLegend}
            height={50}
          />

          <ReferenceLine
            y={78}
            yAxisId="kg"
            stroke="#9B9EAC"
            strokeDasharray="3 3"
          />
          <ReferenceLine
            y={82}
            yAxisId="kg"
            stroke="#9B9EAC"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: "#d1d2d6" }}
            dy={15}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />

          <YAxis
            yAxisId="kg"
            orientation="right"
            axisLine={false}
            tickLine={false}
            dx={25}
            domain={["dataMin -1", "dataMax +2"]}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />

          <YAxis yAxisId="cal" hide />

          <Tooltip content={<CustomTooltip />} />

          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;
