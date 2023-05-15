import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import BarChart from "./BarChart";
import MedicalHistory from "./MedicalHistory";
import { getAppointments } from "../../lib/apis";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setAppointments } from "../../utils/redux/slices/appointmentsSlice";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardContent = () => {
  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
  });
  useEffect(() => {
    if (data) {
      dispatch(setAppointments(data));
    }
  }, [data]);

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>error has occured </div>;
  return (
    <div>
      <h2 className="text-3xl pb-6 text-softBlue">Welcome back Dr. Taylor!</h2>
      <div>
        <div className="flex flex-col  md:flex-row-reverse gap-2">
          <div className="rounded-lg">
            <h2 className="md:text-3xl text-blue">Calendar</h2>
            <Calendar className="bg-white rounded-lg py-3" />
            <div className="flex flex-col justify-between">
              <div className="flex justify-between">
                <h2 className="text-2xl text-blue font-bold">Upcoming</h2>
                <p className="underline cursor-pointer text-softBlue">
                  view all
                </p>
              </div>
              <div className="flex gap-3 bg-gray-100 p-3 rounded-md">
                <img
                  className="rounded-full w-[55px] "
                  src={data[0].avatar}
                  alt={data[0].name}
                />
                <div>
                  <h2 className="text-softBlue">{data[0].name}</h2>
                  <h2 className="text-main">
                    {data[0].date.split("T")[0]} | {data[0].date.split("T")[1]}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <BarChart appointments={data} />
        </div>
      </div>
      <div className="border rounded-lg p-4 my-6">
        <MedicalHistory />
      </div>
    </div>
  );
};

export default DashboardContent;
