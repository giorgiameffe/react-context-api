// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Homepage
import Homepage from './pages/Homepage.jsx';
// About us
import AboutUs from './pages/AboutUs.jsx';
// Posts list
import PostsPage from './pages/PostsPage.jsx';
// Default Layout
import DefaultLayout from "./layouts/DefaultLayout.jsx";
// Single post
import SinglePost from "./pages/SinglePost.jsx";
// Not Found
import NotFound from "./pages/NotFound.jsx";
// Posts Context
import PostsContext from "./contexts/PostsContext.jsx";
// Hooks
import { useState, useEffect } from "react";
// Axios
import axios from "axios";

function App() {

  const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';

  const [posts, setPosts] = useState([]);

  function getPosts() {
    axios.get(postsEndpoint)
      .then(res => {
        setPosts(res.data)
      })
      .catch(error => alert('Qualcosa è andato storto, riprova più tardi'))
  }

  useEffect(getPosts, []);

  return (

    <PostsContext.Provider value={{ posts, setPosts }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<SinglePost />} />
          </Route>
          {/* Rotta catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>
  )
}

export default App;
