import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import Footer from './componentes/Footer'


function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="Bienvenidos a Brimicuadernos!"/>
            
            <Footer />
        </div>
    )
}

export default App