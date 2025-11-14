import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "productos");

    let consulta;

    if (categoria) {
      // FILTRA POR CATEGORÍA EXACTA
      consulta = query(productsRef, where("category", "==", categoria));
    } else {
      // TRAE TODOS LOS PRODUCTOS
      consulta = productsRef;
    }

    getDocs(consulta)
      .then((res) => {
        const data = res.docs.map((prod) => ({
          id: prod.id,
          ...prod.data(),
        }));
        setItems(data);
      })
      .finally(() => setLoading(false));
  }, [categoria]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{greeting}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList items={items} />}
    </div>
  );
}

export default ItemListContainer;
