import { useState } from "react";

function Itemcount() {
    const [count, setCount] = useState(0);
    function sumar() {
        setCount(count + 1);
    }
    function restar() {
        setCount(count - 1);
    }
    return (
        <div id="counter-buttons">
            <button onclick={ restar } >-</button>
            <p>0</p>
            <button onClick={ sumar }>+</button>
        </div>
    )
}

export default Itemcount;