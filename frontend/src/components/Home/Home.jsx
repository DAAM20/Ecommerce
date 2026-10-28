import React, { useState } from "react"
import Search from '../Search/Search.jsx'
import Hero from '../Hero/Hero.jsx'
import ProductList from '../ProductList/ProductList.jsx'

const Home = ({buscarTermino, mostrarBuscador}) => {
    const [buscarTerminoLocal, setBuscarTerminoLocal] = useState("");

    const handleBuscar = (termino) => {
        setBuscarTerminoLocal(termino)
    }

    return (
        <>
        {!mostrarBuscador && <Hero/>}
        {mostrarBuscador && <Search onSearch = {handleBuscar}/>}
        
        
        <ProductList buscarTermino = {buscarTerminoLocal || buscarTermino  }/>
        </>
    )
}

export default Home