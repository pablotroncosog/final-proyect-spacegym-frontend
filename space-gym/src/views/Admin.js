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
                <div className="col-12 text-center mt-5  mb-3"> <div className="container-fluid"> <h1> Vender un producto </h1>  </div>   </div>
                <div className="col-4">
                    <div className="card mt-5 mb-3 m-auto" style={{ height: "80%", width: "450px" }}>
                        <form onSubmit={handleSubmit}>
                            <label className="mb-5" for="avatar">Imagen de referencia:</label>
                            <input
                                type="file"
                                id="avatar"
                                name="avatar"
                                onChange={handleChange}
                                accept="image/png, image/jpeg"></input>
                            <button className="button-admin mt-5" type="submit">SUBIR</button>
                        </form>
                    </div>
                </div>

                <div className="col-4 mt-5  text-center">
                    <div class="card">
                        <div class="card-body">
                            <button type="button" className="button-admin mx-auto mb-2" data-bs-toggle="button">Nombre del producto</button>
                            <input
                                type="text"
                                /*  onChange={onChange} */
                                className="form-control mt-1 mb-4"
                                placeholder="Nombre"
                                name="name"
                            />
                            <button type="button" class="button-admin mb-2" data-bs-toggle="button">Precio</button>
                            <input
                                type="text"
                                /*  onChange={onChange} */
                                className="form-control mt-1 mb-4"
                                placeholder="¿Cuanto cuesta tu producto?"
                                name="name"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-4 mt-5 text-center">
                    <div class="card">
                        <div class="card-body">
                            <button type="button" class="button-admin mb-2" data-bs-toggle="button">Descripción de producto</button>
                            <input
                                type="text"
                                /*  onChange={onChange} */
                                className="form-control  mt-1 mb-4"
                                placeholder="¿Qué quieres vender?"
                                name="name"
                            />
                            <select className="form-select mt-5" aria-label="Default select example">
                                <option selected>Selecciona la Categoria</option>
                                <option value="gym">Gym</option>
                                <option value="yoga">Yoga</option>
                                <option value="combate">Combate</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-5 text-center ">
                <button type="button" class="button-admin" data-bs-toggle="button">Subir Producto</button>
            </div>
        </div >
    )
}


export default Admin;

