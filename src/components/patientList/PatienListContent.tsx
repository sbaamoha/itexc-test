import { useState, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import { FiDownload, FiFilter } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "src/utils/redux/store";
import PatientCart from "./PatientCart";
import SinglePatient from "./SinglePatient";

const PatienListContent = () => {
  const [search, setSearch] = useState<string>();
  const [patient, setPatient] = useState<Appointment | null>();

  const appointments = useSelector(
    (state: RootState) => state.appointment.appointments
  );

  const setPatientFunc = (patientObj: Appointment | null) => {
    setPatient(patientObj);
  };

  const searchAppoints = useMemo(() => {
    if (!search) return appointments;
    return appointments.filter((a) =>
      a.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, appointments]);

  return (
    <div className="capitalize relative">
      {patient?.name.length && (
        <SinglePatient patient={patient} setPatient={setPatientFunc} />
      )}
      <h2 className="text-lg md:text-2xl text-softBlue">patient list</h2>
      <div className="flex justify-between mt-2 md:my-2">
        <div className="flex-1 relative mx-2">
          <CiSearch className="absolute left-5 top-3 text-2xl opacity-80" />
          <input
            className="w-full md:w-1/2 rounded-lg py-3 px-12 outline-none border mr-6"
            placeholder="Search for something"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 capitalize p-3 rounded-md bg-gray-100 hover:bg-gray-200">
            <FiDownload />
            <p className="hidden md:inline">donwload report</p>
          </button>
          <button className="flex items-center gap-2 capitalize p-3 rounded-md bg-gray-100 hover:bg-gray-200">
            <FiFilter />
            <p className="hidden md:inline">filter</p>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-6">
        {searchAppoints.map((a) => (
          <PatientCart setPatient={setPatientFunc} key={a.id} a={a} />
        ))}
      </div>
    </div>
  );
};

export default PatienListContent;
