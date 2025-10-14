import { React } from "react";

function Item({ producto }) {
    return (
        <div className="item/card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <link to={`/detalle/${producto.id}`}>Ver detalle</link>
        </div>
    )
}

export default Item;