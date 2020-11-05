import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/index'
import './App.css';
import TodoForm from './TodoFrom'
import TodoList from './TodoList'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const add = (todoTitle) => {
    dispatch({ type: "SET_ADD_TODO", payload: todoTitle });
  }

  const clearTodo = () => {
    dispatch({ type: "SET_CLEAR_TODO" });
  }

  const toggleTodoCompleted = (id) => {
    dispatch({ type: "SET_TOGGLE_TODO" })
  }

// class methods to update state
    return (
        <div className="App">
              <h1>Todo App</h1>
              <TodoForm add={add} />
              <TodoList
                todos={state.todos}
                clearTodo={clearTodo}
                toggleTodoCompleted={toggleTodoCompleted}
              />
        </div>

    )
}


export default App;
