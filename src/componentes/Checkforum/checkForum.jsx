import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const CheckoutForm = () => {
    const { cart, clearCart, totalUnits } = useCart();

    const [buyer, setBuyer] = useState({
        nombre: "",
        email: "",
        telefono: "",
    });

    const [orderId, setOrderId] = useState("");

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("El carrito está vacío!");
            return;
        }

        const order = {
            buyer,
            items: cart,
            total: cart.reduce((acc, p) => acc + p.price * p.quantity, 0),
            date: Timestamp.now(),
        };

        try {
            const docRef = await addDoc(collection(db, "ordenes"), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.log("Error creando orden:", error);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Finalizar compra</h2>

            {orderId ? (
                <div>
                    <h3>¡Gracias por tu compra! 🛒</h3>
                    <p>Tu ID de orden es:</p>
                    <strong>{orderId}</strong>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre completo"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="tel"
                        name="telefono"
                        placeholder="Teléfono"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" style={{ marginTop: "10px" }}>
                        Confirmar compra
                    </button>
                </form>
            )}
        </div>
    );
};

export default CheckoutForm;
