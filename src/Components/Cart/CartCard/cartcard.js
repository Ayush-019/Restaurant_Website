import React from "react";
import styles from "./cartcard.module.css";
import { Link } from "react-router-dom";

const CartCard = ({ item, deleteCartItems }) => {
  return (
    <div className={styles.CartCard}>
      <img src={item.image} alt="item" />
      <div>
        {item.name}
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() =>{ 
          console.log(item.item)
          deleteCartItems(item.item)}}>Remove</p>
      </div>
    </div>
  );
};

export default CartCard;
