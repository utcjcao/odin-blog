const { Router } = require("express");
const path = require("path");
const {
  postDraftBlog,
  getBlog,
  postPublishBlog,
  getAllPublishedBlogs,
  postNewBlog,
  editBlog,
} = require("../controllers/blogController");
const {
  addNewComment,
  getComments,
} = require("../controllers/commentController");
const { postBlogPost } = require("../db/queries");

const blogRouter = Router();

// /blogs/user GET user blogs
// /blogs GET all published blogs

// for the write/edit/delete

// /blog/new GET new blog page
// /blogs POST write blog page
// /blogs:id UPDATE edit blog page
// /blogs:id DELETE delete blog page

blogRouter.get("", async (req, res) => {
  // get blogs
  await getAllPublishedBlogs(req, res);
});

// create new blog
blogRouter.post("/new", async (req, res) => {
  // create a new blog page
  await postNewBlog(req, res);
});

// can use this to either publish/draft a page
blogRouter.put("/:id", async (req, res) => {
  //update preexisitng blog with id
  await editBlog(req, res);
});

blogRouter.get("/:id", async (req, res) => {
  //visit specific blog
  const blog = await getBlog(req, res);
  const comments = await getComments(req, res);

  return res.status(200).json({ blog: blog, comments, comments });
});

blogRouter.delete("/:id", async (req, res) => {
  // delete a specific blog with id
});

blogRouter.post("/comment/:id", async (req, res) => {
  // add comment to blog with id
  await addNewComment(req.res);
});

module.exports = { blogRouter };
