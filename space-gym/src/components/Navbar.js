import React from "react";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { faDumbbell } from "@fortawesome/free-solid-svg-icons"


export function Navbar() {

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
                <div className="mt-2">
                    <div className="d-flex justify-content-center">
                    <Link to="/login"><button className="Button-Main mb-2">Iniciar<FontAwesomeIcon icon={faUser} /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div >

};

