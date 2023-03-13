import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoAdded, todoRemoved } from './todoSlice'
const Todo = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>hello Raushan</h1>
      <div>
        {todos.todos.map(
          (todo)=>(
            <div key={todo.id}>
              <div>
                {todo.title}
              </div>
              <div>
                <button onClick={()=>dispatch(todoRemoved(todo.id))}>Delete Todo</button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Todo