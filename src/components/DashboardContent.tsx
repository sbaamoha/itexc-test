import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Calendar from "react-calendar";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import "react-calendar/dist/Calendar.css";
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
const DashboardContent = () => {
  // const [chartData, setChartData] = useState({
  //   datasets: [],
  // });
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
    <div>
      <h2 className="text-3xl pb-6 text-softBlue">Welcome back Dr. Taylor!</h2>
      <div>
        <div className="flex flex-col  md:flex-row-reverse gap-2">
          <div className="rounded-lg">
            <h2 className="md:text-3xl text-blue">Calendar</h2>
            <Calendar className="bg-white rounded-lg p-2 py-3" />
            <div className="flex justify-between ">
              <h2 className="text-2xl text-blue font-bold">Upcoming</h2>
              <p className="underline cursor-pointer text-softBlue">view all</p>
            </div>
          </div>
          <div className="w-[90%] md:col-span-2 relative lg:h-[45vh] h-[30vh] m-auto p-4 border rounded-lg bg-white">
            <h2 className="text-2xl">Visits this month</h2>
            <Bar data={chartData1} options={chartOptions} />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardContent;
