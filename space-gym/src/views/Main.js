import React from "react";
import "../styles/App.css"

import bicep from "../images/bicep.jpg";
import deadlift from "../images/deadlift.jpg"
import remo from "../images/remo.jpg"
import aros from "../images/Aros.jpg"
import MMA from "../images/MMA.jpg"
import Yoga from "../images/Yoga.jpg"
import placeholderImg from "../images/placeholder-image.png"

export function Main() {

    let articles = [{
        img: "https://cdn.shopify.com/s/files/1/0289/4453/1538/products/mancuernas-ironsider-23-96b54dcb-621c-4ca5-aa63-9e0665b3f9d2_b665c580-0ebc-406d-a2a7-8f74f8e91bd7_1024x1024.jpg?v=1659555154",
        title: "Mancuerna",
        price: "9.990"
    }, {
        img: "https://cdn.shopify.com/s/files/1/0289/4453/1538/products/mancuernas-ironsider-23-96b54dcb-621c-4ca5-aa63-9e0665b3f9d2_b665c580-0ebc-406d-a2a7-8f74f8e91bd7_1024x1024.jpg?v=1659555154",
        title: "Mancuerna",
        price: "9.990"
    }, {
        img: "https://cdn.shopify.com/s/files/1/0289/4453/1538/products/mancuernas-ironsider-23-96b54dcb-621c-4ca5-aa63-9e0665b3f9d2_b665c580-0ebc-406d-a2a7-8f74f8e91bd7_1024x1024.jpg?v=1659555154",
        title: "Mancuerna",
        price: "9.990"
    }, {
        img: "",
        title: "Mancuerna",
        price: "9.990"
    }]

    return <div className="container-fluid">
        <div className="row">
            <div className="col-4"> </div>
            <div className="col-4 mt-5">  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bicep} className="d-block w-100 h-80 img-fluid " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={deadlift} className="d-block w-100  h-80  img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={remo} className="d-block w-100 h-80  img-fluid" alt="..." />
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
            </div>  </div>

            <div className="col-4"> </div>
        </div>

        <div className="row mt-3  mb-2">
            <div className="col-2 mt-3  mb-2">    </div>
            <div className="col-4 mt-3  mb-2">    <img src={aros} className="d-block w-100 img-fluid " alt="..." />  </div>
            <div className="col-4 mt-3  mb-2">     <img src={MMA} className="d-block w-100 img-fluid  col-4 mt-3  mb-2 " alt="..." />   <img src={Yoga} className="d-block w-100 img-fluid col-4 mt-3  mb-2 " alt="..." />  </div>
            <div className="col-2 mt-3 mb-2">  </div>
        </div>

        {/* en esta parte creamos las cartas para traer recrusos de la API */}
        <div class="row">
            {articles.map((article) => {
                return (
                    <div class="col-3 container-fluid d-flex justify-content-center">
                        <div class="card h-100 img-fluid">
                            <img src={article.img ? article.img : placeholderImg                           
                        } class="card-img-center" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-align-center"> {article.title} </h5>
                                <p class="card-text text-align-center"> <h3> ${article.price} </h3> </p>
                            </div>
                            <div class="card-footer container-fluid d-flex justify-content-center">
                                <button type="button" class="btn btn-primary btn-lg mx-auto ">Large button</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>


    </div>
};

export default Main;