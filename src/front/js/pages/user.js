import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const User = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const logout = () => {
        let resp = actions.logout()
        if (resp) {
            navigate("/login")
            Swal.fire("Logging out");
        }
    }
    return (
        <nav className="navbar navbar-light bg-light">



            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">React Boilerplate</span>
                </Link>
                <div className="container">
                    <h1>Bienvenido a tu perfil {store.user.email}</h1>

                </div>
                <div className="ml-auto">
                    <button className="btn btn-primary" onClick={logout}>logout</button>
                </div>
            </div>
        </nav>
    );
};