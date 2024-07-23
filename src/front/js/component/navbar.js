import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const { actions } = useContext(Context)
    const navigate = useNavigate()
    const logout = () => {
        let resp = actions.logout()
        if (resp) {
            navigate("/login")
        }
    }
    return (

        <div className="container"> {/* Cambiado class a className */}
            <nav className="navbar navbar-light bg-light">
                <div className=""> {/* Logotipo de la barra de navegación */}
                    <Link to="/"> {/* Enlace al inicio de la aplicación */}
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </div>

            </nav>
        </div>
    );
};