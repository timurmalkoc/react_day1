import React, { useState } from 'react'

export default function CustomForm() {
    const [todos, setToDo] = useState([])

    function handleToDoClick(e){
      e.preventDefault();
      let todo = e.target.todo.value;
      let all = [...todos, todo]
      setToDo(all)
    }

    return(
        <>
        <form onSubmit={handleToDoClick}>
            <input type='test' className='form-control' name='todo'/>
            <input type='submit' value='add'/>
        </form>

        {<ol>
          {todos.map((n, i) => <li key={i}>{n}</li>)}
        </ol> }
        </>
    )
}