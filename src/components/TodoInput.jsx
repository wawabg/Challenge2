import React,{ useState } from 'react'
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';
function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div >           <input
             
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" />
                
            <button onClick={()=>{
                       dispatch(  addTodo({
                        id: uuid(),//used to uniquely identify some object or entity on the Internet. D
                        name: name
                    }));
                        setName('');//?
                        }}
         
            >Add</button>
           
        </div>
    )
}

export default TodoInput
