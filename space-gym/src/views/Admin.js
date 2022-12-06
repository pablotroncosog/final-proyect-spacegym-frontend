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
        <><h1>Publicar Aviso</h1><div className="container"></div>

      <div className="row g-3 align-items-center" id="container-main">


            <div className="col-12">
            <label form="nameInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Nombre del Producto" name="name"></input>
          </div>

          <div className="col-12">
            <label form="nameInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Precio" name="street"></input>
          </div>
          
        
              
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline">
                </input>
            </div>
       
            <div className="col-md-6">
                <div className="card mb-3 m-auto" >
                    <form onSubmit={handleSubmit} className="row" id="container-main-2">
                        <label for="kettlebell">Imagen de referencia:</label>
                        <input
                            type="file"
                            id="barra"
                            name="barra"
                            onChange={handleChange}
                            accept="image/png, image/jpeg"></input>
                        <button className="btn" type="submit">Subir Imagen</button>
                    </form>
                </div>
            </div>

            <div className="col-md-6">
               
         
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
 
        </>


   )
                
    }

 export default Admin;
            
