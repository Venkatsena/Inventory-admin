import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const EmpSignUp = () => {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!uname || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log('Submitting:', { uname, email, password });
  
    fetch("http://localhost:3003/empSignup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ uname, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Response:', data);
        console.log(data)
        if (data.error) {
          alert(data.error);
        } else {
          alert("Signup successful!");
          window.location.href = "/empLogin";
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert("An error occurred during signup. Please try again.");
      });
  };
  
  

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 p-3">
      <div className="row justify-content-center w-100">
        <div className="col-lg-11 d-flex justify-content-center align-items-center">
          <div className="form-container d-flex flex-column flex-md-row bg-white shadow-sm rounded-5 w-100">
            <div className="sub-container col-md-6 d-none d-md-flex align-items-center justify-content-center p-5">
              <div className="bg-container text-white p-4">
                <div className="border-icon-container mb-4">
                  <i className="bi bi-arrow-right"></i>
                </div>
                <p className="mt-5 sub-title">Hi, Welcome!!</p>
                <h1 className="title">Let's Get Started</h1>
                <p className="py-3 sub-title">
                  Create a free account to get access!
                  <span className="d-block sub-title">
                    We invite you to join us and get a better experience.
                  </span>
                </p>
                <img
                  src={require("../assets/bg-img-removebg-preview.png")}
                  alt="woman with laptop"
                  className="img-logo d-block"
                />
              </div>
            </div>
            <form
              className="col-md-6 p-5 d-flex flex-column"
              onSubmit={handleSubmit}
            >
              <h1 className="signup-heading">Sign Up</h1>
              <div className="form-group my-2">
                <label htmlFor="name" className="py-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUname(e.target.value)}
                  id="name"
                  placeholder="Enter Your Name"
                  value={uname}
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="email" className="py-2">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  value={email}
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="exampleInputPassword1" className="py-2">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  value={password}
                />
              </div>
              <div className="form-check my-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                />
                <label className="form-check-label" htmlFor="check">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-success w-100 btn-lg my-3 rounded-5"
              >
                CREATE ACCOUNT
              </button>
              <div className="text-center">
                <h5>(or)</h5>
                <h5 className="my-3">
                  Already have an account?{" "}
                  <Link
                    className="nav-link d-inline fs-5 text-decoration-none"
                    to="/empLogin"
                  >
                    <span className="text-success"> Login Here</span>
                  </Link>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpSignUp;
