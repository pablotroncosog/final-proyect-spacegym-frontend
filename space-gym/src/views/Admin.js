import React, { useState } from "react";
import '../styles/Admin.css';


export function Admin() {

    const [inputFiles, setInputFiles] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", inputFiles[0]);
        console.log(formData.get("file"));
        fetch(
            "https://8080-4geeksacademy-htmlhello-vsscjfnzcdo.ws-us77.gitpod.io/upload_image",
            {
                method: "POST",
                body: formData,
            }
        )
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));

    };
    const handleChange = (e) => {
        setInputFiles(e.target.files);
    };





    return (

                </div>


            <div className="col-md-6">

                <button type="button" class="btn" data-bs-toggle="button">Precio</button>

                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline">
                </input>
            </div>
            <div className="col-md-6">
                <div class="my-8 mb-3">
                    <button type="button" class="btn btn-lg" data-bs-toggle="button">Descripción de producto</button>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
            <div className="col-md-6">

                <button type="button" class="btn" data-bs-toggle="button">Clase de Producto</button>

                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline">
                </input>
            </div>
            <div className="col-md-6">
                <button type="button" class="btn-editar" data-bs-toggle="button">Subir Producto</button>
                <button type="button" class="btn-editar" data-bs-toggle="button">Eliminar Producto</button>
                <button type="button" class="btn-editar" data-bs-toggle="button">Editar Producto</button>


                </div>




        </div>


        </div>



    )

}

=======



                <div className="col-md-12">
                    <div className="my-8 mb-5">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Descripcion del Producto" rows="3"></textarea>
                    </div>

                </div>





                <div className="col-md-12">
                    <div className="my-8 mb-5">

                        <select className="form-select" aria-label="Default select example">
                            <option selected>Selecciona la Categoria</option>
                            <option value="gym">Gym</option>
                            <option value="yoga">Yoga</option>
                            <option value="combate">Combate</option>
                            <option value="gimnasia">Gimnasia</option>
                        </select>

                    </div>
                </div>






                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="button">Subir Publicacion</button>
                    <button className="btn btn-primary" type="button">Eliminar Publicacion</button>
                    <button className="btn btn-primary" type="button">Editar Publicacion</button>
                </div>

            </>
            </div>
        </div>

    )

}


export default Admin;

