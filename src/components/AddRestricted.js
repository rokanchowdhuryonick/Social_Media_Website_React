import Header from "./Header";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";

const AddRestricted = ()=>{

    const [message, setWord] = useState("");
    const history = useHistory();

    async function bannedAdd() {
        let item = {message};
        let result = await fetch("http://127.0.0.1:8000/api/addRestictedWord",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        let alertMsg;
        console.log(result);
        if(result.error && result.error.length>0){
            alertMsg = '<div class="alert alert-danger" role="alert"><strong> <span className="glyphicon glyphicon-ok-sign"></span> </strong>'+result.error+'</div>';
            document.getElementById("message").innerHTML = alertMsg;
        }else{
            console.log(result);
            history.push("/restrictedWordList");
        }
    }

    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <h2>Add Country</h2>
                
                <br/>
                <Link to="restrictedWordList" className="btn btn-info">Restricted Word List</Link>
                <br/><hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Restrcited Word</h3>
                    </div>
                    <div className="panel-body">
                        <div id="message"></div>
                        <div className="form-group">
                            <label for="email">Restricted Word</label>
                            <input type="text"onChange={(e)=>setWord(e.target.value)} className="form-control" value={message} name="message" id="message" />
                        </div>
                        
                        <input type="submit" onClick={bannedAdd} value="Add Restricted Word" className="btn btn-primary" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddRestricted;