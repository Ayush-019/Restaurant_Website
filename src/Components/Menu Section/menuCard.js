import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import veg from "../../Assets/veg.png";
import nonVeg from "../../Assets/nonveg.png";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../Redux/Actions/cartAction";
import { useAlert } from "react-alert";

const MenuList = ({ items }) => {
  const dispatch = useDispatch();
    const alert = useAlert();

  const addToCartHandler = (_id) => {
    alert.success("Item Added To Cart!");
    dispatch(addItemsToCart(_id, 1));
  };

  return (
    <div className={styles.sectionCenter}>
      {items &&
        items.map((item) => {
          const { _id, name, price, itemType } = item;
          console.log(_id);
          return (
            <article key={_id} className={styles.menuitem}>
              <img
                src={item.images[0].url}
                alt={name}
                key={_id}
                className={styles.photo}
              />
              <div className={styles.itemInfo}>
                <div>
                  <h4>{name}</h4>
                  {itemType === "veg" ? (
                    <div className={styles.type}>
                      <div>
                        <img src={veg} alt="veg" />
                      </div>
                      <div>
                        <h6 className={styles.veg}>veg</h6>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.type}>
                      <img src={nonVeg} alt="nonveg" />
                      <h6 className={styles.nonveg}>nonveg</h6>
                    </div>
                  )}
                  <h4 className={styles.price}>Price : {price}₹</h4>
                </div>
                <div className={styles.cartbtn}>
                  <button onClick={() => addToCartHandler(_id)}>Add to Cart</button>
                </div>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default MenuList;
