import { Link } from "react-router-dom";

// needs to have links to main, draft blogs, write a blog, login, signup

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="header-list-item">
            <Link to="/blogs">main</Link>
          </li>

          <li className="header-list-item">
            <Link to="/blogs/user">drafts</Link>
          </li>
          <li className="header-list-item">
            <Link to="/blogs/new">new</Link>
          </li>
          <li className="header-list-item">
            <Link to="/login">login</Link>
          </li>
          <li className="header-list-item">
            <Link to="/signup">signup</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
