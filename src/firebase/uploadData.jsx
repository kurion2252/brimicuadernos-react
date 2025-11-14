import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase.jsx";
import data from "../data/data.js";

export async function uploadProducts() {
  try {
    for (const item of data) {
      await addDoc(collection(db, "productos"), item);
    }
    console.log("Productos cargados correctamente!");
  } catch (error) {
    console.error("Error subiendo productos:", error);
  }
}
