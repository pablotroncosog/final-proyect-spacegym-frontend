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
        <div className="container">
            <div className="my-8 mb-5">
            <><h1>Publicar Aviso</h1><div className="container"></div>

                


                    <div className="col-12">
                        <label form="nameInput" class="form-label"></label>
                        <input type="text" class="form-control" id="ninput" placeholder="Nombre del Producto" name="name"></input>
                    </div>

                    <div className="col-12">
                        <label form="nameInput" class="form-label"></label>
                        <input type="text" class="form-control" id="ninput" placeholder="Precio" name="street"></input>
                    </div>
              

                <div className="col-md-12">
                    <div className="card mb-5 m-auto" >
                        <form onSubmit={handleSubmit} className="row" id="container-main-2">
                            <label for="kettlebell">Imagen de referencia:</label>
                            <input
                                type="file"
                                id="barra"
                                name="barra"
                                onChange={handleChange}
                                accept="image/png, image/jpeg"></input>
                            <button className="btn btn primary" type="submit">Subir Imagen</button>
                        </form>
                    </div>
                </div>




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

