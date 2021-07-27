import {useState} from 'react';
import { useParams } from "react-router";

const CreateUser = ({status, callback, list})=>{
    const {id:eid} = useParams();

    let blankUser = {
        id: '', 
        name: '', 
        dept: ''
    };
    const [newUserData, setNewUser] = useState(blankUser);
    //let data;
    if(status === "edit"){
        // console.log(list);
        // console.log(eid);
        blankUser = list.find(({id})=> id==eid);
        console.log(blankUser);
        //setNewUser(blankUser);
        
    } 
    //console.log(data.name);
    const changeUserData = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setNewUser({...newUserData, [name] : value});
    }
//console.log(blankUser.name);
    const formOnSubmit=(event)=>{
        event.preventDefault();
        if(status === 'add'){
            callback(newUserData);
            setNewUser({
                id: '', 
                name: '', 
                dept: ''
            });
          }

          if(status === 'edit'){
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
                Name: <input type='text' name='name' defaultValue={blankUser.name} onChange={changeUserData} /> <br/>
                ID: <input type='text' name='id' defaultValue={blankUser.id} onChange={changeUserData} /><br/>
                Dept: <input type='text' name='dept' defaultValue={blankUser.dept} onChange={changeUserData} /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;