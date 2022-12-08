import React from "react";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon, FontawesomeObject } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faDumbbell } from "@fortawesome/free-solid-svg-icons"


export function NavbarUser() {

    return <div classNameName="container-fluid ">


        <div className="row">

            <div className="col-lg-2 col-xs-12 col-md-6">
                <div className="mt-2">
                    <div className="m-auto d-flex justify-content-center">
                        <a class="Button-Main" href="https://3000-pablotronco-finalproyec-s7erupwgaxi.ws-us77.gitpod.io/shopping"> <button className="Button-Main mb-2"> <FontAwesomeIcon icon={faCartShopping} />  </button> </a>
                    </div>
                </div>
            </div>


            <div className="col-lg-1 col-xs-12 col-md-6">
            </div>

            <div className="col-6">
                <div className="mt-2" >
                    <div className="mx-auto">
                        <form role="search">
                            <input className="form-control me-2" type="search" placeholder="¿Qué deseas comprar?" aria-label="Search" />
                        </form>
                    </div>
                </div>
            </div>





            <div className="col-lg-2 col-xs-12 col-md-6">

            </div>




            <div className="col-lg-1 col-xs-12 col-md-6">
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="m-auto d-flex justify-content-center" id="container-buttons">
                            <div class="btn-group dropstart">
                                <button type="button" class="Button-Main dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faUser} />
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="https://3000-pablotronco-finalproyec-s7erupwgaxi.ws-us77.gitpod.io/Account"> Mi perfil </a></li>
                                    <li><a className="dropdown-item" href="https://3000-pablotronco-finalproyec-s7erupwgaxi.ws-us77.gitpod.io/admin"> Vender </a></li>
                                    <li><div class="dropdown-divider"> </div> </li>
                                    <li><a className="dropdown-item"> Cerrar sesión </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
};

