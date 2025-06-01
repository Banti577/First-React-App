import styles from './App.module.css'
import InputElement from './components/InputElement'
import Elements from './components/Elements'
import { useState } from 'react'
//import addmusic from './assets/musicc'
import addMusic from './assets/musicc.wav';
import deleteMusic from './assets/musicdelete.wav';


function App() {

//const [elementValue, setElementValue] = useState(['mujhe khana banana hai', 'banti bhai']);
//const [dateValue, setDateValue] = useState(['3/43/4', '3/4/4']);

const [elementValueFinal, setElementValue] = useState([]);

const deleteHandle = (deleteItemValue) =>{


  const updatedItems = elementValueFinal.filter(item => item.name !== deleteItemValue);
  console.log(updatedItems)

  // Update state with the filtered array
  setElementValue(updatedItems);
  const audio = new Audio(deleteMusic);  // Use the imported sound file
  audio.play();
};

const addHandle = (task, date) =>{


  const newTask = { name: task, dueDate: date };

  // Add the new task to the existing state
  const newArray = [...elementValueFinal, newTask];

  // Update state
  setElementValue(newArray);
  const audio = new Audio(addMusic);  // Use the imported sound file
  audio.play();


};
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.mainToDoContainer}`}>
          <h1 className={`${styles.heading}`}>This is ToDo APP</h1>
          <InputElement addHandle = {addHandle}/>
          <Elements elementValueFinal = {elementValueFinal }  deleteHandle ={deleteHandle} />

        </div>



      </div>
    </>
  )
}

export default App
