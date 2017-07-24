import React from 'react';

function TodoItem({todo, remove, select, complete}){

  return(
    <li className="list-group-item list-group-item-action justify-content-between ">   

        <span  className= "align-middle"  onClick={()=>complete(todo)}>{todo.completed ? (<s>{todo.text}</s>) : todo.text }</span>

        <div>
          <button type="button" className="btn btn-sm btn-outline-info mr-2" data-toggle="modal" data-target="#myModal" onClick={()=>select(todo.id)} > 
            <i className="material-icons">edit</i> 
          </button>
      
          <button type="button" className="btn btn-sm btn-outline-danger " onClick={()=>remove(todo.id)}> 
            <i className="material-icons">clear</i> 
          </button>
        </div>
    </li>
  )
}

export default TodoItem;