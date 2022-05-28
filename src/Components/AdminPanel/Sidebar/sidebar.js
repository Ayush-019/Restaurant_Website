import React from "react";
import styles from "./sidebar.module.css";
import cheflogo from "../../../Assets/Logo.svg";
import logo from "../../../Assets/Rise n’ Dine.svg";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
// import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar1}>
        <img src={cheflogo} alt="Rise n Dine" />
        <Link to="/home">
          <img className={styles.logo1}  src={logo} alt="Rise n Dine" />
        </Link>
      </div>
      <div className={styles.sidebar2}>
        <Link to="/admin">
          <p>
            <DashboardIcon />
            Admin Panel
          </p>
        </Link>

        <Link to="/users">
          <p>
            <PeopleIcon />
            Users
          </p>
        </Link>
        <Link to="/items">
          <p>
            <PostAddIcon />
            Update Any Item
          </p>
        </Link>
        <Link to="/additem">
          <p>
            <AddIcon />
            Add Any Item
          </p>
        </Link>
        <Link to="/orders">
          <p>
            <ListAltIcon />
            Orders
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
