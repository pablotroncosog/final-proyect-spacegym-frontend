import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { Context } from "../store/Context"
import placeholderImg from "../images/placeholder-image.png"


export function Offerts() {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCharacters()
    }, [])
    
   

    return <div className="container-fluid">

        <div className="row">
            {store.products.map((products) => { 
                return (
                    <div className="col-3 container-fluid d-flex justify-content-center">
                        <div className= "card h-100 img-fluid">
                            <img src= {placeholderImg} className="card-img-center" alt="..." />
                            <div className="card-body">
                            <Link to={"/" + products.id} > <h5 className="card-title text-align-center"> {products.name} </h5>  </Link>
                                <p className="card-text text-align-center"> <h3> ${products.price} </h3> </p>
                            </div>
                            <div className="card-footer container-fluid d-flex justify-content-center">
                                <button type="button" className="btn btn-primary btn-lg mx-auto ">Agregar al carrito</button>
                            </div>
                        </div>
                    </div> 
                )
            })}
        </div>

    </div>



};

export default Offerts;