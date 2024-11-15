import './App.css'
import Navbar from './components/Navbar/NavbarBarber'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/CoderHouse-React-Entregable2/" element={<ItemListContainer />} />
      <Route path="/CoderHouse-React-Entregable2/category/:id" element={<ItemListContainer />} />
      <Route path="/CoderHouse-React-Entregable2/item/:id" element={<ItemDetailContainer />} />
      <Route path="/CoderHouse-React-Entregable2/cart" element={<Cart />} />
      <Route path="*" element={<h1>El url ingresado no existe</h1>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App