import React, { useState, useEffect } from "react";
import styles from "./menu.module.css";
import logo from "../../Assets/chef.png";
import Categories from "./categories";
import MenuCard from "./menuCard";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "../../Redux/Actions/itemAction";
import { Link } from "react-router-dom";


const Menu = () => {
  const { items } = useSelector((state) => state.items);
  // console.log(items)
  const dispatch = useDispatch();
  const allCategories = ["all", "breakfast","lunch","dinner","snacks"];

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("all");
  const [categories, setCategories] = useState(allCategories);

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
    dispatch(getItems());
  }, [dispatch]);

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
        <button className={styles.btn2}>Call a waiter</button>
      </div>
    </div>
  );
};

export default Menu;
