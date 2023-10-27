import React, {useState,useEffect,useRef} from 'react'

function TodoForm(props) {

    //getting inputs

    const [input,setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect (() => {
        inputRef.current.focus()
    })

    //changing the input in update section

    const handleChange = e =>{
        setInput(e.target.value)
    }

    //submitting the input or updated input

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')

    } ;

  return (

    <div>

        {/**these arethe input fields and buttons for input & update tasks */}

        <form className='todo-form' onSubmit={handleSubmit}>

            {props.edit ? 
                (
                    <>
                        <input 
                        type='text' 
                        placeholder='Update task.' 
                        value={input} 
                        name='text' 
                        className='todo-input edit' 
                        onChange={handleChange} 
                        ref={inputRef}/>
                        <button className='todo-button edit'>Update</button>
                    </>
                )

                :  

                (
                    <>
                        <input type='text' 
                        placeholder='Add a task todo.' 
                        value={input} 
                        name='text' 
                        className='todo-input' 
                        onChange={handleChange} 
                        ref={inputRef}/>
                        <button className='todo-button'>Add Task</button>
                    </>
                 )
                }
            
        </form>
      
    </div>
  )
}

export default TodoForm
