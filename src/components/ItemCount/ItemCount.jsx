import { useState } from 'react'

const ItemCount = ({ initial=1, stock=100, onAdd }) => {
    const [count, setCount] = useState(0)
    
    const increment = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decrement = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    const addCantidad = () => {
        onAdd(cantidad)
    }
  return (
    <div className='border border-2 border-primary container w-50'>
        <button className='btn btn-outline-primary' onClick={decrement}>-</button>
        <label>{cantidad}</label>
        <button className = "btn btn-outline-primary" onClick={increment}>+</button><br/>
        <button className='btn btn-outline-primary' onClick={addCantidad}>Agregar al carrito</button>

    </div>
  )
}

export default ItemCount