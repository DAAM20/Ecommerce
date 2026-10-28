import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (producto) => {
        setCarrito((carritoAnterior) => {
            const yaExisteElproducto = carritoAnterior.findIndex(
                (articulo) => articulo.id === producto.id
            );
            if (yaExisteElproducto >= 0) {
                const carritoActualizado = [...carritoAnterior];
                carritoActualizado[yaExisteElproducto] = {
                    ...carritoActualizado[yaExisteElproducto],
                    cantidad: carritoActualizado[yaExisteElproducto].cantidad + 1
                };
                return carritoActualizado;
            } else {
                return [...carritoAnterior, { ...producto, cantidad: 1 }]
            }
        })
    }

    const actualizarCantidad = (productoid, cantidad) => {
        setCarrito((carritoAnterior) => 
            carritoAnterior.map((producto) => 
                producto.id === productoid
        ? {...producto, cantidad: producto.cantidad + cantidad}
        : producto
            )
        )
    }

    const eliminarProducto = (productoid) => {
        setCarrito((carritoAnterior) =>
        carritoAnterior.filter((producto) =>
            producto.id !== productoid
        ))
    }

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, actualizarCantidad, eliminarProducto}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
