import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const{actions}=useContext(Context)
    const navigate=useNavigate()
    const logout=() => {
        let resp= actions.logout()
        if (resp){
            navigate("/login")
           }
    }
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">React Boilerplate</span>
                </Link>
                <div className="ml-auto">
                        <button className="btn btn-primary" onClick={logout}>logout</button>
                </div>
            </div>
        </nav>
    );
};