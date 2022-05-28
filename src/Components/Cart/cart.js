import React, { Fragment } from "react";
import styles from "./cart.module.css";
import CartCard from "./CartCard/cartcard";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../Redux/Actions/cartAction";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch();
const navigate  = useNavigate();


  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if(newQty < 0){
      newQty = 0;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/home");
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <div>No Items in Your Cart</div>
          <Link to="/home">View Food Items</Link>
        </div>
      ) :
      (
    <Fragment>
      <div className={styles.cartPage}>
        <div className={styles.cartHeading}>
          <h2>Cart</h2>
          <div className={styles.underline}></div>
        </div>
        <div className={styles.cartHeader}>
          <p>Product</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        {cartItems &&
          cartItems.map((item) => (
            <div className={styles.cartContainer} key={item.item}>
              <CartCard item={item} deleteCartItems={deleteCartItems} />
              <div className={styles.cartInput}>
                <button
                  onClick={() => decreaseQuantity(item.item, item.quantity)}
                >
                  -
                </button>
                <input type="number" value={item.quantity} readOnly />
                <button
                  onClick={() =>
                    increaseQuantity(item.item, item.quantity)
                  }
                >
                  +
                </button>
              </div>
              <p className={styles.cartSubtotal}>{`₹${
                item.price * item.quantity
              }`}</p>
            </div>
          ))}

        <div className={styles.cartGrossProfit}>
          <div></div>
          <div className={styles.cartGrossProfitBox}>
            <p>Gross Total</p>
            <p>{`₹${cartItems.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            )}`}</p>
          </div>
          <div></div>
          <div className={styles.checkOutBtn}>
            <button onClick={checkoutHandler}>Check Out</button>
          </div>
        </div>
      </div>
    </Fragment>
      )
    }
    </Fragment>
  );
};

export default Cart;
