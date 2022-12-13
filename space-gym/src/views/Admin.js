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
            "https://8080-4geeksacademy-htmlhello-vsscjfnzcdo.ws-us78.gitpod.io/upload_image",
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
                <div className="col-12 text-center"> <div className="container-fluid"> <h1> Vender un producto </h1>  </div>   </div>
                <div className="col-4  text-center">
                    <button type="button" className="button-admin mx-auto" data-bs-toggle="button">Nombre del producto</button>
                    <input
                        type="text"
                        /*  onChange={onChange} */
                        className="form-control mt-1 mb-4"
                        placeholder="Nombre"
                        name="name"
                    />
                    <button type="button" class="button-admin" data-bs-toggle="button">Precio</button>
                    <input
                        type="text"
                        /*  onChange={onChange} */
                        className="form-control mt-1 mb-4"
                        placeholder="¿Cuanto cuesta tu producto?"
                        name="name"
                    />
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Selecciona la Categoria</option>
                        <option value="gym">Gym</option>
                        <option value="yoga">Yoga</option>
                        <option value="combate">Combate</option>
                    </select>
                </div>
                <div className="col-4 text-center ">
                    <div className="card mb-3 m-auto" style={{ maxWidth: "540px" }}>
                        <form onSubmit={handleSubmit}>
                            <label for="avatar">Imagen de referencia:</label>
                            <input
                                type="file"
                                id="avatar"
                                name="avatar"
                                onChange={handleChange}
                                accept="image/png, image/jpeg"></input>
                            <button className="btn btn-primary" type="submit">SUBIR IMAGEN</button>
                        </form>
                    </div>
                </div>
                <button type="button" class="btn-lg button-admin" data-bs-toggle="button">Descripción de producto</button>
                <input
                    type="text"
                    /*  onChange={onChange} */
                    className="form-control mt-1"
                    placeholder="¿Qué quieres vender?"
                    name="name"
                />
            </div>
            <div className="col-4 text-center d-flex">
                <button type="button" class="btn-lg button-admin" data-bs-toggle="button">Subir Producto</button>
            </div>
        </div>
    )
}


export default Admin;

