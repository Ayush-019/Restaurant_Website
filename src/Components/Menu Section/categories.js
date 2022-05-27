import React from "react";
import styles from "./menu.module.css";
import "./category.css";

const Categories = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className={styles.btncontainer}>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filterbtnactive" : "filterbtn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
