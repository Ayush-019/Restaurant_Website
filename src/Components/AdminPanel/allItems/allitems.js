import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import styles from "./allitems.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "../Sidebar/sidebar";
import { DELETE_ITEM_RESET } from "../../../Redux/Constants/itemConstant";
import {
  clearErrors,
  deleteItem,
  getItemDetails,
} from "../../../Redux/Actions/itemAction";

const AllProducts = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, items } = useSelector((state) => state.items);

//   const { isDeleted, error: deleteError } = useSelector((state) => state.item);

//   const deleteProductHandler = (id) => {
//     dispatch(deleteItem(id));
//   };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    // if (deleteError) {
    //   alert.error(deleteError);
    //   dispatch(clearErrors());
    // }

    // if (isDeleted) {
    //   alert.success("Product Deleted Successfully");
    //   history.push("/admin/dashboard");
    //   dispatch({ type: DELETE_ITEM_RESET });
    // }

    dispatch(getItemDetails());
  }, [dispatch, alert, error, history]);
//   [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "type",
      headerName: "type",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/getitem/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
            //   onClick={() =>
            //     deleteProductHandler(params.getValue(params.id, "id"))
            //   }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  items &&
    items.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <div className={styles.dashboard}>
        <SideBar />
        <div className={styles.productListContainer}>
          <h1 id={styles.productListHeading}>ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className={styles.productListTable}
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AllProducts;
