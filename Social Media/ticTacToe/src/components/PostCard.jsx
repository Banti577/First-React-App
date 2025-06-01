import styles from './PostCard.module.css'
import { useContext } from "react"; 
//import { PostContext } from "../store/context"; //

const PostCard = ({ post }) => {

 // const { posts } = useContext(PostContext);

  return (
    <>

        <div key={post.id} className={`${styles.postCardContainer}`}>
          <div className="card" style={{ width: '30rem' }}>
            {/*<img src="" className="card-img-top" alt="..."/>*/}
            <div className="card-body">
              <h5 className="card-title">{post.heading}</h5>
              <p className="card-text">{post.description}</p>
              <a href="#" className="btn btn-primary">You Got {post.reactions} Likes</a>
            </div>
          </div>
        </div>

    </>
  );
}

export default PostCard;