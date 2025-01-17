const { getCommentsForBlog, postComment } = require("../db/queries");

class commentController {
  constructor() {}
  getComments = async (req, res) => {
    try {
      const id = req.params.id;
      const comments = await getCommentsForBlog(id);
      return res.status(200).json(comments);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred while fetching comments." });
    }
  };

  addNewComment = async (req, res) => {
    try {
      const id = req.params.id;
      const { ownerUsername, content } = req.body;

      if (!ownerUsername || !content) {
        return res.status(400).json({
          message: "Missing required fields.",
        });
      }

      const newComment = await postComment(id, ownerUsername, content);

      return res.status(201).json({
        message: "Comment added successfully.",
        comment: newComment,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred while adding the comment." });
    }
  };
}

module.exports = new commentController();
