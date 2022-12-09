import React from "react";
import "../styles/Main.css"


import bicep from "../images/bicep.jpg";
import deadlift from "../images/deadlift.jpg"
import remo from "../images/remo.jpg"
import aros from "../images/Aros.jpg"
import MMA from "../images/MMA.jpg"
import Yoga from "../images/Yoga.jpg"
import Offerts from "./Offerts";

export function Main() {


    return <div className="container-fluid" >
        <div className="row" id="container-main" >
            <div className="col-4"> </div>
            <div className="col-4 mt-5">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={bicep} className="d-block w-100 h-80 img-fluid " alt="..."   />
                        </div>
                        <div className="carousel-item">
                            <img src={deadlift} className="d-block w-100  h-80  img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
<<<<<<< HEAD
                           <img src={remo} className="d-block w-100 h-80  img-fluid" alt="..." />
=======
                         <img src={remo} className="d-block w-100 h-80  img-fluid" alt="..." />
>>>>>>> 5cf2abbfe77373924450fa836fac4aa2928b7243
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>


        <div className="row mt-3  mb-2" id="container-main-2">
            <div className="col-2 mt-3  mb-2">    </div>
            <div className="col-4 mt-3  mb-2">    <a href="https://3000-pablotronco-finalproyec-s7erupwgaxi.ws-us78.gitpod.io/account">  <img src={aros} className="d-block w-100 img-fluid " alt="..." /> </a>   </div>
            <div className="col-4 mt-3  mb-2">     <img src={MMA} className="d-block w-100 img-fluid  col-4 mt-3  mb-2 " alt="..." />   <img src={Yoga} className="d-block w-100 img-fluid col-4 mt-3  mb-2 " alt="..." />  </div>
            <div className="col-2 mt-3 mb-2">  </div>
        </div>
        <Offerts />
    </div>
};


export default Main;