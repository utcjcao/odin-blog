import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/blogApi";

// main will display list of blogs that you can click on to access their individual blogs.

const Main = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getAllPublishedBlogs();
        setBlogs(data.blogs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const blogItems = blogs.map((blog) => (
    <li key={blog.id} onClick={() => navigate(`/blogs/${blog.id}`)}>
      {blog.title}
    </li>
  ));

  return (
    <div>
      <ul>{blogItems}</ul>
    </div>
  );
};

export default Main;
