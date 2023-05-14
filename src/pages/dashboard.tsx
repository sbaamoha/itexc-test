import SideBar from "../components/SideBar";

import { useState } from "react";
import DashboardContent from "../components/DashboardContent";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState<string>("dashboard");
  const [navOpened, setNavOpened] = useState(false);
  const handleLinkClick = (component: string) => {
    setActiveComponent(component);
  };
  const handleNavMenuClick = (status: boolean) => {
    setNavOpened(status);
  };

  return (
    <section>
      <Navbar navOpened={navOpened} setNavOpened={handleNavMenuClick} />
      <div className="flex">
        <SideBar
          setNavOpened={handleNavMenuClick}
          navOpened={navOpened}
          onLinkClick={handleLinkClick}
          activeComponent={activeComponent}
        />
        <div className="flex-1 p-6">
          {activeComponent === "dashboard" && <DashboardContent />}
          {/* <h1>user : {user?.username || user?.email}</h1>
        <button onClick={() => handleLogout()}>logout</button>
        <a className="block" href="/login">
          login
        </a> */}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
