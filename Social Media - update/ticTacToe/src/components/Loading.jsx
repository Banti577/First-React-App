import { FaSpinner } from "react-icons/fa";
import Styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className= {`${Styles.loadingContainer}`}>
      <FaSpinner className= {`${Styles.loadingIcon}`} />
    </div>
  );
};

export default Loading;
