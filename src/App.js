
import { useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useDispatch } from 'react-redux';
import { reterieveAllTasks } from './slices/taskSlice';
import {motion} from "framer-motion"

function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(reterieveAllTasks());
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);


  return (
    <>
      <div className='container'>

        {/* navbar  */}

        <div className='navbar'>
          <motion.div className='logo'
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}>
            <img src='funfox.jpeg' alt='funfox' />
          </motion.div>
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
