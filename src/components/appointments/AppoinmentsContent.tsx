import { useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import { AiOutlineSwap } from "react-icons/ai";
import DatePickerInput from "./DatePickerInput";
import AppointmentsList from "./AppointmentsList";
import { useSelector } from "react-redux";
import { RootState } from "src/utils/redux/store";
import AppointmentTable from "./AppointmentTable";
import SingleAppointment from "./SingleAppointment";

const AppoinmentsContent = () => {
  const appointments = useSelector(
    (state: RootState) => state.appointment.appointments
  );
  const [dateBtnOpened, setDateBtnOpened] = useState<boolean>(true);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [visible, setVisible] = useState(false);
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const handleSetVisible = (status: boolean) => {
    setVisible(status);
  };

  const handleSetVisibleAppointment = (appointment: Appointment | null) => {
    setAppointment(appointment);
  };

  return (
    <div className="capitalize">
      <div className="flex justify-between">
        <h2 className="text-lg md:text-2xl text-softBlue">appoinments</h2>
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
        {dateBtnOpened && (
          <AppointmentTable
            setVisible={handleSetVisible}
            setAppointment={handleSetVisibleAppointment}
            appointments={appointments}
          />
        )}
        <SingleAppointment
          setVisible={handleSetVisible}
          visible={visible}
          appointment={appointment}
        />
        {!dateBtnOpened && <AppointmentsList appointments={appointments} />}
      </div>
    </div>
  );
};

export default AppoinmentsContent;
