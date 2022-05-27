import React from "react";
import styles from "./menu.module.css";

const MenuList = ({ items }) => {
  return (
    <div className={styles.sectionCenter}>
      {items.map((item) => {
        const { id, title, price } = item;
        return (
          <article key={id} className={styles.menuitem}>
            <img src='https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",' alt={title} className={styles.photo} />
            <div className={styles.itemInfo}>
              <header>
                <h4>{title}</h4>
                <h4 className={styles.price}>${price}</h4>
              </header>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuList;
