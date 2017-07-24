import React, { Component } from 'react';
import {PropTypes as pt} from 'prop-types';
import TodoItem from './todoItem'

class TodoList extends Component {
    constructor(){
        super();
        this.state={searchTerm:''};
    }

    updateSearch(e){
        this.setState({searchTerm: e.target.value.substr(0, 20)})
    }

    render(){
        let todosFiltered = this.props.todos.filter(
            (todo)=>{
                return todo.text.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1 
            }
        );
       
        return(
            <div>
        
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">Search for...</span>
                        <input type="text" className="form-control" aria-describedby="basic-addon1"
                            value={this.state.searchTerm} 
                            onChange={this.updateSearch.bind(this)} 
                        />
                    </div>
                    <br/>


         
                <div className="list-group">
                    {
                        todosFiltered.map((todo)=>
                            <TodoItem  key={todo.id} todo={todo} remove={this.props.remove} select={this.props.select} complete={this.props.complete} />
                        )
                    }
                </div>
            </div>
        );
    }   
}

TodoList.propTypes = {
    todos: pt.array.isRequired,
    remove: pt.func.isRequired,
    select: pt.func.isRequired,
    complete: pt.func.isRequired

}

export default TodoList;
