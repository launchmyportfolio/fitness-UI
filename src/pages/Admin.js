import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import "../styles/admin.css";

const AdminDashboard = ({ setIsAdminLoggedIn }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    navigate("/login");
  };

  // Fetch clients
  useEffect(() => {
    axios
      .get("${process.env.REACT_APP_API_URL}/api/clients")
      .then((res) => {
        setMembers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching members:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="admin-page">
      <Background blur={true} />

      <div className="admin-header">
        <h2>Registered Members</h2>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>

      {loading ? (
        <p>Loading members...</p>
      ) : members.length === 0 ? (
        <p>No members registered yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>City</th>
              <th>Age</th>
              <th>Height</th>
              <th>Weight</th>
              <th>BMI</th>
              <th>Goal</th>
              <th>Diet</th>
              <th>Smoking</th>
              <th>Alcohol</th>
              <th>Payment</th>
            </tr>
          </thead>

          <tbody>
            {members.map((m, index) => (
              <tr key={index}>
                <td>{m.name}</td>
                <td>{m.mobile}</td>
                <td>{m.email}</td>
                <td>{m.city}</td>
                <td>{m.age}</td>
                <td>{m.height}</td>
                <td>{m.weight}</td>
                <td>{m.bmi}</td>
                <td>{m.goal}</td>
                <td>{m.diet}</td>
                <td>{m.smoking}</td>
                <td>{m.alcohol}</td>
                <td>{m.paymentStatus ? "Paid" : "Pending"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
