import { useParams } from "react-router-dom";

function Details({ blogs, title }) {
  const { id } = useParams();

  return (
    <>
      <div className="blog-con">
        <h1 className="blog-category">{title + " " + id}</h1>
        {blogs.map((blog) => {
          if (blog.id === Number(id)) {
            return (
              <>
                <div className="blog" key={blog.id}>
                  <h1 className="heading">{blog.title}</h1>
                  <p className="content">{blog.body}</p>
                  <span className="author">~ {blog.author}</span>
                </div>
              </>
            );
          } else {
            return false;
          }
        })}
      </div>
    </>
  );
}

export default Details;
