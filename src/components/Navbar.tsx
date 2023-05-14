import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase/firebase";
import { signOut } from "firebase/auth";
import { logout } from "../utils/redux/slices/authSlice";
import { RootState } from "../utils/redux/store";
import { useState } from "react";

const Navbar = ({
  navOpened,
  setNavOpened,
}: {
  navOpened: boolean;
  setNavOpened: (status: boolean) => void;
}) => {
  const [dropDownOpen, setDropdownOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth);
    dispatch(logout());
  };

  return (
    <div className="flex items-center px-3 md:px-12 justify-between py-6 border-b-2">
      <a className="hidden md:block md:pb-6" href="/dashboard">
        <img src="/assets/logo.svg" alt="logo" />
      </a>
      <div>
        {!navOpened && (
          <button className="md:hidden" onClick={() => setNavOpened(true)}>
            <img
              className="cursor-pointer"
              src="/assets/menu.svg"
              alt="menu icon"
            />
          </button>
        )}
      </div>
      {!navOpened && (
        <div className="md:hidden">
          <h2 className="text-blue text-lg">Dashboard</h2>
        </div>
      )}
      <div className="flex justify-center items-center gap-3 md:gap-6">
        <div className="flex gap-3">
          <img
            className="cursor-pointer hidden md:block"
            src="/assets/notification.svg"
            alt="notification icon"
          />
          <img
            className="cursor-pointer"
            src="/assets/setting.svg"
            alt="settings icon"
          />
        </div>
        {user?.email ? (
          <div
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="relative w-[63px] h-[50px] cursor-pointer "
          >
            {user.image ? (
              <img
                className="border rounded-full"
                src={user.image}
                alt="photo profile"
              />
            ) : (
              <p></p>
            )}
            {dropDownOpen && (
              <div
                className="absolute bottom-[-150px] right-0 flex flex-col gap-3 w-[200px] capitalize bg-white 
              shadow-lg border rounded-md p-6"
              >
                <a className="border-b" href="/profile">
                  profile
                </a>
                <button className="btn-outline" onClick={handleLogout}>
                  log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <a href="/login">login</a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
