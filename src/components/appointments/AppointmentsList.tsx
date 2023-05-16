import { useMutation, useQueryClient } from "@tanstack/react-query";
import Avatar from "../Avatar";
import { acceptAppointmentFunc, deleteAppointmentFunc } from "../../lib/apis";
import { useDispatch } from "react-redux";
import {
  acceptAppointment,
  deleteAppointment,
} from "../../utils/redux/slices/appointmentsSlice";

const AppointmentsList = ({
  appointments,
}: {
  appointments: Appointment[];
}) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteAppointmentFunc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
  const acceptMutation = useMutation({
    mutationFn: acceptAppointmentFunc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });
  const handleDeleteAppoint = (appointment: Appointment) => {
    dispatch(deleteAppointment(appointment.id));
    deleteMutation.mutate(appointment);
  };
  const handleAcceptAppoint = (appointment: Appointment) => {
    dispatch(acceptAppointment(appointment));
    acceptMutation.mutate({ ...appointment, accepted: true });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {appointments
        .filter((app) => !app.accepted)
        .map((appointment) => {
          const { name, avatar, desc, id } = appointment;
          return (
            <div className=" p-3 py-6 border rounded-lg" key={id}>
              <div className="py-2">
                <Avatar name={name} img={avatar} desc="09:00AM  10:00AM" />
              </div>
              <p>{desc}</p>
              <div className="flex gap-2 py-6">
                <button
                  onClick={() => handleDeleteAppoint(appointment)}
                  className="border rounded-lg py-2 px-2"
                >
                  Decline appointment
                </button>
                <button
                  onClick={() => handleAcceptAppoint(appointment)}
                  className="btn-fill px-2"
                >
                  Accept appointment
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AppointmentsList;
