import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { activityData } from "../../data/activityData";
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

function ActivityChart() {
  return (
    <div className="activity-chart">
      <div className="activity-chart__header">
        <h2>Activité quotidienne</h2>
        <ul className="activity-chart__legend">
          <li>
            <span className="black" /> Poids (kg)
          </li>
          <li>
            <span className="red" /> Calories brûlées (kCal)
          </li>
        </ul>
      </div>

      <ResponsiveContainer width="100%" height={185}>
        <BarChart data={activityData} barGap={8}>
          <CartesianGrid strokeDasharray="2" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={15}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />
          <YAxis
            yAxisId="kg"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickMargin={43}
            width={65}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />
          <YAxis yAxisId="cal" hide />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={8}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={8}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityChart;
