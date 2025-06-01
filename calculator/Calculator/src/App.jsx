
import styles from './App.module.css'

import DisplayInput from './components/DisplayInput';
import Buttons from './components/Buttons';
import { useState } from 'react'

function App() {

  const buttonItems = [

    'c',
    '1',
    '2',

    '+',
    '3',
    '4',

    '-',
    '5',
    '6',

    '*',
    '7',
    '8',

    '/',
    '=',
    '9',

    '0',
    '.',



  ];

  const [inputValue, setInputValue] = useState(''); // Shared state for input value


  const onButtonClick = (buttonText) => {

    if (buttonText === 'c') {
      setInputValue('');
    } else if (buttonText === '=') {
      const result = eval(inputValue)
      setInputValue(result)
    }
    else {
      const newDisplayValue = inputValue + buttonText;
      setInputValue(newDisplayValue);
      //prevValue => prevValue + buttonText

    }
    //console.log(`jee me yaha hu ${buttonText}`)
  }

  return (
    <>


      <div className={`${styles.container}`}>

        <div className={`${styles.mainCalculator}`}>

          <h2>Calculator -- A Project</h2>
          <DisplayInput inputValue={inputValue} />
          <Buttons buttonItems={buttonItems} onButtonClick={onButtonClick}></Buttons>

        </div>
      </div>

    </>
  );
}

export default App
