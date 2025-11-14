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
        const foundItem = data.find((p) => p.id === Number(id));
        resolve(foundItem);
      }, 1000);
    });

    getItem.then((res) => setItem(res));
  }, [id]);

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
