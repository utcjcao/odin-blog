const { Router } = require("express");
const path = require("path");
const {
  getAllPublishedBlogs,
  postNewBlog,
  putBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { addNewComment } = require("../controllers/commentController");
const { postBlogPost } = require("../db/queries");
const { getBlogPage } = require("../controllers/pageController");
const { authenticateToken } = require("../middleware/authenticateToken");

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
blogRouter.post("/new", authenticateToken, async (req, res) => {
  // create a new blog page
  await postNewBlog(req, res);
});

// can use this to either publish/draft a page
blogRouter.put("/:id", authenticateToken, async (req, res) => {
  //update preexisitng blog with id
  await putBlog(req, res);
});

blogRouter.get("/:id", async (req, res) => {
  //visit specific blog
  await getBlogPage(req, res);
});

blogRouter.delete("/:id", authenticateToken, async (req, res) => {
  // delete a specific blog with id
  await deleteBlog(req, res);
});

blogRouter.post("/comment/:id", authenticateToken, async (req, res) => {
  // add comment to blog with id
  await addNewComment(req, res);
});

module.exports = { blogRouter };
