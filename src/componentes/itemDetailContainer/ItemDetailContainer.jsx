import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", id); // <-- el id de la URL es el ID del documento

    getDoc(docRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data() });
      } else {
        setItem("not-found");
      }
    });
  }, [id]);

  if (item === "not-found") return <p>Producto no encontrado</p>;

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
