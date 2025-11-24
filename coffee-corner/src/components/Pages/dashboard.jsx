import React from "react";
import '../Pages/dashboard.css'
function Dashboard() {
  return (
    <div className="content">
      <div className="card">
        <h3>Total Users</h3>
        <p>120</p>
      </div>
      <div className="card">
        <h3>Total Orders</h3>
        <p>85</p>
      </div>
      <div className="card">
        <h3>Revenue</h3>
        <p>$5,200</p>
      </div>
    </div>
  );
}

export default Dashboard;
