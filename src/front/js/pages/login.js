import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const { email, setEmail} = useState("");
    const { password, setPassword} = useState("")

    return (
        <div className="form-box"> {/* Cambiado class a className */}
            <form className="form"> {/* Cambiado class a className */}
                <span className="title">Sign up</span> {/* Cambiado class a className */}
                <span className="subtitle">Create a free account with your email.</span> {/* Cambiado class a className */}
                <div className="form-container"> {/* Cambiado class a className */}
                    <input type="text" className="input" placeholder="Full Name" /> {/* Añadido cierre de etiqueta */}
                    <input type="email" className="input" placeholder="Email" /> {/* Añadido cierre de etiqueta */}
                    <input type="password" className="input" placeholder="Password" /> {/* Añadido cierre de etiqueta */}
                </div>
                <button>Sign up</button>
            </form>
            <div className="form-section"> {/* Cambiado class a className */}
                <p>Have an account? <a href="">Log in</a> </p>
            </div>
        </div>
    );
};
