import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../lib/links";
import { RootState } from "../utils/redux/store";

interface TSideBar {
  hidden?: boolean;
  setNavOpened: (status: boolean) => void;
  onLinkClick: (component: string) => void;
  activeComponent: string;
  navOpened: boolean;
}

const SideBar = ({
  hidden,
  setNavOpened,
  navOpened,
  onLinkClick,
  activeComponent,
}: TSideBar) => {
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <nav
      className={`absolute md:h-[60vh] ${
        navOpened ? "left-0 z-10 bg-white" : "left-[-100%]"
      } md:relative md:left-0 ${
        hidden && "md:hidden"
      } flex flex-col gap-12 px-6 py-6 h-[100vh] transition-all`}
    >
      {navOpened && (
        <>
          <div className="absolute top-[-65px] left-2 flex items-center">
            <button
              className="md:hidden mx-2"
              onClick={() => setNavOpened(false)}
            >
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
                <div className="w-[63px] h-[100px] cursor-pointer flex items-center gap-3">
                  {user.image ? (
                    <img
                      className="border rounded-full"
                      src={user.image}
                      alt="photo profile"
                    />
                  ) : (
                    <p>{user.username || user?.email.split("@")[0]} </p>
                  )}
                  <Link to="/profile" className="btn-outline px-3 text-sm">
                    Edit My Profile
                  </Link>
                </div>
              ) : (
                <Link className="btn-outline px-2" to="/login">
                  login
                </Link>
              )}
            </div>
            <div className="flex items-center gap-3 my-6">
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
              to="/dashboard"
              className={`flex text-main items-center gap-2 capitalize py-3 px-3 rounded-lg ${
                activeComponent === link.name ? "text-black bg-gray-100" : ""
              }`}
              // activeClassName="text-main"
              onClick={() => {
                setNavOpened(false);
                onLinkClick(link.name);
              }}
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
