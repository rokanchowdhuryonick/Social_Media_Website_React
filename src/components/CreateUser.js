import {useState} from 'react';
import { useParams } from "react-router";

const CreateUser = ({status, callback, list})=>{
    const {id:eid} = useParams();

    // const blankUser = {
    //     id: '', 
    //     name: '', 
    //     dept: ''
    // };
    const [newUserData, setNewUser] = useState({
        id: '', 
        name: '', 
        dept: ''
    });
    
    if(status === "edit"){
        const data = list.find((user)=> user.id === eid);
        console.log(data);
    } 
    const changeUserData = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setNewUser({...newUserData, [name] : value});
    }

    const formOnSubmit=(e)=>{
        e.preventDefault();
        if(status === 'add'){
            callback(newUserData);
            setNewUser({
                id: '', 
                name: '', 
                dept: ''
            });
          }
        }
    
    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form onSubmit={formOnSubmit}>
                Name: <input type='text' name='name' value={data} onChange={changeUserData} /> <br/>
                ID: <input type='text' name='id' value={fetchUserData.id} onChange={changeUserData} /><br/>
                Dept: <input type='text' name='dept' value={fetchUserData.dept} onChange={changeUserData} /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;