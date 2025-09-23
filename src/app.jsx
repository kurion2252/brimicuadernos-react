import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/Footer'


function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Bienvenidos a Brimicuadernos!"/>
            
            <Footer />
        </>
    )
}

export default App