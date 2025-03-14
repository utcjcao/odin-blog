const { Router } = require("express");
const path = require("path");
const { getLoginPage, postLogin } = require("../controllers/userController");
const { authenticateToken } = require("../middleware/authenticateToken");

const logInRouter = Router();

logInRouter.get("", authenticateToken, async (req, res) => {
  // render login page
  await getLoginPage(req, res);
});

logInRouter.post("", async (req, res) => {
  // login account
  await postLogin(req, res);
});

module.exports = { logInRouter };
