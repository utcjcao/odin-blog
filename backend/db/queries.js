const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getVisibleBlogs() {
  const blogs = await prisma.blogs.findMany({
    where: {
      published: true,
    },
  });
  return blogs;
}

async function getBlogsForUser(userId) {
  const blogs = await prisma.blogs.findMany({
    where: {
      id: userId,
    },
  });
  return blogs;
}

async function getBlog(blogId) {
  const blogs = await prisma.blogs.findFirst({
    where: {
      id: blogId,
    },
  });
  return blogs;
}

async function editBlog(blogId, title, content, published) {
  await prisma.blogs.update({
    where: {
      id: blogId,
    },
    data: {
      title: title,
      content: content,
      published: published,
      createdAt: new Date(),
    },
  });
}

async function deleteBlog(blogId) {
  await prisma.blogs.delete({
    where: {
      id: blogId,
    },
  });
}

async function postBlogPost(ownerUsername, title, content, published) {
  const newBlogPost = await prisma.blogs.create({
    data: {
      ownerUsername: ownerUsername,
      title: title,
      content: content,
      published: published,
    },
  });
  return newBlogPost;
}

async function postComment(blogId, ownerUsername, content) {
  await prisma.comments.create({
    data: {
      blogId: blogId,
      ownerUsername: ownerUsername,
      content: content,
    },
  });
}

async function getCommentsForBlog(blogId) {
  const comments = await prisma.comments.findMany({
    where: {
      blogId: blogId,
    },
  });
  return comments;
}

async function postUser(username, password, admin) {
  const user = await prisma.users.create({
    data: {
      username: username,
      password: password,
      admin: admin,
    },
  });
  return user;
}

async function getUser(username) {
  const user = await prisma.users.findFirst({
    where: {
      username: username,
    },
  });
  return user;
}

async function getUserById(id) {
  const user = await prisma.users.findFirst({
    where: {
      id: id,
    },
  });
  return user;
}

module.exports = {
  getVisibleBlogs,
  getBlogsForUser,
  getBlog,
  editBlog,
  deleteBlog,
  postBlogPost,
  postUser,
  getUser,
  getUserById,
  postComment,
  getCommentsForBlog,
};
