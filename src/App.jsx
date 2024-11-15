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
      <Route path="/CoderHouse-React-ProyectoFinal/" element={<ItemListContainer />} />
      <Route path="/CoderHouse-React-ProyectoFinal/category/:id" element={<ItemListContainer />} />
      <Route path="/CoderHouse-React-ProyectoFinal/item/:id" element={<ItemDetailContainer />} />
      <Route path="/CoderHouse-React-ProyectoFinal/cart" element={<Cart />} />
      <Route path="*" element={<h1>El url ingresado no existe</h1>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App