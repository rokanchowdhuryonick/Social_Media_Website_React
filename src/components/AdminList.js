import { Link } from "react-router-dom";
import Header from "./Header";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";

function AdminList() {
    const [adminList, setadminData] = useState([]);
    const history = useHistory();
    useEffect( async()=>{
        // if(localStorage.getItem("userData")){
        //     history.push("/login")
        // }

        let result = await fetch("http://127.0.0.1:8000/api/adminList/");
        result = await result.json();
        setadminData(result.data);
    }, []);

    return (
        <div>
            <Header/>
            <div className="container-fluid">
            <h2>Admin List</h2>
            <br/>
            <Link to="addAdmin" className="btn btn-primary">Add Admin</Link>
            <br/><hr/>
            <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Admins List</h3>
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
   adminList.map((item)=>
   <tr>
        <td> {item.login_id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.registration_datetime}</td>
        <td><a href="{{route('admin.update', ['id'=>$admin['login_id']])}}" className="btn btn-warning"><i className="fa fa-pencil"></i></a> <a href="{{route('admin.delete', ['id'=>$admin['login_id']])}}" className="btn btn-danger"><i className="fa fa-trash"></i></a>
        <a className="btn btn-info" href="{{route('admin.convertToUser',$admin['login_id'])}}">Convert To User</a>
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

export default AdminList;