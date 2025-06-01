import { useContext } from "react";
import { PostContext } from "./PostProvider"; // ✅ Post Context import karein

const DeletePost = ({ postId }) => {
  const { dispatch } = useContext(PostContext); // ✅ Context se dispatch function lo

  const handleDelete = () => {
    dispatch({ type: "DELETE_POST", payload: postId }); // ✅ Reducer ko delete action bhej raha hai
  };

  return <button onClick={handleDelete}>🗑️ Delete</button>; // ✅ Delete button
};

export default DeletePost;
