import { useState } from "react";
import Doctors from "../components/Doctors";
import ForgetMyPassword from "../components/forgetMyPassword/ForgetMyPassword";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase/firebase";

const ForgotPassword = () => {
  const [pwCompOpened, setpwCompOpened] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // send the email using firebase
    if (email.length === 0) return "set you email";
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setpwCompOpened(true);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="md:pl-12 flex justify-between gap-12">
      {pwCompOpened && <ForgetMyPassword />}
      <div
        className={`${pwCompOpened ? "hidden" : "flex-1"} my-auto items-center`}
      >
        <h2 className="flex items-center gap-3 my-3 text-xl md:text-4xl text-softBlue">
          Forget Password
          <img src="assets/forgotPwIcon.svg" />
        </h2>
        <p className="text-main">Enter your email to recover password </p>
        <form onSubmit={handleSendEmail} className="flex flex-col gap-6 my-12">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your email "
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn-fill w-full">Send Email</button>
        </form>
      </div>
      <Doctors />
    </div>
  );
};

export default ForgotPassword;
