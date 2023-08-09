import React, { useState } from 'react'

const TaskForm = ({addTask}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const onAddTask = () => { 
        if(title.trim() === "" || description === "") return ;
        addTask({title: title,description: description,completed:false})
        setTitle("")
        setDescription("")
    }


  return (

    <div className='form'>
        <div className='centric'>

        <h2 className='title'>ADD TASK</h2>
        <label htmlFor="title">*Title</label>
        <input type='text' id="title" name="title"  value={title} onChange={(e) => setTitle(e.target.value)}/>        
        <label htmlFor="Description">*Description</label>
        <textarea type='text' id="Description" name="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={onAddTask}>Save</button>
        </div>

    </div>
  )
}

export default TaskForm