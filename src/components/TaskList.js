import React from 'react'
import Task from './Task'

const TaskList = ({taskList,onCompletedTask, delTask}) => {
  return (
    <div className='taskList'>
        <div className='centric'>

      {taskList.map((task,idx) => <Task key={idx} id={idx} title={task.title} description={task.description} completed={task.completed} onCompletedTask={onCompletedTask} delTask={delTask}/>)}
      </div>    

    </div>
  )
}

export default TaskList