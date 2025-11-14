import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Footer from './componentes/Footer'
import ItemDetailContainer from './componentes/itemDetailContainer'
import { Routes, Route} from 'react-router-dom'



function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Brimicuadernos!"/>} />
                <Route path='/categoria/:categoria' element={<ItemListContainer />} />
                <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                <Route path='*' element={<h2 style={{ textAlign: 'center'}}>Error 404: Página no encontrada</h2>} />
            </Routes>            
            <Footer />
        </div>
    )
}

export default App