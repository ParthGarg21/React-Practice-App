import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="blog-con">
        <div className="blog-title">
          <h1>Page Not Found!</h1>
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
