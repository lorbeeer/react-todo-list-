import React, { Component } from 'react';
import shortid from 'shortid';

import AddForm from './addForm';
import BtnGroup from './btnGroup';
import TodoList from './todoList';
import Modal from './modal2';



class App extends Component {
  constructor(props){
    super(props);
    this.state={todos:[], todosFiltered: [], showForm: false, selectedItem:0, filter: 'all', show: false};

  }

   handleShowModal(){

        this.setState({show: true},()=>{
            console.log(this.state.show);
        })
    }

   handleHideModal(){
        this.setState({show: false},()=>{
          console.log(this.state.show);
        })
    }

  loadStateFromStore(){
    let todos = JSON.parse(localStorage.getItem('todos'));
    this.setState({todos: todos});  
    this.setState({todosFiltered: todos},()=>{
          console.log(this.state.show);
        })
  }
  
  setFilter(str){
    this.setState({filter: str},()=>{
       this.applyFilter();
    });
  }

  applyFilter(){
    let todos= this.state.todos;
    let filtered=[];
    if (this.state.filter === 'complete'){
    filtered = todos.filter((i)=>{
      return i.completed === true
    })}
    else if (this.state.filter === 'incomplete'){
    filtered = todos.filter((i)=>{
      return i.completed === false
    })
    }else{
    filtered=todos;
    }
    this.setState({todosFiltered: filtered});
  }


  toggleForm(){
    this.setState((prevState)=>{
      return {showForm: !prevState.showForm}
    })
  }

  toggleComplete(todo){
    let todos = this.state.todos;
    let item = {id: todo.id, text:todo.text, completed: !todo.completed};
    let index = todos.findIndex((i)=>{
      return i.id === todo.id
    });
    let newTodos = todos.filter((i)=>{
       return i.id !== todo.id
    });
    newTodos.splice(index, 0, item);
    this.setState({todos:newTodos},()=>{
      this.applyFilter();
    });
    localStorage.setItem('todos', JSON.stringify(newTodos));
    
  }

  onSelect(id){
    console.log(id);
    let todos = this.state.todos;
    let item = todos.find((i)=>{return i.id === id});
    this.setState({selectedItem: item}, ()=>{
      this.handleShowModal();
    });
  }

  addTodo(text){
    let item = {id: shortid.generate(), text, completed: false};
    let todos = this.state.todos;
    let newTodos = todos.concat([item]);
    this.setState({todos: newTodos},()=>{
      this.applyFilter();
    });
    localStorage.setItem('todos', JSON.stringify(newTodos));
    this.toggleForm();
  }

  removeTodo(id){
    let todos = this.state.todos;
    let newTodos = todos.filter((todo)=>{
       return todo.id !== id
    });
    this.setState({todos:newTodos},()=>{
      this.applyFilter();
    });
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  editTodo(text){
    let todos = this.state.todos;
    let item = {id: this.state.selectedItem.id, text, completed: this.state.selectedItem.completed};
    let index = todos.findIndex((todo)=>{
      return todo.id === this.state.selectedItem.id
    });
    let newTodos = todos.filter((todo)=>{
       return todo.id !== this.state.selectedItem.id
    });
    newTodos.splice(index, 0, item);
    this.setState({todos:newTodos}, ()=>{
      this.applyFilter();
    });
    this.setState({selectedItem:0});
    localStorage.setItem('todos', JSON.stringify(newTodos));
    this.handleHideModal();
  }
  
  componentDidMount(){
      this.loadStateFromStore();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-42 col-12">
            <div className="card bg-faded">
              
              <div className="card-block text-center">
                  <h1 className="card-title">My todos</h1>
              </div>

              <div className="card-block">
                 <AddForm selectedItem={this.state.selectedItem} edit={this.editTodo.bind(this)} add={this.addTodo.bind(this)}/>
              </div>

               <div className="card-block">
                  <BtnGroup filter={this.state.filter} setFilter={this.setFilter.bind(this)}/>
              </div>

              <div className="card-block">
                        {this.state.todosFiltered && 
                          <TodoList 
                                todos={this.state.todosFiltered} 
                                select={this.onSelect.bind(this)} 
                                remove={this.removeTodo.bind(this)} 
                                complete={this.toggleComplete.bind(this)}
                                filter={this.state.filter}
                                />
                        }
               </div>
           
            </div>
          </div>
        </div>
        

        <Modal selectedItem={this.state.selectedItem} edit={this.editTodo.bind(this)}/>
      </div>
      
    );
  }
}

export default App;
