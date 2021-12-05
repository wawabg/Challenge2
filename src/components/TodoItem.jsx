import React ,{useState}from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({todo}) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();
    return (
        
        <div className="row">
            <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
            <div>{editable ? <input type="text" 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />:<h4>{todo.name}</h4>}</div>
            <button onClick={()=>dispatch(deleteTodo(todo.id))}
            >delete</button>

            
             <button onClick={()=>{
                 console.log("update")
                dispatch(updateTodo({
                 ...todo,
                  name:name
                       })); 
   
                 if(editable){setName(todo.name)}
                           
                 setEditable(!editable)}}//editable :kaada tetbadal  
            >{editable?"Update":"Edit"}</button>

        </div>
    )
}

export default TodoItem

