import { useState } from "react";

const ForgetMyPassword = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here, you can implement the logic to verify the code entered by the user
    // You can make an API request or perform any necessary operations
    // For simplicity, let's just display a success message
    setMessage("Code verification successful");
    setCode("");
  };
  return (
    <div className="flex justify-center mx-auto items-center h-screen">
      <form
        className="w-full max-w-sm bg-white rounded-lg shadow-md p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Enter Verification Code</h2>
        <p className="capitalize text-main mb-3">
          you can change your password via link sent to you in email.{" "}
          <a className="text-softBlue" href="/login">
            Login
          </a>
        </p>
        {message && <p className="text-green-500 mb-6">{message}</p>}
        <div className="flex items-center justify-center mb-6">
          {Array.from({ length: 6 }, (_, index) => (
            <input
              key={index}
              type="text"
              className="w-12 h-12 border-2 border-gray-300 text-center rounded-lg mx-1 focus:outline-none focus:border-blue-500"
              maxLength={1}
              value={code[index] || ""}
              onChange={(e) => {
                const updatedCode = [...code];
                updatedCode[index] = e.target.value;
                setCode(updatedCode.join(""));
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button className="btn-fill mx-auto w-full" type="submit">
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetMyPassword;
