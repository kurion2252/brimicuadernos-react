// import { React } from "react";

// function Item({ producto }) {
//     if (!producto) return null;
//     return (
//         <div className="item/card">
//             <img src={producto.imagen} alt={producto.nombre} />
//             <h3>{producto.nombre}</h3>
//             <p>${producto.precio}</p>
//             <Link to={'/detalle/${producto.id}'}>Ver detalle</Link>
//         </div>
//     )
// }

// export default Item;
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.img} alt={item.title} width="200" />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p><strong>${item.price}</strong></p>
      <Link to={`/item/${item.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
    