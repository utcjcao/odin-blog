const { Router } = require("express");
const path = require("path");
const { postLogout } = require("../controllers/userController");
const { authenticateToken } = require("../middleware/authenticateToken");

const logOutRouter = Router();

logOutRouter.post("", authenticateToken, async (req, res) => {
  // logout account
  await postLogout(req, res);
});

module.exports = { logOutRouter };
