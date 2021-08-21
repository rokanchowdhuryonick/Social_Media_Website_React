import { Link } from "react-router-dom";
import Header from "./Header";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";

function CountryList() {
    const [countryList, setCountryData] = useState([]);
    const history = useHistory();
    useEffect( async()=>{
        // if(localStorage.getItem("userData")){
        //     history.push("/login")
        // }

        let result = await fetch("http://127.0.0.1:8000/api/countryList/");
        result = await result.json();
        setCountryData(result.data.countryList);
    }, []);
async function deleteCountry(id) {
    
}
    return (
        <div>
            <Header/>
            <div className="container-fluid">
            <h2>Country List</h2>
            <br/>
            <Link to="addCountry" className="btn btn-primary">Add Country</Link>
            <br/><hr/>
            <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Country List</h3>
            </div>
            <div className="panel-body">
              <table className="table" id="adminList">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
   {    
   countryList.map((item)=>
   <tr>
        <td> {item.country_id}</td>
        <td>{item.country_name}</td>
        <td><button onClick={()=>deleteCountry(item.country_id)} className="btn btn-warning"><i className="fa fa-trash"></i>Delete</button></td>
    </tr>
   )
                  
                  }
                </tbody>
              </table>
            </div>
        </div>
        </div>
        </div>
    )
}

export default CountryList;