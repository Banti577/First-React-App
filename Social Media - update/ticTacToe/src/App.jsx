import { CgProfile } from "react-icons/cg";
import styles from './App.module.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import CreatePost from "./components/CreatePost";
import { useState } from "react";
import About from "./components/About";
import PostList from "./components/PostList";
import { PostProvider } from "./store/Context"; // ✅ Import PostProvider





function App() {
  const [selectedTab, setSelectedTab] = useState('Home');

  // Mapping of tabs to components
  const contentMap = {
    Home: <PostList />,
    'Create Post': <CreatePost />,
    About: <About />
  };


  return (
    <>
  <PostProvider>
    {
      <div className={`${styles.container}`}>

        <div className={`${styles.Main_container}`}>

          <Sidebar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

          <div className={`${styles.navContents}`}>


            <Header></Header>
            

            {contentMap[selectedTab]}

            <Footer></Footer>
          </div>

        </div>



      </div>
}
</PostProvider>

    </>
  )
}

export default App
