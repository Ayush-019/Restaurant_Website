import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import Menu from "../../Components/Menu Section/menu";
import Dashboard from "../../Components/AdminPanel/Dashboard/dashboard";
import styles from "./dashboardpage.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.Dashboard}>
      <Navbar />
      <div className={styles.heading}>
        <div>
          <h1>Admin Panel</h1>
        </div>
      </div>

      <Dashboard />
    </div>
  );
};

export default DashboardPage;
