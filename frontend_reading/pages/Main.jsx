import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api/api";

// main will display list of blogs that you can click on to access their individual blogs.

const Main = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiFetch(`/blogs/`);
        setBlogs(data.blogs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const blogItems = blogs.map((blog) => (
    <ul key={blog.id} onClick={() => navigate(`/blogs/${blog.id}`)}>
      {blog.title}
    </ul>
  ));

  return (
    <div>
      <li>{blogItems}</li>
    </div>
  );
};

export default Main;
