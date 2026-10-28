import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import DetailsProduct from "./components/DetailsProduct/DetailsProduct.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { CartProvider } from "./components/CartContext/CartContext.jsx";
import { useState } from "react";
import Search from "./components/Search/Search.jsx";

/**
 * Componente principal de la aplicación
 * 
 * Gestiona el enrutamiento global, el estado compartido del buscador
   y provee el contexto del carrito decompras a toda la aplicación.
 */ 
function App() {
  // Estado booleano para controlar la visibilidad de la interfaz del buscador
  const [buscarTermino, setBuscarTermino] = useState('');
  // Estado booleano para controlar la visivilidad de la interfaz del buscador
  const [mostrarBuscador, setMostrarBuscador] = useState(false)
  
  /**
   * Actualiza el término de búsqueda formateándolo en minusculas 
     para normalizar las comparaciones de productos.
   *
   * @param {string} termino ingresado por el usuario
   */
  const handleBuscar = (termino) => {
    setBuscarTermino(termino.toLowerCase())
  }

  /**
   * Alterna el estado de visibilidad del buscador (abierto/cerrado).
   */
  const alternarBuscador = () => {
    setMostrarBuscador(!mostrarBuscador)
  }

  /* devolver la respuesta del buscador y mostrar los productos acorde a las palabras clave */
  return (
    <>
      <CartProvider>
        <Router>
          <Navbar alternarBuscador = {alternarBuscador} />
          <Routes>
            <Route path="/" element ={ <Home buscarTermino = {buscarTermino} mostrarBuscador = {mostrarBuscador} /> }/>
            <Route path="/producto/:id" element ={ <DetailsProduct/> }/>
            <Route path="/carrito" element ={ <Cart/> }/>
            <Route path="/search" element = { <Search onSearch = {handleBuscar}/> }/>
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App
