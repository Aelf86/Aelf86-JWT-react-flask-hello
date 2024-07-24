import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    // const token = sessionStorage.getItem("token");

    const handleClick = async (e) => {
        e.preventDefault()
        console.log(email, password)
        let resp = await actions.login(email, password)
        if (resp) {
            navigate("/user")
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "User not registered!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    }

    return (
        <div className="container"> {/* Cambiado class a className */}
           
            <h1>Login page</h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="Enter your email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" placeholder="Enter your password" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>


                <button type="button" class="btn btn-primary" onClick={(e) => handleClick(e)}>Login</button>

            </form>
        </div>
    );
};
