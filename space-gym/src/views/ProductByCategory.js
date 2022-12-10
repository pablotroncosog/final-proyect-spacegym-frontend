import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import placeholderImg from "../images/placeholder-image.png"
import { Context } from "../store/Context";



export function ProductByCategory() {

    const { id } = useParams(); 
    const [productsByCategory, setProductsByCategory] = useState([])

    useEffect(() => {
        console.log("useEffect")
        getProductByCategory(id)
    }, [])

    function getProductByCategory(id) {
        fetch("https://8080-pablotronco-finalproyec-pektzvt3obn.ws-us78.gitpod.io/product/category/" + id)
            .then((response) => response.json())
            .then((data) => 

            {console.log(data);
                setProductsByCategory(data)}
            )
            .catch((error) => console.log(error));
    }



    return <div className="col-12">

        {productsByCategory && productsByCategory.map((p,index)=>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src= {placeholderImg} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8"> 
                    <div className="card-body">
                        <h5 className="card-title"> {p.name}</h5>
                        <p className="card-text">{p.description}</p>
                        <p className="card-text"><small className="text-muted">  {p.price}</small></p>
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
};

export default ProductByCategory