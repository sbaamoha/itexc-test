const SinglePatient = ({
  patient,
  setPatient,
}: {
  patient: Appointment;
  setPatient: (patientObj: Appointment | null) => void;
}) => {
  return (
    <div className="absolute flex flex-col md:flex-row gap-6 w-[100%] h-[100%] z-10 bg-white ">
      <button
        onClick={() => setPatient(null)}
        className="absolute -right-1  md:right-5 md:top-6 top-11 px-3 py-1 hover:bg-gray-200 rounded-lg"
      >
        X
      </button>
      <div className="flex flex-col">
        <h2 className="text-2xl text-softBlue">patient list</h2>
        <div className="flex flex-col gap-3 items-center justify-center p-4 my-3 border rounded-lg">
          <div>
            <img
              className="w-[100px] rounded-full "
              src={patient.avatar}
              alt={patient.name}
            />
          </div>
          <h2>{patient.name}</h2>
          <div className="flex items-center gap-3">
            <p className="text-main text-sm">patient ID</p>
            <h2 className="text-md">#{patient.id} </h2>
          </div>
          <div>
            <p className="text-main text-sm">{patient.desc} </p>
          </div>
          <div className="flex gap-3">
            <h2 className="text-xl text-softBlue text-center p-3 bg-gray-50 rounded-md">
              <span>15</span> <br />
              <span>appointment</span>
            </h2>
            <h2 className="text-xl text-softBlue text-center p-3 bg-gray-50 rounded-md">
              <span>12</span> <br />
              <span>completed</span>
            </h2>
          </div>
          <button className="btn-fill capitalize px-6">message patient</button>
        </div>
        <div className="border p-3 rounded-lg">
          <h2 className="text-softBlue text-2xl">patient information</h2>
          <ul className="flex flex-col gap-2 my-3">
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
        </div>
      </div>
      <div className="border p-4 rounded-lg mt-6">
        <h2 className="text-2xl text-softBlue">past notes appoinment</h2>
        <ul className="my-3 flex flex-col gap-6">
          <li>
            <span className="flex items-center gap-3">
              <img className="w-[20px]" src="/assets/circle.svg" alt="ss" />
              <p className="text-lg">{patient.date.split("T")[0]} </p>
            </span>
            <div className="ml-10 mt-2">
              <h3 className="text-lg">diabetes control appointment</h3>
              <p className="text-main my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                porro.
              </p>
              <div className="flex items-center justify-around my-6">
                <div>
                  <p className="text-main">treatment</p> <br />
                  <h2>check-Up</h2>
                </div>
                <div>
                  <p className="text-main">treatment</p> <br />
                  <h2>3 months</h2>
                </div>
              </div>
            </div>
          </li>
          <li>
            <li className="flex items-center gap-3">
              <img className="w-[20px]" src="/assets/circle.svg" alt="ss" />
              <p className="text-lg">{patient.date.split("T")[0]} </p>
            </li>
            <div className="ml-10 mt-2">
              <h3 className="text-lg">diabetes control appointment</h3>
              <p className="text-main my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                porro.
              </p>
              <div className="flex items-center justify-around my-6">
                <div>
                  <p className="text-main">treatment</p> <br />
                  <h2>check-Up</h2>
                </div>
                <div>
                  <p className="text-main">treatment</p> <br />
                  <h2>3 months</h2>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SinglePatient;
