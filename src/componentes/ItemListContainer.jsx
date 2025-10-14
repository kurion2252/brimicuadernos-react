import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.js"
import Item from "./Item"

function ItemListContainer(props) {
    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        const obtenerProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 500);
        });

        obtenerProductos.then((res) => {
            if (categoria) {
                setProductos(res.filter(prod => prod.categoria === categoria));
            } else {
                setProductos(res);
            }
        }); 
    }, [categoria]);

    return (
        <section className="itemlist">
            <h3>-- {props.greeting} --</h3>
            {productos.map((prod) => (
                <Item 
                    key={prod.id}
                    tittle={prod.title}
                    img={prod.img}
                    precio={prod.precio}
                />
            ))}
        </section>
    );
}
export default ItemListContainer;
