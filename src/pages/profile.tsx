import { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "src/utils/redux/store";

const Profile = () => {
  const [activeComponent] = useState<string>("profile");
  const [navOpened, setNavOpened] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);
  const handleNavMenuClick = (status: boolean) => {
    setNavOpened(status);
  };
  return (
    <div className="">
      <Navbar
        activeComponent={activeComponent}
        navOpened={navOpened}
        setNavOpened={handleNavMenuClick}
      />
      <div className="relative p-6 rounded-lg">
        <div>
          <img src="/assets/coverPhoto.svg" alt="cover" />
          <div className="absolute left-5 top-[50%] rounded-full overflow-hidden ">
            {user?.image ? (
              <img src={user.image} alt="profile photo" />
            ) : (
              <img src="/assets/profile.svg" alt="profile photo" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
