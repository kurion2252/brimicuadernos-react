import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Footer from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CheckoutForm from "./componentes/Checkout/CheckoutForm";


function App() {
    return (
        <CartProvider>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route
                        path='/'
                        element={<ItemListContainer greeting="Bienvenidos a Brimicuadernos!" />}
                    />
                    <Route path="/checkout" element={<CheckoutForm />} />
                    <Route
                        path='/categoria/:categoria'
                        element={<ItemListContainer />}
                    />
                    <Route
                        path='/detalle/:id'
                        element={<ItemDetailContainer />}
                    />
                    <Route
                        path='*'
                        element={<h2 style={{ textAlign: 'center' }}>Error 404: Página no encontrada</h2>}
                    />
                </Routes>
                <Footer />
            </div>
        </CartProvider>
    );
}

export default App;
