import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAzLqVo2fAXmlrPHOBAUd-GBdMw9ntU4E",
  authDomain: "brimicuadernos-react.firebaseapp.com",
  projectId: "brimicuadernos-react",
  storageBucket: "brimicuadernos-react.firebasestorage.app",
  messagingSenderId: "668725659524",
  appId: "1:668725659524:web:c381988e85cc67e16c7fd1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;    