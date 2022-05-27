import React from "react";
import styles from "./navbar.module.css";
import RestaurantLogo from "../../Assets/Logo.svg";
import CartLogo from "../../Assets/Cart.svg";
import AdminPanel from "../../Assets/ADMIN PANEL.svg";
import Name from "../../Assets/Rise n’ Dine.svg";
import Location from "../../Assets/Location.svg";

function navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.leftContainer}>
        <div className={styles.RestaurantLogo}>
          <img
            className={styles.RestaurantLogo}
            src={RestaurantLogo}
            alt="Rise n Dine"
          ></img>
        </div>

        <div className={styles.Name}>
          <img className={styles.Name} src={Name} alt="Rise n Dine"></img>
        </div>
        <div className={styles.LocationWrapper}>
          <img className={styles.Location} src={Location} alt="Location"></img>
          <div className={styles.pincode}>123001</div>
        </div>
      </div>
      <div className={styles.middleWrapper}></div>

      <div className={styles.rightContainer}>
        <div className={styles.Cart}>
          <a href="#1">
            <img src={CartLogo} alt="Cart"></img>
          </a>
        </div>
        <div className={styles.AdminPanel}>
          <a href="#1">
            <img src={AdminPanel} alt="AdminPanel"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
