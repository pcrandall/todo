import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import './App.css';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component{
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
    console.log(id + ' id');
  }

  // Delete Todo
  delTodo = (id) => {
    console.log(id);
    // Return all the todos that do not match the id of the one passed into this function.
    // ... "spread operator" cant just change the array , use the spread operator to make a copy of it.  
    this.setState({ todos: [...this.state.todos.filter(todo => 
      todo.id !== id)]
    });
  }

  // Add Todo
  addTodo = (title) => {
    console.log(title);
    const newTodo = {
      id: uuid.v4(), 
      title, 
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] }) 
  }


  render(){
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
