import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig";  // ← CORREGIDO
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getItem() {
      console.log("ID desde la URL:", id);

      const itemsRef = collection(db, "productos");
      const q = query(itemsRef, where("id", "==", id));
      const querySnap = await getDocs(q);

      if (!querySnap.empty) {
        setItem({
          ...querySnap.docs[0].data(),
          firebaseId: querySnap.docs[0].id,
        });
      }
    }

    getItem();
  }, [id]);

  return item ? <ItemDetail item={item} /> : <p>Cargando producto...</p>;
}

export default ItemDetailContainer;
