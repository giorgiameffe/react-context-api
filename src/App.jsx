// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Homepage
import Homepage from './pages/Homepage.jsx';
// About us
import AboutUs from './pages/AboutUs.jsx';
// Posts page
import PostsPage from './pages/PostsPage.jsx';
// Default Layout
import DefaultLayout from "./layouts/DefaultLayout.jsx";
// Single post
import SinglePost from "./pages/SinglePost.jsx";
// Not Found
import NotFound from "./pages/NotFound.jsx";
// importazione dei Provider per andare a wrappare i componenti che accederanno a questi contesti
import { PostsProvider } from "./contexts/PostsContext.jsx";
import { AlertProvider } from "./contexts/AlertContext.jsx";

function App() {

  return (
    <AlertProvider>
      <PostsProvider>
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
      </PostsProvider>
    </AlertProvider>

  )
}

export default App;
