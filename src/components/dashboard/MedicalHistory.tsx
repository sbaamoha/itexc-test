import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin7Line } from "react-icons/ri";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { RootState } from "../../utils/redux/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAppointmentFunc } from "../../lib/apis";
import { deleteAppointment } from "../../utils/redux/slices/appointmentsSlice";
const MedicalHistory = () => {
  const dispatch = useDispatch();
  const appoints = useSelector(
    (state: RootState) => state.appointment.appointments
  );

  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteAppointmentFunc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
  // const acceptMutation = useMutation({
  //   mutationFn: acceptAppointmentFunc,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["appointments"] });
  //   },
  // });
  const handleDelteAppoint = (appointment: Appointment) => {
    dispatch(deleteAppointment(appointment.id));
    deleteMutation.mutate(appointment);
  };

  return (
    <div className="w-full capitalize">
      <h2 className="text-3xl px-2 py-3 pb-6 text-softBlue">medical history</h2>
      <table className="hidden md:flex flex-col justify-between gap-3 w-full">
        <thead className="w-full">
          <tr className="flex flex-col md:flex-row items-start gap-10 justify-between bg-gray-100 p-3 rounded-lg">
            <th>patient</th>
            <th>appointment</th>
            <th>date</th>
            <th>time</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {appoints.map((a) => {
            const dateString = a.date;
            const dateObj = new Date(dateString);
            const year = dateObj.getFullYear();
            const month = dateObj.getMonth() + 1;
            const day = dateObj.getDate();
            let hours = dateObj.getHours();
            const minutes = dateObj.getMinutes();
            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;

            return (
              <tr
                className="flex flex-col md:flex-row justify-between items-center mb-2 "
                key={a.id}
              >
                <td className="flex items-center">
                  <img
                    className="w-[33px] mr-2 rounded-full"
                    src={a.avatar}
                    alt={a.name}
                  />
                  <p>{a.name}</p>
                  <p>{a.id}</p>
                </td>
                <td>{a.desc}</td>
                <td>
                  {year}-{month}-{day}{" "}
                </td>
                <td>
                  {hours}:{minutes} {ampm}{" "}
                </td>
                <td>
                  {a.accepted ? (
                    <p className="inline-block p-2 rounded-lg bg-success text-green-400">
                      accepted
                    </p>
                  ) : (
                    <p className="inline-block p-2 rounded-lg bg-pending text-orange-400">
                      pending
                    </p>
                  )}{" "}
                </td>
                <td className="flex gap-2">
                  <button className="rounded-full hover:bg-gray-200 p-2">
                    <AiOutlineEyeInvisible className="text-lg" />
                  </button>
                  <button
                    onClick={() => handleDelteAppoint(a)}
                    className="rounded-full hover:bg-gray-200 p-2"
                  >
                    <RiDeleteBin7Line className="text-lg" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {appoints.map((a) => {
          const dateString = a.date;
          const dateObj = new Date(dateString);

          const year = dateObj.getFullYear();
          const month = dateObj.toLocaleString("default", { month: "long" });
          const day = dateObj.getDate();
          let hours = dateObj.getHours();
          const minutes = dateObj.getMinutes();
          const ampm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12 || 12;
          return (
            <div className="md:hidden flex flex-col gap-2" key={a.id}>
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[40px] rounded-full"
                    src={a.avatar}
                    alt={a.name}
                  />
                  <div>
                    <h2 className="text-xl text-softBlue">{a.name} </h2>
                    <h3 className="text-main">#{a.id}</h3>
                  </div>
                </div>
                <div>
                  {a.accepted ? (
                    <p className="inline-block p-2 rounded-lg bg-success text-green-400">
                      accepted
                    </p>
                  ) : (
                    <p className="inline-block p-2 rounded-lg bg-pending text-orange-400">
                      pending
                    </p>
                  )}
                </div>
              </div>
              <ul className="flex flex-col gap-1">
                <li className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                  <p>patient</p>
                  <p>{a.desc} </p>
                </li>
                <li className="flex justify-between items-center p-2">
                  <p>date</p>
                  <p>
                    {month} {year},{day}
                  </p>
                </li>
                <li className="flex justify-between items-center p-2 rounded-md">
                  <p>time</p>
                  <p>
                    {hours}:{minutes} {ampm}
                  </p>
                </li>

                <li className="flex justify-between items-center p-2 bg-gray-100 rounded-md">
                  <p>total</p>
                  <p>$520</p>
                </li>
                <li className="flex justify-between items-center p-2">
                  <p>pay with</p>
                  <p>oran bank</p>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MedicalHistory;
