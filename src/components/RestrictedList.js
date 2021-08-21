import { Link } from "react-router-dom";
import Header from "./Header";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";

function RestrictedList() {
    const [wordList, setRestrictedData] = useState([]);
    const history = useHistory();
    useEffect( async()=>{
        // if(localStorage.getItem("userData")){
        //     history.push("/login")
        // }

        let result = await fetch("http://127.0.0.1:8000/api/restictedWordList/");
        result = await result.json();
        setRestrictedData(result.data);
    }, []);

    return (
        <div>
            <Header/>
            <div className="container-fluid">
            <h2>Restricted Word List</h2>
            <br/>
            <Link to="addRestricted" className="btn btn-primary">Add Restricted Word</Link>
            <br/><hr/>
            <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Restricted Word List</h3>
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
   wordList.map((item)=>
   <tr>
        <td> {item.id}</td>
        <td>{item.message}</td>
        <td><a href="" className="btn btn-warning"><i className="fa fa-trash"></i>Delete</a></td>
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

export default RestrictedList;