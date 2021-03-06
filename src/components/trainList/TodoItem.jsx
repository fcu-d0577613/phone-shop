import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from "../../redux/action"


function TodoItem({todo}) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
   const dispatch =useDispatch();
    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>

                <div className="col-8">
                    {editable ? 
                        <input type="text" className='form-control' value={name} onChange={ (e) => setName(e.target.value)}/>
                     :  <h4>{todo.name}</h4>}
                </div>

                <div className="col-4">
                    
                    <button className="btn btn-primary m-2"
                        onClick={() => {
                            dispatch(updateTodo({
                                ...todo,
                                name: name
                            }))
                            if(editable) {
                            setName(todo.name);   
                            }
                            setEditable(!editable);
                        

                        }}
                    >{editable?"Update":"Edit"}</button>

                    <button
                        onClick={() => dispatch(deleteTodo(todo.id))}
                        className="btn btn-danger m-2"
                    >Delete</button>
                </div>
                
            </div>
            <hr />
        </div>
    )
}

export default TodoItem