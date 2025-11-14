import React from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalUnits } = useCart();

  return (
    <Link to="/cart" style={{ position: "relative", display: "inline-block" }}>
      <img src="/cart-icon.svg" alt="cart" style={{ width: 28 }} />

      {totalUnits > 0 && (
        <span
          style={{
            position: "absolute",
            top: -6,
            right: -6,
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: 12,
          }}
        >
          {totalUnits}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
