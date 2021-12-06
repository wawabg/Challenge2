import addItem from '../actions/add-to-list'
import React, { useState,state } from 'react'    
import { Navigate } from 'react-router-dom';

import { useDispatch } from "react-redux";


function Bonjour(){
   let x=    localStorage.getItem('nom');
   let y=    localStorage.getItem('prenom');

/*
const mylist='aaa'
const handleSubmit=(e)=>{
    console.log(e.target.text.value)
    //dispatch(addItem(e.target.text.value))
    setState(e.target.text.value)
    
    dispatch(addItem(state))

}
*/
//dispatch(addItem(mylist))
let clicked=false;
return(
<>
    <div><h1>{x} {y}</h1></div>
    <button   
                onClick={()=>{
                    localStorage.clear();
                    clicked=true;
                    window.location.reload();

                      }
                    }
                    
                    
                className="btn btn-primary mx-2">Deconnexion</button>
{ clicked?  <Navigate to="/" /> :<Navigate to="/page1" />  }

</>
)
}

//<button onClick={()=>dispatch(addItem())} >add</button>
        


export default Bonjour  