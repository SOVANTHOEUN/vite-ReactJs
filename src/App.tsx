import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Sport from "./pages/Sport";
import ListGroup from "./components/ListGroup";
import TodoComponent from "./memo/TodoComponent";
import UnsplashApi from "./SearchUnsplashImage/UnsplashApi";
import VideoEmbedApp from "./embed-youtube/VideoEmbedApp";
import FavoriteColor from "./pages/FavoriteColor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sports" element={<Sport />} />
          <Route path="listgroup" element={<ListGroup />} />
          <Route path="todo" element={<TodoComponent />} />
          <Route path="unsplash" element={<UnsplashApi />} />
          <Route path="youtubeapi" element={<VideoEmbedApp />} />
          <Route path="favoritecolor" element={<FavoriteColor />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
