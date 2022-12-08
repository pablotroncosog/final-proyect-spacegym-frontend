import React, { useContext , useEffect, useState} from "react";
import { Context} from  "../store/Context";
import '../styles/Login.css';


const Login = () => {
  const {store,actions }=useContext(Context)
  const [infoLogin, setInfoLogin] = useState();

  const onChange= (e) => {setInfoLogin({...infoLogin,[e.target.name]:e.target.value})}

  const submitLogin= (ev) => {
   
    ev.preventDefault();
  
   actions.postLogin(infoLogin)
  
}


// 
// store.dataUser
// useEffect(() => {

//     actions.postLogin (
//     { email:"francisca@gmail.com",
//       password: "123456"
//     },)

//   },[]);
//   console.log(store.dataUser);

 

    return (
    <div className="Auth-form-container">
      <form  onSubmit= { submitLogin } className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div  className="form-group mt-3">
            <label>Email address</label>
            <input onChange={ onChange }
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input onChange={ onChange }
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login;