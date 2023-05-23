import { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/utils/redux/store";
import { GoLocation } from "react-icons/go";
import { BsFillPencilFill } from "react-icons/bs";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase/firebase";
import { toast } from "react-toastify";
import { Navigate } from "react-router";
import { changeUserCredentials } from "../utils/redux/slices/authSlice";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";

const Profile = () => {
  const [activeComponent, setActiveComponent] = useState<string>("profile");
  const [fullname, setFullname] = useState<string>("");
  const [navOpened, setNavOpened] = useState(false);

  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (user?.email) {
      updateProfile(auth.currentUser as any, { displayName: fullname })
        .then(() => {
          dispatch(changeUserCredentials({ ...user, username: fullname }));
          setFullname("");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };

  const handleLinkClick = (component: string) => {
    setActiveComponent(component);
  };

  const handleNavMenuClick = (status: boolean) => {
    setNavOpened(status);
  };

  if (!user?.email) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="">
      <Navbar
        activeComponent={activeComponent}
        navOpened={navOpened}
        setNavOpened={handleNavMenuClick}
      />
      <section className="flex justify-center mx-auto w-[90%]">
        <SideBar
          hidden
          setNavOpened={handleNavMenuClick}
          navOpened={navOpened}
          onLinkClick={handleLinkClick}
          activeComponent={activeComponent}
        />
        <div className="flex-1 p-6 mx-3 md:mx-1 rounded-xl">
          <section className="relative bg-white border pb-6 rounded-2xl my-6">
            <img
              className="rounded-t-2xl w-full"
              src="/assets/coverPhoto.svg"
              alt="cover"
            />
            <div className="w-[5.6rem] md:w-[150px] absolute left-5 top-[10%] lg:top-[35%] md:top-[20%] rounded-full overflow-hidden">
              {user?.image ? (
                <img
                  className="rounded-full"
                  src={user.image}
                  alt="profile photo"
                />
              ) : (
                <img
                  className="rounded-full"
                  src="/assets/profile.png"
                  alt="profile photo"
                />
              )}
            </div>
            <br />
            <div className="flex justify-between ml-5 md:ml-[100px] ">
              <div className="ml-5 mt-12">
                <h2 className="text-lg md:text-2xl">
                  dr. {user?.username || user?.email.split("@")[0]}{" "}
                </h2>
                <br />
                <p className="text-main">
                  Specialist of skin surgery in Moustafa bacha
                </p>
                <button className="flex font-bold items-center gap-2 p-2 my-3 text-softBlue rounded-xl border bg-gray-100">
                  <GoLocation />
                  <p>Alger, Algeria</p>
                </button>
              </div>
              <div className="flex-1 flex items-start justify-end mx-3">
                <Link to="#edit">
                  <button className="flex items-center gap-2 border p-3 text-softBlue hover:opacity-80 rounded-lg">
                    <BsFillPencilFill />
                    <p className="hidden md:inline">Edit profile</p>
                  </button>
                </Link>
              </div>
            </div>
          </section>

          <section className="p-3 rounded-xl border">
            <h2 className="text-2xl text-softBlue">Profile description</h2>
            <br />
            <p className="text-main">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quae!
            </p>
            <br />

            <p className="text-main">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, to:
            </p>
            <br />
            <ul className="ml-10 list-disc text-main">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </section>

          <section className="p-3 my-12 rounded-xl border px-6">
            <h2 className="text-2xl text-softBlue">Edit Profile</h2>
            <p className="text-main">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              velit!
            </p>
            <br />
            <h2 className="text-xl text-softBlue">Cover</h2>
            <div className="my-6 ">
              <img
                className="rounded-xl "
                src="/assets/coverPhoto.svg"
                alt="cover"
              />
            </div>
            <h2 className="text-2xl text-softBlue">Profile picture</h2>
            <br />
            <div id="edit" className="flex items-center gap-2">
              <div className="w-[90px] md:w-[150px] rounded-full">
                {user?.image ? (
                  <img
                    className="rounded-full border"
                    src={user.image}
                    alt="profile photo"
                  />
                ) : (
                  <img
                    className="rounded-full border"
                    src="/assets/profile.png"
                    alt="profile photo"
                  />
                )}
              </div>
              <div className="flex items-center gap-1">
                <button className="btn-fill px-3">
                  {/* <input
                    type="file"
                    placeholder="Change photo"
                    className="bg-transparent"
                  /> */}
                  Change photo
                </button>

                <button className="btn-outline px-3">Remove</button>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 w-[90%] mx-auto  my-12"
            >
              <div className="flex flex-col gap-3">
                <label
                  className="text-xl font-bold text-softBlue"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter full name"
                  name="fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  className="outline-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="text-xl font-bold text-softBlue"
                  htmlFor="speciality"
                >
                  Speciality
                </label>
                <input
                  id="speciality"
                  type="text"
                  placeholder="Enter speciality"
                  name="speciality"
                  className="outline-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  className="text-xl font-bold text-softBlue"
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  placeholder="Enter description"
                  name="description"
                  className="outline-none"
                />
              </div>
              <div className="flex justify-end items-end gap-3">
                <button type="button" className="btn-outline px-2">
                  Cancel
                </button>
                <button className="btn-fill px-2">Save Changes</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Profile;
