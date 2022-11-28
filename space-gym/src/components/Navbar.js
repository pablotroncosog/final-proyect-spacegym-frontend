import React from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon, FontawesomeObject } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faDumbbell } from "@fortawesome/free-solid-svg-icons"

export function Navbar() {

    return <div classNameName="container-fluid ">
        <nav className="navbar " id="bg-navbar-1">
            <div className="container-fluid d-flex justify-content-center">
                <h3>Space Gym</h3>  <div className="mb-2" style={{ fontSize: "40px", color: "#0076B8"}} > <FontAwesomeIcon icon={faDumbbell} /></div>
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

                    <button type="button m-5" class="btn btn-secondary"> <FontAwesomeIcon icon={faUser} />  </button>

                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="¿Qué deseas comprar?" aria-label="Search" />
                    <button className="btn btn-secondary" type="submit"> <FontAwesomeIcon icon={faCartShopping} />  </button>
                </form>
            </div>
        </nav>

    </div>
};

