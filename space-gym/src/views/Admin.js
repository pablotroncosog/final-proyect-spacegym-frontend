import React from "react";
import '../styles/Admin.css';

const Admin = () => {
    return (


        /*Primer segmento*/
        <div className="container text-center">

            <h1>Administracion</h1>

            <form className="row">
                <div className="g-4 col-4">
                    <label for="product" className="p-1 mb-1 bg-secondary bg-opacity-50 text-white form-label">Nombre del Producto</label>
                </div>

                <div className="g-4 col-4">
                    <label for="image" className="p-1 mb-1 bg-secondary bg-opacity-50 text-white form-label">Imagen de Referencia</label>
                </div>
            </form >


            <form className="row ">
                <div className="g-4 col-4">
                    <input type="product" className="form-control" id="product" required></input>
                </div>

                <div className="g-4 col-4">
                    <input type Submit="image" className="form-control" id="image" required></input>
                </div>
            </form >





            <div className="row">
                <div className="g-4 col-4">
                    <label for="price" className=" p-1 mb-1 bg-secondary bg-opacity-50 text-white  form-label">Precio</label>
                </div>

                <div className="g-4 col-4">
                    <label for="description" className=" p-1 mb-1 bg-secondary bg-opacity-50 text-white  form-label">Descripcion del Producto</label>
                </div>

                <div className=" g-4 col-4">
                    <button type="button" className="btn-sm">Subir Producto</button>
                </div>
            </div>



            <div className="row">
                <div className="g-4 col-4 ">
                    <input type="price" className="form-control" id="price"></input>
                </div>

                <div className="g-4 col-4">
                    <input type="description" className=" input-group-lg form-control" id="description"></input>
                </div>
            </div>



            <div className="row">
                <div className="g-4 col-4">
                    <label for="productclass" className=" p-1 mb-1 bg-secondary bg-opacity-50 text-white form-label">Clase del Producto</label>
                </div>
            </div>



            <div className="row">
                <div className="g-4 col-4">
                    <input type="productclass" className="form-control" id="productclass"></input>
                </div>
            </div>






            <div className="row">
                <div className="g-4 col-2">
                    <label for="nameproduct" className=" p-1 mb-1 bg-secondary bg-opacity-50 text-white  form-label">Nombre de Producto</label>
                </div>

                <div className="g-4 col-2">
                    <label for="price" className=" p-1 mb-1 bg-secondary bg-opacity-50 text-white  form-label">Precio</label>
                </div>

                <div className="g-4 col-2">
                    <label for="type" className=" p-1 mb-1 bg-secondary bg-opacity-50 text-white  form-label">Clase</label>
                </div>

                <div className="g-4 col-3">
                    <label for="description" className=" p-1 mb-1 bg-secondary bg-opacity-50 text-white  form-label">Descripcion</label>
                </div>

                <div className="col-3">
                    <button type="button" className="btn-sm">Eliminar Producto</button>
                </div>

            </div>




            <div className="row">
                <div className="g-4 col-2">

                    <input type="price" className="form-control" id="price"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-3">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-3">
                    <button type="button" className="btn-sm">Editar Producto</button>
                </div>
            </div>



            <div className="row">
                <div className="g-4-col-6 mx-auto">
                    <button type="button" className="btn-sm-usuario">Usuarios</button>
                </div>
            </div>




            <div className="row">
                <div className="g-4 col-2">
                    <label for="name" className="   form-label">Nombre</label>
                </div>

                <div className="g-4 col-2">
                    <label for="cellphone" className=" form-label">Celular</label>
                </div>

                <div className="g-4 col-2">
                    <label for="mail" className="  form-label">Correo</label>
                </div>

                <div className="g-4 col-2">
                    <label for="region" className="   form-label">Region</label>
                </div>

                <div className="g-4 col-2">
                    <label for="commune" className=" form-label">Comuna</label>
                </div>


                <div className="g-4 col-2">
                    <label for="street" className=" form-label">Calle</label>
                </div>
            </div>



            <div className="row">
                <div className="g-4 col-2">

                    <input type="price" className="form-control" id="price"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>
            </div>






            <div className="row">
                <div className="g-4 col-2">

                    <input type="price" className="form-control" id="price"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>
            </div>




            <div className="row">
                <div className="g-4 col-2">

                    <input type="price" className="form-control" id="price"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>

                <div className="g-4 col-2">
                    <input type="description" className="form-control" id="description"></input>
                </div>
            </div>



            <div className="row d-grid gap-2 d-md-flex justify-content-md-end">
                <div className="g-4 col-6">
                    <button type="button" className="btn-sm">Editar</button>
                </div>

                <div className="g-4 col-6">
                    <button type="button" className="btn-sm">Eliminar</button>
                </div>
            </div>


        </div>




    )
};

export default Admin; 
