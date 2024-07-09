import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const { email, setEmail} = useState("");
    const { password, setPassword} = useState("")

    const handleClick = () => {
        const opts = {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
            })
        }
        fetch ("https://vigilant-space-sniffle-5gqg6xj9xqgg345x9-3001.app.github.dev/api/token", opts)
            .then(resp => {
                if(resp.status === 200) return resp.json();
                else alert("There has been a mistake");
            })
            .then()
            .catch(error =>{
                console.error("There was an error", error);
            })
    }

    return (
        <div className="form-box"> {/* Cambiado class a className */}
            <form className="form"> {/* Cambiado class a className */}
                <span className="title">Sign up</span> {/* Cambiado class a className */}
                <span className="subtitle">Create a free account with your email.</span> {/* Cambiado class a className */}
                <div className="form-container"> {/* Cambiado class a className */}
                    
                    <input type="email" className="input" placeholder="Email" value="email" onChange={(e) => setEmail(e.target.value)} /> {/* Añadido cierre de etiqueta */}
                    <input type="password" className="input" placeholder="Password" value="password" onChange={(e) => setPassword(e.target.value)}/> {/* Añadido cierre de etiqueta */}
                    <button onClick={handleClick}>Login</button>
                </div>
                <button>Sign up</button>
            </form>
            <div className="form-section"> {/* Cambiado class a className */}
                <p>Have an account? <a href="">Log in</a> </p>
            </div>
        </div>
    );
};
