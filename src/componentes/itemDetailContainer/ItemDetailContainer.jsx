// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import data from "../data/data.js";
// import Itemdetail from "./ItemDetail";

// function ItemDetailContainer() {
//     const {id} = useParams();
//     const [producto, setProducto] = useState(null);

//     useEffect(() => {
//         setLoading(true);
        
//         const obtenerProducto = new Promise((resolve) => {
//             setTimeout(() => resolve(data.find(p => p.id === parseInt(id))), 500)});
//         obtenerProducto.then((res) => setProducto(res))}, [id]);

//         if (!producto) return <p style={{textAlign: "center"}}>Cargando producto...</p>
//     return (
//         <div className="item-detail">
//             <h2>{producto.nombre}</h2>
//             <img src={producto.img} alt={producto.nombre} />
//             <p>{producto.descripcion}</p>
//             <p>Precio: ${producto.precio}</p>
//             </div>
//     );
// }

// export default ItemDetailContainer;

// src/componentes/ItemDetail/ItemDetail.jsx

// src/componentes/ItemDetailContainer/ItemDetailContainer.jsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        const foundItem = data.find((p) => p.id === id);
        resolve(foundItem);
      }, 1000);
    });

    getItem.then((res) => setItem(res));
  }, [id]);

  return (
    <div className="item-detail-container">
      <ItemDetail item={item} />
    </div>
  );
}

export default ItemDetailContainer;
