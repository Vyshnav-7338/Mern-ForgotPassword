import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((res) => {
        if (res.data.Status === "Success") {
          if (res.data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/home");
          }
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-success w-100 rounded-0">Login</button>
          <p>Created Account!</p>
          <Link to='/forgot-password'>forgot password?</Link>
          <Link
            to="/register"
            className="btn btn-default border text-decoration-none w-100 rounded-0"
          >
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
