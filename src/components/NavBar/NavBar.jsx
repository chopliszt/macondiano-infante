import React, { useContext } from "react";
import NarvBarItem from "./NavBarItem/NavBarItem";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";
//el contexto
import { CartContext } from "../Context/CartContext";

const NavBar = (props) => {
  const { cartList } = useContext(CartContext);
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: `${props.colorDeNavBar}` }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.navBrandLeft}
          </Link>

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
          {/* Fin de la seccion del boton de hamburguesa */}

          {/* Todo lo que hay desde aca se va a colapsar en la hamburguesa */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Aqui comienza el unordered list que hace el menu */}
            <ul className="navbar-nav">
              <NavLink to="/">
                <NarvBarItem
                  texto="Home"
                  // aClase="nav-link active"
                  aClase="nav-link"
                  // aHref="https://perspektiva360.com/"
                />
              </NavLink>
              <NavLink to="/category/VIS">
                <NarvBarItem
                  texto="Hogares VIS"
                  aClase="nav-link"
                  // aHref="https://perspektiva360.com/?lang=en"
                />
              </NavLink>
              <NavLink to="/category/NOVIS">
                <NarvBarItem
                  texto="Hogares NOVIS"
                  aClase="nav-link"
                  // aHref="https://perspektiva360.com/?lang=en"
                />
              </NavLink>
            </ul>
            {/* este UL  se alinea derecha por clase ms-auto*/}
            <ul className="navbar-nav ms-auto">
              <CartWidget compras={cartList.length} />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
