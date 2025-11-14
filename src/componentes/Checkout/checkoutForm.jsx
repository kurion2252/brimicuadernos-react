import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
    const { cart, clearCart } = useCart();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Datos del usuario:", formData);
        console.log("Productos comprados:", cart);

        alert("Compra realizada con éxito (versión sin Firebase)");
        clearCart();
    }

    if (cart.length === 0) {
        return (
            <div style={{ textAlign: "center", padding: 40 }}>
                <h2>No hay productos para comprar</h2>
                <Link to="/">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: 20 }}>
            <h2>Finalizar compra</h2>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 300,
                    gap: 10,
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Correo"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    style={{
                        padding: "10px",
                        background: "green",
                        color: "white",
                        border: "none",
                        borderRadius: 4,
                    }}
                >
                    Comprar
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
    