import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {

    //main functionalities of the app. add a task , update a task , remove a task & complete a task

    const[todos,setTodos] = useState([])

    //following is to add a task 

    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos = [todo,...todos]

        setTodos(newTodos);
    }

    //following is to update a task

    const updateTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)){
        return;
      }

      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    //following is to delete or remove a task

    const removeTodo = id => {
      const removeArr =[...todos].filter(todo => todo.id !== id)

      setTodos(removeArr);
    }

    //following is to mark a task as completed

    const completeTodo = id => {
      let updatedTodos= todos.map(todo => {

        if( todo.id === id){
          todo.isComplete =!todo.isComplete;
        }
        
        return todo;
      });
      setTodos(updatedTodos);
    }

  return (
    <div>

      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo}/> 
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>

    </div>
  )
}

export default TodoList
