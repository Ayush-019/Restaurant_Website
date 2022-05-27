import React, { useState } from "react";
import styles from "./details.module.css";
import bg from "../../Assets/bg.png";
import RestauLogo from "../../Assets/Logo.svg";
import RestauName from "../../Assets/Rise n’ Dine.svg";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    MobileNo: "",
    TableNo: "",
  });
  const { username, MobileNo, TableNo } = user;

  const detailsSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", username);
    myForm.set("MobileNo", MobileNo);
    myForm.set("TableNo", TableNo);
    // dispatch(register(myForm));
  };

  const detailsDataChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.leftContainer}>
        <img src={bg} alt="Rise n Dine"></img>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightWrapper}>
          <div className={styles.heading}>
            <h2>Fill Details</h2>
          </div>
          <form
            className={styles.detailsForm}
            encType="multipart/form-data"
            onSubmit={detailsSubmit}
          >
            <div className={styles.username}>
              <input
                type="text"
                placeholder="username"
                required
                name="name"
                value={username}
                onChange={detailsDataChange}
              />
            </div>
            <div className={styles.mobileNo}>
              <input
                type="number"
                placeholder="mobileNo"
                required
                name="mobileNo"
                value={MobileNo}
                onChange={detailsDataChange}
              />
            </div>
            <div className={styles.TableNo}>
              <input
                type="number"
                placeholder="TableNo"
                required
                name="TableNo"
                value={TableNo}
                onChange={detailsDataChange}
              />
            </div>
            <input type="submit" value="Submit" className={styles.submitbtn} />
          </form>

          <div className={styles.logo}>
            <img
              src={RestauLogo}
              alt="Restaurant"
              className={styles.RestauLogo}
            />
            <img
              src={RestauName}
              className={styles.RestauName}
              alt="Rise n Dine"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
