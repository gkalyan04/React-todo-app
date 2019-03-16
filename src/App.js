import React, { Component } from 'react';
import Todos from './ToDos';
import AddTodo from './AddTodo'
import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { install } from '@material-ui/styles';
//import { makeStyles } from '@material-ui/styles';
import './App.css'




class App extends Component {
  
  state = {
    todos: [
      { id: 1, content: 'Buy some vegetables'},
      { id:2, content: 'Play PUBG'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !==id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos: todos
    })
  }
  
  render() {
    return (
      <div >
      <AppBar class="menu-item" position="static" color="primary" >
        <Toolbar>
          <Typography  variant="h6" color="inherit">
            To Do App
          </Typography>
        </Toolbar>
        
      </AppBar>
      <div className="todo-app container">
        <h1 className="center blue-text">Your Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>

      </div>
    </div>

      
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default App;