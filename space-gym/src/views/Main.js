import React from "react";
import "../styles/App.css"
import { useState } from "react";

import bicep from "../images/bicep.jpg";
import deadlift from "../images/deadlift.jpg"
import remo from "../images/remo.jpg"
import aros from "../images/Aros.jpg"
import MMA from "../images/MMA.jpg"
import Yoga from "../images/Yoga.jpg"

export function Main() {
    const [inputFiles, setInputFiles] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file",inputFiles[0]);
        console.log(formData.get("file"));
        fetch(
            "https://8080-4geeksacademy-htmlhello-vsscjfnzcdo.ws-us77.gitpod.io/upload_image",
            {
                method: "POST",
                body: formData,               
            }
        )
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

    };
    const handleChange = (e) => {
        setInputFiles(e.target.files);
    };




    return (
    
    <><div className="g-4 col-4">
            <form onSubmit={handleSubmit}>
                <label for="kettlebell">Imagen de referencia:</label>
                <input
                    type="file"
                    id="barra"
                    name="barra"
                    onChange={handleChange}
                    accept="image/png, image/jpeg"></input>
                <button className="btn btn-primary" type="submit">Upload</button>
            </form>
        </div><div className="container-fluid">
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
            </div></> 
    )
};

export default Main;