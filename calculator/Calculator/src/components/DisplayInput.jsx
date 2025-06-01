
import styles from './DisplayInput.module.css'

const DisplayInput = ({inputValue}) => {

    return (
    <>

    <div className={`${styles.input}`}> 
        <input type="text" value={inputValue} readOnly/>
    </div>
    </>
    );
    
};
export default DisplayInput;