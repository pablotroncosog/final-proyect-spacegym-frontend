import React, { useContext, useEffect, useState } from "react";
import '../styles/Registration.css';
import { Context } from "../store/Context";


const Registration = () => {
  const { store, actions } = useContext(Context)

  const [info, setInfo] = useState()

  const [checked, setChecked] = useState()


  const onChange = (e) => { setInfo({ ...info, [e.target.name]: e.target.value }) }

  const submitRegistration = (ev) => {

    ev.preventDefault();

    actions.postRegistration(info)

  }


  console.log("probando info", info);


  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-12">


          <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={submitRegistration}>
              <div className="Auth-form-content">
                <div className="form-group mt-3">
                  <input
                    type="text"
                    onChange={onChange}
                    className="form-control mt-1"
                    placeholder="Nombre"
                    name="name"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="email"
                    onChange={onChange}
                    className="form-control mt-1"
                    placeholder="Correo"
                    name="email"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    onChange={onChange}
                    type="password"
                    className="form-control mt-1"
                    placeholder="Contraseña"
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    onChange={onChange}
                    type="password"
                    className="form-control mt-1"
                    placeholder="Repetir contraseña"
                  />
                </div>


                <div className="d-grid gap-2 mt-3">

                  <button type="submit" className="btn">
                    Registrate
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>



  );
}

export default Registration;