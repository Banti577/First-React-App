//const { dispatch } = usePosts();

const addNewPost = () => {
  const newPost = {
    id: Date.now(),
    heading: "New Dynamic Post",
    description: "This is a newly added post.",
    reactions: 0,
    tags: ["JavaScript", "React"],
  };

  dispatch({ type: "ADD_POST", payload: newPost });
};
