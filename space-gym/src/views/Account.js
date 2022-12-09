import React from "react";
import '../styles/Account.css';


const Account = () => {
    return (
        <div className="container-fluid">

            <table class="table table-borderless mt-4">
                <div className="row" id="container-main">
                    <div className="col-4 d-flex justify-content-center">
                        <div className="mt-5">  <button className="button-edit"> Editar </button>  </div>
                    </div>
                    <div className="col-4 justify-content-between">
                        <div className="container-profile mb-4">  <h4>Nombre</h4> </div>
                        <div className="container-profile mb-4">  <h4>Correo</h4> </div>
                    </div>
                    <div className="col-4 justify-content-between">
                        <div> Nombre <input type="description" className="form-control" ></input> </div>
                        <div> Correo <input type="description" className="form-control" ></input> </div>
                    </div>
                </div>
            </table>



            <div className="container-fluid justify-content-center">
                <div className="row" id="container-main-2">
                    <div className="col-12 d-flex justify-content-around">
                        <div><h4>Número de orden </h4><input type="description" className="form-control" ></input></div>
                        <div><h4>Fecha de orden </h4><input type="description" className="form-control" ></input></div>
                        <div><h4>Precio total</h4><input type="description" className="form-control" ></input></div>
                        <div><h4>Estatus </h4><input type="description" className="form-control" ></input></div>
                        <div><button className="button-details"> detalles </button> </div>
                    </div>
                </div>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto mb-1">
                <button class="button-history" type="button">Ver todas las ordenes</button>
           
            </div>

        </div>


    )
}

export default Account;