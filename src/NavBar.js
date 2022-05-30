import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="nav-bar">
        <span className="logo">The Daily Blog</span>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/new-blog" className="nav-link">
              New Blog
            </Link>
          </li>
          <li className="nav-item item2">
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

    </>
  );
}

export default NavBar;
