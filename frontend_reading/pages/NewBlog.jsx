import { useState } from "react";

const NewBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://your-api-url/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      // Clear form after successful submission
      setFormData({ title: "", content: "" });
      alert("Post created successfully!");
    } catch (error) {
      alert("Error creating post: " + error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default NewBlog;
