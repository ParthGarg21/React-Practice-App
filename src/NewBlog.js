import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBlog({ blogs, setBlogs }) {
  let [newTitle, setNewTitle] = useState("");
  let [newContent, setNewContent] = useState("");
  let [newAuthor, setNewAuthor] = useState("");
  let nav = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (
      newTitle.length === 0 ||
      newAuthor.length === 0 ||
      newContent.length === 0
    ) {
      alert("None of the fields can be empty!");
      return;
    }
    let newBlog = {
      title: newTitle,
      body: newContent,
      author: newAuthor,
      id: blogs.length + 1,
    };

    const newBlogs = [...blogs];
    newBlogs.push(newBlog);

    setBlogs(newBlogs);
    nav("/");
  }

  return (
    <>
      <h1 className="blog-category">New Blog</h1>
      <div className="form-con">
        <form onSubmit={handleSubmit} action="" className="new-blog">
          <label className="input-heading" htmlFor="">
            Title :
          </label>
          <input
            value={newTitle}
            className="form-input"
            onChange={function (event) {
              setNewTitle(event.target.value);
            }}
            type="text"
          />

          <label className="input-heading" htmlFor="">
            Content :
          </label>
          <textarea
            value={newContent}
            className="form-input"
            onChange={function (event) {
              setNewContent(event.target.value);
            }}
          />

          <label className="input-heading" htmlFor="">
            Author :
          </label>
          <input
            value={newAuthor}
            className="form-input"
            type="text"
            onChange={function (event) {
              setNewAuthor(event.target.value);
            }}
          />

          <button className="form-btn btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default NewBlog;
