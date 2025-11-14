import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

  if (!item) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="item-card">
      <img 
        src={item.img || "/placeholder.jpg"} 
        alt={item.title} 
        width="200" 
      />

      <h3>{item.title}</h3>

      {item.description && <p>{item.description}</p>}

      <p><strong>${item.price}</strong></p>

      <Link to={`/item/${item.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
