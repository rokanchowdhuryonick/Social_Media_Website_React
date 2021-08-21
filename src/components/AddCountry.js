import Header from "./Header";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";

const AddCountry = ()=>{

    const [country_name, setCountry] = useState("");
    const history = useHistory();

    async function countryAdd() {
        let item = {country_name};
        let result = await fetch("http://127.0.0.1:8000/api/addCountry",{
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
        }else{
            console.log(result);
            history.push("/countryList");
        }
    }

    return (
        <div>
            <Header/>
            <div className="container-fluid">
                <h2>Add Country</h2>
                
                <br/>
                <Link to="countryList" className="btn btn-info">Country List</Link>
                <br/><hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Country Information</h3>
                    </div>
                    <div className="panel-body">
                        <div id="message"></div>
                        <div className="form-group">
                            <label for="email">Country Name</label>
                            <input type="text"onChange={(e)=>setCountry(e.target.value)} className="form-control" value={country_name} name="country_name" id="email" />
                        </div>
                        
                        <input type="submit" onClick={countryAdd} value="Add Country" className="btn btn-primary" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddCountry;