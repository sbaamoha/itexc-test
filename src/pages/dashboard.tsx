import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashboardContent from "../components/dashboard/DashboardContent";
import Navbar from "../components/Navbar";
import AppoinmentsContent from "../components/appointments/AppoinmentsContent";
import MessagesContent from "../components/messages/MessagesContent";
import PatienListContent from "../components/patientList/PatienListContent";
import MedicalHistoryContent from "../components/MedicalHistoryContent";
import { useSelector } from "react-redux";
import { RootState } from "src/utils/redux/store";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState<string>("dashboard");
  const [navOpened, setNavOpened] = useState(false);
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);

  const handleLinkClick = (component: string) => {
    setActiveComponent(component);
  };
  const handleNavMenuClick = (status: boolean) => {
    setNavOpened(status);
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <section>
      <Navbar
        activeComponent={activeComponent}
        navOpened={navOpened}
        setNavOpened={handleNavMenuClick}
      />
      <div className="flex">
        <SideBar
          setNavOpened={handleNavMenuClick}
          navOpened={navOpened}
          onLinkClick={handleLinkClick}
          activeComponent={activeComponent}
        />
        <div className="flex-1 border-l-2 p-3">
          {activeComponent === "dashboard" && <DashboardContent />}
          {activeComponent === "appointment" && <AppoinmentsContent />}
          {activeComponent === "messages" && <MessagesContent />}
          {activeComponent === "patient list" && <PatienListContent />}
          {activeComponent === "medical history" && <MedicalHistoryContent />}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
