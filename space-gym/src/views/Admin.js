import React from "react";
import '../styles/Admin.css';

const Admin = () => {
    return (


        <div class="container">
            <h1 >Administracion</h1>
            <form class="row g-3 ">
                <div class="col-4">
                    <label for="productInput" class="form-label">Nombre del Producto</label>
                    <input type="product" class="form-control" text-size="100" id="productInput"></input>
                </div>

                <div class="col-6">
                    <label for="imageInput" class="form-label">Imagen de Referencia</label>
                    <input class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0" type Submit="image" class="form-control" id="imageInput" ></input>
                </div>

                <div class="col-4">
                    <label for="priceInput" class="form-label">Precio</label>
                    <input type="price" class="form-control" id="priceInput" ></input>
                </div>

                <div class="col-6">
                    <label for="descriptionInput" class="form-label">Descripcion del Producto</label>
                    <input class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0" type="description" class="form-control" id="descriptionInput" ></input>
                </div>

                <div class="col-4">
                    <label for="productclassInput" class="form-label">Clase del Producto</label>
                    <input type="product" class="form-control" id="productInput" ></input>
                </div>
                <div>
                    <button type="button" className="btn-sm">Subir Producto</button>
                </div>




                <div class="row g-3">
                    <div class="col-2">
                        <label for="productnameInput" class="form-label">Nombre del Producto</label>
                        <input type="productnameclass" class="form-control" id="productnameInput" ></input>
                    </div>
                    <div class="col-2">
                        <label for="productclassInput" class="form-label">Precio</label>
                        <input type="productclass" class="form-control" id="productclassInput" ></input>
                    </div>
                    <div class="col-2">
                        <label for="productclassInput" class="form-label">Clase</label>
                        <input type="productclass" class="form-control" id="productclassInput" ></input>
                    </div>
                    <div class="col-2">
                        <label for="productclassInput" class="form-label">Descripcion</label>
                        <input type="productclass" class="form-control" id="productclassInput" ></input>
                    </div>

                    <div class="col-2">
                    <input type="product" class="form-control" id="productInput" ></input>
                    </div>



                    <div>
                        <div class="row g-3">
                            <div class="col-2">
                                <button class="button" type="button" >Editar Producto</button>
                            </div>
                        </div>
                    </div>


                    <div class="row g-3">
                        <div class="col-2">
                            <label for="productnameInput" class="form-label">Nombre</label>
                            <input type="productnameclass" class="form-control" id="productnameInput" ></input>
                        </div>
                        <div class="col-2">
                            <label for="productclassInput" class="form-label">Celular</label>
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                        </div>
                        <div class="col-2">
                            <label for="productclassInput" class="form-label">Correo</label>
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                        </div>
                        <div class="col-2">
                            <label for="productclassInput" class="form-label">Region</label>
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                        </div>
                        <div class="col-2">
                            <label for="productclassInput" class="form-label">Calle</label>
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                        </div>

                    </div>


                    <div class="row g-3">
                        <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <button class="button" type="button" >Editar</button>
                            </div>
                    </div>



                    <div class="row g-3">
                        <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                    </div>


                    <div class="row g-3">
                        <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <input type="productclass" class="form-control" id="productclassInput" ></input>
                            </div>
                            <div class="col-2">
                            <button class="button" type="button" >Eliminar</button>
                            </div>
                    </div>

                </div>

            </form >
        </div >






    )
};

export default Admin; 
