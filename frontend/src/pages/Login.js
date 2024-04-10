import React, { useState } from "react";
// import Layout from "../../components/Layout/Layout";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AuthStyles.css";
// import { useAuth } from "../../context/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  //   const location = useLocation();

  //From Submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      //   if (res && res.data.success) {
      //     toast.success(res.data && res.data.message);
      //     setAuth({
      //       ...auth,
      //       user: res.data.user,
      //       token: res.data.token,
      //     });
      //     localStorage.setItem("auth", JSON.stringify(res.data));
      //     navigate(location.state || "/");
      const json = await res.json();
      console.log(json);
      if (json.success) {
        //save the auth toke to local storage and redirect
        localStorage.setItem("email", credentials.email);
        localStorage.setItem("token", json.authToken);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div title="Login Ecommerce-App">
      <div className="form-container">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>

          <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
