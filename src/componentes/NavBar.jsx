import Articulos from "../componentes/Articulos"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <header>
            <nav className="navbar">
                <link to="/"><h1>Brimicuadernos</h1></link>
                
                <ul className="enlacesnavegacion">

                    <li><link to='/categoria/inicio'>Cuadernos</link></li> 
                    <li><link to='/categoria/agendas'>Agendas</link></li>
                    <li><link to='/categoria/presupuesto'>Presupuesto</link></li>
                    <li><link to='/categoria/contacto'>Cointacto</link></li>
                </ul>
                <link to="/carrito"></link>
            </nav>
        </header>
    )
}

export default NavBar