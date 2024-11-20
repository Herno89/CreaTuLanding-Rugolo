import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({valor}) => {
  return (
    <div>
        <h1>Tienda</h1>
{/*         <CartWidget valor={valor}/> */}
       
        <button>
          <Link to="/">Inicio</Link>
        </button>
        <button>
          <Link to="/ItemListContainer">Productos</Link>
        </button>

       
    </div>
  )
}

export default NavBar
