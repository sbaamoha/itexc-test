import Doctors from "../components/Doctors";

const ForgotPassword = () => {
  return (
    <div className="md:pl-12 flex justify-between gap-12">
      <div className="flex-1 my-auto items-center">
        <h2 className="flex items-center gap-3 my-3 text-xl md:text-4xl text-softBlue">
          Forget Password
          <img src="./public/assets/forgotPwIcon.svg" />
        </h2>
        <p className="text-main">Enter your email to recover password </p>
        <form className="flex flex-col gap-6 my-12">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Your email here"
              id="email"
            />
          </div>
          <button className="btn-fill w-full">Sign In</button>
        </form>
      </div>
      <Doctors />
    </div>
  );
};

export default ForgotPassword;
