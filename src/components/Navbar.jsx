import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='navuno'>
        <img
          className="pizza-slice"
          src="src/assets/img/pizza-slice-free-svg-file.png"
          alt="pizza" />
        <NavLink to="/" className="titulo">¡Pizzería Mamma Mía!</NavLink>
      </div>
      <div className='navdos'>
        <img
          className="carro-compra"
          src="src/assets/img/carro-compra.png"
          alt="carro compra" />
        <NavLink to="/compra" className="titulo">$134.431</NavLink>
      </div>
    </nav>
  )
}

export default Navbar