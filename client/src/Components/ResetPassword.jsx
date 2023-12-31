import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { id, token } = useParams();
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3001/reset-password/${id}/${token}`, { password })
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
              <strong>New Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-success w-100 rounded-0">Update</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
