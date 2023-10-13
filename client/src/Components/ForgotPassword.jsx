import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ForgotPassword() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/ForgotPassword", { email })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h3>Forgot Password</h3>
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
          <button className="btn btn-success w-100 rounded-0">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
