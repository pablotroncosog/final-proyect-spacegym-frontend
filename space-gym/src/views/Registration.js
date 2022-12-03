import React, { useContext , useEffect, useState} from "react";
import '../styles/Registration.css';
import { Context} from  "../store/Context";


const Registration = () => {
  const {store,actions }=useContext(Context)

  const [info, setInfo] = useState ()

  const [ checked, setChecked ] = useState ()
 

  const onChange= (e) => {setInfo({...info,[e.target.name]:e.target.value})}

  const submitRegistration= (ev) => {
   
      ev.preventDefault();
    
     actions.postRegistration(info)
    
  }

  
  console.log("probando info" ,info);
  

    return (
            <><h1>Registro</h1><div className="container">
        <form onSubmit= { submitRegistration } className="row g-3 ">
       

          <div className="col-6">
            <label form="nameInput" class="form-label"></label>
            <input onChange={ onChange } type="text" class="form-control" id="ninput" placeholder="Nombre" name="name"></input>
          </div>
          <div className="col-6">
            <label form="lastnameInput" class="form-label"></label>
            <input onChange={ onChange }type="text" class="form-control" id="ninput" placeholder="Apellido" name="lastname"></input>
          </div>
          <div className="col-12">
            <label form="phonenumberInput" class="form-label"></label>
            <input onChange={ onChange }type="text" class="form-control" id="ninput" placeholder="Correo electronico" name="email"></input>
          </div>
       
          <div className="col-12">
            <label form="passwordInput" class="form-label"></label>
            <input onChange={ onChange }type="text" class="form-control" id="ninput" placeholder="Contraseña" name="password"></input>
          </div>
          <div className="col-4">
            <label form="comunaInput" class="form-label"></label>
            <input onChange={ onChange }type="text" class="form-control" id="ninput" placeholder="Comuna" name="province"></input>
          </div>
          <div className="col-4">
            <label form="regionInput" class="form-label"></label>
            <input onChange={ onChange }type="text" class="form-control" id="ninput" placeholder="Region" name="state" ></input>
          </div>
          <div className="col-4">
            <label form="calleInput" class="form-label"></label>
            <input onChange={ onChange }type="text" class="form-control" id="ninput" placeholder="Calle y Numero" name="street"></input>
          </div>
          <div className="col-4">
            <label form="calleInput" class="form-label"></label>
            <input onChange={ onChange } type="text" class="form-control" id="ninput" placeholder="Dia" name="day"></input>
          </div>
          <div className="col-4">
            <label form="calleInput" class="form-label"></label>
            <input  onChange={ onChange }type="text" class="form-control" id="ninput" placeholder="Mes" name="month"></input>
          </div>
          <div className="col-4">
            <label form="calleInput" class="form-label"></label>
            <input onChange={ onChange }type="text" class="form-control" id="ninput" placeholder="Año" name="year"></input>
          </div>               
          <div className="col-3">
          <div class="form-check " onClick={()=>{setChecked("men") 
           setInfo({gender:checked})}} >
            <input  checked = {checked==="men"} class="form-check-input" type="checkbox" value={checked} id="flexCheckDefault" name="men" ></input>
            <label class="form-check-label" for="flexCheckDefault">
              Hombre
            </label>
          </div>
          </div>
          <div className="col-3">
          <div  class="form-check" onClick={()=>{setChecked("women") 
          setInfo({gender:checked})}}>
            <input checked = {checked==="women"} class="form-check-input" type="checkbox" value={checked}id="flexCheckDefault" name="women"></input>
            <label class="form-check-label" for="flexCheckDefault">
              Mujer
            </label>
          </div>
          </div>
          <div className="col-3">
          <div  class="form-check" onClick={()=>{setChecked("other") 
          setInfo({gender:checked})}}> 
            <input  checked = {checked==="other"} class="form-check-input" type="checkbox" value={checked} id="flexCheckDefault" name="other"></input>
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