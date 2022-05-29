import React, { useState, useEffect } from "react";
import styles from "./menu.module.css";
import logo from "../../Assets/chef.png";
import Categories from "./categories";
import MenuCard from "./menuCard";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../Redux/Actions/itemAction";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
import { useAlert } from "react-alert";

const Menu = () => {
  const { items } = useSelector((state) => state.items);
  const alert = useAlert();
  // console.log(items)
  const dispatch = useDispatch();
  const allCategories = ["all", "breakfast", "lunch", "dinner", "snacks"];
  const [socketConn, setSocketConn] = useState(null);

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState(allCategories);
  const { user } = useSelector((state) => state.user);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  useEffect(() => {
    const socket = io("https://socketiorisendine.azurewebsites.net/");
    console.log(socket);

    socket.on("connect", () => {
      console.log(socket.connected); // true
      setSocketConn(socket);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    setSocketConn(null);
    dispatch(getItems());
  }, []);

  useEffect(() => {
    //  filterItems(activeCategory);
    setMenuItems(items);
    //  dispatch(getItems());
  }, [items]);

  return (
    <div className={styles.menuWrapper}>
      <section className={styles.section && styles.menu}>
        <div className={styles.title}>
          <img src={logo} alt="logo" className={styles.logo} />
          <h2>Menu</h2>
          <div className={styles.underline}></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <MenuCard items={menuItems} />
      </section>
      <div className={styles.btns}>
        <Link to="/cart">
          <button>Proceed to Checkout</button>
        </Link>
        <button
          className={styles.btn2}
          onClick={() => {

            if (socketConn) {
              // console.log("socketConn");
              socketConn.emit("callwaiter",user.TableNo);
            } else {
              // console.log("nhi ho rha");
            }

            alert.success("Waiter's on the way");
          }}
        >
          Call a waiter
        </button>
      </div>
    </div>
  );
};

export default Menu;
