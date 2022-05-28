import React from "react";
import styles from "./navbar.module.css";
import RestaurantLogo from "../../Assets/Logo.svg";
import CartLogo from "../../Assets/Cart.svg";
import AdminPanel from "../../Assets/ADMIN PANEL.svg";
import Name from "../../Assets/Rise n’ Dine.svg";
import Location from "../../Assets/Location.svg";
import { Link,useNavigate } from "react-router-dom";
import logout from "../../Assets/logout.png";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.leftContainer}>
        <div className={styles.RestaurantLogo}>
          <img
            className={styles.RestaurantLogo}
            src={RestaurantLogo}
            alt="Rise n Dine"
          />
        </div>

        <div className={styles.Name}>
          <Link to="/home">
            <img className={styles.Name} src={Name} alt="Rise n Dine"></img>
          </Link>
        </div>
        <div className={styles.LocationWrapper}>
          <img className={styles.Location} src={Location} alt="Location"></img>
          <div className={styles.pincode}>123001</div>
        </div>
      </div>
      <div className={styles.middleWrapper}></div>

      <div className={styles.rightContainer}>
        <div className={styles.Cart}>
          <Link to="/cart">
            <img src={CartLogo} alt="Cart"></img>
          </Link>
        </div>
        <div className={styles.AdminPanel}>
          <Link to="/admin">
            <img src={AdminPanel} alt="AdminPanel"></img>
          </Link>
        </div>
        <div className={styles.logout}>
          {/* <Link to="/"> */}
          <img src={logout} alt="logout" onClick={() => navigate("/")}></img>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
