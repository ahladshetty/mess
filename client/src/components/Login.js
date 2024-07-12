import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ Uname: "", Upasswd: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Uname: credentials.Uname,
        Upasswd: credentials.Upasswd,
      }),
    });
    const json = await response.json();

    if (json.success) {
      console.log(json);
      localStorage.setItem("token", json.authtoken); // save token
      localStorage.setItem("user", JSON.stringify(json.data));

      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="full-screen bg-login">
        <div className="login-container ">
          <div className="row justify-content-center">
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <h2 className="text-center my-4">STUDENT LOGIN</h2>
                <div className="md-3">
                  <label htmlFor="Uname" className="form-label">
                    {/* Username */}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={credentials.Uname}
                    onChange={onChange}
                    id="Uname"
                    name="Uname"
                    placeholder="Username"
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="Upasswd" className="form-label">
                    {/* Password */}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={credentials.Upasswd}
                    onChange={onChange}
                    name="Upasswd"
                    id="Upasswd"
                    placeholder="Password"
                  />
                </div>
                <div className="text-center my-3">
                  <button type="submit" className="btn btn-light">
                    SUBMIT
                  </button>
                  <button type="button" className="btn btn-light" onClick={()=>{navigate('/stafflogin')}}>
                    STAFF
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;