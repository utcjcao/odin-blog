const { Router } = require("express");
const path = require("path");

const blogRouter = Router();

// /blogs/user GET user blogs
// /blogs GET all published blogs (paginated)

// for the write/edit/delete

// /blogs POST write blog page
// /blogs UPDATE edit blog page
// /blogs:id DELETE delete blog page

blogRouter.get("/user", async (req, res) => {
  // render user blogs
});

blogRouter.get("", async (req, res) => {
  // get paginated blogs
});

blogRouter.post("", async (req, res) => {
  // post a new blog
});

blogRouter.get("/:id", async (req, res) => {
  //visit specific blog
});

blogRouter.put("/:id", async (req, res) => {
  //update preexisitng blog with id
});

blogRouter.delete("/:id", async (req, res) => {
  // delete a specific blog with id
});

blogRouter.post("/comment/:id", async (req, res) => {
  // add comment to blog with id
});

module.exports = { blogRouter };
