
import { useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useDispatch } from 'react-redux';
import { reterieveAllTasks } from './slices/taskSlice';

function App() {


  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(reterieveAllTasks())
    }, [dispatch])



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

          <TaskForm />
          <TaskList/>

        </div>
        


      </div>
    </>
  );
}

export default App;
