const PatientCart = ({
  a,
  setPatient,
}: {
  a: Appointment;
  setPatient: (a: Appointment) => void;
}) => {
  return (
    <div key={a.id} className="p-3 flex flex-col border rounded-lg">
      <div className="border-b ">
        <img className="w-[50px] rounded-full " src={a.avatar} alt={a.name} />
        <div className="my-2">
          <h2 className="text-softBlue text-xl">{a.name} </h2>
          <p className="text-main text-sm">{a.desc}</p>
        </div>
      </div>
      <ul className="my-6 flex flex-col gap-5">
        <li className="flex p-1 justify-between items-center">
          <p className="text-main text-sm">weight</p>
          <p className="text-softBlue">165Ib</p>
        </li>
        <li className="flex p-1 justify-between items-center">
          <p className="text-main text-sm">blood pressure</p>
          <p className="text-softBlue">120/80mmHg</p>
        </li>
        <li className="flex p-1 justify-between items-center">
          <p className="text-main text-sm">blood glucose</p>
          <p className="text-softBlue">92mg/dl</p>
        </li>
      </ul>
      <button
        onClick={() => setPatient(a)}
        className="mx-auto btn-fill px-4 my-3 "
      >
        view detail patient
      </button>
    </div>
  );
};

export default PatientCart;
