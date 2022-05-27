import React from "react";
import styles from "./cartcard.module.css";
import { Link } from "react-router-dom";

const CartCard = ({ item, deleteCartItems }) => {
  return (
    <div className={styles.CartCard}>
      <img src={item.image} alt="item" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
      </div>
    </div>
  );
};

export default CartCard;
