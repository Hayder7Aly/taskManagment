import React from 'react'

const Task = ({title,description, completed ,id, delTask,onCompletedTask}) => {


  return (
    <div className='task'>

       <h3 className='title'>{title}</h3>
       <p className='description'>{description}</p>
       <div className='actionButton'>

       <button className='del' onClick={() => delTask(id) }>DEL</button>
       <button className={completed ? "completed" : "pending"} onClick={() => onCompletedTask(id)} >{completed ? "Complete" : "Incomplete"}</button>
       </div>


    </div>
  )
}

export default Task