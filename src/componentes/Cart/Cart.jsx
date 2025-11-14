import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clearCart } = useCart();

    // Calcular total general
    const total = cart.reduce(
        (acc, prod) => acc + prod.price * prod.quantity,
        0
    );

    // Si el carrito está vacío
    if (cart.length === 0) {
        return (
            <div style={{ textAlign: "center", padding: "40px" }}>
                <h2>El carrito está vacío 🛒</h2>
                <Link to="/">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div className="cart-container" style={{ padding: "20px" }}>
            <h2>Carrito de compras</h2>

            {cart.map((prod) => (
                <div
                    key={prod.id}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "15px",
                        borderBottom: "1px solid #ccc",
                        paddingBottom: "10px"
                    }}
                >
                    {/* Imagen */}
                    <img src={prod.img} alt={prod.title} width="80" />

                    {/* Info */}
                    <div style={{ flex: 1, marginLeft: "15px" }}>
                        <h3>{prod.title}</h3>
                        <p>Precio: ${prod.price}</p>
                        <p>Cantidad: {prod.quantity}</p>
                        <p>Subtotal: ${prod.price * prod.quantity}</p>
                    </div>

                    {/* Botón para eliminar */}
                    <button
                        onClick={() => removeItem(prod.id)}
                        style={{
                            background: "red",
                            color: "white",
                            border: "none",
                            padding: "6px 12px",
                            cursor: "pointer",
                            borderRadius: "4px"
                        }}
                    >
                        X
                    </button>
                </div>
            ))}

            {/* Total */}
            <h3>Total a pagar: ${total}</h3>

            {/* Botones */}
            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={clearCart}
                    style={{
                        background: "gray",
                        color: "white",
                        padding: "10px 15px",
                        marginRight: "10px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                    }}
                >
                    Vaciar carrito
                </button>

                <Link to="/checkout">
                    <button
                        style={{
                            background: "green",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer"
                        }}
                    >
                        Finalizar compra
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
