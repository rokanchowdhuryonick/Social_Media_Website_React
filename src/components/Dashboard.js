import Header from "./Header";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
//import
function Dashboard() {
    const [userData, setUserData] = useState([]);
    const [noticeList, setNoticeData] = useState([]);
    useEffect( async()=>{
        // if(localStorage.getItem("userData")){
        //     history.push("/login")
        // }

        let userData = JSON.parse(localStorage.getItem("userData"));
        let result = await fetch("http://127.0.0.1:8000/api/adminData/"+userData.login_id);
        result = await result.json();
        setUserData(result.data.userData);
        setNoticeData(result.data.noticeList);
    }, []);

    


    return (
        <div>
        <Header/>
            <div className="container-fluid">
            <h2>Dashboard</h2>
            <br/>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Your Information</h3>
                </div>
                <div className="panel-body">
                    <br/>
                    <div className="row">
                        <div className="col-md-5">
                            <table className="table" width="50%">
                                <tr>
                                    <th>
                                        Name:
                                    </th>
                                    <td>
                                    {userData.name}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Email</th><td> {userData.email}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th><td> {userData.phone}</td>
                                </tr>
                                <tr>
                                    <th>User Type: </th><td><b> {userData.user_type}</b></td>
                                </tr>
                                <tr>
                                    <th>Last Login: </th><td> {userData.last_login_datetime}</td>
                                </tr>
                                {
                                    localStorage.getItem("userData")?
                                        <>
                                        <td colspan="2">
                                            <a href="/admin/update/">Edit Profile</a>
                                        </td>
                                        </>
                                        :
                                        <>
                                        </>
                                    
                                }
                                
                                
                
                            </table>
                        </div>
                        
                        <div className="col-md-2">
                            {/* @if (Session::get('user_type')=='admin') */}
                            <a className="btn btn-primary" href="">Export Users To CSV</a>
                            {/* @endif */}
                        </div>
                        <div className="col-md-5">
                            <h2>Notices</h2>
                            <table className="table" id="noticeList">
                                <thead>
                                    <tr><th>#</th><th>Title</th><th>Details</th><th>Date Time</th></tr>
                                </thead>
                                <tbody>
                                    {
                                        noticeList.map((item)=>

                                        <tr>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                { item.notice_title}
                                            </td>
                                            <td>
                                            { item.notice_text}
                                            </td>
                                            <td>
                                            { item.created_at}
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

        </div>
        </div>
        

    );
}

export default Dashboard;