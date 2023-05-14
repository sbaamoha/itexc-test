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
import BarChart from "./BarChart";

const DashboardContent = () => {
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
          <BarChart />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardContent;
