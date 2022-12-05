import React from "react";
import '../styles/Registration.css';

const Registration = () => {
    return (
            <><h1>Registro</h1><div className="container">
        <form className="row g-3"  id="container-main">

          <div className="col-6">
            <label form="nameInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Nombre"></input>
          </div>
          <div className="col-6">
            <label form="lastnameInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Apellido"></input>
          </div>
          <div className="col-12">
            <label form="phonenumberInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Numero  de Celular o Correo electronico"></input>
          </div>
          <div className="col-12">
            <label form="phonenumberInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Repetir numero de celular o Correo electronico"></input>
          </div>
          <div className="col-12">
            <label form="passwordInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Contraseña"></input>
          </div>
          <div className="col-12">
            <label form="phonenumberInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Repetir Contraseña"></input>
          </div>
          <div className="col-4">
            <label form="comunaInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Comuna"></input>
          </div>
          <div className="col-4">
            <label form="regionInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Region"></input>
          </div>
          <div className="col-4">
            <label form="calleInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Calle y Numero"></input>
          </div>
          <div className="col-4">
            <label form="calleInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Dia"></input>
          </div>
          <div className="col-4">
            <label form="calleInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Mes"></input>
          </div>
          <div className="col-4">
            <label form="calleInput" class="form-label"></label>
            <input type="text" class="form-control" id="ninput" placeholder="Año"></input>
          </div>               
          <div className="col-3">
          <div class="form-check " >
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">
              Hombre
            </label>
          </div>
          </div>
          <div className="col-3">
          <div class="form-check " >
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">
              Mujer
            </label>
          </div>
          </div>
          <div className="col-3">
          <div class="form-check " >
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault">
              Otro
            </label>
          </div>
          </div>
          <div className="col-12">
            <label form="genero" class="form-label"></label>
            <input type="text" class="form-control" id="genero" placeholder="Identidad de Genero"></input>
          </div>
          <div className="col-4">
          <button type="button" class="btn-sm">Registrate</button>
          </div>
        </form>
      </div></>     
);
 }

export default Registration;