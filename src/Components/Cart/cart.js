import React, { Fragment } from "react";
import styles from "./cart.module.css";
import CartCard from "./CartCard/cartcard";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../Redux/Actions/cartAction";
import { Link } from "react-router-dom";

const Cart = ({ history }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      alert.info(`Only ${stock} items are in Stock`);
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (quantity <= 1) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/home");
  };

  return (
    // <Fragment>
    //   {cartItems.length === 0 ? (
    //     <div className={styles.emptyCart}>
    //       <div>No Items in Your Cart</div>
    //       <Link to="/home">View Food Items</Link>
    //     </div>
    //   ) :
    //   (
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
            <div className={styles.cartContainer} key={item.product}>
              <CartCard item={item} deleteCartItems={deleteCartItems} />
              <div className={styles.cartInput}>
                <button
                  onClick={() => decreaseQuantity(item.product, item.quantity)}
                >
                  -
                </button>
                <input type="number" value={item.quantity} readOnly />
                <button
                  onClick={() =>
                    increaseQuantity(item.product, item.quantity, item.stock)
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
    //   )
    // }
    // </Fragment>
  );
};

export default Cart;
