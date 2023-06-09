import { useEffect, useState } from "react";
import Doctors from "../components/Doctors";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  loginWithFacebook,
  loginWithGoogle,
  registerWithEmailAndPassword,
} from "../utils/firebase/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../utils/redux/store";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/redux/slices/authSlice";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user?.email);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.length || !password.length) {
      toast.error("Please fill all fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password Should Have 6 characters or more!");
      return;
    }

    const res = await registerWithEmailAndPassword(name, email, password);
    if (!res.success) {
      toast.error(`Error: ${res.error}`);
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="md:pl-12 flex justify-between gap-12">
      <div className="flex-1 my-12 items-center">
        <div className="px-6">
          <h1 className="flex items-center gap-3 text-xl md:text-4xl text-softBlue">
            Sing up your account
            <img src="assets/hello.svg" alt="hello" />
          </h1>
          <p className="text-md mt-3 text-main">
            Let’s Enter your data to continue use healthy 24 services
          </p>
          <form className="flex flex-col gap-2 py-12" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                placeholder="Enter Your name here"
                id="fullname"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your email here"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter Your name here"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex gap-3 my-6 md:my-12">
              <input className="text-lg" type="checkbox" id="staySignUp" />
              <label
                htmlFor="staySignUp"
                className="text-md text-main cursor-pointer"
              >
                by sign up to healthy 24 you agree all term and condition
              </label>
            </div>
            <div className="w-full flex flex-col gap-6">
              <button className="btn-fill">Sign Up</button>
              <p className="mx-auto">Or</p>
              <button
                onClick={() => {
                  loginWithGoogle()
                    .then((user) => {
                      if (user?.email) {
                        dispatch(login({ user }));
                        Cookies.set("user", JSON.stringify(user), {
                          expires: 1,
                        });
                        navigate("/dashboard");
                      } else {
                        toast.error("something went wrong");
                      }
                    })
                    .catch((error) => {
                      toast.error(error.message);
                    });
                }}
                type="button"
                className="btn-outline"
              >
                <AiOutlineGoogle className="text-2xl" />
                Sign Up with Google
              </button>
              <button
                onClick={() => {
                  loginWithFacebook()
                    .then((user) => {
                      if (user?.email) {
                        dispatch(login({ user }));
                        Cookies.set("user", JSON.stringify(user), {
                          expires: 1,
                        });
                        navigate("/dashboard");
                      } else {
                        toast.error("something went wrong");
                      }
                    })
                    .catch((error) => {
                      toast.error(error.message);
                    });
                }}
                type="button"
                className="btn-outline"
              >
                <FaFacebookF className="text-2xl" />
                Sign Up with Facebook
              </button>
              <p className="mx-auto text-softBlue">
                You Already have account ?{" "}
                <a href="/login" className="font-bold">
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Doctors />
    </div>
  );
};

export default Signup;
