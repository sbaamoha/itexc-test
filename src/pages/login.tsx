import Doctors from "../components/Doctors";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Login = () => {
  return (
    <div className="md:pl-12 flex justify-between gap-12">
      <div className="flex-1 my-12 items-center">
        <div className="px-6">
          <h1 className="flex items-center gap-3 text-xl md:text-4xl text-softBlue">
            Welcome To Healthy 24
            <img src="./src/assets/excellentIcon.svg" alt="hello" />
          </h1>
          <p className="text-md mt-3 text-main">
            Let’s Enter your data to continue use healthy 24 services
          </p>
          <form
            className="flex flex-col gap-2 py-12"
            onSubmit={() => console.log("clicked")}
          >
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Enter Your email here"
                id="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="Enter Your name here"
                id="password"
              />
            </div>
            <div className="flex justify-between gap-3 my-6">
              <div className="flex gap-2">
                <input className="text-lg" type="checkbox" id="rememberMe" />
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
              <button type="button" className="btn-outline">
                <AiOutlineGoogle className="text-2xl" />
                Sign In with Google
              </button>
              <button type="button" className="btn-outline">
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
