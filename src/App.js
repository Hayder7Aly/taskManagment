
import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const [taskList, setTaskList] = useState([])
  

  const addTask = task => {
    setTaskList([...taskList, task])
  }


  const delTask = id => {
    console.log({id})
    const updateTaskList = taskList.filter((task , idx) => id !== idx)
    setTaskList(updateTaskList)
  }

  const onCompletedTask = id => {
    const updateTaskList = taskList.map((task,idx ) => {
        if(idx === id) {
          return {...task , completed : !task.completed}
        }
        return task

    })
    setTaskList(updateTaskList)

 
  }

  return (
    <>
      <div className='container'>

        {/* navbar  */}

        <div className='navbar'>
          <div className='logo'>
            <img src='funfox.jpeg' alt='funfox' />
          </div>
        </div>

        {/* main area  */}

        <div className='main'>

          <TaskForm addTask={addTask}/>
          <TaskList delTask={delTask} taskList={taskList} onCompletedTask={onCompletedTask}/>

        </div>
        


      </div>
    </>
  );
}

export default App;
