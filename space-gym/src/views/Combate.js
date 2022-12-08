import React from "react";
import '../styles/Combate.css';






import aros from "../images/Aros.jpg"



const Combate = () => {

    return (


        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                    <img src={aros} className=" img-thumbnail" alt="..." />
                        <div class="card-body">
                            <h5 className="card-title">Saco Boxeo Reciclado de 150cm.</h5>
                            <p className="card-text">$48.960</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <a href="" className="btn btn-primary">Descripcion</a>
                                </div>









                                <a href="" className="btn btn-success">Agregar</a>
                            </div>
                        </div>
                    </div>





                </div>

            </div>
        </div>




    );
}


export default Combate;


