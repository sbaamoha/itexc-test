import { useEffect, useState } from "react";
import Doctors from "../components/Doctors";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import {
  loginWithEmailAndPassword,
  loginWithFacebook,
  loginWithGoogle,
} from "../utils/firebase/firebase";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../utils/redux/slices/authSlice";
import { RootState } from "../utils/redux/store";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const user = useSelector((state: RootState) => state.auth.user?.email);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const dispatch = useDispatch();
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
    const user = await loginWithEmailAndPassword(email, password);
    if (user?.token) {
      dispatch(login({ user }));
      if (rememberMe) {
        Cookies.set("user", JSON.stringify(user));
      }
      navigate("/dashboard");
    }
  }

  return (
    <div className="md:pl-12 flex justify-between gap-12">
      <div className="flex-1 my-12 items-center">
        <div className="px-6">
          <h1 className="flex items-center gap-3 text-xl md:text-4xl text-softBlue">
            Welcome To Healthy 24
            <img src="assets/excellentIcon.svg" alt="hello" />
          </h1>
          <p className="text-md mt-3 text-main">
            Let’s Enter your data to continue use healthy 24 services
          </p>
          <form className="flex flex-col gap-2 py-12" onSubmit={handleSubmit}>
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
            <div className="flex justify-between gap-3 my-6">
              <div className="flex gap-2">
                <input
                  className="text-lg"
                  type="checkbox"
                  id="rememberMe"
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm text-main cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <a className="text-softBlue text-sm" href="/forgot-password">
                Forgot Password
              </a>
            </div>
            <div className="w-full flex flex-col gap-6">
              <button className="btn-fill">Sign In</button>
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
                Sign In with Google
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
                        toast.error("Something went wrong");
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
                Sign In with Facebook
              </button>
              <p className="mx-auto text-softBlue">
                Dont have account ?{" "}
                <a href="/signup" className="font-bold">
                  Sign Up
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

export default Login;
