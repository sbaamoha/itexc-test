const SingleAppointment = ({
  appointment,
  visible,
}: {
  appointment?: Appointment;
  visible: boolean;
}) => {
  return (
    <div
      className={`absolute bg-white p-6 ${
        visible ? "right-0 top-0 bottom-0" : "right-[100%]"
      }`}
    >
      <h1>{appointment?.name}</h1>
    </div>
  );
};

export default SingleAppointment;
