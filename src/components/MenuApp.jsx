import React from 'react'
import {  NavLink} from 'react-router-dom'

export const MenuApp = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page" href="#">
                  Proximo Estrenos
                </NavLink>
              </li>
            <li className="nav-item">
                <NavLink to="/calificadas" className="nav-link active" aria-current="page" href="#">
                  Mejor Calificadas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="peliculas" className="nav-link active" aria-current="page" href="#">
                  Peliculas Cartelera
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

