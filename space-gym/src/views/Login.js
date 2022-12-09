
import React, { useContext, useEffect } from "react";
import { Context } from "../store/Context";
import '../styles/Login.css';


const Login = () => {

  const { store, actions } = useContext(Context)

  useEffect(() => {

    actions.postLogin(
      {
        email: "francisca@gmail.com",
        password: "123456"
      },)

  }, []);
  console.log(store.dataUser);
 
 
 /*  const [infoLogin, setInfoLogin] = useState();

  const onChange= (e) => {setInfoLogin({...infoLogin,[e.target.name]:e.target.value})}

  const submitLogin= (ev) => {
   
    ev.preventDefault();
  
   actions.postLogin(infoLogin)
  
}; */

 
  return (
    <div className="container-margin">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">

            <div className="form-group mt-3">
              <label>Dirección de correo</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="button-history">
                Iniciar sesión
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              ¿Olvidaste tu  <a href="/">contraseña?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;