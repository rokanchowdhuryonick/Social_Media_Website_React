import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
function Logout() {
    const history = useHistory();
    useEffect( async()=>{
        // if(localStorage.getItem("userData")){
        //     history.push("/login")
        // }
        let result = await fetch("http://127.0.0.1:8000/api/logout");
        result = await result.json();
        if(result.success==true){
            localStorage.removeItem("userData");
            history.push("/login");
        }
    }, []);
    return (
      <div>

      </div>  
    );
}

export default Logout;