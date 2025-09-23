import Articulos from "../componentes/Articulos"

function NavBar() {
    return (
        <header>
            <nav className="navbar">
                <div className="brand">
                    <h1>Brimicuadernos</h1>
                </div>
                <ul className="enlacesnavegacion">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Cuadernos/Agendas</a></li>
                    <li><a href="#">Presupuesto</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <Articulos />
            </nav>
        </header>
    )
}

export default NavBar