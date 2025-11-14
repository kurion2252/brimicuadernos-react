
// import React,{ useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import data from "../data/data.js"
// import Item from "./Item"

// function ItemListContainer(props) {
//     const [productos, setProductos] = useState([]);
//     const { categoria } = useParams();

//     useEffect(() => {
//         const obtenerProductos = new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(data);
//             }, 500);
//         });

//         obtenerProductos.then((res) => {
//             if (categoria) {
//                 setProductos(res.filter(prod => prod.categoria === categoria));
//             } else {
//                 setProductos(res);
//             }
//         }); 
//     }, [categoria]);

//     return (
//         <section className="item-list">
//             <h3 style={{ textAlign: "center"}}>-- {props.greeting} --</h3>
//             <div className="item-gtis">
//             {productos.map((prod) => (
//                 <Item 
//                     key={prod.id}
//                     tittle={prod.title}
//                     img={prod.img}
//                     precio={prod.precio}
//                 />
//             ))}
//             </div>
//         </section>
//    );
// }
// export default ItemListContainer;

import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList.js";
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

