import React from "react";
import "../styles/App.css"



export function Footer() {

    return <div className="container-fluid">

        <div className="col-12 text-light text-center mt-5"> </div>
        <div className="container-fluid" id="container-footer" >
            <div className="row mt-4 p-5">
                <div className="col-xs-12 col-md-6 col-lg-3  text-light">
                    <p className="h4 "> Sobre nosotros </p>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3  text-light">
                    <p className="h4 "> Política y condiciones de uso </p>

                </div>
                <div className="col-xs-12 col-md-6 col-lg-3  text-light">
                    <p className="h4 text"> Déjanos tu opinión </p>

                </div>
                <div className="col-xs-12 col-md-6 col-lg-3  text-light">
                    <p className="h4 text"> Contáctanos </p>
                </div>
                <div className="col-12 text-light text-center mt-5" id="container-footer-2">Copyright - All Rights Reserved 2022 </div>
            </div>
        </div>
    </div>


};

export default Footer;