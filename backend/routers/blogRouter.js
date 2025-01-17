const { Router } = require("express");
const path = require("path");
const {
  postDraftBlog,
  getBlog,
  postPublishBlog,
  getAllPublishedBlogs,
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
// /blogs UPDATE edit blog page
// /blogs:id DELETE delete blog page

blogRouter.get("", async (req, res) => {
  // get blogs
  await getAllPublishedBlogs(req, res);
});

blogRouter.post("", async (req, res) => {
  // draft/publish a new blog
  const publishing = req.body.publish;
  if (publishing) {
    await postPublishBlog(req, res);
  } else {
    await postDraftBlog(req, res);
  }
  return res.status(200).json({ redirect: "/" });
});

blogRouter.get("/:id", async (req, res) => {
  //visit specific blog
  const blog = await getBlog(req, res);
  const comments = await getComments(req, res);

  return res.status(200).json({ blog: blog, comments, comments });
});

blogRouter.put("/:id", async (req, res) => {
  //update preexisitng blog with id
});

blogRouter.delete("/:id", async (req, res) => {
  // delete a specific blog with id
});

blogRouter.post("/comment/:id", async (req, res) => {
  // add comment to blog with id
  await addNewComment(req.res);
});

module.exports = { blogRouter };
