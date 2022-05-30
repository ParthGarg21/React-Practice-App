import { Link } from "react-router-dom";

function BlogList({ blogs, title, handleDelete }) {
  console.log(blogs);

  return (
    <>
      <div className="blog-con">
        <h1 className="blog-category">{title}</h1>
        {blogs.map(function (blog) {
          return (
            <>
              <div className="blog" key={blog.id}>
                <h1 className="heading">{blog.title}</h1>
                <p className="content">
                  {blog.body.substr(0, 25)}
                  <Link className="blog-link" to={"/blogs/" + blog.id}>
                    ... Read More{" "}
                  </Link>
                </p>
                <span className="author">~ {blog.author}</span>
                <button
                  onClick={function () {
                    handleDelete(blog.id);
                  }}
                  className="btn post-btn"
                >
                  Delete
                </button>
              </div>
              <hr className="sep" />
            </>
          );
        })}
      </div>
    </>
  );
}

export default BlogList;
