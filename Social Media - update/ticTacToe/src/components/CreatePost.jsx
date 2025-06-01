import { PostContext } from '../store/Context';
import styles from './CreatePost.module.css';
import { useRef,useContext } from "react"; // ✅ Import useContext
//import { PostContext } from "../context/PostContext"; // Import the context
const CreatePost = () => {

  const { dispatch } = useContext(PostContext); // Get dispatch function from context

  const titleRef = useRef();
  const descriptionRef = useRef();
  const reactionsRef = useRef();
  const tagsRef = useRef(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const postData = {
      heading: titleRef.current.value,
      description: descriptionRef.current.value,
      reactions: reactionsRef.current.value,
      tags: tagsRef.current.value.split(',').map(tag => tag.trim()), // Convert to array
    };

     // Dispatch ADD_POST action
     dispatch({ type: "ADD_POST", payload: postData });

     console.log("added Successfull")

     // Reset form
     //setFormData({ heading: "", description: "", reactions: "", tags: "" });

    //console.log("Post Data:", postData);
    // You can now send postData to an API or handle it as needed
  };

  return (
    <>

<div className={styles.CreatePost}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">Post Title</label>
          <input ref={titleRef} type="text" className="form-control" id="Title" aria-describedby="TitleHelp" />
          <div id="TitleHelp" className="form-text">Enter Post Title Here.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input ref={descriptionRef} type="text" className="form-control" id="description" />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Reactions</label>
          <input ref={reactionsRef} type="text" className="form-control" id="reactions" />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags (comma-separated)</label>
          <input ref={tagsRef} type="text" className="form-control" id="tags" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>

    </>
  );
}

export default CreatePost