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
import "../../../index.css";
import {
  clearErrors,
  deleteItem,
  getItemDetails,
  getItems,
} from "../../../Redux/Actions/itemAction";
import { useNavigate } from "react-router-dom";


const AllItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const alert = useAlert();

  const { error, items } = useSelector((state) => state.items);

  const { isDeleted, error: deleteError } = useSelector((state) => state.item);

  const deleteProductHandler = (id) => {
    dispatch(deleteItem(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Item Deleted Successfully");
      navigate("/admin");
      dispatch({ type: DELETE_ITEM_RESET });
    }

    dispatch(getItems());
  }, [dispatch, alert, error, deleteError, isDeleted, navigate]);


  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 100, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "type",
      headerName: "type",
      type: "number",
      minWidth: 100,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 50,
      flex: 0.4,
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
            <Link to={`/updateitem/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
              }
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
        type: item.Type,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <div className={styles.dashboard}>
        <SideBar />
        <div className={styles.productListContainer}>
          <h1 id={styles.productListHeading}>ALL Menu Items</h1>

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

export default AllItems;
