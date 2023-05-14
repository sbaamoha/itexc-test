import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
const chartData1 = {
  labels: ["01", "02", "03", "04", "05", "06"],
  datasets: [
    {
      label: "Visits ",
      data: [30, 40, 50, 20, 30, 30],
      backgroundColor: [
        "#DFE8F6",
        "#DFE8F6",
        "#56CCF2",
        "#DFE8F6",
        "#DFE8F6",
        "#DFE8F6",
      ],
      hoverBackgroundColor: "#56CCF2",
      borderWidth: 0,
      barThickness: 20,
      borderRadius: 10,
    },
  ],
};
export default function BarChart() {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // setChartData(chartData1);
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: false,
        },
        maintainAspectRatio: false,
        responsive: true,
      },
    });
  }, []);
  return (
    <div className="w-[90%] md:col-span-2 relative lg:h-[45vh] h-[30vh] m-auto p-4 border rounded-lg bg-white">
      <h2 className="text-2xl">Visits this month</h2>
      <Bar data={chartData1} options={chartOptions} />
    </div>
  );
}
