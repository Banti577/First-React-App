import styles from './About.module.css';
import profilePic from '../assets/bantiphoto.png' 
const About = () => {
    return (
        <>
        <div className={styles.aboutContainer}>
           { <img src={profilePic} alt="Profile" className={styles.profilePic} /> }
            <h2 className={styles.heading}>About Me</h2>
            <p className={styles.description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt illo harum voluptate repudiandae atque? Et consequuntur quis aspernatur nulla dolorem enim debitis, eveniet fugit itaque quaerat assumenda rem eius, mollitia distinctio quisquam facere reiciendis! Iste deserunt et obcaecati soluta suscipit explicabo, enim saepe, recusandae consequuntur corrupti optio excepturi.
            </p>
        </div>
        </>
        
    );
};

export default About;
