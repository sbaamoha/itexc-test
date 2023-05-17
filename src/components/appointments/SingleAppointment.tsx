import { IoMdClose } from "react-icons/io";
import { CgFileDocument } from "react-icons/cg";
import Avatar from "../Avatar";
import { FiDownload } from "react-icons/fi";

const SingleAppointment = ({
  appointment,
  visible,
  setVisible,
}: {
  appointment?: Appointment | null;
  visible: boolean;
  setVisible: (status: boolean) => void;
}) => {
  return (
    <div
      className={`absolute w-[90%] md:w-1/3 bg-white border rounded-sm p-6 transition-all capitalize ${
        visible ? "-right-16 md:right-0 top-0 -bottom-14 md:bottom-0" : "hidden"
      }`}
    >
      <div className="p-2 py-4 my-3 flex items-center justify-between border-b">
        <h2 className="text-lg md:text-2xl text-softBlue">
          appointment details
        </h2>
        <button onClick={() => setVisible(false)} className="text-2xl px-1">
          <IoMdClose />
        </button>
      </div>
      <p className="uppercase font-semibold text-blue">patient information</p>
      <div className="my-3">
        <Avatar
          name={appointment?.name}
          desc="ORAN, ES SENIA 310009"
          img={appointment?.avatar}
        />
      </div>

      <p className="uppercase font-semibold text-blue">appointment details</p>
      <ul className="flex flex-col gap-6 my-6">
        <li className="flex flex-col gap-1">
          <p className="text-main ">date</p>
          <p className="text-blue ">{appointment?.date} </p>
        </li>
        <li className="flex flex-col gap-1">
          <p className="text-main ">category</p>
          <p className="text-blue ">Diabet Control Appointment</p>
        </li>
        <li className="flex flex-col gap-1">
          <p className="text-main ">problem</p>
          <p className="text-blue ">
            Blood sugar managment is especial important for people with diabets
            n as a chronically high blood sugar levles can lead
          </p>
        </li>
      </ul>

      <p className="uppercase font-semibold text-blue">documentation</p>

      <div className=" flex flex-col gap-2 my-6 ">
        <button className="btn-outline flex justify-between items-center px-3">
          <CgFileDocument className="text-2xl" />
          Medicalcheck-up.pdf
        </button>
        <button className="btn-outline">
          <CgFileDocument className="text-2xl" />
          <p>Medicalcheck-up.pdf</p>
          <FiDownload className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SingleAppointment;
