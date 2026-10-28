/** 
 * @fileoverview punto de entrada principal del eccomerce react.
 * Configura el entorno de renderizado inicial, inyecta los estilos globales 
 * y monta el componente raíz en el DOM de la aplicación.
 * 
 * @version 1.0.0
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * inicializa el nodo raiz del DOM utilizando la API Concurrent de react 18+
 * Se selecciona el contenedor con el ID 'root' definido en el archivo html principal
 * Renderiza la aplicación dentro del arbol de componentes React
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
