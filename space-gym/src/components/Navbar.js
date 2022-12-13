import { React, useContext} from "react";
import {Context} from "../store/Context"
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faDumbbell } from "@fortawesome/free-solid-svg-icons"



export function Navbar() {

    const navigate= useNavigate()
    const { store, actions } = useContext(Context);
   

    return <div className="container-fluid ">
  <div className="row row-nav">
            <nav className="navbar " id="bg-navbar-1">
                <div className="container-fluid d-flex justify-content-center">
                    <Link to="/"><button className="Button-Navbar mb-2">  <h3>Space Gym</h3> <div className="mb-2" style={{ fontSize: "40px", color: "#0076B8" }} > <FontAwesomeIcon icon={faDumbbell} /></div></button></Link> 

                </div>
            </nav>
        </div>

        <div className="row  row-nav">

            <div className="col-lg-2 col-xs-12 col-md-6">

                <div className="mt-2">
                    <div className="m-auto d-flex justify-content-center">
                     <Link className="Button-Main" to="/shopping"><button className="Button-Main mb-2"> <FontAwesomeIcon icon={faCartShopping} /></button></Link>
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
                <div className="mt-2">
                    <div className="d-flex justify-content-center">

                        <Link to="/registration"><button className="Button-Main mb-2"> Registrate</button></Link>
                    </div>
                </div>


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
                                    <li><Link className="dropdown-item" to="/login"> Iniciar sesión </Link></li>
                                    <li><Link className="dropdown-item" to="/Account"> Mi perfil </Link></li>
                                    <li><Link className="dropdown-item" to="/admin"> Vender </Link></li>
                                    <li><div class="dropdown-divider"> </div> </li>
                                    <li> <button onClick={()=> actions.logout(navigate)}  className="dropdown-item"> Cerrar sesión </button></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </nav>
            </div>
        </div>
    </div >

};

