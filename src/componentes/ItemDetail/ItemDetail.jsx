import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    if (!item) {
        return <h3>Cargando producto...</h3>;
    }

    // función que recibe la cantidad desde ItemCount
    const handleAdd = (quantity) => {
        addToCart(item, quantity);
        setAdded(true);
    };

    return (
        <div className="item-detail">
            <img src={item.img} alt={item.title} width="300" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p><strong>Precio: ${item.price}</strong></p>

            {!added ? (
                <ItemCount
                    stock={item.stock}
                    initial={1}
                    onAdd={handleAdd}
                />
            ) : (
                <p>Producto agregado al carrito 🛒</p>
            )}
        </div>
    );
};

export default ItemDetail;
