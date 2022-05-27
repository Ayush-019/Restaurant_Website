import React, { Fragment, useEffect } from "react";
// import { DataGrid } from "@material-ui/data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./Sidebar/sidebar";
import { getAllUsers, clearErrors } from "../../Redux/Actions/uerAction";

const AllUsers = ({ history }) => {
  const dispatch = useDispatch();

  const { error, users } = useSelector((state) => state.allUsers);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getAllUsers());
  }, [dispatch, error]);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 180, flex: 0.8 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "MobileNo",
      headerName: "MobileNo",
      minWidth: 200,
      flex: 1,
    },

    {
      field: "TableNo",
      headerName: "TableNo",
      type: "number",
      minWidth: 150,
      flex: 0.3,
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
      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">All Users List</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AllUsers;
