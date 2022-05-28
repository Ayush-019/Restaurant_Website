import React, { useState, useEffect } from "react";
import styles from "./details.module.css";
import bg from "../../Assets/bg.png";
import RestauLogo from "../../Assets/Logo.svg";
import RestauName from "../../Assets/Rise n’ Dine.svg";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../Redux/Actions/uerAction";
import { useAlert } from "react-alert";
import {useNavigate} from 'react-router-dom';


const Details = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { error, isRegistered } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    MobileNo: "",
    TableNo: "",
  });
  const { name, MobileNo, TableNo } = user;

  const detailsDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const detailsSubmit = (e) => {
    e.preventDefault();

    const myForm = {
      name: name,
      MobileNo: MobileNo,
      TableNo: TableNo,
    };
    dispatch(register(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isRegistered) {
      navigate("/home");
    }
  }, [dispatch, error, alert, navigate, isRegistered]);

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
                value={name}
                onChange={detailsDataChange}
              />
            </div>
            <div className={styles.mobileNo}>
              <input
                type="text"
                placeholder="mobileNo"
                required
                name="MobileNo"
                value={MobileNo}
                onChange={detailsDataChange}
              />
            </div>
            <div className={styles.TableNo}>
              <input
                type="text"
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
