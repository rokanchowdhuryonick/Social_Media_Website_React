import { Link } from "react-router-dom";
import Header from "./Header";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";

function UserList() {
    const [userList, setUserData] = useState([]);
    const history = useHistory();
    useEffect( async()=>{
        // if(localStorage.getItem("userData")){
        //     history.push("/login")
        // }

        let result = await fetch("http://127.0.0.1:8000/api/users/");
        result = await result.json();
        setUserData(result.data);
    }, []);

    return (
        <div>
            <Header/>
            <div className="container-fluid">
            <h2>User List</h2>
            <br/>
            <Link to="addUser" className="btn btn-primary">Add User</Link>
            <br/><hr/>
            <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">User List</h3>
            </div>
            <div className="panel-body">
              <table className="table" id="adminList">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Created at</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
   {    
   userList.map((item)=>
   <tr>
        <td> {item.login_id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.registration_datetime}</td>
        <td><Link to="/profile/" className="btn btn-warning">View</Link> 
        </td>
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

export default UserList;