import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonsCart.css';

export const ButtonsCart = () => {
  return (
    <>
      <Link to="/cart">
        <button className="ButtonCart">Ir al cart</button>
      </Link>

      <Link to="/">
        <button className="ButtonCart">Seguir comprando</button>
      </Link>
    </>
  );
};
