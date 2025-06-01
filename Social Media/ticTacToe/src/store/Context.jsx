
import { createContext, useContext, useReducer } from "react";

// Create the Context
export const PostContext = createContext();

// Sample posts data
const initialPosts = [
  {
    id: 1,
    heading: "First Post",
    description: "This is the first post description.",
    reactions: 10,
    tags: ["React", "monajiji"],
  },
  {
    id: 2,
    heading: "माननीय केंद्रीय संचार व पूर्वोत्तर क्षेत्र विकास मंत्री श्रीमंत ज्योतिरादित्य सिंधिया जी",
    description: "आज भोपाल विमानतल पर माननीय केंद्रीय संचार व पूर्वोत्तर क्षेत्र विकास मंत्री श्रीमंत ज्योतिरादित्य सिंधिया जी का स्नेहपूर्ण स्वागत व अभिनन्दन कर उनका आत्मीय मार्गदर्शन प्राप्त किया।Jyotiraditya M Scindia",
    reactions: 25,
    tags: ["CSS", "HTML"],
  },
];

// Reducer function



// Reducer function
const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, { id: state.length + 1, ...action.payload }]; // ✅ Add unique ID

    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);

    case "UPDATE_POST":
      return state.map((post) =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );

    default:
      return state;
  }
};





// Provider Component
export const PostProvider = ({ children }) => {

  const [posts, dispatch] = useReducer(postReducer, initialPosts);

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};


