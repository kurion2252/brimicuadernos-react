import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {

  if (!items || items.length === 0) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
