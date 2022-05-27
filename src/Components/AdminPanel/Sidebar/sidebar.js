import React from "react";
import styles from "./sidebar.module.css";
import cheflogo from "../../../Assets/Logo.svg";
import logo from "../../../Assets/Rise n’ Dine.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img src={cheflogo} alt="Rise n Dine" />
      <Link to="/home">
        <img src={logo} alt="Rise n Dine" />
      </Link>
      <Link to="/users">
        <p>Users</p>
      </Link>
      <Link to="/items">
        <p>Update Any Item</p>
      </Link>
      <Link to="/additem">
        <p>Add Any Item</p>
      </Link>
      <Link to="/orders">
        <p>Order</p>
      </Link>
    </div>
  );
};

export default Sidebar;
