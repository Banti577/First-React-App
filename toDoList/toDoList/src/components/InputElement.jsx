import styles from './inputElement.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const inputElement = ({ addHandle }) => {

    const [task, setTask] = useState("");

    const [date, setDate] = useState("");

    const handleTaskChange = (e) => {

        setTask(e.target.value);

    }
    const handleDateChange = (e) => {
        setDate(e.target.value)

       
    }
    return (
        <>
            <div className={`${styles.inputsContainer}`}>
                <input className={`${styles.input}`} type="text" name="" id=""

                    onChange={handleTaskChange}
                />
                <input className={`${styles.input}`} type="date" name="" id=""
                    onChange={handleDateChange}

                />
                <button className="btn btn-primary" onClick={() => {
                    addHandle(task, date);
                }}>Add</button>

            </div>

        </>
    )
}

export default inputElement