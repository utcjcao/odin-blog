import { useEffect, useState } from "react";
import { api } from "../api/blogApi";
import { useParams } from "react-router-dom";

// this will display an individual blog page

const Blog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({
    title: "",
    content: "",
    ownerUsername: "",
    createdAt: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getBlogById(id);
        setBlogData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <div>{blogData.title}</div>
      <div>{blogData.content}</div>
      <div>{blogData.ownerUsername}</div>
      <div>{blogData.createdAt}</div>
    </div>
  );
};

export default Blog;
