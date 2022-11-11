import React from "react";
import "../styles/App.css";

export function Navbar() {

    return <div classNameName="container-fluid ">
        <nav className="navbar " id="bg-navbar-1">
            <div className="container-fluid d-flex justify-content-center">
               <h3>PORTAL GYM</h3> 
            </div>
        </nav>
        <nav className="navbar" id="bg-navbar-2">
            <div className="container-fluid">

                <div className="m-auto d-flex" id="container-buttons">
                    <div className="dropdown mx-5">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menú
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Action</a></li>
                            <li><a className="dropdown-item" href="/">Another action</a></li>
                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </div>

                    <button type="button m-5" class="btn btn-secondary">Perfil</button>

                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="¿Qué desas comprar?" aria-label="Search" />
                    <button className="btn btn-danger" type="submit">ICONO</button>
                </form>
            </div>
        </nav>

    </div>
};

