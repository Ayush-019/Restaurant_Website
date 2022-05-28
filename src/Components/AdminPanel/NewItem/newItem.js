import React, { Fragment, useEffect, useState } from "react";
import styles from "./newItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createItem } from "../../../Redux/Actions/itemAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "../Sidebar/sidebar";
import { NEW_ITEM_RESET } from "../../../Redux/Constants/itemConstant";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const newItem = useSelector((state) => state.newitem);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [Type, setType] = useState(0);
  const [imageUrl, setImageUrl] = useState([]);

  const categories = ["breakfast", "lunch", "dinner", "snacks"];
  const type = ["veg", "nonveg"];


  useEffect(() => {
    console.log(newItem)
    if (newItem?.error) {
      alert.error(newItem?.error);
      dispatch(clearErrors());
    }

    if (newItem?.success) {
      alert.success("Item Created Successfully");
      navigate("/admin");
      dispatch({ type: NEW_ITEM_RESET });
    }
  }, [alert, newItem]);

  const createItemSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = {
      name: name,
      price: price,
      category: category,
      itemType:Type,
      images:{
        public_id:Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        url:imageUrl
      }
    };
    dispatch(createItem(myForm));
  };


  return (
    <Fragment>
      <div className={styles.dashboard}>
        <SideBar />
        <div className={styles.newItemContainer}>
          <form
            className={styles.createItemForm}
            encType="multipart/form-data"
            onSubmit={createItemSubmitHandler}
          >
            <h1>Create Item</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Price(₹)"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
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

            <div>
              <input
                type="text"
                placeholder="Image Url"
                required
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            <Button id={styles.createItemBtn} type="submit">
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;
