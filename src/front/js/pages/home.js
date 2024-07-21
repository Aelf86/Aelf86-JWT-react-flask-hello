import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";


export const Home = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
       let resp=await actions.register(email, password,name,lastname)
       if (resp){
        navigate("/login")
       }else{
        alert("Registered user")
        
       }
    };

    const handleChangeLogin = (e) => {
        
       let resp= actions.register(email, password,name,lastname)
       if (resp){
        navigate("/login")
       }else{
        alert("Registered user")
        
       }
    };
    

    return (
        <div className="container"> {/* Cambiado class a className */}
            <h1>Register page</h1>
            <form>
                <div className="row">
                    <div className="col">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" class="form-control" placeholder="Enter your name" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />

                        </div>
                    </div>
                    <div className="col">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Last Name</label>
                            <input type="text" class="form-control" placeholder="Enter your last name" id="exampleInputEmail1" aria-describedby="emailHelp" value={lastname} onChange={(e) => setLastname(e.target.value)} />

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" placeholder="Enter your email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" placeholder="Enter your password" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                    </div>

                </div>



                <button type="button" class="btn btn-primary" onClick={(e) => handleClick(e)}>Submit</button>
                <button type="button" class="btn btn-primary" onClick={(e) => handleChangeLogin(e)}>To login</button>
            </form>
        </div>
    );
};