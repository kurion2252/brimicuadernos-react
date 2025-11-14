import { useState } from "react";

function ItemCount() {

    const [count, setCount] = useState(0);

    function sumar() {
        setCount(count + 1);
    }

    function restar() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div id="counter-buttons">
            <button onClick={restar}>-</button>
            <p>{count}</p>
            <button onClick={sumar}>+</button>
        </div>
    );
}

export default ItemCount;
