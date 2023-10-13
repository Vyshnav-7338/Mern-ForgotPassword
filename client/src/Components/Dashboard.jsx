import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const [suc, setsuc] = useState();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:3001/dashboard")
      .then((res) => {
        if (res.data === "Success") {
          setsuc("Successed ok");
        } else {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h2>Dashboard</h2>
      <p>{suc}</p>
    </div>
  );
}

export default Dashboard;
