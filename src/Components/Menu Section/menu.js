import React, { useState } from "react";
import styles from "./menu.module.css";
import logo from "../../Assets/chef.png";
import Categories from "./categories";
// import items from "./data";
import MenuList from "./menuCard";

const items = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "snacks",
    price: 6.99,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "snacks",
    price: 18.99,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "snacks",
    price: 16.99,
  },
];

const allCategories = ["all", "snacks", "breakfast", "lunch"];
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

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
        <MenuList items={menuItems} />
      </section>
    </div>
  );
};

export default Menu;
