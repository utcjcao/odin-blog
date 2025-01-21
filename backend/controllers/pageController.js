const { getBlog } = require("../db/queries");
const { getComments } = require("./commentController");

class pageController {
  constructor() {}
  getBlogPage = async (req, res) => {
    try {
      const blog = await getBlog(req, res);
      const comments = await getComments(req, res);

      return res.status(200).json({ blog: blog, comments, comments });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "An error occurred while loading this blog page." });
    }
  };
}

module.exports = new pageController();
