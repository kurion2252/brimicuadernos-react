

import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import data from "../../data/data.js"; 
const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });

    getData.then((res) => setItems(res));
  }, []);

  return (
    <div className="item-list-container">
      <h2>Catálogo de Productos</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

