import React, { Fragment, useEffect, useState } from "react";
import {
  clearErrors,
  updateItem,
  getItemDetails,
} from "../../../Redux/Actions/itemAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "../Sidebar/sidebar";
import { UPDATE_ITEM_RESET } from "../../../Redux/Constants/itemConstant";
import { useNavigate,useParams, Navigate } from "react-router-dom";
import styles from "../NewItem/newItem.module.css";


const UpdateItem = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const params = useParams();

  // const { error, item } = useSelector((state) => state.getItemDetails);

  // const {
  //   loading,
  //   error: updateError,
  //   isUpdated,
  // } = useSelector((state) => state.item);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [Type, setType] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages, setOldImages] = useState([]);

  const categories = ["breakfast", "lunch", "dinner", "snacks"];
  const type = ["veg", "nonveg"];

  const itemId = params.id;

  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }

    // if (updateError) {
    //   alert.error(updateError);
    //   dispatch(clearErrors());
    // }

    // if (item && item._id !== itemId) {
    //   dispatch(getItemDetails(itemId));
    // } else {
    //   setName(item.name);
    //   setPrice(item.price);
    //   setCategory(item.category);
    //   setType(item.Type);
    //   setOldImages(item.images);
    // }

    // if (isUpdated) {
    //   alert.success("Item Updated Successfully!");
    //   navigate("/items");
    //   dispatch({ type: UPDATE_ITEM_RESET });
    // }
  }, [
    dispatch,
    // alert,
    // error,
    // isUpdated,
    // itemId,
    // item,
    // updateError,
    navigate,
  ]);

  const updateItemSubmitHandler = (e) => {
    e.preventDefault();

     const myForm = {
       name: name,
       price: price,
       category: category,
       itemType: Type,
       images: {
         public_id:
           Math.random().toString(36).substring(2, 15) +
           Math.random().toString(36).substring(2, 15),
         url: images.toString(),
       },
     };
    dispatch(updateItem(itemId, myForm));
    navigate("/home");
  };

  const updateItemImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <div className={styles.dashboard}>
        <SideBar />
        <div className={styles.newItemContainer}>
          <form
            className={styles.createItemForm}
            encType="multipart/form-data"
            onSubmit={updateItemSubmitHandler}
          >
            <h1>Update Item</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Item Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>

            <div>
              <AccountTreeIcon />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <StorageIcon />
              <select onChange={(e) => setType(e.target.value)}>
                <option value="">Choose Type</option>
                {type.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div id={styles.createItemFormFile}>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateItemImagesChange}
                multiple
              />
            </div>

            <div id={styles.createItemFormImage}>
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Item Preview" />
                ))}
            </div>

            <Button
              id={styles.createItemBtn}
              type="submit"
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateItem;
