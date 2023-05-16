import { useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { AiOutlineSwap } from "react-icons/ai";
import DatePickerInput from "./DatePickerInput";
import AppointmentsList from "./AppointmentsList";
// import SingleAppointment from "./SingleAppointment";
import { useSelector } from "react-redux";
import { RootState } from "src/utils/redux/store";
// import Avatar from "../Avatar";
const AppoinmentsContent = () => {
  const appointments = useSelector(
    (state: RootState) => state.appointment.appointments
  );
  const [dateBtnOpened, setDateBtnOpened] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="capitalize">
      <div className="flex justify-between">
        <h2 className="text-2xl text-softBlue">appoinments</h2>
        <div className="flex items-center">
          <DatePickerInput
            selected={selectedDate}
            handleDateChange={handleDateChange}
          />
          <button
            className={`${
              dateBtnOpened ? "bg-blue text-white" : "bg-gray-100 border"
            } p-2 rounded-sm text-2xl `}
            onClick={() => setDateBtnOpened(true)}
          >
            <IoIosCalendar />
          </button>
          <button
            className={`${
              !dateBtnOpened ? "bg-blue text-white" : "bg-gray-100 border"
            } p-2 rounded-sm text-2xl  `}
            onClick={() => setDateBtnOpened(false)}
          >
            <AiOutlineSwap />
          </button>
        </div>
      </div>
      <div className="my-3">
        {/* <table className="">
          <thead className="border-b p-2">
            <tr className="flex items-center ">
              <th>pst</th>
              {appointments.map((appointment) => {
                return (
                  <th className="border-x p-2 ">
                    <Avatar
                      name={appointment.name}
                      desc={appointment.desc}
                      img={appointment.avatar}
                    />
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, i) => {
              return (
                <tr className="flex items-center">
                  <td className="text-sm text-main">{i + 3}:00PM </td>
                  <td className="border-x">
                    <div className="w-full h-full border-l-8 rounded-r-sm border-blue ">
                      dr robert{" "}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}

        {!dateBtnOpened && <AppointmentsList appointments={appointments} />}
      </div>
    </div>
  );
};

export default AppoinmentsContent;
