import './App.css'
import Navbar from './components/Navbar/NavbarBarber'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
/*     <>
      <Navbar />
      <ItemListContainer />
    </> */
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/CoderHouse-React-Entregable2/" element={<ItemListContainer />} />
      <Route path="category/:id" element={<ItemListContainer />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App