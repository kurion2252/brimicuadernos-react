import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.js";

function ItemDetailContainer() {
    const {id} = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const obtenerProducto = new Promise((resolve) => {
            setTimeout(() => resolve(data.find(p => p.id === parseInt(id))), 500)});
        obtenerProducto.then((res) => setProducto(res))}, [id]);

        if (!producto) return <p style={{textAlign: "center"}}>Cargando producto...</p>
    return (
        <div className="item-detail">
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre} />
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            </div>
    );
}

export default ItemDetailContainer;