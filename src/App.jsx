import './App.css'
import Navbar from './components/Navbar/NavbarBarber'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
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
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="*" element={<h1>El url ingresado no existe</h1>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App