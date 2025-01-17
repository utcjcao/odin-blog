const { getVisibleBlogs, getBlog, postBlogPost } = require("../db/queries");

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
        return res.status(404).json({
          message: "Missing blog post.",
        });
      }
      const blog = await getBlog(id);
      return res.status(200).json({ blog: blog });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred while fetching blogs." });
    }
  };
  postDraftBlog = async (req, res) => {
    const { ownerUsername, title, content } = req.body;
    postBlogPost(ownerUsername, title, content, false);
  };
  postPublishBlog = async (req, res) => {
    const { ownerUsername, title, content } = req.body;
    ownerUsername, title, content, true;
  };
  editBlog = async (req, res) => {};
  deleteBlog = async (req, res) => {};
}

module.exports = new blogController();
