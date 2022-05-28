import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./Sidebar/sidebar";
import { getAllUsers, clearErrors } from "../../Redux/Actions/uerAction";
import styles from "./users.module.css";
import "../../index.css";

const AllUsers = ({ history }) => {
  const dispatch = useDispatch();

  const { error, users } = useSelector((state) => state.users);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getAllUsers());
  }, [dispatch, error]);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 110, flex: 1},

    {
      field: "name",
      headerName: "Name",
      minWidth: 50,
      flex: 0.7,
    },
    {
      field: "MobileNo",
      headerName: "MobileNo",
      minWidth: 50,
      flex: 0.7,
    },

    {
      field: "TableNo",
      headerName: "TableNo",
      type: "number",
      minWidth: 40,
      flex: 1,
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        MobileNo: item.MobileNo,
        TableNo: item.TableNo,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <div className={styles.dashboard}>
        <SideBar />
        <div className={styles.userListContainer}>
          <h1 id={styles.userListHeading}>All Users List</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className={styles.userListTable}
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AllUsers;
