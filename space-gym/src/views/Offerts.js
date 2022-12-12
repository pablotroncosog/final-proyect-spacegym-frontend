import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { Context } from "../store/Context"
import placeholderImg from "../images/placeholder-image.png"


export function Offerts() {

    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getProducts()
    }, [])



    return <div className="container-fluid">

        <div className="row">
            {store.products.map((products) => {
                return (
                    <div>
                         {products.name}
                       {products.price} 
                    </div>
                )
            })}
        </div>

    </div>



};

export default Offerts;