import React from "react";

const Admin = () => {
    return (
        <div class="container">
           <h1>Administracion</h1>
            <form class="row">
                <div class="col-4">
                    <label for="productInput" class="form-label">Nombre del Producto</label>
                    <input type="product" class="form-control" id="productInput"></input>
                </div>

                <div class="col-8">
                    <label for="imageInput" class="form-label">Imagen de Referencia</label>
                    <input class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0" type Submit="image" class="form-control" id="imageInput" ></input>
                </div>

                <div class="col-4">
                    <label for="priceInput" class="form-label">Precio</label>
                    <input type="price" class="form-control" id="priceInput" ></input>
                </div>

                <div class="col-8">
                    <label for="descriptionInput" class="form-label">Descripcion del Producto</label>
                    <input class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0" type="description" class="form-control" id="descriptionInput" ></input>
                </div>

                <div class="col-4">
                    <label for="productclassInput" class="form-label">Clase del Producto</label>
                    <input type="productclass" class="form-control" id="productclassInput" ></input>
                </div>

                

            </form >
        </div >
    )
};

export default Admin; 
