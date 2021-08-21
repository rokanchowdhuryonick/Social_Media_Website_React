//import './css/bootstrap.css';
import { Form, Button } from "react-bootstrap";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";

const Login = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    
    useEffect(()=>{
        if(localStorage.getItem("userData")){
            history.push("/dashboard")
        }
    }, [])

    async function login() {
        let item = {email, password};
        let result = await fetch("http://127.0.0.1:8000/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        let message;
        console.log(result);
        if(result.error && result.error.length>0){
            message = '<div class="alert alert-danger" role="alert"><strong> <span className="glyphicon glyphicon-ok-sign"></span> </strong>'+result.error+'</div>';
            document.getElementById("message").innerHTML = message;
        }else if(result.data){
            localStorage.setItem('userData',JSON.stringify(result.data));
            history.push("/dashboard");
        }

       // console.log(result);
        
    }

    return (
        <div>
        <div class="container-fluid">
            
            <div class="row">
    <div class="col-md-5 offset-md-6">
            <h1>Login</h1><hr/>
            <div id="message"></div>
            <div className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <input type="email" name="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Password" />
                </Form.Group>
                <button className="btn btn-primary" onClick={login} type="submit">
                    Submit
                </button>
            </div>
            </div></div>
            </div>
        </div>
    );

}

export default Login