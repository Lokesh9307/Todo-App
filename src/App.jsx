import { useState, useEffect } from 'react'
import './App.css';
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import DateTimeComponent from './components/date';
import Heading from './components/Heading';
import PreLoader from './components/preloader';
import Footer from './components/Footer';
import './components/footer.css'



function App() {


  const getLocalItem = () => {
    const list = localStorage.getItem('lists');
    if (list) {
      return JSON.parse(list);
    } else {
      return []; // Return an empty array if 'lists' key is not found.
    }
  };

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(getLocalItem());
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState("");

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(taskList))
  }, [taskList])



  const addButton = () => {
    setTaskList([...taskList, task])
    setTask("")
  }

  const deleteItem = (id) => {
    setTaskList([...taskList].filter((ele, eleId) => eleId !== id))
  }

  const editItem = (id) => {
    const item = taskList.find((ele, eleId) => eleId === id)
    setEdit(!edit)
    setTask(item)
    setId(id)
  }

  const editUpdateButton = () => {
    const updatedTaskList = [...taskList];
    updatedTaskList[id] = task;
    setTaskList(updatedTaskList);
    setEdit(false);
    setTask("");
  };



  return (
    <>
      <PreLoader />

      <div className='overflow-x-hidden' style={{ height: '100vh', width: '100vw' }}>
        <div>
          <Heading />
        </div>
        <div className='flex justify-center items-center mt-20' >
          {edit ?
            <input placeholder='Edit Task' onChange={(e) => setTask(e.target.value)} value={task} />
            : <input placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} value={task} />

          }
          {edit ?
            <button className='AddBtn' onClick={editUpdateButton}>Update</button>
            : <button className='AddBtn' onClick={addButton}>Add</button>
          }
        </div>
        <h1 className='text-black font-bold sm:text-center listHeading '>To-Do List:</h1>
        <div className='card'>

          {
            taskList.map((item, index) => (
              <div className="notifications-container mt-3 display-flex flex-col">
                <div className="success">
                  <div className="flex">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="success-prompt-wrap">
                      <p className="success-prompt-heading">Task:</p>
                      <div className="success-prompt-prompt display-flex flex-col">
                        <p className='font-bolder'>{item}</p>
                      </div>
                      <div className="success-button-container">
                        <button type="button" className="success-button-main text-black" onClick={() => editItem(index)}>{<FaRegEdit />}</button>
                        <button type="button" className="success-button-secondary text-red-600" onClick={() => deleteItem(index)}>{<RiDeleteBin6Line />}</button>
                        <p className='date'>{<DateTimeComponent />}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="footer ">
            <Footer />
          </div>
      </div>
    </>
  )

}

export default App
