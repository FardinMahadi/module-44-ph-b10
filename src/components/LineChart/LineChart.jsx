import {
  CartesianAxis,
  LineChart as LChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChart = () => {
  const subjecMarksData = [
    { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 74, grade: "B" },
    { id: 2, name: "Bob", math: 85, physics: 79, chemistry: 88, grade: "B+" },
    {
      id: 3,
      name: "Charlie",
      math: 92,
      physics: 91,
      chemistry: 85,
      grade: "A",
    },
    { id: 4, name: "David", math: 66, physics: 73, chemistry: 71, grade: "C+" },
    { id: 5, name: "Emma", math: 73, physics: 78, chemistry: 76, grade: "B-" },
    { id: 6, name: "Frank", math: 88, physics: 84, chemistry: 90, grade: "A-" },
    { id: 7, name: "Grace", math: 81, physics: 80, chemistry: 83, grade: "B+" },
    {
      id: 8,
      name: "Hannah",
      math: 95,
      physics: 92,
      chemistry: 89,
      grade: "A+",
    },
    { id: 9, name: "Ivy", math: 70, physics: 75, chemistry: 78, grade: "B-" },
    { id: 10, name: "Jack", math: 76, physics: 77, chemistry: 82, grade: "B" },
  ];

  return (
    <div className="ml-10">
      <LChart width={500} height={400} data={subjecMarksData}>
        <Line dataKey="math" stroke="#f00"></Line>
        <Line dataKey="physics" stroke="#0f0"></Line>
        <Line dataKey="chemistry" stroke="#00f"></Line>

        <CartesianAxis stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LChart>
    </div>
  );
};

export default LineChart;
