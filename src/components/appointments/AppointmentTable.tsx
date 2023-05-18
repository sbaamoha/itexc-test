import { dateExtract } from "../../lib/date";

interface TAppointmentTable {
  appointments: Appointment[];
  setAppointment: (appointment: Appointment | null) => void;
  setVisible: (status: boolean) => void;
}

const AppointmentTable = ({
  appointments,
  setAppointment,
  setVisible,
}: TAppointmentTable) => {
  const workHours: string[] = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
  ];

  return (
    <div className="relative">
      <div className="overflow-x-auto p-4">
        <table className="table-auto w-full">
          <thead>
            <tr className="w-10">
              <th className="px-2 w-3">Psst</th>
              {appointments.map((malade) => (
                <th
                  key={malade.id}
                  className="px-4 py-2 border-r border-l cursor-pointer"
                  onClick={() => {
                    setVisible(true);
                    setAppointment(malade);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <img
                      className="w-8 h-8 rounded-full mb-2"
                      src={malade.avatar}
                      alt={malade.name}
                    />
                    <div className="flex flex-col items-center">
                      <h2 className="text-sm text-softBlue">{malade.name}</h2>
                      <p className="text-xs text-main">{malade.desc}</p>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {workHours.map((hour) => (
              <tr key={hour} className="">
                <td className="px-4 border py-2 text-main text-xs whitespace-nowrap align-top">
                  {hour}
                </td>
                {appointments.map((malade) => {
                  const { hours } = dateExtract(malade.date);
                  const hourWithAmpm = `${hours}`;
                  console.log(hours, hourWithAmpm, hour.split(":")[0]);
                  // console.log(hourWithAmpm == hour.split(":")[0]);
                  return (
                    <td
                      key={malade.id}
                      className={` border ${
                        `0${hourWithAmpm}` == hour.split(":")[0]
                          ? "bg-gray-100 rounded-lg"
                          : ""
                      }`}
                    >
                      {`0${hourWithAmpm}` == hour.split(":")[0] && (
                        <h2 className="flex items-center gap-3">
                          <p className="inline-block w-1 h-[100px] bg-skyBlue rounded-md"></p>
                          <p className=" text-skyBlue">{malade.doctor}</p>
                        </h2>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;
