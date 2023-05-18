import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
interface TBarChart {
  appointments: Appointment[];
}
export default function BarChart({ appointments }: TBarChart) {
  const [chartOptions, setChartOptions] = useState({});
  const [chartData, setChartData] = useState<any>({
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: appointments.map((a) => a.name),
      datasets: [
        {
          label: "Visits",
          data: appointments.map((a) => a.id),
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
          barThickness: 30,
          borderRadius: 7,
        },
      ],
    });
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
  }, [appointments]);

  return (
    <div className="md:w-[50vw] w-[100%] md:col-span-2 relative md:h-[50vh] h-[50%] md:m-auto p-4 border rounded-lg bg-white">
      <h2 className="text-2xl">Visits this month</h2>
      <div className="w-[80vw] h-[20vh] md:w-[48vw] md:h-[55vh] ">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
