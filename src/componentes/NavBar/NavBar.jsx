import Articulos from "../Articulo/Articulos"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <header>
            <nav className="navbar">
                <Link to="/"><h1>Brimicuadernos</h1></Link>
                
                <ul className="enlacesnavegacion">

                    <li><Link to='/categoria/inicio'>Cuadernos</Link></li> 
                    <li><Link to='/categoria/agendas'>Agendas</Link></li>
                    <li><Link to='/categoria/presupuesto'>Presupuesto</Link></li>
                    <li><Link to='/categoria/contacto'>Contacto</Link></li>
                </ul>
                <Link to="/carrito"></Link>
            </nav>
        </header>
    )
}

export default NavBar