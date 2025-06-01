
import styles from './Buttons.module.css'


const Buttons = ({ buttonItems, onButtonClick }) => {


    const handleButton = (buttonText) => {

        //setInputValue(buttonText)

        onButtonClick(buttonText);
    }


    return (
        <>
            <div className={`${styles.buttons}`}>

                {
                    // <button className={`${styles.button}`}> {buttonItems} </button>
                    buttonItems.map(item => (
                        <>

                            <button className={`${styles.button}`} onClick={() => handleButton(item)} key={item} > {item} </button>

                        </>
                    ))}
            </div>
        </>
    );
}
export default Buttons;
