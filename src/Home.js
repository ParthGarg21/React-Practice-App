import { useEffect, useState } from "react";
import BlogList from "./BlogList";

function Home(props) {
  let blogs = props.blogs;
  let setBlogs = props.setBlogs;

  useEffect(function () {
    console.log("Page rendered");
  });

  function handleDelete(id) {
    setBlogs(
      blogs.filter(function (blog) {
        if (blog.id !== id) {
          return blog;
        } else {
          return false;
        }
      })
    );
  }

  return (
    <>
      {blogs.length !== 0 ? (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      ) : (
        <div className="blog-con">
          <h1 className="blog-category">No Blogs Available</h1>
        </div>
      )}
    </>
  );
}

export default Home;
