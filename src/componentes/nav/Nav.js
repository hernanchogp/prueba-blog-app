import React from 'react';
import { NavLink } from "react-router-dom";

class Nav extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <NavLink to="/" className="navbar-brand">Prueba Tecnica</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blogs" className="nav-link">Publicaciones </NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        )

    }

}

export default Nav;