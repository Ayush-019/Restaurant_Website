import React, { useEffect } from "react";
import styles from "./dashboard.module.css";
import Sidebar from "../Sidebar/sidebar";
import Notifications from "../Notifications/notifications";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { getProductAdmin } from "../../Actions/productAction";
// import { allOrders } from "../../Actions/orderAction.js";
// import { getAllUsers } from "../../Actions/userAction.js";

const Dashboard = () => {
  const dispatch = useDispatch();

//   const { products } = useSelector((state) => state.products);

//   const { orders } = useSelector((state) => state.allOrders);

//   const { users } = useSelector((state) => state.allUsers);

//   let outOfStock = 0;

//   products &&
//     products.forEach((item) => {
//       if (item.Stock === 0) {
//         outOfStock += 1;
//       }
//     });

//   useEffect(() => {
//     dispatch(getProductAdmin());
//     dispatch(allOrders());
//     dispatch(getAllUsers());
//   }, [dispatch]);

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
            <Link to="/home">
              <p>Total Menu Items</p>
              <br />
              <br />

              <p>30</p>
              {/* <p>{products && products.length}</p> */}
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

              <p>30</p>
              {/* <p>{users && users.length}</p> */}
            </Link>
          </div>
        </div>
      </div>
      <Notifications />
    </div>
  );
};

export default Dashboard;
