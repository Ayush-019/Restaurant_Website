import React, { Fragment, useEffect } from "react";
import styles from "./orders.module.css";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, allOrders } from "../../../Redux/Actions/orderAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";
import Sidebar from "../../../Components/AdminPanel/Sidebar/sidebar";

const Orders = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);


  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },
    { field: "name", headerName: "name", minWidth: 300, flex: 1 },
    { field: "TableNo", headerName: "TableNo", minWidth: 300, flex: 1 },

    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },
  ];

  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        amount: item.totalPrice,
        name: item.name,
        TableNo: item.TableNo,
      });
    });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(allOrders());
  }, [dispatch, alert, error]);
  return (
    <Fragment>
      <div className={styles.dashboard}>
        <Sidebar />
        <div className={styles.productListContainer}>
          <Typography id={styles.productListHeading}>All Orders</Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className={styles.myOrdersTable}
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Orders;
