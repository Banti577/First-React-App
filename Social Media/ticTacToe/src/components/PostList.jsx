import PostCard from "./PostCard";
import { useContext } from "react";
//import { PostContext } from "../store/Context";
import { PostContext } from "../store/context";

const PostList = () => {

    const { posts } = useContext(PostContext);

    return (
        <>

            {posts.length > 0 ? (

                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            ) : (

                <h2>No Post Available</h2>
            )}


        </>
    )
}

export default PostList