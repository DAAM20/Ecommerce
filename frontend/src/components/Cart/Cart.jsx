import { useCart } from '../CartContext/CartContext'
import './Cart.css'

const Cart = () => {
    const {carrito, actualizarCantidad, eliminarProducto} = useCart();
    
    const costoDeEnvio = 10;

    const subTotal = carrito.reduce((acc, producto) => 
        acc + producto.precio * producto.cantidad, 0)

    const total = subTotal + costoDeEnvio

    const handleAumentarCantidad = (productoid) => {
        actualizarCantidad(productoid, 1)
    }

    const handleDisminuirCantidad = (productoid) => {
        const producto = carrito.find((item) => item.id === productoid)
        if(producto.cantidad > 1) {
            actualizarCantidad(productoid, -1)
        }
    }

    const carritoOrdenado = [...carrito].sort((a, b) => a.nombre.localeCompare(b.nombre));
    return (
        <div className="cart-container">
            <h2>TU <span>CARRITO</span></h2>
            { carritoOrdenado.length === 0 ? (
                <p>Tu carrito esta vacio</p>
            ) : (
                <>
                <div className="cart-header">
                    <p>Productos</p>
                    <p>Precio</p>
                    <p>Cantidad</p>
                    <p>Total</p>
                    <p>Accion</p>
                </div>
                <ul className='cart-items'>
                    {
                        carritoOrdenado.map((producto) => {
                            const totalPrecio = producto.precio * producto.cantidad;
                            return(
                                <li className='cart-item' key={producto.id}>
                                    <div className="product-info">
                                        <img src={producto.imagen || "https://via.placeholder.com/150"} alt=""
                                        className='product-images'
                                        />
                                        <span>{producto.nombre}</span>
                                    </div>
                                    <p>${producto.precio.toFixed(2)}</p>

                                    <div className="quantity-controls">
                                        <button className='quantity-btn'
                                        onClick={() => handleDisminuirCantidad(producto.id)}
                                        >
                                            -
                                        </button>
                                        <input type="number"
                                        className='quantity-input'
                                        readOnly
                                        value={producto.cantidad}
                                        />
                                        <button className='quantity-btn'
                                        onClick={() => handleAumentarCantidad(producto.id)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p>${totalPrecio.toFixed(2)}</p>
                                    <button className='delete-btn'
                                    onClick={() => eliminarProducto(producto.id)}
                                    >
                                        <i className='fas fa-trash'></i>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                </>
            )}

            <div className="cart-summary">
                <h2>TU <span>CARRITO</span></h2>
                <p>Total Parcial: <span>${subTotal.toFixed(2)}</span></p>
                <p>Tarifa de envio: <span>${costoDeEnvio.toFixed(2)}</span></p>
                <p className='total'>Total: <span>${total.toFixed(2)}</span></p>
                <button className='checkout-btn'>PASAR POR LA CAJA</button>
            </div>
        </div>
    )
}

export default Cart
