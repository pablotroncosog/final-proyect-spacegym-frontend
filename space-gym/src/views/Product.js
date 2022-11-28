import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import placeholderImg from "../images/placeholder-image.png"
import Offerts from "./Offerts";


export function Product() {

    const { id } = useParams(); 
    const [Product, SetProduct] = useState({})

    useEffect(() => {
        getProductById(id)
    }, [])

    function getProductById(id) {
        fetch("https://8080-pablotronco-finalproyec-r5i5o0okka4.ws-us77.gitpod.io/product/" + id)
            .then((response) => response.json())
            .then((data) => SetProduct(data.result))
            .catch((error) => console.log(error));
    }

    return <div className="col-12">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src= {placeholderImg} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8"> 
                    <div className="card-body">
                        <h5 className="card-title"> {Product.properties?.name}</h5>
                        <p className="card-text">{Product.description}</p>
                        <p className="card-text"><small className="text-muted">  {Product.properties?.price}</small></p>
                    </div>
                </div>
            </div>
        </div>
        <Offerts/>
    </div>
};

export default Product