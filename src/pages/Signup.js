import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    const pass1 = document.getElementById("password").value;
    const pass2 = document.getElementById("confirmpassword").value;
    if (pass1 === pass2) {
      e.preventDefault();
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
        //save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.showAlert('User Account created successfully','success');
      } else {
        props.showAlert('Invalid Credentials','danger');
      }
    } else {
      props.showAlert('Password doesnot match','danger');
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
    <div className="signupcontainer">
      <div className="containers">
        <form onSubmit={handleSubmit}>
          <h1 className="signuptitle">SignUp</h1>
          <hr className="hr2"/>
          <div className="mb-3 mt-4">
            <label htmlFor="name" className="form-label">
              User name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              onChange={onChange}
              placeholder="Enter your user name here"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={onChange}
              placeholder="Enter your email here"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
              placeholder="Set password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              name="confirmpassword"
              onChange={onChange}
              placeholder="Re-enter the password to confirm"
            />
          </div>
          <hr className="hr2"/>
          <div className="buttoncontainer">
            <button type="submit" className="btn btn-success submitbutton">
              Submit
            </button>
            <button
              type="submit"
              onClick={handleCancel}
              className="btn btn-danger submitbutton"
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
