import styles from "./PostCard.module.css";
import { useContext } from "react";
import { PostContext } from "../store/Context";

const PostCard = ({ post }) => {
  const { dispatch } = useContext(PostContext);

  return (
    <>
      <div key={post.id} className={`${styles.postCardContainer}`}>
        <div className="card" style={{ width: "30rem" }}>
          {/*<img src="" className="card-img-top" alt="..."/>*/}
          <div className="card-body">
            <h5 className="card-title">{post.heading}</h5>
            <p className="card-text">{post.description}</p>
            <a href="#" className="btn btn-primary">
              You Got {post.reactions} Likes
            </a>
            <button
              onClick={() => {
                console.log(post.id);
                dispatch({ type: "DELETE_POST", payload: post.id });
              }}
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
