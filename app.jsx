import NavBar from './src/componentes/NavBar'
import ContenedorListaItem from './src/componentes/ContenedorListaItem'
import Footer from './src/componentes/Footer'

function App() {
    return (
        <>
            <NavBar />
            <ContenedorListaItem greeting="Bienvenidos a Brimicuadernos!"/>
            <Footer />
        </>
    )
}

export default App