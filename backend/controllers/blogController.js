const {
  getVisibleBlogs,
  getBlog,
  postBlogPost,
  editBlog,
  deleteBlog,
} = require("../db/queries");

class blogController {
  constructor() {}
  // get all blogs
  getAllPublishedBlogs = async (req, res) => {
    try {
      const blogs = await getVisibleBlogs();
      return res.status(200).json({ blogs: blogs });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred while fetching blogs." });
    }
  };

  // get specific blog with id
  getBlog = async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({
          message: "Invalid id.",
        });
      }
      const blog = await getBlog(id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found." });
      }
      return res.status(200).json({ blog: blog });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred while fetching blogs." });
    }
  };
  postNewBlog = async (req, res) => {
    try {
      if (!req.user || !req.user.username) {
        return res.status(401).json({ message: "Unauthorized access." });
      }
      const ownerUsername = req.user.username;
      const newBlogPost = await postBlogPost(
        ownerUsername,
        "new blog entry",
        "",
        false
      );
      return res.status(201).json({ redirect: `/${newBlogPost.id}` });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ message: "An error occurred while creating a new blog post." });
    }
  };

  putBlog = async (req, res) => {
    try {
      if (!req.user || !req.user.username) {
        return res.status(401).json({ message: "Unauthorized access." });
      }
      const blogId = req.params.id;
      if (!blogId) {
        return res.status(400).json({
          message: "Invalid id.",
        });
      }
      const existingBlog = await getBlog(blogId);
      if (!existingBlog) {
        return res.status(404).json({ message: "Blog not found." });
      }
      const { title, content, published } = req.body;
      await editBlog(existingBlog.id, title, content, published);
      // go back to main page when done
      return res.status(201).json({ redirect: "/" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occured trying to edit the blog." });
    }
  };
  deleteBlog = async (req, res) => {
    try {
      if (!req.user || !req.user.username) {
        return res.status(401).json({ message: "Unauthorized access." });
      }
      const blogId = req.params.id;
      if (!blogId) {
        return res.status(400).json({
          message: "Invalid id.",
        });
      }
      const blog = await getBlog(blogId);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found." });
      }
      await deleteBlog(blogId);
      // go back to main page when done
      return res.status(201).json({ redirect: "/" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occured trying to delete the blog." });
    }
  };
}

module.exports = new blogController();
