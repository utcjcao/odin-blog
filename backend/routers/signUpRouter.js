const { Router } = require("express");
const path = require("path");
const { getSignUp, postSignUp } = require("../controllers/userController");
const { authenticateToken } = require("../middleware/authenticateToken");

const signUpRouter = Router();

signUpRouter.get("", authenticateToken, async (req, res) => {
  // render signup page
  await getSignUp(req, res);
});

signUpRouter.post("", async (req, res) => {
  // signup account
  await postSignUp(req, res);
});

module.exports = { signUpRouter };
