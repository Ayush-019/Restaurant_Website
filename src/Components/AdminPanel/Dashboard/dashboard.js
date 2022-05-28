import React, { useEffect } from "react";
import styles from "./dashboard.module.css";
import Sidebar from "../Sidebar/sidebar";
import Notifications from "../Notifications/notifications";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../../Redux/Actions/itemAction";
// import { allOrders } from "../../Actions/orderAction.js";
import { getAllUsers } from "../../../Redux/Actions/uerAction";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.items);

//   const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.users);


  useEffect(() => {
    dispatch(getItems());
    // dispatch(allOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

//   let totalAmount = 0;
//   orders &&
//     orders.forEach((item) => {
//       totalAmount += item.totalPrice;
//     });


  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.dashboardContainer}>

        <div className={styles.dashboardSummary}>
          <div>
            <p>
              Total Amount Earned so far :
              <br /> ₹100
            </p>
          </div>
          <div className={styles.dashboardSummaryBox2}>
            <Link to="/items">
              <p>Total Menu Items</p>
              <br />
              <br />
              <p>{items && items.length}</p>
            </Link>
            <Link to="/orders">
              <p>Total Orders</p>
              <br />
              <br />

              <p>30</p>
              {/* <p>{orders && orders.length}</p> */}
            </Link>
            <Link to="/users">
              <p>Total Users Registered</p>
              <br />
              <br />

              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>
      </div>
      <Notifications />
    </div>
  );
};

export default Dashboard;
