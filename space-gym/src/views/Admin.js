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
        <div className="container-fluid">

            <div className="row">
                <div className="col-4">
                    <button type="button" class="button-admin" data-bs-toggle="button">Precio</button>
                    <input
                        type="text"
                        /*  onChange={onChange} */
                        className="form-control mt-1"
                        placeholder="Nombre"
                        name="name"
                    />
                </div>
                <div>
                    <button type="button" class="button-admin" data-bs-toggle="button">Precio</button>
                    <input
                        type="text"
                        /*  onChange={onChange} */
                        className="form-control mt-1"
                        placeholder="Nombre"
                        name="name"
                    />
                </div>
                <div>
                    <button type="button" class="button-admin" data-bs-toggle="button">Precio</button>
                    <input
                        type="text"
                        /*  onChange={onChange} */
                        className="form-control mt-1"
                        placeholder="Nombre"
                        name="name"
                    />
                </div>



                <div className="col-4">
                    <button type="button" class="btn-lg button-admin" data-bs-toggle="button">Imagen de referencia</button>
                    <input
                        type="text"
                        /*  onChange={onChange} */
                        className="form-control mt-1"
                        placeholder="Nombre"
                        name="name"
                    />

                    <button type="button" class="btn-lg button-admin" data-bs-toggle="button">Descripción de producto</button>
                    <input
                        type="text"
                        /*  onChange={onChange} */
                        className="form-control mt-1"
                        placeholder="Nombre"
                        name="name"
                    />

                </div>
                <div className="col-4">
                    <button type="button" class="btn-lg button-admin" data-bs-toggle="button">Subir Producto</button>
                </div>
            </div>


        </div>



    )

}


export default Admin;

