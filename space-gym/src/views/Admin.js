import React, { useState } from "react";
import '../styles/Admin.css';


const Admin = () => {
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
        <><p className="h1 text-center">Administración</p><div className="row g-3 align-items-center">
            <div className="col-md-6">
          
                    <button type="button" class="btn" data-bs-toggle="button">Nombre de Producto</button>
              
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline">
                </input>
            </div>
       
            <div className="col-md-6">
                <div className="card mb-3 m-auto" >
                    <form onSubmit={handleSubmit} className="row">
                        <label for="kettlebell">Imagen de referencia:</label>
                        <input
                            type="file"
                            id="barra"
                            name="barra"
                            onChange={handleChange}
                            accept="image/png, image/jpeg"></input>
                        <button className="btn" type="submit">Upload</button>
                    </form>
                </div>
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
       <div className="col-lg-12">
       <button type="button" class="btn-editar" data-bs-toggle="button">Usuarios</button>
       </div>

       <div className="row">
            <div className="g-4 col-2">
                <button type="button" class="btn" data-bs-toggle="button">Nombre del producto</button>
            </div>

            <div className="g-4 col-2">
                <button type="button" class="btn" data-bs-toggle="button">Precio</button>
            </div>

            <div className="g-4 col-2">
                <button type="button" class="btn" data-bs-toggle="button">Clase</button>
            </div>

            <div className="g-4 col-3">
                <button type="button" class="btn" data-bs-toggle="button">Descripción</button>
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
        </div>
        </>


   )
                
    }

 export default Admin;
            
