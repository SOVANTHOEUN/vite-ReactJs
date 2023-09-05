import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/sports">Sport</Link>
          </li>
          <li>
            <Link to="/listgroup">ListGroup</Link>
          </li>
          <li>
            <Link to="/todo">ToDo</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/unsplash">Unsplash</Link>
          </li>
          <li>
            <Link to="/youtubeapi">Embed-YouTube-Test-Commit</Link>
          </li>
          <li>
            <Link to="/favoritecolor">Favorit Color</Link>
          </li>

        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
