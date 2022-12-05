import React from "react";
import "../styles/Navbar.css";
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
                <h3>Space Gym</h3>  <div className="mb-2" style={{ fontSize: "40px", color: "#0076B8" }} > <FontAwesomeIcon icon={faDumbbell} /></div>
            </div>
        </nav>

        <div className="row">

            <div className="col-lg-2 col-xs-12 col-md-6">
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="m-auto d-flex justify-content-center" id="container-buttons">
                            <div className="dropdown mx-5">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menú
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="https://3000-pablotronco-finalproyec-s7erupwgaxi.ws-us77.gitpod.io/"> Menú principal </a></li>
                                    <li><a className="dropdown-item" href="https://3000-pablotronco-finalproyec-s7erupwgaxi.ws-us77.gitpod.io/registration"> Crear usuario </a></li>
                                    <li><a className="dropdown-item" href="https://3000-pablotronco-finalproyec-s7erupwgaxi.ws-us77.gitpod.io/login"> Iniciar sesion </a></li>
                                    <li><a className="dropdown-item" href="https://3000-pablotronco-finalproyec-s7erupwgaxi.ws-us77.gitpod.io/account"> Mi cuenta </a></li>
                                    <li><div class="dropdown-divider"> </div> </li>
                                    <li><a className="dropdown-item" href="https://3000-pablotronco-finalproyec-s7erupwgaxi.ws-us77.gitpod.io/admin"> Admin</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>


            <div className="col-lg-1 col-xs-12 col-md-6">
                <div className="mt-2">
                    <div className="m-auto d-flex justify-content-center">
                        <button type="button m-5" class="btn btn-secondary" > <FontAwesomeIcon icon={faUser} />  </button>
                    </div>
                </div>
            </div>

            <div className="col-6">

            </div>

            <div className="col-lg-2 col-xs-12 col-md-6">
                <div className="mt-2 margin-right-5" >
                    <form role="search">
                        <input className="form-control me-2" type="search" placeholder="¿Qué deseas comprar?" aria-label="Search" />
                    </form>
                </div>

            </div>

            <div className="col-lg-1 col-xs-12 col-md-6">
                <div className="mt-2">
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-secondary" type="submit"> <FontAwesomeIcon icon={faCartShopping} /> </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

