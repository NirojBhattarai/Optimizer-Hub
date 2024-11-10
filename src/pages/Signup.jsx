import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    const pass1 = document.getElementById("password").value;
    const pass2 = document.getElementById("confirmpassword").value;
    if (pass1 === pass2) {
      e.preventDefault();
      setIsLoading(true);
      const { name, email, password } = credentials;
      const response = await fetch(
        "https://backend-optimizerhub.onrender.com/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const json = await response.json();
      console.log(json);

      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.showAlert("User Account created successfully", "success");
        setIsLoading(false);
      } else {
        props.showAlert("Invalid Credentials", "danger");
        setIsLoading(false);
      }
    } else {
      props.showAlert("Password does not match", "danger");
      setIsLoading(false);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="bg-gray-900 w-full min-h-screen py-8 flex justify-center items-center">
      <div className="bg-gray-800 w-full max-w-lg p-6 border border-white shadow-lg rounded-lg">
        <h1 className="text-green-500 text-4xl text-center font-bold mb-6">
          SignUp
        </h1>
        <hr className="border-t-2 border-white mb-6" />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="text-white text-sm font-medium">
              User name:
            </label>
            <input
              type="text"
              className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
              id="name"
              name="name"
              value={credentials.name}
              onChange={onChange}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-white text-sm font-medium">
              Email address:
            </label>
            <input
              type="email"
              className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="Enter your email"
            />
            <div id="emailHelp" className="text-gray-400 text-xs mt-1">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-white text-sm font-medium"
            >
              Password:
            </label>
            <input
              type="password"
              className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Set password"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmpassword"
              className="text-white text-sm font-medium"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              className="w-full p-3 mt-2 bg-gray-700 text-white border border-gray-600 rounded-lg"
              id="confirmpassword"
              name="confirmpassword"
              value={credentials.confirmpassword}
              onChange={onChange}
              placeholder="Re-enter the password to confirm"
            />
          </div>

          <hr className="border-t-2 border-white mb-6" />

          <div className="flex justify-center gap-4">
            {isLoading && <LoadingSpinner />}
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
