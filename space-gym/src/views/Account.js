import React from "react";
import '../styles/Account.css';
import { Context } from "../store/Context"
import { useContext, useEffect } from "react";


const Account = () => {

    const { store, actions } = useContext(Context);
    /*  useEffect(() => {
         actions.getUsers()
     }, [])
  */


    return (
        <div className="container-fluid">
            <div class="card text-center">
                <div class="card-header">
                    <p> Te has conectado exitosamente</p>
                </div>
                <div class="card-body">
                    <h5 class="card-title"> <strong>  Bienvenido: </strong> </h5>
                    <p class="card-text">Recuerda que recibirás ofertas a través de tu correo:</p>
                </div>
                <div class="card-footer text-muted">
                   Artículos vendidos 0
                </div>
            </div>

            <div className="container-fluid justify-content-center mt-5">
                <div class="d-grid gap-2 col-6 mx-auto mb-1">
                    <button class="button-history" type="button">Tus compras</button>

                </div>
                <div className="row" id="container-main-2">
                    <div className="col-12 d-flex justify-content-around">
                        <div><h4>Número de orden </h4><input type="description" className="form-control" ></input></div>
                        <div><h4>Fecha de orden </h4><input type="description" className="form-control" ></input></div>
                        <div><h4>Precio total</h4><input type="description" className="form-control" ></input></div>
                        <div><h4>Estatus </h4><input type="description" className="form-control" ></input></div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 mt-5"></div>

            </div>
            <div className="container-fluid justify-content-center">
                <div class="d-grid gap-2 col-6 mx-auto mb-1">
                    <button class="button-history" type="button">Tus ventas</button>

                </div>
                <div className="row" id="container-main-2">
                    <div className="col-12 d-flex justify-content-around">
                        <div><h4>Nombre del producto </h4><input type="description" className="form-control" ></input></div>
                        <div><h4>Fecha</h4><input type="description" className="form-control" ></input></div>
                        <div><h4>Precio </h4><input type="description" className="form-control" ></input></div>
                        <div><h4>Estatus </h4><input type="description" className="form-control" ></input></div>
                    </div>
                </div>
            </div>



        </div>


    )
}

export default Account;