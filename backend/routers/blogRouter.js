const { Router } = require("express");
const path = require("path");
const {
  getBlog,
  getAllPublishedBlogs,
  postNewBlog,
  putBlog,
  deleteBlog,
} = require("../controllers/blogController");
const {
  addNewComment,
  getComments,
} = require("../controllers/commentController");
const { postBlogPost } = require("../db/queries");
const { getBlogPage } = require("../controllers/pageController");

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
  await putBlog(req, res);
});

blogRouter.get("/:id", async (req, res) => {
  //visit specific blog
  await getBlogPage(req, res);
});

blogRouter.delete("/:id", async (req, res) => {
  // delete a specific blog with id
  await deleteBlog(req, res);
});

blogRouter.post("/comment/:id", async (req, res) => {
  // add comment to blog with id
  await addNewComment(req, res);
});

module.exports = { blogRouter };
