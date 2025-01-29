import { useEffect, useState } from "react";
import { api } from "../api/blogApi";

const NewBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    id: -1,
    published: false,
  });
  useEffect(() => {
    const initializeBlog = async () => {
      const response = await api.createBlog();

      if (!response.ok) {
        throw new Error("Failed to create post");
      }
      setFormData((prev) => ({
        ...prev,
        id: response.id,
      }));
    };
    initializeBlog();
  }, []);

  const handlePublish = async (e) => {
    e.preventDefault();
    try {
      setFormData((prev) => ({
        ...prev,
        published: false,
      }));
      const response = await api.updateBlog(formData.id, formData);

      if (!response.ok) {
        throw new Error("Failed to update post");
      }

      alert("Post created successfully!");
    } catch (error) {
      alert("Error creating post: " + error.message);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setFormData((prev) => ({
        ...prev,
        published: false,
      }));
      const response = await api.updateBlog(formData.id, formData);

      if (!response.ok) {
        throw new Error("Failed to save post");
      }

      alert("Post saved successfully!");
    } catch (error) {
      alert("Error creating post: " + error.message);
    }
  };
  return (
    <div>
      <form>
        <div>
          <input
            id="title"
            type="text"
            placeholder="title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            required
          />
        </div>

        <div>
          <textarea
            id="content"
            placeholder="content"
            value={formData.content}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                content: e.target.value,
              }))
            }
            required
          />
        </div>

        <button onClick={handleSave}>Save Post</button>
        <button onClick={handlePublish}>Publish Post</button>
      </form>
    </div>
  );
};

export default NewBlog;
