import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseconfig";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "productos");

    // Si hay categoría, creamos una consulta filtrada, si no traemos todo
    let consulta = productsRef;
    if (categoria) {
      consulta = query(productsRef, where("category", "==", categoria));
    }

    getDocs(consulta)
      .then((res) => {
        // <-- aquí estaba el error: usar la variable correcta en map
        const data = res.docs.map((doc) => ({
          id: doc.id,     // <-- ID real del documento (IMPORTANTE)
          ...doc.data(),
        }));
        setItems(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [categoria]);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{greeting}</h2>
      {loading ? <p style={{ textAlign: "center" }}>Cargando productos...</p> : <ItemList items={items} />}
    </div>
  );
}

export default ItemListContainer;
