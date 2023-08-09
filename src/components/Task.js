import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTaskApi, editTaskApi } from '../slices/taskSlice'


const Task = ({title,description, completed ,id}) => {

  const dispatch = useDispatch()


  return (

    <div className='task'>

       <h3 className='title'>{title}</h3>
       <p className='description'>{description}</p>
       <div className='actionButton'>

       <button className='del' onClick={() => dispatch(deleteTaskApi(id)) }>DEL</button>
       <button className={completed ? "completed" : "pending"} onClick={() => dispatch(editTaskApi({title,description,completed: !completed, id}))}>{completed ? "Complete" : "Incomplete"}</button>
       </div>


    </div>
  )
}

export default Task