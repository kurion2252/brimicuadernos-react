// src/componentes/ItemDetail/ItemDetail.jsx

import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidades de ${item.title}`);
    setAdded(true);
  };

  if (!item) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.title} width="300" />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p><strong>${item.price}</strong></p>

      {!added ? (
        <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p>Producto agregado al carrito 🛒</p>
      )}
    </div>
  );
};

export default ItemDetail;
    