import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "src/utils/redux/store";
type LinkType = {
  url: string;
  name: string;
  img: string;
};
const navLinks: LinkType[] = [
  {
    url: "/dashboard",
    name: "dashboard",
    img: "/assets/dashboard.svg",
  },
  {
    url: "#patient-list",
    name: "patient list",
    img: "/assets/patientList.svg",
  },
  { url: "#messages", name: "messages", img: "/assets/messages.svg" },
  {
    url: "#appointment",
    name: "appointment",
    img: "/assets/appointment.svg",
  },
  {
    url: "#medical-history",
    name: "medical history",
    img: "/assets/medical-history.svg",
  },
];

const SideBar = ({
  setNavOpened,
  navOpened,
  onLinkClick,
  activeComponent,
}: {
  setNavOpened: (status: boolean) => void;
  onLinkClick: (component: string) => void;
  activeComponent: string;
  navOpened: boolean;
}) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <nav
      className={`absolute ${
        navOpened ? "left-[0] z-10 bg-white" : "left-[-100%]"
      } md:relative md:left-0 flex flex-col gap-12 border-r-2 px-6 py-6 h-[100vh] transition-all`}
    >
      {navOpened && (
        <>
          <div className="absolute top-[-65px] left-2 flex items-center">
            <button className="md:hidden" onClick={() => setNavOpened(false)}>
              <img
                className="w-[33px] cursor-pointer"
                src="/assets/menuClose.svg"
                alt="close menu icon"
              />
            </button>
            <img
              className="w-full md:hidden h-[60px] pb-3"
              src="/assets/logo.svg"
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-2 md:hidden">
            <div className="flex items-center gap-2">
              {user?.email ? (
                <div className=" w-full h-[100px] cursor-pointer flex items-center gap-3">
                  {user.image ? (
                    <img
                      className="border rounded-full"
                      src={user.image}
                      alt="photo profile"
                    />
                  ) : (
                    <p></p>
                  )}
                  <p onClick={() => onLinkClick("profile")} className="text-sm">
                    Edit My Profile
                  </p>
                </div>
              ) : (
                <a href="/login">login</a>
              )}
            </div>
            <div className="flex items-center gap-3">
              <img
                className="cursor-pointer"
                src="/assets/notification.svg"
                alt="notification icon"
              />
              <p>Notification</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="cursor-pointer"
                src="/assets/setting.svg"
                alt="settings icon"
              />
              <p>Settings</p>
            </div>
          </div>
        </>
      )}
      <ul className="flex flex-col gap-6">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink
              to="#"
              className={`flex text-main items-center gap-2 capitalize py-3 px-3 rounded-lg ${
                activeComponent === link.name ? "text-black bg-gray-100" : ""
              }`}
              // activeClassName="text-main"
              onClick={() => onLinkClick(link.name)}
            >
              <img src={link.img} alt={link.name} />
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
